import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView
            className="flex-1 bg-background p-5"
        >
            <Text className="text-5xl font-sans-extrabold">Home</Text>
            <Link href="/onboarding" className="mt-4 rounded font-sans-bold bg-primary text-white p-4">Go to onboarding</Link>
            <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go To Sign in</Link>
            <Link href="/(auth)/sign-up" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go To Sign up</Link>
            <Link href="/subscriptions/spotify">Spotify Subscription</Link>
            <Link href={{
                pathname: "/subscriptions/[id]",
                params: {id: "claude"}
            }}>Claude max subscription</Link>
        </SafeAreaView>
    );
}
