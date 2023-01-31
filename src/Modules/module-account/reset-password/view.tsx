import * as Uikit from "../../../UIKit";
import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div className="tw-grid tw-grid-cols-2 tw-w-screen tw-h-screen">
        <div className="tw-col-start-1 tw-bg-custom_background">
            <div className="tw-h-screen tw-flex-col tw-flex tw-justify-center tw-items-center">
                <div className="tw-bg-custom_gray tw-w-96 tw-flex tw-flex-col tw-items-center tw-border-none tw-rounded-3xl">
                    <p className="tw-text-custom_white tw-text-2xl">Reset Your Password</p>
                    <form>
                        <Uikit.Input label="Password" name="password" type="password" error={props.form_errors.password!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.password} />
                        <Uikit.SubmitButton text="Sign in" loading={props.loading} onClick={() => props.action_submit()} className="tw-w-44 tw-mb-8" />
                    </form>
                </div>
            </div>
        </div>
        <div className="tw-col-start-2 tw-bg-custom_gray tw-flex tw-flex-col tw-justify-center tw-items-center">
            <p className="tw-text-custom_background tw-text-8xl" >WELCOME</p>
            <p className="tw-text-custom_background tw-text-8xl tw-mt-[-2rem]" >TO</p>
            <p className="tw-text-custom_background tw-text-8xl tw-mt-[-2rem]" >DINGO SHOP</p>
        </div>
    </div >
)