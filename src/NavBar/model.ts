export interface IModel {
    first_name?: string;
    last_name?: string;
    action_logout: () => void;
    handler_onView_account: () => void;
}