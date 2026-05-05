import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#2F6364',
            tabBarLabelStyle: {
                fontSize: 12
            },
            tabBarStyle: {
                backgroundColor: '#f7f7f7',
                borderTopWidth: 1,
                borderTopColor: '#ddd',
                height: 55,
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color }) => (<Feather name="home" size={20} color={color} />)
                }} />
            <Tabs.Screen
                name="contact"
                options={{
                    title: 'Contato',
                    tabBarIcon: ({ color }) => (<Feather name="phone-call" size={20} color={color} />)
                }} />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => (<Feather name="user" size={20} color={color} />)
                }} />
            <Tabs.Screen
                name="products"
                options={{
                    title: 'Produtos',
                    tabBarIcon: ({ color }) => (<Feather name="shopping-bag" size={20} color={color} />)
                }} />
        </Tabs>
    );
}