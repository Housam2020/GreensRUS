import { Container, Typography, Grid, TextField, Button, Paper, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Handle service or product information from navigation
    if (location.state) {
      const { service, product, price } = location.state as { service?: string; product?: string; price?: string };
      if (service) {
        setFormData(prev => ({
          ...prev,
          subject: `Inquiry about ${service} service`,
          message: `I am interested in the ${service} service.`
        }));
      } else if (product) {
        setFormData(prev => ({
          ...prev,
          subject: `Purchase inquiry for ${product}`,
          message: `I would like to purchase ${product} (${price}).`
        }));
      }
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

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
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Subject"
                margin="normal"
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                required
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
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