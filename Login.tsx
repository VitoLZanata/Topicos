import {View, Text, TextInput} from 'react-native';

export default function Login(){
    return(
<View>
  
  <Text>E-mail:</Text>
  <TextInput 
    placeholder='Digite seu e-mail' 
  />

  <Text>Senha:</Text>
  <TextInput 
    placeholder='Digite sua senha' 
    secureTextEntry={true} 
  />

</View>
    )
}