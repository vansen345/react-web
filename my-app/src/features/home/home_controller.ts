import { useState } from "react";
import type { HomeItem } from "../../../model/home_type";
import { useGetHomeListQuery } from "../../features/home/homeApiSlice";

export const useHomePageController = () => {
    const { data, isLoading } = useGetHomeListQuery({ limit: 10, offset: 0 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<HomeItem | undefined>();

    const handleItemClick = (item: HomeItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    const list: HomeItem[] = data?.elements ?? [];

    return {
        list,
        isLoading,
        isModalOpen,
        selectedItem,
        handleItemClick,
        handleOk,
        handleCancel,
    };
};