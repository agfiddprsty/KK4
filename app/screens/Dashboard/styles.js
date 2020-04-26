import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scaling';
import {
  COLOR_BLACK,
  FONT_HEADLINE4_PRIMARY,
  COLOR_WHITE,
  FONT_SUBTITLE2_PRIMARY,
  COLOR_WHITE_OPACITY40,
  COLOR_BASE_SECONDARY_MAIN,
  FONT_BODY2_PRIMARY,
  COLOR_TITLE_CARD,
  COLOR_CON_CARD,
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
  scView: {
    flex: 1,
    marginTop: scale(120),
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(20),
  },
  txtName: {
    ...FONT_HEADLINE4_PRIMARY,
    color: COLOR_WHITE,
    fontWeight: '600',
    marginBottom: scale(5),
  },
  txtPlaceholder: {
    color: COLOR_WHITE_OPACITY40,
    ...FONT_SUBTITLE2_PRIMARY,
  },
  conBtnQuiz: {
    width: scale(120),
    borderRadius: 10,
    backgroundColor: COLOR_BASE_SECONDARY_MAIN,
  },
  txtBtnQuiz: {
    ...FONT_SUBTITLE2_PRIMARY,
    fontWeight: '600',
    color: COLOR_WHITE,
  },
  viewCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: scale(60),
    marginHorizontal: scale(15),
  },
  conCard: {
    width: scale(150),
    height: scale(220),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_CON_CARD,
    borderRadius: 10,
    marginHorizontal: 7,
    marginVertical: 7,
  },
  txtCard: {
    ...FONT_BODY2_PRIMARY,
    color: COLOR_TITLE_CARD,
    marginTop: scale(15),
  },
});

export default styles;
