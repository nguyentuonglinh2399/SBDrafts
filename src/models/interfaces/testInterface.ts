export interface IProductMain {
    productName: string,
    productImg: string,
    price: string,
    prevPrice?: string,
    sales: boolean,
    review: string
}

export interface IProductCarousel {
    productName: string,
    productImg: string,
}

export interface IRec {
    productName: string,
    productImg: string,
    productType?: string,
    price: number
}

export interface IProductSpec {
    display: string,
    processor: string,
    camera: string,
    memory: string,
    graphics: string
}

export interface IProductAPI {
    id: number,
    sku: string,
    name: string,
    material: string
}

export interface ICheckAPI {
    isOnline: boolean,
    port: number,
}