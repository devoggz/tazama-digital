"use client";
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Input,
  addToast,
} from "@heroui/react";
import DigitalForm from "@/components/Calculators/DigitalForm";

// Mock data (replace with real API fetch in production)
const mockOrders = [
  {
    id: 1,
    service: "Business Cards",
    quantity: 100,
    status: "Completed",
    total: 500,
  },
  {
    id: 2,
    service: "Letterheads",
    quantity: 200,
    status: "Pending",
    total: 1000,
  },
  {
    id: 3,
    service: "Notebooks",
    quantity: 50,
    status: "Completed",
    total: 750,
  },
  { id: 4, service: "Booklets", quantity: 150, status: "Pending", total: 1200 },
];

export default function ClientPortal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Mock logged-in user (in real app, get from auth context/session)
  const userName = "Alex Kimani"; // You can replace this with real user data

  const [userDetails, setUserDetails] = React.useState({
    name: "Alex Kimani",
    email: "alex@tazama.com",
    phone: "+254 712 345 678",
    address: "Westlands, Nairobi, Kenya",
  });

  // Order statistics
  const totalOrders = mockOrders.length;
  const pendingOrders = mockOrders.filter((o) => o.status === "Pending").length;
  const completedOrders = mockOrders.filter(
    (o) => o.status === "Completed"
  ).length;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveDetails = () => {
    addToast({
      title: "Profile Updated",
      description: "Your details have been saved successfully.",
      color: "success",
    });
  };

  return (
    <div className="min-h-screen py-12 px-6">
      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Tazama, <span className="text-[#F31260]">{userName}</span>!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          What would you like to print today?
        </p>

        {/* Prominent Add New Order Button */}
        <Button
          onPress={onOpen}
          color="danger"
          variant="solid"
          size="lg"
          radius="full"
          className="px-10 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
        >
          Add New Order
        </Button>
      </div>

      {/* Order Statistics */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="font-bold text-lg text-gray-700">
            Total Orders
          </CardHeader>
          <CardBody>
            <p className="text-5xl font-extrabold text-primary">
              {totalOrders}
            </p>
          </CardBody>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="font-bold text-lg text-gray-700">
            Pending Orders
          </CardHeader>
          <CardBody>
            <p className="text-5xl font-extrabold text-warning-600">
              {pendingOrders}
            </p>
          </CardBody>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="font-bold text-lg text-gray-700">
            Completed Orders
          </CardHeader>
          <CardBody>
            <p className="text-5xl font-extrabold text-success-600">
              {completedOrders}
            </p>
          </CardBody>
        </Card>
      </div>

      {/* Edit User Details Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Your Account Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            variant="flat"
            labelPlacement="inside"
          />
          <Input
            label="Email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            variant="flat"
            labelPlacement="inside"
            type="email"
          />
          <Input
            label="Phone Number"
            name="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
            variant="flat"
            labelPlacement="inside"
          />
          <Input
            label="Delivery Address"
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
            variant="flat"
            labelPlacement="inside"
          />
        </div>

        <div className="mt-8">
          <Button
            onPress={handleSaveDetails}
            color="primary"
            variant="solid"
            radius="full"
            size="lg"
            className="w-full md:w-auto px-8"
          >
            Save Changes
          </Button>
        </div>
      </div>

      {/* Modal: New Order Form */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="2xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl font-bold">
                Place a New Print Order
              </ModalHeader>
              <ModalBody>
                <DigitalForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
