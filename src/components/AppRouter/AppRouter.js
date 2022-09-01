import React, {useContext,  useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../../routes";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../index";

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
                <Route key={path} path={path} element={element}/>
                )}
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element}/>
                )}
            </Routes>
        )
};

export default AppRouter;
