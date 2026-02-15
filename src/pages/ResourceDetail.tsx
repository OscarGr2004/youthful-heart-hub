import { useParams, Link } from 'react-router-dom';
import { resources } from '@/data/mock';
import YouthLayout from '@/components/YouthLayout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ResourceDetail = () => {
  const { id } = useParams();
  const resource = resources.find(r => r.id === id);

  if (!resource) {
    return (
      <YouthLayout>
        <div className="max-w-2xl mx-auto px-4 pt-6 text-center">
          <p className="text-muted-foreground">Recurso no encontrado.</p>
          <Link to="/resources"><Button variant="ghost" className="mt-4">Volver</Button></Link>
        </div>
      </YouthLayout>
    );
  }

  return (
    <YouthLayout>
      <div className="max-w-2xl mx-auto px-4 pt-6 space-y-4">
        <Link to="/resources">
          <Button variant="ghost" size="sm" className="gap-1 -ml-2">
            <ArrowLeft className="h-4 w-4" /> Volver
          </Button>
        </Link>

        <div>
          <Badge variant="secondary" className="rounded-full mb-2">{resource.category}</Badge>
          <h1 className="text-2xl font-bold leading-tight">{resource.title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <Clock className="h-4 w-4" />
            <span>{resource.readTime} min de lectura</span>
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          {resource.content.split('\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={i} className="text-lg font-bold mt-6 mb-2">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('- ')) {
              return <li key={i} className="text-muted-foreground ml-4">{paragraph.replace('- ', '')}</li>;
            }
            if (paragraph.match(/^\d\./)) {
              return <li key={i} className="text-muted-foreground ml-4">{paragraph}</li>;
            }
            if (paragraph.trim() === '') return null;
            return <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>;
          })}
        </div>
      </div>
    </YouthLayout>
  );
};

export default ResourceDetail;
