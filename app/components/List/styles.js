import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const PADDING_LEFT = 20;

const styles = EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: PADDING_LEFT,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$white',
  },
  text: {
    fontSize: 16,
    color: '$darkText',
  },
  separator: {
    marginLeft: PADDING_LEFT,
    backgroundColor: '$border',
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  icon: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: {
    backgroundColor: '$primaryBlue',
  },
  checkIcon: {
    width: 18,
  },
});

export default styles;
