import "./Devstats.css";
import React from 'react'

const Devstats = ({stats}) => {
  return (
    <section className="devstats">
        {stats.map((items)=>(
            <div key={items.id} className="stat">
                <strong>{items.value}</strong>
                <span>{items.label}</span>
            </div>))}  
    </section>
  )
}

export default Devstats
