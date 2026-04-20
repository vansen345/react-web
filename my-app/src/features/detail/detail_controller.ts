import { useEffect } from "react";
import type { HomeItem } from "../../../model/home_type";
import { useGetDetailMutation } from "../../features/detail/detailApiSlice";

export const useDetailController = (item: HomeItem | undefined) => {
    const [getDetail, { data, isLoading }] = useGetDetailMutation();

    useEffect(() => {
        if (item) {
            getDetail({ PV325: item.PV325, PP300: item.PP300, FT300: item.FT300 });
        }
    }, [item, getDetail]);

    return {
        detail: data?.elements,
        isLoading,
    };
};