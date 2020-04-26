/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ImageBackground, Text, ScrollView, Image} from 'react-native';
import PropTypes from 'prop-types';
import {IMAGES} from '../../configs';
import styles from './styles';

const DATA = [
  {
    name: 'Agfid Danu Prasetyo',
    role: 'Mobile Developer',
    email: 'agfid11@gmail.com',
  },
  {
    name: 'Ahmad Fauzi Budiyanto',
    role: 'Designer',
    email: 'ahmadfauzi282002@gmail.com',
  },
  {
    name: 'Anita Rachman',
    role: 'Backend Developer',
    email: 'rachmananita12@gmail.com',
  },
  {
    name: 'Anggiat Manuel',
    role: 'Designer',
    email: 'anggiat.manuel@gmail.com',
  },
  {
    name: 'Auliana Rizky Puspita Dewi',
    role: 'Content Writer',
    email: 'arisky540@gmail.com',
  },
  {
    name: 'Anggoro Sughiono',
    role: 'Content Writer',
    email: 'sugihonoanggoro@gmail.com',
  },
];

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={IMAGES.bgimageful} style={styles.bgimage}>
          <ScrollView>
            <View>
              <View style={styles.conContent}>
                <Text style={styles.txtTitle}>About Us</Text>
              </View>
              <View style={styles.viewName}>
                {DATA.map(data => (
                  <View key={data.name} style={styles.conCard}>
                    <View style={styles.viewImg}>
                      <Image
                        source={IMAGES.profile}
                        style={{width: 60, height: 60}}
                      />
                    </View>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                      <Text style={styles.txtContent}>{data.name}</Text>
                      <Text style={styles.txtSub}>{data.role}</Text>
                      <Text style={styles.txtSub}>{data.email}</Text>
                    </View>
                  </View>
                ))}
              </View>
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
