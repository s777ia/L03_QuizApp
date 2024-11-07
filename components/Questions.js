import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Question = ({options, onValueChange, question, image}) => {
    return(
        <View style={{paddingTop: 20}}>
            <View style={ styles.Card }>
                <Image source={(image)}
                       style={ styles.Image }/>
                <Text style={ styles.Question }>{question}</Text>
                <View style = { styles.Option }>
                    <RNPickerSelect
                        onValueChange = {onValueChange}
                        items = {options}
                        placeholder = {{ label: 'Select an option'}}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Card: {
        borderWidth: 1, borderColor: '#ccc', backgroundColor: '#FCFCFC', borderRadius: 10 , padding: 20
    },

    Image: {
        width: '100%', height: 200, borderRadius: 10
    },

    Question: {
        fontSize: 16, fontWeight: "500", paddingVertical: 20
    },

    Option: {
        borderWidth: 1, borderColor: '#ccc', backgroundColor: '#ffffff', borderRadius: 10
    }
});

export default Question;


