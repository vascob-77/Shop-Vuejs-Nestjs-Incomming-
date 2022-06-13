import type { Category } from './Filters.interface';

export interface IProduct {
    id:number,
    title:string;
    price:number;
    description:string;
    category: Category
}