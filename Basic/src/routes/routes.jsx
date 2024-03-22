
// Make sure to import the components correctly

import EventDetails from "../pages/EventDetails";
import EventList from "../pages/EventList";
import FilterEvents from "../pages/FilterEvent";


export const routes = [
  {path:'/', element: <EventDetails />}, // Note: Corrected component import
  {path:'/find-events', element: <FilterEvents/>}, // Note: Corrected component import
  {path:'/events/:id', element: <EventList />} // Note: Corrected component import
];
