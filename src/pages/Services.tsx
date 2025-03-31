import { Container, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import LawnMowerIcon from '@mui/icons-material/Grass';
import FertilizerIcon from '@mui/icons-material/Spa';
import WeedIcon from '@mui/icons-material/PestControl';
import AerationIcon from '@mui/icons-material/Agriculture';

const services = [
  {
    title: 'Lawn Mowing',
    description: 'Professional lawn mowing services with state-of-the-art equipment for a perfectly manicured lawn.',
    image: 'https://images.unsplash.com/photo-1624894992636-5cbbe6e5f200?auto=format&fit=crop&q=80&w=800',
    icon: LawnMowerIcon,
  },
  {
    title: 'Fertilization',
    description: 'Custom fertilization programs to keep your lawn healthy and vibrant throughout the year.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800',
    icon: FertilizerIcon,
  },
  {
    title: 'Weed Control',
    description: 'Effective weed control solutions to maintain a pristine lawn without unwanted growth.',
    image: 'https://images.unsplash.com/photo-1619506147154-01717498fc26?auto=format&fit=crop&q=80&w=800',
    icon: WeedIcon,
  },
  {
    title: 'Aeration',
    description: 'Lawn aeration services to improve soil health and promote better grass growth.',
    image: 'https://images.unsplash.com/photo-1623775944460-7d75e1f90ff9?auto=format&fit=crop&q=80&w=800',
    icon: AerationIcon,
  },
];

const Services = () => {
  return (
    <Box 
      sx={{ 
        width: '100%',
        minHeight: '100vh',
        bgcolor: 'background.default',
        pt: { xs: 8, md: 12 },
        pb: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              sx={{ 
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Services
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 800,
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              }}
            >
              Comprehensive lawn care solutions for your property
            </Typography>
          </Box>

          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: { xs: 3, sm: 4 },
              width: '100%',
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                    },
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: 3, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <Box sx={{ 
                      mb: 2, 
                      color: 'primary.main',
                      bgcolor: 'primary.light',
                      p: 1.5,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0.1,
                      transform: 'scale(2)',
                    }}>
                      <Icon sx={{ fontSize: 40, color: 'primary.main', opacity: 1 }} />
                    </Box>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ mb: 2, mt: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flex: 1 }}>
                      {service.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        mt: 'auto',
                        py: 1.5,
                        fontWeight: 600,
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 