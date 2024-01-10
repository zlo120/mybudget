import { Text, SafeAreaView } from 'react-native'

import styles from "./Subheader.style";

const SubHeader = ({text}) => {
    return (
      <SafeAreaView
        style={styles.headerContainer}
        >

        <Text style={styles.main} >{text}</Text>
        
      </SafeAreaView>
    );
};

export default SubHeader;