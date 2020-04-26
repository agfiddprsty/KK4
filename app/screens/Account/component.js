import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {IMAGES} from '../../configs';
import styles from './styles';
import storage from '../../utils/storage';
import {STORAGE_KEY} from '../../constants';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
    };
  }

  componentDidMount() {
    this._data();
  }

  _data = async () => {
    try {
      const {navigation} = this.props;
      const firstname = await navigation.getParam('firstname', 'default');
      const lastname = await navigation.getParam('lastname', 'default');
      const email = await navigation.getParam('email', 'default');
      this.setState({firstname, lastname, email});
    } catch (error) {
      Alert.alert(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={IMAGES.bgimageful} style={styles.bgimage}>
          <ScrollView>
            {/* <View style={styles.conContent}> */}
            <View style={styles.conContent}>
              <Text style={styles.txtTitle}>{this.state.firstname}</Text>
            </View>
            <View style={styles.conCard}>
              <View style={styles.conName}>
                <Text style={styles.txtPlaceholder}>First Name</Text>
                <Text style={styles.txtCard}>{this.state.firstname}</Text>
              </View>
              <View style={styles.conName}>
                <Text style={styles.txtPlaceholder}>Last Name</Text>
                <Text style={styles.txtCard}>{this.state.lastname}</Text>
              </View>
              <View style={styles.conName}>
                <Text style={styles.txtPlaceholder}>Email</Text>
                <Text style={styles.txtCard}>{this.state.email}</Text>
              </View>
            </View>
            <View style={styles.conBtnAboutUs}>
              <TouchableOpacity
                style={styles.btnAbout}
                onPress={() => this.props.navigation.navigate('About')}>
                <Text style={styles.txtButton}>About Us</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.conBtnAboutUs}>
              <TouchableOpacity
                style={styles.btnAbout}
                onPress={async () => {
                  await storage.set(STORAGE_KEY.TOKEN_LOGIN, 'LOGOUT');
                  this.props.navigation.navigate('Signin');
                }}>
                <Text style={styles.txtButton}>LOGOUT</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
