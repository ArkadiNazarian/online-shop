export interface IFormModel {
    first_name?: string;
    last_name?: string;
    email?: string;
    handler_onView_account:()=>void;
    on_account:boolean;
}