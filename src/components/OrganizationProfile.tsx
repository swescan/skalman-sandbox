import { Building2, MapPin, Mail, Phone, Globe, Users, CreditCard, Calendar, FileText, Shield, Edit2, X, Check, Plus, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';

export function OrganizationProfile() {
  const [isEditingGeneral, setIsEditingGeneral] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Organization Profile</h1>
              <p className="text-sm text-slate-600">Manage your organization settings and information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        {/* General Information */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Building2 className="size-4" />
                  General Information
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Organization details and registration information</CardDescription>
              </div>
              {!isEditingGeneral ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1.5 text-xs h-7"
                  onClick={() => setIsEditingGeneral(true)}
                >
                  <Edit2 className="size-3.5" />
                  Edit Details
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1.5 text-xs h-7"
                    onClick={() => setIsEditingGeneral(false)}
                  >
                    <X className="size-3.5" />
                    Cancel
                  </Button>
                  <Button 
                    size="sm" 
                    className="gap-1.5 text-xs h-7"
                    onClick={() => setIsEditingGeneral(false)}
                  >
                    <Check className="size-3.5" />
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!isEditingGeneral ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="size-20 rounded-lg bg-[#DC7023] text-white flex items-center justify-center text-2xl font-bold">
                      GS
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 text-lg">GeoSite Solutions Inc.</h3>
                      <p className="text-sm text-slate-600">Professional GIS & Mapping Platform</p>
                      <div className="flex gap-2 mt-2">
                        <Badge className="bg-green-600 hover:bg-green-700 text-[10px] h-4">Enterprise</Badge>
                        <Badge variant="outline" className="text-[10px] h-4">Verified</Badge>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] text-slate-500 mb-1">LEGAL ENTITY NAME</p>
                      <p className="text-sm text-slate-900">GeoSite Solutions Incorporated</p>
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-500 mb-1">INDUSTRY</p>
                      <p className="text-sm text-slate-900">Geographic Information Systems</p>
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-500 mb-1">COMPANY SIZE</p>
                      <p className="text-sm text-slate-900">250-500 employees</p>
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-500 mb-1">FOUNDED</p>
                      <p className="text-sm text-slate-900">2015</p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">ORGANIZATION ID</p>
                    <p className="text-sm font-mono text-slate-900">ORG-2023-00042</p>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">TAX ID / EIN</p>
                    <p className="text-sm font-mono text-slate-900">12-3456789</p>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">REGISTRATION NUMBER</p>
                    <p className="text-sm font-mono text-slate-900">C1234567</p>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">MEMBER SINCE</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="size-3.5 text-slate-400" />
                      <p className="text-sm text-slate-900">January 15, 2023</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">SUBSCRIPTION TIER</p>
                    <Badge className="bg-[#DC7023] hover:bg-[#DC7023]/90 text-[10px] h-4">Enterprise Plan</Badge>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">ACCOUNT STATUS</p>
                    <Badge className="bg-green-600 hover:bg-green-700 text-[10px] h-4">Active & Current</Badge>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="orgName" className="text-xs">Organization Name</Label>
                    <Input id="orgName" defaultValue="GeoSite Solutions Inc." className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="legalName" className="text-xs">Legal Entity Name</Label>
                    <Input id="legalName" defaultValue="GeoSite Solutions Incorporated" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-xs">Industry</Label>
                    <Input id="industry" defaultValue="Geographic Information Systems" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="companySize" className="text-xs">Company Size</Label>
                    <select id="companySize" className="w-full h-8 text-sm border border-slate-200 rounded px-2 mt-1">
                      <option>1-50 employees</option>
                      <option>51-250 employees</option>
                      <option selected>250-500 employees</option>
                      <option>500+ employees</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="taxId" className="text-xs">Tax ID / EIN</Label>
                    <Input id="taxId" defaultValue="12-3456789" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="regNumber" className="text-xs">Registration Number</Label>
                    <Input id="regNumber" defaultValue="C1234567" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="founded" className="text-xs">Founded Year</Label>
                    <Input id="founded" defaultValue="2015" className="mt-1 h-8 text-sm" />
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs text-blue-900">
                      <strong>Note:</strong> Changes to legal or tax information may require verification.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Mail className="size-4" />
                  Contact Information
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Primary contact details for your organization</CardDescription>
              </div>
              {!isEditingContact ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1.5 text-xs h-7"
                  onClick={() => setIsEditingContact(true)}
                >
                  <Edit2 className="size-3.5" />
                  Edit Contact
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1.5 text-xs h-7"
                    onClick={() => setIsEditingContact(false)}
                  >
                    <X className="size-3.5" />
                    Cancel
                  </Button>
                  <Button 
                    size="sm" 
                    className="gap-1.5 text-xs h-7"
                    onClick={() => setIsEditingContact(false)}
                  >
                    <Check className="size-3.5" />
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!isEditingContact ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">HEADQUARTERS ADDRESS</p>
                    <div className="flex items-start gap-2">
                      <MapPin className="size-3.5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-900">1234 Innovation Drive, Suite 500</p>
                        <p className="text-sm text-slate-900">San Francisco, CA 94107</p>
                        <p className="text-sm text-slate-900">United States</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">PRIMARY EMAIL</p>
                    <div className="flex items-center gap-2">
                      <Mail className="size-3.5 text-slate-400" />
                      <p className="text-sm text-slate-900">contact@geosite.com</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">BILLING EMAIL</p>
                    <div className="flex items-center gap-2">
                      <Mail className="size-3.5 text-slate-400" />
                      <p className="text-sm text-slate-900">billing@geosite.com</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">PHONE NUMBER</p>
                    <div className="flex items-center gap-2">
                      <Phone className="size-3.5 text-slate-400" />
                      <p className="text-sm text-slate-900">+1 (415) 555-0123</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">SUPPORT PHONE</p>
                    <div className="flex items-center gap-2">
                      <Phone className="size-3.5 text-slate-400" />
                      <p className="text-sm text-slate-900">+1 (415) 555-0199</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">WEBSITE</p>
                    <div className="flex items-center gap-2">
                      <Globe className="size-3.5 text-slate-400" />
                      <a href="#" className="text-sm text-[#DC7023] hover:underline">www.geosite.com</a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address1" className="text-xs">Street Address</Label>
                    <Input id="address1" defaultValue="1234 Innovation Drive, Suite 500" className="mt-1 h-8 text-sm" />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="city" className="text-xs">City</Label>
                      <Input id="city" defaultValue="San Francisco" className="mt-1 h-8 text-sm" />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-xs">State</Label>
                      <Input id="state" defaultValue="CA" className="mt-1 h-8 text-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="zip" className="text-xs">ZIP Code</Label>
                      <Input id="zip" defaultValue="94107" className="mt-1 h-8 text-sm" />
                    </div>
                    <div>
                      <Label htmlFor="country" className="text-xs">Country</Label>
                      <Input id="country" defaultValue="United States" className="mt-1 h-8 text-sm" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="primaryEmail" className="text-xs">Primary Email</Label>
                    <Input id="primaryEmail" type="email" defaultValue="contact@geosite.com" className="mt-1 h-8 text-sm" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="billingEmail" className="text-xs">Billing Email</Label>
                    <Input id="billingEmail" type="email" defaultValue="billing@geosite.com" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-xs">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (415) 555-0123" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="supportPhone" className="text-xs">Support Phone</Label>
                    <Input id="supportPhone" defaultValue="+1 (415) 555-0199" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="website" className="text-xs">Website</Label>
                    <Input id="website" defaultValue="www.geosite.com" className="mt-1 h-8 text-sm" />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Team Overview */}
          <Card className="border-slate-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Users className="size-4" />
                    Team Overview
                  </CardTitle>
                  <CardDescription className="text-xs mt-0.5">Active users and seat allocation</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs h-7">
                  <Plus className="size-3.5" />
                  Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <p className="text-[10px] text-slate-500 mb-1">TOTAL USERS</p>
                    <p className="text-2xl font-bold text-slate-900">147</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <p className="text-[10px] text-slate-500 mb-1">ACTIVE USERS</p>
                    <p className="text-2xl font-bold text-slate-900">142</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-[10px] text-slate-500 mb-2">USER BREAKDOWN</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-[#DC7023] hover:bg-[#DC7023]/90 text-[10px] h-4">Pro</Badge>
                        <span className="text-sm text-slate-900">Pro Users</span>
                      </div>
                      <span className="text-sm font-medium text-slate-900">87</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] h-4">Base</Badge>
                        <span className="text-sm text-slate-900">Base Users</span>
                      </div>
                      <span className="text-sm font-medium text-slate-900">55</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-purple-600 hover:bg-purple-700 text-[10px] h-4">Admin</Badge>
                        <span className="text-sm text-slate-900">Administrators</span>
                      </div>
                      <span className="text-sm font-medium text-slate-900">5</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-medium text-blue-900">Seat Utilization</p>
                    <p className="text-xs font-medium text-blue-900">94.7%</p>
                  </div>
                  <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: '94.7%' }}></div>
                  </div>
                  <p className="text-xs text-blue-700 mt-1">142 of 150 seats in use</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing Overview */}
          <Card className="border-slate-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <CreditCard className="size-4" />
                    Billing Overview
                  </CardTitle>
                  <CardDescription className="text-xs mt-0.5">Current billing status and spending</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs h-7">
                  View Details
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-[10px] text-slate-500 mb-1">THIS MONTH</p>
                    <p className="text-2xl font-bold text-slate-900">$6,247</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <p className="text-[10px] text-slate-500 mb-1">ANNUAL SPEND</p>
                    <p className="text-2xl font-bold text-slate-900">$74,964</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-[10px] text-slate-500 mb-2">SUBSCRIPTION BREAKDOWN</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded">
                      <span className="text-sm text-slate-900">User Subscriptions</span>
                      <span className="text-sm font-medium text-slate-900">$4,875/mo</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded">
                      <span className="text-sm text-slate-900">Site Modules</span>
                      <span className="text-sm font-medium text-slate-900">$1,248/mo</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded">
                      <span className="text-sm text-slate-900">Standards & Bundles</span>
                      <span className="text-sm font-medium text-slate-900">$124/mo</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] text-slate-500">NEXT INVOICE</p>
                    <p className="text-xs font-medium text-slate-900">March 1, 2026</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-900">Estimated Amount</span>
                      <span className="text-lg font-bold text-slate-900">$6,247</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API & Integrations */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Shield className="size-4" />
                  API Keys & Integrations
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Manage API access and third-party integrations</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-1.5 text-xs h-7">
                <Plus className="size-3.5" />
                New API Key
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Production API Key', created: 'Jan 15, 2023', lastUsed: '2 hours ago', status: 'active' },
                { name: 'Development API Key', created: 'Mar 8, 2024', lastUsed: '1 day ago', status: 'active' },
                { name: 'Legacy Integration', created: 'Jan 15, 2023', lastUsed: '45 days ago', status: 'inactive' }
              ].map((key, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium text-slate-900">{key.name}</p>
                      <Badge 
                        className={key.status === 'active' ? 'bg-green-600 hover:bg-green-700 text-[10px] h-4' : 'bg-slate-400 text-[10px] h-4'}
                      >
                        {key.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-600">
                      Created {key.created} • Last used {key.lastUsed}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <MoreVertical className="size-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Organization Activity */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="size-4" />
              Recent Organization Activity
            </CardTitle>
            <CardDescription className="text-xs mt-0.5">Recent changes and updates to your organization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { action: 'Added 3 new Pro users', user: 'Admin User', time: '2 hours ago', type: 'user' },
                { action: 'Updated billing information', user: 'Finance Manager', time: '1 day ago', type: 'billing' },
                { action: 'Renewed Enterprise subscription', user: 'System', time: '5 days ago', type: 'subscription' },
                { action: 'Changed organization address', user: 'Admin User', time: '12 days ago', type: 'settings' },
                { action: 'Generated new API key', user: 'Technical Lead', time: '18 days ago', type: 'security' }
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded">
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">{activity.action}</p>
                    <p className="text-xs text-slate-600">By {activity.user} • {activity.time}</p>
                  </div>
                  <Badge variant="outline" className="text-[10px] h-4">{activity.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
