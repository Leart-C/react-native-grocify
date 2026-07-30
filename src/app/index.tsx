import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.background}>
      <Text className="text-red-500 text-4xl bg-purple-500">Edit src/app/index.tsx to edit this screen.123123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
})
