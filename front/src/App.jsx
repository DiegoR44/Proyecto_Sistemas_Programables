
import React from "react"
import Home from "./components/Home"
import { DataProvider } from "./Context";

export default function App() {
    return (
        <>
            <DataProvider>
                <Home />
              
            </DataProvider>
        </>
    );
}