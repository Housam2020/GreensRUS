import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      color="inherit" 
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            py: { xs: 1, md: 1.5 },
            px: { xs: 2, sm: 4, md: 6 },
            mx: 'auto',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 700,
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              '&:hover': {
                color: 'primary.dark',
              },
            }}
          >
            GreensRUS
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              gap: { xs: 1, sm: 2, md: 3 },
              alignItems: 'center',
            }}
          >
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/"
              sx={{ 
                fontWeight: 500,
                display: { xs: 'none', sm: 'inline-flex' },
              }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/services"
              sx={{ 
                fontWeight: 500,
                display: { xs: 'none', sm: 'inline-flex' },
              }}
            >
              Services
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/products"
              sx={{ 
                fontWeight: 500,
                display: { xs: 'none', sm: 'inline-flex' },
              }}
            >
              Products
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/about"
              sx={{ 
                fontWeight: 500,
                display: { xs: 'none', sm: 'inline-flex' },
              }}
            >
              About
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              component={RouterLink} 
              to="/contact"
              sx={{
                px: { xs: 2, sm: 3 },
                py: 1,
                fontWeight: 600,
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 