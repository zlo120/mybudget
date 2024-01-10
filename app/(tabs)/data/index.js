import { SafeAreaView, Text, Stack, View, ScrollView, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from "expo-router";
import { DataGroup, Header, SubHeader } from '../../../components';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    btn : {
        position: 'absolute',
        bottom: 0,
        right: Dimensions.get('window').width / 2.5,
        zIndex: 1,
    }
})

const DataPage = () => {
    const router = useRouter()
    const local = useLocalSearchParams();

    let data = [
        {
            date: "13/01/2023",
            transactions : [
                {
                    type: "incoming",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "incoming",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "outgoing",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "incoming",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "outgoing",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "outgoing",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "incoming",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "outgoing",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "outgoing",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "incoming",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "outgoing",
                    amount: "$12",
                    category: "food"
                },
                
            ]
        },
        {
            date: "14/01/2023",
            transactions : [
                {
                    type: "incoming",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "outgoing",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "outgoing",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "incoming",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "incoming",
                    amount: "$12",
                    category: "food"
                },                
            ]
        },
        ,
        {
            date: "22/01/2023",
            transactions : [
                {
                    type: "incoming",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "outgoing",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "incoming",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "outgoing",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "outgoing",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "incoming",
                    amount: "$122",
                    category: "salary"
                },
                {
                    type: "incoming",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "outgoing",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "incoming",
                    amount: "$12",
                    category: "food"
                },  
                {
                    type: "incoming",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "outgoing",
                    amount: "$12",
                    category: "food"
                },
                {
                    type: "outgoing",
                    amount: "$12",
                    category: "food"
                },              
            ]
        }        
    ]

    return (
        <SafeAreaView>             
            <MaterialIcons 
                name="add-circle"  
                size={65} 
                color="black" 
                style={styles.btn} 
                onPress={() => {
                    router.push('/addEntry')
                }}                
            />
            <ScrollView>
                <Header text={"Your Data"} />                
                {data?.map((dataGroup) => (
                    <View>
                        <SubHeader text={dataGroup.date} />
                        <DataGroup data={dataGroup.transactions} />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default DataPage;