import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
// import Home from './pages/home';
import Login from './pages/login'; 

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Routes>
          {/* <Route  path="/" element={<Home />} />  */}
          <Route  path="/" element={<Login />} />
        </Routes>
      </NativeRouter>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
