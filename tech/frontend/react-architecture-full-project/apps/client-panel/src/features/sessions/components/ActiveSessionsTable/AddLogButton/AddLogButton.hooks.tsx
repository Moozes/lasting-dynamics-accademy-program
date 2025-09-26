import { MutableRefObject, useState } from "react";
import Webcam from "react-webcam";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { useAddNewLogSchema } from "@features/sessions/schemas";
import { api } from "@services/index";

export const useAddLogForm = () => {
    const newLogInitialValues = {
        description: "",
    };
    const { AddNewLogSchema } = useAddNewLogSchema();
    return { newLogInitialValues, AddNewLogSchema };
};

export const UseUploadFile = async (id: string, data: any, files: File[]) => {
    const response = await api.post(`/sessions/${id}/logs/`, data);
    const storage = getStorage();
    const uploadPromises = files.map(async (file) => {
        const file_path = response.data.log.media + file.name;
        const storageRef = ref(storage, file_path);
        return uploadBytes(storageRef, file);
    });
    await Promise.all(uploadPromises);

    return response.data;
};

export const UseSelectFiles = () => {
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [cameraActive, setCameraActive] = useState<boolean>(false); // State to track camera status

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const selectedFiles = Array.from(event.target.files as FileList).filter((file) =>
            file.type.startsWith("image/")
        );

        if (imageFiles.length > 0) {
            const concatenatedImages = selectedFiles.concat(imageFiles);
            setImageFiles(concatenatedImages);
        } else {
            setImageFiles(selectedFiles);
        }
    }

    const handleDeleteSelectedFile = (file: File) => {
        const selectedFiles = [...imageFiles];
        selectedFiles.splice(
            selectedFiles.findIndex((row) => row.name === file.name),
            1
        );
        setImageFiles(selectedFiles);
    };

    const handleToggleCamera = () => {
        setCameraActive((prevActive) => !prevActive);
    };

    const handleCameraCapture = async (webcamRef: MutableRefObject<Webcam | null>) => {
        if (webcamRef.current) {
            const capturedImage = webcamRef.current.getScreenshot();

            if (capturedImage) {
                const blob = await fetch(capturedImage).then((response) => response.blob());

                const capturedFile = new File([blob], `LOG-${new Date().toISOString()}.png`, { type: "image/png" });
                setImageFiles((prevFiles) => [...prevFiles, capturedFile]);
            }
            handleToggleCamera();
        }
    };

    const resetFiles = () => {
        setImageFiles([]);
    };

    return {
        imageFiles,
        handleImageChange,
        handleDeleteSelectedFile,
        handleToggleCamera,
        cameraActive,
        handleCameraCapture,
        resetFiles,
    };
};
