/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Deck from './src/Deck';
import {Card, Button} from 'react-native-elements';
const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri:
      'https://www.freepik.com/free-photo/passionate-woman-with-closed-eyes-touching-face-gently_9475356.htm',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    uri:
      'https://www.freepik.com/premium-psd/mockup-isolated-t-shirt-design-with-front-back-side-views_9595732.htm',
  },
];

class App extends React.Component {
  renderCard(item) {
    return (
      <Card title={item.text} image={{uri: item.uri}} key={item.id}>
        <Text style={{marginBottom: 10}}>heyyy chinwe</Text>
        <Button
          icon={{name: 'code'}}
          backgroundColor="#03A9F4"
          title="View Now"
        />
      </Card>
    );
  }
  renderNoMoreCards() {
    return (
      <Card title="All Done">
        <Text style={{marginBottom: 10}}>There is no more content</Text>
        <Button title="Get More" backgroundColor="#03A9f4" />
      </Card>
    );
  }
  render() {
    return (
      <>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </>
    );
  }
}

export default App;
