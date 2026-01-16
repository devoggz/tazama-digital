"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
  addToast,
  Select,
  SelectItem,
  Chip,
  Checkbox,
  Divider,
  Tabs,
  Tab,
} from "@heroui/react";
import {
  Building2,
  Users,
  TrendingUp,
  Shield,
  FileText,
  CreditCard,
  Briefcase,
  CheckCircle,
  Upload,
  Download,
  Settings,
  BarChart3,
} from "lucide-react";

export default function CorporateAccountPage() {
  const [activeTab, setActiveTab] = React.useState("register");
  const [hasAccount, setHasAccount] = React.useState(false);

  const [corporateForm, setCorporateForm] = React.useState({
    companyName: "",
    kraPin: "",
    businessType: "",
    industry: "",
    registrationNumber: "",
    vatNumber: "",
    contactPerson: "",
    position: "",
    email: "",
    phone: "",
    physicalAddress: "",
    postalAddress: "",
    city: "",
    expectedMonthlyVolume: "",
    paymentTerms: "",
    billingEmail: "",
    additionalNotes: "",
  });

  const [agreements, setAgreements] = React.useState({
    terms: false,
    creditTerms: false,
    dataProcessing: false,
  });

  const corporateStats = {
    accountBalance: 45000,
    creditLimit: 500000,
    ordersThisMonth: 12,
    totalSpend: 245000,
    teamMembers: 5,
    pendingInvoices: 2,
  };

  const recentInvoices = [
    { id: "INV-2024-045", date: "Jan 06, 2026", amount: 25000, status: "paid" },
    {
      id: "INV-2024-044",
      date: "Jan 03, 2026",
      amount: 18500,
      status: "pending",
    },
    { id: "INV-2024-043", date: "Dec 28, 2025", amount: 32000, status: "paid" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCorporateForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitApplication = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !agreements.terms ||
      !agreements.creditTerms ||
      !agreements.dataProcessing
    ) {
      addToast({
        title: "Agreement Required",
        description: "Please accept all terms and conditions to proceed.",
        color: "warning",
      });
      return;
    }

    addToast({
      title: "Application Submitted! 🎉",
      description:
        "Your corporate account application has been received. Our team will review and contact you within 24-48 hours.",
      color: "success",
    });

    setCorporateForm({
      companyName: "",
      kraPin: "",
      businessType: "",
      industry: "",
      registrationNumber: "",
      vatNumber: "",
      contactPerson: "",
      position: "",
      email: "",
      phone: "",
      physicalAddress: "",
      postalAddress: "",
      city: "",
      expectedMonthlyVolume: "",
      paymentTerms: "",
      billingEmail: "",
      additionalNotes: "",
    });
    setAgreements({ terms: false, creditTerms: false, dataProcessing: false });
  };

  const getInvoiceStatusColor = (status: string) => {
    return status === "paid" ? "success" : "warning";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 py-6 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        {/* Hero Header */}
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="h-32 md:h-40  relative">
            <div className="absolute inset-0  opacity-30"></div>
          </div>
          <CardBody className="-mt-16 md:-mt-20 pb-6 md:pb-10 px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6">
              <div className="p-6 md:p-8 bg-white rounded-2xl shadow-xl ">
                <Building2 className="text-pink-600" size={48} />
              </div>
              <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4">
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                    Corporate Solutions
                  </h1>
                  <Chip
                    color="danger"
                    variant="flat"
                    startContent={<Briefcase size={16} />}
                    className="font-semibold"
                  >
                    B2B Portal
                  </Chip>
                </div>
                <p className="text-sm md:text-base text-zinc-600 mt-2">
                  Exclusive benefits for business accounts including credit
                  terms, bulk pricing, and dedicated support
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
            <CardBody className="p-4 md:p-6 text-center">
              <div className="p-3 md:p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg mx-auto w-fit mb-3">
                <CreditCard className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-zinc-800 mb-1">Credit Terms</h3>
              <p className="text-sm text-zinc-600">
                Up to 30-day payment terms
              </p>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-indigo-100">
            <CardBody className="p-4 md:p-6 text-center">
              <div className="p-3 md:p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg mx-auto w-fit mb-3">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-zinc-800 mb-1">Bulk Pricing</h3>
              <p className="text-sm text-zinc-600">
                Volume discounts available
              </p>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
            <CardBody className="p-4 md:p-6 text-center">
              <div className="p-3 md:p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg mx-auto w-fit mb-3">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-zinc-800 mb-1">Team Access</h3>
              <p className="text-sm text-zinc-600">Multiple user accounts</p>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-100">
            <CardBody className="p-4 md:p-6 text-center">
              <div className="p-3 md:p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg mx-auto w-fit mb-3">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-zinc-800 mb-1">Priority Support</h3>
              <p className="text-sm text-zinc-600">Dedicated account manager</p>
            </CardBody>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="shadow-xl border border-zinc-200">
          <CardBody className="p-4 md:p-8">
            <Tabs
              selectedKey={activeTab}
              onSelectionChange={(key) => setActiveTab(key as string)}
              variant="underlined"
              color="danger"
              classNames={{
                tabList: "w-full",
                tab: "h-12",
              }}
            >
              {/* Register Tab */}
              <Tab
                key="register"
                title={
                  <div className="flex items-center gap-2">
                    <FileText size={18} />
                    <span className="hidden sm:inline">Apply for Account</span>
                    <span className="sm:hidden">Apply</span>
                  </div>
                }
              >
                <form
                  className="mt-6 md:mt-8 space-y-6"
                  onSubmit={handleSubmitApplication}
                >
                  {/* Company Information */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Building2 size={20} />
                      Company Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Company Name"
                        name="companyName"
                        placeholder="ABC Limited"
                        value={corporateForm.companyName}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        isRequired
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />

                      <Input
                        label="KRA PIN"
                        name="kraPin"
                        placeholder="P051234567X"
                        value={corporateForm.kraPin}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        isRequired
                        description="Kenya Revenue Authority PIN"
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />

                      <Input
                        label="Business Registration Number"
                        name="registrationNumber"
                        placeholder="PVT-XXXXXXXXX"
                        value={corporateForm.registrationNumber}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        isRequired
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />

                      <Input
                        label="VAT Number (Optional)"
                        name="vatNumber"
                        placeholder="VAT-XXXXXXXXX"
                        value={corporateForm.vatNumber}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />

                      <Select
                        label="Business Type"
                        name="businessType"
                        placeholder="Select business type"
                        radius="lg"
                        size="lg"
                        isRequired
                        onChange={(e) =>
                          setCorporateForm((prev) => ({
                            ...prev,
                            businessType: e.target.value,
                          }))
                        }
                      >
                        <SelectItem key="limited">Limited Company</SelectItem>
                        <SelectItem key="llc">LLC</SelectItem>
                        <SelectItem key="partnership">Partnership</SelectItem>
                        <SelectItem key="sole">Sole Proprietorship</SelectItem>
                        <SelectItem key="ngo">NGO/Non-Profit</SelectItem>
                      </Select>

                      <Select
                        label="Industry"
                        name="industry"
                        placeholder="Select industry"
                        radius="lg"
                        size="lg"
                        isRequired
                        onChange={(e) =>
                          setCorporateForm((prev) => ({
                            ...prev,
                            industry: e.target.value,
                          }))
                        }
                      >
                        <SelectItem key="tech">Technology</SelectItem>
                        <SelectItem key="finance">Finance</SelectItem>
                        <SelectItem key="retail">Retail</SelectItem>
                        <SelectItem key="hospitality">Hospitality</SelectItem>
                        <SelectItem key="healthcare">Healthcare</SelectItem>
                        <SelectItem key="education">Education</SelectItem>
                        <SelectItem key="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem key="other">Other</SelectItem>
                      </Select>
                    </div>
                  </div>

                  <Divider />

                  {/* Contact Person Details */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Users size={20} />
                      Primary Contact Person
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        name="contactPerson"
                        placeholder="John Doe"
                        value={corporateForm.contactPerson}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        isRequired
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />

                      <Input
                        label="Position/Title"
                        name="position"
                        placeholder="Procurement Manager"
                        value={corporateForm.position}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        isRequired
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />

                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={corporateForm.email}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        isRequired
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />

                      <Input
                        label="Phone Number"
                        name="phone"
                        placeholder="+254 712 345 678"
                        value={corporateForm.phone}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        isRequired
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />
                    </div>
                  </div>

                  <Divider />

                  {/* Company Address */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Company Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Physical Address"
                        name="physicalAddress"
                        placeholder="Westlands, Nairobi"
                        value={corporateForm.physicalAddress}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        isRequired
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />

                      <Input
                        label="Postal Address"
                        name="postalAddress"
                        placeholder="P.O. Box 12345"
                        value={corporateForm.postalAddress}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />

                      <Input
                        label="City"
                        name="city"
                        placeholder="Nairobi"
                        value={corporateForm.city}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        isRequired
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />

                      <Input
                        label="Billing Email (Optional)"
                        name="billingEmail"
                        type="email"
                        placeholder="billing@company.com"
                        value={corporateForm.billingEmail}
                        onChange={handleInputChange}
                        radius="lg"
                        size="lg"
                        classNames={{
                          input: "text-base",
                          label: "font-semibold",
                        }}
                      />
                    </div>
                  </div>

                  <Divider />

                  {/* Business Requirements */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Business Requirements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Select
                        label="Expected Monthly Volume"
                        name="expectedMonthlyVolume"
                        placeholder="Select volume range"
                        radius="lg"
                        size="lg"
                        isRequired
                        onChange={(e) =>
                          setCorporateForm((prev) => ({
                            ...prev,
                            expectedMonthlyVolume: e.target.value,
                          }))
                        }
                      >
                        <SelectItem key="low">KES 0 - 50,000</SelectItem>
                        <SelectItem key="medium">
                          KES 50,000 - 200,000
                        </SelectItem>
                        <SelectItem key="high">
                          KES 200,000 - 500,000
                        </SelectItem>
                        <SelectItem key="enterprise">KES 500,000+</SelectItem>
                      </Select>

                      <Select
                        label="Preferred Payment Terms"
                        name="paymentTerms"
                        placeholder="Select payment terms"
                        radius="lg"
                        size="lg"
                        isRequired
                        onChange={(e) =>
                          setCorporateForm((prev) => ({
                            ...prev,
                            paymentTerms: e.target.value,
                          }))
                        }
                      >
                        <SelectItem key="immediate">
                          Immediate Payment
                        </SelectItem>
                        <SelectItem key="7days">7 Days Credit</SelectItem>
                        <SelectItem key="14days">14 Days Credit</SelectItem>
                        <SelectItem key="30days">30 Days Credit</SelectItem>
                      </Select>
                    </div>

                    <Textarea
                      label="Additional Information"
                      name="additionalNotes"
                      placeholder="Tell us about your printing needs, special requirements, or any questions..."
                      value={corporateForm.additionalNotes}
                      onChange={handleInputChange}
                      radius="lg"
                      minRows={4}
                      className="mt-6"
                      classNames={{
                        input: "text-base",
                        label: "font-semibold",
                      }}
                    />
                  </div>

                  <Divider />

                  {/* Agreements */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">
                      Terms & Agreements
                    </h3>

                    <Checkbox
                      isSelected={agreements.terms}
                      onValueChange={(checked) =>
                        setAgreements((prev) => ({ ...prev, terms: checked }))
                      }
                      radius="sm"
                    >
                      <span className="text-sm">
                        I agree to the{" "}
                        <span className="text-pink-600 font-semibold cursor-pointer hover:underline">
                          Terms and Conditions
                        </span>{" "}
                        and{" "}
                        <span className="text-pink-600 font-semibold cursor-pointer hover:underline">
                          Privacy Policy
                        </span>
                      </span>
                    </Checkbox>

                    <Checkbox
                      isSelected={agreements.creditTerms}
                      onValueChange={(checked) =>
                        setAgreements((prev) => ({
                          ...prev,
                          creditTerms: checked,
                        }))
                      }
                      radius="sm"
                    >
                      <span className="text-sm">
                        I understand and accept the{" "}
                        <span className="text-pink-600 font-semibold cursor-pointer hover:underline">
                          Credit Terms and Conditions
                        </span>
                      </span>
                    </Checkbox>

                    <Checkbox
                      isSelected={agreements.dataProcessing}
                      onValueChange={(checked) =>
                        setAgreements((prev) => ({
                          ...prev,
                          dataProcessing: checked,
                        }))
                      }
                      radius="sm"
                    >
                      <span className="text-sm">
                        I consent to the processing of company data for
                        verification and business purposes
                      </span>
                    </Checkbox>
                  </div>

                  <Button
                    type="submit"
                    color="danger"
                    size="lg"
                    radius="md"
                    fullWidth
                    startContent={<CheckCircle size={18} />}
                    className="shadow-lg mt-8"
                  >
                    Submit Application
                  </Button>
                </form>
              </Tab>

              {/* Dashboard Tab (for existing corporate accounts) */}
              <Tab
                key="dashboard"
                title={
                  <div className="flex items-center gap-2">
                    <BarChart3 size={18} />
                    <span className="hidden sm:inline">Dashboard</span>
                    <span className="sm:hidden">Dashboard</span>
                  </div>
                }
              >
                <div className="mt-6 md:mt-8 space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <Card className="shadow-lg border border-purple-100">
                      <CardBody className="p-4 md:p-6">
                        <p className="text-sm text-zinc-600 mb-1">
                          Credit Limit
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-pink-600">
                          KES {corporateStats.creditLimit.toLocaleString()}
                        </p>
                        <p className="text-xs text-zinc-500 mt-2">
                          Available: KES{" "}
                          {(
                            corporateStats.creditLimit -
                            corporateStats.accountBalance
                          ).toLocaleString()}
                        </p>
                      </CardBody>
                    </Card>

                    <Card className="shadow-lg border border-green-100">
                      <CardBody className="p-4 md:p-6">
                        <p className="text-sm text-zinc-600 mb-1">
                          Orders This Month
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-green-600">
                          {corporateStats.ordersThisMonth}
                        </p>
                        <p className="text-xs text-zinc-500 mt-2">
                          +20% from last month
                        </p>
                      </CardBody>
                    </Card>

                    <Card className="shadow-lg border border-blue-100">
                      <CardBody className="p-4 md:p-6">
                        <p className="text-sm text-zinc-600 mb-1">
                          Total Spend
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-blue-600">
                          KES {corporateStats.totalSpend.toLocaleString()}
                        </p>
                        <p className="text-xs text-zinc-500 mt-2">
                          Lifetime value
                        </p>
                      </CardBody>
                    </Card>
                  </div>

                  {/* Recent Invoices */}
                  <Card className="shadow-lg">
                    <CardBody className="p-4 md:p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">Recent Invoices</h3>
                        <Button
                          color="danger"
                          variant="flat"
                          size="sm"
                          startContent={<Download size={16} />}
                        >
                          Export All
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {recentInvoices.map((invoice) => (
                          <Card
                            key={invoice.id}
                            className="shadow-sm  border-zinc-200"
                          >
                            <CardBody className="p-4">
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                <div>
                                  <p className="font-medium text-zinc-800">
                                    {invoice.id}
                                  </p>
                                  <p className="text-sm text-zinc-600">
                                    {invoice.date}
                                  </p>
                                </div>
                                <div className="flex items-center gap-4">
                                  <p className="font-bold text-sm">
                                    KES {invoice.amount.toLocaleString()}
                                  </p>
                                  <Chip
                                    color={getInvoiceStatusColor(
                                      invoice.status
                                    )}
                                    variant="flat"
                                    size="sm"
                                  >
                                    {invoice.status.toUpperCase()}
                                  </Chip>
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        ))}
                      </div>
                    </CardBody>
                  </Card>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      color="secondary"
                      variant="bordered"
                      size="lg"
                      startContent={<Users size={20} />}
                      fullWidth
                    >
                      Manage Team Members
                    </Button>
                    <Button
                      color="secondary"
                      variant="bordered"
                      size="lg"
                      startContent={<Settings size={20} />}
                      fullWidth
                    >
                      Account Settings
                    </Button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
