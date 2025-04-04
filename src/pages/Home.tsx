import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled(Box)(() => ({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=2000")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(0.7)',
    zIndex: 0,
  },
}));

const FeatureCard = styled(Paper)(() => ({
  padding: 32,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
  borderRadius: 16,
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
}));

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <HeroSection>
        <Box 
          sx={{ 
            position: 'relative',
            zIndex: 1,
            width: '100%',
            textAlign: 'center',
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 3,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Welcome to GreensRUS
            </Typography>
            <Typography 
              variant="h4"
              sx={{
                mb: 6,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                fontWeight: 400,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              Premier Lawn Care Services in Waterloo, Ontario
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleGetStarted}
              sx={{ 
                py: 2,
                px: 6,
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontWeight: 600,
              }}
            >
              Get Started
            </Button>
          </Container>
        </Box>
      </HeroSection>

      <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={4} 
            justifyContent="center"
          >
            <Grid item xs={12} md={4}>
              <FeatureCard>
                <Typography variant="h5" gutterBottom sx={{ mb: 2, color: 'primary.main' }}>
                  Professional Services
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Expert lawn maintenance solutions for residential and commercial properties.
                  Our team uses state-of-the-art equipment to deliver exceptional results.
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard>
                <Typography variant="h5" gutterBottom sx={{ mb: 2, color: 'primary.main' }}>
                  Quality Products
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Access our selection of premium lawn care products and equipment.
                  We offer digital guides and tools to help maintain your lawn.
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard>
                <Typography variant="h5" gutterBottom sx={{ mb: 2, color: 'primary.main' }}>
                  Expert Team
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our experienced professionals ensure the best results for your lawn.
                  We're dedicated to creating beautiful, healthy landscapes.
                </Typography>
              </FeatureCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;