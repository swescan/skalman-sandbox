import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { OrganizationSubscriptions } from './components/OrganizationSubscriptions';
import { InvoiceAddresses } from './components/InvoiceAddresses';
import { InvoiceHistory } from './components/InvoiceHistory';
import { VolumeDiscounts } from './components/VolumeDiscounts';
import { KickbackProgram } from './components/KickbackProgram';
import { UserProfile } from './components/UserProfile';
import { OrganizationProfile } from './components/OrganizationProfile';

export default function App() {
  const [activeModule, setActiveModule] = useState('billing');
  const [activeSubmenu, setActiveSubmenu] = useState('subscriptions');

  const handleNavigate = (module: string, submenu?: string) => {
    setActiveModule(module);
    if (submenu) {
      setActiveSubmenu(submenu);
    }
  };

  return (
    <div className="size-full flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeModule={activeModule} 
          activeSubmenu={activeSubmenu}
          onNavigate={handleNavigate}
        />
        <main className="flex-1 overflow-y-auto">
          {activeModule === 'billing' && activeSubmenu === 'subscriptions' && (
            <OrganizationSubscriptions />
          )}
          {activeModule === 'billing' && activeSubmenu === 'invoices' && (
            <InvoiceAddresses />
          )}
          {activeModule === 'billing' && activeSubmenu === 'history' && (
            <InvoiceHistory />
          )}
          {activeModule === 'billing' && activeSubmenu === 'volume-discounts' && (
            <VolumeDiscounts />
          )}
          {activeModule === 'billing' && activeSubmenu === 'kickback' && (
            <KickbackProgram />
          )}
          {activeModule === 'settings' && activeSubmenu === 'user-profile' && (
            <UserProfile />
          )}
          {activeModule === 'settings' && activeSubmenu === 'org-profile' && (
            <OrganizationProfile />
          )}
          {activeModule !== 'billing' && activeModule !== 'settings' && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {activeModule.charAt(0).toUpperCase() + activeModule.slice(1)} Module
                </h2>
                <p className="text-slate-600">This module is under development</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}