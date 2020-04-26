import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scaling';
import {
  COLOR_BLACK,
  FONT_HEADLINE4_PRIMARY,
  COLOR_WHITE,
  FONT_BODY2_PRIMARY,
  FONT_BODY1_PRIMARY,
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: COLOR_BLACK,
  },
  bgimage: {
    flex: 1,
    width: scale(375),
  },
  txtTitle: {
    ...FONT_HEADLINE4_PRIMARY,
    marginTop: scale(120),
    fontWeight: '600',
    color: COLOR_WHITE,
  },
  conContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContent: {
    marginTop: scale(40),
    paddingRight: scale(10),
    marginHorizontal: scale(20),
    ...FONT_BODY2_PRIMARY,
    color: COLOR_WHITE,
  },
  btmBtn: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'flex-end',
    backgroundColor: COLOR_BLACK,
    position: 'absolute',
    marginHorizontal: scale(20),
    width: '100%',
    bottom: 0,
  },
  viewTxtReg: {
    flex: 1,
    // alignContent: 'space-between',
    justifyContent: 'flex-end',
    // flexDirection: 'row',
    // paddingVertical: scale(15),
    // marginRight: scale(45)
    // width: '85%'
  },
  flex1: {
    flex: 1,
    marginRight: scale(30),
    // justifyContent: 'flex-end'
  },
  rowRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // justifyContent: 'center',
    // alignContent: 'space-between'
  },
  rowReg: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-end'
    // justifyContent: 'center',
    // alignContent: 'space-between'
  },
  viewRight: {
    // marginTop: scale(10),
    justifyContent: 'center',
    alignContent: 'center',
  },
  txtReg: {
    color: COLOR_WHITE,
    paddingHorizontal: scale(7),
    justifyContent: 'flex-end',
    ...FONT_BODY1_PRIMARY,
    fontWeight: 'bold',
  },
});

export default styles;
