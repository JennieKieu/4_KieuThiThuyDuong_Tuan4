import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput
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
      <Image
        source={require("./assets/lock-152879 1.png")}
        style={styles.img}
      />
      <Text style={styles.text1}>
        <h1>
          FORGET <br></br> PASSWORD
        </h1>
      </Text>
      <Text style={styles.text2}>
        <h3>
          <b>
            Provide your account’s email for which you want to reset your
            password
          </b>
        </h3>
      </Text>
      <View style={styles.btnContainer}>
        <View style={styles.viewEmail}>
          <View>
            <Image
              style={styles.iconMail}
              source={require("./assets/mail.png")}
            />
          </View>
          <TextInput placeholder="  Email" style={styles.borderEmail}></TextInput>
        </View>
        <View style={styles.viewNext}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.button2}>
              <h4>NEXT</h4>
            </Text>
          </TouchableOpacity>
        </View>
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
    width: 105,
    height: 117,
    marginTop: 50,
  },
  text1: {
    marginTop: 20,
    textAlign: "center",
  },
  text2: {
    marginLeft: 30,
    marginRight: 30,
    textAlign: "center",
  },
  button1: {
    marginTop: 12,
    marginLeft: 10,
    fontSize: 15,
  },
  button2: {
    fontSize: 20,
  },
  btn: {
    display: "flex",
    width: 305,
    height: 45,
    backgroundColor: "rgba(227, 192, 0, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flex: 0,
    height: 48,
    width: 360,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  viewEmail: {
    flexDirection: "row",
    marginTop: 50,
  },
  viewNext: {
    marginTop: 30,
  },
  iconMail: {
    height: 45,
    width: 48,
  },
  borderEmail: {
    backgroundColor: "rgba(196, 196, 196, 1)",
    width: 257,
    height: 45
  }
});
