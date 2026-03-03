import { View, StyleSheet, Text, Image } from "react-native-web";

export default function ProfileCard({name, email, foto}) {
    return ( 
        <View style={styles.card}>
            <View style={styles.userInfo}>
                <Image 
                    source={foto}
                    style={{ width: 35, height: 35, borderRadius: 20 }}/>
                <Text style={{ fontSize: 14 }}>{name}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Email:</Text>
                <Text style={{ fontSize: 12}}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in JS
    card: {
        backgroundColor: '#C7D7E4',
        padding: 15,
        borderRadius: 10,
        width: '90%',
        gap: 10
    },
    userInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
})