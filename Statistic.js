import { View, Text, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import StatisticBox from "./StatisticBox";
import CircularProgress from "react-native-circular-progress-indicator";

function Statistic() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [300, 500, 400, 400, 600, 700, 800],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#000000", // set background color to black
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 167, 38, ${opacity})`, // set color to orange
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // set label color to white
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
    barPercentage: 0.7, // set bar width to 50% of available space
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 10, margin: 10 }}>
        <BarChart
          data={data}
          width={380} // from react-native
          height={300}
          yAxisLabel="mL"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#FFFFFF",
          }}
        />
      </View>
      <StatisticBox name="Total Intake" value="17" />
      <StatisticBox name="Average Intake" value="17" />
      <StatisticBox name="Improvement over last week" value="17" />
      <StatisticBox name="Comulative score" value="17" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
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

export default Statistic;
