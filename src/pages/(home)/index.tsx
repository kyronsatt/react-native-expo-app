import React from "react";
import { Text, View } from "react-native";

import useTest from "_hooks/use-test";
import TestOrganism from "_components/organisms/test-organism";

export default function HomePage() {
  const { testFunction } = useTest();

  React.useEffect(() => {
    testFunction(null);
  }, []);

  return (
    <View>
      <Text>Home Page</Text>
      <View>
        <TestOrganism />
      </View>
    </View>
  );
}
