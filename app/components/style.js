
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex            : 1,
    width           : undefined,
    height          : undefined,
    backgroundColor : 'red',
    justifyContent  : 'flex-end',
    alignItems      : 'center'
  },
  mainView: {
    flex            : 1,
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : '100%',
    width           : '100%',
    backgroundColor : '#ffffff'
  },
  logo: {
    width  : '75%',
    height : 100
  },
  texts: {
    color      : '#ffffff',
    fontSize   : 18,
    textAlign  : 'center',
    width      : '70%',
    fontFamily : 'ProximaNova-Semibold',
    paddingTop : 20
  },
  button: {
    width          : '100%',
    marginTop      : 10,
    alignItems     : 'center',
    justifyContent : 'center'
  },
  buttonTexts: {
    textAlign : 'center',
    width     : '100%',
    fontSize  : 15
  },
  formWrapper: {
    width           : '100%',
    paddingLeft     : 15,
    paddingRight    : 15,
    paddingTop      : 5,
    height          : 'auto',
    alignItems      : 'center',
    backgroundColor : '#ffffff',
  },
  textField: {
    color       : '#ffffff',
    height      : 50,
    borderColor : '#ffffff',
    borderWidth : 0,
    fontFamily  : 'Proxima Nova',
    fontSize    : 16
  },
  buttonsWrapper: {
    width           : '100%',
    alignItems      : 'center',
    paddingLeft     : 15,
    paddingRight    : 15,
    height          : 'auto',
    backgroundColor : '#ffffff'
  },
  topSpacing: {
    height: 15
  },
  bottomSpacing: {
    height: 20
  },
  loadingSpinner: {
    alignItems     : 'center',
    justifyContent : 'center',
    position       : 'absolute',
    marginTop      : '10%'
  }
});
