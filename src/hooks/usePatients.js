import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../actions';

const selectPatients = (state) => state.patients;
const selectLoading = (state) => state.loading;
const selectError = (state) => state.error;

const usePatients = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const patients = useSelector(selectPatients);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return { loading, patients, error };
};

export default usePatients;
