import { useState, useEffect } from "react"
import axios from "axios"; 

// Components
import { Project } from "../components/Project";

// Home page should really be more about nav?
export const HomePage = () => {
   const [ projects, setProjects ] = useState([]);

   useEffect(() => {
      const getProjectList = () => {
         const options = {
            method: 'GET',
            url: 'http://localhost:5500/projects',
            headers: {}
         };
         
         axios.request(options).then(function(response) {
            setProjects(response.data);
            console.log(response.data)
         }).catch(function (error) {
            console.error(error);
         })
      } 
      getProjectList()
   }, [])

   return (
      <div className="home">
         {
            projects.map((project, index) => {
               return (
                  <Project key={index} project={project}/>
               )
            })
         }
      </div>
   )

}