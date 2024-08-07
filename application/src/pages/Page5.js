// src/pages/DonationsPage.js
import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Page5 = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState("");

  const handleDonate = () => {
    // Handle the donation logic here
    console.log("Donated:", { name, email, amount, selectedCard });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Make a Donation
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Donation Amount"
          variant="outlined"
          margin="normal"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Typography variant="h6" align="center" gutterBottom sx={{ mt: 3 }}>
          Select Payment Method
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <Grid item>
            <IconButton
              onClick={() => setSelectedCard("Visa")}
              color={selectedCard === "Visa" ? "primary" : "default"}
            >
              <CreditCardIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => setSelectedCard("Mastercard")}
              color={selectedCard === "Mastercard" ? "primary" : "default"}
            >
              <CreditCardIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => setSelectedCard("Amex")}
              color={selectedCard === "Amex" ? "primary" : "default"}
            >
              <CreditCardIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => setSelectedCard("Other")}
              color={selectedCard === "Other" ? "primary" : "default"}
            >
              <CreditCardIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDonate}
            disabled={!name || !email || !amount || !selectedCard}
          >
            Donate
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Page5;
