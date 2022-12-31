import { useContainer } from "./container"
import { IModel } from "./model";
import { View } from "./view"

export const ResetPassword = (value:IModel) => {
    const props = useContainer(value);
    return <View {...props}/>
}