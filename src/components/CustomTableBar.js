import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../actions';

const CustomTableBar = ({ pendingCount }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          color: '#4CAF50',
          fontWeight: '800',
          marginLeft: '30px',
          borderBottom: '2px solid black',
          marginTop: '37px',
          paddingBottom: '8px',
        }}
      >
        Pending ({pendingCount})
      </span>
      <Select
        value={filter}
        onChange={handleChange}
        autoWidth
        sx={{
          width: 212,
          height: 44,
          border: '1px solid #d9d9d9',
          textAlign: 'center',
          margin: '10px 0',
          borderRadius: '10px',
        }}
      >
        <MenuItem value='all'>No Filter</MenuItem>
        <MenuItem value='by-diagnosis'>By Diagnosis</MenuItem>
      </Select>
    </div>
  );
};

export default CustomTableBar;
