import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navigation/navigation';

export default configureStore({
  reducer: {
    navigation: navReducer,
  },
});
