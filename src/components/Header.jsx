import { View, Text, StyleSheet, Image } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image 
                source={require('../../assets/pfp.png')}
                style={{ width: 40, height: 40, borderRadius: 20 }}/>
                <Text style={styles.primary_text}>João Teixeira</Text>
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
        paddingInline: 25,
    },
    primary_text: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: "semibold"
    }
})