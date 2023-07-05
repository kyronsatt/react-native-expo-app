import TestProvider from "_contexts/test";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <TestProvider>
      <Slot />
    </TestProvider>
  );
}
