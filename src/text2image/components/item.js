import {Text,StyleSheet,View,TouchableOpacity,Image} from "react-native"
import { LinearGradient } from "expo-linear-gradient";

const Item = ({data,navigation})=>{
    return (
        <TouchableOpacity style={data.id%2==0? [styles.right, styles.concont] :[styles.left, styles.concont]} onPress={()=>navigation.navigate("Generate",{image:data.image2,model:data.model,prompt:data.prompt})}>
            <LinearGradient
                colors={['rgba(255, 0, 213, 1)', '#0197d6']}
                style={styles.background}
            />
            <View style={styles.contImage}>
                 <Image source={data.image1}   style={styles.image} />
            </View>
            <Text style={styles.text}>{data.name}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        zIndex:-1
    },
    concont:{
        position:"relative",
        width:"100%",
        alignItems:"center",
        justifyContent:"space-evenly",
        // borderRadius:30,
        overflow:"hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        // elevation: 4,
        shadowColor:"red"
    },
    right:{
        flexDirection:"row",
        
        borderTopRightRadius:90,
        borderBottomRightRadius:90,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        // borderRadius:30
    },
    left:{
        flexDirection:"row-reverse",
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:90,
        borderTopLeftRadius:90,
    },
    contImage:{
        overflow:"hidden",
        width:200,
        height:200,
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
    },
    image: {
        maxWidth:"100%",
        maxHeight:"100%"

    },
    text:{
        color:"#fff",
        fontSize:18
    }
})
export default Item;