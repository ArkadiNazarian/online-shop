import { NavBar } from "../../../NavBar";
import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div>
        <NavBar />
        <div className="tw-flex tw-flex-row tw-justify-center">
            <div className="tw-bg-custom_gray tw-w-1/2 tw-rounded-lg tw-p-8 tw-flex tw-flex-col">
                {
                    props.products?.map((value, index) => (
                        <div key={index} className="tw-flex tw-flex-row tw-mt-4">
                            <p className="tw-text-base tw-font-normal tw-text-white">{index+1}-</p>
                            <img src={value.img} alt="iphone 13" className="tw-w-10 tw-ml-3"/>
                            <p className="tw-ml-10 tw-text-base tw-font-normal tw-text-white">{value.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>

)