import { createContext } from 'react';

const AppContext = createContext(null);
const DataContext = createContext(null);
const UserContext = createContext(null);
const LayoutContext = createContext(null);

export {
  AppContext,
  DataContext,
  UserContext,
  LayoutContext,
};