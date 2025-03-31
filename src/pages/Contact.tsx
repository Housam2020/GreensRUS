import { Container, Typography, Grid, TextField, Button, Paper, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Contact Us
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Get in touch with our team
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Typography paragraph>
              <strong>Address:</strong><br />
              Waterloo, Ontario, Canada
            </Typography>
            <Typography paragraph>
              <strong>Owner:</strong><br />
              Chidera Ubosi
            </Typography>
            <Typography paragraph>
              <strong>Email:</strong><br />
              info@greensrus.com
            </Typography>
            <Typography paragraph>
              <strong>Phone:</strong><br />
              (555) 123-4567
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Send us a Message
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Subject"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3 }}
                fullWidth
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 