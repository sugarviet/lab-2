import { Typography, Container, Grid, Button, Link, Box } from "@mui/material";
function About() {
  return (
    <>
      <Container maxWidth={false}>
        <Typography
          variant="h1"
          sx={{
            color: "rgb(159, 200, 75)",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          Our team
        </Typography>
        <img src={require("../assets/images/about-us.jpg")} alt="" />

        <Grid container>
          <Grid item lg={12}>
            <div className="about-us-content">
              <Typography
                variant="h1"
                sx={{ color: "rgb(159, 200, 75)", overflow: "hidden" }}
              >
                The business of films
              </Typography>
              <Grid container p={10} spacing={4}>
                <Grid item lg={6}>
                  <Typography
                    variant="h7"
                    sx={{ color: "rgb(159, 200, 75)" }}
                    paragraph={true}
                    align="justify"
                  >
                    This pattern was popularized by the first big client-side
                    applications like Google maps and Google docs. We were
                    starting to see the power of the web’s distribution for
                    desktop-style software. It was a significant step forward
                    compared to buying software on CDs down at the shops.
                  </Typography>
                </Grid>
                <Grid item lg={6}>
                  <Typography
                    variant="h7"
                    sx={{ color: "rgb(159, 200, 75)" }}
                    paragraph={true}
                    align="justify"
                  >
                    This pattern was popularized by the first big client-side
                    applications like Google maps and Google docs. We were
                    starting to see the power of the web’s distribution for
                    desktop-style software. It was a significant step forward
                    compared to buying software on CDs down at the shops.
                  </Typography>
                </Grid>
              </Grid>
              <Button variant="contained" className="about-us-btn">
                Film with intergrity
              </Button>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Typography variant="h2" sx={{color: "rgb(159, 200, 75)"}} textAlign='center'>Started your carrer</Typography>
            <Typography variant="h9" paragraph={true} sx={{color: "rgb(159, 200, 75)"}}>
              Was popularized by the first big client-side applications like
              Google maps and Google docs. We were starting to see the power of
              the web’s distribution for desktop-style software. It was a
              significant step forward compared to buying software on CDs
            </Typography>
            <Box>
                <Typography align="center" variant="h5">
                    <Link href="#">Join us</Link>
                </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} sx={{overflow: 'hidden'}}>
          <Typography variant="h2" sx={{color: "rgb(159, 200, 75)"}} textAlign='center'>Started your carrer</Typography>
            <Typography variant="h9" paragraph={true} sx={{color: "rgb(159, 200, 75)"}}>
              Was popularized by the first big client-side applications like
              Google maps and Google docs. We were starting to see the power of
              the web’s distribution for desktop-style software. It was a
              significant step forward compared to buying software on CDs
            </Typography>
            <Box>
                <Typography align="center" variant="h5">
                    <Link href="#">Join us</Link>
                </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;
