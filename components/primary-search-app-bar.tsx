import MenuIcon from "@mui/icons-material/Menu";
import { FormControl, InputBase, NativeSelect, styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [selectedValue, setSelectedValue] = useState("");
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };
  const showAlert = () => {
    alert(`You have selected ${selectedValue}.`);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Filter by
          </Typography>
          <FormControl sx={{ m: 1 }} variant="standard">
            <NativeSelect
              id="select-moves"
              value={selectedValue}
              onChange={handleInputChange}
              input={<BootstrapInput />}
            >
              <option aria-label="None" value="" />
              <option value={"tackle"}>tackle</option>
              <option value={"growl"}>growl</option>
              <option value={"flamethrower"}>flamethrower</option>
              <option value={"razor-wind"}>razor-wind</option>
            </NativeSelect>
          </FormControl>
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="secondary" onClick={showAlert}>
              Search
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
