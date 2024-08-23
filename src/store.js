import { configureStore } from "@reduxjs/toolkit";
import dashboardData from './slice/dashboardSlice'
 

 export const store = configureStore({
    reducer : {
        dashboardData  : dashboardData
    }
 })