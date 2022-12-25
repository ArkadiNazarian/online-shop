import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div className="tw-grid tw-grid-cols-2 tw-w-screen tw-h-screen">
        <div className="tw-col-start-1 tw-bg-custom_background">
            <div className="tw-h-screen tw-flex-col tw-flex tw-justify-center tw-items-center">
                <div className="tw-bg-custom_gray tw-w-96 tw-flex tw-flex-col tw-items-center tw-border-none tw-rounded-3xl">
                    <p className="tw-text-custom_white tw-text-2xl">Create An Account</p>
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
                        <div className="tw-relative tw-mt-8">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={props.form_data.password}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                data-testid="password-input"
                                className="tw-py-1 tw-mt-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                            />
                            <label data-testid="password-label" htmlFor="password" className={`tw-text-custom_background ${props.form_data.password ? 'tw--top-4 tw-text-sm' : 'peer-focus:tw-text-sm peer-focus:tw--top-4 tw-text-lg'} tw-absolute tw-left-0 tw-transition-all`}>Password</label>
                            {props.form_errors.password && <p data-testid="password-error" className="tw-text-custom_green">{props.form_errors.password}</p>}
                        </div>
                        <button type="submit" data-testid="submit-button" className="tw-mt-8 tw-bg-custom_yellow tw-border-none tw-font-medium tw-rounded-lg tw-text-sm tw-w-44  tw-px-5 tw-py-2.5 tw-text-center ">Sign Up</button>
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