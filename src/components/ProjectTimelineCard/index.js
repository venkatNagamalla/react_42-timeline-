// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {cardDetails} = props
  const {
    description,
    imageUrl,
    projectTitle,
    projectUrl,
    title,
    duration,
  } = cardDetails
  return (
    <div>
      <img className="project-card-img" src={imageUrl} alt="PROJECT" />
      <div className="title-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="project-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
