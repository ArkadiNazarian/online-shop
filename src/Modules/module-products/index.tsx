import { useContainer } from "./container"
import { View } from "./view";

export const Products = () => {
    const props = useContainer();
    return <View {...props}/>
}