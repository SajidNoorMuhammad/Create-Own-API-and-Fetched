import React from 'react'

const Course = async () => {

    let course = await fetch('http://localhost:3000/api/course')
    course = await course.json();
    console.log(course);

    return (
        <div>
            <h1 className=' text-3xl text-fuchsia-800 font-bold underline bg-fuchsia-400 p-3 text-center'>Courses</h1>

            <div className=' grid grid-cols-4 container mx-auto gap-4 mt-6'>
                {
                    course.course.map((data) => (
                        <div key={data.id} className=' bg-fuchsia-100 border-2 border-fuchsia-600 rounded p-3 space-y-2'>
                            <h1><span className=' font-bold'>Title: </span> {data.title}</h1>
                            <h1><span className=' font-bold'>Duration: </span> {data.duration}</h1>
                            <h1><span className=' font-bold'>Timing: </span> {data.timing}</h1>
                            <h1><span className=' font-bold'>Teacher: </span> {data.teacher}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Course;
