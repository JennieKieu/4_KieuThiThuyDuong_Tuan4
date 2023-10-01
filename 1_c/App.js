import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={[
        "rgba(199, 244, 246, 1)",
        "rgba(199, 244, 246, 1)",
        "rgba(229, 244, 245, 1)",
        "rgba(229, 244, 245, 1)",
      ]}
      style={styles.container}
    >
      <View style={styles.viewTop}>
        <Text style={styles.textTop}>
          <h1>CODE</h1>
        </Text>
      </View>
      <View>
        <Text style={styles.textCen1}>
          <h2>VERIFICATION</h2>
        </Text>
      </View>
      <View style={styles.viewCen2}>
        <Text style={styles.textCen2}>
          <h2>Enter ontime password sent on ++849092605798</h2>
        </Text>
      </View>
      <View style={styles.viewRectangel}>
        <TextInput placeholder="" style={styles.Rectangel}></TextInput>
        <TextInput placeholder="" style={styles.Rectangel}></TextInput>
        <TextInput placeholder="" style={styles.Rectangel}></TextInput>
        <TextInput placeholder="" style={styles.Rectangel}></TextInput>
        <TextInput placeholder="" style={styles.Rectangel}></TextInput>
        <TextInput placeholder="" style={styles.Rectangel}></TextInput>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>
          <h2>VERIFY CODE</h2>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  viewTop: {
    marginTop: 50,
  },
  textTop: {
    fontSize: 27,
    fontFamily: "Roboto",
  },
  textCen1: {
    fontSize: 12,
  },
  textCen2: {
    textAlign: "center",
  },
  viewCen2: {
    marginTop: 30,
  },
  Rectangel: {
    width: 50,
    height: 50,
    borderColor: "black",
    border: "1px solid black",
  },
  viewRectangel: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    height: 50,
    width: 339,
    backgroundColor: "background: rgba(227, 192, 0, 1)",
  }
});
