import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BillBox from "./components/BillBox";
import TipBox from "./components/TipBox";
import PeopleBox from "./components/PeopleBox";
import TotalBox from "./components/TotalBox";

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.text}>SPLITTER</Text>
          <View
            style={[
              styles.mainContainer,
              { marginTop: Platform.OS == "ios" ? 80 : 15 },
            ]}
          >
            <BillBox />
            <TipBox />
            <PeopleBox />
            <TotalBox />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5E4E7",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    padding: 25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  text: {
    marginTop: 50,
    fontSize: 30,
  },
});
