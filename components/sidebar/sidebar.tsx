import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@heroui/react";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";
import { FeedbackIcon } from "../icons/navbar/feedback-icon";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Dashboard"
              icon={<HomeIcon />}
              isActive={pathname === "/dashboard"}
              href="/dashboard"
            />
            <SidebarMenu title="Main Menu">
              {/* <SidebarItem
                isActive={pathname === "/accounts"}
                title="My Prints"
                icon={<BalanceIcon />}
                href="accounts"
              /> */}
              <SidebarItem
                isActive={pathname === "/payment-history"}
                title="Payment History"
                href="/payment-history"
                icon={<PaymentsIcon />}
              />

              <SidebarItem
                isActive={pathname === "/products"}
                title="Tazama Products"
                icon={<ProductsIcon />}
                href="/products"
              />
            </SidebarMenu>

            <SidebarMenu title="More Items">
              <SidebarItem
                isActive={pathname === "/corporate"}
                title="Corporate"
                href="/corporate"
                icon={<CustomersIcon />}
              />
              <SidebarItem
                isActive={pathname === "/support"}
                title="Support"
                icon={<FeedbackIcon />}
                href="/support"
              />
              <SidebarItem
                isActive={pathname === "/details"}
                title="Settings"
                href="/details"
                icon={<SettingsIcon />}
              />
            </SidebarMenu>

            {/* <SidebarMenu title="Updates">
              <SidebarItem
                isActive={pathname === "/changelog"}
                title="Changelog"
                icon={<ChangeLogIcon />}
              />
            </SidebarMenu> */}
          </div>
          {/* <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div> */}
        </div>
      </div>
    </aside>
  );
};
