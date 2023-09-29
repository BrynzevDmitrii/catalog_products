export interface IProduct {
    id: number
    quantity?:number
    title: string
    price: number
    category: string
    description?: string
    image?: string
    rating?:IRating
}

export interface IRating {
    rate?: number
    count?: number
}

export interface ICreateProduct {
        id?:number
        title: string
        price: number
        category: string
        description?: string | undefined
        image?: string
}