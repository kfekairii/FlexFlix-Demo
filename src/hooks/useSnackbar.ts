import Snackbar from 'react-native-snackbar';

const useSnackbar = () => {
  const showSuccess = (text: string) => {
    Snackbar.show({
      text: text,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: 'green',
    });
  };

  const showError = (text: string) => {
    Snackbar.show({
      text: text ?? 'Oops something goes wrong!',
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: 'red',
    });
  };

  return {
    showSuccess,
    showError,
  };
};

export default useSnackbar;
