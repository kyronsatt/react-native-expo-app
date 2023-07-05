import { Slot } from "expo-router";
import { View } from "react-native";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Layout() {
  return (
    <View className="w-full h-full bg-primary-90">
      <Slot />
    </View>
  );
}
