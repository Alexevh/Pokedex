import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounce } from '../hooks/useDebounce';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value:string)=> void;
}
export const SearchInput = ({style, onDebounce}: Props) => {


    const [textValue, setTextValue] = useState('');


   const  debouncedValue = useDebounce(textValue, 500);


   useEffect(() => {
    
    console.log('el valor es', debouncedValue)
    onDebounce(debouncedValue);
   
     
   }, [debouncedValue]);
   

  return (
    <View style={{...styles.container, ...(styles as any)}}>
      <View
        style={{...styles.textBackground, top: Platform.OS === 'ios' ? 0 : 2}}>
        <TextInput
          placeholder="Search pokemon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={(value)=> setTextValue(value)}
        />
        <Icon name="search-outline" color={'grey'} size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textBackground: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
