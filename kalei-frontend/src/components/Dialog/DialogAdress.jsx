import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function DialogAdress({
  value,
  message,
  dialogTitle,
  dialogContent,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "IN", name: "India" },
    { code: "AU", name: "Australia" },
    { code: "FR", name: "France" },
    { code: "SL", name: "Sri Lanka" },
    { code: "DE", name: "Germany" },
    { code: "JP", name: "Japan" },
    { code: "BR", name: "Brazil" },
    { code: "MX", name: "Mexico" },
  ];

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
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Country/Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={country}
              onChange={handleChange}
              label={dialogContent[0]}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display="flex" justifyContent="space-between" gap={2}>
            <TextField
              autoFocus
              margin="dense"
              label={dialogContent[1]}
              type="name"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              label={dialogContent[2]}
              type="name"
              fullWidth
              variant="standard"
            />
          </Box>
          <TextField
            autoFocus
            margin="dense"
            label={dialogContent[3]}
            type="text"
            fullWidth
            variant="standard"
          />
          <Box display="flex" justifyContent="space-between" gap={2}>
            <TextField
              autoFocus
              margin="dense"
              label={dialogContent[4]}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              label={dialogContent[5]}
              type="text"
              fullWidth
              variant="standard"
            />
          </Box>
          <TextField
            autoFocus
            margin="dense"
            label={dialogContent[6]}
            type="text"
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
