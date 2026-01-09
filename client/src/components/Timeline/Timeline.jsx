import './Timeline.css'

const Timeline = ({items}) => {
  return (
    <section className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <span className="timeline-year">{item.year}</span>
          <div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Timeline
