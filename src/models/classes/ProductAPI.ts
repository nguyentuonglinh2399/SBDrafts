import { IDimensions, IProductAPI2 } from "../interfaces/testInterface";

export class ProductAPI {
    name: string;
    id: number;
    basePrice: number;
    weight?: number;
    type: string;
    dimensions: IDimensions;
    materialOptions?: string[];
    finishingOptions?: string[];
    description: string;
    thumbnails: string[] | string;
    files: string

    constructor(data?: IProductAPI2) {
        this.name = data ? data.name : "",
        this.id = data ? data.id : 0,
        this.basePrice = data ? data.basePrice : 0,
        this.type = data ? data.type : "",
        this.dimensions = data ? data.dimensions : {
            enable: false,
        },
        this.materialOptions = data ? data.materialOptions : [],
        this.finishingOptions = data ? data.finishingOptions : [],
        this.description = data ? data.description : "",
        this.thumbnails = data ? data.thumbnails : [],
        this.files = data ? data.files : ""
    }

    hasFinalDimensions() {
        return ('finalDimensions' in this.dimensions);
    }

    hasMaterialOptions() {
        return ('materialOptions' in this);
    }

    hasAttribute(attr: string) {
        return attr in this;
    }

    getFinalDimensions() {
        return `${this.dimensions.finalDimensions.width} x ${this.dimensions.finalDimensions.height}`
    }

    checkMaterial() {
        if (this.materialOptions === undefined) {
            return null;
        } else if (this.materialOptions.length == 1) {
            return this.materialOptions[0]
        } else {
            return true;
        }
    }
}