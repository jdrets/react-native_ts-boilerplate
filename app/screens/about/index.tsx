import { View } from "react-native";
import { Text, LayoutWrapper } from "@/ui";

export default function Page() {
  return (
    <LayoutWrapper>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text variant="bodyLarge">Repo by Julián Drets</Text>
        <Text variant="bodyMedium" style={{ paddingTop: 8 }}>
          Enjoy 😀
        </Text>
      </View>
    </LayoutWrapper>
  );
}
