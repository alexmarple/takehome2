import CustomAppBar from '../components/CustomAppBar';
import CustomTable from '../components/CustomTable';
import CustomTableBar from '../components/CustomTableBar';
import { Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { groupByDiagnosis } from '../common/groupByDiagnosis';
import { openDialog } from '../actions';
import Paper from '@mui/material/Paper';
import CustomDivider from '../components/CustomDivider';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from '@mui/material';

export default function Main({ cases }) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const hiddenPatients = useSelector((state) => state.hiddenPatients);
  const pendingCount = useSelector((state) => state.pendingCount);

  const filteredPatients = cases.filter(
    (patient) => !hiddenPatients.includes(patient.id)
  );
  const groupedPatients =
    filter === 'by-diagnosis'
      ? groupByDiagnosis(filteredPatients)
      : { All: filteredPatients };

  const handleRowClick = (patientId) => {
    dispatch(openDialog(patientId));
  };

  const conditions = Object.keys(groupedPatients);

  const cellSx = {
    padding: '8px',
    textAlign: 'center',
    width: '25%',
    fontWeight: 700,
    fontSize: '16px',
  };

  return (
    <Container>
      <CustomAppBar />
      <CustomTableBar pendingCount={pendingCount} />
      <CustomDivider />
      <TableContainer component={Paper} sx={{ marginTop: '10px' }}>
        <Table>
          <TableHead
            sx={{
              backgroundColor: '#f5f5f5',
              fontWeight: '700',
              size: '24px',
              lineHeight: '28.8px',
            }}
          >
            <TableRow>
              <TableCell sx={cellSx}>Patient Name</TableCell>
              <TableCell sx={cellSx}>Patient Status</TableCell>
              <TableCell sx={cellSx}>Time</TableCell>
              <TableCell sx={cellSx}>Action</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        {filter === 'by-diagnosis' ? (
          conditions.map((condition, index) => (
            <CustomTable
              key={condition}
              condition={condition}
              cases={groupedPatients[condition]}
              onRowClick={handleRowClick}
              showHeader={index === 0}
            />
          ))
        ) : (
          <CustomTable
            condition={null}
            cases={groupedPatients['All']}
            onRowClick={handleRowClick}
            showHeader={true}
          />
        )}
      </TableContainer>
    </Container>
  );
}
