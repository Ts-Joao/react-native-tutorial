import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import ProfileCard from './components/profileCard';
import { useEffect, useState } from 'react';

export default function App() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('http://localhost:3333/user')
      const data = await response?.json()
      if (response.ok) {
        console.log(data)
        setUsers(data.users)
        setIsLoading(false)
      } else {
        console.error('erro ao buscar usuarios', data)
      }
    }
    getUser()
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ gap: 10, width: '100%', alignItems: 'center'}}>
        {isLoading ? <Text>Carregando...</Text> : users.map((user) => (
          <ProfileCard 
            key={user.id}
            name={user.name}
            email={user.email}
            foto={user.foto}
          />
        ))}
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
