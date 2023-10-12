import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenA from "../screens/ScreenA";
import ScreenB from "../screens/ScreenB";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="ScreenA" component={ScreenA} />
      <Screen name="ScreenB" component={ScreenB} />
    </Navigator>
  );
}
