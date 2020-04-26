import React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import I18n from '../../i18n';
import styles from './styles';
import regex from '../../constants/regex';
import {COLOR_BASE_SECONDARY_MAIN, COLOR_EVENT_INACTIVE} from '../../styles';
import images from '../../configs/images';
import Right from '../../../assets/svgs/Right';
import {ENDPOINT} from '../../configs';
import {STORAGE_KEY} from '../../constants';
import storage from '../../utils/storage';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      off: true,
      isLoading: false,
    };
    this._onChange = this._onChange.bind(this);
    // this.state.off = this.state.off.bind(this);
  }

  onFocusEm = () => {
    this._email.setNativeProps({
      underlineColorAndroid: COLOR_BASE_SECONDARY_MAIN,
    });
  };

  onFocusPw = () => {
    this._password.setNativeProps({
      underlineColorAndroid: COLOR_BASE_SECONDARY_MAIN,
    });
  };

  onBlurEm = () => {
    this._email.setNativeProps({underlineColorAndroid: COLOR_EVENT_INACTIVE});
  };

  onBlurPw = () => {
    this._password.setNativeProps({
      underlineColorAndroid: COLOR_EVENT_INACTIVE,
    });
  };

  _toLogin = () => {
    this.props.navigation.navigate('Signup');
  };

  _onChange = (state, e) => {
    if (
      regex.regExToCheckEmail.test(this.state.email) &&
      this.state.password.length > 1
    ) {
      this.setState({off: false, [state]: e});
    } else {
      this.setState({off: true, [state]: e});
    }
  };

  _signin = async () => {
    const {email, password} = this.state;
    const params = {email, password};
    try {
      const result = await ENDPOINT.login(params);
      this.setState({isLoading: true});
      if (result.code === 200) {
        await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data);
        this.props.navigation.navigate('Sessionscreen');
      } else {
        ToastAndroid.show(
          `Failed to login, ${result.message}`,
          ToastAndroid.LONG,
        );
      }
    } catch (err) {
      ToastAndroid.show(`Network Error: ${err}`, ToastAndroid.LONG);
    } finally {
      this.setState({isLoading: false});
    }
  };

  render() {
    return (
      <MainScreen isLoading={this.state.isLoading}>
        <View style={styles.container}>
          <ImageBackground source={images.bgimageful} style={styles.bgimage}>
            <View style={styles.mrg60}>
              <View style={styles.mrg45}>
                <Text style={styles.txtTitle}>{I18n.t('titleLog')}</Text>
              </View>
              <View>
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
                  <Text style={styles.txtPlaceholder}>
                    {I18n.t('password')}
                  </Text>
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
              <TouchableHighlight
                style={styles.donthaveacc}
                onPress={this._toLogin}>
                <Text style={styles.txtPlaceholder}>
                  {I18n.t('donthaveacc')}
                </Text>
              </TouchableHighlight>
            </View>
            {this.state.off ? null : (
              <TouchableHighlight
                style={styles.viewTxtReg}
                onPress={this._signin}>
                <View style={styles.rowReg}>
                  <Text style={styles.txtReg}>{I18n.t('login')}</Text>
                  <View style={styles.viewRight}>
                    <Right />
                  </View>
                </View>
              </TouchableHighlight>
            )}
          </ImageBackground>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
