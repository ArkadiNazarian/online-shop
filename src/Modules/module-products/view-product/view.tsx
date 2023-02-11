import { NavBar } from "../../../NavBar";
import { IFormModel } from "./model";
import * as Uikit from "../../../UIKit/index";

export const View = (props: IFormModel) => (
    <div>
        <NavBar />
        <div className="tw-flex tw-flex-row tw-justify-center">
            <div className="tw-bg-custom_gray tw-w-1/2 tw-rounded-lg tw-p-8 tw-flex tw-flex-row">
                <img src={props.product_details?.img} alt="product" />
                <div className="tw-ml-4">
                    <p className="tw-text-custom_light_green tw-text-base tw-font-semibold">{props.product_details?.name}</p>
                    <p className="tw-text-white tw-text-sm tw-pt-4">{props.product_details?.description}</p>
                    <p className="tw-text-white tw-text-sm">price: {props.product_details?.price} $</p>
                    <div className="tw-flex tw-flex-row tw-mt-14">
                    <Uikit.SubmitButton loading={false} className="tw-w-32" onClick={()=>props.add_to_card()} text="Add to Card"/>
                    <Uikit.Button onClick={()=>props.handler_goback()} text="Back"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
)