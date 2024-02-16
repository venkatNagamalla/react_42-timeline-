// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLine = details => {
    if (details.categoryId === 'PROJECT') {
      return (
        <ProjectTimelineCard key={details.categoryId} cardDetails={details} />
      )
    }
    return <CourseTimelineCard key={details.categoryId} cardDetails={details} />
  }

  return (
    <div className="bg-container">
      <div className="chrono-container">
        <h1 className="main-heading">
          MY JOURNEY OF <br /> <span className="ccbp-heading">CCBP 4.0</span>
        </h1>

        <Chrono
          theme={{
            primary: '#0967d2',
            secondary: '#fff',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachCard => renderTimeLine(eachCard))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
