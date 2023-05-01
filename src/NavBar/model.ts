export interface IModel {
    first_name?: string;
    last_name?: string;
    products_amount?: number;
    open_side_bar: boolean;
    action_logout: () => void;
    handler_onView_account: () => void;
    handler_onView_products: () => void;
    handler_onView_card: () => void;
}