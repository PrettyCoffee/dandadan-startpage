import cozy from "@pretty-cozy/oxlint-config"
import { defineConfig } from "oxlint"

export default defineConfig({
  extends: [cozy.base],
  ignorePatterns: ["**/dist/**", "pnpm-lock.yaml"],
  categories: {
    correctness: "error",
    suspicious: "error",
    perf: "error",
  },
  options: {
    typeAware: true,
    typeCheck: true,
    reportUnusedDisableDirectives: "error",
    denyWarnings: true,
  },
})
