import { useMutation } from "@tanstack/react-query";

import { api } from "@services/index";

import { TicketValuesType } from "./AddTicketButton.types";

export const useAddTicketQuery = ({
    imageFiles,
    onSuccess,
    onError,
}: {
    imageFiles: File[];
    onSuccess: any;
    onError: any;
}) => {
    return useMutation({
        mutationFn: (values: TicketValuesType) => {
            const formData = new FormData();
            formData.append("subject", values.subject);
            formData.append("type", values.type);
            formData.append("help_type", values.help_type);
            formData.append("message", values.message);
            imageFiles.forEach((file) => formData.append("attachments", file));
            return api.post(`/tickets/`, formData);
        },
        onSuccess,
        onError,
    });
};
