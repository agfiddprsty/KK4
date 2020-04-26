/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  Alert,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import YouTube from 'react-native-youtube';
import {IMAGES} from '../../configs';
import styles from './styles';
import {scale} from '../../utils/scaling';
import Left from '../../../assets/svgs/Left';
import I18n from '../../i18n';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      images: 'p',
      youtube: '',
      isReady: false,
      status: '',
      quality: '',
      error: '',
    };
  }

  componentWillMount() {
    this._data();
  }

  _data = async () => {
    try {
      const {navigation} = this.props;
      const title = await navigation.getParam('title', 'default');
      const content = await navigation.getParam('content', 'default');
      const images = await navigation.getParam('image', 'default');
      const youtube = await navigation.getParam('youtube', null);
      this.setState({title, content, images, youtube});
    } catch (error) {
      Alert.alert(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={IMAGES.bgimageful} style={styles.bgimage}>
          <ScrollView>
            <View style={styles.conContent}>
              <Text style={styles.txtTitle}>{this.state.title}</Text>
              <Image
                source={{uri: this.state.images}}
                style={{
                  marginTop: scale(40),
                  width: scale(320),
                  height: scale(150),
                  marginRight: scale(20),
                }}
              />
              <Text style={styles.txtContent}>{this.state.content}</Text>
              {this.state.youtube ? (
                <YouTube
                  apiKey="AIzaSyAFF573cVHBhew35GfyBUF25T0PAtgCoOY"
                  videoId={this.state.youtube}
                  onReady={e => this.setState({isReady: true})}
                  onChangeState={e => this.setState({status: e.state})}
                  onChangeQuality={e => this.setState({quality: e.quality})}
                  onError={e => this.setState({error: e.error})}
                  controls={2}
                  style={{
                    alignSelf: 'stretch',
                    height: 300,
                    margin: scale(20),
                    paddingRight: scale(20),
                  }}
                />
              ) : null}
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
