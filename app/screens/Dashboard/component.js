/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';
import styles from './styles';
import images from '../../configs/images';
import {ENDPOINT} from '../../configs';
import errors from '../../utils/errors';
import Definition from '../../../assets/svgs/Definition';
import Concept from '../../../assets/svgs/Concept';
import Benefits from '../../../assets/svgs/Benefits';
import Elements from '../../../assets/svgs/element';
import storage from '../../utils/storage';
import {STORAGE_KEY} from '../../constants';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      firstname: '',
      lastname: '',
      email: '',
      isLoading: false,
    };
  }

  componentWillMount() {
    this._loadData();
    StatusBar.setHidden(false);
  }

  onPress = () => {
    this.props.navigation.navigate('Exam');
  };

  _loadData = async () => {
    try {
      await this.setState({isLoading: true});
      const result = await ENDPOINT.getUserById();
      console.log(result);
      console.log(result.code);
      this.setState({
        name: `${result.data.firstname} ${result.data.lastname}`,
        firstname: result.data.firstname,
        lastname: result.data.lastname,
        email: result.data.email,
      });
      if (result.code === 401) {
        await storage.set(STORAGE_KEY.TOKEN_LOGIN, 'TOKEN_EXPIRED');
        this.props.navigation.navigate('Signin');
      } else if (result.code === 403) {
        await storage.set(STORAGE_KEY.TOKEN_LOGIN, 'TOKEN_EXPIRED');
        this.props.navigation.navigate('Signin');
      }
    } catch (err) {
      errors.createError(I18n.t('error.timeOutConnection'));
    } finally {
      this.setState({isLoading: false});
    }
  };

  render() {
    return (
      <MainScreen isLoading={this.state.isLoading}>
        <View style={styles.container}>
          <ImageBackground source={images.bgimageful} style={styles.bgimage}>
            <ScrollView>
              <View style={styles.scView}>
                <View style={{flexDirection: 'row', marginHorizontal: 30}}>
                  <View style={styles.center}>
                    {this.state.name === '' ? (
                      <Text style={styles.txtName}>Hi, Guest</Text>
                    ) : (
                      <Text style={styles.txtName}>Hi, {this.state.name}</Text>
                    )}
                    <Text style={styles.txtPlaceholder}>
                      What do you wan’t know?
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{flex: 1, justifyContent: 'center'}}
                    onPress={() => {
                      const firstname = this.state.firstname;
                      const lastname = this.state.lastname;
                      const email = this.state.email;
                      this.props.navigation.navigate('Account', {
                        firstname,
                        lastname,
                        email,
                      });
                    }}>
                    <Image
                      style={{width: 50, height: 50}}
                      source={images.profile}
                    />
                  </TouchableOpacity>
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
                <View style={styles.viewCard}>
                  <TouchableOpacity
                    style={styles.conCard}
                    onPress={() =>
                      this.props.navigation.navigate('Definition')
                    }>
                    <Definition />
                    <Text style={styles.txtCard}>Definition</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.conCard}
                    onPress={() => this.props.navigation.navigate('Concept')}>
                    <Concept />
                    <Text style={styles.txtCard}>Concept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.conCard}
                    onPress={() => this.props.navigation.navigate('Benefits')}>
                    <Benefits />
                    <Text style={styles.txtCard}>Benefits</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.conCard}
                    onPress={() => this.props.navigation.navigate('Element')}>
                    <Elements />
                    <Text style={styles.txtCard}>Element</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
