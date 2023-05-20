import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Choose from './components/Choose';
// import Generate from './src/components/Generate';
import Choose from "./src/text2image/components/Choose"
import Generate from "./src/text2image/components/Generate";

//
// hi
export default function App() {
    const Stack = createNativeStackNavigator();
 
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Choose">
        <Stack.Screen name="Choose" component={Choose} options={{ headerShown: false }}/>
        <Stack.Screen name="Generate" component={Generate} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}