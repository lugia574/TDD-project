'use client';

import React, {useEffect, useState} from "react";
import {mockBrower} from './mock-browser';

interface Props{
    className? : string;
    children? : React.ReactNode;
}

export const MswWrapper = (props: Props) =>{
    const [enableMSW, setEnableMSW] = useState(false);

    useEffect(()=>{
        const init = async () =>{
            await mockBrower();
            setEnableMSW(true);
        };
        if (!enableMSW){
            init();
        }
    },[enableMSW]);

    return !enableMSW ? null : <div>{props.children}</div>;
};
