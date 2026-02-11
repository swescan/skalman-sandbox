import { MapPin, CreditCard, Plus, MoreVertical, Building2, Edit, Trash2, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function InvoiceAddresses() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openLinkedSitesModal, setOpenLinkedSitesModal] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const handleOpenEdit = (addressName: string) => {
    setSelectedAddress(addressName);
    setOpenEditModal(true);
  };

  const handleOpenLinkedSites = (addressName: string) => {
    setSelectedAddress(addressName);
    setOpenLinkedSitesModal(true);
  };

  const handleOpenRemove = (addressName: string) => {
    setSelectedAddress(addressName);
    setOpenRemoveModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Invoice Addresses & Payment Locations</h1>
              <p className="text-sm text-slate-600">Manage billing addresses and payment methods for your organization</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1.5 text-xs h-7">
                <MapPin className="size-3.5" />
                Add Invoice Address
              </Button>
              <Button size="sm" className="gap-1.5">
                <CreditCard className="size-3.5" />
                Add Payment Method
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        {/* Physical Addresses */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  <MapPin className="size-4" />
                  Invoice Addresses
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Physical billing addresses for invoicing</CardDescription>
              </div>
              <Badge variant="secondary" className="text-[10px] h-5">3 Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Address 1 - Primary */}
            <div className="border rounded-lg p-4 hover:border-[#DC7023] transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-900">GeoTech Solutions HQ</h3>
                  <Badge className="bg-[#DC7023] hover:bg-[#DC7023]/90 text-white text-[10px] h-4">Primary</Badge>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreVertical className="size-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => handleOpenEdit('GeoTech Solutions HQ')}>
                      <Edit className="size-3.5 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenLinkedSites('GeoTech Solutions HQ')}>
                      <Building2 className="size-3.5 mr-2" />
                      Edit Linked Sites
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenRemove('GeoTech Solutions HQ')} className="text-red-600">
                      <Trash2 className="size-3.5 mr-2" />
                      Remove
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs">
                {/* Company Details */}
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Company Name</p>
                    <p className="text-slate-900">GeoTech Solutions Inc.</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Business ID</p>
                    <p className="text-slate-900">BE 0123.456.789</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Legal Form</p>
                    <p className="text-slate-900">Limited Liability Company</p>
                  </div>
                </div>

                {/* Contact & Address */}
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Primary Contact</p>
                    <p className="text-slate-900">Sarah Chen</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Email</p>
                    <p className="text-slate-900">billing@geotech.com</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Address</p>
                    <p className="text-slate-900">123 Tech Boulevard<br />Suite 500<br />San Francisco, CA 94105<br />United States</p>
                  </div>
                </div>

                {/* Tax & Invoicing */}
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">VAT Number</p>
                    <p className="text-slate-900">US 12-3456789</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Tax Exempt</p>
                    <p className="text-slate-900">No</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Invoice Language</p>
                    <p className="text-slate-900">English (US)</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Linked Sites</p>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="outline" className="text-[9px] h-4">Main Office</Badge>
                      <Badge variant="outline" className="text-[9px] h-4">SF Regional</Badge>
                      <Badge variant="outline" className="text-[9px] h-4">+3 more</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address 2 */}
            <div className="border rounded-lg p-4 hover:border-[#DC7023] transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-900">GeoTech Europe Office</h3>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreVertical className="size-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => handleOpenEdit('GeoTech Europe Office')}>
                      <Edit className="size-3.5 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenLinkedSites('GeoTech Europe Office')}>
                      <Building2 className="size-3.5 mr-2" />
                      Edit Linked Sites
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenRemove('GeoTech Europe Office')} className="text-red-600">
                      <Trash2 className="size-3.5 mr-2" />
                      Remove
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs">
                {/* Company Details */}
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Company Name</p>
                    <p className="text-slate-900">GeoTech Europe BVBA</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Business ID</p>
                    <p className="text-slate-900">BE 0987.654.321</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Legal Form</p>
                    <p className="text-slate-900">Private Limited Company</p>
                  </div>
                </div>

                {/* Contact & Address */}
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Primary Contact</p>
                    <p className="text-slate-900">Johan van Damme</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Email</p>
                    <p className="text-slate-900">eu-billing@geotech.com</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Address</p>
                    <p className="text-slate-900">Rue de la Science 45<br />B-1040 Brussels<br />Belgium</p>
                  </div>
                </div>

                {/* Tax & Invoicing */}
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">VAT Number</p>
                    <p className="text-slate-900">BE 0987.654.321</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Tax Exempt</p>
                    <p className="text-slate-900">No</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Invoice Language</p>
                    <p className="text-slate-900">English (UK)</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Linked Sites</p>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="outline" className="text-[9px] h-4">Brussels HQ</Badge>
                      <Badge variant="outline" className="text-[9px] h-4">Amsterdam</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address 3 */}
            <div className="border rounded-lg p-4 hover:border-[#DC7023] transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-900">Asia Pacific Division</h3>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreVertical className="size-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => handleOpenEdit('Asia Pacific Division')}>
                      <Edit className="size-3.5 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenLinkedSites('Asia Pacific Division')}>
                      <Building2 className="size-3.5 mr-2" />
                      Edit Linked Sites
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenRemove('Asia Pacific Division')} className="text-red-600">
                      <Trash2 className="size-3.5 mr-2" />
                      Remove
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs">
                {/* Company Details */}
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Company Name</p>
                    <p className="text-slate-900">GeoTech Asia Pacific Pte Ltd</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Business ID</p>
                    <p className="text-slate-900">SG 201234567A</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Legal Form</p>
                    <p className="text-slate-900">Private Limited</p>
                  </div>
                </div>

                {/* Contact & Address */}
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Primary Contact</p>
                    <p className="text-slate-900">Wei Zhang</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Email</p>
                    <p className="text-slate-900">apac-billing@geotech.com</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Address</p>
                    <p className="text-slate-900">1 Raffles Place<br />#40-01 One Raffles Place<br />Singapore 048616</p>
                  </div>
                </div>

                {/* Tax & Invoicing */}
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">GST Registration</p>
                    <p className="text-slate-900">SG M90366666F</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Tax Exempt</p>
                    <p className="text-slate-900">No</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Invoice Language</p>
                    <p className="text-slate-900">English</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-0.5">Linked Sites</p>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="outline" className="text-[9px] h-4">Singapore</Badge>
                      <Badge variant="outline" className="text-[9px] h-4">Sydney</Badge>
                      <Badge variant="outline" className="text-[9px] h-4">Tokyo</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  <CreditCard className="size-4" />
                  Payment Methods
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Saved payment methods for automatic billing</CardDescription>
              </div>
              <Badge variant="secondary" className="text-[10px] h-5">2 Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Payment Method 1 */}
            <div className="border rounded-lg p-4 hover:border-[#DC7023] transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="size-10 rounded bg-slate-100 flex items-center justify-center">
                    <CreditCard className="size-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-900">Corporate Visa</h3>
                      <Badge className="bg-[#DC7023] hover:bg-[#DC7023]/90 text-white text-[10px] h-4">Default</Badge>
                    </div>
                    <p className="text-xs text-slate-600 mb-1">•••• •••• •••• 4242</p>
                    <p className="text-xs text-slate-500">Expires 12/2026</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <MoreVertical className="size-3.5" />
                </Button>
              </div>
            </div>

            {/* Payment Method 2 */}
            <div className="border rounded-lg p-4 hover:border-[#DC7023] transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="size-10 rounded bg-slate-100 flex items-center justify-center">
                    <CreditCard className="size-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-900">Business Mastercard</h3>
                    </div>
                    <p className="text-xs text-slate-600 mb-1">•••• •••• •••• 8888</p>
                    <p className="text-xs text-slate-500">Expires 03/2027</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <MoreVertical className="size-3.5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Edit Address Modal */}
      <Dialog open={openEditModal} onOpenChange={setOpenEditModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Invoice Address</DialogTitle>
            <DialogDescription>
              Update the billing address details for {selectedAddress}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company-name" className="text-xs">
                  Company Name *
                </Label>
                <Input id="company-name" defaultValue="GeoTech Solutions Inc." className="h-8 text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-id" className="text-xs">
                  Business ID
                </Label>
                <Input id="business-id" defaultValue="BE 0123.456.789" className="h-8 text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className="text-xs">
                  Primary Contact *
                </Label>
                <Input id="contact-name" defaultValue="Sarah Chen" className="h-8 text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs">
                  Email Address *
                </Label>
                <Input id="email" type="email" defaultValue="billing@geotech.com" className="h-8 text-sm" />
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="address-line-1" className="text-xs">
                Address Line 1 *
              </Label>
              <Input id="address-line-1" defaultValue="123 Tech Boulevard" className="h-8 text-sm" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address-line-2" className="text-xs">
                Address Line 2
              </Label>
              <Input id="address-line-2" defaultValue="Suite 500" className="h-8 text-sm" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-xs">
                  City *
                </Label>
                <Input id="city" defaultValue="San Francisco" className="h-8 text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="text-xs">
                  State/Province *
                </Label>
                <Input id="state" defaultValue="CA" className="h-8 text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postal" className="text-xs">
                  Postal Code *
                </Label>
                <Input id="postal" defaultValue="94105" className="h-8 text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country" className="text-xs">
                Country *
              </Label>
              <Select defaultValue="us">
                <SelectTrigger id="country" className="h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="be">Belgium</SelectItem>
                  <SelectItem value="sg">Singapore</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vat" className="text-xs">
                  VAT/Tax ID
                </Label>
                <Input id="vat" defaultValue="US 12-3456789" className="h-8 text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language" className="text-xs">
                  Invoice Language
                </Label>
                <Select defaultValue="en-us">
                  <SelectTrigger id="language" className="h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en-us">English (US)</SelectItem>
                    <SelectItem value="en-uk">English (UK)</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenEditModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpenEditModal(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Linked Sites Modal */}
      <Dialog open={openLinkedSitesModal} onOpenChange={setOpenLinkedSitesModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Linked Sites</DialogTitle>
            <DialogDescription>
              Manage which sites are billed to {selectedAddress}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {[
                'Main Office',
                'SF Regional',
                'Downtown Location',
                'North Campus',
                'South Campus',
                'East Wing',
                'West Wing',
                'Research Facility'
              ].map((site) => (
                <div key={site} className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={`site-${site}`}
                      defaultChecked={['Main Office', 'SF Regional', 'Downtown Location', 'North Campus', 'South Campus'].includes(site)}
                      className="size-4 rounded border-slate-300 text-[#DC7023] focus:ring-[#DC7023]"
                    />
                    <label htmlFor={`site-${site}`} className="text-sm cursor-pointer">
                      {site}
                    </label>
                  </div>
                  <Users className="size-4 text-slate-400" />
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenLinkedSitesModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpenLinkedSitesModal(false)}>
              Update Linked Sites
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Remove Address Modal */}
      <Dialog open={openRemoveModal} onOpenChange={setOpenRemoveModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove Invoice Address?</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove {selectedAddress}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-xs text-red-800">
                <strong>Warning:</strong> Any sites currently linked to this address will need to be reassigned to another invoice address.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenRemoveModal(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpenRemoveModal(false)}>
              Remove Address
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
