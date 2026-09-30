import { injectBookmarks } from "./bookmarks.js"
import { updateVariant } from "./variants.js"

const bookmarks = [
  {
    label: "reddit",
    items: {
      "r/startpages": "https://www.reddit.com/r/startpages",
      "r/unixporn": "https://www.reddit.com/r/unixporn",
      "r/webdev": "https://www.reddit.com/r/webdev",
      "r/coolgithubprojects ": "https://www.reddit.com/r/coolgithubprojects ",
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
    label: "ressources",
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
