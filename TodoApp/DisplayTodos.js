import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";

function DisplayTodos({ route }) {
  const { addTodo } = route.params;
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {addTodo.map((todo, index) => (
        <View key={todo._id} style={styles.todoItem}>
          <Text style={styles.displayTodosText}>
            {index + 1}. {todo.text}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default DisplayTodos;
