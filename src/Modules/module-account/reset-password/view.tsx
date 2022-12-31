import { IModel } from "./model";

export const View = (props: IModel) => (
    <div className={props.password_modal ? "tw-fixed tw-inset-0 tw-bg-custom_black tw-bg-opacity-30 tw-backdrop-blur-sm tw-flex tw-justify-center tw-items-center" : "tw-hidden"}>
        <div className="tw-bg-custom_white tw-p-2 tw-rounded-md ">My Modal</div>
        <button onClick={() => props.handler_onView_password()}>close</button>
    </div>
)


