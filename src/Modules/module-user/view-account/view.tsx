import { NavBar } from "../../../NavBar"
import { IFormModel } from "./model"

export const View = (props: IFormModel) => (
        <div>
                <NavBar />
                <div className="tw-flex tw-flex-row tw-justify-center">
                        <div className="tw-bg-custom_gray tw-w-1/2 tw-rounded-lg tw-px-8 tw-flex tw-flex-row tw-items-center">
                                <div className="tw-mr-8">
                                        <p className={props.on_account?"tw-bg-custom_light_green tw-text-xl tw-text-custom_gray tw-cursor-pointer tw-mt-8 tw-pl-[6px] tw-rounded-lg":"tw-mt-8 tw-text-custom_white tw-cursor-pointer tw-text-xl"} onClick={()=>props.handler_onView_account()}>Account</p>
                                        <p className="tw-mt-8 tw-text-custom_white tw-cursor-pointer tw-text-xl">Address</p>
                                        <p className="tw-mt-8 tw-text-custom_white tw-cursor-pointer tw-text-xl">Password</p>
                                </div>
                                <div className={props.on_account ? "" :"tw-hidden"}>
                                        <div className="tw-flex tw-flex-row tw-items-center tw-mb-[-1rem]">
                                                <p className="tw-text-lg tw-text-custom_light_green tw-mr-4">First name</p>
                                                <p className="tw-text-base tw-text-custom_white">{props.first_name}</p>
                                        </div>
                                        <div className="tw-flex tw-flex-row tw-items-center tw-mb-[-1rem]">
                                                <p className="tw-text-lg tw-text-custom_light_green tw-mr-4">Last name</p>
                                                <p className="tw-text-base tw-text-custom_white">{props.last_name}</p>
                                        </div>
                                        <div className="tw-flex tw-flex-row tw-items-center tw-mb-[-1rem]">
                                                <p className="tw-text-lg tw-text-custom_light_green tw-mr-4">Email</p>
                                                <p className="tw-text-base tw-text-custom_white">{props.email}</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>

)