import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";

const stack = createNativeStackNavigator();

export const App = () => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="ModuleListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
        <stack.Screen
          name="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "List modules" }}
        />
        <stack.Screen
          name="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "Add modules" }}
        />
        <stack.Screen
          name="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "View modules" }}
        />
        <stack.Screen
          name="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "Modify modules" }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
