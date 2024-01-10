import { SafeAreaView, Text, Stack, View } from 'react-native';
import { Header, AddEntry } from '../components';

const AddEntryPage = () => {
    return (
        <SafeAreaView style={{}} >            
            <Header text={"Add Data"}/>

            <AddEntry />
        </SafeAreaView>
    )
}

export default AddEntryPage;