import {
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE,
  SET_FILTER,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  APPROVE_PATIENT,
  DENY_PATIENT,
} from '../actions';

const initialState = {
  loading: false,
  patients: [],
  error: '',
  filter: 'all',
  dialogOpen: false,
  selectedPatientId: null,
  hiddenPatients: [],
  pendingCount: 0,
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_PATIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        patients: action.payload,
        pendingCount: action.payload.length,
      };
    case FETCH_PATIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case OPEN_DIALOG:
      return {
        ...state,
        dialogOpen: true,
        selectedPatientId: action.payload,
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        dialogOpen: false,
        selectedPatientId: null,
      };
    case APPROVE_PATIENT:
    case DENY_PATIENT:
      const hiddenPatients = [...state.hiddenPatients, action.payload];
      const pendingCount = state.patients.length - hiddenPatients.length;
      return {
        ...state,
        dialogOpen: false,
        selectedPatientId: null,
        hiddenPatients,
        pendingCount,
      };
    default:
      return state;
  }
};

export default patientReducer;
