import { createSlice } from "@reduxjs/toolkit";
import DashboardData from "../constant/data.json";

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    data: DashboardData,
    searchValue : ""
  },
  reducers: {
    addWidgetData: (state, action) => {
      const { id, widgetData } = action.payload;
      state.data.map((data) => {
        if (data._id === id) {
          return data.widget.push(widgetData);
        }
      });
    },
    removeWidgetData: (state, action) => {
      const { dashboardId, widgetName } = action.payload;
      console.log(dashboardId, widgetName);
       state.data.map((data) => {
        if (data._id === dashboardId) {
          data.widget = data.widget.filter((data=>{
               return data.name !==widgetName
           }))
             
        } 
      });
      },
      addSearchValue : (state, action) =>{
        state.searchValue = action.payload
      }
  },
})
export const { addWidgetData, removeWidgetData,addSearchValue } = DashboardSlice.actions;
export default DashboardSlice.reducer;
