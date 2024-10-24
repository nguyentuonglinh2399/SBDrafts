import { AbstractControl, ValidationErrors } from "@angular/forms";

// export function checkDimensions(width: number, height: number, maxDimension: number): boolean {
//     if (width > maxDimension && height > maxDimension) {
//       return false;
//     } return true;
//   }

export function checkDimensions(group: AbstractControl): ValidationErrors | null {
    const width = parseInt(group.get('width')?.value);
    const height = parseInt(group.get('height')?.value);
    const maxBothDimensions = parseInt(group.get('maxDimensions').value);

    if (width > maxBothDimensions && height > maxBothDimensions) {
        console.log(`Dimensions Not Valid: ${width} and ${height}`)
        return { dimensionValid: false };
    } else {
        return null;
    }
}

export function checkDimensions2(control: any, maxDimensions: number) {
    const width  = this.productForm?.get('width')?.value;
    const height = this.productForm?.get('height')?.value;

    if (width > maxDimensions && height > maxDimensions) {
        return false;
    } else {
        return true;
    }
}

export function checkDimensions3(maxDimension: number) {
    return (control: any) => {
        const width  = this.productForm?.get('width')?.value;
        const height = this.productForm?.get('height')?.value;

        if (width > maxDimension && height > maxDimension) {
            return { invalid: true };
        } else {
            return null;
    }
    }
}