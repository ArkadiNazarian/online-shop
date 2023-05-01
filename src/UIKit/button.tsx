interface IProps {
    "data-testid"?: string;
    className?: string;
    text: string;
    onClick: () => void;
}

export const Button = (props: IProps) => (
    <button type="button" data-testid={props["data-testid"]} className={`${props.className ?? ""} tw-cursor-pointer hover:tw-shadow-lg tw-m-4 tw-text-custom_yellow tw-bg-custom_gray tw-border-none tw-font-medium tw-rounded-lg tw-text-sm tw-w-20  tw-px-5 tw-py-2.5 tw-text-center`} onClick={props.onClick}>{props.text}</button>
)


