"use client";
import NextLink from "next/link";
import Image from "next/image";
import { PhoneIcon, MailIcon } from "@/components/icons";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Brand + Contact */}
        <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
          <NextLink
            href="/"
            className="flex items-center justify-center lg:justify-start"
          >
            <Image
              src="/images/logo-tagW.svg"
              alt="Tazama Logo"
              width={150}
              height={80}
            />
          </NextLink>

          <p className="text-sm text-slate-400 max-w-sm mx-auto lg:mx-0 leading-relaxed">
            Premium digital and large format printing for brands that value
            clarity, craft, and consistency.
          </p>

          <div className="flex flex-col gap-3 items-center lg:items-start text-sm">
            <div className="flex items-center gap-3">
              <PhoneIcon size={14} />
              <span>+254 715 829 262</span>
            </div>

            <div className="flex items-center gap-3">
              <MailIcon size={14} />
              <span>info@tazamadigital.co.ke</span>
            </div>
          </div>
        </div>

        {/* Navigation Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 lg:col-span-3">
          {/*  */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} Tazama Digital. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Powered by <span className="text-pink-500">KalaWaks</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
