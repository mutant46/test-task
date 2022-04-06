import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Select from "../Select";
import { StyledButton, FormBox } from "../Resuable";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const history = useNavigate();
  const [status, setStatus] = React.useState(false);
  const [values, setValues] = React.useState({
    name: "",
    sectors: [],
    termsOfService: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleRefillClick = () => {
    const data = window.localStorage.getItem("data");
    if (data) {
      setValues(JSON.parse(data));
      setStatus(false);
    } else {
      alert("No data to refill");
    }
  };

  React.useEffect(() => {
    const data = window.localStorage.getItem("data");
    if (data) {
      setValues(JSON.parse(data));
      setStatus(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key of Object.values(values)) {
      if (key === "" || key === false || key === []) {
        return alert("Please fill all the fields");
      }
    }
    window.localStorage.setItem("data", JSON.stringify(values));
    setStatus(true);
    setValues({
      name: "",
      sectors: [],
      termsOfService: false,
    });
  };
  return (
    <FormBox my={4} p={4}>
      <Typography variant="h5" mb={4}>
        Please enter your name and pick the Sectors you are currently involved in.
      </Typography>

      <Box my={3}>
        {status ? (
          <Alert severity="success" sx={{ backgroundColor: "#82E0AA " }}>
            The Form has been saved
          </Alert>
        ) : (
          ""
        )}
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              required
              value={values.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              name="sectors"
              value={values.sectors}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="termsOfService"
                  value={values.termsOfService}
                  checked={values.termsOfService}
                  required
                  onChange={() =>
                    setValues({ ...values, termsOfService: !values.termsOfService })
                  }
                />
              }
              label="Accept Terms of Servie"
            />
          </Grid>
          <Grid item xs={12}>
            <StyledButton type="submit" sx={{ marginLeft: 0 }}>
              Save
            </StyledButton>
            <StyledButton type="button" onClick={handleRefillClick}>
              Refill
            </StyledButton>
            <StyledButton type="button" onClick={() => history("/edit")}>
              Edit Sectors
            </StyledButton>
          </Grid>
        </Grid>
      </form>
    </FormBox>
  );
};

export default Index;
