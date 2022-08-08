import * as React from 'react';
import type { HeadFC } from "gatsby"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import {  ReactElement } from "react";
import {expectedStartups} from "../data/startups-data"

const IndexPage = (): ReactElement =>{


  return (
    <main>
      <Grid id="startup-list" container direction="row" spacing={2}>
        {expectedStartups.map((startup) => {
          return (
            <Grid
              item
              xs={12}
              key={startup.id}
              data-cy={"startupId-" + startup.id}
            >
              
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "2rem",
       
                  }}
                >
                 
                  <Box>
                    <CardHeader
                      title={startup.name}
                      subheader={`Founded: 
                    ${
                      startup.employees
                        ? " | " + startup.employees + " Employees"
                        : ""
                    }  
                    ${
                      startup.fundingIsUndisclosed
                        ? " | Funding Undisclosed"
                        : " | " + startup.totalFunding + " Mio. $"
                    } 
                     ${
                       startup.currentInvestmentStage
                         ? " | " + startup.currentInvestmentStage
                         : ""
                     }`}
                    />
                    <CardContent sx={{ pt: 0 }}>
                      {startup.shortDescription}
                    </CardContent>
                  </Box>
                </Card>
 
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>