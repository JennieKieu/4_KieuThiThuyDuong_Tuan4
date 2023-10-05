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
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <Image
          style={styles.imgEyeBall}
          source={require("./assets/eyeball.png")}
        ></Image>
      </View>
      <View>
        <View style={styles.viewInputUser}>
          <Image
            style={styles.imgInputUser}
            source={require("./assets/user.png")}
          ></Image>
          <TextInput
            style={styles.inputUser}
            placeholder="Please input user name"
          ></TextInput>
        </View>
        <View style={styles.viewInputUser}>
          <Image
            style={styles.imgInputUser}
            source={require("./assets/lock.png")}
          ></Image>
          <TextInput
            style={styles.inputUser}
            placeholder="Please input password"
          ></TextInput>
        </View>
        <View style={styles.viewLogin}>
          <TouchableOpacity style={styles.touchLogin}>
            <h3>LOGIN</h3>
          </TouchableOpacity>
        </View>
        <View style={styles.touch}>
          <View style={styles.viewRegister}>
            <TouchableOpacity style={styles.touchRegister}>
              Register
            </TouchableOpacity>
          </View>
          <View style={styles.viewRegister}>
            <TouchableOpacity style={styles.touchFP}>
              Forgot Password
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.viewBot}>
        <View style={styles.viewOLM}>
          <Text style={styles.textLine}>               </Text>
          <Text style={styles.textOLM}> Other Login Methods </Text>
          <Text style={styles.textLine}>               </Text>
        </View>
      </View>
      <View style={styles.viewBot2}>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.img1}
              source={require("./assets/Group 8.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.img1}
              source={require("./assets/Group 9.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.img1}
              source={require("./assets/FB.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  viewImg: {
    marginTop: 30,
  },
  imgEyeBall: {
    height: 141,
    width: 141,
  },
  imgInputUser: {
    height: 35,
    width: 35,
  },
  viewInputUser: {
    marginTop: 30,
    flexDirection: "row",
    width: 300,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  inputUser: {
    height: 35,
    width: 300,
    marginTop: 5,
    marginLeft: 20,
    fontSize: 18,
    color: "#C4C4C4",
  },
  viewLogin: {
    marginTop: 50,
  },
  touchLogin: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#386FFC",
    color: "#fff",
    fontFamily: "Roboto",
    width: 300,
    height: 48,
    borderRadius: 12,
  },
  viewRegister: {
    marginTop: "100",
  },
  touchRegister: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: "Roboto",
  },
  touchFP: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: "Roboto",
    marginLeft: 90,
  },
  touch: {
    flexDirection: "row",
  },
  textLine: {
    textDecorationLine: "line-through",
  },
  viewOLM: {
    flexDirection: "row",
    marginTop: 40,
  },
  textOLM: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
  viewBot: {
    marginTop: 15,
  },
  viewBot2: {
    marginTop: 30,
    flexDirection: "row",
  },
  img1: {
    width: 74,
    height: 74,
    margin: 20
  },
  
});
