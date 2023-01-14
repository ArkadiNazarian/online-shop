import { useContainer } from "./container"
import { View } from "./view";

export const EditAccount =()=>{
    const props = useContainer();
    return <View {...props}/>
}