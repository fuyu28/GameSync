import { ipcRenderer } from "electron"
import { ValidatePathResult } from "../../types/file"
import { ApiResult } from "../../types/result"

export const fileAPI = {
  selectFile: (filters: Electron.FileFilter[]): Promise<ApiResult<string | undefined>> =>
    ipcRenderer.invoke("select-file", filters),
  selectFolder: (): Promise<ApiResult<string | undefined>> => ipcRenderer.invoke("select-folder"),
  validateFile: (filePath: string, expectType?: string): Promise<ValidatePathResult> =>
    ipcRenderer.invoke("validate-file", filePath, expectType)
}
