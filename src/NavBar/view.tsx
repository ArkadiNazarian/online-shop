import { IModel } from "./model";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

export const View = (props: IModel) => (
    <div className="tw-relative">
        <div className="tw-grid tw-grid-cols-6 tw-mb-16">
            <p className="tw-text-3xl tw-font-bold tw-col-start-2 tw-cursor-default">Dingo
                <p className="tw-text-sm tw-pl-2">eCommerce</p>
            </p>
            <div className="tw-flex tw-flex-row tw-ml-10 tw-col-start-3 tw-mt-8">
                <p className="tw-text-xl tw-font-semibold tw-mr-8 tw-text-custom_gray">Home</p>
                <div className="tw-relative tw-group tw-text-xl tw-font-semibold tw-text-custom_gray hover:tw-cursor-pointer" onClick={() => props.handler_onView_products()}>Categories
                    <div className="group-hover:tw-opacity-100 tw-opacity-0 tw-duration-700 tw-absolute tw-bg-white tw-top-10 tw-rounded-lg">
                        <div className="tw-absolute tw-left-2 tw-bottom-[9.5rem] tw-w-4 tw-h-4 tw-bg-white tw-rotate-45"></div>
                        <div className="tw-grid tw-grid-cols-2 tw-w-72 tw-shadow-xl">
                            <p className="tw-text-base tw-p-2">Electronics</p>
                            <p className="tw-text-base tw-p-2">Computers</p>
                            <p className="tw-text-base tw-p-2">Television</p>
                            <p className="tw-text-base tw-p-2">Smart Home</p>
                            <p className="tw-text-base tw-p-2">Fashion</p>
                            <p className="tw-text-base tw-p-2">Luggage</p>
                            <p className="tw-text-base tw-p-2">Automotive</p>
                        </div>
                    </div>
                </div>
                <p className="tw-text-xl tw-font-semibold tw-ml-8 tw-text-custom_gray">Products</p>
            </div>
            <div className="tw-flex tw-flex-row tw-items-center tw-col-start-6">
                <div className="tw-flex tw-flex-row tw-items-center tw-mr-3 tw-cursor-pointer" onClick={() => props.handler_onView_account()}>
                    <RiAccountCircleLine className="tw-text-3xl" />
                    <p>{props.first_name}</p>
                </div>
                <div className="tw-flex tw-flex-row tw-items-center tw-relative tw-text-3xl tw-mr-2 tw-cursor-pointer" >
                    <p className="tw-flex tw-items-center tw-justify-center tw-absolute tw-left-5 tw-text-[12px] tw-bottom-3 tw-bg-custom_red tw-text-custom_white tw-w-5 tw-h-5 tw-rounded-full">{props.products_amount}</p>
                    <AiOutlineShoppingCart onClick={() => props.handler_onView_card()} />
                </div>
                <div className="tw-flex tw-flex-row tw-items-center tw-mr-3 tw-cursor-pointer">
                    <BsChevronLeft className="tw-text-lg" onClick={() => props.handler_onView_card()} />
                </div>
            </div>
        </div>
        <div className={`tw-absolute tw-bg-custom_second_grey tw-h-screen tw-top-0 tw-right-0 tw-duration-200 ${props.open_side_bar ? "tw-w-96" : "tw-w-0"}`}>
            <div className={`tw-duration-100 ${props.open_side_bar ? "" : "tw-scale-0"} tw-cursor-pointer tw-border tw-h-5 tw-w-5 tw-border-custom_black tw-rounded-full tw-bg-white tw-flex tw-items-center tw-justify-center`}>
                <BsChevronRight className={`tw-w-full tw-duration-200 ${props.open_side_bar ? "" : "tw-scale-0"}`} onClick={() => props.handler_onView_card()} />
            </div>
            <div className={`tw-w-full tw-duration-200 ${props.open_side_bar ? "" : "tw-scale-0"}`}>
                <p>card</p>
            </div>

        </div>
    </div>
)