import { CreditCard, Calendar, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function SubscriptionDraft1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Subscription Management</h1>
          <p className="text-slate-600">Manage your plans, billing, and payment methods</p>
        </div>

        {/* Current Plan Card */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">Professional Plan</CardTitle>
                <CardDescription>Your current subscription</CardDescription>
              </div>
              <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-600">
                  <TrendingUp className="size-4" />
                  <span className="text-sm">Monthly Cost</span>
                </div>
                <p className="text-3xl font-bold text-slate-900">$49.99</p>
                <p className="text-sm text-slate-500">Billed monthly</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="size-4" />
                  <span className="text-sm">Next Billing Date</span>
                </div>
                <p className="text-xl font-semibold text-slate-900">March 6, 2026</p>
                <p className="text-sm text-slate-500">Auto-renewal enabled</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle className="size-4" />
                  <span className="text-sm">Member Since</span>
                </div>
                <p className="text-xl font-semibold text-slate-900">Jan 15, 2025</p>
                <p className="text-sm text-slate-500">13 months</p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Plan Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Unlimited projects',
                  'Advanced analytics',
                  '100 GB storage',
                  'Priority support',
                  'Custom integrations',
                  'Team collaboration (up to 10 members)'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="default">Upgrade Plan</Button>
              <Button variant="outline">Change Plan</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Billing Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="size-5" />
                Payment Method
              </CardTitle>
              <CardDescription>Manage your payment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-900 text-white p-6 rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">CARD HOLDER</p>
                    <p className="font-semibold">John Smith</p>
                  </div>
                  <div className="text-xl font-bold">VISA</div>
                </div>
                <div>
                  <p className="text-lg tracking-wider">•••• •••• •••• 4242</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-400">EXPIRES</p>
                    <p className="text-sm">12/2028</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 hover:bg-green-500/30">Default</Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Update Card</Button>
                <Button variant="outline" className="flex-1">Add Card</Button>
              </div>
            </CardContent>
          </Card>

          {/* Billing History */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>Your billing history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: 'Feb 6, 2026', amount: '$49.99', status: 'Paid' },
                  { date: 'Jan 6, 2026', amount: '$49.99', status: 'Paid' },
                  { date: 'Dec 6, 2025', amount: '$49.99', status: 'Paid' },
                  { date: 'Nov 6, 2025', amount: '$49.99', status: 'Paid' }
                ].map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div>
                      <p className="font-medium text-slate-900">{invoice.date}</p>
                      <p className="text-sm text-slate-500">Professional Plan</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">{invoice.amount}</p>
                      <Badge variant="outline" className="text-xs">{invoice.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="w-full mt-4">View All Invoices</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
