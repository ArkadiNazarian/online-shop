import { NavBar } from "../../NavBar";
import { BsChevronRight, BsChevronCompactDown } from "react-icons/bs";
import { IFormModel } from "./model";
import * as Uikit from "../../UIKit";

export const View = (props: IFormModel) => (
    <div className="tw-h-full">
        <NavBar />
        <div className="tw-flex tw-flex-row">
            <div className="tw-bg-custom_gray tw-w-60 tw-ml-8 tw-pl-4 tw-py-4 tw-rounded-lg tw-h-96">
                <p className="tw-text-custom_white tw-cursor-pointer tw-text-xl tw-font-medium tw-flex tw-flex-row tw-items-center" onClick={() => props.handler_onView_electronics()}>Electronics{props.electronics ? <BsChevronCompactDown className="tw-ml-2" /> : <BsChevronRight className="tw-ml-2" />}</p>
                <div className={props.electronics ? "tw-pl-2 tw-text-custom_white" : "tw-hidden"}>
                    <p className="tw-cursor-pointer" onClick={() => props.onView_cellphone()}>Cell Phone</p>
                    <p className="tw-cursor-pointer">Computer and Laptop</p>
                    <p className="tw-cursor-pointer">Camera</p>
                </div>
                <p className="tw-text-custom_white tw-cursor-pointer tw-text-xl tw-font-medium tw-flex tw-flex-row tw-items-center" onClick={() => props.handler_onView_home()}>Home and kitchen{props.home ? <BsChevronCompactDown className="tw-ml-2" /> : <BsChevronRight className="tw-ml-2" />}</p>
                <div className={props.home ? "tw-pl-2 tw-text-custom_white" : "tw-hidden"}>
                    <p className="tw-cursor-pointer">Kitchen and Dining</p>
                    <p className="tw-cursor-pointer">Bedding</p>
                    <p className="tw-cursor-pointer">Bath</p>
                </div>
                <p className="tw-text-custom_white tw-cursor-pointer tw-text-xl tw-font-medium tw-flex tw-flex-row tw-items-center" onClick={() => props.handler_onView_car()}>Automotive{props.car ? <BsChevronCompactDown className="tw-ml-2" /> : <BsChevronRight className="tw-ml-2" />}</p>
                <div className={props.car ? "tw-pl-2 tw-text-custom_white" : "tw-hidden"}>
                    <p className="tw-cursor-pointer">Car</p>
                    <p className="tw-cursor-pointer">Motorcycle</p>
                    <p className="tw-cursor-pointer">Tires and Wheels</p>
                </div>
            </div>
            <div className="tw-ml-28 tw-flex tw-flex-row tw-flex-wrap">
                {
                    props.products?.map((value, index) => (
                        <div key={index} className="tw-bg-white tw-rounded-2xl tw-ml-4">
                            <div className="tw-p-8 tw-flex tw-justify-center"><img src={value.img} alt="iphone" className="tw-max-w-xl tw-max-h-72" /></div>
                            <div className="tw-flex tw-justify-center"><p>{value.name}</p></div>
                            <div className="tw-flex tw-justify-center"><p>{value.price} $</p></div>
                            <Uikit.Button onClick={() => props.add_to_card(value.id)} text="Add to Card" className="tw-w-32" />
                            <Uikit.Button onClick={() => props.hanlder_onView_details(value.id, value.category)} text="View Details" className="tw-w-32" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)