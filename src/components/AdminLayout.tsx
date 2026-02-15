import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const adminNavItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { to: '/admin/content', icon: FileText, label: 'Contenido' },
  { to: '/admin/settings', icon: Settings, label: 'Configuración' },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 border-r bg-sidebar p-4 gap-2 sticky top-0 h-screen">
        <div className="flex items-center gap-2 mb-6 px-2">
          <span className="text-2xl">🌱</span>
          <div>
            <span className="font-bold text-sm">SereniMente</span>
            <span className="block text-[10px] text-muted-foreground">Panel Admin</span>
          </div>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {adminNavItems.map(({ to, icon: Icon, label, exact }) => {
            const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors',
                  isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold' : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50'
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/home"
          className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Volver al inicio
        </Link>
      </aside>

      {/* Mobile admin header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌱</span>
            <span className="font-bold text-sm">Admin</span>
          </div>
          <Link to="/home" className="text-sm text-primary">Volver</Link>
        </div>
        <nav className="flex gap-1 px-4 pb-2">
          {adminNavItems.map(({ to, label, exact }) => {
            const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs transition-colors',
                  isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      <main className="flex-1 pt-24 md:pt-0">{children}</main>
    </div>
  );
};

export default AdminLayout;
