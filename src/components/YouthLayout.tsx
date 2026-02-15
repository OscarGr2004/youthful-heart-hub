import { ReactNode } from 'react';
import MobileNav from '@/components/MobileNav';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, MessageCircle, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const desktopNavItems = [
  { to: '/home', icon: Home, label: 'Inicio' },
  { to: '/resources', icon: BookOpen, label: 'Recursos' },
  { to: '/chat', icon: MessageCircle, label: 'Chat' },
  { to: '/profile', icon: User, label: 'Perfil' },
];

const YouthLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop top nav */}
      <header className="hidden md:flex items-center justify-between px-8 py-4 border-b bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/home" className="flex items-center gap-2">
          <span className="text-2xl">🌱</span>
          <span className="font-bold text-lg font-[Quicksand]">SereniMente</span>
        </Link>
        <nav className="flex items-center gap-1">
          {desktopNavItems.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors',
                location.pathname.startsWith(to) ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="pb-20 md:pb-8">{children}</main>
      <MobileNav />
    </div>
  );
};

export default YouthLayout;
