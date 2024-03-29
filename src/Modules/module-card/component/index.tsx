import { useContainer } from "./container"
import { View } from "./view";

export const Card = () => {
    const props = useContainer();
    return <View {...props}/>
}