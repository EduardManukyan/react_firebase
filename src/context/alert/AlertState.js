import React, { useReducer } from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../type";
import { AlertContext } from "./AlertContext";
import { alertReducer } from "./AlertReducer";

export const AlertState = ({ children }) => {
    const [state, dispatch] = useReducer(alertReducer, { visible: false })

    const show = (text, type = "warning") => {
        console.log(text, type)
        dispatch({
            type: SHOW_ALERT,
            payloade: { text, type }
        })
    }

    const hide = () =>{
       return dispatch({ type: HIDE_ALERT })

    } 

    return (
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}