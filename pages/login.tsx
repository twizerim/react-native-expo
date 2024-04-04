import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View,TextInput,ImageSourcePropType, TextInputProps } from 'react-native';
import Button from '../component/button';
import Navbar from '../component/navbar';
import { Formik } from 'formik';
import * as yup from "yup"


interface InputWithIconProps extends TextInputProps {
    iconSource: ImageSourcePropType;
    placeholder?: string;
  }


function Login(){

    const InputWithIcon: React.FC<InputWithIconProps> = ({ iconSource, placeholder, ...rest }) => {
        return (
          <View >
            <Image source={iconSource} style={styles.icon} />
            <TextInput
              placeholder={placeholder}
              placeholderTextColor="#A9A9A9"
              style={styles.input}
              {...rest}
            />
          </View>
        );
      };
   return (
      <View style={styles.containe}>
           <StatusBar style="auto" />
            <Navbar/>
            <Text style={styles.title}>Login Form</Text> 
            <View style={styles.logcontent}>
            <Formik  
                initialValues={{ Username: '', Password: '' }}
                 validationSchema={yup.object().shape({
                Username: yup.string().required('Username is required'),
                password: yup.string().required('Password is required'),
                })}
                onSubmit={(values) => console.log(values)} // Handle form submission here
                 
            >
             {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <Text>Username</Text>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.Username}
              style={styles.input}
            //   iconSource={require('../assets/username.png')}
              placeholder='Type your username...'
            />
            {/* {errors.Password && <Text>{errors.Username}</Text>} */}

            <Text>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.Password}
              style={styles.input}
              placeholder="Type your password..."
            />
            {/* {errors.Username && <Text >{errors.Password}</Text>} */}
          </View>
           )}
           
            </Formik>
            <Button title='Submit' />
            </View>
            <View style={styles.imagecontainner}>
                  <View >
                  <Text style={styles.headeor}>Or sign up using</Text>
                     <View style={styles.imagecont}>
                     <Image style={styles.image} source={require("../assets/fb.png")}/>
                      <Image style={styles.image} source={require("../assets/twita.png")}/>
                      <Image style={styles.image} source={require("../assets/image.png")}/>
                     </View>
                  </View>
                  <View>
            <Text style={styles.headeor}>Or sign up using</Text>
            <Text style={styles.link}>SIGN UP</Text>
            </View>
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
        flex: 0.4,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        textAlign:'center',
        color:'#338BCB',
        fontWeight:"bold",
        fontSize:30,
        paddingTop:25
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
      },
    input:{
        borderBottomColor:'black',
        borderBottomWidth: 2,
        color:'black',
        width:330 ,
        marginBottom:10,
        display:'flex'
    },
    image:{
       width:50,
       height:50,
       borderRadius:50,
       borderStyle:'solid',
       borderColor:'#338BCB',
       borderWidth:1
    },
    imagecont:{
       display:'flex',
       flexDirection:'row',
       gap:5,
       width:200,
       alignItems:'center',
       justifyContent:'center',
       paddingTop:10
    },
    imagecontainner:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-between',
        gap:50
    },
    headeor:{
        textAlign:'center',
        fontSize:20,
    },
    link:{
      textAlign:'center',
      paddingTop:3,
      color:'#338BCB',
      fontWeight:'bold',
      fontSize:20
    },
})