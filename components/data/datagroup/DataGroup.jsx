import { ScrollView } from 'react-native';

import DataEntry from '../dataentry/DataEntry';

import styles from './DataGroup.style';

const DataGroup = ({data}) => {

    return (
        <ScrollView
            style={styles.scrollViewContainer}
        >
            {data?.map((entry) => (                
                <DataEntry 
                    type = {entry.type}
                    amount = {entry.amount}
                    category = {entry.category}
                />
            ))}
        </ScrollView>
    )
}

export default DataGroup;