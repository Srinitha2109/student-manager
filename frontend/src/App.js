import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import CoordProfile from './Coord/CoordProfile';
import CoordRoot from './Coord/CoordRoot';
import CoordAnnouce from './Coord/CoordAnnouce';
import StudentRoot from './Student/StudentRoot';
import AdminRoot from './Admin/AdminRoot';
import StudentProfile from './Student/StudentProfile';
import StudentAnnoucements from './Student/StudentAnnouncements';
import AdminProfile from './Admin/AdminProfile';
import AdminAnnoucements from './Admin/AdminAnnouncements';
import StudentList from './Admin/StudentList';
import TeachersList from './Admin/TeachersList';
import Courses from './Admin/Courses';
import TeacherDetails from './Admin/TeacherDetails';
import StudentDetails from './Admin/StudentDetails';
import RegisterCoord from './Admin/RegisterCoord';
import RegisterStudent from './Admin/RegisterStudent';
import StudentToDo from './Student/StudentToDo';
import CreateClass from './Admin/CreateClass';
import Schedule from './Student/Schedule';


function App() {

  let router = createBrowserRouter([
    {
    path:'',
    element:<Login/>,
    },
    {
      path:'coord',
      element:<CoordRoot/>,
      children:[
        {
          path:'',
          element:<CoordProfile/>,
        },
        {
          path:'announce',
          element:<CoordAnnouce/>,
        }
      ]
    },
    {
      path:'student',
      element:<StudentRoot/>,
      children:[
        {
          path:'',
          element:<StudentProfile/>,
        },
        {
          path:'announce',
          element:<StudentAnnoucements/>,
        },
        {
          path:'todo',
          element:<StudentToDo/>,
        },
        {
          path:'class',
          element:<Schedule/>
        }
      ]
    },
    {
      path:'admin',
      element:<AdminRoot/>,
      children:[
        {
          path:'',
          element:<AdminProfile/>,
        },
        {
          path:'announce',
          element:<AdminAnnoucements/>,
        },
        {
          path:'coords',
          element:<TeachersList/>,
        },
        {
          path:'students',
          element:<StudentList/>,
        },
        {
          path:'courses',
          element:<Courses/>,
        },
        {
          path:'coords/coord-details/:id',
          element:<TeacherDetails/>
        },
        {
          path:'students/student-details/:id',
          element:<StudentDetails/>
        },
        {
          path:'new-coord',
          element:<RegisterCoord/>
        },
        {
          path:'new-student',
          element:<RegisterStudent/>
        },
        {
          path:'create-class',
          element:<CreateClass/>
        }
      ]
    }
    
        
  ])



  return (
    <RouterProvider router={router}/>
  );
}

export default App;
