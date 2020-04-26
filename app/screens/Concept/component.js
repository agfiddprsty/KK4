import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import {IMAGES} from '../../configs';
import styles from './styles';
import I18n from '../../i18n';
import Left from '../../../assets/svgs/Left';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={IMAGES.bgimageful} style={styles.bgimage}>
          <ScrollView>
            <View style={styles.conContent}>
              <Text style={styles.txtTitle}>{I18n.t('titleKonsep')}</Text>
              <Text style={styles.txtContent}>{I18n.t('isiKonsep')}</Text>
            </View>
          </ScrollView>
          <View style={styles.btmBtn}>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
              <View style={styles.rowReg}>
                <View style={styles.viewRight}>
                  <Left />
                </View>
                <Text style={styles.txtReg}>{I18n.t('back')}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
