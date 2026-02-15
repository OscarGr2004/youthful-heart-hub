import { NavLink as RouterNavLink } from 'react-router-dom';
import { Home, BookOpen, MessageCircle, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/home', icon: Home, label: 'Inicio' },
  { to: '/resources', icon: BookOpen, label: 'Recursos' },
  { to: '/chat', icon: MessageCircle, label: 'Chat' },
  { to: '/profile', icon: User, label: 'Perfil' },
];

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <RouterNavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-xs transition-colors',
                isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
              )
            }
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </RouterNavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
