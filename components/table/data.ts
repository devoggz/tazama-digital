// src/table/data.ts (or wherever your data file is)
import { ChipProps } from "@heroui/react";

export const columns = [
  { name: "ORDER", uid: "order" },
  { name: "DETAILS", uid: "details" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

export type Order = {
  id: string;
  service: string;
  quantity: number;
  finish: string;
  price: number;
  status: "pending" | "processing" | "completed" | "shipped";
  date: string;
  avatar: string; // preview image or placeholder
};

export const orders: Order[] = [
  {
    id: "ORD-1001",
    service: "Business Cards",
    quantity: 500,
    finish: "Gloss Lamination",
    price: 2500,
    status: "completed",
    date: "Jan 02, 2026",
    avatar: "/images/previews/business-card.jpg",
  },
  {
    id: "ORD-1002",
    service: "Letterheads",
    quantity: 1000,
    finish: "Matte Finish",
    price: 4800,
    status: "processing",
    date: "Dec 30, 2025",
    avatar: "/images/previews/letterhead.jpg",
  },
  {
    id: "ORD-1003",
    service: "A5 Flyers",
    quantity: 2000,
    finish: "No Lamination",
    price: 6500,
    status: "pending",
    date: "Dec 28, 2025",
    avatar: "/images/previews/flyer.jpg",
  },
  {
    id: "ORD-1004",
    service: "Roll-up Banner",
    quantity: 2,
    finish: "Gloss Vinyl",
    price: 24000,
    status: "shipped",
    date: "Dec 20, 2025",
    avatar: "/images/previews/banner.jpg",
  },
  {
    id: "ORD-1005",
    service: "Custom Notebooks",
    quantity: 100,
    finish: "Spot UV",
    price: 15000,
    status: "processing",
    date: "Dec 18, 2025",
    avatar: "/images/previews/notebook.jpg",
  },
];
