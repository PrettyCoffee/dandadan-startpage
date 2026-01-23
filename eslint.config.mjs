import { readdirSync } from "node:fs"

import prettyCozy from "@pretty-cozy/eslint-config"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig(
  prettyCozy.baseJs,
  prettyCozy.prettier
)
