import { Download, FileText, Receipt } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useState } from 'react';

export function InvoiceHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [siteFilter, setSiteFilter] = useState('all');

  const invoices = [
    {
      date: '2026-02-01',
      site: 'Downtown HQ Campus',
      id: 'INV-2026-001234',
      invoiceAddress: 'Headquarters',
      paymentMethod: 'Visa **** 4242',
      amount: 250.45,
      status: 'success'
    },
    {
      date: '2026-02-01',
      site: 'East Coast Operations',
      id: 'INV-2026-001235',
      invoiceAddress: 'East Coast Office',
      paymentMethod: 'Mastercard **** 8888',
      amount: 182.92,
      status: 'success'
    },
    {
      date: '2026-01-15',
      site: 'Boston Research Center',
      id: 'INV-2026-001189',
      invoiceAddress: 'East Coast Office',
      paymentMethod: 'Mastercard **** 8888',
      amount: 159.95,
      status: 'success'
    },
    {
      date: '2026-01-12',
      site: 'North Bay Facility',
      id: 'INV-2026-001167',
      invoiceAddress: 'Headquarters',
      paymentMethod: 'Visa **** 4242',
      amount: 124.96,
      status: 'late'
    },
    {
      date: '2026-01-01',
      site: 'Downtown HQ Campus',
      id: 'INV-2026-001134',
      invoiceAddress: 'Headquarters',
      paymentMethod: 'Visa **** 4242',
      amount: 250.45,
      status: 'success'
    },
    {
      date: '2026-01-01',
      site: 'Chicago Distribution',
      id: 'INV-2026-001135',
      invoiceAddress: 'Headquarters',
      paymentMethod: 'Visa **** 4242',
      amount: 75.97,
      status: 'success'
    },
    {
      date: '2025-12-20',
      site: 'East Coast Operations',
      id: 'INV-2025-001098',
      invoiceAddress: 'East Coast Office',
      paymentMethod: 'Mastercard **** 8888',
      amount: 182.92,
      status: 'success'
    },
    {
      date: '2025-12-15',
      site: 'Boston Research Center',
      id: 'INV-2025-001067',
      invoiceAddress: 'East Coast Office',
      paymentMethod: 'Mastercard **** 8888',
      amount: 159.95,
      status: 'success'
    },
    {
      date: '2025-12-01',
      site: 'Downtown HQ Campus',
      id: 'INV-2025-001034',
      invoiceAddress: 'Headquarters',
      paymentMethod: 'Visa **** 4242',
      amount: 250.45,
      status: 'success'
    },
    {
      date: '2025-12-01',
      site: 'North Bay Facility',
      id: 'INV-2025-001035',
      invoiceAddress: 'Headquarters',
      paymentMethod: 'Visa **** 4242',
      amount: 124.96,
      status: 'success'
    },
    {
      date: '2025-11-28',
      site: 'Chicago Distribution',
      id: 'INV-2025-001012',
      invoiceAddress: 'Headquarters',
      paymentMethod: 'Visa **** 4242',
      amount: 75.97,
      status: 'success'
    },
    {
      date: '2025-11-15',
      site: 'East Coast Operations',
      id: 'INV-2025-000989',
      invoiceAddress: 'East Coast Office',
      paymentMethod: 'Mastercard **** 8888',
      amount: 182.92,
      status: 'success'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] h-5 px-2">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-amber-500 hover:bg-amber-600 text-white text-[10px] h-5 px-2">Pending</Badge>;
      case 'late':
        return <Badge className="bg-red-500 hover:bg-red-600 text-white text-[10px] h-5 px-2">Late</Badge>;
      default:
        return <Badge variant="secondary" className="text-[10px] h-5 px-2">{status}</Badge>;
    }
  };

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidAmount = invoices.filter(inv => inv.status === 'success').reduce((sum, inv) => sum + inv.amount, 0);
  const lateAmount = invoices.filter(inv => inv.status === 'late').reduce((sum, inv) => sum + inv.amount, 0);

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.site.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    const matchesSite = siteFilter === 'all' || invoice.site === siteFilter;
    return matchesSearch && matchesStatus && matchesSite;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Invoice History</h1>
              <p className="text-sm text-slate-600">View and download past invoices and receipts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        {/* Invoice Table */}
        <Card className="border-slate-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileText className="size-4" />
                  All Invoices
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">Complete history of all invoices sent to your organization</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Search by site..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-40"
                />
                <Select
                  value={statusFilter}
                  onValueChange={(value) => setStatusFilter(value)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by status">Status</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="success">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="late">Late</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={siteFilter}
                  onValueChange={(value) => setSiteFilter(value)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by site">Site</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Downtown HQ Campus">Downtown HQ Campus</SelectItem>
                    <SelectItem value="East Coast Operations">East Coast Operations</SelectItem>
                    <SelectItem value="Boston Research Center">Boston Research Center</SelectItem>
                    <SelectItem value="North Bay Facility">North Bay Facility</SelectItem>
                    <SelectItem value="Chicago Distribution">Chicago Distribution</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="bg-slate-50 border-b px-4 py-2.5 grid grid-cols-12 gap-3 text-xs font-semibold text-slate-600">
                <div className="col-span-1">Date</div>
                <div className="col-span-2">Site</div>
                <div className="col-span-2">Invoice ID</div>
                <div className="col-span-2">Invoice Address</div>
                <div className="col-span-2">Payment Method</div>
                <div className="col-span-1 text-right">Amount</div>
                <div className="col-span-1 text-center">Status</div>
                <div className="col-span-1 text-center">Actions</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y">
                {filteredInvoices.map((invoice, index) => (
                  <div key={index} className="px-4 py-2.5 grid grid-cols-12 gap-3 items-center hover:bg-slate-50 transition-colors text-xs">
                    <div className="col-span-1 text-slate-600">
                      {new Date(invoice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="col-span-2">
                      <p className="font-medium text-slate-900 truncate">{invoice.site}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-mono text-slate-700 truncate">{invoice.id}</p>
                    </div>
                    <div className="col-span-2 text-slate-600 truncate">
                      {invoice.invoiceAddress}
                    </div>
                    <div className="col-span-2 text-slate-600 truncate">
                      {invoice.paymentMethod}
                    </div>
                    <div className="col-span-1 text-right font-semibold text-slate-900">
                      ${invoice.amount.toFixed(2)}
                    </div>
                    <div className="col-span-1 flex justify-center">
                      {getStatusBadge(invoice.status)}
                    </div>
                    <div className="col-span-1 flex items-center justify-center gap-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-7 w-7 p-0 hover:bg-blue-50"
                        title="Download Receipt"
                      >
                        <Receipt className="size-3.5 text-blue-600" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-7 w-7 p-0 hover:bg-green-50"
                        title="Download Invoice"
                      >
                        <Download className="size-3.5 text-green-600" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Footer */}
              <div className="bg-slate-50 border-t px-4 py-2.5 grid grid-cols-12 gap-3 text-xs font-semibold">
                <div className="col-span-10 text-slate-700">Total ({filteredInvoices.length} invoices)</div>
                <div className="col-span-1 text-right text-slate-900">${totalAmount.toFixed(2)}</div>
                <div className="col-span-1"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}