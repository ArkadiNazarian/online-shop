import { NavBar } from "../../../NavBar";
import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div>
        <NavBar />
        <div className="tw-flex tw-flex-row tw-justify-center">
            <div className="tw-bg-custom_gray tw-w-1/2 tw-rounded-lg tw-pl-8 tw-pt-8 tw-flex tw-flex-col">
                <div className="tw-flex tw-justify-center">
                    <p className={props.products?.length === 0 ? "tw-text-2xl tw-text-custom_light_green tw-font-medium" : "tw-hidden"}>Your card is empty</p>
                </div>
                {
                    props.products?.map((value, index) => (
                        <div key={index} className="tw-flex tw-flex-row tw-mt-4">
                            <p className="tw-text-base tw-font-normal tw-text-white">{index + 1}-</p>
                            <img src={value.img} alt="iphone 13" className="tw-w-10 tw-ml-3" />
                            <p className="tw-ml-10 tw-text-base tw-font-normal tw-text-white">{value.name}</p>
                            <p className="tw-ml-16 tw-text-base tw-font-normal tw-text-white">price: {value.price} $</p>
                            <p className="tw-ml-8 tw-text-base tw-font-normal tw-text-white">x {value.number}</p>
                        </div>
                    ))
                }
                <div>
                    <p className="tw-ml-8 tw-mt-8 tw-text-base tw-font-normal tw-text-custom_light_green">total: {props.total_price} $</p>
                </div>
            </div>
        </div>
    </div >

)