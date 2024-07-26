import CustomAppBar from '../components/CustomAppBar';
import CustomTable from '../components/CustomTable';
import { Container } from '@mui/material';

export default function Main({ cases }) {
  return (
    <Container>
      <CustomAppBar />
      <CustomTable cases={cases} />
    </Container>
  );
}
