import React, { PropsWithChildren } from "react";
import { PaperProvider } from "react-native-paper";
import { theme } from "./theme";

export const Providers = ({ children }: PropsWithChildren) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
