import { Text, View } from "react-native";

import TestAtom from "_components/atoms/test-atom";

export default function TestMolecule() {
  return (
    <View>
      <Text>Molecule</Text>
      <TestAtom />
    </View>
  );
}
