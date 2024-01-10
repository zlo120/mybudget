import { useEffect, useState } from 'react';
import { SafeAreaView, Text, Stack, View, ScrollView, Button, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from "expo-router";
import { DataGroup, Header, SubHeader } from '../../../components';
import { MaterialIcons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import groupData from '../../../utils/groupData';

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
    
    const [entryData, setEntryData] = useState([]);

    const getData = async () => {
        try {
            let value = await AsyncStorage.getItem("entryData");
            setEntryData(groupData(value));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])


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
                {entryData.map((dataGroup) => (
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