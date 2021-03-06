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
                <CardActionArea>
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
                <CardActionArea>
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
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/H4WL6KP/Meal-Planner-IMG.jpg"
                    alt="meal planner image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Meal Planner App
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - In Progress -
                        <br></br>
                        Website that supports contributors, which create recipes and write reviews, and home chefs, which source meals through grocery runs and create meals through the products they own and recipes. Backed by MySQL database and React JS frontend
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </ThemeProvider>
          <a href="https://drive.google.com/file/d/1AZ0YkMx2IDIDNz9gIyMdGfAnU3kr_vyF/view?usp=sharing" target="_blank">
          <div className="resume">
               <FaDownload></FaDownload>Download Resume
          </div></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
