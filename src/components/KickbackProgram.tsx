import { DollarSign, Users, TrendingUp, Gift, Copy, Mail, Share2, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { useState } from 'react';

export function KickbackProgram() {
  const [copied, setCopied] = useState(false);
  const referralCode = 'GEOSITE-ORG-2847';
  const referralLink = 'https://geosite.com/signup?ref=GEOSITE-ORG-2847';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
  };

  // Mock data for referrals
  const referrals = [
    {
      organization: 'Urban Planning Associates',
      status: 'active',
      signupDate: '2026-01-15',
      monthlyValue: 450.00,
      kickbackRate: 0.15,
      totalEarned: 202.50,
      months: 3
    },
    {
      organization: 'Mountain View Engineering',
      status: 'active',
      signupDate: '2025-12-10',
      monthlyValue: 680.00,
      kickbackRate: 0.15,
      totalEarned: 306.00,
      months: 3
    },
    {
      organization: 'Coastal Development Corp',
      status: 'active',
      signupDate: '2025-11-22',
      monthlyValue: 320.00,
      kickbackRate: 0.15,
      totalEarned: 144.00,
      months: 3
    },
    {
      organization: 'Metro Infrastructure Group',
      status: 'active',
      signupDate: '2025-10-05',
      monthlyValue: 890.00,
      kickbackRate: 0.15,
      totalEarned: 534.00,
      months: 4
    },
    {
      organization: 'Green Valley Planners',
      status: 'pending',
      signupDate: '2026-02-01',
      monthlyValue: 210.00,
      kickbackRate: 0.15,
      totalEarned: 0,
      months: 0
    },
    {
      organization: 'Riverside Consultants',
      status: 'active',
      signupDate: '2025-09-18',
      monthlyValue: 540.00,
      kickbackRate: 0.15,
      totalEarned: 405.00,
      months: 5
    }
  ];

  const totalEarned = referrals.reduce((sum, ref) => sum + ref.totalEarned, 0);
  const monthlyRecurring = referrals
    .filter(ref => ref.status === 'active')
    .reduce((sum, ref) => sum + (ref.monthlyValue * ref.kickbackRate), 0);
  const activeReferrals = referrals.filter(ref => ref.status === 'active').length;
  const pendingReferrals = referrals.filter(ref => ref.status === 'pending').length;

  // Next tier calculation
  const currentTier = 'Silver';
  const nextTier = 'Gold';
  const referralsNeeded = 10;
  const currentReferrals = 6;
  const tierProgress = (currentReferrals / referralsNeeded) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Kickback Program</h1>
              <p className="text-sm text-slate-600">Earn rewards by referring organizations to our platform</p>
            </div>
            <Button className="gap-1.5 bg-[#DC7023] hover:bg-[#DC7023]/90">
              <Share2 className="size-3.5" />
              Share Referral Link
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="pt-5 pb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-emerald-100 rounded">
                  <DollarSign className="size-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Total Earned</p>
                  <p className="text-2xl font-bold text-slate-900">${totalEarned.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="pt-5 pb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-blue-100 rounded">
                  <TrendingUp className="size-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Monthly Recurring</p>
                  <p className="text-2xl font-bold text-slate-900">${monthlyRecurring.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="pt-5 pb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-purple-100 rounded">
                  <Users className="size-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Active Referrals</p>
                  <p className="text-2xl font-bold text-slate-900">{activeReferrals}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="pt-5 pb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-orange-100 rounded">
                  <Gift className="size-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Current Tier</p>
                  <p className="text-2xl font-bold text-slate-900">{currentTier}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Referral Code & Link */}
          <div className="lg:col-span-1">
            <Card className="border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Your Referral Code</CardTitle>
                <CardDescription className="text-xs">Share this code with other organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 bg-slate-100 rounded-md px-3 py-2 font-mono text-sm font-semibold text-slate-900">
                      {referralCode}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleCopyCode}
                      className="h-9 px-3"
                    >
                      <Copy className="size-3.5" />
                    </Button>
                  </div>
                  {copied && (
                    <p className="text-xs text-emerald-600 font-medium">Copied to clipboard!</p>
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-700 mb-2">Referral Link</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-100 rounded-md px-3 py-2 text-xs text-slate-700 truncate">
                      {referralLink}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleCopyLink}
                      className="h-9 px-3"
                    >
                      <Copy className="size-3.5" />
                    </Button>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <Button variant="outline" className="w-full gap-2" size="sm">
                    <Mail className="size-3.5" />
                    Send Email Invitation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tier Progress */}
            <Card className="border-slate-200 mt-4">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Tier Progress</CardTitle>
                <CardDescription className="text-xs">Unlock higher kickback rates with more referrals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-700">{currentReferrals} of {referralsNeeded} referrals</span>
                    <Badge className="bg-[#DC7023] hover:bg-[#DC7023]/90 text-[10px] h-5 px-2">{currentTier}</Badge>
                  </div>
                  <Progress value={tierProgress} className="h-2" />
                  <p className="text-xs text-slate-500 mt-2">
                    {referralsNeeded - currentReferrals} more referrals to reach {nextTier} (20% kickback)
                  </p>
                </div>

                <div className="pt-2 border-t space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">Bronze (0-2 referrals)</span>
                    <span className="font-semibold text-slate-700">10%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">Silver (3-9 referrals)</span>
                    <span className="font-semibold text-[#DC7023]">15%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">Gold (10-19 referrals)</span>
                    <span className="font-semibold text-slate-700">20%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">Platinum (20+ referrals)</span>
                    <span className="font-semibold text-slate-700">25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Referrals Table */}
          <div className="lg:col-span-2">
            <Card className="border-slate-200">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Building2 className="size-4" />
                      Your Referrals
                    </CardTitle>
                    <CardDescription className="text-xs mt-0.5">Organizations you've referred to our platform</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  {/* Table Header */}
                  <div className="bg-slate-50 border-b px-4 py-2.5 grid grid-cols-12 gap-3 text-xs font-semibold text-slate-600">
                    <div className="col-span-3">Organization</div>
                    <div className="col-span-2">Signup Date</div>
                    <div className="col-span-2 text-right">Monthly Value</div>
                    <div className="col-span-2 text-right">Your Kickback</div>
                    <div className="col-span-2 text-right">Total Earned</div>
                    <div className="col-span-1 text-center">Status</div>
                  </div>

                  {/* Table Rows */}
                  <div className="divide-y">
                    {referrals.map((referral, index) => (
                      <div key={index} className="px-4 py-2.5 grid grid-cols-12 gap-3 items-center hover:bg-slate-50 transition-colors text-xs">
                        <div className="col-span-3">
                          <p className="font-medium text-slate-900 truncate">{referral.organization}</p>
                        </div>
                        <div className="col-span-2 text-slate-600">
                          {new Date(referral.signupDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="col-span-2 text-right text-slate-700">
                          ${referral.monthlyValue.toFixed(2)}
                        </div>
                        <div className="col-span-2 text-right font-medium text-emerald-600">
                          ${(referral.monthlyValue * referral.kickbackRate).toFixed(2)}/mo
                        </div>
                        <div className="col-span-2 text-right font-semibold text-slate-900">
                          ${referral.totalEarned.toFixed(2)}
                        </div>
                        <div className="col-span-1 flex justify-center">
                          {referral.status === 'active' ? (
                            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] h-5 px-2">Active</Badge>
                          ) : (
                            <Badge className="bg-amber-500 hover:bg-amber-600 text-white text-[10px] h-5 px-2">Pending</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Footer */}
                  <div className="bg-emerald-50 border-t border-emerald-200 px-4 py-2.5 grid grid-cols-12 gap-3 text-xs font-semibold">
                    <div className="col-span-7 text-emerald-700">Total Earnings</div>
                    <div className="col-span-2 text-right text-emerald-700">${monthlyRecurring.toFixed(2)}/mo</div>
                    <div className="col-span-2 text-right text-emerald-700">${totalEarned.toFixed(2)}</div>
                    <div className="col-span-1"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How it works */}
            <Card className="border-slate-200 mt-4">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DC7023] text-white flex items-center justify-center font-semibold">1</div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Share your referral code</p>
                      <p>Send your unique referral code or link to other organizations that could benefit from our GIS platform.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DC7023] text-white flex items-center justify-center font-semibold">2</div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">They sign up and subscribe</p>
                      <p>When they create an account and start a paid subscription using your code, you'll earn a kickback.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DC7023] text-white flex items-center justify-center font-semibold">3</div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Earn recurring revenue</p>
                      <p>Get 15-25% of their monthly subscription fee as long as they remain a customer. The more you refer, the higher your kickback rate!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
