import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
<div data-aos="zoom-in">
    <h2 className='text-4xl md:text-5xl '>Technologies I work with</h2>
    <p className='text-gray-500 pt-2'>
I have a solid foundation in HTML, CSS, and Adobe Photoshop, with experience in designing and developing responsive web pages and visual content. I am also proficient in MS Office, enabling me to handle a variety of office tasks efficiently. Currently, I am expanding my skill set by learning JavaScript, TypeScript, and Next.js, and actively working on projects to deepen my understanding and expertise in these technologies. I am passionate about continuous learning and enhancing my abilities to create dynamic and user-friendly web applications.
    </p>
</div>
<div>
    <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
    <div className='space-y-2'>
  <h2 className='text-green-500' data-aos="zoom-in">HTML</h2>
  <h2 className='text-green-500' data-aos="zoom-in">CSS</h2>
  <h2 className='text-green-500' data-aos="zoom-in">JavaScript</h2>
</div>
<div className='space-y-2'>
  <h2 className='text-green-500' data-aos="zoom-in">TypeScript</h2>
  <h2 className='text-green-500' data-aos="zoom-in">Next.js</h2>
  <h2 className='text-green-500' data-aos="zoom-in">React.js</h2>
</div>

            </div>
    </div>
</div>
        </div>
  )
}

export default Skills
