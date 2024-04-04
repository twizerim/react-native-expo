import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../component/button';
import Navbar from '../component/navbar';


function Login(){
   return (
      <View style={styles.containe}>
           <StatusBar style="auto" />
            <Navbar/>
            <Text style={styles.title}>Login Form</Text> 
            <View style={styles.logcontent}>
              <Button title='Submit'/>
            </View>
      </View>
   )
}
export default Login

const styles = StyleSheet.create({
    containe:{
        backgroundColor:'#fff',
        flex: 1,
    },
    logcontent:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        textAlign:'center',
        color:'#338BCB',
        fontWeight:"bold",
        fontSize:30,
        paddingTop:25
    }


})