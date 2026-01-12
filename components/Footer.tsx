"use client";

import NextLink from "next/link";
import { Link } from "@heroui/react";
import { TazamaLogo, PhoneIcon, MailIcon } from "@/components/icons";
import SubscribeNewsletter from "./sections/SubscribeNewsletter";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-8">
          <NextLink href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-tagW.svg"
              alt="Tazama Logo"
              width={260}
              height={100}
            />
          </NextLink>

          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Premium digital and large format printing for brands that care about
            quality, detail, and impact.
          </p>

          <div className="space-y-4 text-sm">
            <span className="flex items-center gap-2">
              <PhoneIcon size={18} />
              +254 715 829 262
            </span>
            <span className="flex items-center gap-2">
              <MailIcon size={18} />
              info@tazamadigital.co.ke
            </span>
          </div>
        </div>

        {/* Navigation */}
        <FooterColumn
          title="Navigate"
          items={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/" },
            { label: "Portfolio", href: "/" },
            { label: "Contact", href: "/" },
          ]}
        />

        {/* Products */}
        <FooterColumn
          title="Our Products"
          items={[
            { label: "Keychains", href: "/" },
            { label: "Custom Stickers", href: "/" },
            { label: "Mugs and Bottles", href: "/" },
            { label: "Booklets & Magazines", href: "/" },
          ]}
        />

        {/* Services */}
        <FooterColumn
          title="Services"
          items={[
            { label: "Digital Printing", href: "/" },
            { label: "Large Format", href: "/" },
            { label: "Branding", href: "/" },
            { label: "Design Support", href: "/" },
          ]}
        />
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} Tazama Digital. All rights reserved.
          </span>

          <span className="flex items-center gap-1">
            Powered by <span className="text-primary">KalaWaks</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.label}>
            <NextLink
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
