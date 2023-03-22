import { View, Text, TextInput, Button } from "react-native";
import ListFriend from "./ListFriend";
import React, { useState, useEffect } from "react";

import axios from "axios";

function FriendsPage() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://aqualink-e32f1-default-rtdb.asia-southeast1.firebasedatabase.app/friends.json"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function sendData() {
    const user = Object.assign({}, { name, value });

    axios
      .post(
        "https://aqualink-e32f1-default-rtdb.asia-southeast1.firebasedatabase.app/friends.json",
        user
      )
      .then((response) => {
        console.log(response.data); // The data returned by the server
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>This is a FriendsPage</Text>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
      />
      <Text>Value</Text>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Value"
      />
      <Button title="add" onPress={sendData} />

      <View>
        {Object.values(data).map((item) => (
          <ListFriend key={item.id} name={item.name} volume={item.value} />
        ))}
      </View>
    </View>
  );
}

export default FriendsPage;
