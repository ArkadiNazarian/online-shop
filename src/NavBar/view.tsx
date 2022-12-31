import { BiLogOut } from "react-icons/bi";
import { IModel } from "./model";
import { RiAccountCircleLine } from "react-icons/ri";

export const View = (props: IModel) => (
    <div className="tw-mt-8 tw-w-screen">
        <div className="tw-grid tw-grid-cols-6">
            <p className="tw-text-3xl tw-text-custom_yellow tw-font-bold tw-col-start-2 tw-cursor-default">Dingo Shop</p>
            <div className="tw-flex tw-flex-row tw-ml-10 tw-col-start-3 tw-mt-8">
                <p className="tw-text-xl tw-font-semibold tw-mr-8 tw-text-custom_gray">Home</p>
                <p className="tw-text-xl tw-font-semibold tw-text-custom_gray">Products</p>
            </div>
            <div className="tw-flex tw-flex-row tw-items-center tw-col-start-6">
                <RiAccountCircleLine className="tw-mr-3 tw-cursor-pointer tw-text-3xl tw-text-dark_purple"/>
                <div className="tw-bg-dark_purple tw-cursor-pointer tw-text-custom_white tw-w-24 tw-h-8 tw-flex tw-flex-row tw-rounded-2xl tw-items-center" onClick={() => props.action_logout()}>
                    <p className="tw-mr-2 tw-ml-3">LogOut</p>
                    <BiLogOut />
                </div>
            </div>
        </div>
    </div>
)