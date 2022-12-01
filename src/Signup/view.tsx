import { ToastContainer } from "react-toastify";
import { SideBar } from "../SideBar";
import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div className="tw-h-screen tw-flex tw-flex-row">
        <SideBar />
        <form onSubmit={props.action_submit}>
            <div className="tw-mb-6 tw-ml-4">
                <div>
                    <label className="tw-block tw-mb-2 tw-text-xl tw-font-medium tw-text-custom_blue tw-mt-8">First name</label>
                    <input
                        type="text"
                        className="tw-border-0 tw-text-sm tw-rounded-lg tw-outline focus:tw-border-0 tw-ring-custom_green focus:tw-border-custom_blue tw-w-full tw-p-2.5 "
                        placeholder="John"
                        name="first_name"
                        value={props.form_data.first_name}
                        onChange={props.handleChange}
                    />
                    {props.form_errors.first_name && <p className="tw-bg-custom_red">{props.form_errors.first_name}</p>}
                </div>
                <div>
                    <label className="tw-block tw-mb-2 tw-text-xl tw-font-medium tw-text-custom_blue tw-mt-4">Last name</label>
                    <input
                        type="text"
                        className="tw-border-0 tw-text-sm tw-rounded-lg tw-outline focus:tw-border-0 tw-ring-custom_green focus:tw-border-custom_blue tw-w-full tw-p-2.5  "
                        placeholder="Doe"
                        name="last_name"
                        value={props.form_data.last_name}
                        onChange={props.handleChange}
                    />
                    {props.form_errors.last_name && <p className="tw-bg-custom_red">{props.form_errors.last_name}</p>}
                </div>
                <div>
                    <label className="tw-block tw-mb-2 tw-text-xl tw-font-medium tw-text-custom_blue tw-mt-4">Email</label>
                    <input
                        type="email"
                        className="tw-border-0 tw-text-sm tw-rounded-lg tw-outline focus:tw-border-0 tw-ring-custom_green focus:tw-border-custom_blue tw-w-full tw-p-2.5 "
                        placeholder="example@h.xyz"
                        name="email"
                        value={props.form_data.email}
                        onChange={props.handleChange}
                    />
                    {props.form_errors.email && <p className="tw-bg-custom_red">{props.form_errors.email}</p>}
                </div>
                <div>
                    <label className="tw-block tw-mb-2 tw-text-xl tw-font-medium tw-text-custom_blue tw-mt-4">Password</label>
                    <input
                        type="password"
                        className="tw-border-0 tw-text-sm tw-rounded-lg tw-outline focus:tw-border-0 tw-ring-custom_green focus:tw-border-custom_blue tw-w-full tw-p-2.5  "
                        placeholder="Password"
                        name="password"
                        value={props.form_data.password}
                        onChange={props.handleChange}
                    />
                    {props.form_errors.password && <p className="tw-bg-custom_red">{props.form_errors.password}</p>}
                </div>
            </div>
            <button type="submit" className="tw-ml-4 tw-bg-custom_green tw-border-button_border_color tw-font-medium tw-rounded-lg tw-text-sm tw-w-full  tw-px-5 tw-py-2.5 tw-text-center ">Submit</button>
            <ToastContainer />
        </form>
    </div>
)