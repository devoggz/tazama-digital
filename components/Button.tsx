// MyButton.tsx
import { extendVariants, Button } from "@heroui/react";

export const MyButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      olive: "text-[#000] bg-[#84cc16] hover:bg-[#84cc16]/90",
      tazama: "text-[#fff] bg-[#F31260] hover:bg-[#F31260]/90",
      tazamablue: "text-[#fff] bg-[#0099FF] hover:bg-[#0099FF]/90",
      orange: "bg-[#ff8c00] text-[#fff] hover:bg-[#ff8c00]/90",
      violet: "bg-[#8b5cf6] text-[#fff] hover:bg-[#8b5cf6]/90",
      redglass:
        "text-white bg-red-600/30 dark:bg-red-600/40 backdrop-blur-sm border border-red-400/40 dark:border-red-400/50 hover:bg-red-600/50 dark:hover:bg-red-600/60 transition-all duration-300 [&>span]:overflow-hidden [&_svg]:transition-all [&_svg]:duration-300 [&_svg]:opacity-0 [&_svg]:translate-x-[-10px] hover:[&_svg]:opacity-100 hover:[&_svg]:translate-x-0",
      glass:
        "text-zinc-900 dark:text-white bg-zinc-200/80 dark:bg-white/20 backdrop-blur-sm border border-zinc-300 dark:border-pink/30 hover:bg-zinc-300/80 dark:hover:bg-white/30 transition-all duration-300 [&>span]:overflow-hidden [&_svg]:transition-all [&_svg]:duration-300 [&_svg]:opacity-0 [&_svg]:translate-x-[-10px] hover:[&_svg]:opacity-100 hover:[&_svg]:translate-x-0",
    },
    isDisabled: {
      true: "bg-[#eaeaea] dark:bg-zinc-700 text-[#000] dark:text-zinc-400 opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-sm",
      xl: "px-6 min-w-28 h-12 text-medium gap-4 rounded-sm",
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
