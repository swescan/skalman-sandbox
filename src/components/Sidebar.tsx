import { 
  LayoutDashboard, 
  Map, 
  Layers, 
  Users, 
  FileText, 
  Settings, 
  CreditCard, 
  BarChart3,
  Database,
  ChevronDown,
  Receipt,
  Gift,
  User,
  Building2
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface SidebarProps {
  activeModule?: string;
  activeSubmenu?: string;
  onNavigate?: (module: string, submenu?: string) => void;
}

export function Sidebar({ activeModule = 'billing', activeSubmenu, onNavigate }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>(['billing']);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const modules = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      id: 'sites',
      label: 'Sites',
      icon: Map,
    },
    {
      id: 'layers',
      label: 'Layer Management',
      icon: Layers,
    },
    {
      id: 'data',
      label: 'GIS Data',
      icon: Database,
    },
    {
      id: 'users',
      label: 'User Management',
      icon: Users,
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: FileText,
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
    },
    {
      id: 'billing',
      label: 'Account & Billing',
      icon: CreditCard,
      submenus: [
        { id: 'subscriptions', label: 'Usage Overview' },
        { id: 'invoices', label: 'Invoice Addresses' },
        { id: 'history', label: 'Invoice History' },
        { id: 'volume-discounts', label: 'Volume Discounts' },
        { id: 'kickback', label: 'Kickback Program' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      submenus: [
        { id: 'user-profile', label: 'User Profile' },
        { id: 'org-profile', label: 'Organization Profile' }
      ]
    }
  ];

  return (
    <aside className="w-56 border-r bg-slate-50 h-[calc(100vh-3.5rem)] overflow-y-auto">
      <nav className="p-2 space-y-0.5">
        {modules.map((module) => (
          <div key={module.id}>
            <Button
              variant={activeModule === module.id ? 'secondary' : 'ghost'}
              className={`w-full justify-start gap-2 h-8 text-sm ${
                activeModule === module.id ? 'bg-slate-200' : ''
              }`}
              onClick={() => {
                if (module.submenus) {
                  toggleModule(module.id);
                } else {
                  onNavigate?.(module.id);
                }
              }}
            >
              <module.icon className="size-3.5" />
              <span className="flex-1 text-left">{module.label}</span>
              {module.submenus && (
                <ChevronDown 
                  className={`size-3.5 transition-transform ${
                    expandedModules.includes(module.id) ? 'rotate-180' : ''
                  }`}
                />
              )}
            </Button>
            
            {module.submenus && expandedModules.includes(module.id) && (
              <div className="ml-6 mt-0.5 space-y-0.5">
                {module.submenus.map((submenu) => (
                  <Button
                    key={submenu.id}
                    variant="ghost"
                    className={`w-full justify-start text-xs h-7 ${
                      activeSubmenu === submenu.id 
                        ? 'bg-slate-200 font-medium' 
                        : 'text-slate-600'
                    }`}
                    onClick={() => onNavigate?.(module.id, submenu.id)}
                  >
                    {submenu.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}