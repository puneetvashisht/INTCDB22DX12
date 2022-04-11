import React, { useState } from 'react'
import Card from './Card'

export default function ViewCoures() {

    const [courses, setCourses] = useState([
        {title: 'Angular', summary: 'Framework from google!'},
        {title: 'React', summary: 'Library from facebook!'},
        {title: 'Ember', summary: 'Framework from google!'},
        {title: 'CanJS', summary: 'Library from facebook!'}
    ])


    let courseList = courses.map((course, i) => <Card key={i} title={course.title}></Card>)

  return (
    <div className="row">
        
            {courseList}
       
    </div>
  )
}
