import { View, Text, StyleSheet } from "react-native";

function StatisticBox(props) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{props.name}</Text>
        <Text></Text>
        <Text style={{ fontSize: 20 }}> {props.value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 18,
    // borderWidth: 2,
    // borderColor: "black",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default StatisticBox;
