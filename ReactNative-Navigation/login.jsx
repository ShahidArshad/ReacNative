import { View, TouchableOpacity, Text } from "react-native";

function Login({ navigation }) {
  const onGoPressed = () => {
    navigation.navigate("profile");
  };
  return (
    <View style={{ backgroundColor: "green", flex: 1 }}>
      <TouchableOpacity onPress={onGoPressed}>
        <Text style={{ fontSize: 22 }}> Press me Please</Text>
      </TouchableOpacity>
    </View>
  );
}

export { Login };
