import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";

import Octicons from "@expo/vector-icons/Octicons";

export default function CardUser({ id, avatar, name, email, users, setUsers }) {

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3000/user/${id}`, {
            method: "DELETE",
        });
        const data = await response?.json();

        if (response.ok) {
            console.log("Usuário deletado com sucesso", data);
            const newUsers = users.filter(user => user.id !== id);
            setUsers(newUsers);
        } else {
            console.log("Erro ao deletar usuário", data);
        }
    }

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        //source={require("../../assets/adaptive-icon.png")} // Imagem local, pasta assets
        source={avatar} // Imagem externa, url
      />
      <View style={styles.actions}>
        <Octicons name="pencil" size={20} color="orange" />
        <Octicons name="trash" size={20} color="red" onPress={handleDelete} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderStyle: "solid",
    borderRadius: 20,
    flexDirection: "row",
    padding: 16,
    gap: 10,
    marginBottom: 20,
    width: "80%",
  },
  avatar: {
    backgroundColor: "#d0eaf1",
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  email: {
    fontSize: 14,
    color: "#505050",
  },
    actions: {
        position: "absolute",
        right: 16,
        top: 16,
        flexDirection: "row",
        gap: 10,
    },
});