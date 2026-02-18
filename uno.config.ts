import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
} from "unocss";

import presetUno from "@unocss/preset-wind3";

import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        outfit: [
          {
            name: "Outfit",
            weights: ["400", "500", "600", "700"],
            italic: false,
          },
        ],
        "jetbrains-mono": [
          {
            name: "JetBrains Mono",
            weights: ["400", "500", "700"],
            italic: false,
          },
        ],
      },
    }),
  ],
  safelist: [
    "i-lucide:component",
    "i-lucide:file-code",
    "i-lucide:braces",
    "i-lucide:code",
    "i-lucide:palette",
    "i-lucide:database",
    "i-lucide:code",
    "i-lucide:zap",
    "i-lucide:candy",
    "i-lucide:feather",
    "i-lucide:book",
    "i-lucide:git-branch",
    "i-lucide:box",
    "i-lucide:terminal",
    "i-lucide:workflow",
    "i-lucide:monitor",
    "i-lucide:server",
    "i-lucide:database",
    "i-lucide:container",
    "i-lucide:wrench",
    "i-lucide:square-arrow-out-up-right",
  ],
  theme: {
    colors: {
      accent: "#ff0f40",
      "accent-hover": "#ff2d55",
      primary: "#0a0a0a",
      secondary: "#141414",
      bg: {
        card: "#1a1a1a",
      },
      text: {
        primary: "#ffffff",
        secondary: "#a0a0a0",
      },
      border: "#2a2a2a",
    },
  },
  shortcuts: [
    {
      "btn-primary":
        "px-6 py-3 rounded-lg border border-accent text-accent hover:(bg-accent text-primary) transition-all duration-300 cursor-pointer",
      "btn-solid":
        "px-6 py-3 rounded-lg bg-accent text-white hover:bg-accent-hover transition-all duration-300 cursor-pointer",
      card: "bg-bg-card border border-border rounded-xl p-6",
      "section-title": "text-(3xl text-primary) md:text-4xl font-bold mb-8",
      "link-accent":
        "text-accent hover:text-accent-hover transition-colors duration-300",
    },
    [
      /^status-(.*)$/,
      ([, color]) => `size-4 border-(primary 2) bg-${color} rounded-full`,
    ],
  ],
  transformers: [transformerVariantGroup()],
});
