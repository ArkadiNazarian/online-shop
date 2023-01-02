import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ResetPassword } from "../../reset-password/index";
import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div className="tw-grid tw-grid-cols-2 tw-w-screen tw-h-screen">
        <div className="tw-col-start-1 tw-bg-custom_background">
            <div className="tw-h-screen tw-flex-col tw-flex tw-justify-center tw-items-center">
                <div className="tw-bg-custom_gray tw-w-96 tw-flex tw-flex-col tw-items-center tw-border-none tw-rounded-3xl">
                    <p className="tw-text-custom_white tw-text-2xl" data-testid="signin-literal">Sign In</p>
                    <form onSubmit={props.action_submit}>
                        <div className="tw-relative">
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
                            <label htmlFor="email" data-testid="email-label" className={`tw-text-custom_background ${props.form_data.email ? 'tw--top-4 tw-text-sm' : 'peer-focus:tw-text-sm peer-focus:tw--top-4 tw-text-lg'} tw-absolute tw-left-0 tw-transition-all`}>Email</label>
                            {props.form_errors.email && <p className="tw-text-custom_green">{props.form_errors.email}</p>}
                        </div>
                        <div className="tw-relative tw-mt-8">
                            <input
                                type="password"
                                className="tw-py-1 tw-mt-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                                name="password"
                                id="password"
                                value={props.form_data.password}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                data-testid="password-input"
                            />
                            <label htmlFor="password" data-testid="password-label" className={`tw-text-custom_background ${props.form_data.password ? 'tw--top-4 tw-text-sm' : 'peer-focus:tw-text-sm peer-focus:tw--top-4 tw-text-lg'} tw-absolute tw-left-0 tw-transition-all`}>Password</label>
                            {props.form_errors.password && <p className="tw-text-custom_green">{props.form_errors.password}</p>}
                        </div>
                        <button type="submit" data-testid="submit-button" className="tw-mt-8 tw-bg-custom_yellow tw-border-none tw-font-medium tw-rounded-lg tw-text-sm tw-w-44  tw-px-5 tw-py-2.5 tw-text-center ">Sign In</button>
                        <p className="tw-text-custom_white tw-text-base">Don't have an account?<Link to={props.sign_up} className="tw-text-base tw-text-custom_yellow tw-ml-1">Singn Up here</Link></p>
                        <p className="tw-text-custom_white tw-text-base" onClick={() => props.handler_onView_password()}>Forgot Password ? Click here </p>
                    </form>
                    <ResetPassword password_modal={props.password_visible} handler_onView_password={props.handler_onView_password} />
                    <ToastContainer />
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