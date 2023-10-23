import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TipBox() {
  const [selectedTip, setSelectedTip] = useState<number>();

  const [customTip, setCustomTip] = useState<string>("");

  const handleCustomTipChange = (text: string) => {
    setCustomTip(text);
  };

  const handleCustomTipSubmit = () => {
    const number = parseFloat(customTip);
    setSelectedTip(isNaN(number) ? undefined : number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Select Tip %</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: selectedTip === 5 ? "#26C2AE" : "#00474B" },
          ]}
          onPress={() => setSelectedTip(5)}
        >
          <Text style={styles.buttonText}>5%</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: selectedTip === 10 ? "#26C2AE" : "#00474B" },
          ]}
          onPress={() => setSelectedTip(10)}
        >
          <Text style={styles.buttonText}>10%</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: selectedTip === 15 ? "#26C2AE" : "#00474B" },
          ]}
          onPress={() => setSelectedTip(15)}
        >
          <Text style={styles.buttonText}>15%</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: selectedTip === 25 ? "#26C2AE" : "#00474B" },
          ]}
          onPress={() => setSelectedTip(25)}
        >
          <Text style={styles.buttonText}>25%</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: selectedTip === 50 ? "#26C2AE" : "#00474B" },
          ]}
          onPress={() => setSelectedTip(50)}
        >
          <Text style={styles.buttonText}>50%</Text>
        </Pressable>
        <TextInput
          onChangeText={handleCustomTipChange}
          onSubmitEditing={handleCustomTipSubmit}
          returnKeyType="done"
          style={styles.input}
          placeholder="Custom"
          keyboardType="numeric"
          value={customTip}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  Text: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#DDDDDD",
    padding: 10,
    flex: 0.5,
    marginTop: 20,
    fontSize: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#00474B",
    padding: 10,
    flex: 0.5,
    marginTop: 20,
    height: 50,
    fontSize: 30,
  },
});
