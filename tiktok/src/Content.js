import { useState, useEffect, useRef, useMemo, useReducer } from "react";

//! Example 1 (useEffect)
//todo: Dependencies + DOM event

// const tabs = ["posts", "comments", "albums"];

// function Content() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");
//   const [showGoToTop, setShowGoToTop] = useState(false);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);

//   useEffect(() => {
//     const handleSrcoll = () => {
//       setShowGoToTop(window.scrollY >= 200);
//     };

//     window.addEventListener("scroll", handleSrcoll);

//     //* Clearup function
//     return () => {
//       window.removeEventListener("scroll", handleSrcoll);
//     };
//   }, []);

//   return (
//     <div>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           style={
//             type === tab
//               ? {
//                   color: "#fff",
//                   backgroundColor: "#333",
//                 }
//               : {}
//           }
//           onClick={() => {
//             setType(tab);
//           }}
//         >
//           {tab}
//         </button>
//       ))}
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title || post.name}</li>
//         ))}
//       </ul>

//       {showGoToTop && (
//         <button
//           style={{
//             position: "fixed",
//             right: 30,
//             bottom: 30,
//           }}
//           onClick={() => {
//             document.documentElement.scrollTop = 0;
//           }}
//         >
//           Go To Top
//         </button>
//       )}
//     </div>
//   );
// }

//! Example 2
//todo: Timer function

// function Content() {
//     const [time, setTime] = useState(180)

//     useEffect(() => {
//         const timeClear = setTimeout(() => {
//             setTime(time - 1)
//         }, 1000)

//         return () => clearTimeout(timeClear)
//     }, [time])

//     return (
//         <div>
//             {time}
//         </div>
//     )
// }

//! Example 3
//todo: Preview avatar

// function Content() {
//     const [avatar, setAvatar] = useState()

//     //* Tạo useEffect để chống tràn bộ nhớ
//     useEffect(() => {

//         //* Cleanup
//         return () => avatar && URL.revokeObjectURL(avatar.preview)
//     }, [avatar])

//     const handlePreviewAvatar = (e) => {
//         const file = e.target.files[0]

//         file.preview = URL.createObjectURL(file)
//         setAvatar(file)
//     }

//     return (
//         <div>
//             <input
//                 type='file'
//                 onChange={handlePreviewAvatar}
//             />
//             {avatar && (
//                 <img
//                     src={avatar.preview} alt="" width='80%'
//                 />
//             )}
//         </div>
//     )
// }

//! Example 3
//todo: fake Chat App

// const lessons = [
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

// function Content () {

//     const [lessonId, setLessonId] = useState(1)

//     useEffect(() => {

//         window.addEventListener(`lesson-${lessonId}`, handleEvent)

//         return () => {
//             window.removeEventListener(`lesson-${lessonId}`, handleEvent)
//         }
//     }, [lessonId])

//     const handleEvent = ({detail}) => {
//         console.log(detail);
//     }

//     return (
//         <div>
//             <ul>
//                 {lessons.map(lesson => (
//                     <li
//                         key={lesson.id}
//                         style={{
//                             color: lessonId === lesson.id ? 'red' : '#333',
//                             cursor: 'pointer'
//                         }}
//                         onClick={() => setLessonId(lesson.id)}
//                     >
//                         {lesson.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

//! Example 1 (useRef)
//todo: Count down

// function Content() {

//     const [count, setCount] = useState(60)
//     const [checked, setChecked] = useState(true)

//     let timerId = useRef()

//     const handleStart = () => {
//         timerId.current = setInterval(() => {
//             setCount(prev => prev - 1)
//         },1000)

//         setChecked(false)
//     }

//     const handleStop = () => {
//         clearInterval(timerId.current)

//         setChecked(true)
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={checked ? handleStart : null}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     )
// }

//! Example 1 (useMemo hook)
//todo: Add name & price

// function Content () {

//     const [name, setName] = useState('')
//     const [price, setPrice] = useState('')
//     const [products, setProducts] = useState(() => {
//         const storageProd = JSON.parse(localStorage.getItem('prod'))

//         return storageProd ?? []
//     })

//     const handleAdd = () => {
//         setProducts(prev => {
//             const newProd = [...prev, {
//                                 name,
//                                 price : +price
//                             }]

//             //* Save localStorage Products
//             const jsonProd = JSON.stringify(newProd)
//             localStorage.setItem('prod', jsonProd)

//             return newProd
//         })

//         setName('')
//         setPrice('')

//         nameRef.current.focus()
//     }

//     const nameRef = useRef()

//     const total = useMemo(() => {
//         products.reduce((prev, curr) => {
//             return prev + curr.price
//         }, 0)

//     }, [products])

//     return (
//         <div>
//             <input
//                 ref={nameRef}
//                 value={name}
//                 placeholder="Enter name ..."
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <input
//                 value={price}
//                 placeholder="Enter price ..."
//                 onChange={(e) => setPrice(e.target.value)}
//             />
//             <div>
//                 <button onClick={(name === '' || price === '') ? null : handleAdd}>Add</button>
//             </div>
//             <ul>
//                 Total: {total}
//                     {products.map((product, index) => (
//                         <li key={index}>
//                             {product.name} - {product.price}
//                         </li>
//                     ))}
//             </ul>
//         </div>
//     )
// }

//! Example 1 (useReducer)
//todo: Count UP & DOWN

//? Các ứng dụng của useReducer hook (các bước thực hiện):
//?     1. Init state: 0
//?     2. Actions: Up (state + 1) / Down (state - 1)
//?     3. Reducer
//?     4. Dispatch

// const initState = 0
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// const reducer = (state, action) => {
//     switch(action) {
//         case UP_ACTION:
//             return state + 1
//         case DOWN_ACTION:
//             return state - 1
//         default:
//             throw new Error('Invalid action')
//     }
// }

// function Content () {

//     const [count, dispatch] = useReducer(reducer, initState)

//     return  (
//         <div>
//             <h1>{count}</h1>
//             <button
//                 onClick={() => dispatch(DOWN_ACTION)}
//             >
//                 Down
//             </button>
//             <button
//                 onClick={() => dispatch(UP_ACTION)}
//             >
//                 Up
//             </button>
//         </div>
//     )
// }

//! Example 2
//todo: Todo App

// //? 1. Init State
// const storageJobs = JSON.parse(localStorage.getItem('jobs'))

// const initState = {
//   job: "",
//   jobs: storageJobs ?? [],
// };

// //? 2. Actions
// const SET_JOB = "set_job";
// const ADD_JOB = "add_job";
// const DELETE_JOB = "delete_job";

// const setJob = (playload) => {
//   return {
//     type: SET_JOB,
//     playload,
//   };
// };

// const addJob = (playload) => {
//   return {
//     type: ADD_JOB,
//     playload,
//   };
// };

// const deleteJob = (playload) => {
//   return {
//     type: DELETE_JOB,
//     playload,
//   };
// };

// //? 3. Reducer
// const reducer = (state, action) => {
//   let newState;

//   switch (action.type) {
//     case SET_JOB:
//       newState = {
//         ...state,
//         job: action.playload,
//       };
//       break;
//     case ADD_JOB:
//       newState = {
//         ...state,
//         jobs: [...state.jobs, action.playload],
//       };

//       break;
//     case DELETE_JOB:
//       const newJobs = [...state.jobs];

//       newJobs.splice(action.playload, 1);

//       newState = {
//         ...state,
//         jobs: newJobs,
//       };
//       break;

//     default:
//       throw new Error("Invalid action.");
//   }

    // //todo: Save data to localStorage
    // const jsonJobs = JSON.stringify(newState.jobs)
    // localStorage.setItem('jobs', jsonJobs)

//   return newState;
// };

// //? 4. Dispatch

// function Content() {
//   const [state, dispatch] = useReducer(reducer, initState);

//   const { job, jobs } = state;
//   const todoRef = useRef();

//   const handleSubmit = () => {
//     dispatch(addJob(job));
//     dispatch(setJob(""));

//     todoRef.current.focus();
//   };

//   //todo: Keypress "Enter"
//   useEffect(() => {
//     var input = document.getElementById("myInput");
//     input.addEventListener("keypress", function (event) {
//       if (event.key === "Enter") {
//         event.preventDefault();
//         document.getElementById("myBtn").click();
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         id="myInput"
//         ref={todoRef}
//         value={job}
//         placeholder="Enter todo ..."
//         onChange={(e) => dispatch(setJob(e.target.value))}
//       />
//       <button id="myBtn" onClick={job === '' ? null : handleSubmit}>
//         Add
//       </button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//             {job}
//             <span
//               style={{
//                 marginLeft: 10,
//                 cursor: "pointer",
//               }}
//               onClick={() => dispatch(deleteJob(index))}
//             >
//               &times;
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//! Example 1 (useContent)
//todo: useContent() hook

// import Paragragh from "./Paragragh"

function Content() {
//   return (  
//         <div>
//             <Paragragh />
//         </div>
//   );
}

export default Content;
