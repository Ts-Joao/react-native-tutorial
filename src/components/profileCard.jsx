import { View, StyleSheet, Text, Image } from "react-native-web";

export default function ProfileCard( props ) {
    const { email, name, foto } = props;
    return ( 
        <View style={styles.card}>
            <View style={styles.userInfo}>
                <Image 
                    source={foto}
                    style={{ width: 35, height: 35, borderRadius: 20 }}/>
                <Text style={{ fontSize: 14 }}>{props.name}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Email:</Text>
                <Text style={{ fontSize: 12}}>{props.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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