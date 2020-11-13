import React from 'react';
import { View , StyleSheet, Text } from 'react-native';
import CustomButton from '../elements/CustomButton';

const second = () => {
  return(
     <View style={styles.container}>
        <CustomButton title="custom Button" />
     </View>
  );
}

const styles = StyleSheet.create({
 container: {
marginTop:50,
alignItems:'center',
}
});

export default second;