import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  COLOR_BLACK,
  FONT_HEADLINE4_PRIMARY,
  COLOR_WHITE,
  FONT_SUBTITLE2_PRIMARY,
  COLOR_WHITE_OPACITY40,
  COLOR_BASE_SECONDARY_MAIN
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
    alignItems: 'center'
  },
  center: {
    marginBottom: scale(20)
  },
  txtName: {
    ...FONT_HEADLINE4_PRIMARY,
    color: COLOR_WHITE,
    fontWeight: '600',
    marginBottom: scale(5)
  },
  txtPlaceholder: {
    color: COLOR_WHITE_OPACITY40,
    ...FONT_SUBTITLE2_PRIMARY
  },
  conBtnQuiz: {
    width: scale(120),
    borderRadius: 10,
    backgroundColor: COLOR_BASE_SECONDARY_MAIN
  },
  txtBtnQuiz: {
    ...FONT_SUBTITLE2_PRIMARY,
    fontWeight: '600',
    color: COLOR_WHITE
  }
});

export default styles;
