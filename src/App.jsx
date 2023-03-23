import "./App.css";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./data/firebase";
import { useState, useEffect } from "react";

function App() {
  //
  const [todos, setTodos] = useState([]);

  //
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  //
  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  //
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todo", id));
  };

  return <div className="App"></div>;
}

export default App;
