import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    LLM Prompt Logger
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/new">
                        Add Record
                    </Button>
                    <Button color="inherit" component={Link} to="/metadata">
                        Manage Metadata
                    </Button>
                    <Button color="inherit" component={Link} to="/analytics">
                        Analytics
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;