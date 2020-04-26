import React from 'react';
import {View, ImageBackground, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {IMAGES} from '../../configs';
import styles from './styles';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    StatusBar.setHidden(true);

    if (data !== null) {
      this.props.navigation.navigate('Sessionscreen');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={IMAGES.splash} style={styles.bgimage} />
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
