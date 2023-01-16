import { ToastContainer } from "react-toastify";
import { NavBar } from "../../../NavBar";
import { IFormModel } from "./model";
import { Button, Input, SubmitButton } from "../../../UIKit";

export const View = (props: IFormModel) => (
    <div>
        <NavBar />
        <div className="tw-flex tw-flex-row tw-justify-center">
            <div className="tw-bg-custom_gray tw-w-1/2 tw-rounded-lg tw-px-8 tw-flex tw-flex-row tw-items-center tw-py-10">
                <form>
                    <Input label="First Name" name="first_name" type="text" error={props.form_errors.first_name!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.first_name!}/>
                    <Input label="Last Name" name="last_name" type="text" error={props.form_errors.last_name!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.last_name!} className="tw-mt-8"/>
                    <Input label="Email" name="email" type="email" error={props.form_errors.email!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.email!} className="tw-mt-8"/>
                    <SubmitButton text="Save" data-testid="submit-button" className="tw-mt-8" onClick={()=>props.action_submit()}/>
                    <Button text="Discard" onClick={()=>props.handler_discard()}/>
                </form>
                <ToastContainer />
            </div>
        </div>
    </div>
)