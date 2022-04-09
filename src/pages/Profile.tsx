import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import EmailDialog from "../components/EmailDialog";
import TableEmail from "../components/TableEmail";
import data from "../mockData/email.json";

const { emailList } = data;

export default function Profile() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "");
  const email = JSON.parse(localStorage.getItem("email") || "");
  const { recipient, body, subject } = email;
  const newData = emailParse(recipient, body, subject);

  if (user?.[0]?.["email"] === email?.["recipient"]) {
    emailList.push(newData);
  }
  return (
    <>
      <Grid container direction="column">
        <Button onClick={() => navigation("/")}>Logout</Button>
      </Grid>
      <Grid container direction="column">
        <Button onClick={() => setOpen(true)}>Compose a email</Button>
      </Grid>
      <Grid container direction="column">
        <TableEmail />
      </Grid>
      <EmailDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function emailParse(email: string, body: string, subject: string) {
  return {
    id: 10,
    email: email,
    subject: subject,
    body: body,
    recipient: email,
  };
}
