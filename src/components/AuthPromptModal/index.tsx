import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Dialog, Portal, Text, useTheme } from 'react-native-paper';

type AuthPromptModalProps = {
  visible: boolean;
  onDismiss: () => void;
  onLogin: () => void;
  onRegister: () => void;
};

const AuthPromptModal: React.FC<AuthPromptModalProps> = ({ visible, onDismiss, onLogin, onRegister }) => {
  const theme = useTheme();

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss} style={[styles.dialog, { backgroundColor: theme.colors.surface }]}> 
        <Dialog.Title>Perlu Login</Dialog.Title>
        <Dialog.Content>
          <Text style={[styles.text, { color: theme.colors.onSurface }]}>Silakan masuk atau daftar akun terlebih dahulu untuk bergabung atau membuat event.</Text>
        </Dialog.Content>
        <Dialog.Actions style={styles.actions}>
          <Button mode="outlined" onPress={onRegister} style={styles.actionButton}>Daftar Akun</Button>
          <Button mode="contained" onPress={onLogin} contentStyle={styles.actionButton}>Login</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialog: {
    borderRadius: 18,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
  },
  actions: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  actionButton: {
    marginHorizontal: 4,
  },
});

export default AuthPromptModal;
