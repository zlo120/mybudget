import { SafeAreaView, Text, Stack, View } from 'react-native';
import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from '../../../components';

const SettingsPage = () => {
    const router = useRouter()
    const local = useLocalSearchParams();

    return (
        <SafeAreaView style={{}} >      
            <Header text={"Settings"} />
        </SafeAreaView>
    )
}

export default SettingsPage;