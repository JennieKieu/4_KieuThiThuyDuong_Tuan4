import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <Text>
          <h1>REGISTER</h1>
        </Text>
      </View>

      <View style={styles.viewCen}>
        <TextInput placeholder="Name" style={styles.input}></TextInput>
        <TextInput placeholder="Phone" style={styles.input}></TextInput>
        <TextInput placeholder="Email" style={styles.input}></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        ></TextInput>
        <TextInput placeholder="Birthday" style={styles.input}></TextInput>
      </View>

      <View style={styles.radioBtn}>
        <View style={styles.viewMale}>
          <input
            style={styles.radioMale}
            type="radio"
            value="Male"
            name="gender"
          />{" "}
          Male
        </View>
        <View style={styles.viewFamale}>
          <input
            style={styles.radioFemale}
            type="radio"
            value="Female"
            name="gender"
          />{" "}
          Female
        </View>
      </View>

      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>
            <b>REGISTER</b>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewBot}>
        <Text>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: 'center',
  },
  viewTop: {
    marginTop: 20,
    alignItems: "center",
  },
  viewCen: {
    alignItems: "center",
  },
  input: {
    marginTop: 15,
    fontSize: 18,
    paddingLeft: 10,
    backgroundColor: "#F2F2F2",
    height: 54,
    width: 330,
  },
  radioBtn: {
    marginTop: 15,
    flexDirection: "row",
    fontSize: 18,
    marginLeft: -140,
  },
  viewMale: {
    flexDirection: "row",
  },
  viewFamale: {
    marginLeft: 30,
    flexDirection: "row",
  },
  viewBtn: {
    marginTop: 30,
  },
  btn: {
    backgroundColor: "#E53935",
    height: 45,
    width: 330,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    color: "#ffff",
    fontSize: 20
  },
  viewBot: {
    marginTop:10
  }
});
