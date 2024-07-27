import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../actions';

const usePatients = () => {
  const dispatch = useDispatch();
  const { loading, patients, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return { loading, patients, error };
};

export default usePatients;
