import {useEffect,useRef } from "react"
import {Image,Animated,StyleSheet} from "react-native"
import { LinearGradient } from "expo-linear-gradient";


const ImageBlob = ({blobUri,onload})=>{
    const scaleanime = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        // onload()
        Animated.timing(scaleanime, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }).start();
        return(()=>{
            Animated.timing(scaleanime, {
                toValue: 0,
                duration: 700,
                useNativeDriver: true,
            }).start();
        })
    }, [scaleanime]);

    return (
        <Animated.View style={[styles.generate,{transform:[{scale:scaleanime}]}]}>
            <Image
                // source={{uri:blobUri}}
                src={blobUri}
                style={{ width: "100%",height:"100%" }}
            />
            <LinearGradient
                colors={['#0197d6', '#020685']}
                style={styles.background}
            />
            {/* <TouchableOpacity style={[styles.close]} onPress={close}>
                        <Icon
                            name='close'
                            color='#fff' />
            </TouchableOpacity> */}
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    generate:{
        position: 'absolute',
        width:"80%",
        padding:5,
        top:"20%",
        right:"10%",
        height:400,
        // backgroundColor:"red",
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        flex: 1,
        width: '100%',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        zIndex:-1
    },
    close:{
        position:"absolute",
        top:10,
        left:10,
        padding:5
    },
})

export default ImageBlob;