import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function TotalBox() {
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
            $4.27
          </Text>
        </View>
      </View>
      <View style={styles.total}>
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
            $32.79
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
