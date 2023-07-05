import React from "react";
import { Text, View } from "react-native";

import useTest from "_hooks/use-test";
import TestOrganism from "_components/organisms/test-organism";
import { StatusBar } from "expo-status-bar";

export default function HomePage() {
  const { testFunction } = useTest();

  React.useEffect(() => {
    testFunction(null);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-primary-10 text-heading-small font-bold mb-10">
        This is your Home Page.
      </Text>
      <TestOrganism />
    </View>
  );
}
