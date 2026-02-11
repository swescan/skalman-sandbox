import { User, Mail, Phone, MapPin, Building2, Calendar, Shield, Key, Bell, Globe, Save, Edit2, X, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';

export function UserProfile() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingSecurity, setIsEditingSecurity] = useState(false);
  const [isEditingPreferences, setIsEditingPreferences] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">User Profile</h1>
              <p className="text-sm text-slate-600">Manage your personal account settings and preferences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        {/* Profile Information */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  <User className="size-4" />
                  Profile Information
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Your personal details and contact information</CardDescription>
              </div>
              {!isEditingProfile ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1.5 text-xs h-7"
                  onClick={() => setIsEditingProfile(true)}
                >
                  <Edit2 className="size-3.5" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1.5 text-xs h-7"
                    onClick={() => setIsEditingProfile(false)}
                  >
                    <X className="size-3.5" />
                    Cancel
                  </Button>
                  <Button 
                    size="sm" 
                    className="gap-1.5 text-xs h-7"
                    onClick={() => setIsEditingProfile(false)}
                  >
                    <Check className="size-3.5" />
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!isEditingProfile ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="size-20 rounded-full bg-[#DC7023] text-white flex items-center justify-center text-2xl font-bold">
                      JD
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">John Doe</h3>
                      <p className="text-sm text-slate-600">Senior GIS Analyst</p>
                      <Badge className="mt-2 bg-green-600 hover:bg-green-700 text-[10px] h-4">Active</Badge>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] text-slate-500 mb-1">FULL NAME</p>
                      <p className="text-sm text-slate-900">John Michael Doe</p>
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-500 mb-1">EMAIL ADDRESS</p>
                      <div className="flex items-center gap-2">
                        <Mail className="size-3.5 text-slate-400" />
                        <p className="text-sm text-slate-900">john.doe@geosite.com</p>
                        <Badge variant="outline" className="text-[10px] h-4">Verified</Badge>
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-500 mb-1">PHONE NUMBER</p>
                      <div className="flex items-center gap-2">
                        <Phone className="size-3.5 text-slate-400" />
                        <p className="text-sm text-slate-900">+1 (415) 555-0198</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">ORGANIZATION</p>
                    <div className="flex items-center gap-2">
                      <Building2 className="size-3.5 text-slate-400" />
                      <p className="text-sm text-slate-900">GeoSite Solutions Inc.</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">DEPARTMENT</p>
                    <p className="text-sm text-slate-900">Analytics & Research</p>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">OFFICE LOCATION</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-3.5 text-slate-400" />
                      <p className="text-sm text-slate-900">San Francisco, CA</p>
                    </div>
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
                    <p className="text-[10px] text-slate-500 mb-1">USER ID</p>
                    <p className="text-sm font-mono text-slate-900">USR-2023-00147</p>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">ACCESS LEVEL</p>
                    <Badge className="bg-[#DC7023] hover:bg-[#DC7023]/90 text-[10px] h-4">Pro User</Badge>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Edit Form */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-xs">Full Name</Label>
                    <Input id="fullName" defaultValue="John Michael Doe" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-xs">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john.doe@geosite.com" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-xs">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (415) 555-0198" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="jobTitle" className="text-xs">Job Title</Label>
                    <Input id="jobTitle" defaultValue="Senior GIS Analyst" className="mt-1 h-8 text-sm" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="department" className="text-xs">Department</Label>
                    <Input id="department" defaultValue="Analytics & Research" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-xs">Office Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" className="mt-1 h-8 text-sm" />
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs text-blue-900">
                      <strong>Note:</strong> Changes to your email address will require verification before taking effect.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Security Settings */}
          <Card className="border-slate-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Shield className="size-4" />
                    Security Settings
                  </CardTitle>
                  <CardDescription className="text-xs mt-0.5">Password and authentication options</CardDescription>
                </div>
                {!isEditingSecurity ? (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1.5 text-xs h-7"
                    onClick={() => setIsEditingSecurity(true)}
                  >
                    <Edit2 className="size-3.5" />
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-1.5 text-xs h-7"
                      onClick={() => setIsEditingSecurity(false)}
                    >
                      <X className="size-3.5" />
                      Cancel
                    </Button>
                    <Button 
                      size="sm" 
                      className="gap-1.5 text-xs h-7"
                      onClick={() => setIsEditingSecurity(false)}
                    >
                      <Check className="size-3.5" />
                      Save
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {!isEditingSecurity ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-slate-500 mb-1">PASSWORD</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-900">••••••••••••</p>
                      <Button variant="ghost" size="sm" className="text-xs h-6">Change</Button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Last changed 45 days ago</p>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-[10px] text-slate-500 mb-2">TWO-FACTOR AUTHENTICATION</p>
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Key className="size-4 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-green-900">Enabled</p>
                          <p className="text-xs text-green-700">Using authenticator app</p>
                        </div>
                      </div>
                      <Badge className="bg-green-600 hover:bg-green-700 text-[10px] h-4">Active</Badge>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-[10px] text-slate-500 mb-2">ACTIVE SESSIONS</p>
                    <div className="space-y-2">
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-medium text-slate-900">Chrome on macOS</p>
                            <p className="text-xs text-slate-600">San Francisco, CA • Current session</p>
                          </div>
                          <Badge variant="outline" className="text-[10px] h-4">Active</Badge>
                        </div>
                      </div>
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-medium text-slate-900">Safari on iPhone</p>
                            <p className="text-xs text-slate-600">San Francisco, CA • 2 hours ago</p>
                          </div>
                          <Button variant="ghost" size="sm" className="text-xs h-5">Revoke</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword" className="text-xs">Current Password</Label>
                    <Input id="currentPassword" type="password" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="newPassword" className="text-xs">New Password</Label>
                    <Input id="newPassword" type="password" className="mt-1 h-8 text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword" className="text-xs">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" className="mt-1 h-8 text-sm" />
                  </div>

                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-xs text-yellow-900">
                      Password must be at least 12 characters and include uppercase, lowercase, numbers, and symbols.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="border-slate-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Bell className="size-4" />
                    Preferences
                  </CardTitle>
                  <CardDescription className="text-xs mt-0.5">Notification and display settings</CardDescription>
                </div>
                {!isEditingPreferences ? (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1.5 text-xs h-7"
                    onClick={() => setIsEditingPreferences(true)}
                  >
                    <Edit2 className="size-3.5" />
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-1.5 text-xs h-7"
                      onClick={() => setIsEditingPreferences(false)}
                    >
                      <X className="size-3.5" />
                      Cancel
                    </Button>
                    <Button 
                      size="sm" 
                      className="gap-1.5 text-xs h-7"
                      onClick={() => setIsEditingPreferences(false)}
                    >
                      <Check className="size-3.5" />
                      Save
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-slate-500 mb-2">EMAIL NOTIFICATIONS</p>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded cursor-pointer">
                      <div>
                        <p className="text-xs font-medium text-slate-900">Subscription Updates</p>
                        <p className="text-xs text-slate-600">Renewals and plan changes</p>
                      </div>
                      <input type="checkbox" defaultChecked className="size-4" />
                    </label>
                    <label className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded cursor-pointer">
                      <div>
                        <p className="text-xs font-medium text-slate-900">Invoice Notifications</p>
                        <p className="text-xs text-slate-600">New invoices and payment receipts</p>
                      </div>
                      <input type="checkbox" defaultChecked className="size-4" />
                    </label>
                    <label className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded cursor-pointer">
                      <div>
                        <p className="text-xs font-medium text-slate-900">System Updates</p>
                        <p className="text-xs text-slate-600">New features and maintenance</p>
                      </div>
                      <input type="checkbox" className="size-4" />
                    </label>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-[10px] text-slate-500 mb-2">DISPLAY SETTINGS</p>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="language" className="text-xs">Language</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <Globe className="size-3.5 text-slate-400" />
                        <select id="language" className="flex-1 h-8 text-sm border border-slate-200 rounded px-2">
                          <option>English (US)</option>
                          <option>English (UK)</option>
                          <option>Español</option>
                          <option>Deutsch</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timezone" className="text-xs">Time Zone</Label>
                      <select id="timezone" className="w-full h-8 text-sm border border-slate-200 rounded px-2 mt-1">
                        <option>Pacific Time (PT)</option>
                        <option>Mountain Time (MT)</option>
                        <option>Central Time (CT)</option>
                        <option>Eastern Time (ET)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="dateFormat" className="text-xs">Date Format</Label>
                      <select id="dateFormat" className="w-full h-8 text-sm border border-slate-200 rounded px-2 mt-1">
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Log */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Calendar className="size-4" />
              Recent Activity
            </CardTitle>
            <CardDescription className="text-xs mt-0.5">Your recent actions and changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { action: 'Logged in from Chrome on macOS', time: '2 hours ago', type: 'login' },
                { action: 'Updated profile information', time: '3 days ago', type: 'update' },
                { action: 'Changed password', time: '45 days ago', type: 'security' },
                { action: 'Enabled two-factor authentication', time: '67 days ago', type: 'security' },
                { action: 'Updated notification preferences', time: '89 days ago', type: 'update' }
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded">
                  <div>
                    <p className="text-sm text-slate-900">{activity.action}</p>
                    <p className="text-xs text-slate-600">{activity.time}</p>
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
