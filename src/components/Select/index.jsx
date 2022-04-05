import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { sectors } from "../../data";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(props) {
  const { name, value, handleChange } = props;
  const theme = useTheme();

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-chip-label">Sectors</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={value}
          name={name}
          required
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="sectors" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{ backgroundColor: "#feb101" }}
                />
              ))}
            </Box>
          )}>
          {sectors.map(({ name, title }) => (
            <MenuItem
              key={name}
              value={name}
              disabled={title}
              color="black"
              style={getStyles(name, value, theme)}>
              {title ? (
                <b>
                  <i>{name}</i>
                </b>
              ) : (
                name
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
