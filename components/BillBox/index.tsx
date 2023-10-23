import { StyleSheet, Text, TextInput, View } from "react-native";

export default function BillBox() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Bill</Text>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 20 }}>$</Text>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Enter Bill"
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  input: {
    backgroundColor: "#F3F9FA",
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: "100%",
    // marginLeft: 5,
  },
  text: {
    fontSize: 20,
    textTransform: "uppercase",
  },
});
