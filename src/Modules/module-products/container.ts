import { useState } from "react"
import { IFormModel } from "./model";

export const useContainer = (): IFormModel => {

    const [electronics, set_electronics] = useState<boolean>(false);
    const [home, set_home] = useState<boolean>(false);
    const [car, set_car] = useState<boolean>(false);

    const handler_onView_electronics = () => {
        set_electronics(electronics => !electronics);
    }

    const handler_onView_home = () => {
        set_home(home => !home);
    }

    const handler_onView_car = () => {
        set_car(car => !car);
    }

    return {
        electronics,
        home,
        car,
        handler_onView_home,
        handler_onView_electronics,
        handler_onView_car
    }
}