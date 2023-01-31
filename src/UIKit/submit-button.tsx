import { PulseLoader } from "react-spinners";

interface IProps {
    "data-testid"?: string;
    className?: string;
    text: string;
    onClick: () => void;
    loading: boolean;
}

export const SubmitButton = (props: IProps) => (
    <div className="tw-flex tw-flex-row tw-items-center">
        <button type="button" data-testid={props["data-testid"]} className={`${props.className ?? ""} tw-cursor-pointer tw-bg-custom_yellow tw-border-none tw-font-medium tw-rounded-lg tw-text-sm tw-w-20 tw-px-5 tw-py-2.5 tw-text-center`} onClick={props.onClick}><span>{props.text}</span></button>
        <PulseLoader color="#f9ada0" className="tw-ml-2 tw-mt-8" loading={props.loading} size={5} />
    </div>
)