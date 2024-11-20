import React, { useEffect } from "react";
import { View,  StyleSheet, Image } from "react-native";

export default function SplashPage({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("SignIn");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
     
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.icon}
        />

      

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent : 'center' ,
    alignItems : 'center'
  },
 
  icon: {
    width: 200,
    height: 100,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "transparent",
    padding: 5,
    margin: 5,
  },

  
});