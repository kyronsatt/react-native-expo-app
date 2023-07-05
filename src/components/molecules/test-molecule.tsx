import { Text, View } from "react-native";

import TestAtom from "_components/atoms/test-atom";

export default function TestMolecule() {
  return (
    <View className="bg-primary-30 w-full p-8 rounded-xl">
      <Text className="mb-10">This is a Molecule</Text>
      <TestAtom />
    </View>
  );
}
