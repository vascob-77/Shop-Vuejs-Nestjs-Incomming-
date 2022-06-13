export type Category = 'caca ?' | 'futur ?' | 'trolling ?' | 'all';

export interface IFilters {
    search:string,
    priceRange:[number,number],
    category: Category
}

export interface IFilterUpdate {
    search?: string,
    price?:[number,number],
    category?: Category
}