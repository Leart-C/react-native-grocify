import { ClerkProvider } from '@clerk/expo'
import { Stack } from "expo-router";
import "../../global.css";
import { DefaultTheme,DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // it will remove the header from all screens in the stack navigator
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </ClerkProvider>
  );
}
