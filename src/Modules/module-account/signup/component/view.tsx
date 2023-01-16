import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Input, SubmitButton } from "../../../../UIKit";
import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div className="tw-grid tw-grid-cols-2 tw-w-screen tw-h-screen">
        <div className="tw-col-start-1 tw-bg-custom_background">
            <div className="tw-h-screen tw-flex-col tw-flex tw-justify-center tw-items-center">
                <div className="tw-bg-custom_gray tw-w-96 tw-flex tw-flex-col tw-items-center tw-border-none tw-rounded-3xl">
                    <p className="tw-text-custom_white tw-text-2xl">Create An Account</p>
                    <form>
                        <Input label="First Name" name="first_name" type="text" error={props.form_errors.first_name!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.first_name!} />
                        <Input label="Last Name" name="last_name" type="text" error={props.form_errors.last_name!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.last_name!} className="tw-mt-8" />
                        <Input label="Email" name="email" type="email" error={props.form_errors.email!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.email!} className="tw-mt-8" />
                        <Input label="Password" name="password" type="password" error={props.form_errors.password!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.password!} className="tw-mt-8" />
                        <SubmitButton text="Sign Up" onClick={() => props.action_submit()} className="tw-w-44 tw-mt-8" />
                        <p className="tw-text-custom_white tw-text-base">Have already an account?<Link to={props.sign_in} className="tw-text-base tw-text-custom_yellow tw-ml-1">Singn Up here</Link></p>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
        <div className="tw-col-start-2 tw-bg-custom_gray tw-flex tw-flex-col tw-justify-center tw-items-center">
            <p className="tw-text-custom_background tw-text-8xl" >WELCOME</p>
            <p className="tw-text-custom_background tw-text-8xl tw-mt-[-2rem]" >TO</p>
            <p className="tw-text-custom_background tw-text-8xl tw-mt-[-2rem]" >DINGO SHOP</p>
        </div>
    </div>
)