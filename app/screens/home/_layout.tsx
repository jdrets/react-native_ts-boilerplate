import { Stack } from "expo-router";

export default function Page() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: "Home",
      }} />
    </Stack>
  );
}
