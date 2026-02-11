import { Percent, TrendingUp, Edit, Plus, Trash2, Save, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';

interface DiscountTier {
  min: number;
  max: number | null;
  discount: number;
}

export function VolumeDiscounts() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [editingTiers, setEditingTiers] = useState<DiscountTier[]>([]);

  // Product discount configurations
  const [userLicenseTiers, setUserLicenseTiers] = useState<DiscountTier[]>([
    { min: 0, max: 10, discount: 0 },
    { min: 11, max: 25, discount: 5 },
    { min: 26, max: 50, discount: 10 },
    { min: 51, max: 100, discount: 15 },
    { min: 101, max: null, discount: 20 },
  ]);

  const [siteModuleTiers, setSiteModuleTiers] = useState<DiscountTier[]>([
    { min: 0, max: 10, discount: 0 },
    { min: 11, max: 50, discount: 10 },
    { min: 51, max: 100, discount: 15 },
    { min: 101, max: null, discount: 20 },
  ]);

  const [standardsTiers, setStandardsTiers] = useState<DiscountTier[]>([
    { min: 0, max: 5, discount: 0 },
    { min: 6, max: 20, discount: 8 },
    { min: 21, max: 40, discount: 12 },
    { min: 41, max: null, discount: 18 },
  ]);

  const handleOpenEdit = (productType: string) => {
    setSelectedProduct(productType);
    
    if (productType === 'user-licenses') {
      setEditingTiers([...userLicenseTiers]);
    } else if (productType === 'site-modules') {
      setEditingTiers([...siteModuleTiers]);
    } else if (productType === 'standards') {
      setEditingTiers([...standardsTiers]);
    }
    
    setOpenEditModal(true);
  };

  const handleSaveTiers = () => {
    if (selectedProduct === 'user-licenses') {
      setUserLicenseTiers([...editingTiers]);
    } else if (selectedProduct === 'site-modules') {
      setSiteModuleTiers([...editingTiers]);
    } else if (selectedProduct === 'standards') {
      setStandardsTiers([...editingTiers]);
    }
    
    setOpenEditModal(false);
  };

  const handleAddTier = () => {
    const lastTier = editingTiers[editingTiers.length - 1];
    if (lastTier) {
      const newTiers = [...editingTiers];
      newTiers[newTiers.length - 1] = { ...lastTier, max: lastTier.min + 10 };
      newTiers.push({
        min: (lastTier.min || 0) + 11,
        max: null,
        discount: 0
      });
      setEditingTiers(newTiers);
    }
  };

  const handleRemoveTier = (index: number) => {
    if (editingTiers.length > 1) {
      const newTiers = editingTiers.filter((_, i) => i !== index);
      if (newTiers.length > 0) {
        newTiers[newTiers.length - 1].max = null;
      }
      setEditingTiers(newTiers);
    }
  };

  const handleTierChange = (index: number, field: keyof DiscountTier, value: string) => {
    const newTiers = [...editingTiers];
    if (field === 'min' || field === 'max') {
      const numValue = value === '' ? 0 : parseInt(value);
      if (field === 'max' && value === '') {
        newTiers[index][field] = null;
      } else {
        newTiers[index][field] = numValue as any;
      }
    } else if (field === 'discount') {
      newTiers[index][field] = value === '' ? 0 : parseFloat(value);
    }
    setEditingTiers(newTiers);
  };

  const getCurrentTiers = (productType: string) => {
    if (productType === 'user-licenses') return userLicenseTiers;
    if (productType === 'site-modules') return siteModuleTiers;
    if (productType === 'standards') return standardsTiers;
    return [];
  };

  const getProductName = (productType: string) => {
    if (productType === 'user-licenses') return 'User Licenses (Base/Pro)';
    if (productType === 'site-modules') return 'Site Modules';
    if (productType === 'standards') return 'Standards & Layer Bundles';
    return '';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Volume Discount Schedule</h1>
              <p className="text-sm text-slate-600">Manage discount breakpoints and rates for subscription volumes</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-600 hover:bg-green-700 text-[10px] h-5 px-2">
                <TrendingUp className="size-3 mr-1" />
                12% Total Discount
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        {/* User Licenses */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  User Licenses (Base/Pro)
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Per-user subscription tiers</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-[#DC7023] hover:bg-[#DC7023]/90 text-white text-[10px] h-5">15% Discount</Badge>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1.5 text-xs h-7"
                  onClick={() => handleOpenEdit('user-licenses')}
                >
                  <Edit className="size-3" />
                  Edit Schedule
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-slate-900">Current Volume</p>
                  <p className="text-sm font-bold text-slate-900">87 users</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                  <div className="bg-[#DC7023] h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
                <div className="grid grid-cols-5 gap-1 text-[10px]">
                  {userLicenseTiers.map((tier, index) => {
                    const isActive = 87 >= tier.min && (tier.max === null || 87 <= tier.max);
                    return (
                      <div 
                        key={index}
                        className={`text-center ${isActive ? 'bg-[#DC7023]/10 rounded px-1 py-0.5' : ''}`}
                      >
                        <p className="text-slate-500">
                          {tier.min}-{tier.max === null ? '+' : tier.max}
                        </p>
                        <p className={`font-semibold ${isActive ? 'text-[#DC7023]' : 'text-slate-700'}`}>
                          {tier.discount}%
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-slate-50 rounded p-2 border border-slate-200">
                  <p className="text-[10px] text-slate-500">Base Price/User</p>
                  <p className="font-semibold text-slate-900">$49/mo</p>
                </div>
                <div className="bg-slate-50 rounded p-2 border border-slate-200">
                  <p className="text-[10px] text-slate-500">Discounted Price</p>
                  <p className="font-semibold text-green-600">$41.65/mo</p>
                </div>
                <div className="bg-slate-50 rounded p-2 border border-slate-200">
                  <p className="text-[10px] text-slate-500">Next Tier</p>
                  <p className="font-semibold text-slate-900">14 users to 20%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Site Modules */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  Site Modules
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Print, API, Export, Import, Calculation, Dashboard, Insights</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-[#DC7023] hover:bg-[#DC7023]/90 text-white text-[10px] h-5">10% Discount</Badge>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1.5 text-xs h-7"
                  onClick={() => handleOpenEdit('site-modules')}
                >
                  <Edit className="size-3" />
                  Edit Schedule
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-slate-900">Current Volume</p>
                  <p className="text-sm font-bold text-slate-900">34 modules</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                  <div className="bg-[#DC7023] h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
                <div className="grid grid-cols-4 gap-1 text-[10px]">
                  {siteModuleTiers.map((tier, index) => {
                    const isActive = 34 >= tier.min && (tier.max === null || 34 <= tier.max);
                    return (
                      <div 
                        key={index}
                        className={`text-center ${isActive ? 'bg-[#DC7023]/10 rounded px-1 py-0.5' : ''}`}
                      >
                        <p className="text-slate-500">
                          {tier.min}-{tier.max === null ? '+' : tier.max}
                        </p>
                        <p className={`font-semibold ${isActive ? 'text-[#DC7023]' : 'text-slate-700'}`}>
                          {tier.discount}%
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-slate-50 rounded p-2 border border-slate-200">
                  <p className="text-[10px] text-slate-500">Avg. Price/Module</p>
                  <p className="font-semibold text-slate-900">$125/mo</p>
                </div>
                <div className="bg-slate-50 rounded p-2 border border-slate-200">
                  <p className="text-[10px] text-slate-500">Discounted Price</p>
                  <p className="font-semibold text-green-600">$112.50/mo</p>
                </div>
                <div className="bg-slate-50 rounded p-2 border border-slate-200">
                  <p className="text-[10px] text-slate-500">Next Tier</p>
                  <p className="font-semibold text-slate-900">17 modules to 15%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Standards/Layer Bundles */}
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  Standards & Layer Bundles
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Pre-configured map layer collections and attribute standards</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-[#DC7023] hover:bg-[#DC7023]/90 text-white text-[10px] h-5">8% Discount</Badge>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1.5 text-xs h-7"
                  onClick={() => handleOpenEdit('standards')}
                >
                  <Edit className="size-3" />
                  Edit Schedule
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-slate-900">Current Volume</p>
                  <p className="text-sm font-bold text-slate-900">18 bundles</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                  <div className="bg-[#DC7023] h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="grid grid-cols-4 gap-1 text-[10px]">
                  {standardsTiers.map((tier, index) => {
                    const isActive = 18 >= tier.min && (tier.max === null || 18 <= tier.max);
                    return (
                      <div 
                        key={index}
                        className={`text-center ${isActive ? 'bg-[#DC7023]/10 rounded px-1 py-0.5' : ''}`}
                      >
                        <p className="text-slate-500">
                          {tier.min}-{tier.max === null ? '+' : tier.max}
                        </p>
                        <p className={`font-semibold ${isActive ? 'text-[#DC7023]' : 'text-slate-700'}`}>
                          {tier.discount}%
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-slate-50 rounded p-2 border border-slate-200">
                  <p className="text-[10px] text-slate-500">Base Price/Bundle</p>
                  <p className="font-semibold text-slate-900">$75/mo</p>
                </div>
                <div className="bg-slate-50 rounded p-2 border border-slate-200">
                  <p className="text-[10px] text-slate-500">Discounted Price</p>
                  <p className="font-semibold text-green-600">$69/mo</p>
                </div>
                <div className="bg-slate-50 rounded p-2 border border-slate-200">
                  <p className="text-[10px] text-slate-500">Next Tier</p>
                  <p className="font-semibold text-slate-900">3 bundles to 12%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Discount Summary */}
        <Card className="border-2 border-green-200 bg-green-50/30">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <Percent className="size-4" />
                Total Discount Impact
              </CardTitle>
              <Badge className="bg-green-600 hover:bg-green-700 text-xs h-6">Applied to Invoice Total</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3 mb-3">
              <div className="bg-white rounded p-3 border border-slate-200">
                <p className="text-[10px] text-slate-500 mb-1">SUBTOTAL (BEFORE)</p>
                <p className="text-sm font-bold text-slate-900">$9,668/mo</p>
              </div>
              <div className="bg-white rounded p-3 border border-slate-200">
                <p className="text-[10px] text-slate-500 mb-1">VOLUME DISCOUNT</p>
                <p className="text-sm font-bold text-[#DC7023]">-$1,160/mo</p>
              </div>
              <div className="bg-white rounded p-3 border border-slate-200">
                <p className="text-[10px] text-slate-500 mb-1">EFFECTIVE RATE</p>
                <p className="text-sm font-bold text-green-600">12.0%</p>
              </div>
              <div className="bg-white rounded p-3 border border-green-200 border-2">
                <p className="text-[10px] text-slate-500 mb-1">INVOICE TOTAL</p>
                <p className="text-sm font-bold text-green-600">$8,508/mo</p>
              </div>
            </div>

            <div className="bg-white rounded p-3 border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-900 mb-0.5">Potential Savings</p>
                  <p className="text-[10px] text-slate-500">Reach next tier across all product types</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-[#DC7023]">+$428/mo</p>
                  <p className="text-[10px] text-slate-500">Additional savings</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Edit Discount Schedule Modal */}
      <Dialog open={openEditModal} onOpenChange={setOpenEditModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Volume Discount Schedule</DialogTitle>
            <DialogDescription>
              Adjust volume breakpoints and discount percentages for {getProductName(selectedProduct || '')}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-3">
              {editingTiers.map((tier, index) => (
                <div key={index} className="flex items-end gap-3 p-4 border rounded-lg bg-slate-50">
                  <div className="flex-1 grid grid-cols-3 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor={`min-${index}`} className="text-xs">
                        Min Volume
                      </Label>
                      <Input
                        id={`min-${index}`}
                        type="number"
                        value={tier.min}
                        onChange={(e) => handleTierChange(index, 'min', e.target.value)}
                        className="h-8 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`max-${index}`} className="text-xs">
                        Max Volume
                      </Label>
                      <Input
                        id={`max-${index}`}
                        type="number"
                        value={tier.max === null ? '' : tier.max}
                        onChange={(e) => handleTierChange(index, 'max', e.target.value)}
                        placeholder="No limit"
                        className="h-8 text-sm"
                        disabled={index === editingTiers.length - 1}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`discount-${index}`} className="text-xs">
                        Discount %
                      </Label>
                      <Input
                        id={`discount-${index}`}
                        type="number"
                        step="0.1"
                        value={tier.discount}
                        onChange={(e) => handleTierChange(index, 'discount', e.target.value)}
                        className="h-8 text-sm"
                      />
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleRemoveTier(index)}
                    disabled={editingTiers.length <= 1}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-3 gap-2"
              onClick={handleAddTier}
            >
              <Plus className="size-4" />
              Add Tier
            </Button>

            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-slate-700">
                <strong>Note:</strong> The last tier will automatically cover all volumes above its minimum. 
                Volume ranges should not overlap, and each tier should have a higher discount than the previous one.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenEditModal(false)}>
              <X className="size-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleSaveTiers}>
              <Save className="size-4 mr-2" />
              Save Schedule
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}