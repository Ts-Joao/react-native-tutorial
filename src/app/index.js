import { useRouter } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";

export default function Login() {
    const router = useRouter();

    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button title="Cadastrar" onPress={() => router.push("/signup")} />
        <Button title="Entrar" onPress={() => router.push("/home")} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7",
        alignItems: "center",
    },
});