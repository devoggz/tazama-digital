// MyButton.tsx
import { extendVariants, Button } from "@heroui/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      olive: "text-[#000] bg-[#84cc16] hover:bg-[#84cc16]/90",
      tazama: "text-white bg-[#F31260] hover:bg-[#F31260]/90",
      tazamablue: "text-white bg-[#0099FF] hover:bg-[#0099FF]/90",
      orange: "text-white bg-[#ff8c00] hover:bg-[#ff8c00]/90",
      violet: "text-white bg-[#8b5cf6] hover:bg-[#8b5cf6]/90",

      /* ---------------- Glass (clean & stable) ---------------- */
      glass:
        "text-zinc-900 dark:text-white " +
        "bg-zinc-200/80 dark:bg-white/20 " +
        "backdrop-blur-sm border   " +
        "hover: hover:text-pink-600 border-white/40 dark:border-white/50",

      /* ---------------- Pink Outline (new) ---------------- */
      pinkOutline:
        "text-[#F31260] bg-transparent border border-[#F31260] " +
        "hover:bg-[#F31260] hover:text-white",

      /* ---------------- Optional red glass (also cleaned) ---------------- */
      redglass:
        "text-white bg-red-600/30 dark:bg-red-600/40 " +
        "backdrop-blur-sm border border-pink-400/40 dark:border-pink-400/50 " +
        "hover:bg-pink-600",
    },

    isDisabled: {
      true:
        "bg-[#eaeaea] dark:bg-zinc-700 " +
        "text-[#000] dark:text-zinc-400 " +
        "opacity-50 cursor-not-allowed",
    },

    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-sm",
      xl: "px-6 min-w-28 h-12 text-medium gap-2 rounded-sm",
    },
  },

  defaultVariants: {
    color: "olive",
    size: "xl",
  },

  compoundVariants: [
    {
      isDisabled: true,
      color: "olive",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});
