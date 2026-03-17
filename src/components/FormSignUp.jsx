import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { useState } from 'react'

export default function FormSignUp() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState("")

  const handleSubmit = async () => {
    console.log({name, email, password, avatar})
    const response = await fetch(`${apiUrl}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({name, email, password, avatar})
    })
    if(response.ok) {
      console.log('Usuário cadastrado com sucesso!')
      const data = await response.json()
    } else {
      console.log('Erro ao cadastrar usuário')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.inputs} 
            placeholder="Nome"
            value={name}
            onChangeText={setName}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Senha" 
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Avatar url" 
            value={avatar}
            onChangeText={setAvatar}
        />
        <Button title="Cadastrar" onPress={handleSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center'
  },
  form:{
    width: "90%",
    gap: 10
  },
  inputs:{
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderStyle: "solid",
    borderRadius: 6,
    padding: 8
  },
    title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20
  }
})