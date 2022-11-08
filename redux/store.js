import {configureStore} from '@reduxjs/toolkit';
// ...

import {reducer} from './reducer';
import {videoFetch} from './slice/searchVideoSlice';

export const store = configureStore({
  reducer: {
    searchResult: reducer,

    // [categoryApi.reducerPath]: categoryApi.reducer,
    // [productApi.reducerPath]: productApi.reducer,
  },
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware().concat(
  //       categoryApi.middleware,
  //       productApi.middleware,
  //     ),
});

store.dispatch(videoFetch());
// store.dispatch(categoryFetch());
