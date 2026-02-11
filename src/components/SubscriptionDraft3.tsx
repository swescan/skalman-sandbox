import { CreditCard, TrendingUp, Calendar, Users, Database, Zap, ChevronRight, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function SubscriptionDraft3() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-8">
          <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/30">
            Active Subscription
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Plan
          </h1>
          <p className="text-slate-400 text-lg">Premium features for growing teams</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <TrendingUp className="size-5 text-green-400" />
                </div>
                <Badge variant="outline" className="text-xs border-green-500/50 text-green-400">+12%</Badge>
              </div>
              <p className="text-3xl font-bold text-white mb-1">$49.99</p>
              <p className="text-sm text-slate-400">Monthly Cost</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Calendar className="size-5 text-blue-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">Mar 6</p>
              <p className="text-sm text-slate-400">Next Billing</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Users className="size-5 text-purple-400" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">7/10</p>
              <p className="text-sm text-slate-400">Team Members</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Database className="size-5 text-orange-400" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">67 GB</p>
              <p className="text-sm text-slate-400">Storage Used</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="payment">Payment Method</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Plan Details */}
              <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">Current Plan Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { icon: Check, text: 'Unlimited projects', color: 'text-green-400' },
                    { icon: Check, text: 'Advanced analytics dashboard', color: 'text-green-400' },
                    { icon: Check, text: '100 GB cloud storage', color: 'text-green-400' },
                    { icon: Check, text: 'Priority 24/7 support', color: 'text-green-400' },
                    { icon: Check, text: 'Custom integrations & API', color: 'text-green-400' },
                    { icon: Check, text: 'Up to 10 team members', color: 'text-green-400' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 py-2">
                      <feature.icon className={`size-5 ${feature.color}`} />
                      <span className="text-slate-300">{feature.text}</span>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Upgrade to Enterprise
                      <ChevronRight className="size-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Subscription Timeline */}
              <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">Subscription Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="size-10 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                          <Check className="size-5 text-green-400" />
                        </div>
                        <div className="w-0.5 h-12 bg-slate-700 mt-2"></div>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="font-semibold text-white">Subscription Started</p>
                        <p className="text-sm text-slate-400">January 15, 2025</p>
                        <p className="text-xs text-slate-500 mt-1">Professional Plan activated</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="size-10 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                          <Zap className="size-5 text-blue-400" />
                        </div>
                        <div className="w-0.5 h-12 bg-slate-700 mt-2"></div>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="font-semibold text-white">Last Payment</p>
                        <p className="text-sm text-slate-400">February 6, 2026</p>
                        <p className="text-xs text-slate-500 mt-1">$49.99 processed successfully</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="size-10 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center">
                          <Calendar className="size-5 text-purple-400" />
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="font-semibold text-white">Next Renewal</p>
                        <p className="text-sm text-slate-400">March 6, 2026</p>
                        <p className="text-xs text-slate-500 mt-1">$49.99 will be charged</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Invoice History</CardTitle>
                  <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
                    Download All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: 'February 6, 2026', amount: '$49.99', invoice: 'INV-2026-02', status: 'Paid' },
                    { date: 'January 6, 2026', amount: '$49.99', invoice: 'INV-2026-01', status: 'Paid' },
                    { date: 'December 6, 2025', amount: '$49.99', invoice: 'INV-2025-12', status: 'Paid' },
                    { date: 'November 6, 2025', amount: '$49.99', invoice: 'INV-2025-11', status: 'Paid' },
                    { date: 'October 6, 2025', amount: '$49.99', invoice: 'INV-2025-10', status: 'Paid' }
                  ].map((invoice, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-slate-700 rounded-lg">
                          <CreditCard className="size-5 text-slate-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{invoice.invoice}</p>
                          <p className="text-sm text-slate-400">{invoice.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-green-500/50 text-green-400">
                          {invoice.status}
                        </Badge>
                        <p className="text-xl font-bold text-white">{invoice.amount}</p>
                        <Button variant="ghost" size="sm" className="hover:bg-slate-700">
                          <ChevronRight className="size-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">CARD HOLDER</p>
                        <p className="font-semibold text-white">John Smith</p>
                      </div>
                      <div className="text-xl font-bold text-white">VISA</div>
                    </div>
                    <div>
                      <p className="text-2xl tracking-widest text-white">•••• •••• •••• 4242</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-slate-500">EXPIRES</p>
                        <p className="text-white">12/2028</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/50">
                        Primary
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-slate-700 hover:bg-slate-800">
                      Update Card
                    </Button>
                    <Button variant="outline" className="flex-1 border-slate-700 hover:bg-slate-800">
                      Add New
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">Billing Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">BILLING NAME</p>
                      <p className="text-white">John Smith</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">ADDRESS</p>
                      <p className="text-white">123 Business Street, Suite 100</p>
                      <p className="text-white">San Francisco, CA 94105</p>
                      <p className="text-white">United States</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">EMAIL</p>
                      <p className="text-white">john.smith@company.com</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800">
                    Edit Billing Information
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
