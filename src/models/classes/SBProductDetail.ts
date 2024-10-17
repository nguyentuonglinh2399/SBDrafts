export class SBProductDetail {
    thumbnails: string[];
    name: string;
    ratings: string;
    price: number;
    maxBothDimensions?: number;
    width?: number;
    height?: number;
    description: string;
    material: string;
    finishingOption?: string;
    stand?: string;
    carpet?: string;
    files?: string[];

    constructor() {
        this.thumbnails = [];
        this.name = "";
        this.ratings = "";
        this.price = 0;
        this.description = "";
        this.material = "";
    }

    checkDimensions(): boolean {
        if (this.maxBothDimensions) {
            if (this.width > this.maxBothDimensions && this.height > this.maxBothDimensions) {
                return false;
            }
        }
        return true;
    }
}