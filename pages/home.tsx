import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View } from 'react-native';
import Navbar from '../component/navbar';
import Butolink from '../component/butolink';


function Home(){
    return (
        <View style={styles.homecontainner}>
            <StatusBar style="auto" />
            <Navbar/>
            <Text style={styles.titles}>Banking Account App</Text>
             <View style={styles.homecontent}>
             <Image style={styles.image} source={require("../assets/france.png")}/>
             <Text style={styles.paragraph}>You want to enter and check your account use this app in your phone</Text>
               <Butolink name='SIGN IN'/>
               <Text style={styles.orr}>Or</Text>
               <Butolink name='SIGN UP'/>
             </View>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    homecontainner:{
    flex: 1,
    backgroundColor:'#fff',
   },
   titles:{
     textAlign:'center',
     fontSize:20,
     fontWeight:'bold',
     paddingTop:35
   },
   homecontent:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     gap:20
   },
   paragraph:{
      width:300,
      fontSize:15,
      paddingBottom:10
   },
   image:{
    width:300,
    marginBottom:40,
   },
   orr:{
     fontWeight:'800'
   }

})