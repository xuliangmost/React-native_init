import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e9e9e9',
    position: 'relative',
  },
  header: {
    display: 'flex',
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(255,144,85,0.3)',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    top: 26
  },
  headerLeft: {
    fontSize: 20,
    width: 60,
    height: 40,
    lineHeight: 40,
    textAlign: 'center'
  },
  headerCenter: {
    fontSize: 20,
    lineHeight: 30,
    marginTop:5,
    height: 30,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft:20,
    borderRadius:15
  },
  headerRight: {
    fontSize: 20,
    width: 60,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
  },
  content: {
    width: '100%',
    position: 'absolute',
    top: 66,
    bottom: 50,
    backgroundColor: 'rgba(52,155,186,0.4)',
  },
  contentHeightTest: {
    height: '100%',
    overflow:'hidden'
  },
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255,105,160,0.4)',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    left: 0
  },
  footerItem: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 50,
  }
});
export {styles}