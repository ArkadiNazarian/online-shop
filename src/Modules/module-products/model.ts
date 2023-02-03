export interface IFormModel {
    electronics: boolean;
    home: boolean;
    car: boolean;
    handler_onView_electronics: () => void;
    handler_onView_home: () => void;
    handler_onView_car: () => void;
}