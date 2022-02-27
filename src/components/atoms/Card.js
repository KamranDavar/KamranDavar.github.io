import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, disable,github  }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        {disable ? (
          <p>this project is not accessible in public now.</p>
        ) : (
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Explore
          </a>
        )}
        {!!github && (
          <a
            href={github ? github : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Source
          </a>
        )}
      </div>
    </div>
  )
}

export default Card
