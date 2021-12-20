import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import notes from '../notes'
import CreateArea from './CreateArea';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  )
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setContact(prevValue => {
//       return {
//         ...prevValue,
//         [name]: value
//       };
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input
//           onChange={handleChange}
//           name="fName"
//           value={contact.fName}
//           placeholder="First Name"
//         />
//         <input
//           onChange={handleChange}
//           name="lName"
//           value={contact.lName}
//           placeholder="Last Name"
//         />
//         <input
//           onChange={handleChange}
//           name="email"
//           value={contact.email}
//           placeholder="Email"
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
