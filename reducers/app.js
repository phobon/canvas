const initialState = {
  currentTheme: 'light',
  sidebarExpanded: true,
};

const CHANGE_THEME = 'CHANGE_THEME';
const TOGGLE_SIDEBAR_EXPANDED = 'TOGGLE_SIDEBAR_EXPANDED';

const actions = {
  CHANGE_THEME,
  TOGGLE_SIDEBAR_EXPANDED,
};

const reducer = (state, action) => {
  const { currentTheme, sidebarExpanded } = state;
  switch (action.type) {
    case CHANGE_THEME:
      return { sidebarExpanded, currentTheme: action.payload };
    case TOGGLE_SIDEBAR_EXPANDED:
      return { currentTheme, sidebarExpanded: action.payload }; 
    default:
      return state;
  }
};

export default {
  actions,
  initialState,
  reducer,
};
