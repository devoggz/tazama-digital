"use client";
import React from "react";
import { Input } from "@heroui/input";
import { Form } from "@heroui/form";
import {
  Button,
  Card,
  CardBody,
  Tabs,
  Tab,
  addToast,
  Divider,
} from "@heroui/react";
import { CreditCard, Smartphone, ArrowLeft, Lock } from "lucide-react";

type PaymentFormProps = {
  orderData: {
    service: string;
    product: string;
    totalPrice: number;
    formData: Record<string, string>;
  };
  onBack: () => void;
};

export default function PaymentForm({ orderData, onBack }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = React.useState<string>("card");
  const [cardData, setCardData] = React.useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [mpesaData, setMpesaData] = React.useState({
    phoneNumber: "",
    accountReference: "",
  });
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    } else if (name === "expiryDate") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .slice(0, 5);
    } else if (name === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setCardData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleMpesaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "phoneNumber") {
      formattedValue = value.replace(/\D/g, "").slice(0, 12);
    }

    setMpesaData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleCardSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      addToast({
        title: "Payment Successful! 🎉",
        description: `KES ${orderData.totalPrice.toLocaleString()} has been charged to your card.`,
        color: "success",
      });
    }, 2000);
  };

  const handleMpesaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate M-Pesa STK Push
    setTimeout(() => {
      setIsProcessing(false);
      addToast({
        title: "M-Pesa Push Sent! 📱",
        description: `Please check your phone (${mpesaData.phoneNumber}) and enter your M-Pesa PIN to complete payment.`,
        color: "success",
      });
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Order Summary */}
      <Card className="mb-6">
        <CardBody className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
              <p className="text-default-500 capitalize">
                {orderData.service} - {orderData.product}
              </p>
            </div>
            <Button
              variant="light"
              color="default"
              startContent={<ArrowLeft size={18} />}
              onPress={onBack}
            >
              Back
            </Button>
          </div>
          <Divider className="my-4" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-default-600">Subtotal</span>
              <span>KES {orderData.totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-default-600">Processing Fee</span>
              <span>KES 0</span>
            </div>
            <Divider className="my-3" />
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Total</span>
              <span className="text-2xl font-bold text-danger">
                KES {orderData.totalPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardBody className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Lock size={20} className="text-success" />
            <span className="text-sm text-default-600">
              Secure payment powered by SSL encryption
            </span>
          </div>

          <Tabs
            selectedKey={paymentMethod}
            onSelectionChange={(key) => setPaymentMethod(key as string)}
            variant="underlined"
            color="danger"
            classNames={{
              tabList: "w-full",
              tab: "h-12",
            }}
          >
            <Tab
              key="card"
              title={
                <div className="flex items-center gap-2">
                  <CreditCard size={18} />
                  <span>Card Payment</span>
                </div>
              }
            >
              <Form className="mt-6 space-y-4" onSubmit={handleCardSubmit}>
                <Input
                  label="Card Number"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardData.cardNumber}
                  onChange={handleCardInputChange}
                  isRequired
                  startContent={
                    <CreditCard size={18} className="text-default-400" />
                  }
                />

                <Input
                  label="Cardholder Name"
                  name="cardName"
                  placeholder="JOHN DOE"
                  value={cardData.cardName}
                  onChange={handleCardInputChange}
                  isRequired
                />

                <div className="grid w-full grid-cols-2 gap-4">
                  <Input
                    label="Expiry Date"
                    name="expiryDate"
                    fullWidth
                    placeholder="MM/YY"
                    value={cardData.expiryDate}
                    onChange={handleCardInputChange}
                    isRequired
                  />
                  <Input
                    label="CVV"
                    name="cvv"
                    fullWidth
                    placeholder="123"
                    type="password"
                    value={cardData.cvv}
                    onChange={handleCardInputChange}
                    isRequired
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    alt="Visa"
                    className="h-8"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                    className="h-8"
                  />
                </div>

                <Button
                  type="submit"
                  color="danger"
                  size="lg"
                  fullWidth
                  isLoading={isProcessing}
                  startContent={!isProcessing && <Lock size={18} />}
                  className="mt-6"
                >
                  {isProcessing
                    ? "Processing..."
                    : `Pay KES ${orderData.totalPrice.toLocaleString()}`}
                </Button>
              </Form>
            </Tab>

            <Tab
              key="mpesa"
              title={
                <div className="flex items-center gap-2">
                  <Smartphone size={18} />
                  <span>M-Pesa</span>
                </div>
              }
            >
              <Form className="mt-6 space-y-4" onSubmit={handleMpesaSubmit}>
                <div className="bg-success-50 border border-success-200 rounded-lg p-4 mb-4 w-full">
                  <div className="flex items-start gap-3 ">
                    <Smartphone size={20} className="text-success-600 mt-1" />
                    <div>
                      <p className="font-semibold text-success-800 mb-1">
                        How M-Pesa Payment Works
                      </p>
                      <ol className="text-sm text-success-700 space-y-1 list-decimal list-inside">
                        <li>Enter your Safaricom M-Pesa phone number</li>
                        <li>Click "Send M-Pesa Push"</li>
                        <li>Check your phone for the M-Pesa prompt</li>
                        <li>Enter your M-Pesa PIN to complete payment</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <Input
                  label="M-Pesa Phone Number"
                  name="phoneNumber"
                  placeholder="254712345678"
                  value={mpesaData.phoneNumber}
                  onChange={handleMpesaInputChange}
                  isRequired
                  description="Enter your Safaricom number (e.g., 254712345678)"
                  startContent={
                    <span className="text-default-400 text-sm">+</span>
                  }
                />

                <Input
                  label="Account Reference (Optional)"
                  name="accountReference"
                  placeholder="Order reference"
                  value={mpesaData.accountReference}
                  onChange={handleMpesaInputChange}
                  description="Optional reference for your records"
                />

                <div className="bg-default-100 rounded-lg p-4 flex items-center justify-between w-full">
                  <div>
                    <p className="text-sm text-default-600">Amount to Pay</p>
                    <p className="text-2xl font-bold">
                      KES {orderData.totalPrice.toLocaleString()}
                    </p>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg"
                    alt="M-Pesa"
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  color="success"
                  size="lg"
                  fullWidth
                  isLoading={isProcessing}
                  startContent={!isProcessing && <Smartphone size={18} />}
                  className="mt-6 text-white"
                >
                  {isProcessing ? "Sending Push..." : "Send M-Pesa Push"}
                </Button>

                <p className="text-xs text-center text-default-500 mt-4">
                  You will receive an M-Pesa prompt on your phone. This may take
                  up to 30 seconds.
                </p>
              </Form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>

      <div className="mt-6 text-center text-sm text-default-500">
        <p>
          By completing this payment, you agree to our Terms of Service and
          Privacy Policy
        </p>
      </div>
    </div>
  );
}
