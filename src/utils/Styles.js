import { Dimensions } from "react-native"

const {height, width} = Dimensions.get('window') 

export default {
    primaryTextSize : height/50,
    titleTextSize : height/50,
    bodyTextSize : height/55
}