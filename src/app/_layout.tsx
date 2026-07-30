import { Stack } from "expo-router";

export default function RootLayout() {
  // it will remove the header from all screens in the stack navigator
  return <Stack screenOptions={{ headerShown: false }} />;
}
