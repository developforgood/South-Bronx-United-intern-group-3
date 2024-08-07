import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import './EventList.css';

const volunteer_events = [
  "08/09/2024: Soccer Tournament Referee",
  "08/10/2024: Academic Tutoring",
  "09/01/2024: Soccer League Coach",
  "09/05/2024: Park Clean-Up",
  "09/17/2024: Soccer Clinic Coach",
  "09/17/2024: Soccer Clinic Med Tent",
  "09/23/2024: Study Habits Workshop",
  "10/01/2024: Soccer Equipment Drive",
  "10/12/2024: Conditioning Workshop",
  "10/20/2024: Community Clean-Up",
];

const Page3 = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <tr style={{height:'8vh', padding: '10px', width: "95%", backgroundColor: "#1976D2"}}>
        <th style={{backgroundColor: "#1976D2", color: "white", fontSize: 25}}>
          Volunteer Opportunities
        </th>
      </tr>
      <div className="table-container">
        <table className="event-table">
          <tbody>
            {volunteer_events.map((event, index) => (
              <tr key={index}>
                <td>{event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          gap: 1,
        }}
        style={{backgroundColor:"#cfd6dc", margin: 30, borderRadius: '10px', padding: 10}}
      >
        <th style={{marginTop: 10}}>If you would like to be notified of new volunteer opportunities, please sign up for our newsletter below.</th>
        <TextField label="Name" variant="outlined" fullWidth size="small"/>
        <TextField label="Email" variant="outlined" fullWidth size="small"/>
        <TextField label="Phone Number" variant="outlined" fullWidth size="small"/>

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px", marginBottom: "15px"}}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Page3;
