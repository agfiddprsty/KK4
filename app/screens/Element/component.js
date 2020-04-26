import React from 'react';
import {
  View,
  TouchableHighlight,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import {IMAGES} from '../../configs';
import styles from './styles';
import I18n from '../../i18n';
import {scale} from '../../utils/scaling';
import Left from '../../../assets/svgs/Left';

const DATA = [
  {
    title: I18n.t('titleKekuatan'),
    content: I18n.t('isiKekuatan'),
    image: 'https://i.ibb.co/BfFHtP7/kekuatan.png',
    youtube: 'amaKamAUjAY',
  },
  {
    title: I18n.t('titleDayaTahan'),
    content: I18n.t('isiDayaTahan'),
    image: 'https://i.ibb.co/fnXfwYz/jogging.png',
    youtube: null,
  },
  {
    title: I18n.t('titleDayaOtot'),
    content: I18n.t('isiDayaOtot'),
    image: 'https://i.ibb.co/FbzXZ8C/dayaotot.png',
    youtube: null,
  },
  {
    title: I18n.t('titleKecepatan'),
    content: I18n.t('isiKecepatan'),
    image: 'https://i.ibb.co/413QP2Y/kecepatan.png',
    youtube: 'FkunrtHPM1c',
  },
  {
    title: I18n.t('titleDayaLentur'),
    content: I18n.t('isiDayaLentur'),
    image: 'https://i.ibb.co/C2nxH5m/dayalentur.png',
    youtube: 'LovkktmBFqk',
  },
  {
    title: I18n.t('titleKelincahan'),
    content: I18n.t('isiKelincahan'),
    image: 'https://i.ibb.co/bHS04YV/kelincahan.png',
    youtube: null,
  },
  {
    title: I18n.t('titleKoordinasi'),
    content: I18n.t('isiKoordinasi'),
    image: 'https://i.ibb.co/vj110Xt/koordinasi.png',
    youtube: 'mP6iDBg4LwY',
  },
  {
    title: I18n.t('titleKeseimbangan'),
    content: I18n.t('isiKeseimbangan'),
    image: 'https://i.ibb.co/FXFMpHh/keseimbangan.png',
    youtube: '3AG0k3FPQZM',
  },
  {
    title: I18n.t('titleKetetapan'),
    content: I18n.t('isiKetetapan'),
    image: 'https://i.ibb.co/KwJz7Xp/ketetapan.png',
    youtube: null,
  },
  {
    title: I18n.t('titleReaksi'),
    content: I18n.t('isiReaksi'),
    image: 'https://i.ibb.co/DVb7D4L/reaksi.png',
    youtube: null,
  },
];

export default class Component extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       page: []
  //     };
  //   }

  _toDetail = (title, content, image, youtube) => {
    this.props.navigation.navigate('Detail', {
      title,
      content,
      image,
      youtube,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={IMAGES.bgimageful} style={styles.bgimage}>
          <ScrollView>
            <View style={styles.conContent}>
              <Text style={styles.txtTitle}>{I18n.t('titleUnsur')}</Text>
              <View style={styles.mrtop}>
                <FlatList
                  data={DATA}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={styles.conCard}
                      onPress={() =>
                        this._toDetail(
                          item.title,
                          item.content,
                          item.image,
                          item.youtube,
                        )
                      }>
                      <Image
                        source={IMAGES.rectanglePink}
                        style={{width: scale(60), height: scale(60)}}
                      />
                      <Text style={styles.txtContent}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.title}
                />
              </View>
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
