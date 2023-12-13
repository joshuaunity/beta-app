import { React, useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Button
} from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';


const Container = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    }

    const deleteGoalHandler = (goalId) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Button title="Add New Goal" onPress={startAddGoalHandler} visible={modalIsVisible} />
                <GoalInput setCourseGoals={setCourseGoals} visible={modalIsVisible} setModalIsVisible={setModalIsVisible} />
            </View>

            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={itemData => (
                        <GoalItem title={itemData.item.title} onDelete={deleteGoalHandler} id={itemData.item.id} />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingHorizontal: 20,
        alignContent: 'center',
    },
    inputContainer: {
        // flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        width: '80%',
    },
    goalsContainer: {
        marginTop: 30,
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    },


});


export default Container;