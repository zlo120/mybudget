import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter } from 'expo-router';
import { Header } from '../../components';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{}} >
            <Stack.Screen 
                options={{
                    headerTitle: ""
                }}
            />
            <ScrollView>
                <Header text={"myBudget"} />
            </ScrollView>            
        </SafeAreaView>
    )
}

export default Home;