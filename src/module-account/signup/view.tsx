import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div className="tw-h-screen tw-flex-col tw-flex tw-justify-center tw-items-center">
        <div className="tw-bg-custom_gray tw-w-96 tw-flex tw-flex-col tw-items-center tw-border-none tw-rounded-3xl">
            <p className="tw-text-custom_white tw-text-2xl">Create An Account</p>
            <form onSubmit={props.action_submit}>
                <div className="tw-relative">
                    <input
                        type="text"
                        className="tw-py-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                        name="first_name"
                        id="first_name"
                        value={props.form_data.first_name}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="first_name" className="tw-text-custom_background tw-text-lg tw-absolute tw-left-0 peer-focus:tw-text-sm peer-focus:tw--top-4 tw-transition-all">First name</label>
                    {props.form_errors.first_name && <p className="tw-text-custom_green">{props.form_errors.first_name}</p>}
                </div>
                <div className="tw-relative tw-mt-8">
                    <input
                        type="text"
                        className="tw-py-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                        name="last_name"
                        id="last_name"
                        value={props.form_data.last_name}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="last_name" className="tw-text-custom_background tw-text-lg tw-absolute tw-left-0 peer-focus:tw-text-sm peer-focus:tw--top-4 tw-transition-all">Last name</label>
                </div>
                <div className="tw-relative tw-mt-8">
                    <input
                        type="email"
                        className="tw-py-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                        name="email"
                        id="email"
                        value={props.form_data.email}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="email" className="tw-text-custom_background tw-text-lg tw-absolute tw-left-0 peer-focus:tw-text-sm peer-focus:tw--top-4 tw-transition-all">Email</label>
                    {props.form_errors.email && <p className="tw-text-custom_green">{props.form_errors.email}</p>}
                </div>
                <div className="tw-relative tw-mt-8">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={props.form_data.password}
                        onChange={props.handleChange}
                        className="tw-py-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                    />
                    <label htmlFor="password" className="tw-text-custom_background tw-text-lg tw-absolute tw-left-0 peer-focus:tw-text-sm peer-focus:tw--top-4 tw-transition-all">Password</label>
                    {props.form_errors.password && <p className="tw-text-custom_green">{props.form_errors.password}</p>}
                </div>
                <button type="submit" className="tw-mt-8 tw-bg-custom_yellow tw-border-none tw-font-medium tw-rounded-lg tw-text-sm tw-w-44  tw-px-5 tw-py-2.5 tw-text-center ">Sign Up</button>
                <p className="tw-text-custom_white tw-text-base">Have already an account?<Link to={props.sign_up} className="tw-text-base tw-text-custom_yellow tw-ml-1">Singn In here</Link></p>
                <ToastContainer />
            </form>
        </div>
    </div>
)