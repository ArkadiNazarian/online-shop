import { useContainer } from "./container"
import { View } from "./view";

export const ViewAccount =()=>{
    const props = useContainer();
    return <View {...props}/>
}