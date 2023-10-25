import React from "react";

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ContextProvider } from "./Provider";
import BillBox from "./components/BillBox";
import TipBox from "./components/TipBox";
import PeopleBox from "./components/PeopleBox";
import TotalBox from "./components/TotalBox";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={styles.container}>
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
    </ContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C5E4E7",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    width: "100%",
    backgroundColor: "#fff",
    flex: 2,
    padding: 25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  text: {
    marginTop: 50,
    fontSize: 30,
  },
});

export default App;
