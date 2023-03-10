import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navigation/navigation';
import eventsReducer from './events/events';
import comicsReducer from './comics/comics';
import searchReducer from './comics/search';

export default configureStore({
  reducer: {
    navigation: navReducer,
    events: eventsReducer,
    comics: comicsReducer,
    search: searchReducer,
  },
});
