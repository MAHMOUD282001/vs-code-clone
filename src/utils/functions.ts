import { IFile } from "../interfaces";

export const isFileExists = (arr: IFile[], id: string): boolean => {
    return arr.some((item) => item.id === id);
}