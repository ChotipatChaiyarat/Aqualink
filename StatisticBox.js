import { View, Text } from "react-native";

function StatisticBox(props) {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text> {props.value}</Text>
    </View>
  );
}
export default StatisticBox;
