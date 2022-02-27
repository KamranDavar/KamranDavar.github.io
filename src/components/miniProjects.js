import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="mini">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Mini Projects</h1>
          </Fade>
          <Fade bottom>
            <p>Mini projects with public code base(you could not see with Iran IP).</p>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.miniProjects.map(project => (
                <Card
                  key={project.id}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  disable={project.disable}
                  github={project.github}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
