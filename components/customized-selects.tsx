import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import NativeSelect from "@mui/material/NativeSelect";
import { styled } from "@mui/material/styles";
import * as React from "react";

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

// type Moves={
//   { target: { value: React.SetStateAction<string> } }
// }
export default function Dropdown() {
  const [selectedOption, setSelectedOption] = React.useState("default");
  const handleChange = (event :{ target: { value: React.SetStateAction<string> } }) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption)
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <NativeSelect
          id="customized-select"
          value={setSelectedOption}
          onChange={handleChange}
          input={<BootstrapInput />}
        >

          <option aria-label="None" value="" />
          <option value={"tackle"}>tackle</option>
          <option value={"growl"}>growl</option>
          <option value={"flamethrower"}>flamethrower</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
