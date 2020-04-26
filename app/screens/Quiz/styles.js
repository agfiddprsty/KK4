import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scaling';
import {
  COLOR_BLACK,
  COLOR_WHITE,
  FONT_BODY2_PRIMARY,
  FONT_SUBTITLE2_PRIMARY,
  FONT_HEADLINE4_PRIMARY,
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
  slide: {
    marginHorizontal: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  conQuest: {
    marginTop: 60,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtQuest: {
    alignItems: 'center',
    textAlign: 'justify',
    ...FONT_SUBTITLE2_PRIMARY,
    color: COLOR_WHITE,
  },
  conOptions: {
    marginTop: 60,
  },
  txtTitle: {
    ...FONT_HEADLINE4_PRIMARY,
    marginTop: 60,
    fontWeight: '600',
    color: COLOR_WHITE,
  },
  btnOption: {
    borderWidth: 1,
    borderColor: '#686868',
    backgroundColor: '#1C1C1C',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 30,
    width: scale(305),
    borderRadius: 10,
  },
  conContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContent: {
    marginTop: scale(80),
    paddingRight: scale(10),
    marginHorizontal: scale(20),
    ...FONT_BODY2_PRIMARY,
    color: COLOR_WHITE,
  },
});

export default styles;
