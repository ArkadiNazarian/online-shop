import { useState } from "react";
import { route_names } from "../Routes/route-names";
import { IModel } from "./model";

export const useContainer = (): IModel => {

    const app_routes = route_names();

    const [show_items, set_show_items] = useState(false);

    const handle_dropdown = () => {
        set_show_items(show_items => !show_items);
    }

    return {
        sign_up: app_routes.signup_path,
        handle_dropdown,
        show_items
    }
}