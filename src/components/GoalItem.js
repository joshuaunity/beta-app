// GoalItem.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Pressable onPress={props.onDelete.bind(this, props.id)} android_ripple={{ color: '#111' }}
                style={({ pressed }) => pressed ? styles.pressedItem : null}
            >
                <Text style={styles.ItemText}>{props.title}</Text>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({
    listItem: {
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    },
    ItemText: {
        color: 'black',
        padding: 10,
    },
    pressedItem: {
        opacity: 0.5,
    }
});

export default GoalItem;