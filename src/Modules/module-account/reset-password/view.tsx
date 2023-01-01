import { IFormModel } from "./model";

export const View = (props: IFormModel) => (
    <div className={props.password_modal ? "tw-fixed tw-inset-0 tw-bg-custom_black tw-bg-opacity-30 tw-backdrop-blur-sm tw-flex tw-justify-center tw-items-center" : "tw-hidden"}>
        <div className="tw-bg-custom_gray tw-w-96 tw-flex tw-flex-col tw-items-center tw-border-none tw-rounded-3xl tw-pb-4">
            <p className="tw-text-custom_white tw-text-2xl" data-testid="signin-literal">Reset your password</p>
            <form onSubmit={props.action_submit}>
                <div className="tw-relative">
                    <input
                        type="password"
                        className="tw-py-1 tw-mt-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                        name="new_password"
                        id="new_password"
                        value={props.form_data.new_password}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        data-testid="password-input"
                    />
                    <label htmlFor="new_password" data-testid="password-label" className={`tw-text-custom_background ${props.form_data.new_password ? 'tw--top-4 tw-text-sm' : 'peer-focus:tw-text-sm peer-focus:tw--top-4 tw-text-lg'} tw-absolute tw-left-0 tw-transition-all`}>New Password</label>
                    {props.form_errors.new_password && <p className="tw-text-custom_green">{props.form_errors.new_password}</p>}
                </div>
                <div className="tw-relative tw-mt-8">
                    <input
                        type="password"
                        className="tw-py-1 tw-mt-1 tw-w-64 tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
                        name="confirm_password"
                        id="confirm_password"
                        value={props.form_data.confirm_password}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        data-testid="confirm_password-input"
                    />
                    <label htmlFor="confirm_password" data-testid="confirm_password-label" className={`tw-text-custom_background ${props.form_data.confirm_password ? 'tw--top-4 tw-text-sm' : 'peer-focus:tw-text-sm peer-focus:tw--top-4 tw-text-lg'} tw-absolute tw-left-0 tw-transition-all`}>Confirm Password</label>
                    {props.form_errors.confirm_password && <p className="tw-text-custom_green">{props.form_errors.confirm_password}</p>}
                </div>
                <button type="submit" data-testid="submit-button" className="tw-mt-8 tw-bg-custom_yellow tw-border-none tw-font-medium tw-rounded-lg tw-text-sm tw-w-24 tw-px-5 tw-py-2.5 tw-text-center ">Save</button>
                <button type="button" className="tw-mt-8 tw-ml-12 tw-bg-custom_background tw-border-none tw-font-medium tw-rounded-lg tw-text-sm tw-w-24  tw-px-5 tw-py-2.5 tw-text-center" onClick={() => props.handler_onView_password()}>Close</button>
            </form>
            
        </div>

    </div>
)


