import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navigation/navigation';
import eventsReducer from './events/events';

export default configureStore({
  reducer: {
    navigation: navReducer,
    events: eventsReducer,
  },
});
