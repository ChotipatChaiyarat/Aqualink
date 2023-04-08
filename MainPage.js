import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "react-native-circular-progress-indicator";
import { useNavigation } from "@react-navigation/native";
import Volume from "./Volume";

function MainPage() {
  const [value, setValue] = useState(50);

  const circleColor = value > 50 ? "#8ed1fc" : "#fc8e8e";
  const navigation = useNavigation();

  const navigateToFriends = () => {
    navigation.navigate("FriendsPage");
  };

  const navigateToStatisticPage = () => {
    navigation.navigate("Statistic");
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://api.thingspeak.com/channels/2075755/fields/1.json?api_key=S0V3XE45CSH0MGXH&results=2";

    const interval = setInterval(() => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data.feeds);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000); // set the interval time to 10 minutes

    return () => clearInterval(interval); // clear the interval on component unmount
  }, []);

  return (
    <View style={styles.container}>
      <View>
    
      <CircularProgress value={58} />
      <CircularProgress
        value={20}
        radius={120}
        duration={2000}
        progressValueColor={'#ecf0f1'}
        maxValue={200}
        title={'Litress'}
        titleColor={'white'}
        titleStyle={{fontWeight: 'bold'}}
      />

      </View>
      <View style={[styles.circle, { backgroundColor: circleColor }]}>
        {data.map((feed) => (
          <Text key={feed.entry_id}>{feed.field1}</Text>
        ))}
        <Volume volume="500" />
      </View>
      <Pressable
        style={styles.buttonContainer}
        title="Self-cleaning"
        onPress={testClick}
      >
        <Text>Self-cleaning</Text>
      </Pressable>
      <Pressable style={styles.buttonContainer} onPress={testClick}>
        <Text>Find my bottle</Text>
      </Pressable>
      <Pressable
        title="Friends"
        style={styles.buttonContainer}
        onPress={navigateToFriends}
      >
        <Text>Friends</Text>
      </Pressable>

      <Pressable
        title="Battery"
        style={styles.buttonContainer}
        onPress={testClick}
      >
        <Text>Battery</Text>
      </Pressable>

      <Pressable
        title="Statistic"
        style={styles.buttonContainer}
        onPress={navigateToStatisticPage}
      >
        <Text>Statistic</Text>
      </Pressable>

    </View>

    
  );
}

function testClick() {
  console.log("press");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 329,
    height: 329,
    borderRadius: 329,
    borderColor: "#ddd",

    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default MainPage;
