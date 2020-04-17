import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [toDos, setToDos] = useState([
    {text: "Buy a Switch", key: "1"},
    {text: "Buy bubble tea", key: "2"},
    {text: "Buy bubble tea", key: "3"}
  ]);

  const deleteHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const addHandler = (item) => {
    setToDos((prevTodos) => {
      return (
        [
          // BAD Math.random()
          { text: item, key: Math.random().toString()},
          ...prevTodos
        ])
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo pressHandler={addHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={toDos}
            renderItem={ ({ item }) => (
              <TodoItem item={item} pressHandler={deleteHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list:{
    marginTop: 20
  }
});
