import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ onPress, title, boxStyle, textStyle }) {
    return (
        <TouchableOpacity style={[styles.container, boxStyle]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        backgroundColor: '#2F6364',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
    },
});
