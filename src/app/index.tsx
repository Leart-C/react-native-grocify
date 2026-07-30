import { Link } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.background}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Image
        source={require("../../assets/images/tabIcons/home.png")} style={{width: 200, height: 200}}/>
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
