import { title } from 'process'
import React from 'react'
import Heading from './Heading';
import Card from './Card'

const data = [
    {
      id: 0,
      title: "Static Resume Builder",
      desc: "A React & Typescript app for building and managing static resumes using HTML and CSS.",
      img: "/Screenshot 2024-11-10 044310.png",
      tags: ["HTML", "CSS", "Typescript"]
    },
    {
        id: 1,
        title: "Dynamic Resume Builder",
        desc: "A React & Typescript app for building and managing dynamic resumes using HTML and CSS.",
        img: "/Screenshot 2024-11-10 045328.png",
        tags: ["HTML", "CSS", "Typescript"]  
    },
    {
      id: 3,
      title: "Mobile Collection",
      desc: "A static mobile collection website built using HTML and CSS.",
      img: "/Screenshot 2024-11-10 050709.png",
      tags: ["HTML", "CSS"]
    },
    
  ];
  
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading  title='myprojects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags} />))}

      </div>
    </div>
  )
}

export default Projects;
