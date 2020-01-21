/* eslint-disable no-return-assign */
/* eslint-disable react/no-string-refs */
import React from 'react';
import { View, Text, TextInput, ImageBackground, TouchableHighlight, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import I18n from '../../i18n';
import styles from './styles';
import regex from '../../constants/regex';
import { COLOR_BASE_SECONDARY_MAIN, COLOR_EVENT_INACTIVE } from '../../styles';
import images from '../../configs/images';
import Right from '../../../assets/svgs/Right';
import Left from '../../../assets/svgs/Left';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      off: true,
      isLoading: false
    };
  }

  onFocusFn = () => {
    this._firstname.setNativeProps({ underlineColorAndroid: COLOR_BASE_SECONDARY_MAIN });
  };

  onFocusLn = () => {
    this._lastname.setNativeProps({ underlineColorAndroid: COLOR_BASE_SECONDARY_MAIN });
  };

  onFocusEm = () => {
    this._email.setNativeProps({ underlineColorAndroid: COLOR_BASE_SECONDARY_MAIN });
  };

  onFocusPw = () => {
    this._password.setNativeProps({ underlineColorAndroid: COLOR_BASE_SECONDARY_MAIN });
  };

  onBlurFn = () => {
    this._firstname.setNativeProps({ underlineColorAndroid: COLOR_EVENT_INACTIVE });
  };

  onBlurLn = () => {
    this._lastname.setNativeProps({ underlineColorAndroid: COLOR_EVENT_INACTIVE });
  };

  onBlurEm = () => {
    this._email.setNativeProps({ underlineColorAndroid: COLOR_EVENT_INACTIVE });
  };

  onBlurPw = () => {
    this._password.setNativeProps({ underlineColorAndroid: COLOR_EVENT_INACTIVE });
  };

  _onChange = (state, e) => {
    if (
      this.state.firstname.length > 1 &&
      this.state.lastname.length > 1 &&
      regex.regExToCheckEmail.test(this.state.email) &&
      this.state.password.length > 1
    ) {
      this.setState({ off: false, [state]: e });
    } else {
      this.setState({ off: true, [state]: e });
    }
  };

  _signup = async () => {
    const { firstname, lastname, email, password } = this.state;
    const params = { firstname, lastname, email, password };
    try {
      const result = await ENDPOINT.register(params);
      this.setState({ isLoading: true });
      if (result.code === 200) {
        this.props.navigation.navigate('Signin');
      } else {
        ToastAndroid.show(`Failed to register, ${result.message}`, ToastAndroid.LONG);
      }
    } catch (err) {
      ToastAndroid.show(`Network Error: ${err}`, ToastAndroid.LONG);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <MainScreen isLoading={this.state.isLoading}>
        <View style={styles.container}>
          <ImageBackground source={images.bgimageful} style={styles.bgimage}>
            <View style={styles.mrg60}>
              <View style={styles.mrg45}>
                <Text style={styles.txtTitle}>{I18n.t('titleReg')}</Text>
              </View>
              <View>
                <View style={styles.containerInput}>
                  <Text style={styles.txtPlaceholder}>{I18n.t('firstname')}</Text>
                  <TextInput
                    style={styles.txtInput}
                    ref={firstname => (this._firstname = firstname)}
                    onFocus={() => this.onFocusFn()}
                    onBlur={() => this.onBlurFn()}
                    underlineColorAndroid={COLOR_EVENT_INACTIVE}
                    onChangeText={e => this._onChange('firstname', e)}
                  />
                </View>
                <View style={styles.containerInput}>
                  <Text style={styles.txtPlaceholder}>{I18n.t('lastname')}</Text>
                  <TextInput
                    style={styles.txtInput}
                    ref={component => (this._lastname = component)}
                    underlineColorAndroid={COLOR_EVENT_INACTIVE}
                    onFocus={() => this.onFocusLn()}
                    onBlur={() => this.onBlurLn()}
                    onChangeText={e => this._onChange('lastname', e)}
                  />
                </View>
                <View style={styles.containerInput}>
                  <Text style={styles.txtPlaceholder}>{I18n.t('email')}</Text>
                  <TextInput
                    style={styles.txtInput}
                    ref={component => (this._email = component)}
                    underlineColorAndroid={COLOR_EVENT_INACTIVE}
                    onFocus={() => this.onFocusEm()}
                    onBlur={() => this.onBlurEm()}
                    onChangeText={e => this._onChange('email', e)}
                  />
                </View>
                <View style={styles.containerInput}>
                  <Text style={styles.txtPlaceholder}>{I18n.t('password')}</Text>
                  <TextInput
                    style={styles.txtInput}
                    ref={component => (this._password = component)}
                    underlineColorAndroid={COLOR_EVENT_INACTIVE}
                    onFocus={() => this.onFocusPw()}
                    onBlur={() => this.onBlurPw()}
                    secureTextEntry
                    onChangeText={e => this._onChange('password', e)}
                  />
                </View>
              </View>
            </View>
            <View style={styles.btmBtn}>
              <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
                <View style={styles.rowReg}>
                  <View style={styles.viewRight}>
                    <Left />
                  </View>
                  <Text style={styles.txtReg}>{I18n.t('back')}</Text>
                </View>
              </TouchableHighlight>
              {this.state.off ? null : (
                <View style={styles.flex1}>
                  <TouchableHighlight style={styles.viewTxtReg} onPress={this._signup}>
                    <View style={styles.rowRight}>
                      <Text style={styles.txtReg}>{I18n.t('register')}</Text>
                      <View style={styles.viewRight}>
                        <Right />
                      </View>
                    </View>
                  </TouchableHighlight>
                </View>
              )}
            </View>
          </ImageBackground>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
