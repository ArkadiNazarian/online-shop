import { useContainer } from "./container"
import { View } from "./view"

export const ForgotPassword = () => {
    const props = useContainer();
    return <View {...props}/>
}