import { SafeAreaView, Text, Stack, View } from 'react-native';
import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from '../../../components';

const SummaryPage = () => {
    const router = useRouter()
    const local = useLocalSearchParams();

    return (
        <SafeAreaView style={{}} >     
            <Header text={"Summary"} />
            <TouchableOpacity onPress={() => {
                router.push('/summary/32')
            }}>
                <Text>Go to summary 32</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SummaryPage;