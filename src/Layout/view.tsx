import { Link } from "react-router-dom";
import { IModel } from "./model";
import { TfiMenu } from "react-icons/tfi";
import { AiFillShop } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

export const View = (props: IModel) => (
    <div className="tw-flex tw-flex-col tw-h-96 tw-w-52 tw-bg-dark_purple tw-pl-4 tw-rounded-r-xl tw-justify-between tw-pb-2">
        <div className="tw-flex tw-flex-col">
            <p className="tw-text-custom_white tw-text-2xl "><TfiMenu className="tw-mr-4 tw-text-custom_yellow" />Dingo Shop</p>
            <Link to={props.sign_up} className="tw-text-custom_white tw-mb-4 tw-no-underline tw-text-xl tw-ml-4 tw-flex tw-items-center" onClick={() => props.handle_dropdown()}>
                <AiFillShop className="tw-mr-4" />
                Products
                {
                    props.show_items ?
                        <BsChevronCompactUp className="tw-pl-4" /> : <BsChevronCompactDown className="tw-pl-4" />
                }
            </Link>
            {
                props.show_items ? <div>
                    <p className="tw-text-xs tw-mb-[-2rem]">Phones</p><br />
                    <p>Laptops</p>
                </div> : null
            }
            <Link to={""} className="tw-text-custom_white tw-mb-4 tw-no-underline tw-text-xl tw-ml-4 tw-flex tw-items-center"><MdAccountCircle className="tw-mr-4" />My Account</Link>
        </div>
        <div className="tw-text-custom_white tw-text-xl">
            {props.first_name}
        </div>
    </div>
)