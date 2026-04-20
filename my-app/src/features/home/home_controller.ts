import { useCallback, useEffect, useRef, useState } from "react";
import type { HomeItem } from "../../../model/home_type";
import { useLazyGetHomeListQuery } from "../../features/home/homeApiSlice";

const LIMIT = 10;

export const useHomePageController = () => {
    const [list, setList] = useState<HomeItem[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<HomeItem | undefined>();

    const isLoadingRef = useRef(false);
    const offsetRef = useRef(0);
    const hasMoreRef = useRef(true);
    const isInitializedRef = useRef(false); // ← thêm
    const bottomRef = useRef<HTMLDivElement>(null);

    const [trigger] = useLazyGetHomeListQuery();

    const fetchList = useCallback(async (newOffset: number, isInitial = false) => {
        if (isLoadingRef.current || (!isInitial && !hasMoreRef.current)) return;

        isLoadingRef.current = true;
        setIsLoading(true);

        try {
            const { data } = await trigger({ limit: LIMIT, offset: newOffset });
            if (data) {
                const newItems = data.elements ?? [];
                const newHasMore = newItems.length === LIMIT;

                setList((prev) => {
                    const existingIds = new Set(prev.map(item => item._id));
                    const uniqueItems = newItems.filter(item => !existingIds.has(item._id));
                    return [...prev, ...uniqueItems];
                });

                setHasMore(newHasMore);
                offsetRef.current = newOffset + LIMIT;
                hasMoreRef.current = newHasMore;
            }
        } finally {
            isLoadingRef.current = false;
            setIsLoading(false);
        }
    }, [trigger]);

    // Load lần đầu
    useEffect(() => {
        if (!isInitializedRef.current) {
            isInitializedRef.current = true;
            fetchList(0, true);
        }
    }, [fetchList]);

    // Auto load more khi chưa đủ content
    useEffect(() => {
        if (list.length > 0 && !isLoading && hasMoreRef.current) {
            if (window.innerHeight >= document.documentElement.scrollHeight - 50) {
                fetchList(offsetRef.current);
            }
        }
    }, [list, isLoading, fetchList]);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 50
            ) {
                if (hasMoreRef.current && !isLoadingRef.current) {
                    fetchList(offsetRef.current);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [fetchList]);

    const handleItemClick = (item: HomeItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    return {
        list,
        isLoading,
        isModalOpen,
        selectedItem,
        handleItemClick,
        handleOk,
        handleCancel,
        hasMore,
        bottomRef,
    };
};