import { showMessage } from 'react-native-flash-message';
import Colors from './Colors';
import { isArray } from 'lodash';

const FlashMessage = (type, messages) => {
  let msg = isArray(messages) ? messages[0] : messages;

  if (type == 'success') {
    showMessage({
      message: msg,
      type: 'success',
      backgroundColor: Colors.flashcolor1,
      duration: 2000
    });
  } else if (type == 'warning') {
    showMessage({
      message: msg,
      type: 'warning',
      backgroundColor: Colors.flashcolor2,
      duration: 2000
    });
  } else if (type == 'danger') {
    showMessage({
      message: msg,
      type: 'danger',
      backgroundColor: Colors.flashcolor3,
      duration: 2000
    });
  } else {
    showMessage({
      message: msg,
      titleStyle: { fontFamily: 'Poppins-Regular', includeFontPadding: false },
      type: 'info',
      duration: 2000
    });
  }
}

export default FlashMessage;