import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"


// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	/*const colorScheme = useColorScheme()
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	})

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}*/

	return (
		<SafeAreaProvider>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				
			</Stack>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}
