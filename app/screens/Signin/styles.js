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
    fontWeight: '600'
  },
  txtInput: {
    color: COLOR_WHITE
  },
  txtPlaceholder: {
    color: COLOR_WHITE_OPACITY40,
    ...FONT_CAPTION_PRIMARY
  },
  viewTxtReg: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: scale(15),
    marginRight: scale(45),
    width: '85%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0
  },
  rowReg: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  txtReg: {
    color: COLOR_WHITE,
    paddingHorizontal: scale(7),
    justifyContent: 'flex-end',
    ...FONT_BODY1_PRIMARY,
    fontWeight: 'bold'
  },
  viewRight: {
    // marginTop: scale(10),
    justifyContent: 'center',
    alignContent: 'center'
  },
  donthaveacc: {
    marginTop: scale(30)
  }
});

export default styles;
