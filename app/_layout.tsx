import { Stack } from "expo-router";
import { Providers } from "@/ui";

export default function RootLayout() {
  return (
    <Providers>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </Providers>
  );
}
