import React from "react"
// import ProjectImage from "../images/projectImage.PNG"
import pandemicImg from "../images/fusion.jpg"
import VolunteerImg from "../images/IMG_VolunteerPic.PNG"
import ProjectImage from "../components/projectImage"
function Projects() {
    const projectList =[
        {
            name: "Volunteer",
            image: VolunteerImg,
            githubUrl:"",
            deployedUrl:"https://apatel922.github.io/Project1/",
            key:"0",

        },
        {
            name: "Pandemic",
            image: pandemicImg,
            githubUrl:"https://github.com/apatel922/Project1",
            deployedUrl:"https://apatel922.github.io/Project1/",
            key:"1"
        },
        {
            name:"Burger Site",
            image:"https://www.burger21.com/wp-content/uploads/2020/02/Tex-Mex.jpg",
            deployedUrl:"https://andrewjhrussell.github.io/burger/",
            githubUrl:"https://github.com/Andrewjhrussell/burger.git",
            key:"2"
        },
        {
            name:"Password Generator",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3DmJ9yjzLf0cAxy9fxYEQgeawh64qmW5Eg_HZKBPqRsR0nFOq&amp;usqp=CAU",
            deployedUrl:"https://andrewjhrussell.github.io/passwordGenerator/",
            githubUrl:"https://github.com/Andrewjhrussell/passwordGenerator.git",
            key:"3"
        },
        
        
    ]

    
    return (
        // <div className="d-flex justify-content-center">
        /* 
        <header>
            <h1>ANDREW RUSSELL</h1><span className="sr-only"></span>
        </header> */
        /* </div> */



        <div className="container">
            <div className="row">
                {projectList.map((proj)=><ProjectImage key={proj.key} info={proj}/>)}
            </div>
        </div>
    )
}

export default Projects
