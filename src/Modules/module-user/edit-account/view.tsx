import { ToastContainer } from "react-toastify";
import { NavBar } from "../../../NavBar";
import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div>
        <NavBar />
        <div className="tw-flex tw-flex-row tw-justify-center">
            <div className="tw-bg-custom_gray tw-w-1/2 tw-rounded-lg tw-px-8 tw-flex tw-flex-row tw-items-center tw-py-10">
                <form onSubmit={props.action_submit}>
                    <div className="tw-relative">
                        <input
                            type="text"
                            className="tw-py-1 tw-mt-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                            name="first_name"
                            id="first_name"
                            value={props.form_data.first_name}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            data-testid="first_name-input"
                        />
                        <label data-testid="first_name-label" htmlFor="first_name" className={`tw-text-custom_background ${props.form_data.first_name ? 'tw--top-4 tw-text-sm' : 'peer-focus:tw-text-sm peer-focus:tw--top-4 tw-text-lg'} tw-absolute tw-left-0 tw-transition-all`}>First name</label>
                        {props.form_errors.first_name && <p data-testid="first_name-error" className="tw-text-custom_green">{props.form_errors.first_name}</p>}
                    </div>
                    <div className="tw-relative tw-mt-8">
                        <input
                            type="text"
                            className="tw-py-1 tw-mt-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                            name="last_name"
                            id="last_name"
                            value={props.form_data.last_name}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            data-testid="last_name-input"
                        />
                        <label data-testid="last_name-label" htmlFor="last_name" className={`tw-text-custom_background ${props.form_data.last_name ? 'tw--top-4 tw-text-sm' : 'peer-focus:tw-text-sm peer-focus:tw--top-4 tw-text-lg'} tw-absolute tw-left-0 tw-transition-all`}>Last name</label>
                        {props.form_errors.last_name && <p data-testid="last_name-error" className="tw-text-custom_green">{props.form_errors.last_name}</p>}
                    </div>
                    <div className="tw-relative tw-mt-8">
                        <input
                            type="email"
                            className="tw-py-1 tw-mt-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                            name="email"
                            id="email"
                            value={props.form_data.email}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            data-testid="email-input"
                        />
                        <label data-testid="email-label" htmlFor="email" className={`tw-text-custom_background ${props.form_data.email ? 'tw--top-4 tw-text-sm' : 'peer-focus:tw-text-sm peer-focus:tw--top-4 tw-text-lg'} tw-absolute tw-left-0 tw-transition-all`}>Email</label>
                        {props.form_errors.email && <p data-testid="email-error" className="tw-text-custom_green">{props.form_errors.email}</p>}
                    </div>
                    <button type="submit" data-testid="submit-button" className="tw-mt-8 tw-bg-custom_yellow tw-border-none tw-font-medium tw-rounded-lg tw-text-sm tw-w-44  tw-px-5 tw-py-2.5 tw-text-center ">Save</button>
                    <button type="button" className="tw-mt-8 tw-bg-custom_yellow tw-border-none tw-font-medium tw-rounded-lg tw-text-sm tw-w-44  tw-px-5 tw-py-2.5 tw-text-center" onClick={()=>props.handler_discard()}>Discard</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    </div>
)