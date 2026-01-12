"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TableWrapper } from "../table/table";
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardBalance3 } from "./card-balance3";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";
import { Link } from "@heroui/react";
import NextLink from "next/link";
import { OrderSummaryList } from "../OrderSummary";
import { AddUser } from "../accounts/add-user";

const userName = "Alex Doe"; // You can replace this with real user data

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => (
  <div className="h-full lg:px-6 ">
    <div className="py-4 flex items-center justify-between">
      <div>
        <h2 className="text-lg md:text-lg font-bold text-gray-800  mt-8">
          Welcome back,
        </h2>
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 ">
          <span className="text-[#F31260] tracking-tight">{userName}</span>
        </h2>
      </div>
      <AddUser />
    </div>

    {/* Table Latest Orders */}
    <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  mt-8 max-w-[90rem] mx-auto gap-3">
      <div className="flex  flex-wrap justify-between">
        <h3 className="text-center text-md font-semibold">Past Orders</h3>
        <Link
          href="/accounts"
          as={NextLink}
          color="primary"
          className="cursor-pointer"
        >
          View All
        </Link>
      </div>
      <OrderSummaryList />
      {/* <TableWrapper /> */}
    </div>
  </div>
);
