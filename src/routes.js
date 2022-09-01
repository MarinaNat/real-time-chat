import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Login />
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        element: <Chat />
    }
]
