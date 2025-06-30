import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  padding: {
    paddingVertical: verticalScale(24),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(24),
  },
});

export default globalStyle;
