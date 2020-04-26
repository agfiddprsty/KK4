/* eslint-disable prefer-destructuring */
import React from 'react';
import { View, ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { IMAGES } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ujian: 'false'
    };
  }
  _onPress = e => {
    // const ujian = e;
    this.props.navigation.navigate('Quiz', e);
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={IMAGES.bgimageful} style={styles.bgimage}>
          <ScrollView>
            <View style={styles.conContent}>
              <View style={styles.viewCard}>
                <TouchableOpacity
                  style={styles.conCard}
                  onPress={() => {
                    this.setState({ ujian: 'false' });
                    const ujian = false;
                    console.log(ujian);
                    this.props.navigation.navigate('Quiz', { ujian });
                  }}
                >
                  <Text style={styles.txtCard}>Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.conCard}
                  onPress={() => {
                    this.setState({ ujian: 'true' });
                    const ujian = true;
                    console.log(ujian);
                    this.props.navigation.navigate('Quiz', { ujian });
                  }}
                >
                  <Text style={styles.txtCard}>Exam</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
