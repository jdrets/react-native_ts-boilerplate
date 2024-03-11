import { View } from "react-native";
import { Text, Button } from "@/ui";
import { LayoutWrapper } from "../../ui/components/LayoutWrapper";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();

  return (
    <LayoutWrapper>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text variant="bodyMedium">Hi, I'm your boilerplate 😀</Text>
        <Button
          mode="contained"
          style={{ marginTop: 24 }}
          onPress={() => router.push("screens/about")}
        >
          Go to another screen
        </Button>
      </View>
    </LayoutWrapper>
  );
}
