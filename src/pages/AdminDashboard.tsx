import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { resources } from '@/data/mock';
import AdminLayout from '@/components/AdminLayout';
import { FileText, FilePlus, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const published = resources.filter(r => r.status === 'published');
  const drafts = resources.filter(r => r.status === 'draft');

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Link to="/admin/content/new">
            <Button className="rounded-xl gap-2">
              <FilePlus className="h-4 w-4" /> Nuevo recurso
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{resources.length}</p>
                  <p className="text-xs text-muted-foreground">Total recursos</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-mint-light flex items-center justify-center">
                  <Eye className="h-6 w-6 text-mint" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{published.length}</p>
                  <p className="text-xs text-muted-foreground">Publicados</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-peach-light flex items-center justify-center">
                  <EyeOff className="h-6 w-6 text-peach" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{drafts.length}</p>
                  <p className="text-xs text-muted-foreground">Borradores</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent resources */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Recursos recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {resources.slice(0, 5).map(resource => (
                <div key={resource.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="text-sm font-medium">{resource.title}</p>
                    <p className="text-xs text-muted-foreground">{resource.category} · {resource.readTime} min</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    resource.status === 'published' ? 'bg-mint-light text-mint' : 'bg-peach-light text-peach'
                  }`}>
                    {resource.status === 'published' ? 'Publicado' : 'Borrador'}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
