import { useCallback, useState } from "react";
import Navigation from "../components/Navigation";
import FilterBox from "../components/FilterBox";
import SearchEventList from "../components/SerachEventList";
import './FilterEvent.css';
const FilterEvent = ()=>{
   const [monthYear,setMonthYear]=useState({
    selectedMonth:null,
    selectedYear:null
   })
   const getMonthYear = useCallback((selectedMonth,selectedYear)=>{
      setMonthYear({selectedYear,selectedMonth})
   },[])
   
    return(
      <div>
         <Navigation />
         <div className="find-events-wrapper">
          <FilterBox getMonthYear={getMonthYear}/>
          <SearchEventList monthYear={monthYear}/>
        </div>
      </div>
    )
  }
  export default FilterEvent;