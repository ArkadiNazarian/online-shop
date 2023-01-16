interface IProps {
    "data-testid"?: string;
    className?: string;
    text: string;
    onClick: () => void;
}

export const SubmitButton = (props: IProps) => (
    <button type="button" data-testid={props["data-testid"]} className={`${props.className ?? ""} tw-cursor-pointer tw-bg-custom_yellow tw-border-none tw-font-medium tw-rounded-lg tw-text-sm tw-w-20 tw-px-5 tw-py-2.5 tw-text-center`} onClick={props.onClick}><span>{props.text}</span></button>
)