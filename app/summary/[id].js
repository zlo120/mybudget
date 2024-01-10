import { SafeAreaView, Text, Stack, View } from 'react-native';
import { useLocalSearchParams } from "expo-router";

const SummaryPage = () => {
    const local = useLocalSearchParams();

    return (
        <SafeAreaView style={{}} >            
            <Text>Summary {local.id}</Text>
        </SafeAreaView>
    )
}

export default SummaryPage;