import { Link } from "react-router-dom";
import { IModel } from "./model";
import { TfiMenu } from "react-icons/tfi";
import { AiFillShop } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

export const View = (props: IModel) => (
    <div className="tw-h-1/2 tw-w-1/6 tw-bg-dark_purple tw-flex tw-flex-col tw-pl-4">
        <p className="tw-text-custom_white tw-text-2xl "><TfiMenu className="tw-mr-4 tw-text-custom_pink"/>Dingo Shop</p>
        <Link to={props.products_path} className="tw-text-custom_white tw-mb-4 tw-no-underline tw-text-xl tw-ml-4 tw-flex tw-items-center"><AiFillShop className="tw-mr-4"/>Products</Link>
        <Link to={props.account_path} className="tw-text-custom_white tw-mb-4 tw-no-underline tw-text-xl tw-ml-4 tw-flex tw-items-center"><MdAccountCircle className="tw-mr-4"/>My Account</Link>

    </div>
)