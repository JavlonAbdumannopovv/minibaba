import React from "react";
import HomeHeader from "../_components/header";



export default function RFQLayout({children}:{children:React.ReactNode}){
    return(
        <div>
            <HomeHeader/>
            <div className="max-w-7xl w-7xl mx-auto px-3">

            {children}
            </div>
        </div>
    )
}

