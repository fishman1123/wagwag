import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { RouterObject } from './RouterList'; // Import RouterObject instead of RouterList
import './styles/index.css';
import {RecoilRoot} from "recoil";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RecoilRoot>
            <RouterProvider router={RouterObject} />
        </RecoilRoot>
    </StrictMode>,
)
