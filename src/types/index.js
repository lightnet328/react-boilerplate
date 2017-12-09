// @flow
import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
  Middleware as ReduxMiddleware
} from "redux";
import type { CalendarState } from "./calendar";
import type { CounterState } from "./counter";

export type State = CalendarState & CounterState;

export type Action = {
  type: string,
  payload?: Object,
  meta?: Object,
  error?: any
};

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;

export type Middleware = ReduxMiddleware<State, Action>;
