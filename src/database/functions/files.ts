import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

import { IFileUpload } from "@/utils/interfaces/types";

export const handleFileUpload = async (file: File, path: string) => {
    const storageRef = ref(storage, `${path}/${file.name}`);
    await uploadBytes(storageRef, file);
    return {
        fileUrl: await getDownloadURL(storageRef),
        fileRef: `${path}/${file.name}`
    }
};

export const handleFilesUpload = async (files: File[], path: string): Promise<IFileUpload[]> => {
    const filesUpload: IFileUpload[] = [];
    for (let i = 0; i < files.length; i++) {
        let random_6hex = Math.random().toString(16).substring(2, 8)
        let fullPath = `${path}/${random_6hex}_${files[i].name.replaceAll(' ', '_')}`
        const storageRef = ref(storage, fullPath);
        await uploadBytes(storageRef, files[i]);
        filesUpload.push({
            fileUrl: await getDownloadURL(storageRef),
            fileRef: fullPath
        })
        console.log("uploaded file: ", i)
    }
    return filesUpload
}

export const handleDeleteFile = async (fileRef: string) => {
    const storageRef = ref(storage, fileRef);
    await deleteObject(storageRef);
    return true
}