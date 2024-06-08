import { useEffect, useState } from "react";
import axios from "axios";

function ViewAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);

  let res;
  async function getAnnouncements() {
    res = await axios.get('http://localhost:4000/admin-api/announce');
    if(Array.isArray(res.data.payload)){
      setAnnouncements(res.data.payload);
    }
    console.log(res.data);
  }

  useEffect(() => {
    getAnnouncements();
  },[])
    // let announcements = [
    //     {title: "Announcement 1", content: "This is announcement 1", date: "2022-01-01", creator:"admin"},
    //     {title: "Announcement 2", content: "This is announcement 2", date: "2022-01-01", creator:"abhinav"},
    //     {title: "Announcement 3", content: "This is announcement 3", date: "2022-01-01", creator:"goodboi"}
    // ]
  return (
    <div>
        <h3 className='d-flex justify-content-center'>Announcements</h3>
        {announcements.slice().reverse().map((announcement, index) => (
            <div key={index} className='m-3 p-3 card bg-light'>
              
              <h4 className="card-header head" style={{backgroundColor:'#4682b4',color:'black'}}>{announcement.title}</h4>
              <div className="card-body">
                <p className='lead fs-3 card-text'>{announcement.content}</p>
                  <div className='d-flex justify-content-between'>
                    <p>{announcement.date}</p>
                    <p className='d-flex '>{announcement.username}</p>
                  </div>
  
              </div>
                
            </div>
        ))}
    </div>
  )
  }
  export default ViewAnnouncements;