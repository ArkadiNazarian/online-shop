import { BiLogOut } from "react-icons/bi";
import { IModel } from "./model";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const View = (props: IModel) => (
    <div className="tw-mt-8 tw-w-screen">
        <div className="tw-grid tw-grid-cols-6 tw-mb-16">
            <p className="tw-text-3xl tw-text-custom_yellow tw-font-bold tw-col-start-2 tw-cursor-default">Dingo Shop</p>
            <div className="tw-flex tw-flex-row tw-ml-10 tw-col-start-3 tw-mt-8">
                <p className="tw-text-xl tw-font-semibold tw-mr-8 tw-text-custom_gray">Home</p>
                <p className="tw-text-xl tw-font-semibold tw-text-custom_gray hover:tw-cursor-pointer" onClick={() => props.handler_onView_products()}>Products</p>
            </div>
            <div className="tw-flex tw-flex-row tw-items-center tw-col-start-6">
                <div className="tw-relative tw-text-3xl tw-mr-2 tw-text-dark_purple tw-cursor-pointer" >
                    {props.products_amount !== 0 && <p className="tw-absolute tw-left-5 tw-text-sm tw-bottom-3 tw-text-custom_background tw-bg-custom_gray tw-p-1 tw-rounded-full">{props.products_amount}</p>}
                    <AiOutlineShoppingCart />
                </div>
                <div className="tw-flex tw-flex-row tw-items-center tw-mr-3 tw-cursor-pointer tw-text-dark_purple" onClick={() => props.handler_onView_account()}>
                    <RiAccountCircleLine className="tw-text-3xl" />
                    <p>{props.first_name}</p>
                </div>
                <div className="tw-bg-dark_purple tw-cursor-pointer tw-text-custom_white tw-w-24 tw-h-8 tw-flex tw-flex-row tw-rounded-2xl tw-items-center" onClick={() => props.action_logout()}>
                    <p className="tw-mr-2 tw-ml-3">LogOut</p>
                    <BiLogOut />
                </div>
            </div>
        </div>
    </div>
)