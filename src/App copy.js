import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ProfileCard from './components/profileCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <View style={{ gap: 10, width: '100%', alignItems: 'center'}}>
        <ProfileCard name='João Teixeira' email='joao.teixeira@email.com' foto={require('../assets/pfp.png')}/>
        <ProfileCard name='lucas Alves' email='lucas.alves@email.com' foto={require('../assets/pfp2.png')}/>
        <ProfileCard name='Felipe Farias' email='felipe.farias@email.com' foto={require('../assets/pfp3.png')}/>
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
