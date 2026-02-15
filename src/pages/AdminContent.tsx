import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { resources as allResources } from '@/data/mock';
import AdminLayout from '@/components/AdminLayout';
import { FilePlus, Search, Eye, EyeOff, Pencil } from 'lucide-react';

const AdminContent = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');

  const filtered = allResources.filter(r => {
    const matchesFilter = filter === 'all' || r.status === filter;
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gestión de contenido</h1>
          <Link to="/admin/content/new">
            <Button className="rounded-xl gap-2">
              <FilePlus className="h-4 w-4" /> Nuevo
            </Button>
          </Link>
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar contenido..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10 rounded-xl"
            />
          </div>
          <div className="flex gap-1">
            {(['all', 'published', 'draft'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                  filter === f ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}
              >
                {f === 'all' ? 'Todos' : f === 'published' ? 'Publicados' : 'Borradores'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map(resource => (
            <Card key={resource.id} className="border-0 shadow-sm">
              <CardContent className="pt-4 pb-4 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm truncate">{resource.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs rounded-full">{resource.category}</Badge>
                    <span className="text-xs text-muted-foreground">{resource.readTime} min</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(resource.updatedAt).toLocaleDateString('es')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                    resource.status === 'published' ? 'bg-mint-light text-mint' : 'bg-peach-light text-peach'
                  }`}>
                    {resource.status === 'published' ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                    {resource.status === 'published' ? 'Publicado' : 'Borrador'}
                  </span>
                  <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No se encontró contenido.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminContent;
