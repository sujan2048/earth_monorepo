import fs from "node:fs"

export const createRelease = (orgPath: string, tarPath: string) => {
  fs.copyFile(orgPath, tarPath, (err: NodeJS.ErrnoException | null) => {
    if (err) console.error(err)
  })
}
