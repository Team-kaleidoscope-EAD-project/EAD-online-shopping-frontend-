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
  onSave,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formValues);
    handleClose();
  };

  return (
    <React.Fragment>
      <IconButton aria-label="edit" onClick={handleClickOpen}>
        {message}
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
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
              variant="standard" //first name
            />
            <TextField
              margin="dense"
              label={dialogContent[1]}
              value={formValues[1]}
              onChange={(event) => handleInputChange(1, event)}
              type="name"
              fullWidth
              variant="standard" //last name
            />
          </Box>
          <TextField
            margin="dense"
            disabled
            label={dialogContent[2]}
            value={formValues[2]}
            onChange={(event) => handleInputChange(2, event)}
            type="email"
            fullWidth
            variant="standard" //email
          />
          <Box display="flex" justifyContent="space-between" gap={2}>
            <TextField
              margin="dense"
              label={dialogContent[3]}
              value={formValues[3]}
              onChange={(event) => handleInputChange(3, event)}
              type="text"
              fullWidth
              variant="standard" //address
            />
            <TextField
              margin="dense"
              label={dialogContent[4]}
              value={formValues[4]}
              onChange={(event) => handleInputChange(4, event)}
              type="text"
              fullWidth
              variant="standard" //city
            />
          </Box>
          <TextField
            margin="dense"
            label={dialogContent[5]}
            value={formValues[5]}
            onChange={(event) => handleInputChange(5, event)}
            type="text"
            fullWidth
            variant="standard" //zip code
          />
          <TextField
            margin="dense"
            label={dialogContent[6]}
            value={formValues[6]}
            onChange={(event) => handleInputChange(6, event)}
            type="text"
            fullWidth
            variant="standard" //phone number
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
            onClick={handleSubmit}
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
