// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {cardDetails} = props
  const {courseTitle, description, duration, tagsList} = cardDetails
  return (
    <div>
      <div className="title-container">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <div className="lang-container">
        {tagsList.map(eachLang => (
          <p className="each-lang" key={eachLang.id}>
            <span className="lang">{eachLang.name}</span>
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
