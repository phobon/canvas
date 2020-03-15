const initialState = {
  id: null,
  isAuthenticated: false,
  profile: {
    name: '',
    userId: null,
  },
};

const SET_USER = 'SET_USER';

const actions = {
  SET_USER,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload };
    default:
      return state;
  }
};

export default {
  actions,
  initialState,
  reducer,
};
