import { NavBar } from "../../../NavBar";
import { IFormModel } from "./model";
import * as Uikit from "../../../UIKit";

export const View = (props: IFormModel) => (
    <div>
        <NavBar />
        <div className="tw-flex tw-flex-row tw-justify-center">
            <div className="tw-bg-custom_gray tw-w-1/2 tw-rounded-lg tw-px-8 tw-flex tw-flex-row tw-items-center tw-pt-10">
                <form>
                    <Uikit.Input label="First Name" name="first_name" type="text" error={props.form_errors.first_name!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.first_name!} />
                    <Uikit.Input label="Last Name" name="last_name" type="text" error={props.form_errors.last_name!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.last_name!} className="tw-mt-8" />
                    <Uikit.Input label="Email" name="email" type="email" error={props.form_errors.email!} handleBlur={props.handleBlur} handleChange={props.handleChange} value={props.form_data.email!} className="tw-mt-8" />
                    <div className="tw-flex tw-flex-row tw-items-baseline">
                        <Uikit.SubmitButton text="Save" loading={props.loading} data-testid="submit-button" className="tw-mt-8" onClick={() => props.action_submit()} />
                        <Uikit.Button text="Discard" onClick={() => props.handler_discard()} />
                    </div>
                </form>
            </div>
        </div>
    </div>
)