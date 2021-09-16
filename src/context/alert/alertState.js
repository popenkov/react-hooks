import React from "react";
import { AlertContext } from "./alertContext";

//в стейте мы пишем, логику для алерта
// а в самом алерте мы получаем доступ к контексту и выводить данные
export const AlertState = ({children}) => {

    return (
        // передача контекста
        <AlertContext.Provider>
            {children}
        </AlertContext.Provider>
    )
}