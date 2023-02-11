import { useContainer } from "./container";
import { View } from "./view";

export const ViewProduct = () => {
    const props = useContainer();
    return <View {...props}/>
}