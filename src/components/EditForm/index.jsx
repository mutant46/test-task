import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Select from "../Select";
import { FormBox, StyledButton } from "../Resuable";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const history = useNavigate();
  const data = window.localStorage.getItem("data")
    ? JSON.parse(window.localStorage.getItem("data"))
    : "";
  const [sectors, setSectors] = React.useState(data.sectors);
  const [status, setStatus] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    data.sectors = sectors;
    window.localStorage.setItem("data", JSON.stringify(data));
    setStatus(true);
  };
  const handleChange = ({ target }) => {
    setSectors(target.value);
  };

  return (
    <FormBox my={4} p={4}>
      <Typography variant="h5" mb={4}>
        Edit your selectors
      </Typography>

      <Box my={3}>
        {status ? (
          <Alert severity="success" sx={{ backgroundColor: "#82E0AA " }}>
            Changes have been saved
          </Alert>
        ) : (
          ""
        )}
      </Box>
      {data ? (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Select name="" value={sectors} handleChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <StyledButton type="submit" sx={{ marginLeft: 0 }}>
                Save
              </StyledButton>
              <StyledButton type="button" onClick={() => history("/")}>
                back to home
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      ) : (
        <div>
          <h1>You don't have any data</h1>
          <StyledButton
            type="button"
            sx={{ marginLeft: 0 }}
            onClick={() => history("/")}>
            back to home
          </StyledButton>
        </div>
      )}
    </FormBox>
  );
};

export default Index;
