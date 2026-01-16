"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Input,
  Select,
  SelectItem,
  Divider,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import {
  CreditCard,
  Download,
  Receipt,
  Search,
  Filter,
  Calendar,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Clock,
  MoreVertical,
  FileText,
  Smartphone,
} from "lucide-react";

type PaymentMethod = "card" | "mpesa" | "cash";
type PaymentStatus = "completed" | "pending" | "failed" | "refunded";

type Payment = {
  id: string;
  orderId: string;
  orderService: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  date: string;
  transactionId: string;
  avatar: string;
};

export default function PaymentsHistoryPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("all");
  const [filterMethod, setFilterMethod] = React.useState("all");

  const payments: Payment[] = [
    {
      id: "PAY-2024-001",
      orderId: "ORD-1001",
      orderService: "Business Cards",
      amount: 2500,
      method: "mpesa",
      status: "completed",
      date: "Jan 02, 2026",
      transactionId: "MPE12345678",
      avatar: "/images/previews/business-card.jpg",
    },
    {
      id: "PAY-2024-002",
      orderId: "ORD-1002",
      orderService: "Letterheads",
      amount: 4800,
      method: "card",
      status: "completed",
      date: "Dec 30, 2025",
      transactionId: "CRD87654321",
      avatar: "/images/previews/letterhead.jpg",
    },
    {
      id: "PAY-2024-003",
      orderId: "ORD-1003",
      orderService: "A5 Flyers",
      amount: 6500,
      method: "mpesa",
      status: "pending",
      date: "Dec 28, 2025",
      transactionId: "MPE23456789",
      avatar: "/images/previews/flyer.jpg",
    },
    {
      id: "PAY-2024-004",
      orderId: "ORD-1004",
      orderService: "Roll-up Banner",
      amount: 24000,
      method: "card",
      status: "completed",
      date: "Dec 20, 2025",
      transactionId: "CRD98765432",
      avatar: "/images/previews/banner.jpg",
    },
    {
      id: "PAY-2024-005",
      orderId: "ORD-1005",
      orderService: "Custom Notebooks",
      amount: 15000,
      method: "mpesa",
      status: "completed",
      date: "Dec 18, 2025",
      transactionId: "MPE34567890",
      avatar: "/images/previews/notebook.jpg",
    },
    {
      id: "PAY-2024-006",
      orderId: "ORD-1006",
      orderService: "Posters A3",
      amount: 3200,
      method: "card",
      status: "failed",
      date: "Dec 15, 2025",
      transactionId: "CRD11223344",
      avatar: "/images/previews/poster.jpg",
    },
    {
      id: "PAY-2024-007",
      orderId: "ORD-1007",
      orderService: "Brochures",
      amount: 8900,
      method: "mpesa",
      status: "completed",
      date: "Dec 10, 2025",
      transactionId: "MPE45678901",
      avatar: "/images/previews/brochure.jpg",
    },
  ];

  // Calculate stats
  const stats = {
    totalPaid: payments
      .filter((p) => p.status === "completed")
      .reduce((sum, p) => sum + p.amount, 0),
    pendingPayments: payments.filter((p) => p.status === "pending").length,
    totalTransactions: payments.length,
    thisMonth: payments
      .filter((p) => p.date.includes("Jan"))
      .reduce((sum, p) => sum + p.amount, 0),
  };

  const getStatusColor = (
    status: PaymentStatus
  ): "success" | "warning" | "danger" | "default" => {
    switch (status) {
      case "completed":
        return "success";
      case "pending":
        return "warning";
      case "failed":
        return "danger";
      case "refunded":
        return "default";
      default:
        return "default";
    }
  };

  const getStatusIcon = (status: PaymentStatus) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={16} />;
      case "pending":
        return <Clock size={16} />;
      default:
        return <Receipt size={16} />;
    }
  };

  const getMethodIcon = (method: PaymentMethod) => {
    switch (method) {
      case "card":
        return <CreditCard size={18} />;
      case "mpesa":
        return <Smartphone size={18} />;
      default:
        return <DollarSign size={18} />;
    }
  };

  const getMethodLabel = (method: PaymentMethod) => {
    switch (method) {
      case "card":
        return "Card";
      case "mpesa":
        return "M-Pesa";
      case "cash":
        return "Cash";
      default:
        return method;
    }
  };

  // Filter payments
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.orderService.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || payment.status === filterStatus;

    const matchesMethod =
      filterMethod === "all" || payment.method === filterMethod;

    return matchesSearch && matchesStatus && matchesMethod;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 py-6 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Hero Header */}
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="h-32 md:h-40  relative">
            <div className="absolute inset-0  opacity-30"></div>
          </div>
          <CardBody className="-mt-16 md:-mt-20 pb-6 md:pb-10 px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6">
              <div className="p-6 md:p-8 bg-white rounded-2xl shadow-xl ">
                <Receipt className="text-emerald-600" size={48} />
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                  Payment History
                </h1>
                <p className="text-sm md:text-base text-zinc-600 mt-2">
                  Track all your payment transactions and receipts
                </p>
              </div>
              <Button
                color="success"
                variant="light"
                size="lg"
                startContent={<Download size={18} />}
                className="shadow-lg hidden md:flex"
              >
                Export All
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-emerald-100">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-3 md:p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg">
                  <DollarSign className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 mb-1">Total Paid</p>
                  <p className="text-xl md:text-2xl font-bold text-emerald-600">
                    KES {stats.totalPaid.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-100">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-3 md:p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 mb-1">Pending</p>
                  <p className="text-xl md:text-2xl font-bold text-orange-600">
                    {stats.pendingPayments}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-3 md:p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                  <Receipt className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 mb-1">Transactions</p>
                  <p className="text-xl md:text-2xl font-bold text-blue-600">
                    {stats.totalTransactions}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-3 md:p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 mb-1">This Month</p>
                  <p className="text-xl md:text-2xl font-bold text-purple-600">
                    KES {stats.thisMonth.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="shadow-lg border border-zinc-200">
          <CardBody className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Search by order ID, service, or transaction..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                startContent={<Search size={20} className="text-zinc-400" />}
                variant="bordered"
                radius="lg"
                size="lg"
                className="flex-1"
              />
              <Select
                placeholder="All Status"
                variant="bordered"
                radius="lg"
                size="lg"
                className="w-full md:w-48"
                onChange={(e) => setFilterStatus(e.target.value)}
                startContent={<Filter size={18} />}
              >
                <SelectItem key="all">All Status</SelectItem>
                <SelectItem key="completed">Completed</SelectItem>
                <SelectItem key="pending">Pending</SelectItem>
                <SelectItem key="failed">Failed</SelectItem>
                <SelectItem key="refunded">Refunded</SelectItem>
              </Select>
              <Select
                placeholder="All Methods"
                variant="bordered"
                radius="lg"
                size="lg"
                className="w-full md:w-48"
                onChange={(e) => setFilterMethod(e.target.value)}
                startContent={<CreditCard size={18} />}
              >
                <SelectItem key="all">All Methods</SelectItem>
                <SelectItem key="card">Card</SelectItem>
                <SelectItem key="mpesa">M-Pesa</SelectItem>
                <SelectItem key="cash">Cash</SelectItem>
              </Select>
            </div>
          </CardBody>
        </Card>

        {/* Payments List */}
        <Card className="shadow-sm border border-zinc-200">
          <CardBody className="p-4 md:p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold">
                Recent Transactions
              </h2>
              <Button
                color="success"
                variant="flat"
                size="sm"
                startContent={<Download size={16} />}
                className="md:hidden"
              >
                Export
              </Button>
            </div>

            <div className="space-y-4">
              {filteredPayments.length === 0 ? (
                <div className="text-center py-12">
                  <Receipt size={48} className="mx-auto text-zinc-300 mb-4" />
                  <p className="text-zinc-500">No payments found</p>
                </div>
              ) : (
                filteredPayments.map((payment) => (
                  <Card
                    key={payment.id}
                    className="shadow-md hover:shadow-lg transition-all duration-300 border border-zinc-200"
                  >
                    <CardBody className="p-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Avatar */}
                        <Avatar
                          src={payment.avatar}
                          alt={payment.orderService}
                          className="w-16 h-16 shrink-0"
                          radius="lg"
                        />

                        {/* Main Content */}
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <p className="font-bold text-zinc-800">
                                  {payment.id}
                                </p>
                                <Chip
                                  color={getStatusColor(payment.status)}
                                  variant="flat"
                                  size="sm"
                                  startContent={getStatusIcon(payment.status)}
                                >
                                  {payment.status.toUpperCase()}
                                </Chip>
                              </div>
                              <p className="text-base font-semibold text-zinc-700">
                                {payment.orderService}
                              </p>
                              <p className="text-sm text-zinc-600">
                                Order: {payment.orderId}
                              </p>
                            </div>
                            <div className="text-left sm:text-right">
                              <p className="text-xl font-bold text-emerald-600">
                                KES {payment.amount.toLocaleString()}
                              </p>
                            </div>
                          </div>

                          <Divider />

                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
                            <div className="flex flex-wrap items-center gap-4">
                              <div className="flex items-center gap-2">
                                {getMethodIcon(payment.method)}
                                <span className="text-zinc-600">
                                  {getMethodLabel(payment.method)}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-zinc-400" />
                                <span className="text-zinc-600">
                                  {payment.date}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FileText size={16} className="text-zinc-400" />
                                <span className="text-zinc-600 font-mono text-xs">
                                  {payment.transactionId}
                                </span>
                              </div>
                            </div>

                            <Dropdown>
                              <DropdownTrigger>
                                <Button
                                  variant="light"
                                  size="sm"
                                  isIconOnly
                                  radius="full"
                                >
                                  <MoreVertical size={18} />
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu aria-label="Payment actions">
                                <DropdownItem
                                  key="receipt"
                                  startContent={<Download size={16} />}
                                >
                                  Download Receipt
                                </DropdownItem>
                                <DropdownItem
                                  key="invoice"
                                  startContent={<FileText size={16} />}
                                >
                                  View Invoice
                                </DropdownItem>
                                <DropdownItem
                                  key="order"
                                  startContent={<Receipt size={16} />}
                                >
                                  View Order
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))
              )}
            </div>

            {filteredPayments.length > 0 && (
              <div className="mt-6 text-center">
                <p className="text-sm text-zinc-500">
                  Showing {filteredPayments.length} of {payments.length}{" "}
                  transactions
                </p>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
