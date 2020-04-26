import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scaling';
import {
  COLOR_BLACK,
  FONT_HEADLINE4_PRIMARY,
  COLOR_WHITE,
  FONT_BODY2_PRIMARY,
  COLOR_CON_CARD,
  FONT_CAPTION_PRIMARY,
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
  conCard: {
    flexDirection: 'row',
    width: scale(300),
    height: scale(80),
    justifyContent: 'center',
    backgroundColor: COLOR_CON_CARD,
    borderRadius: 10,
    marginHorizontal: 7,
    marginVertical: 7,
  },
  viewName: {
    marginTop: 40,
    marginHorizontal: scale(20),
  },
  viewImg: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  txtContent: {
    // marginTop: scale(80),
    // paddingRight: scale(10),
    // marginHorizontal: scale(20),
    ...FONT_BODY2_PRIMARY,
    color: COLOR_WHITE,
  },
  txtSub: {
    ...FONT_CAPTION_PRIMARY,
    color: '#727272',
  },
});

export default styles;
