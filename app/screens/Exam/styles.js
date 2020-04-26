import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  FONT_HEADLINE4_PRIMARY,
  COLOR_WHITE,
  FONT_BODY2_PRIMARY,
  COLOR_CON_CARD,
  COLOR_TITLE_CARD
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
  txtTitle: {
    ...FONT_HEADLINE4_PRIMARY,
    marginTop: scale(120),
    fontWeight: '600',
    color: COLOR_WHITE
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
  },
  viewCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: scale(60),
    marginHorizontal: scale(15)
  },
  conCard: {
    width: scale(150),
    height: scale(220),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_CON_CARD,
    borderRadius: 10,
    marginHorizontal: 7,
    marginVertical: 7
  },
  txtCard: {
    ...FONT_BODY2_PRIMARY,
    color: COLOR_TITLE_CARD,
    marginTop: scale(15)
  }
});

export default styles;
