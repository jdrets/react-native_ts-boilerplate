import { Icon } from "@/ui";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Page() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "About",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Icon source="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
