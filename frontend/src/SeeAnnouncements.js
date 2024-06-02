import React from 'react'

function SeeAnnouncements() {
    let announcements = [
        {title: "Fee Payment", content: "Please pay the fees by 15th January", date: "2022-01-01", creator:"admin"},
        {title: "CRC meeting", content: "All the CR's are requested to gather in KS audi today evening.", date: "2022-01-01", creator:"abhinav"},
        {title: "Punctuality", content: "All the students are requested to come in the bus on time.", date: "2022-01-01", creator:"goodboi"}
    ]
  return (
    <div>
        <h3 className='d-flex justify-content-center'>Announcements</h3>
        {announcements.map((announcement, index) => (
            <div key={index} className='m-3 p-3 border'>
                <h4>{announcement.title}</h4>
                <p className='lead fs-4'>{announcement.content}</p>
                <div className='d-flex justify-content-between'>
                    <p>{announcement.date}</p>
                    <p className='d-flex justify-content-end'>{announcement.creator}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SeeAnnouncements