import { injectBookmarks } from "./bookmarks.js"
import { updateVariant } from "./variants.js"

const bookmarks = [
  {
    label: "shit",
    items: {
      "devforum": "https://devforum.roblox.com/t/what-are-you-working-on-currently-2024/2787544",
      "brainrot": "https://www.youtube.com",
      "steam": "https://store.steampowered.com",
      "weather": "https://www.ventusky.com/?p=39.1;-103.9;5&l=feel&t=20250110/0300",
    },
  },
  {
    label: "tools",
    items: {
      "img > compress": "https://compressimage.io/",
      "img > upscale": "https://bigjpg.com/",
      "css > shadows": "https://www.joshwcomeau.com/shadow-palette/",
      "js > bundlephobia": "https://bundlephobia.com/",
    },
  },
  {
    label: "libs",
    items: {
      tailwind: "https://tailwindcss.com/docs/customizing-colors",
      shadcn: "https://ui.shadcn.com/docs/components",
    },
  },
  {
    label: "resources",
    items: {
      "react > bulletproof": "https://github.com/alan2207/bulletproof-react",
      "js > patterns": "https://www.patterns.dev/#patterns",
    },
  },
]

injectBookmarks(bookmarks)

// Select a random variant
updateVariant()
// Or set a static variant
// updateVariant("momo-1")

// For debugging
/*
function iterateVariants() {
  updateVariant()
  setTimeout(iterateVariants, 5000)
}
iterateVariants()
*/
