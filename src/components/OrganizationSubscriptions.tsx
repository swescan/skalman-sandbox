import { Users, Globe, Database, Printer, Code, Download, Upload, Calculator, BarChart3, Lightbulb, Plus, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { MoreVertical, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { MapPin, Building2, Mail, Phone, Box, Shield, Globe2 } from 'lucide-react';

// Helper function to generate mock users
const generateMockUsers = (proCount: number, baseCount: number, sitePrefix: string) => {
  const users = [];
  const firstNames = ['Sarah', 'John', 'Michael', 'Emily', 'David', 'Jessica', 'Robert', 'Jennifer', 'William', 'Lisa'];
  const lastNames = ['Chen', 'Martinez', 'Johnson', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];
  
  for (let i = 0; i < proCount; i++) {
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[(i + sitePrefix.length) % lastNames.length];
    users.push({ name: `${firstName} ${lastName}`, email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`, level: 'Pro' });
  }
  
  for (let i = 0; i < baseCount; i++) {
    const firstName = firstNames[(i + 5) % firstNames.length];
    const lastName = lastNames[(i + 3 + sitePrefix.length) % lastNames.length];
    users.push({ name: `${firstName} ${lastName}`, email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`, level: 'Base' });
  }
  
  return users;
};

export function OrganizationSubscriptions() {
  const [expandedSites, setExpandedSites] = useState<number[]>([]);

  const toggleSite = (index: number) => {
    setExpandedSites(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Usage Overview</h1>
            <p className="text-sm text-slate-600">Manage your user levels, site modules, and included standards</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="pt-5 pb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-blue-100 rounded">
                  <Users className="size-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Total Users</p>
                  <p className="text-2xl font-bold text-slate-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="pt-5 pb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-green-100 rounded">
                  <BarChart3 className="size-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Monthly Total</p>
                  <p className="text-2xl font-bold text-slate-900">$1,247</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="pt-5 pb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-purple-100 rounded">
                  <Box className="size-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Active Modules</p>
                  <p className="text-2xl font-bold text-slate-900">47</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="pt-5 pb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-orange-100 rounded">
                  <Database className="size-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Standards</p>
                  <p className="text-2xl font-bold text-slate-900">4</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SLA Costs */}
        <Card className="border-slate-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Shield className="size-4" />
                  SLA Costs
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Service Level Agreement subscriptions and support tiers</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="bg-slate-50 border-b px-4 py-2 grid grid-cols-12 gap-3 text-xs font-semibold text-slate-600">
                <div className="col-span-3">SLA Tier</div>
                <div className="col-span-2">Support Level</div>
                <div className="col-span-2">Response Time</div>
                <div className="col-span-2">Uptime Guarantee</div>
                <div className="col-span-2">Coverage</div>
                <div className="col-span-1 text-right">Monthly Cost</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y">
                {[
                  {
                    tier: 'Enterprise Premium SLA',
                    supportLevel: 'Priority Support',
                    responseTime: '< 1 hour',
                    uptime: '99.99%',
                    coverage: '24/7/365',
                    cost: 299.99,
                    status: 'active'
                  },
                  {
                    tier: 'Business SLA',
                    supportLevel: 'Standard Support',
                    responseTime: '< 4 hours',
                    uptime: '99.9%',
                    coverage: 'Business Hours',
                    cost: 149.99,
                    status: 'active'
                  },
                  {
                    tier: 'Development SLA',
                    supportLevel: 'Email Support',
                    responseTime: '< 24 hours',
                    uptime: '99.5%',
                    coverage: 'Business Hours',
                    cost: 49.99,
                    status: 'active'
                  }
                ].map((sla, index) => (
                  <div key={index} className="px-4 py-2.5 grid grid-cols-12 gap-3 items-center hover:bg-slate-50 transition-colors text-xs">
                    <div className="col-span-3">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-slate-900">{sla.tier}</p>
                        <Badge className="bg-green-600 hover:bg-green-700 text-[10px] h-4">{sla.status}</Badge>
                      </div>
                    </div>
                    <div className="col-span-2 text-slate-700">{sla.supportLevel}</div>
                    <div className="col-span-2 text-slate-700">{sla.responseTime}</div>
                    <div className="col-span-2 text-slate-700">{sla.uptime}</div>
                    <div className="col-span-2 text-slate-700">{sla.coverage}</div>
                    <div className="col-span-1 text-right font-semibold text-slate-900">${sla.cost.toFixed(2)}</div>
                  </div>
                ))}
              </div>

              {/* Summary Footer */}
              <div className="bg-slate-50 border-t px-4 py-2.5 grid grid-cols-12 gap-3 text-xs font-semibold">
                <div className="col-span-11 text-slate-700">Total SLA Costs (3 active)</div>
                <div className="col-span-1 text-right text-slate-900">$499.97</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Site Costs */}
        <Card className="border-slate-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Box className="size-4" />
                  Site Costs
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">User assignments, modules, and standards per site</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="bg-slate-50 border-b px-4 py-2 grid grid-cols-11 gap-3 text-xs font-semibold text-slate-600">
                <div className="col-span-2">Site Name</div>
                <div className="col-span-1">Location</div>
                <div className="col-span-6">Active Modules</div>
                <div className="col-span-1 text-right">Monthly Cost</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y">
                {[
                  {
                    name: 'Downtown HQ Campus',
                    location: 'San Francisco, CA',
                    modules: ['Print', 'Export', 'Import', 'Dashboard', 'Insights', 'Database'],
                    costs: { print: 9.99, export: 14.99, import: 14.99, dashboard: 12.99, insights: 17.99, database: 29.99 },
                    users: { pro: 3, base: 2 },
                    standards: ['Environmental Standards', 'Infrastructure Standards'],
                    wms: [
                      { name: 'Aerial Imagery WMS', requests: 125000, cost: 89.99 },
                      { name: 'Topographic Maps WMS', requests: 78000, cost: 64.99 }
                    ],
                    invoiceAddress: {
                      name: 'Headquarters',
                      organization: 'GeoSite Solutions Inc.',
                      address: '1234 Innovation Drive, Suite 500',
                      city: 'San Francisco, CA 94107',
                      country: 'United States',
                      email: 'billing@geosite.com',
                      phone: '+1 415 555-0123',
                      taxId: '12-3456789'
                    }
                  },
                  {
                    name: 'North Bay Facility',
                    location: 'Oakland, CA',
                    modules: ['API', 'Export', 'Dashboard', 'Database'],
                    costs: { api: 24.99, export: 14.99, dashboard: 12.99, database: 29.99 },
                    users: { pro: 1, base: 2 },
                    standards: ['Environmental Standards'],
                    wms: [
                      { name: 'Satellite Imagery WMS', requests: 56000, cost: 44.99 }
                    ],
                    invoiceAddress: {
                      name: 'Headquarters',
                      organization: 'GeoSite Solutions Inc.',
                      address: '1234 Innovation Drive, Suite 500',
                      city: 'San Francisco, CA 94107',
                      country: 'United States',
                      email: 'billing@geosite.com',
                      phone: '+1 415 555-0123',
                      taxId: '12-3456789'
                    }
                  },
                  {
                    name: 'East Coast Operations',
                    location: 'New York, NY',
                    modules: ['Print', 'API', 'Export', 'Import', 'Calculation', 'Dashboard', 'Insights'],
                    costs: { print: 9.99, api: 24.99, export: 14.99, import: 14.99, calculation: 19.99, dashboard: 12.99, insights: 17.99 },
                    users: { pro: 2, base: 1 },
                    standards: ['Infrastructure Standards', 'Planning & Zoning'],
                    invoiceAddress: {
                      name: 'East Coast Office',
                      organization: 'GeoSite Solutions Inc.',
                      address: '789 Business Park, Floor 12',
                      city: 'New York, NY 10001',
                      country: 'United States',
                      email: 'ny@geosite.com',
                      phone: '+1 212 555-0456',
                      taxId: '12-3456789'
                    }
                  },
                  {
                    name: 'Boston Research Center',
                    location: 'Boston, MA',
                    modules: ['API', 'Export', 'Calculation', 'Dashboard', 'Database'],
                    costs: { api: 24.99, export: 14.99, calculation: 19.99, dashboard: 12.99, database: 29.99 },
                    users: { pro: 2, base: 0 },
                    standards: ['Environmental Standards', 'Asset Management'],
                    invoiceAddress: {
                      name: 'East Coast Office',
                      organization: 'GeoSite Solutions Inc.',
                      address: '789 Business Park, Floor 12',
                      city: 'New York, NY 10001',
                      country: 'United States',
                      email: 'ny@geosite.com',
                      phone: '+1 212 555-0456',
                      taxId: '12-3456789'
                    }
                  },
                  {
                    name: 'Chicago Distribution',
                    location: 'Chicago, IL',
                    modules: ['Print', 'Export', 'Dashboard'],
                    costs: { print: 9.99, export: 14.99, dashboard: 12.99 },
                    users: { pro: 0, base: 2 },
                    standards: ['Infrastructure Standards'],
                    invoiceAddress: {
                      name: 'Headquarters',
                      organization: 'GeoSite Solutions Inc.',
                      address: '1234 Innovation Drive, Suite 500',
                      city: 'San Francisco, CA 94107',
                      country: 'United States',
                      email: 'billing@geosite.com',
                      phone: '+1 415 555-0123',
                      taxId: '12-3456789'
                    }
                  }
                ].map((site, index) => {
                  const totalCost = Object.values(site.costs).reduce((sum, cost) => sum + cost, 0);
                  const standardsCost = site.standards.reduce((sum, standard) => {
                    const prices: { [key: string]: number } = {
                      'Environmental Standards': 49.99,
                      'Infrastructure Standards': 59.99,
                      'Planning & Zoning': 44.99,
                      'Asset Management': 54.99
                    };
                    return sum + (prices[standard] || 0);
                  }, 0);
                  const usersCost = (site.users.pro * 29.99) + (site.users.base * 14.99);
                  const wmsCost = site.wms ? site.wms.reduce((sum, wms) => sum + wms.cost, 0) : 0;
                  const isExpanded = expandedSites.includes(index);
                  const userList = generateMockUsers(site.users.pro, site.users.base, site.name);
                  
                  return (
                    <div key={index} className={isExpanded ? 'bg-orange-50/30 border-l-4 border-l-[#DC7023]' : ''}>
                      {/* Main Row */}
                      <div 
                        className={`px-4 py-2.5 grid grid-cols-11 gap-3 items-center transition-all text-xs cursor-pointer ${
                          isExpanded 
                            ? 'bg-orange-50/50 hover:bg-orange-50/70' 
                            : 'hover:bg-slate-50'
                        }`}
                        onClick={() => toggleSite(index)}
                      >
                        <div className="col-span-2 flex items-center gap-2">
                          <ChevronDown 
                            className={`size-3.5 transition-transform ${
                              isExpanded ? 'rotate-180 text-[#DC7023]' : 'text-slate-400'
                            }`}
                          />
                          <p className={`font-semibold truncate ${
                            isExpanded ? 'text-[#DC7023]' : 'text-slate-900'
                          }`}>{site.name}</p>
                        </div>
                        <div className="col-span-1 text-slate-600 truncate">
                          {site.location}
                        </div>
                        <div className="col-span-6">
                          <div className="flex flex-wrap gap-1">
                            {site.modules.map((module, idx) => (
                              <Badge 
                                key={idx} 
                                variant="secondary" 
                                className="text-[10px] h-5 px-1.5 bg-slate-100 hover:bg-slate-200"
                              >
                                {module}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-1 text-right font-semibold text-slate-900">
                          ${totalCost.toFixed(2)}
                        </div>
                        <div className="col-span-1 text-right">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-6 w-6 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <MoreVertical className="size-3.5" />
                          </Button>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="px-6 py-5 bg-gradient-to-r from-orange-50/60 to-orange-50/30 border-t border-t-[#DC7023]/20">
                          <div className="space-y-5">
                            {/* Overview Section */}
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                                  <Globe className="size-3.5" />
                                  Site Overview
                                </h4>
                                <Button variant="outline" size="sm" className="text-xs h-7 px-3">Edit Site</Button>
                              </div>
                              <div className="grid grid-cols-4 gap-3">
                                <div className="bg-white rounded-lg border border-slate-200 p-3 shadow-sm">
                                  <p className="text-[10px] text-slate-500 mb-1">Users Cost</p>
                                  <p className="text-sm font-semibold text-[#DC7023]">${usersCost.toFixed(2)}</p>
                                </div>
                                <div className="bg-white rounded-lg border border-slate-200 p-3 shadow-sm">
                                  <p className="text-[10px] text-slate-500 mb-1">Modules Cost</p>
                                  <p className="text-sm font-semibold text-[#DC7023]">${totalCost.toFixed(2)}</p>
                                </div>
                                <div className="bg-white rounded-lg border border-slate-200 p-3 shadow-sm">
                                  <p className="text-[10px] text-slate-500 mb-1">Standards Cost</p>
                                  <p className="text-sm font-semibold text-[#DC7023]">${standardsCost.toFixed(2)}</p>
                                </div>
                                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200 p-3 shadow-sm">
                                  <p className="text-[10px] text-emerald-700 font-medium mb-1">Total Site Cost</p>
                                  <p className="text-base font-bold text-emerald-700">${(totalCost + standardsCost + usersCost + wmsCost).toFixed(2)}</p>
                                </div>
                              </div>
                            </div>

                            {/* Users Section */}
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                                  <Users className="size-3.5" />
                                  Assigned Users (${usersCost.toFixed(2)}/mo)
                                </h4>
                              </div>
                              <div className="bg-white rounded-md border border-slate-200 p-2">
                                {userList.length > 0 ? (
                                  <div className="space-y-0.5">
                                    {userList.map((user, idx) => (
                                      <div key={idx} className="px-3 py-1 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors rounded">
                                        <p className="text-xs font-medium text-slate-900 min-w-[120px]">{user.name}</p>
                                        <p className="text-[10px] text-slate-500 flex-1 truncate">{user.email}</p>
                                        <Badge className={user.level === 'Pro' ? 'bg-[#DC7023] hover:bg-[#DC7023]/90 text-[10px] h-4 px-2' : 'bg-slate-500 text-white hover:bg-slate-600 text-[10px] h-4 px-2'}>
                                          {user.level}
                                        </Badge>
                                        <span className="text-xs font-semibold text-slate-700 min-w-[60px] text-right">${user.level === 'Pro' ? '29.99' : '14.99'}/mo</span>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="px-3 py-4 text-center text-xs text-slate-500">
                                    No users assigned to this site
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Site Modules Section */}
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                                  <Box className="size-3.5" />
                                  Site Modules (${totalCost.toFixed(2)}/mo)
                                </h4>
                              </div>
                              <div className="bg-white rounded-md border border-slate-200 p-2">
                                <div className="space-y-0.5">
                                  {Object.entries(site.costs).map(([module, cost], idx) => {
                                    const moduleIcons: { [key: string]: any } = {
                                      print: Printer,
                                      api: Code,
                                      export: Download,
                                      import: Upload,
                                      calculation: Calculator,
                                      dashboard: BarChart3,
                                      insights: Lightbulb,
                                      database: Database
                                    };
                                    const ModuleIcon = moduleIcons[module] || Settings;
                                    const moduleNames: { [key: string]: string } = {
                                      print: 'Print',
                                      api: 'API',
                                      export: 'Export',
                                      import: 'Import',
                                      calculation: 'Calculation',
                                      dashboard: 'Dashboard',
                                      insights: 'Insights',
                                      database: 'Database'
                                    };

                                    return (
                                      <div key={idx} className="px-3 py-1 flex items-center justify-between hover:bg-slate-50 transition-colors rounded">
                                        <div className="flex items-center gap-2">
                                          <div className="p-1 bg-blue-100 rounded">
                                            <ModuleIcon className="size-3 text-blue-600" />
                                          </div>
                                          <span className="text-xs font-medium text-slate-900">{moduleNames[module]}</span>
                                        </div>
                                        <span className="text-xs font-semibold text-slate-700 min-w-[60px] text-right">${cost}/mo</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>

                            {/* Standards Section */}
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                                  <Database className="size-3.5" />
                                  Included Standards (${standardsCost.toFixed(2)}/mo)
                                </h4>
                              </div>
                              <div className="bg-white rounded-md border border-slate-200 p-2">
                                <div className="space-y-0.5">
                                  {site.standards.map((standard, idx) => {
                                    const standardsInfo: { [key: string]: { layers: number; price: number; description: string } } = {
                                      'Environmental Standards': { layers: 12, price: 49.99, description: 'Environmental monitoring' },
                                      'Infrastructure Standards': { layers: 18, price: 59.99, description: 'Infrastructure mapping' },
                                      'Planning & Zoning': { layers: 10, price: 44.99, description: 'Zoning regulations' },
                                      'Asset Management': { layers: 15, price: 54.99, description: 'Asset tracking' }
                                    };
                                    const info = standardsInfo[standard];

                                    return (
                                      <div key={idx} className="px-3 py-1 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors rounded">
                                        <p className="text-xs font-medium text-slate-900 min-w-[160px]">{standard}</p>
                                        <Badge variant="outline" className="text-[10px] h-4 px-1.5">{info.layers} layers</Badge>
                                        <p className="text-[10px] text-slate-500 flex-1">{info.description}</p>
                                        <span className="text-xs font-semibold text-slate-700 min-w-[60px] text-right">${info.price}/mo</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>

                            {/* WMS Section */}
                            {site.wms && (
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                                    <Globe2 className="size-3.5" />
                                    WMS Requests (${site.wms.reduce((sum, wms) => sum + wms.cost, 0).toFixed(2)}/mo)
                                  </h4>
                                </div>
                                <div className="bg-white rounded-md border border-slate-200 p-2">
                                  <div className="space-y-0.5">
                                    {site.wms.map((wms, idx) => (
                                      <div key={idx} className="px-3 py-1 flex items-center justify-between hover:bg-slate-50 transition-colors rounded">
                                        <p className="text-xs font-medium text-slate-900 min-w-[160px]">{wms.name}</p>
                                        <Badge variant="outline" className="text-[10px] h-4 px-1.5">{wms.requests} requests</Badge>
                                        <span className="text-xs font-semibold text-slate-700 min-w-[60px] text-right">${wms.cost}/mo</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Site Invoice Address Section */}
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                                  <MapPin className="size-3.5" />
                                  Site Invoice Address
                                </h4>
                                <Button variant="outline" size="sm" className="text-xs h-6 px-2">Change Address</Button>
                              </div>
                              <div className="bg-white rounded-md border border-slate-200 p-2">
                                <div className="px-3 py-2 flex items-center gap-4">
                                  <div className="flex items-center gap-2 min-w-[140px]">
                                    <div className="p-1 bg-blue-100 rounded">
                                      <Building2 className="size-3 text-blue-600" />
                                    </div>
                                    <div>
                                      <p className="text-xs font-semibold text-slate-900">{site.invoiceAddress.name}</p>
                                      <p className="text-[10px] text-slate-500">{site.invoiceAddress.organization}</p>
                                    </div>
                                  </div>
                                  <div className="flex-1 flex items-center gap-4 text-[10px] text-slate-600">
                                    <div className="flex items-center gap-1">
                                      <MapPin className="size-3 text-slate-400" />
                                      <span>{site.invoiceAddress.address}, {site.invoiceAddress.city}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Mail className="size-3 text-slate-400" />
                                      <span>{site.invoiceAddress.email}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Phone className="size-3 text-slate-400" />
                                      <span>{site.invoiceAddress.phone}</span>
                                    </div>
                                  </div>
                                  <Badge variant="outline" className="text-[10px] h-4 px-1.5">Tax ID: {site.invoiceAddress.taxId}</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}</div>

              {/* Summary Footer */}
              <div className="bg-slate-50 border-t px-4 py-2.5 grid grid-cols-11 gap-3 text-xs font-semibold">
                <div className="col-span-9 text-slate-700">Total (5 sites shown)</div>
                <div className="col-span-1 text-right text-slate-700">24</div>
                <div className="col-span-1 text-right text-slate-900">$370.82</div>
                <div className="col-span-1"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}