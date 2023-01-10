export interface IFormModel {
    first_name?: string;
    last_name?: string;
    email?: string;
    handler_onView_account: () => void;
    handler_onView_address: () => void;
    handler_onView_password: () => void;
    on_account: boolean;
    on_password: boolean;
    on_address: boolean;
}