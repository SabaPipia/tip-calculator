import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Context, ContextType } from "../../Provider";

export default function PeopleBox() {
  const context = useContext(Context) as ContextType;
  const handleCustomTipSubmit = (number: any) => {
    context.setNumberOfPeople(number);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Number of People</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Number of People"
        keyboardType="numeric"
        returnKeyType="done"
        // value={context.numberOfPeople}
        // defaultValue={context.numberOfPeople}
        onChangeText={(text) => handleCustomTipSubmit(text)}
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
