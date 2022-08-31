import React, {useContext,  useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../index";
import Chat from '../Chat/Chat';
import Login from '../Login/Login';

const AppRouter = () => {

    const navigate = useNavigate();
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    useEffect(() => {
        if(user) {
            navigate("/chat");
        } else {
            navigate("/login")
        }
      }, [user, navigate]);

    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, element}) => 
                <Route key={CHAT_ROUTE} path={CHAT_ROUTE} element={<Chat />}/>
                )}
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, element}) => 
                <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} element={<Login />}/>
                )}
            </Routes>
        )
};

export default AppRouter;
