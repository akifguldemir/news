import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AllNews from "./screens/AllNews";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./screens/Categories";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerTitle: "Categories",
          tabBarLabel: "Categories",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="category" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="AllNews"
        component={AllNews}
        options={{
          headerTitle: "AllNews",
          tabBarLabel: "AllNews",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="newspaper" color={color} size={size} />
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          backgroundColor: 'transparent'
      }}>
        <Stack.Screen
          name="Overview"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ title: "Categories" }}
        />

        <Stack.Screen
          name="News"
          component={AllNews}
          options={{ title: "News" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
