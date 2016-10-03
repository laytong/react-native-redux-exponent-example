import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class TitleBar extends React.Component {
    render() {
        return (
            <View style={styles.titleBar}>
                <Text style={styles.titleText}>7Geese</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    titleBar: {
        flex: 1,
        flexDirection: "row",
    },
    titleText: {
        textAlign: "center",
        fontSize: 20,
    }
});