import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Text, ScrollView } from "react-native";
import axios from "axios";
import styles from "./styles";
import { API_KEY } from "@env";

function TodoApp(props) {
  const [input, setInput] = useState("");
  const [addTodo, setAddTodo] = useState([]);
  const [startEditing, setStartEditing] = useState(null);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API_KEY}/api/todos`);
      setAddTodo(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAdd = async () => {
    if (input !== "") {
      try {
        await axios.post(`${API_KEY}/api/todos`, {
          text: input,
        });
        setInput("");
        fetchTodos();
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  const handleEdit = async (id) => {
    if (editedText !== "") {
      try {
        await axios.put(`${API_KEY}/api/todos/${id}`, {
          text: editedText,
        });
        setStartEditing(null);
        setEditedText("");
        fetchTodos();
      } catch (error) {
        console.error("Error editing todo:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_KEY}/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Todo App</Text> */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={(text) => setInput(text)}
            placeholder="Enter text here..."
          />
          <Button color="green" title="Add" onPress={handleAdd} />
          <View style={styles.button}>
            <Button
              color="gray"
              title="Display"
              onPress={() =>
                props.navigation.navigate("Display Todos", { addTodo })
              }
            />
          </View>
        </View>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {addTodo.map((todo, index) => (
            <View style={styles.todoItem} key={todo._id}>
              {startEditing !== index ? (
                <View>
                  <Text style={styles.todoText}>{todo.text}</Text>
                  <View style={styles.buttonContainer}>
                    <Button
                      title="Edit"
                      onPress={() => {
                        setStartEditing(index);
                        setEditedText(todo.text);
                      }}
                    />
                    <View style={styles.button}>
                      <Button
                        color="red"
                        title="Delete"
                        onPress={() => handleDelete(todo._id)}
                      />
                    </View>
                  </View>
                </View>
              ) : (
                <View>
                  <TextInput
                    style={styles.input}
                    value={editedText}
                    onChangeText={(text) => setEditedText(text)}
                  />
                  <View style={styles.buttonContainer}>
                    <Button
                      color="green"
                      title="Save"
                      onPress={() => handleEdit(todo._id)}
                    />
                    <View style={styles.button}>
                      <Button
                        color="red"
                        title="Cancel"
                        onPress={() => setStartEditing(false)}
                      />
                    </View>
                  </View>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

export default TodoApp;
