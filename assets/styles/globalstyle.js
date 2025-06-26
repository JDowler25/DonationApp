import { StyleSheet } from 'react-native';
import { horizontalScale } from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  padding: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(24),
  },
});

export default globalStyle;
