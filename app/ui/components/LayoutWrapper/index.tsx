import { ReactNode } from "react";
import { SafeAreaView } from "react-native";

export const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={{ marginHorizontal: 14, flex: 1 }}>{children}</SafeAreaView>
  );
};
