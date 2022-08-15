// import logo from './logo.svg';
import './App.css';

import { useState, createContext, useContext } from "react";
import Content from "./Content.js";

//! Example 1
//todo: Nhận thưởng

// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keyboard',
// ]

// function App() {
//   const [gift, setGift] = useState()

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)

//     setGift(gifts[index])
//   }

//   return (
//     <div style={{padding: 30}}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   )
// }

//! Example 2
//todo: Lấy ra value của input

// function App() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')

//   const handleSubmit = () => {
//     console.log({
//       name,
//       email
//     });
//   }

//   return (
//     <div style={{padding: 30}}>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

//! Example 3
//todo: Checkbox, Radio các courses

// const courses = [
//     {
//         id: 1,
//         name: 'HTML, CSS'
//     },
//     {
//         id: 2,
//         name: 'JavaScript'
//     },
//     {
//         id: 3,
//         name: 'ReactJS'
//     },
// ]

// function App() {
//     const [checked, setChecked] = useState([])

//     console.log(checked);

//     const handleCheck = (id) => {
//         setChecked(prev => {
//             const isChecked = checked.includes(id)
//             if(isChecked) {
//                 return checked.filter(item => item !== id)
//             } else {
//                 return [...prev, id]
//             }

//         })
//     }

//     const handleSubmit = () => {
//         console.log({ id: checked });

//     }

//     return (
//         <div style={{ padding: 32 }}>
//             {courses.map(course => (
//                 <div key={course.id}>
//                     <input
//                         type='checkbox'
//                         checked={checked.includes(course.id)}
//                         onChange={() => handleCheck(course.id)}
//                     />
//                     {course.name}
//                 </div>
//             ))}

//             <button onClick={handleSubmit}>Register</button>

//         </div>

//     )
// }

//! Example 4
//todo: Xây dựng ADD trong todoList

// function App() {
//     const [job, setJob] = useState('')
//     const [jobs, setJobs] = useState(() => {
//         //* Toi uu hoa JSON
//         const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//         return storageJobs ?? []
//     })

//     const handleSubmit = () => {
//         setJobs(prev => {
//             const newJobs = [...prev, job]

//             //* Luu vao local Storage
//             const jsonJobs = JSON.stringify(newJobs)
//             localStorage.setItem('jobs', jsonJobs)

//             return newJobs
//         })
//         setJob('')
//     }

//     return (
//         <div style={{padding: 30}}>
//             <input
//                 value={job}
//                 onChange={e => setJob(e.target.value)}
//             />
//             <button onClick={handleSubmit}>Add</button>

//             <ul>
//                 {jobs.map((job, index) => (
//                     <li key={index}>{job}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

//! Example 5
//todo: Mounted & Unmounted

// function App() {
//     const [show, setShow] = useState(false)

//     return (
//         <div style={{ padding: 30 }}>
//             <button onClick={() => setShow(!show)}>Togger</button>
//             {show && <Content />}
//         </div>
//     )
// }

//! Example 6
//todo: useContent hook

// import "./App.css";
// import { ThemeContext } from './ThemeContext'

// function App() {
//     const context = useContext(ThemeContext)

//   return (
//       <div style={{ padding: 30 }}>
//         <button onClick={context.toggleTheme}>Toggle theme</button>
//         <Content />
//       </div>
//   );
// }

//! Example 7
//todo: Global State with Context + useReducer

// import { useRef, useEffect } from "react";
// import { useStore, actions, keypress } from "./store";

// function App() {
//   const [state, dispatch] = useStore();
//   const { todoInput, todos } = state;

//   const todoRef = useRef();
//   const valueRef = todoRef.current;

//   const [checked, setChecked] = useState(false);
//   const [indexEdit, setIndexEdit] = useState();

//   useEffect(() => {
//     todoRef.current.addEventListener(
//       "keypress",
//       checked ? keypress.handleEnterUpdate : keypress.handleEnterAdd
//     );

//     return () => {
//       todoRef.current.removeEventListener(
//         "keypress",
//         checked ? keypress.handleEnterUpdate : keypress.handleEnterAdd
//       );
//     };
//   }, [checked]);

//   //todo: Handle Event

//   function handleAdd() {
//     dispatch(actions.addTodo(todoInput));
//     dispatch(actions.setTodoInput(""));

//     todoRef.current.focus();
//   }

//   function handleDelete(index) {
//     dispatch(actions.deleteTodo(index));
//   }

//   function handleClearAll() {
//     dispatch(actions.clearAllTodo());
//   }

//   function handleEdit(todo, index) {
//     let newValue = valueRef.value;
//     newValue = todo;
//     dispatch(actions.setTodoInput(newValue));

//     todoRef.current.focus();

//     setChecked(true);
//     setIndexEdit(index);
//   }

//   function handleCancel() {
//     dispatch(actions.setTodoInput(""));
//     todoRef.current.focus();

//     setChecked(false);
//   }

//   function handleUpdate() {
//     dispatch(actions.updateTodo(todoInput, indexEdit));
//     dispatch(actions.setTodoInput(""));
//     todoRef.current.focus();

//     setChecked(false);
//   }

//   //! Render ra Website

//   return (
//     <div style={{ padding: 30 }}>
//       <h1>TODO</h1>
//       <input
//         ref={todoRef}
//         value={todoInput}
//         placeholder="Enter todo ..."
//         onChange={(e) => {
//           dispatch(actions.setTodoInput(e.target.value));
//         }}
//       />
//       {checked ? (
//         <div>
//           <button id="myBtn-update" onClick={handleUpdate}>
//             Update
//           </button>
//           <button onClick={handleCancel}>Cancle</button>
//         </div>
//       ) : (
//         <button id="myBtn-add" onClick={todoInput === "" ? null : handleAdd}>
//           Add
//         </button>
//       )}
//       <h5>TodoLists :</h5>
//       <ul>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <button style={{ marginLeft: 50 }} onClick={handleClearAll}>
//             Clear All
//           </button>
//         </div>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleEdit(todo, index)}>Edit</button>
//             <span
//               style={{
//                 marginLeft: 10,
//                 cursor: "pointer",
//               }}
//               onClick={() => handleDelete(index)}
//             >
//               &times;
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }







//! Example 1 ( React Router v6 )
//todo: Test React Router

import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'

function App() {

  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/news' element={ <NewsPage /> }/>
        <Route path='/contact' element={ <ContactPage /> }/>
      </Routes>

    </div>
  )
}

export default App;
