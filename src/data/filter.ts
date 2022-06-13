import type { IFilters } from "@/interfaces";

export const DEFAULT_FILTERS: IFilters = {
    search: "",
    priceRange: [0, 10000],
    category: "all",
}