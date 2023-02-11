import { Categories } from "./enums";

export const categories_title = (category: Categories) => {
    switch (category) {
        case 0:
            return "CellPhone"
        case 1:
            return "ComputerAndLaptop"
        case 2:
            return "Camera"
        case 3:
            return "KitchenAndDining"
        case 4:
            return "Bedding"
        case 5:
            return "Bath"
    }
}