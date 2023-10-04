import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["rgba(251, 203, 0, 1)", "rgba(191, 154, 0, 1)"]}
      style={styles.container}
    >
      <View style={styles.viewLogin}>
        <Text style={styles.textLogin}>
          <h1>LOGIN</h1>
        </Text>
      </View>

      <View style={styles.viewCen}>
        <View style={styles.viewInput}>
          <Image
            style={styles.imgInput}
            source={require("./assets/avatar_user 1.png")}
          ></Image>
          <TextInput placeholder="Name" style={styles.inputName}></TextInput>
        </View>
        <View style={styles.viewInput}>
          <Image
            style={styles.imgInput}
            source={require("./assets/lock.png")}
          ></Image>
          <TextInput
            placeholder="Password"
            style={styles.inputName}
          ></TextInput>
          <TouchableOpacity>
            <Image
              source={require("./assets/eye 1.png")}
              style={[styles.iconEye]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewBot}>
        <View style={styles.touchLogin}>
          <TouchableOpacity style={styles.textTouch}>
            <h2>LOGIN</h2>
          </TouchableOpacity>
        </View>
        <View style={styles.touchCA}>
          <TouchableOpacity style={styles.textCA}>
            <h2>CREATE ACCOUNT</h2>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewLogin: {
    marginLeft: 35,
    marginTop: 75,
  },
  textLogin: {
    fontSize: 20,
  },
  imgInput: {
    height: 32,
    width: 32,
    margin: 15,
  },
  viewCen: {
    alignItems: "center",
  },
  viewInput: {
    backgroundColor: "rgba(242, 242, 242, 0.3)",
    height: 54,
    width: 330,
    marginTop: 45,
    flexDirection: "row",
    borderColor: "#fff",
    borderWidth: 1,
  },
  inputName: {
    width: 290,
    fontSize: 20,
  },
  iconEye: {
    width: 32,
    height: 32,
    marginTop: 10,
    marginRight: 20,
  },
  touchLogin: {
    height: 45,
    width: 320,
    marginTop: 60,
    backgroundColor: "rgba(6, 0, 0, 1)",
    justifyContent: "center",
  },
  textTouch: {
    color: "#fff",
    textAlign: "center",
  },
  viewBot: {
    alignItems: "center",
    fontFamily: "Roboto",
  },
  touchCA: {
    marginTop: 35
  }
});
