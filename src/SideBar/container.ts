import { routes } from "../Routes/routes";
import { IModel } from "./model";

export const useContainer = (): IModel => {

    const app_routes = routes();

    return {
        account_path: app_routes.account_path,
        products_path:app_routes.products_path
    }
}