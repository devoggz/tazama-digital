import { Card, CardBody } from "@heroui/react";
import React from "react";
import { Community } from "../icons/community";

export const CardBalance2 = () => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-default-900">Overview</span>
            <span className="text-default-900 text-xs">+200 Prints</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-default-900 text-xl font-semibold">
            $12,138
          </span>
          <span className="text-danger text-xs">- 4.5%</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success-600 text-xs">
                {"↓"}
              </span>
              <span className="text-xs">Cards</span>
            </div>
            <span className="text-default-900 text-xs">USD</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"↑"}</span>
              <span className="text-xs">Banners</span>
            </div>
            <span className="text-default-900 text-xs">USD</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"⭐"}</span>
              <span className="text-xs">150</span>
            </div>
            <span className="text-default-900 text-xs">VIP</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
