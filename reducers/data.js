const initialState = {
  practice: null,
  patients: null,
  consultations: null,
};

const RECEIVED_CONSULTATIONS = 'RECEIVED_CONSULTATIONS';
const RECEIVED_PATIENTS = 'RECEIVED_PATIENTS';
const RECEIVED_PRACTICE = 'RECEIVED_PRACTICE';

const actions = {
  RECEIVED_CONSULTATIONS,
  RECEIVED_PATIENTS,
  RECEIVED_PRACTICE,
};

const reducer = (state, action) => {
  const { practice, patients, consultations } = state;

  switch (action.type) {
    case RECEIVED_CONSULTATIONS:
      return { practice, patients, consultations: action.payload };
    case RECEIVED_PATIENTS:
      return { practice, consultations, patients: action.payload };
    case RECEIVED_PRACTICE:
      return { patients, consultations, practice: action.payload };
    default:
      return state;
  }
};

export default {
  actions,
  initialState,
  reducer,
};
