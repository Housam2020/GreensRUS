import { Container, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        About GreensRUS
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Your Trusted Partner in Lawn Care Excellence
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              GreensRUS is a premier lawn care service based in Waterloo, Ontario, Canada. 
              Founded with a passion for creating beautiful, healthy landscapes, we've grown 
              to become a trusted name in lawn care services.
            </Typography>
            <Typography paragraph>
              Our commitment to excellence and customer satisfaction has helped us build 
              a strong reputation in the community. We combine traditional lawn care expertise 
              with modern technology to deliver exceptional results.
            </Typography>
          </Paper>
        </Grid>

        <Grid xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              To provide top-quality lawn maintenance solutions that enhance the beauty 
              and health of residential and commercial properties while promoting sustainable 
              lawn care practices.
            </Typography>
            <Typography paragraph>
              We strive to educate our clients about proper lawn care techniques and 
              provide them with the tools and knowledge they need to maintain their 
              landscapes effectively.
            </Typography>
          </Paper>
        </Grid>

        <Grid xs={12}>
          <Paper sx={{ p: 4, mt: 4 }}>
            <Typography variant="h5" gutterBottom align="center">
              Our Team
            </Typography>
            <Typography paragraph align="center">
              Led by owner Chidera Ubosi, our team of experienced professionals brings 
              together years of expertise in lawn care and landscaping. We're dedicated 
              to providing personalized service and exceptional results for every client.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 