import React from "react";
import "./App.css";
import Card from "@mui/material/Card";
import {
  FaDownload
} from "react-icons/fa";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";


const Projects = () => {
  const font = "'Rubik', sans-serif";

  const theme = createTheme({
    typography: {
      fontFamily: [
        font,
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const siz = createTheme({
    breakpoints: {
      values: {
        sm: 0,
        lg: 770,
      },
    },
  });

  return (
    <div className="proj">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="content">
        <div className="title">PROJECTS</div>
        <div className="cards">
          <ThemeProvider theme={siz}>
            <div className="card">
              <Card
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                  minHeight: "430px",
                }}
              >
                <CardActionArea href="https://www.talkgt.com/" target="_blank">
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://i.ibb.co/yRJLq0M/GT-Complaint-MUP.jpg"
                    alt="talk gt image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Talk GT Website
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Website that allows users to create accounts, submit
                        posts, reply and vote on others, and resolve threads on
                        request. Built using React JS, Supabase DB, and hosted
                        through AWS
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div className="card">
              <Card
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                  minHeight: "430px",
                }}
              >
                <CardActionArea href="https://github.com/ShmulTomer/TowerDefense" target="_blank">
                  <CardMedia
                    component="img"
                    height="400"
                    image="https://i.ibb.co/c21V119/Website-Pic-1400x1000.jpg"
                    alt="hive defense image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Hive Defense Game
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Android game where players place and upgrade defending
                        or supporting towers around a path to protect against
                        waves of enemies and a final boss. Game ends when hive
                        loses all health. Built in Android Studio, used Agile
                        for sprints
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div className="card">
              <Card
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                }}
              > 
                <CardActionArea href="https://drive.google.com/file/d/1-Y2mvSFgJndwJv7-wK5FUIJ07K0udZHo/view?usp=sharing" target="_blank">
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/ByhF2tB/Drive-Way-Web-Image-1047x798.jpg"
                    alt="driveway prototype image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        DriveWay Prototype
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Conducted market research on distracted driving through 20+ interviews with experts and analysis of present solutions. Designed a dashboard smart phone mount through 3D model and Figma prototype of mobile app. Pitched product to professors, winning top 5 out of 20 teams

                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            

            
            <div className="card">
              <Card
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                }}
              >
                <CardActionArea href="https://drive.google.com/drive/folders/1HOu6kWE9X-zFD3FvdBqjHPRHMX0AhQDU?usp=sharing" target="_blank">
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/fC0Fq7x/BCNPNG-2-1.png"
                    alt="barcelona metro kiosk image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Metro Kiosk UI
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
    
                      Surveyed, interviews, and observed users of the Barcelona metro kiosk and designed a new zone selection interaction for the metro system. Created low-fidelity design through paper prototype and tested based on usability heuristics; working on high fidelity prototype through Figma
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="card">
              <Card
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                }}
              >
                <CardActionArea href="https://github.com/GTBitsOfGood/helping-mamas" target="_blank">
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/jL55NxY/My-project-1.png"
                    alt="helping mamas image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Helping Mamas Web App
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Developing a website to manage events, volunteers, applications, and more for Helping Mamas, a non-profit organization dedicated to providing mothers with supplies for their babies. Backed by React, Node, and MongoDB to be handed off end of semester
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>


            <div className="card">
              <Card
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                }}
              >
                <CardActionArea href="https://devpost.com/software/stockify-i9n674" target="_blank">
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/93JmJWz/Stockify.png"
                    alt="stockify"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Stockify Portfolio Optimizer
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Built a stock market beginner-friendly portfolio creation tool for the HackGT hackathon. Application uses mean-variance optimization algorithm to determine investment with low risk based on past market volatility.
                        Backed using React Native front-end, Flask, and Python libraries 
                      
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

          </ThemeProvider>
          
          
        </div>
        {/* <a href="https://drive.google.com/file/d/1AZ0YkMx2IDIDNz9gIyMdGfAnU3kr_vyF/view?usp=sharing" target="_blank">
          <div className="resume">
               <FaDownload></FaDownload>Download Resume
          </div></a> */}
          <br></br>
      </div>
    </div>
  );
};

export default Projects;
