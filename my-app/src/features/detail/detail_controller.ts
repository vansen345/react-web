import { useEffect, useRef } from "react";
import type { HomeItem } from "../../../model/home_type";
import { useGetDetailMutation } from "../../features/detail/detailApiSlice";

export const useDetailController = (item: HomeItem | undefined) => {
    const [getDetail, { data, isLoading }] = useGetDetailMutation();
    const getDetailRef = useRef(getDetail);

    useEffect(() => {
        if (item) {
            getDetailRef.current({ PV325: item.PV325, PP300: item.PP300, FT300: item.FT300 });
        }
    }, [item]);

    return {
        detail: data?.elements,
        isLoading,
    };
};