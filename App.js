import React from 'react';
import {Text, TouchableOpacity, Alert, ScrollView, ToastAndroid, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Questions from './components/Questions';

const App = () => {
        const [ Q1_Answer, setQ1_Answer ] = React.useState('');
        const [ Q2_Answer, setQ2_Answer ] = React.useState('');
        const [ Q3_Answer, setQ3_Answer ] = React.useState('');
        const [ Q4_Answer, setQ4_Answer ] = React.useState('');
        const [ Q5_Answer, setQ5_Answer ] = React.useState('');
        const [ Q6_Answer, setQ6_Answer ] = React.useState('');

    const correctAnswers = {
            Q1: 'judge from Hell',
            Q2: 'taxi Driver',
            Q3: 'apartment',
            Q4: 'psh',
            Q5: 'supernatural Thriller'
        };

        const checkAnswers = () => {
            let count = 0;
            const userAnswers = [Q1_Answer, Q2_Answer, Q3_Answer, Q4_Answer, Q5_Answer, Q6_Answer];

            userAnswers.forEach((answer, index) => {
                if (answer === correctAnswers[`Q${index + 1}`]) {
                    count += 1;
                }
            });
            Alert.alert(`You got ${count} out of 5 correct!`);

            if (count <=3) {
                ToastAndroid.show('You can do better next time! 😊', ToastAndroid.SHORT);
            }
            else {
                ToastAndroid.show('Well Done! 🎉', ToastAndroid.SHORT);
            }
        }

    return (
        <ScrollView contentContainerStyle={ styles.Container}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}><Icon name={'heart'} size={20}/> K-Drama Quiz App</Text>

            <Questions
                options = {[
                    { label: 'The Judge from Hell', value:'judge from Hell'},
                    { label: 'The Penthouse: War in Life', value: 'penthouse'},
                    { label: 'Flower of Evil', value: 'flower of Evil'},
                    { label: 'While You Were Sleeping', value: 'while You Were Sleeping'}
                ]}
                onValueChange = {(value) => setQ1_Answer(value)}
                question = {'Can you name this K-Drama?'}
                image = {require('./img/The-Judge-From-Hell.jpg')} />

            <Questions
                options = {[
                    { label: '18 Again', value: '18 again'},
                    { label: 'Kill Me, Heal Me', value: 'kill me, heal me'},
                    { label: 'Taxi Driver', value: 'taxi Driver'},
                    { label: 'The King: Eternal Monarch', value: 'the King'}
                ]}
                onValueChange = {(value) => setQ2_Answer(value)}
                question = {'Which K-Dramas has this actor appeared in?'}
                image = {require('./img/Lee-Je-Hoon.jpeg')} />

            <Questions
                options = {[
                    { label: 'Detective vs. mysterious cult murders', value: 'cult'},
                    { label: 'Creepy neighbors in a rundown apartment', value: 'apartment'},
                    { label: 'Amnesiac woman in a secretive town', value: 'amnesia'},
                    { label: 'Doctor fights corporate virus cover-up', value: 'cure'}
                ]}
                onValueChange = {(value) => setQ3_Answer(value)}
                question = {'Can you guess what this K-Drama is about?'}
                image = {require('./img/Strangers-from-Hell.jpg')} />

            <Questions
                options = {[
                    { label: 'Jeon Jeong-seo', value: 'jjs'},
                    { label: 'Go Min-Si', value: 'gms'},
                    { label: 'Kim Soo-Hyun', value: 'ksh'},
                    { label: 'Park Shin-Hye', value: 'psh'}
                ]}
                onValueChange = {(value) => setQ4_Answer(value)}
                question = {'Do you know this actress?'}
                image = {require('./img/Park-Shinhye.jpg')} />

            <Questions
                options = {[
                    { label: 'Supernatural Thriller', value: 'supernatural Thriller'},
                    { label: 'Romantic Comedy', value: 'romcom'},
                    { label: 'Historical Drama', value: 'historical'},
                    { label: 'Slice of Life', value: 'life'},
                ]}
                onValueChange = {(value) => setQ5_Answer(value)}
                question = {'Can you guess the genre of this K-Drama?'}
                image = {require('./img/The-Uncanny-Counter.jpg')} />

            <Questions
                options = {[
                    { label: '2018', value: '2018' },
                    { label: '2020', value: '2020' },
                    { label: '2022', value: '2022' },
                    { label: '2024', value: '2024' },

                ]}
                onValueChange = {(value) => setQ6_Answer(value)}
                question = {'What year was this K-Drama released?'}
                image = {require('./img/Lovely-Runner.jpg')} />
            <View style = {{justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
                {/*<Button*/}
                {/*    onPress={checkAnswers} title={"Submit Answers"} color={"#0000FF"}/>*/}
                <TouchableOpacity
                    onPress={checkAnswers}>
                    <Text style={ styles.Button }>Submit Answers</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Container: {
        padding: 20, paddingTop: 80, paddingBottom: 80, backgroundColor: '#ffedf2'
    },

    Button: {
        color: '#1c1c1c',
        backgroundColor: 'pink',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    }
})

export default App;
