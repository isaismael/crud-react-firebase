import { db } from "../data/firebase"
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react"

export const AddTodo = () => {

    const[title, setTitle] = useState([]);
    const Insertar = async (e) => {
        e.preventDefault();
        if(title !== ''){
            await addDoc(collection(db, 'todos'),{
                title,
                completed: false
            });
            setTitle('')
        }
    }

  return (
    <form onSubmit={Insertar}>
        <div>
            <input type="text" 
            placeholder="Ingresar Tarea..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="btn_container">
          <button>Insertar</button>
        </div>
    </form>
  )
}