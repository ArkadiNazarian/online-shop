import { useContainer } from "./container"
import { View } from "./view";

export const Layout =()=>{
    const props = useContainer();
    return <View {...props}/>
}