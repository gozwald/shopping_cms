import React, {} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "./Font.css";
import Container from "@material-ui/core/Container";

export default function Upperhero() {

  return (
            <>
            
            <Grid item xs={12} style={ { marginTop: "7px" }}>
            <Box
              style={{
                backgroundColor: "#FF533D"
              }}
            >
                <Container maxWidth="lg">                
              <Grid container direction="row">
            
                <Grid
                  style={{
                    maxHeight: "30vh"
                  }}
                  item
                  xs={6}
                >
                  <Box
                    height="100%"
                    alignItems="center"
                    display="flex"
                    direction="row"
                    justify="center"
                  >
                    <Typography
                      style={{
                        padding: "30px",
                        color: "white",
                        fontSize: "2.0em",
                        fontFamily: "Quicksand",
                        fontWeight: "600"
                      }}
                    >
                      Carefully curated care packages for loved ones needing
                      love.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box display="flex" height="30vh" alignItems="flex-end">
                    <img
                      src="https://i.ibb.co/0fnnH39/female-hands-love-heart-symbol.jpg"
                      alt="heart hands"
                      width="90%"
                      height="100%"
                    />
                  </Box>
                </Grid>
                
              </Grid>
              </Container>
            </Box>
            
          </Grid>
            </>
  );
}
