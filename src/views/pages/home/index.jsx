'use client';

// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// @project
import useDataThemeMode from '@/hooks/useDataThemeMode';
import useTranslation from '@/hooks/useTranslation';
import { Team2Members } from '@/blocks/team';

/***************************  HOME PAGE  ***************************/

export default function HomePage() {
  useDataThemeMode();
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Your Template
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          This is a clean Next.js template with Material-UI. Start building your amazing project from here.
        </Typography>
      </Box>

      <Box sx={{ mt: 6, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="body1" color="text.secondary">
          🚀 Add your content here by editing <code>src/views/pages/home/index.jsx</code>
        </Typography>
      </Box>
    </Container>
  );
}
