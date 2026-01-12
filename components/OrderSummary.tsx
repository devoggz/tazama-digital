// components/OrderSummaryList.tsx
import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";

// Dummy data – replace later with real orders from your database
const mockOrders = [
  {
    id: 1,
    title: "Business Cards",
    quantity: 500,
    finish: "Gloss Lamination",
    price: 2500,
    date: "Dec 28, 2025",
  },
  {
    id: 2,
    title: "Letterheads",
    quantity: 1000,
    finish: "Matte Finish",
    price: 4800,
    date: "Dec 25, 2025",
  },
  {
    id: 3,
    title: "Flyers (A5)",
    quantity: 2000,
    finish: "No Lamination",
    price: 6500,
    date: "Dec 20, 2025",
  },
  {
    id: 4,
    title: "Roll-up Banner",
    quantity: 1,
    finish: "Gloss Vinyl",
    price: 12000,
    date: "Dec 15, 2025",
  },
];

export function OrderSummaryList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      {mockOrders.map((order) => (
        <Card
          key={order.id}
          className="shadow-md hover:shadow-xl p-4 transition-shadow duration-300"
          radius="lg"
        >
          <CardHeader className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-md ">{order.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{order.date}</p>
            </div>
            <span className="text-sm font-bold text-[#F31260]">
              KES {order.price.toLocaleString()}
            </span>
          </CardHeader>
          <CardBody className="pt-2">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Quantity:</span>
                <span className="font-medium">
                  {order.quantity.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Finish:</span>
                <span className="font-medium text-gray-600 text-sm">
                  {order.finish}
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
