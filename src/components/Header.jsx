import { View, Text, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

export default function Header() {
    const router = useRouter()

    return (
        <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Feather name="user" size={24} color="white" />
                    <Text style={styles.primary_text}>João Teixeira</Text>
                </View>
                <Feather name="user-plus" size={24} color="white" onPress={() => router.push('/signup')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F6364',
        width: '100%',
        height: 65,
        marginBottom: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingInline: 25,
        flexDirection: 'row'
    },
    primary_text: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: "semibold"
    }
})