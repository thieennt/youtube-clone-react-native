import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'white',
    flex: 1,
  },
  textBlack: {
    color: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  cloumnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
