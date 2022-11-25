import { useContainer } from "./container"
import { View } from "./view";

export const SideBar =()=>{
    const props = useContainer();
    return <View {...props}/>
}