import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title1: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },
  title2: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    fontWeight: '600',
  },
  title3: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
});
export default style;
