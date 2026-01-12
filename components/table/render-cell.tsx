// src/table/render-cell.tsx
import React from "react";
import { User, Tooltip, Chip, ChipProps } from "@heroui/react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { orders } from "./data";

interface Props {
  order: (typeof orders)[number];
  columnKey: React.Key;
}

export const RenderCell = ({ order, columnKey }: Props) => {
  const cellValue = order[columnKey as keyof typeof order];

  switch (columnKey) {
    case "order":
      return (
        <User
          avatarProps={{
            src: order.avatar || "/images/placeholder.jpg",
            size: "lg",
            radius: "md",
          }}
          name={order.service}
          description={`Order ID: ${order.id}`}
        >
          {order.date}
        </User>
      );

    case "details":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">
            {order.quantity.toLocaleString()} units
          </p>
          <p className="text-bold text-sm capitalize text-gray-600">
            {order.finish}
          </p>
          <p className="text-lg font-semibold mt-2 text-[#F31260]">
            KES {order.price.toLocaleString()}
          </p>
        </div>
      );

    case "status":
      const statusColor: ChipProps["color"] =
        order.status === "completed"
          ? "success"
          : order.status === "shipped"
            ? "primary"
            : order.status === "processing"
              ? "warning"
              : "danger";

      return (
        <Chip size="sm" variant="flat" color={statusColor}>
          <span className="capitalize text-xs">{order.status}</span>
        </Chip>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4">
          <Tooltip content="View Order Details">
            <button onClick={() => console.log("View order", order.id)}>
              <EyeIcon size={20} fill="#979797" />
            </button>
          </Tooltip>

          <Tooltip content="Download Proof / Files" color="secondary">
            <button onClick={() => console.log("Download files", order.id)}>
              <EditIcon size={20} fill="#979797" />
            </button>
          </Tooltip>

          <Tooltip content="Reorder This Item" color="primary">
            <button onClick={() => console.log("Reorder", order.id)}>
              <DeleteIcon size={20} fill="#F31260" />{" "}
              {/* Reusing as "repeat" icon */}
            </button>
          </Tooltip>
        </div>
      );

    default:
      return cellValue;
  }
};
