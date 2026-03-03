import { View, Text, StyleSheet, Image } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Feather name="shopping-cart" size={28} color="white" />
                <Text style={styles.title}>Tech Shop</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F6364',
        width: '100%',
        height: 65,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingInline: 25,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: "semibold"
    }
})