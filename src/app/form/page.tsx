"use client"


import { FilterProvider } from "../../components/FilterContext";
import App from "./App"

export default function RootLayout({children}:{

    children:React.ReactNode
}){


    return(
        <html lang = "en">
            <body>
                <FilterProvider>
                    <App />
                    {children}
                    
                </FilterProvider>
            </body>
        </html>
    )
}
