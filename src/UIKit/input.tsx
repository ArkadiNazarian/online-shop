interface IProps {
    "input_data-testid"?: string;
    "label_data-testid"?: string;
    "error_data-testid"?: string;
    className?: string;
    value: string;
    name: string;
    handleChange: (e: any) => void;
    handleBlur: (e: any) => void;
    error: string;
    type: React.HTMLInputTypeAttribute;
    label: string;
}

export const Input = (props: IProps) => (
    <div className={`${props.className} tw-relative`}>
        <input
            type={props.type}
            className="tw-py-1 tw-mt-1 tw-w-64 tw-text-custom_white tw-border-t-0 tw-bg-custom_gray tw-border-l-0 tw-border-r-0 tw-border-b-custom_black tw-border-b focus:tw-outline-none tw-transition-colors tw-peer"
            name={props.name}
            id={props.name}
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            data-testid={props["input_data-testid"]}
        />
        <label data-testid={props["label_data-testid"]} htmlFor={props.name} className={`tw-text-custom_background ${props.value ? 'tw--top-4 tw-text-sm' : 'peer-focus:tw-text-sm peer-focus:tw--top-4 tw-text-lg'} tw-absolute tw-left-0 tw-transition-all`}>{props.label}</label>
        {props.error && <p data-testid={props["error_data-testid"]} className="tw-text-custom_green">{props.error}</p>}
    </div>
)