export const FETCH_PATIENTS_REQUEST = 'FETCH_PATIENTS_REQUEST';
export const FETCH_PATIENTS_SUCCESS = 'FETCH_PATIENTS_SUCCESS';
export const FETCH_PATIENTS_FAILURE = 'FETCH_PATIENTS_FAILURE';
export const SET_FILTER = 'SET_FILTER';
export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';
export const APPROVE_PATIENT = 'APPROVE_PATIENT';
export const DENY_PATIENT = 'DENY_PATIENT';

export const fetchPatientsRequest = () => ({
  type: FETCH_PATIENTS_REQUEST,
});

export const fetchPatientsSuccess = (patients) => ({
  type: FETCH_PATIENTS_SUCCESS,
  payload: patients,
});

export const fetchPatientsFailure = (error) => ({
  type: FETCH_PATIENTS_FAILURE,
  payload: error,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const openDialog = (patientId) => ({
  type: OPEN_DIALOG,
  payload: patientId,
});

export const closeDialog = () => ({
  type: CLOSE_DIALOG,
});

export const approvePatient = (patientId) => ({
  type: APPROVE_PATIENT,
  payload: patientId,
});

export const denyPatient = (patientId) => ({
  type: DENY_PATIENT,
  payload: patientId,
});

export const fetchPatients = () => {
  return async (dispatch) => {
    dispatch(fetchPatientsRequest());
    try {
      const response = await fetch('http://localhost:3001/patients');
      const data = await response.json();
      dispatch(fetchPatientsSuccess(data));
    } catch (error) {
      dispatch(fetchPatientsFailure(error.message));
    }
  };
};
