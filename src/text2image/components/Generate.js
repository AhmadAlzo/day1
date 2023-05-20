
import { useState,useRef } from "react"
import {ImageBackground,TouchableOpacity,ActivityIndicator,TextInput,View,StyleSheet,DrawerLayoutAndroid} from "react-native"
import { Icon } from '@rneui/themed';
// import * as FileSystem from 'expo-file-system';
import * as Network from 'expo-network';
import useAxiosLove from "../hooks/useAxiosLove";
import navigationView from "./navigationView";
import ImageBlob from "./imageblob";


const Generate = ({route,navigation})=>{
    const drawer = useRef(null);
    const [text, onChangeText] = useState('');
    const [blobUri, setBlobUri] = useState(null);
    const [loading, setloading] = useState(false);
    const { image, model,prompt } = route.params;
    const submit =  async()=>{
        setloading(true)
        const texte = text;
            try {
                const status = await Network.getNetworkStateAsync()
                console.log(status)
                if(model == "love"){
                    const url =await useAxiosLove(prompt,texte)
                    setBlobUri(url)
                    console.log(url)
                }else{
                    const response = await fetch(new Request(
                        "https://api-inference.huggingface.co/models/"+model, 
                        {
                            headers: { Authorization: "Bearer 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" },
                            method: "POST",
                            body: JSON.stringify({"inputs":text +prompt}),
                        }
                    ));        
                    const blob = await response.blob();
                    const fileReaderInstance = new FileReader();
                    fileReaderInstance.readAsDataURL(blob);
                    fileReaderInstance.onload = () => {
                        base64 = fileReaderInstance.result;
                        setBlobUri(base64);
                    }
                }  
            } catch (error) {   
                console.error('Error fetching Blob:', error);  
        }finally{
            setloading(false)
        }
    }   
    return(
        <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={navigationView}>
            <View style={styles.container}>
                <ImageBackground source={image}  resizeMode="cover" style={styles.background} >
                    <TouchableOpacity style={[styles.back]} onPress={()=>navigation.goBack()}>
                        <Icon
                            name='chevron-thin-left'
                            type="entypo"
                            size={40}
                            color='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.draw]} onPress={() => drawer.current.openDrawer()}>
                        <Icon
                            name='menu'
                            type="entypo"
                            size={40}
                            color='#fff'/>
                    </TouchableOpacity>
                    <View style={styles.input}>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="imagine" placeholderTextColor={"white"}
                    />
                        <TouchableOpacity style={[styles.send]} onPress={submit}>
                            <Icon
                                name='send'
                                color='#fff' />
                        </TouchableOpacity>
                    </View>
                        {blobUri !== null && (
                            
                            <ImageBlob blobUri={blobUri} />
                        )}
                        {loading == true && (
                            <ActivityIndicator size="large" color="#00ff00" style={styles.load}/>
                        )}
                </ImageBackground>
            </View>
        </DrawerLayoutAndroid>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    background: {
       flex:1,
    },
    input:{
        position: 'absolute',
        bottom:70,
        borderRadius:25,
        flexDirection:"row-reverse",
        width:"75%",
        right:"12.5%",
        zIndex:2  
    },
    textinput:{
        flex:3,
        fontSize:18,
        color:"white",
        backgroundColor:"#1d2227",
        padding:14,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20
    },
    send:{
        flex:1,
        backgroundColor:"#1d2227",
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },  
    load:{
        position:"absolute",
        top:"50%",
        right:"46%"
    },
    back:{
        position:"absolute",
        padding:15,
        top:40,
        right:30
    },
    draw:{
        position:"absolute",
        padding:15,
        top:40,
        left:30
    }
})

export default Generate;