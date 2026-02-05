import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, FolderOpen, LogOut, Settings, Users } from "lucide-react";
import { cn } from '@/app/components/ui/utils';

// The Figma export uses the special "figma:asset" scheme, which Vite can't resolve.
// Assets live in src/assets, so we import via a real path.
import logoRKC from '../../../assets/4eeb42365666e2aad88f332a0930461cd4eefe17.png';

export function AdminSidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/materias", label: "Matérias", icon: FileText },
    { href: "/admin/projetos", label: "Projetos", icon: FolderOpen },
    { href: "/admin/usuarios", label: "Usuários", icon: Users },
    { href: "/admin/configuracoes", label: "Configurações", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border hidden md:flex flex-col h-screen fixed left-0 top-0 z-40">
      <div className="p-6 border-b border-sidebar-border flex items-center gap-3">
        <img 
          src={logoRKC} 
          alt="Rede Kalunga Comunicações" 
          className="h-12 w-auto"
        />
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));
          
          return (
            <Link
              key={link.href}
              to={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>
    </aside>
  );
}