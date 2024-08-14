import Layout from './Layout.jsx';
import Login from './pages/Login.jsx';
import { createBrowserRouter } from 'react-router-dom';
import BasicSettingRegion from "./pages/BasicSettingRegion.jsx";
import BasicSettingNickName from "./pages/BasicSettingNickName.jsx";
import BasicSettingCategory from "./pages/BasicSettingCategory.jsx";

// Define the RouterList as a function for modularity
export const RouterList = () => [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                path: "/login",
                element: <Login />,
            },
            {
                path: "/region",
                element: <BasicSettingRegion />,
            },
            {
                path: "/nickname",
                element: <BasicSettingNickName />,
            },
            {
                path: "/category",
                element: <BasicSettingCategory />,
            },
        ]
    }
];

// Create the RouterObject using createBrowserRouter and RouterList function
export const RouterObject = createBrowserRouter(RouterList());
