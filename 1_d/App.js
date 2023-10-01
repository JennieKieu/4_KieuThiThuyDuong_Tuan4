import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
  Image
} from "react-native";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          <h1>LOGIN</h1>
        </Text>
      </View>

      <View style={styles.email}>
        <TextInput
          style={styles.inputEmail}
          placeholder="    Email"
        ></TextInput>
      </View>

      <View style={styles.password}>
        <TextInput
          style={styles.inputPassword}
          placeholder="    Passsword"
          secureTextEntry={true}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>
          <h2>LOGIN</h2>
        </Text>
      </TouchableOpacity>
      <View style={styles.viewCen}>
        <Text>When you agree to tems and conditions</Text>
      </View>
      <View style={styles.viewCen}>
        <a href="#" style={styles.aCen}>For got your password</a>
      </View>
      <View style={styles.viewCen}>
        <Text>Or login with</Text>
      </View>
      <View style={styles.viewBot}>
        <a href="#" style={styles.aFB}>
          <Image
            style={styles.iconFB}
            source={require("./assets/iconfacebook.png")}
          ></Image>
        </a>
        <a href="#" style={styles.aZalo}>
          <Image
            style={styles.iconZalo}
            source={require("./assets/iconzalo.png")}
          ></Image>
        </a>
        <a href="#" style={styles.aGG}>
          <Image
            style={styles.iconGG}
            source={require("./assets/icongoogle.png")}
          ></Image>
        </a>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    marginTop: 30,
  },
  email: {
    marginTop: 40,
    backgroundColor: "#F2F2F2",
    height: 54,
    width: 330,
  },
  inputEmail: {
    height: 54,
    width: 330,
    fontSize: 18,
  },
  password: {
    marginTop: 20,
    backgroundColor: "#F2F2F2",
    height: 54,
    width: 330,
  },
  inputPassword: {
    height: 54,
    width: 330,
    fontSize: 18,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    height: 50,
    width: 339,
    backgroundColor: "#E53935",
  },
  textBtn: {
    color: "#fff",
  },
  viewCen: {
    marginTop: 20,
  },
  viewBot: {
    marginTop: 50,
    height: 50,
    flex: 1,
    flexDirection: "row",
  },
  iconFB: {
    marginTop: 3,
    marginLeft: 36,
    height: 30,
    width: 30,
    backgroundColor: "#1877F2",
  },
  iconZalo: {
    marginTop: 7,
    marginLeft: 43,
    height: 25,
    width: 25,
    backgroundColor: "#0582C4",
  },
  iconGG: {
    marginTop: 5,
    marginLeft: 35,
    height: 32,
    width: 32,
    backgroundColor: "#ffff",
  },
  aFB: {
    height: 40,
    width: 113,
    backgroundColor: "#1877F2",
  },
  aZalo: {
    height: 40,
    width: 113,
    backgroundColor: "#0582C4",
  },
  aGG: {
    height: 40,
    width: 113,
    backgroundColor: "#ffff",
  },
  aCen: {
    textDecorationLine: "none",
  },
});
