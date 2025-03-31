import { Container, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BugReportIcon from '@mui/icons-material/BugReport';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const products = [
  {
    title: 'Lawn Care Guide',
    description: 'Comprehensive digital guide for maintaining a healthy lawn throughout the year.',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800',
    icon: MenuBookIcon,
  },
  {
    title: 'Seasonal Maintenance Planner',
    description: 'Digital planner with detailed schedules and tips for each season.',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1557090495-fc9312e77b28?auto=format&fit=crop&q=80&w=800',
    icon: CalendarMonthIcon,
  },
  {
    title: 'Plant Disease Identifier',
    description: 'Digital tool to identify common lawn diseases and their treatments.',
    price: '$24.99',
    image: 'https://www.pennington.com/-/media/Project/OneWeb/Pennington/Images/blog/seed/How-to-Bring-Your0-Lawn-Back-to-Life-in-5-Simple-Steps/OG-restore-dead-grass.jpg',
    icon: BugReportIcon,
  },
  {
    title: 'Lawn Design Templates',
    description: 'Digital templates for planning your perfect lawn layout.',
    price: '$14.99',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800',
    icon: DesignServicesIcon,
  },
];

const Products = () => {
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
              Digital Products
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
              Enhance your lawn care knowledge with our digital resources
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
            {products.map((product, index) => {
              const Icon = product.icon;
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
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                        color: 'white',
                        p: 1,
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6" component="span">
                        {product.price}
                      </Typography>
                    </Box>
                  </Box>
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
                      {product.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flex: 1 }}>
                      {product.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<ShoppingCartIcon />}
                      sx={{
                        mt: 'auto',
                        py: 1.5,
                        fontWeight: 600,
                      }}
                    >
                      Purchase Now
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

export default Products; 