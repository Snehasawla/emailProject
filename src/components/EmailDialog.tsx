import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
} from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import { requiredMsg } from "../utils/error";
import Textarea from "./TextArea";
import TextField from "./TextField";

type emailProps = {
  open?: boolean;
  onClose: () => void;
};

const initialValues = {
  recipient: "",
  body: "",
  subject: "",
};

const validationSchema = object().shape({
  recipient: string().required(requiredMsg("recipient")),
  body: string().required(requiredMsg("body")),
});

function EmailDialogContent({ onClose }: emailProps) {
  const onSubmit = () => {
    onClose();
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  const { recipient, subject, body } = values;
  localStorage.setItem("email", JSON.stringify(values));
  return (
    <>
      <Grid
        container
        direction="column"
        component="form"
        onSubmit={handleSubmit}
      >
        <DialogContent>
          <Grid item>
            <TextField
              id="recipient"
              name="Recipient"
              label={"Recipient"}
              value={recipient}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.recipient ? errors.recipient : ""}
            />
          </Grid>
          <Grid item>
            <TextField
              id="subject"
              name="Subject"
              label={"Subject"}
              value={subject}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.subject ? errors.subject : ""}
            />
          </Grid>
          <Grid item>
            <Textarea
              id="body"
              name="body"
              label="Message"
              value={body}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Grid>
    </>
  );
}

export default function EmailDialog({ open, onClose }: emailProps) {
  return (
    <Dialog open={open!} onClose={onClose}>
      <EmailDialogContent onClose={onClose} />
    </Dialog>
  );
}
