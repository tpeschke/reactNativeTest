import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class SwipeTest extends Component {

    render() {
        return (
        <View>
            <Text style={styles.text}>Sup gurl. How u livin</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      color: 'whitesmoke'
    }
  });