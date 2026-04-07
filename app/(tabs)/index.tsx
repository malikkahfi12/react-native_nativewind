import { Text, View } from "react-native";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      className="flex-1 bg-background p-5"
    >
      <Text className="text-xl font-bold text-success">Edit app/index.tsx to edit this screen.</Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go to onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Go To Sign in</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">Go To Sign up</Link>
      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: {id: "claude"}
      }}>Claude max subscription</Link>
    </SafeAreaView>
  );
}
