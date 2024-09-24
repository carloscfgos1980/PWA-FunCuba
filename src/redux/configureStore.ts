import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import filteredFeedbacks from "./filteredFeedbacks";
import filteredRoutes from "./filteredRoutes";

export const store = configureStore({
  reducer: {
    filteredFeedbacks,
    filteredRoutes,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
