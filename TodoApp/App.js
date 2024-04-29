import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoApp from "./Todos";
import DisplayTodos from "./DisplayTodos";

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "white",
            },
            headerTintColor: "black",
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name="Todo App" component={TodoApp} />
          <Stack.Screen name="Display Todos" component={DisplayTodos} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
