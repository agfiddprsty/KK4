import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import { COLOR_BLACK } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: COLOR_BLACK
  },
  bgimage: {
    flex: 1,
    width: scale(375)
  }
});

export default styles;
