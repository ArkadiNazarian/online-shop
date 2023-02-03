import { NavBar } from "../../NavBar";
import { BsChevronRight, BsChevronCompactDown } from "react-icons/bs";
import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div>
        <NavBar />
        <div className="tw-bg-custom_gray tw-w-60 tw-ml-8 tw-pl-4 tw-py-4 tw-rounded-lg">
            <p className="tw-text-custom_white tw-cursor-pointer tw-text-lg tw-flex tw-flex-row tw-items-center" onClick={() => props.handler_onView_electronics()}>Electronics{props.electronics ? <BsChevronCompactDown className="tw-ml-2"/> : <BsChevronRight className="tw-ml-2"/>}</p>
            <div className={props.electronics ? "tw-pl-2 tw-text-custom_white" : "tw-hidden"}>
                <p>Cell Phone</p>
                <p>Computer and Laptop</p>
                <p>Camera</p>
            </div>
            <p className="tw-text-custom_white tw-cursor-pointer tw-text-lg tw-flex tw-flex-row tw-items-center" onClick={() => props.handler_onView_home()}>Home and kitchen{props.home ? <BsChevronCompactDown className="tw-ml-2"/> : <BsChevronRight className="tw-ml-2"/>}</p>
            <div className={props.home ? "tw-pl-2 tw-text-custom_white" : "tw-hidden"}>
                <p>Kitchen and Dining</p>
                <p>Bedding</p>
                <p>Bath</p>
            </div>
            <p className="tw-text-custom_white tw-cursor-pointer tw-text-lg tw-flex tw-flex-row tw-items-center" onClick={() => props.handler_onView_car()}>Automotive{props.car ? <BsChevronCompactDown className="tw-ml-2"/> : <BsChevronRight className="tw-ml-2"/>}</p>
            <div className={props.car ? "tw-pl-2 tw-text-custom_white" : "tw-hidden"}>
                <p>Car</p>
                <p>Motorcycle</p>
                <p>Tires and Wheels</p>
            </div>
        </div>
    </div>
)