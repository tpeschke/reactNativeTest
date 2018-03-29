import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ViewPagerAndroid } from 'react-native';
import Child from './Child'
import ModalTest from './ModalTest'
import SwipeText from './SwipeText'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      greeting: 'I am the state',
      text: ''
    }
  }

  changeState = () => {
    this.setState({ greeting: this.state.text }, this.setState({ text: '' }))
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        intiialPage={0}>
        <View style={styles.container} key='1'>
          <Text>I'm afraid I can't do that</Text>
          <Image source={pic} style={{ width: 193, height: 110 }} />

          <Child />

          <TextInput
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            multiline={true} />
          <Button onPress={this.changeState} title='Click Me' color='#222' />
          <Text>{this.state.greeting}</Text>

          <ModalTest />
        </View>

        <View style={styles.container2} key='2'>
          <SwipeText />
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

