import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          globals: true,
          name: "develop-utils",
          include: ["packages/develop-utils/test/**/*.{test,spec}.ts"],
          environment: "node",
        },
      },
      {
        test: {
          globals: true,
          name: "@anstec/earth",
          include: ["packages/@anstec/earth/test/**/*.{test,spec}.ts"],
          environment: "jsdom",
        },
      },
    ],
  },
})
