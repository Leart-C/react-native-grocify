import { useAuth } from '@clerk/expo'
import { Redirect, Stack } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'

export default function Layout() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
        <ActivityIndicator size="large" color="#208AEF" />
      </View>
    )
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />
  }

  return <Stack screenOptions={{ headerShown: false }} />
}
