import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import InitialAvatar from '../common/initialAvatar';
import CustomDialog from './CustomDialog';

const CustomTable = ({ condition, cases, onRowClick }) => {
  const cellSx = {
    padding: '16px',
    textAlign: 'center',
    width: '25%',
    fontWeight: 700,
    fontSize: '16px',
  };
  return (
    <>
      {condition && (
        <Typography variant='h6' component='div' sx={{ padding: 2 }}>
          {condition}
        </Typography>
      )}
      <Table aria-label='simple table'>
        <TableBody>
          {cases.map((caseItem) => (
            <TableRow key={caseItem.id} onClick={() => onRowClick(caseItem.id)}>
              <TableCell sx={cellSx}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    style={{ marginRight: '20px' }}
                    {...InitialAvatar(
                      `${caseItem.firstName} ${caseItem.lastName}`
                    )}
                  />
                  <span style={{ textDecoration: 'underline' }}>
                    {caseItem.firstName} {caseItem.lastName}
                  </span>
                </div>
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', ...cellSx }}>
                {caseItem.status}
              </TableCell>
              <TableCell sx={{ color: 'rgba(76, 175, 80, 1);', ...cellSx }}>
                {48 - caseItem.timeElapsed} hours left
              </TableCell>
              <TableCell sx={cellSx}>
                <CustomDialog caseItem={caseItem} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CustomTable;
