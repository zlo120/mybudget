import { View, Text, SafeAreaView } from 'react-native'

import styles from "./Header.style";

const Header = ({text}) => {
    return (
      <SafeAreaView
        style={styles.headerContainer}
        >
        <Text style={styles.main} >{text}</Text>
        
      </SafeAreaView>
    );
};

export default Header;