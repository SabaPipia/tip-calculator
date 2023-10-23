import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function PeopleBox() {
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleCustomTipSubmit = (number: number) => {
    // setNumberOfPeople(number);
    console.log(number);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Number of People</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Number of People"
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={(e: any) =>
          handleCustomTipSubmit(Number(e.target.value))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
  },
  input: {
    backgroundColor: "#F3F9FA",
    fontSize: 18,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
});
