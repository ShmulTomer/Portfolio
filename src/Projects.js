import React from 'react'
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import amber from "@mui/material/colors"


const Projects = () => {


  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
    <div className="proj">
        
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        
       <div className="content">
            <div className="title">
                PROJECTS
            </div>
            <div className="cards">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href="https://www.gtcomplaint.com/" target="_blank">
                        <CardMedia
                            component="img"
                            height="100"
                            image="https://i.ibb.co/yRJLq0M/GT-Complaint-MUP.jpg"
                            alt="gt complaint image"
                            />
                        <CardContent>
                            <ThemeProvider theme={theme}>
                        <Typography gutterBottom variant="h5" component="div">
                            GT Complaint Website
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I created a website that allows users to create accounts using their school email,
                            submit complaints, respond to other complaints, and resolve when they are addressed.
                        </Typography>
                        </ThemeProvider>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
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
                            An Android game where you can place defending towers around a path where different enemies will 
                            try to approach and destroy the hive at the end. Towers can be upgraded, which is needed to defeat the final boss.
                        </Typography>
                        </ThemeProvider>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://i.ibb.co/55Tzvyb/Drive-Way-PNGV.png"
                            alt="driveway prototype image"
                            />
                        <CardContent>
                        <ThemeProvider theme={theme}>
                        <Typography gutterBottom variant="h5" component="div">
                            DriveWay Prototype
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </Typography>
                        </ThemeProvider>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                            alt="green iguana"
                            />
                        <CardContent>
                        <ThemeProvider theme={theme}>
                        <Typography gutterBottom variant="h5" component="div">
                            Meal Planner App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </Typography>
                        </ThemeProvider>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Projects