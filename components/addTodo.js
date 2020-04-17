
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';

export default function AddTodo({ pressHandler }) {
  const [text, setText] = useState("");
  
  const changeHandler = (value) => {
    setText(value);
  }
  
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={changeHandler}
      />
      <Button 
        onPress={()=>{pressHandler(text)}} 
        color="coral"
        title="Add todo"/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})