// MyButton.tsx
import { extendVariants, Button } from "@heroui/react";

export const MyButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      olive: "text-[#000] bg-[#84cc16]",
      tazama: "text-[#fff] bg-[#F31260]",
      tazamablue: "text-[#fff] bg-[#0099FF]",
      orange: "bg-[#ff8c00] text-[#fff]",
      violet: "bg-[#8b5cf6] text-[#fff]",

      redglass:
        "text-white bg-red-600/30 backdrop-blur-sm border border-red-400/40 hover:bg-red-600/50 transition-all duration-300 [&>span]:overflow-hidden [&_svg]:transition-all [&_svg]:duration-300 [&_svg]:opacity-0 [&_svg]:translate-x-[-10px] hover:[&_svg]:opacity-100 hover:[&_svg]:translate-x-0",
      glass:
        "text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 [&>span]:overflow-hidden [&_svg]:transition-all [&_svg]:duration-300 [&_svg]:opacity-0 [&_svg]:translate-x-[-10px] hover:[&_svg]:opacity-100 hover:[&_svg]:translate-x-0",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
      md: "px-4 min-w-20 h-12 text-small gap-2 rounded-none",
      xl: "px-6 min-w-28 h-12 text-medium gap-4 rounded-small",
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    color: "olive",
    size: "xl",
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      isDisabled: true,
      color: "olive",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});
