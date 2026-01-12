"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PaymentForm from "@/components/Calculators/PaymentForm";
import { Spinner } from "@heroui/react";

type OrderData = {
  service: string;
  product: string;
  totalPrice: number;
  formData: Record<string, string>;
};

export default function PaymentPage() {
  const router = useRouter();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve order data from sessionStorage
    const data = sessionStorage.getItem("orderData");

    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setOrderData(parsedData);
      } catch (error) {
        console.error("Error parsing order data:", error);
        router.push("/"); // Redirect to home if data is invalid
      }
    } else {
      // No order data found, redirect to home
      router.push("/");
    }

    setIsLoading(false);
  }, [router]);

  const handleBack = () => {
    router.back();
  };

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Spinner size="lg" color="danger" />
          <p className="mt-4 text-default-600">Loading payment details...</p>
        </div>
      </main>
    );
  }

  if (!orderData) {
    return null; // Will redirect in useEffect
  }

  return (
    <main className="min-h-screen  py-12 ">
      <div className="max-w-7xl mx-auto">
        <PaymentForm orderData={orderData} onBack={handleBack} />
      </div>
    </main>
  );
}
