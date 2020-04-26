/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  COLOR_BLACK,
  FONT_HEADLINE4_PRIMARY,
  COLOR_WHITE,
  FONT_BODY2_PRIMARY,
  COLOR_CON_CARD,
  COLOR_TITLE_CARD,
  FONT_CAPTION_PRIMARY,
  FONT_BUTTON_PRIMARY
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: COLOR_BLACK
  },
  bgimage: {
    flex: 1,
    width: scale(375)
  },
  txtTitle: {
    ...FONT_HEADLINE4_PRIMARY,
    marginTop: scale(120),
    fontWeight: '600',
    color: COLOR_WHITE
  },
  conContent: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  txtContent: {
    marginTop: scale(80),
    paddingRight: scale(10),
    marginHorizontal: scale(20),
    ...FONT_BODY2_PRIMARY,
    color: COLOR_WHITE
  },
  conCard: {
    width: scale(315),
    // height: scale(405),
    backgroundColor: COLOR_CON_CARD,
    // borderRadius: 10,
    padding: 40,
    marginHorizontal: 20,
    marginTop: 30
    // marginVertical: 7
  },
  btnAbout: {
    marginTop: 30,
    backgroundColor: COLOR_CON_CARD,
    width: scale(200),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  conBtnAboutUs: {
    marginHorizontal: scale(80)
  },
  txtButton: {
    ...FONT_BUTTON_PRIMARY,
    color: COLOR_WHITE,
    paddingVertical: 10
  },
  conName: {
    marginTop: 30
  },
  txtCard: {
    ...FONT_BUTTON_PRIMARY,
    color: COLOR_TITLE_CARD,
    marginTop: scale(15),
    borderBottomWidth: 0.3,
    borderBottomColor: 'white'
  },
  txtPlaceholder: {
    ...FONT_CAPTION_PRIMARY,
    color: '#727272',
    fontWeight: '500'
  }
});

export default styles;
