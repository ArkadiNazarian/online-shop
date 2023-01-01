import { useContainer } from "./container"
import { IProps } from "./model";
import { View } from "./view"

export const ResetPassword = (value:IProps) => {
    const props = useContainer(value);
    return <View {...props}/>
}