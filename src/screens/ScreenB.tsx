import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import useSecureScreenGuard from "../hooks/useSecureScreenGuard";

const ScreenB = () => {
  const { navigate } = useNavigation();
  useSecureScreenGuard('ScreenB');

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
      }}
    >
      <Button
        title="ir para tela A"
        onPress={() => {
          navigate("ScreenA");
        }}
      />
    </View>
  );
};

export default ScreenB;
