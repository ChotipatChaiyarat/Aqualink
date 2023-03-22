import { View, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import StatisticBox from "./StatisticBox";

function Statistic() {
  const data = {
    labels: [
      "Mon",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 56],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  return (
    <View>
      <Text>This is a Statistic</Text>
      <BarChart
        data={data}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="mL"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
      <StatisticBox name="Total Intake" value="17" />
      <StatisticBox name="Average Intake" value="17" />
      <StatisticBox name="Improvement over last week" value="17" />
      <StatisticBox name="Comulative score" value="17" />
    </View>
  );
}

export default Statistic;
