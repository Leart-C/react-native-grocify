import { useAuth } from '@clerk/expo';
import { Redirect } from 'expo-router';
import {
  Icon,
  Label,
  NativeTabs,
  Badge
} from 'expo-router/unstable-native-tabs';
import { ActivityIndicator, View } from 'react-native';
import {useColorScheme} from "nativewind";

export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  const {colorScheme} = useColorScheme();
  const isDark = colorScheme === "dark";
  const tabTintColor = isDark ? "hsl(142 79% 54%)" : "hsl(147 75% 33%)";

  if (!isLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        <ActivityIndicator size="large" color="#208AEF" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <NativeTabs tintColor={tabTintColor}>

      <NativeTabs.Trigger name="index">
        <Label>List</Label>
        <Icon sf={{
          default: "list.bullet.clipboard",
          selected: "list.bullet.clipboard.fill"
        }} drawable="custom_android_drawable" />
        {/* <Badge>9+</Badge> */}
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="planner">
        <Icon sf={{
          default: "plus.circle",
          selected: "plus.circle.fill"
        }} drawable="custom_settings_drawable" />
        <Label>Planner</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="insights">
        <Icon sf={{
          default: "chart.bar",
          selected: "chart.bar.fill"
        }} drawable="custom_settings_drawable" />
        <Label>Insights</Label>
      </NativeTabs.Trigger>

    </NativeTabs>
  );
}