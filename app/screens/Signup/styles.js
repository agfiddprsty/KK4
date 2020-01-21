import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  COLOR_BLACK,
  COLOR_WHITE,
  FONT_CAPTION_PRIMARY,
  FONT_HEADLINE5_PRIMARY,
  FONT_BODY1_PRIMARY,
  COLOR_WHITE_OPACITY40
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: COLOR_BLACK
  },
  bgimage: {
    flex: 1,
    width: scale(375),
    justifyContent: 'center',
    alignContent: 'center'
  },
  mrg60: {
    marginHorizontal: scale(60)
  },
  mrg45: {
    marginBottom: scale(45)
  },
  txtTitle: {
    color: COLOR_WHITE,
    ...FONT_HEADLINE5_PRIMARY,
    fontWeight: '600',
    marginRight: scale(50)
  },
  txtInput: {
    color: COLOR_WHITE
  },
  txtPlaceholder: {
    color: COLOR_WHITE_OPACITY40,
    ...FONT_CAPTION_PRIMARY
  },
  btmBtn: {
    flex: 2,
    flexDirection: 'row',
    // alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    position: 'absolute',
    marginHorizontal: scale(20),
    bottom: 0
  },
  viewTxtReg: {
    flex: 1,
    // alignContent: 'space-between',
    justifyContent: 'flex-end'
    // flexDirection: 'row',
    // paddingVertical: scale(15),
    // marginRight: scale(45)
    // width: '85%'
  },
  flex1: {
    flex: 1,
    marginRight: scale(30)
    // justifyContent: 'flex-end'
  },
  rowRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
    // justifyContent: 'center',
    // alignContent: 'space-between'
  },
  rowReg: {
    flex: 1,
    flexDirection: 'row'
    // justifyContent: 'flex-end'
    // justifyContent: 'center',
    // alignContent: 'space-between'
  },
  viewRight: {
    // marginTop: scale(10),
    justifyContent: 'center',
    alignContent: 'center'
  },
  txtReg: {
    color: COLOR_WHITE,
    paddingHorizontal: scale(7),
    justifyContent: 'flex-end',
    ...FONT_BODY1_PRIMARY,
    fontWeight: 'bold'
  }
});

export default styles;
