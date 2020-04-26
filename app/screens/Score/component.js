/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import {IMAGES} from '../../configs';
import styles from './styles';
import {COLOR_WHITE} from '../../styles';
import Back from '../../../assets/svgs/Back';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trueAnswer: '',
      falseAnswer: '',
      nilai: '',
      selected: [],
      quiz: [],
    };
  }

  componentDidMount() {
    this._data();
  }

  _onPress = () => {
    this.props.navigation.navigate('App');
  };

  _data = async () => {
    try {
      const {navigation} = this.props;
      const trueAnswer = await navigation.getParam('trueAnswer', 'default');
      const falseAnswer = await navigation.getParam('falseAnswer', 'default');
      const nilai = await navigation.getParam('nilai', 'default');
      const selected = await navigation.getParam('selected', null);
      const quiz = await navigation.getParam('quiz', null);
      this.setState({trueAnswer, falseAnswer, nilai, selected, quiz});
      console.log(this.state.selected);
      console.log(this.state.trueAnswer);
    } catch (error) {
      Alert.alert(error);
    }
  };

  render() {
    return (
      <MainScreen isLoading={this.state.isLoading}>
        <View style={styles.container}>
          <ImageBackground source={IMAGES.bgimageful} style={styles.bgimage}>
            <ScrollView>
              <TouchableOpacity
                style={{marginLeft: 40, marginTop: 20}}
                onPress={() => this.props.navigation.navigate('Dashboard')}>
                <Back />
              </TouchableOpacity>
              <View style={styles.slide}>
                <View style={styles.conTitle}>
                  <Text style={styles.txtTitle}>Score Quiz</Text>
                </View>
                <View style={styles.conContent}>
                  <View>
                    <Text style={styles.txtQuest}>
                      Your Score <Text>{this.state.nilai}</Text>
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.txtQuest}>
                      Correct Answer <Text>{this.state.trueAnswer}</Text>
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.txtQuest}>
                      Wrong Answer <Text>{this.state.falseAnswer}</Text>
                    </Text>
                  </View>
                </View>
                {this.state.quiz.map(quiz => (
                  <View key={quiz} style={styles.conNumber}>
                    <View style={styles.conQuest}>
                      <Text style={styles.txtQuest}>{quiz.soal}</Text>
                    </View>
                    {quiz.pilihan.map(pilihan => (
                      <View key={pilihan}>
                        {quiz.pilihan.indexOf(pilihan) == quiz.jawaban ? (
                          <TouchableOpacity disabled style={styles.trueAnswer}>
                            <Text style={{color: COLOR_WHITE}}>{pilihan}</Text>
                          </TouchableOpacity>
                        ) : quiz.pilihan.indexOf(pilihan) ==
                          this.state.selected[quiz.Id - 1] ? (
                          <TouchableOpacity disabled style={styles.falseAnswer}>
                            <Text style={{color: COLOR_WHITE}}>{pilihan}</Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity disabled style={styles.btnOption}>
                            <Text style={{color: COLOR_WHITE}}>{pilihan}</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    ))}
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.txtQuest}>{quiz.pembahasan}</Text>
                    </View>
                  </View>
                ))}
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
