import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

export default function FormDialog({
  value,
  message,
  dialogTitle,
  dialogContent,
}) {
  const [open, setOpen] = React.useState(false);

  const [formValues, setFormValues] = React.useState([...value]);

  const handleClickOpen = () => {
    setFormValues([...value]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (index, event) => {
    const updatedValues = [...formValues];
    updatedValues[index] = event.target.value;
    setFormValues(updatedValues);
  };

  return (
    <React.Fragment>
      <IconButton aria-label="edit" onClick={handleClickOpen}>
        {message}
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            console.log("Updated values:", formValues);
            handleClose();
          },
        }}
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="space-between" gap={2}>
            <TextField
              margin="dense"
              label={dialogContent[0]}
              value={formValues[0]}
              onChange={(event) => handleInputChange(0, event)}
              type="name"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              label={dialogContent[1]}
              value={formValues[1]}
              onChange={(event) => handleInputChange(1, event)}
              type="name"
              fullWidth
              variant="standard"
            />
          </Box>
          <TextField
            margin="dense"
            label={dialogContent[2]}
            value={formValues[2]}
            onChange={(event) => handleInputChange(2, event)}
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#be8748",
              color: "#FFFFFF",
              borderRadius: "20px",
              padding: "6px 20px",
              fontFamily: "amiko",
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              "&:hover": {
                backgroundColor: "#d48c3a",
              },
              boxSizing: "border-box",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            sx={{
              backgroundColor: "#be8748",
              color: "#FFFFFF",
              borderRadius: "20px",
              padding: "6px 20px",
              fontFamily: "amiko",
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              "&:hover": {
                backgroundColor: "#d48c3a",
              },
              boxSizing: "border-box",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
