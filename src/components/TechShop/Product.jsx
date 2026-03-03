import { View, StyleSheet, Text, Image } from "react-native-web";

export default function ProductCard({name, price, image, category}) {
    return ( 
        <View style={styles.card}>
            <View style={styles.productInfo}>
                <Image source={image} style={styles.productImage}/>
                <View style={{height: 120, justifyContent: 'space-between', }}>
                    <Text>{name}</Text>
                    <Text>{category}</Text>
                    <Text>{price}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in JS
    card: {
        backgroundColor: '#C7D7E4',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#2F6364',
        height: 280,
        width: 150,
    },
    productImage: {
        width: 120,
        height: 120,
        borderRadius: 10
    },
    productInfo: {
        flexDirection: 'column',
        fontSize: 18,
        gap: 10,
    },
})