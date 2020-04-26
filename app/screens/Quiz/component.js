/* eslint-disable consistent-this */
import React from 'react';
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import {IMAGES, ENDPOINT} from '../../configs';
import MainScreen from '../../components/layouts/MainScreen';
import storage from '../../utils/storage';
import {STORAGE_KEY} from '../../constants';
import styles from './styles';
import {COLOR_WHITE} from '../../styles';

let quiz;
let ujian;

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;

    this.state = {
      ujian: '',
      question: '',
      options: [],
      jawaban: [],
      isLoading: false,
      // nilai: ''
    };
  }

  componentDidMount() {
    this._data();
    this._loadQuiz();
    StatusBar.setHidden(false);
  }

  _checkAnswer = async () => {
    const {jawaban} = this.state;
    const params = {jawaban};
    if (ujian) {
      try {
        const res = await ENDPOINT.answerUjian(params);
        if (res.code === 200) {
          // await this.setState({ nilai: res.data.nilai });
          const trueAnswer = res.data.trueAnswer;
          const falseAnswer = res.data.falseAnswer;
          const nilai = res.data.nilai;
          const selected = this.state.jawaban;
          this.props.navigation.navigate('Score', {
            trueAnswer,
            falseAnswer,
            nilai,
            selected,
            quiz,
          });
        } else {
          ToastAndroid.show(res.message, ToastAndroid.SHORT);
        }
      } catch (err) {
        ToastAndroid.show(err);
      } finally {
        console.log(params);
      }
    } else {
      try {
        const res = await ENDPOINT.answerQuiz(params);
        if (res.code === 200) {
          // await this.setState({ nilai: res.data.nilai });
          const trueAnswer = res.data.trueAnswer;
          const falseAnswer = res.data.falseAnswer;
          const nilai = res.data.nilai;
          const selected = this.state.jawaban;
          this.props.navigation.navigate('Score', {
            trueAnswer,
            falseAnswer,
            nilai,
            selected,
            quiz,
          });
        } else {
          ToastAndroid.show(res.message, ToastAndroid.SHORT);
        }
      } catch (err) {
        ToastAndroid.show(err);
      } finally {
        console.log(params);
      }
    }
  };

  _data = async () => {
    try {
      const {navigation} = this.props;
      ujian = await navigation.getParam('ujian', 'false');
      this.setState({ujian});
    } catch (error) {
      Alert.alert(error);
    }
  };
  _loadQuiz = async () => {
    try {
      const {navigation} = this.props;
      const exam = await navigation.getParam('ujian', false);
      if (exam) {
        try {
          await this.setState({isLoading: true});
          const result = await ENDPOINT.ujian();
          // console.log(result);
          //   this.setState({ quiz: result.data });
          quiz = result.data;
          this.setState({question: quiz[this.qno].soal});
          this.setState({options: quiz[this.qno].pilihan});
          console.log('ini ujian');
          console.log(this.state.ujian);
          if (result.code === 401) {
            await storage.set(STORAGE_KEY.TOKEN_LOGIN, 'TOKEN_EXPIRED');
            this.props.navigation.navigate('Signin');
          }
        } catch (err) {
          console.log(err);
        } finally {
          this.setState({isLoading: false});
        }
      } else {
        try {
          await this.setState({isLoading: true});
          const result = await ENDPOINT.quiz();
          // console.log(result);
          //   this.setState({ quiz: result.data });
          quiz = result.data;
          this.setState({question: quiz[this.qno].soal});
          this.setState({options: quiz[this.qno].pilihan});
          console.log('ini quiz');
          console.log(this.state.ujian);
          if (result.code === 401) {
            await storage.set(STORAGE_KEY.TOKEN_LOGIN, 'TOKEN_EXPIRED');
            this.props.navigation.navigate('Signin');
          }
        } catch (err) {
          console.log(err);
        } finally {
          this.setState({isLoading: false});
        }
      }
    } catch (err) {
      Alert.alert(err);
    }
  };

  next = ans => {
    this.state.jawaban.push(ans);
    if (this.qno < quiz.length - 1) {
      this.qno++;

      this.setState({
        question: quiz[this.qno].soal,
        options: quiz[this.qno].pilihan,
      });
    } else {
      this._checkAnswer();
      // this.props.quizFinish((this.score * 100) / 5);
    }
  };

  render() {
    const _this = this;
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(k => (
      <TouchableOpacity
        key={k}
        style={styles.btnOption}
        onPress={() => {
          _this.next(k);
          console.log(k);
          console.log(this.state.jawaban);
        }}>
        <Text style={{color: COLOR_WHITE}}>{currentOptions[k]}</Text>
      </TouchableOpacity>
    ));

    return (
      <MainScreen isLoading={this.state.isLoading}>
        <View key={quiz} style={styles.container}>
          <ImageBackground source={IMAGES.bgimageful} style={styles.bgimage}>
            <View style={styles.slide}>
              <View style={styles.conTitle}>
                <Text style={styles.txtTitle}>Quiz</Text>
              </View>
              <View style={styles.conQuest}>
                <Text style={styles.txtQuest}>{this.state.question}</Text>
              </View>
              <View style={styles.conOptions}>{options}</View>
            </View>
          </ImageBackground>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
