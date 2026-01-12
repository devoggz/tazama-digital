"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Link,
  Input,
  Button,
  Badge,
} from "@heroui/react";
import NextLink from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, FacebookIcon, Instagram, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import {
  SearchIcon,
  UserIconV,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/icons";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const ArrowUp = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-3 h-3 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M7 14l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Navbar = () => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [cartCount, setCartCount] = useState(0);

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem("shoppingCart");
      if (savedCart) {
        const cart = JSON.parse(savedCart);
        const totalItems = cart.reduce(
          (sum: number, item: any) => sum + item.quantity,
          0
        );
        setCartCount(totalItems);
      } else {
        setCartCount(0);
      }
    };

    // Initial load
    updateCartCount();

    // Listen for storage changes (when cart is updated in another tab/window)
    window.addEventListener("storage", updateCartCount);

    // Listen for custom cart update event (when cart is updated in same tab)
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      placeholder="Search..."
      fullWidth
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none" />
      }
      type="search"
    />
  );

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 text-neutral-100 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex gap-6 justify-between items-center">
          <div className="">
            <div className="flex items-center gap-4">
              <PhoneIcon size={16} />
              <span className="">+254 715 829 262</span>
              <div className="flex items-center gap-2">
                <MailIcon size={16} />
                <span className="">info@tazamadigital.co.ke</span>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden md:block">
              <div className="flex cursor-pointer items-center gap-2">
                {/* <span className="font-bold">Follow Us</span> */}
                <TwitterIcon size={16} />
                <Facebook size={16} />
                <Instagram size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroUINavbar
        isBordered
        maxWidth="xl"
        position="sticky"
        className="top-[32px] bg-background/80 backdrop-blur-md py-2"
      >
        {/* Brand */}
        <NavbarContent justify="start" className="basis-1/4">
          <NavbarBrand>
            <NextLink href="/" className="flex items-center gap-2">
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "/images/logo-W.svg"
                    : "/images/logo-3.svg"
                }
                alt="Tazama Logo"
                width={260}
                height={100}
                priority
              />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Menu */}
        <NavbarContent justify="center" className="hidden lg:flex basis-2/4">
          <ul className="flex gap-4">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="relative group flex items-center gap-2"
                >
                  <NextLink
                    href={item.href}
                    className="uppercase text-[11px] tracking-wider font-medium text-foreground/80 transition-colors group-hover:font-bold group-hover:text-danger"
                  >
                    {item.label}
                  </NextLink>

                  <motion.span
                    variants={{
                      rest: { opacity: 0, y: 6 },
                      hover: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-danger"
                  >
                    <ArrowUp />
                  </motion.span>
                </motion.div>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex basis-1/4 gap-4">
          <ThemeSwitch />

          {/* Cart Icon with Badge */}
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              radius="full"
              onPress={() => router.push("/shopping-cart")}
              className="relative"
            >
              <Badge
                content={cartCount}
                color="danger"
                shape="circle"
                placement="top-right"
                isInvisible={cartCount === 0}
                classNames={{
                  badge: "text-xs",
                }}
              >
                <ShoppingCart size={22} className="text-foreground/80" />
              </Badge>
            </Button>
          </NavbarItem>

          <NavbarItem className="hidden md:flex">
            <Button
              onPress={() => router.push("/dashboard")}
              radius="sm"
              color="danger"
              size="md"
              variant="bordered"
              className="text-sm border-1.5"
            >
              Login
              <UserIconV size={24} />
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="sm:hidden gap-2">
          {/* Mobile Cart Icon */}
          <Button
            isIconOnly
            variant="light"
            radius="full"
            size="sm"
            onPress={() => router.push("/shopping-cart")}
            className="relative"
          >
            <Badge
              content={cartCount}
              color="danger"
              shape="circle"
              placement="top-right"
              isInvisible={cartCount === 0}
              classNames={{
                badge: "text-xs",
              }}
            >
              <ShoppingCart size={20} className="text-foreground/80" />
            </Badge>
          </Button>

          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {searchInput}

          <div className="mx-4 mt-6 flex flex-col gap-4">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  href={item.href}
                  size="sm"
                  className="uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}

            {/* Cart Link in Mobile Menu */}
            <NavbarMenuItem>
              <Link
                href="/shopping-cart"
                size="sm"
                className="uppercase tracking-wide flex items-center gap-2"
              >
                <ShoppingCart size={16} />
                Shopping Cart
                {cartCount > 0 && (
                  <span className="bg-danger text-white text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </NavbarMenuItem>

            <div className="pt-4 border-t border-divider">
              <ThemeSwitch />
            </div>
          </div>
        </NavbarMenu>
      </HeroUINavbar>

      <div className="h-6" />
    </header>
  );
};
