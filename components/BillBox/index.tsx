import { useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Context, ContextType } from "../../Provider";

export default function BillBox() {
  const context = useContext(Context) as ContextType;
  return (
    <View>
      <Text style={styles.text}>Bill</Text>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20 }}>$</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text: string) => context.setTotalBill(text)}
          placeholder="Enter Bill"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    width: "100%",
  },

  input: {
    backgroundColor: "#F3F9FA",
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    width: "100%",
    flex: 1,
  },
  text: {
    fontSize: 20,
    textTransform: "uppercase",
  },
});
