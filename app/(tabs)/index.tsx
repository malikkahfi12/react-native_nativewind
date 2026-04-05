import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-background"
    >
      <Text className="text-xl font-bold text-success">Edit app/index.tsx to edit this screen.</Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go to onboarding</Link>
      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: {id: "claude"}
      }}>Claude max subscription</Link>
    </View>
  );
}
