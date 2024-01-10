import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import styles from './DataEntry.style';

const DataEntry = ({ type, amount, category }) => {
    return (
        <View 
            style={styles.container}
        >
            <View style={styles.dataEntryStyle(type)}>
                <Text style={styles.categoryStyle}>{type === "outgoing" ? "Outgoing - " : "Incoming - "}{category}</Text>
                <Text style={styles.amountStyle}>${amount}</Text>
            </View>
        </View>
    )
}

export default DataEntry;