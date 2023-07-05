import { Text, View } from "react-native";

import TestMolecule from "_components/molecules/test-molecule";

export default function TestOrganism() {
  return (
    <View className="bg-primary-60 w-1/4 p-8 rounded-xl">
      <Text className="mb-10">This is an Organism</Text>
      <TestMolecule />
    </View>
  );
}
