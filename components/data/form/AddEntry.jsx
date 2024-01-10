import { useState } from 'react';
import { ScrollView, TextInput, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DataEntry from '../dataentry/DataEntry';

import styles from './AddEntry.style';

import formatDate from '../../../utils/formatDate';

const AddEntry = () => {
    const [type, setType] = useState("income");
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    // None of these are used in the db
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    
    const router = useRouter()

    const addEntry = async ({amount, category, type, date}) => {
        try {
            let formattedDate = formatDate(date);
            let value = await AsyncStorage.getItem("entryData");

            value = JSON.parse(value);

            const obj = {
                date: formattedDate,
                type: type,
                amount : amount,
                category: category
            }

            // await AsyncStorage.removeItem("entryData");

            if (value !== null) {
                value.push(obj)
                await AsyncStorage.setItem(
                    "entryData",
                    JSON.stringify(value)
                );
            }
            // brand new (no data exists yet)
            else {
                await AsyncStorage.setItem(
                    "entryData",                    
                    JSON.stringify([
                        obj
                    ])
                                       
                );
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    return (
        <ScrollView
            style={styles.scrollViewContainer}
        >
            <Text style={styles.inputLabel}>Amount ($)</Text>
            <TextInput             
                keyboardType='numeric'
                style={styles.input}
                onChangeText={amount => setAmount(amount)}
            />

            <Text style={styles.inputLabel}>Category</Text>
            <TextInput 
                style={styles.input}
                onChangeText={category => setCategory(category)}
            />

            <Text style={styles.centerInputLabel}>Incoming or Outgoing</Text>
            <Picker
                style={styles.pickerStyle}
                selectedValue={type}
                onValueChange={type => setType(type)}>
                    
                <Picker.Item label="Income" value="income" />
                <Picker.Item label="Outgoing" value="outgoing" />
            </Picker>

            <Text style={styles.centerInputLabel}>Date Time</Text>
            <DateTimePicker
                style = {styles.dateInput}
                value={date}
                mode={'date'}
                is24Hour={false}
                onChange={onChange}
            />

            <TouchableOpacity
                activeOpacity={.7}
                style={styles.btn}
                onPress={async () => {
                    await addEntry(
                        {
                            amount,
                            category,
                            type,
                            date
                        }
                    )
                }}
            >
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default AddEntry;