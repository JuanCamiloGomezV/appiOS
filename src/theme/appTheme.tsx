import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: Platform.OS == 'android' ? 20 : 'auto',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuButtom: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 16,
  },
});
