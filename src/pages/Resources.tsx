import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { resources } from '@/data/mock';
import { ResourceCategory } from '@/types';
import YouthLayout from '@/components/YouthLayout';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const categories: { value: string; label: string; emoji: string }[] = [
  { value: 'all', label: 'Todos', emoji: '📚' },
  { value: 'ansiedad', label: 'Ansiedad', emoji: '😰' },
  { value: 'estres', label: 'Estrés', emoji: '🤯' },
  { value: 'autoestima', label: 'Autoestima', emoji: '💪' },
  { value: 'relaciones', label: 'Relaciones', emoji: '❤️' },
  { value: 'mindfulness', label: 'Mindfulness', emoji: '🧘' },
];

const Resources = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const published = resources.filter(r => r.status === 'published');
  const filtered = published.filter(r => {
    const matchesCategory = category === 'all' || r.category === category;
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <YouthLayout>
      <div className="max-w-2xl mx-auto px-4 pt-6 space-y-5">
        <h1 className="text-2xl font-bold">Recursos de apoyo</h1>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar recursos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10 rounded-xl"
          />
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                category === cat.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Resource list */}
        <div className="space-y-3">
          {filtered.map((resource, i) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/resources/${resource.id}`}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm leading-tight">{resource.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{resource.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs rounded-full">
                            {categories.find(c => c.value === resource.category)?.emoji} {resource.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{resource.readTime} min lectura</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No se encontraron recursos.</p>
          )}
        </div>
      </div>
    </YouthLayout>
  );
};

export default Resources;
