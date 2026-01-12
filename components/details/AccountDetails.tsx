"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  Avatar,
  Input,
  addToast,
  Divider,
  Chip,
} from "@heroui/react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Package,
  Clock,
  Edit3,
  Award,
  TrendingUp,
} from "lucide-react";
import { DollarIcon } from "../icons";

export default function AccountDetails() {
  const [isEditing, setIsEditing] = React.useState(false);

  const [userDetails, setUserDetails] = React.useState({
    name: "Alex Kimani",
    email: "alex@tazama.com",
    phone: "+254 712 345 678",
    address: "Westlands, Nairobi, Kenya",
    joinedDate: "March 2024",
    totalOrders: 24,
    pendingOrders: 3,
    loyaltyTier: "Gold",
    lifetimeSpend: 124500,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveDetails = () => {
    setIsEditing(false);
    addToast({
      title: "Profile Updated 🎉",
      description: "Your account details have been saved successfully.",
      color: "success",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 py-6 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        {/* Hero Profile Header */}
        <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="h-32 md:h-40 bg-gradient-to-r from-danger-500 via-danger-400 to-orange-400 relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTEwIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          </div>
          <CardBody className="-mt-16 md:-mt-20 pb-6 md:pb-10 px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6">
              <Avatar
                src=""
                className="w-28 h-28 md:w-36 md:h-36 text-large border-4 md:border-6 border-white shadow-xl ring-4 ring-danger-100"
                name={userDetails.name}
              />
              <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4">
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                    {userDetails.name}
                  </h1>
                  <Chip
                    color="warning"
                    variant="flat"
                    startContent={<Award size={16} />}
                    className="font-semibold"
                  >
                    {userDetails.loyaltyTier} Member
                  </Chip>
                </div>
                <p className="text-sm text-zinc-600 mt-2 flex items-center gap-2 justify-center md:justify-start">
                  <Calendar size={16} />
                  Member since {userDetails.joinedDate}
                </p>
              </div>
              <Button
                onPress={() => setIsEditing(!isEditing)}
                color="danger"
                variant={isEditing ? "bordered" : "solid"}
                startContent={<Edit3 size={18} />}
                radius="full"
                className="hidden md:flex"
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>
            {/* Mobile Edit Button */}
            <Button
              onPress={() => setIsEditing(!isEditing)}
              color="danger"
              variant={isEditing ? "bordered" : "solid"}
              startContent={<Edit3 size={18} />}
              radius="full"
              fullWidth
              className="mt-4 md:hidden"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </CardBody>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-danger-100">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-3 md:p-4 bg-gradient-to-br from-danger-500 to-danger-600 rounded-2xl shadow-lg">
                  <Package className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-danger-600 to-danger-500 bg-clip-text text-transparent">
                    {userDetails.totalOrders}
                  </p>
                  <p className="text-sm text-zinc-600 font-medium">
                    Total Orders
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-100">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-3 md:p-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    {userDetails.pendingOrders}
                  </p>
                  <p className="text-sm text-zinc-600 font-medium">
                    Pending Orders
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-success-100 sm:col-span-2 lg:col-span-1">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-3 md:p-4 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl shadow-lg">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-success-600 to-success-500 bg-clip-text text-transparent">
                    KES {userDetails.lifetimeSpend.toLocaleString()}
                  </p>
                  <p className="text-sm text-zinc-600 font-medium">
                    Lifetime Spend
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Account Information */}
        <Card className="shadow-xl border border-zinc-200">
          <CardBody className="p-4 md:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                Account Information
              </h2>
            </div>

            <Divider className="mb-6 md:mb-8" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {!isEditing ? (
                <>
                  <div className="space-y-5 md:space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-white border border-zinc-200 hover:border-danger-200 transition-all duration-300">
                      <div className="p-2 bg-danger-100 rounded-lg">
                        <Mail className="text-danger-600" size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">
                          Email Address
                        </p>
                        <p className="font-semibold text-zinc-800">
                          {userDetails.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-white border border-zinc-200 hover:border-danger-200 transition-all duration-300">
                      <div className="p-2 bg-danger-100 rounded-lg">
                        <Phone className="text-danger-600" size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">
                          Phone Number
                        </p>
                        <p className="font-semibold text-zinc-800">
                          {userDetails.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5 md:space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-white border border-zinc-200 hover:border-danger-200 transition-all duration-300">
                      <div className="p-2 bg-danger-100 rounded-lg">
                        <MapPin className="text-danger-600" size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">
                          Delivery Address
                        </p>
                        <p className="font-semibold text-zinc-800">
                          {userDetails.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Input
                    label="Full Name"
                    name="name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    variant="bordered"
                    radius="lg"
                    size="lg"
                    classNames={{
                      input: "text-base",
                      label: "font-semibold",
                    }}
                  />
                  <Input
                    label="Email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    variant="bordered"
                    radius="lg"
                    size="lg"
                    type="email"
                    classNames={{
                      input: "text-base",
                      label: "font-semibold",
                    }}
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleInputChange}
                    variant="bordered"
                    radius="lg"
                    size="lg"
                    classNames={{
                      input: "text-base",
                      label: "font-semibold",
                    }}
                  />
                  <Input
                    label="Delivery Address"
                    name="address"
                    value={userDetails.address}
                    onChange={handleInputChange}
                    variant="bordered"
                    radius="lg"
                    size="lg"
                    classNames={{
                      input: "text-base",
                      label: "font-semibold",
                    }}
                  />
                </>
              )}
            </div>

            {isEditing && (
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-end gap-3">
                <Button
                  onPress={() => setIsEditing(false)}
                  color="default"
                  variant="bordered"
                  size="lg"
                  radius="full"
                  className="sm:px-8"
                >
                  Cancel
                </Button>
                <Button
                  onPress={handleSaveDetails}
                  color="danger"
                  variant="solid"
                  size="lg"
                  radius="full"
                  className="sm:px-10 shadow-lg"
                >
                  Save Changes
                </Button>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
