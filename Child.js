import React, { Component } from 'react'
import { View, Text } from 'react-native'


export default class Child extends Component {
    constructor() {
        super()

        this.state = {
            lat: '',
            long: '',
            update: 0,
            id: null
        }

        this.retrievePosition = this.retrievePosition.bind(this)
    }

    componentDidMount() {
        navigator.geolocation
            .getCurrentPosition(e => this.setState({ lat: e.coords.latitude, long: e.coords.longitude}),
                (error) => alert(JSON.stringify(error)),
                { enableHighAccuracy: true, maximumAge: 1000 })
        this.setState({id: setInterval(_=>this.retrievePosition(), 2000)})
    }

    componentWillUnmount() {
        clearInterval(this.state.id)
    }

    retrievePosition () {
        navigator.geolocation
            .watchPosition(e => this.setState({ lat: e.coords.latitude, long: e.coords.longitude }),
                (error) => alert(JSON.stringify(error)),
                { enableHighAccuracy: true, maximumAge: 1000, distanceFilter: 1 })
    }

    render() {
        return (
            <View>
                <Text>This is the Child Component</Text>
                <Text>Latitude: {this.state.lat}</Text>
                <Text>longitude: {this.state.long}</Text>
            </View>
        )
    }
}