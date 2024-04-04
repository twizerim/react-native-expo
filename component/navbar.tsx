import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


function Navbar(){

    return (
        <View style={styles.navbarcontainer}>
            <Text>Back</Text>
            <Text>Menu</Text>
        </View>
    )

}
export default Navbar


const styles = StyleSheet.create({
    navbarcontainer:{
        backgroundColor:'#338BCB',
        flex:0.2,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'flex-end',
        paddingBottom:15,
        paddingLeft:10,
        paddingRight:10
    }
})