/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  COLOR_WHITE,
  FONT_BODY2_PRIMARY,
  FONT_SUBTITLE2_PRIMARY,
  FONT_HEADLINE4_PRIMARY
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  bgimage: {
    flex: 1,
    width: scale(375)
  },
  slide: {
    marginHorizontal: scale(30),
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: 'blue'
  },
  conNumber: {
    marginVertical: 20,
    width: scale(335),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#9597a6',
    padding: 20
  },
  conQuest: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtQuest: {
    alignItems: 'center',
    textAlign: 'justify',
    ...FONT_SUBTITLE2_PRIMARY,
    color: COLOR_WHITE
  },
  conOptions: {
    marginTop: 60
  },
  txtTitle: {
    ...FONT_HEADLINE4_PRIMARY,
    marginTop: 60,
    fontWeight: '600',
    color: COLOR_WHITE
  },
  btnOption: {
    borderWidth: 1,
    borderColor: '#686868',
    backgroundColor: '#1C1C1C',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    // marginRight: 15,
    width: scale(305),
    borderRadius: 10
  },
  trueAnswer: {
    borderWidth: 1,
    borderColor: '#11A331',
    backgroundColor: '#07351C',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    // marginRight: 15,
    width: scale(305),
    borderRadius: 10
  },
  falseAnswer: {
    borderWidth: 1,
    borderColor: '#930F12',
    backgroundColor: '#25060B',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    // marginRight: 15,
    width: scale(305),
    borderRadius: 10
  },
  conContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtContent: {
    marginTop: scale(80),
    paddingRight: scale(10),
    marginHorizontal: scale(20),
    ...FONT_BODY2_PRIMARY,
    color: COLOR_WHITE
  }
});

export default styles;
