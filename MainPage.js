import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "react-native-circular-progress-indicator";
import { useNavigation } from "@react-navigation/native";
import Volume from "./Volume";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

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
      <View style={styles.container1}>
    <Text style={styles.numbers}>132</Text>
    <View style={styles.verticleLine}></View>
    <Text style={styles.numbers}>289</Text>
      </View>
      <View style={styles.container2}>
        <CircularProgress
          style={styles.circle2}
          value={20}
          valueSuffix={' / 2600ml'}
          radius={150}
          activeStrokeWidth={15}
          inActiveStrokeWidth={15}
          progressValueFontSize={35}
          duration={2000}
          progressValueColor={"#2396ff"}
          inActiveStrokeColor="rgba(200,200,200,0.6)"
          activeStrokeColor="#2396ff"
          maxValue={200}
          valueSuffixStyle={styles.suffix}
        />
      </View>
      {data.map((feed) => (
        <Text style={styles.hidden} key={feed.entry_id}>{feed.field1}</Text>
      ))}

      <View style={styles.container3}>
      <Pressable
        style={styles.buttonContainer}
        title="Self-cleaning"
        onPress={testClick}
      >
        <Text>Self-cleaning</Text>
      </Pressable>
        <View
        style={{
          borderBottomColor: 'rgba(0,0,0,0.5)',
          borderBottomWidth: 0.7,
          width:380
        }}
      />
      <Pressable style={styles.buttonContainer} onPress={testClick}>
        <Text>Find my bottle</Text>
      </Pressable>
      <View
        style={{
          borderBottomColor: 'rgba(0,0,0,0.5)',
          borderBottomWidth: 0.7,
          width:380
        }}
      />
      <Pressable
        title="Statistic"
        style={styles.buttonContainer}
        onPress={navigateToStatisticPage}
      >
        <Text>Statistic</Text>
      </Pressable>
      </View>
    </View>
  );
}

function testClick() {
  console.log("press");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(30,150,255,0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  circle2: {

  },
  numbers: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  verticleLine: {
    height: '80%',
    width: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  suffix: {
    color:'black',
  },
  container1:{
    width:380,
    height:100,
    borderRadius:'20',
    backgroundColor:'white',
    alignItems:'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  container2:{
    width:380,
    padding:50,
    backgroundColor:'white',
    alignItems:'center',
    borderRadius:'20',
    marginBottom:20,
  },
  container3:{
    width:380,
    height:200,
    padding:0,
    backgroundColor:'white',
    alignItems:'center',
    borderRadius:'20',
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems:'center',
    justifyContent:'center',

    padding: 10,
  },
  hidden: {
    display:'none',
  }
});

export default MainPage;
