import React from 'react'
import Course  from './Course'
import './courses-list.css'

const CoursesList = ( props ) => (
  <ul>
    {
      props.courses.map(course => (
        <Course
          key={course.id}
          id={course.id}
          name={course.name}
          poster={course.poster}
          url={course.url}
          amount={course.amount}
          teacher={course.teacher}
          date={course.date}
          categories={course.categories}
        />
      ))
    }
  </ul>
)

export default CoursesList