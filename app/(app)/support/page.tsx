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
  Accordion,
  AccordionItem,
  Tabs,
  Tab,
} from "@heroui/react";
import {
  MessageCircle,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  Search,
  HelpCircle,
  Mail,
  Phone,
} from "lucide-react";

export default function Support() {
  const [activeTab, setActiveTab] = React.useState("ticket");
  const [ticketForm, setTicketForm] = React.useState({
    subject: "",
    category: "",
    priority: "",
    description: "",
  });
  const [orderTrackingId, setOrderTrackingId] = React.useState("");

  const recentOrders = [
    {
      id: "ORD-2024-001",
      product: "Business Cards - 500pcs",
      status: "in-progress",
      date: "Jan 05, 2026",
      amount: "KES 4,500",
    },
    {
      id: "ORD-2024-002",
      product: "Large Format Banner - 3x6ft",
      status: "completed",
      date: "Dec 28, 2025",
      amount: "KES 8,200",
    },
    {
      id: "ORD-2024-003",
      product: "Flyers - 1000pcs",
      status: "pending",
      date: "Jan 08, 2026",
      amount: "KES 3,800",
    },
  ];

  const faqs = [
    {
      question: "How long does printing typically take?",
      answer:
        "Most digital printing orders are completed within 24-48 hours. Large format printing may take 2-3 business days depending on the size and complexity.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we offer delivery within Nairobi and its environs. Delivery typically takes 1-2 business days after order completion. Countrywide shipping is also available.",
    },
    {
      question: "What file formats do you accept?",
      answer:
        "We accept PDF, AI, EPS, PSD, and high-resolution PNG/JPG files. For best results, we recommend PDF files with embedded fonts.",
    },
    {
      question: "Can I get a sample before full production?",
      answer:
        "Yes, we can provide digital proofs for all orders. Physical samples are available for large orders upon request.",
    },
  ];

  const handleTicketInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTicketForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitTicket = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToast({
      title: "Ticket Submitted Successfully! 🎫",
      description:
        "Our support team will review your request and respond within 24 hours.",
      color: "success",
    });
    setTicketForm({
      subject: "",
      category: "",
      priority: "",
      description: "",
    });
  };

  const handleTrackOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!orderTrackingId) {
      addToast({
        title: "Order ID Required",
        description: "Please enter a valid order ID to track your order.",
        color: "warning",
      });
      return;
    }
    addToast({
      title: "Order Found! 📦",
      description: `Tracking details for ${orderTrackingId} are displayed below.`,
      color: "success",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "success";
      case "in-progress":
        return "warning";
      case "pending":
        return "default";
      default:
        return "default";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={16} />;
      case "in-progress":
        return <Clock size={16} />;
      case "pending":
        return <AlertCircle size={16} />;
      default:
        return <Package size={16} />;
    }
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
                <HelpCircle className="text-blue-600" size={48} />
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                  Support Center
                </h1>
                <p className="text-sm md:text-base text-zinc-600 mt-2">
                  We're here to help! Submit a ticket or track your order below.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <Card className="shadow-sm hover:shadow-xl transition-all duration-300 ">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-3 md:p-4 ">
                  <Mail className="text-pink-700" size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                    Email Support
                  </p>
                  <p className="text-base md:text-lg font-bold text-zinc-800">
                    support@tazama.net
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className=" shadow-sm hover:shadow-xl transition-all duration-300 ">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-3 md:p-4 ">
                  <Phone className="text-pink-700" size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                    Phone Support
                  </p>
                  <p className="text-base md:text-lg font-bold text-zinc-800">
                    +254 715 829 262
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Card className=" border border-zinc-200">
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
              {/* Submit Ticket Tab */}
              <Tab
                key="ticket"
                title={
                  <div className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    <span className="hidden sm:inline">Submit Ticket</span>
                    <span className="sm:hidden">Ticket</span>
                  </div>
                }
              >
                <form
                  className="mt-6 md:mt-8 space-y-6"
                  onSubmit={handleSubmitTicket}
                >
                  <Input
                    label="Subject"
                    name="subject"
                    placeholder="Brief description of your issue"
                    value={ticketForm.subject}
                    onChange={handleTicketInputChange}
                    radius="lg"
                    size="lg"
                    isRequired
                    classNames={{
                      input: "text-base",
                      label: "font-semibold",
                    }}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="Category"
                      name="category"
                      placeholder="Select a category"
                      radius="lg"
                      size="lg"
                      isRequired
                      onChange={(e) =>
                        setTicketForm((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                    >
                      <SelectItem key="order">Order Issue</SelectItem>
                      <SelectItem key="quality">Quality Concern</SelectItem>
                      <SelectItem key="delivery">Delivery Issue</SelectItem>
                      <SelectItem key="billing">Billing Question</SelectItem>
                      <SelectItem key="technical">Technical Support</SelectItem>
                      <SelectItem key="other">Other</SelectItem>
                    </Select>

                    <Select
                      label="Priority"
                      name="priority"
                      placeholder="Select priority level"
                      radius="lg"
                      size="lg"
                      isRequired
                      onChange={(e) =>
                        setTicketForm((prev) => ({
                          ...prev,
                          priority: e.target.value,
                        }))
                      }
                    >
                      <SelectItem key="low">Low</SelectItem>
                      <SelectItem key="medium">Medium</SelectItem>
                      <SelectItem key="high">High</SelectItem>
                      <SelectItem key="urgent">Urgent</SelectItem>
                    </Select>
                  </div>

                  <Textarea
                    label="Description"
                    name="description"
                    placeholder="Please provide detailed information about your issue..."
                    value={ticketForm.description}
                    onChange={handleTicketInputChange}
                    radius="lg"
                    minRows={6}
                    isRequired
                    classNames={{
                      input: "text-base",
                      label: "font-semibold",
                    }}
                  />

                  <Button
                    type="submit"
                    color="danger"
                    size="lg"
                    radius="md"
                    fullWidth
                    startContent={<Send size={18} />}
                    className="shadow-lg"
                  >
                    Submit Ticket
                  </Button>
                </form>
              </Tab>

              {/* Track Order Tab */}
              <Tab
                key="track"
                title={
                  <div className="flex items-center gap-2">
                    <Package size={18} />
                    <span className="hidden sm:inline">Track Order</span>
                    <span className="sm:hidden">Track</span>
                  </div>
                }
              >
                <div className="mt-6 md:mt-8 space-y-6">
                  <form onSubmit={handleTrackOrder} className="space-y-6">
                    <Input
                      label="Order ID"
                      placeholder="Enter your order ID (e.g., ORD-2024-001)"
                      value={orderTrackingId}
                      onChange={(e) => setOrderTrackingId(e.target.value)}
                      radius="lg"
                      size="lg"
                      startContent={<Search size={20} />}
                      classNames={{
                        input: "text-base",
                        label: "font-semibold",
                      }}
                    />

                    <Button
                      type="submit"
                      color="danger"
                      size="lg"
                      radius="md"
                      fullWidth
                      startContent={<Search size={18} />}
                      className="shadow-lg"
                    >
                      Track Order
                    </Button>
                  </form>

                  <div className="pt-4">
                    <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <Card
                          key={order.id}
                          className="shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <CardBody className="p-4">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <p className="font-bold text-zinc-800">
                                    {order.id}
                                  </p>
                                  <Chip
                                    color={getStatusColor(order.status)}
                                    variant="flat"
                                    size="sm"
                                    startContent={getStatusIcon(order.status)}
                                  >
                                    {order.status
                                      .replace("-", " ")
                                      .toUpperCase()}
                                  </Chip>
                                </div>
                                <p className="text-sm text-zinc-600">
                                  {order.product}
                                </p>
                                <p className="text-xs text-zinc-500 mt-1">
                                  {order.date}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-lg text-zinc-800">
                                  {order.amount}
                                </p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </Tab>

              {/* FAQ Tab */}
              <Tab
                key="faq"
                title={
                  <div className="flex items-center gap-2">
                    <HelpCircle size={18} />
                    <span>FAQ</span>
                  </div>
                }
              >
                <div className="mt-6 md:mt-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-6">
                    Frequently Asked Questions
                  </h3>
                  <Accordion variant="light">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        title={
                          <span className="font-semibold">{faq.question}</span>
                        }
                        classNames={{
                          title: "text-base",
                        }}
                      >
                        <p className="text-zinc-600 pb-4">{faq.answer}</p>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
