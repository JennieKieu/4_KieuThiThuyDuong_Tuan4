import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[
        "rgba(199, 244, 246, 1)",
        "rgba(199, 244, 246, 1)",
        "rgba(229, 244, 245, 1)",
        "rgba(229, 244, 245, 1)",
      ]}
      style={styles.container}
    >
      <Image source={require("./assets/Circle.png")} style={styles.img} />
      <Text style={styles.text1}>
        <h1>
          GROW <br></br> YOUR BUSINESS
        </h1>
      </Text>
      <Text style={styles.text2}>
        <h3>
          <b>We will help you to grow your business using online server</b>
        </h3>
      </Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.button1}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.button2}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text>
          <h2>HOW WE WORK?</h2>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    height: 150,
    width: 150,
    justifyContent: "flex-start",
    marginTop: 50,
  },
  text1: {
    marginTop: 50,
    textAlign: "center",
  },
  text2: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
  },
  button1: {
    fontSize: 20,
  },
  button2: {
    fontSize: 20,
  },
  btn: {
    display: "flex",
    width: 119,
    height: 48,
    backgroundColor: "rgba(227, 192, 0, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flex: 0,
    height: 48,
    width: 360,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottom: {
    marginTop: 30,
  },
});
