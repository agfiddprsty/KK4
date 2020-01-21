/* eslint-disable no-return-assign */
/* eslint-disable react/no-string-refs */
import React from 'react';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';
import styles from './styles';
import Love from '../../../assets/svgs/Love';
import images from '../../configs/images';
import { ENDPOINT } from '../../configs';
import errors from '../../utils/errors';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isLoading: false
    };
  }

  componentWillMount() {
    this._loadData();
  }

  onPress = () => {
    console.log(this.state.name);
  };

  _loadData = async () => {
    try {
      await this.setState({ isLoading: true });
      const result = await ENDPOINT.getUserById();
      console.log(result);
      this.setState({ name: `${result.data.firstname} ${result.data.lastname}` });
    } catch (err) {
      errors.createError(I18n.t('error.timeOutConnection'));
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <MainScreen isLoading={this.state.isLoading}>
        <View style={styles.container}>
          <ImageBackground source={images.bgimageful} style={styles.bgimage}>
            <View style={styles.center}>
              <Text style={styles.txtName}>Hi, {this.state.name}</Text>
              <Text style={styles.txtPlaceholder}>What do you wan’t know?</Text>
            </View>
            <View>
              <Button
                title={I18n.t('quiz')}
                type="flat"
                isUpperCase={false}
                customContainer={styles.conBtnQuiz}
                onPress={this.onPress}
                customText={styles.txtBtnQuiz}
              />
            </View>
            {/* <View>
              <TouchableHighlight>
                <View>
                  <Love />
                </View>
                <Text>Definition</Text>
              </TouchableHighlight>
            </View> */}
          </ImageBackground>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
