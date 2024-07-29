import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog, approvePatient, denyPatient } from '../actions';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import { summarizePatient } from '../common/summarizePatient';

const selectSelectedPatientId = (state) => state.selectedPatientId;

const CustomDialog = ({ caseItem }) => {
  const dispatch = useDispatch();

  const selectedPatientId = useSelector(selectSelectedPatientId);

  const [open, setOpen] = useState(false);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (caseItem) {
      setLoading(true);
      summarizePatient(caseItem).then((summary) => {
        setSummary(summary);
        setLoading(false);
      });
    }
  }, [caseItem]);

  const handleApprove = () => {
    dispatch(approvePatient(selectedPatientId));
    dispatch(closeDialog());
  };

  const handleDeny = () => {
    dispatch(denyPatient(selectedPatientId));
    dispatch(closeDialog());
  };

  const handleClose = () => {
    dispatch(closeDialog());
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        variant='contained'
        sx={{
          borderRadius: 28,
          backgroundColor: 'rgba(0, 0, 0, 1)',
          color: 'white',
          textTransform: 'capitalize',
        }}
        onClick={handleClickOpen}
      >
        Review Case
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: '#f5f5f5', color: 'black' }}>
          Patient Information
        </DialogTitle>
        <DialogContent>
          {loading ? (
            <CircularProgress />
          ) : (
            <p>
              <strong>Summary:</strong> {summary}
            </p>
          )}
          <Box>
            <Typography variant='body1'>
              <strong>First Name:</strong> {caseItem.firstName}
            </Typography>
            <Typography variant='body1'>
              <strong>Last Name:</strong> {caseItem.lastName}
            </Typography>
            <Typography variant='body1'>
              <strong>Date of Birth:</strong> {caseItem.dateOfBirth}
            </Typography>
            <Typography variant='body1'>
              <strong>Condition:</strong> {caseItem.condition}
            </Typography>
            <Typography variant='body1'>
              <strong>Allergies:</strong> <strong>{caseItem.allergies}</strong>
            </Typography>
            <Typography variant='body1'>
              <strong>Medications:</strong>{' '}
              <strong>{caseItem.medications}</strong>
            </Typography>
            <Typography variant='body1'>
              <strong>Notes:</strong> {caseItem.notes}
            </Typography>
            <Box mt={2}>
              <img
                src='https://via.placeholder.com/200'
                alt={`${caseItem.firstName} ${caseItem.lastName}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleDeny} color='error' variant='contained'>
            Deny
          </Button>
          <Button onClick={handleApprove} color='success' variant='contained'>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
