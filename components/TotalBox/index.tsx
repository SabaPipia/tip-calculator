import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context, ContextType } from "../../Provider";

export default function TotalBox() {
  const context = useContext(Context) as ContextType;
  const tipAmountPerPerson =
    context.selectedTip && context.totalBill && context.numberOfPeople
      ? ((context.selectedTip / 100) * Number(context.totalBill)) /
        context.numberOfPeople
      : 0.0;

  // Calculate the total amount per person
  const amountPerPerson =
    context.totalBill && context.selectedTip && context.numberOfPeople
      ? (Number(context.totalBill) +
          (context.selectedTip / 100) * Number(context.totalBill)) /
        context.numberOfPeople
      : 0.0;
  return (
    <View style={styles.container}>
      <View style={styles.tip}>
        <View style={styles.inner}>
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
            Tip Amount
          </Text>
          <Text style={{ fontSize: 16, color: "#999", fontWeight: "700" }}>
            / person
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 32, color: "#26C2AE", fontWeight: "700" }}>
            ${tipAmountPerPerson.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.total}>
        <View style={styles.inner}>
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
            Total
          </Text>
          <Text style={{ fontSize: 16, color: "#999", fontWeight: "700" }}>
            / person
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 32, color: "#26C2AE", fontWeight: "700" }}>
            ${amountPerPerson}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00474B",
    padding: 20,
    marginTop: 30,
    gap: 10,
    borderRadius: 15,
  },
  tip: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inner: {},
});
