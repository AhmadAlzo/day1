import { useState,useEffect } from "react";
import {Text,StyleSheet,View,TouchableOpacity,FlatList,SafeAreaView,BackHandler,Alert} from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import {DATA} from "../data.js"
import Item from "./item.js"



const Choose = ({navigation})=>{
    const [web,setweb] = useState(0);
    useEffect(() => {
        const backAction = () => {
          Alert.alert('Hold on!', 'Are you sure you want to go back?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
    }, []);
    return(
        <SafeAreaView  style={styles.container}>
            <LinearGradient
                colors={['#0197d6', '#020685']}
                style={styles.background}
            />
            <View style={styles.header}>
                <View style={styles.webChoose}>
                    <TouchableOpacity style={web==0? [styles.choosedweb, styles.buttonweb] :styles.buttonweb} onPress={()=>setweb(0)}>

                        <Text style={styles.text}>basics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={web==1? [styles.choosedweb2, styles.buttonweb] :styles.buttonweb} onPress={()=>setweb(1)}>
 
                        <Text style={styles.text}> special </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={DATA[web]}
                renderItem={({item}) => <Item data={item} navigation={navigation}/>}
                keyExtractor={item => item.id }
                contentContainerStyle={styles.flat}
            />
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        paddingVertical:50
        // height:50,
    },
    webChoose:{
        flexDirection:"row-reverse",
        width:"100%",
        alignItems:"center"
    },
    buttonweb:{
        
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:7

    },  
    choosedweb:{
        transform:[{scale:1.6}],
        backgroundColor:"rgba(255, 0, 203, 0.7)",
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
    },
    choosedweb2:{
        transform:[{scale:1.6}],
        backgroundColor:"rgba(255, 0, 203, 0.8)",
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        zIndex:-1
    },
    flat:{
        paddingHorizontal:40,
        gap:40,
        paddingBottom:50
    },
})

export default Choose;