import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

const Butolink = (props: { name: string }) => {
  const navigation = useNavigate();

  const handlePress = () => {
    // Navigate to the sign-up page
    navigation('/login')
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.link}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'black',
    textDecorationLine: 'none',
    backgroundColor:'#ddd',
    textAlign:'center',
    borderColor:'#338BCB',
    borderStyle:'solid',
    borderWidth:2,
    borderRadius:10,
    width:300,
    fontWeight:'600',
    paddingBottom:5,
    paddingTop:5,
    fontSize:20
  },
});

export default Butolink;
