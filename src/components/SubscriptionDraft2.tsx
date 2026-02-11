import { CreditCard, Download, AlertCircle, Settings, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';

export function SubscriptionDraft2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Account & Billing</h1>
              <p className="text-slate-600">Manage your subscription and billing preferences</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Settings className="size-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Subscription Overview */}
            <div className="border rounded-lg p-8 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-slate-900">Professional</h2>
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Active</Badge>
                  </div>
                  <p className="text-slate-600">Subscription ID: #SUB-2025-001234</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-slate-900">$49.99</p>
                  <p className="text-sm text-slate-500">per month</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 py-6 border-y">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Status</p>
                  <p className="font-semibold text-slate-900">Active</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Renewal Date</p>
                  <p className="font-semibold text-slate-900">Mar 6, 2026</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Billing Cycle</p>
                  <p className="font-semibold text-slate-900">Monthly</p>
                </div>
              </div>

              {/* Usage Metrics */}
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Usage This Month</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Storage</span>
                      <span className="font-medium text-slate-900">67 GB / 100 GB</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Team Members</span>
                      <span className="font-medium text-slate-900">7 / 10</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">API Calls</span>
                      <span className="font-medium text-slate-900">8,450 / 50,000</span>
                    </div>
                    <Progress value={17} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="gap-2">
                  Upgrade to Enterprise
                  <ArrowRight className="size-4" />
                </Button>
                <Button variant="outline">Manage Plan</Button>
              </div>
            </div>

            {/* Billing History Table */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-6 border-b bg-slate-50">
                <h2 className="font-semibold text-slate-900">Billing History</h2>
              </div>
              <div className="divide-y">
                {[
                  { id: 'INV-2026-02', date: 'Feb 6, 2026', description: 'Professional Plan - Monthly', amount: '$49.99', status: 'Paid' },
                  { id: 'INV-2026-01', date: 'Jan 6, 2026', description: 'Professional Plan - Monthly', amount: '$49.99', status: 'Paid' },
                  { id: 'INV-2025-12', date: 'Dec 6, 2025', description: 'Professional Plan - Monthly', amount: '$49.99', status: 'Paid' },
                  { id: 'INV-2025-11', date: 'Nov 6, 2025', description: 'Professional Plan - Monthly', amount: '$49.99', status: 'Paid' },
                  { id: 'INV-2025-10', date: 'Oct 6, 2025', description: 'Professional Plan - Monthly', amount: '$49.99', status: 'Paid' }
                ].map((invoice, index) => (
                  <div key={index} className="p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <p className="font-medium text-slate-900">{invoice.id}</p>
                          <Badge variant="outline" className="text-xs">{invoice.status}</Badge>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">{invoice.description}</p>
                        <p className="text-xs text-slate-500 mt-1">{invoice.date}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-semibold text-slate-900">{invoice.amount}</p>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Download className="size-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <CreditCard className="size-6 text-slate-400" />
                    <span className="text-sm font-semibold text-slate-900">VISA</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Card Number</p>
                    <p className="font-medium text-slate-900">•••• •••• •••• 4242</p>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-xs text-slate-500">EXPIRY</p>
                      <p className="text-sm font-medium text-slate-900">12/28</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">CARDHOLDER</p>
                      <p className="text-sm font-medium text-slate-900">John Smith</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Update Payment Method</Button>
              </CardContent>
            </Card>

            {/* Billing Address */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Billing Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-1">
                  <p className="font-medium text-slate-900">John Smith</p>
                  <p className="text-slate-600">123 Business Street</p>
                  <p className="text-slate-600">Suite 100</p>
                  <p className="text-slate-600">San Francisco, CA 94105</p>
                  <p className="text-slate-600">United States</p>
                </div>
                <Separator />
                <Button variant="outline" className="w-full">Edit Address</Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <AlertCircle className="size-4" />
                  Cancel Subscription
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Download className="size-4" />
                  Download All Invoices
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Settings className="size-4" />
                  Billing Preferences
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
