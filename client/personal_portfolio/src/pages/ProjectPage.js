import { useState, useEffect } from "react";
import axios from "axios";

// router
import { useParams } from "react-router-dom";

export const ProjectPage = () => {
   const { projectId } = useParams();
   console.log(projectId);
   const [ project, setProject ] = useState([]);

    useEffect(() => {
       const getProjectList = () => {
          const options = {
             method: 'GET',
             url: `http://localhost:5500/projects/${projectId}`,
             params: {id: projectId }, 
             headers: {}
          };
          
          
          axios.request(options).then(function(response) {
             setProject(response.data);
             console.log(response.data)
          }).catch(function (error) {
             console.error(error);
          })
       } 
       getProjectList()
    }, [ projectId ])

    return (
        <div>
            <p>{project.header_picture}</p>
        </div>
    )
}