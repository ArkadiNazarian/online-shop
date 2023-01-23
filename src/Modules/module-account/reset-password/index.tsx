import { useContainer } from "./container"
import { View } from "./view"

export const ResetPassword = () => {
    const props = useContainer();
    return <View {...props}/>
}