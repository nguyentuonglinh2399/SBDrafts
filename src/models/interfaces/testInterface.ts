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

export interface IMainProduct {
    name: string,
    sku: string,
    price: number,
    weight: number,
    maxBothDimensions?: number,
    finishingOptions: string[]
}

export interface ICheckAPI {
    isOnline: boolean,
    port: number,
}

export interface IAPIResponseModel {
    status: string,
    message: string,
    findProduct?: IProductAPI2
}

export interface IProductAPI2 {
    name: string,
    id: number,
    basePrice: number,
    weight?: number,
    type: string,
    dimensions: IDimensions,
    materialOptions?: string[],
    finishingOptions?: string[],
    description: string,
    thumbnails: string[] | string,
    files: string
}

export interface IDimensions {
    enable: boolean,
    isSlit?: boolean,
    maxBothDimensions?: number,
    maxDimensionAllowed?: number,
    starter?: number
    finalDimensions?: {
        width: number,
        height: number
    }
}