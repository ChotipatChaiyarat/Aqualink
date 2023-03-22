import { View, Text } from "react-native";

function ListFriend(props) {
  return (
    <View>
      <Text>
        {props.place} - {props.name}: {props.volume}
      </Text>
    </View>
  );
}

export default ListFriend;
