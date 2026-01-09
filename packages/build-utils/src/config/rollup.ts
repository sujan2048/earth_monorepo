import type { RollupOptions, InputPluginOption } from "rollup"

type DefineConfig = {
  input: string
  mainName: string
  moduleName: string
  external?: string[]
  sourcemap?: boolean
  plugins?: InputPluginOption
}

export const defineRollupConfig = ({
  input,
  mainName,
  moduleName,
  external = [],
  sourcemap = false,
  plugins = [],
}: DefineConfig): RollupOptions => {
  return {
    input,
    treeshake: true,
    external,
    output: [
      {
        file: mainName,
        exports: "named",
        format: "cjs",
        sourcemap,
        generatedCode: {
          constBindings: true,
          arrowFunctions: true,
          objectShorthand: true,
        },
      },
      {
        file: moduleName,
        format: "es",
        sourcemap,
        generatedCode: {
          constBindings: true,
          arrowFunctions: true,
          objectShorthand: true,
        },
      },
    ],
    plugins,
    onwarn(warning, next) {
      if (warning.code !== "UNUSED_EXTERNAL_IMPORT") {
        next(warning)
      }
    },
  }
}
