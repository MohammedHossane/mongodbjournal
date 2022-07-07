import {useEffect, useState} from 'react';
import axios from 'axios'
function JournalList() {
    // holds our journal list data
   const [ list, setList] = useState([]);

   // on component load, fetch journal from server
    useEffect(()=>{

        axios.get('http://localhost:3001/get-all-journals').then((serverResponse) => {
            console.log(serverResponse.data.document) 
            // store list in our state
            setList(serverResponse.data.document);
            console.log(list)
        }).catch((e) => {
            console.log(e);
        })

    }, [])

    const deleteForm = (id) => {
        console.log(id)
        axios.delete('http://localhost:3001/delete-journal', {data: {_id: id}});
        const getlistagain = list.filter( e => e._id !== id );
        setList(getlistagain);
    }

  return (
    <div className="App">
        {list.map((journal) => (<div key={journal._id}>
            <h1>{journal.title}</h1>
            <p>{journal.content}</p>
            <button onClick={() => deleteForm(journal._id)}> Delete </button>
        </div>))}
    </div>
  );
}



export default JournalList;
