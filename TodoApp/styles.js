import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: -1,
    margin: 20,
  },
  scrollView: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    marginBottom: 10,
  },
  todoText: {
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    marginTop: 10,
  },
  button: {
    marginTop: 5,
  },
  displayTodosText: {
    borderWidth: 2,
    padding: 10,
    borderColor: "dodgerblue",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 1,
    fontSize: 20,
  },
});

export default styles;
