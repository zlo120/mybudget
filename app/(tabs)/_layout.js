import { Tabs, Stack } from "expo-router"
import { Ionicons  } from '@expo/vector-icons';

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index" 
                options={{
                    headerShown: false, 
                    title:"Home", 
                    headerTitle:"", 
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size}) => {
                        return focused ? (<Ionicons name="home" size={24} color="black" />) : (<Ionicons name="home-outline" size={24} color="black" />)        
                    }
                }}
            />
            <Tabs.Screen 
                name="summary/index" 
                options={{
                    headerShown: false, 
                    title:"Summary", 
                    headerTitle:"", 
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size}) => {
                        return focused ? (<Ionicons name="bar-chart-sharp" size={24} color="black" />) : (<Ionicons name="bar-chart-outline" size={24} color="black" />)        
                    }
                }}
            />
            <Tabs.Screen 
                name="data/index" 
                options={{
                    headerShown: false, 
                    title:"Data", 
                    headerTitle:"", 
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size}) => {
                        return focused ? (<Ionicons name="document-text" size={24} color="black" />) : (<Ionicons name="document-text-outline" size={24} color="black" />)        
                    }
                }}
            />
            <Tabs.Screen 
                name="settings/index" 
                options={{
                    headerShown: false, 
                    title:"Settings", 
                    headerTitle:"", 
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size}) => {
                        return focused ? (<Ionicons name="settings" size={24} color="black" />) : (<Ionicons name="settings-outline" size={24} color="black" />)        
                    }
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;