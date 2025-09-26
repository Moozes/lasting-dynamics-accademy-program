import { FormEvent, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { debounce } from "lodash";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { useAddEventMutation, useGetLabelsQuery } from "@queries/index";

export const useSearchData = () => {
    const organizationId = useAtomValue(authAtom).wergonicUser?.organization?.id;
    const [searchValue, setSearchValue] = useState("");
    const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);
    const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };
    useEffect(() => {
        // Debounce input state
        const handler = debounce(() => setDebouncedSearchValue(searchValue), 500); // Adjust the delay as needed
        handler();
        // Cleanup the debounce handler
        return () => handler.cancel();
    }, [searchValue]);
    const { data, isFetching, isError } = useGetLabelsQuery({
        urlOptions: {
            organizationId,
            URLPageNumber: "",
            URLPageSize: "",
            URLsearchterm: debouncedSearchValue,
        },
        queryOptions: {
            enabled: Boolean(debouncedSearchValue),
        },
    });

    return {
        searchValue,
        onChangeHandler,
        data,
        isFetching,
        isError,
    };
};

export const useAddEvent = (sessionId: string, closePopover: () => void) => {
    const t = useTranslationV2();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    // isLoading here reflects the loading state of the last mutation that was fired, if multiple mutations were fired after each other
    // onSuccess and onError fire for each mutation seperately
    const { mutate, isLoading } = useAddEventMutation({
        sessionId,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["sessions"] });
            enqueueSnackbar(t("category_and_labels_management.event_created_successfully"));
            closePopover();
        },
        onError: (err: any) => {
            let message;
            if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    return { addEvent: mutate, isLastMutationLoading: isLoading };
};
