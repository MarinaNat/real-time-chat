import React, {useContext} from 'react';
import { Container, Grid} from "@mui/material";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import {Context} from "../../index";
import firebase from "firebase";


const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log('user in login')
        console.log(user)
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Grid style={{width:400, background: 'lightblue'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login} variant="contained">Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
