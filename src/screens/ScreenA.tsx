import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

const ScreenA = () => {
  const { navigate } = useNavigation();

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
        title="ir para tela B"
        onPress={() => {
          navigate("ScreenB");
        }}
      />
    </View>
  );
};

export default ScreenA;
