import axios from 'axios'
import { useState } from 'react';

function JournalAdd(){
    const [form, setForm]=useState({
       title: "",
        content: ""

    });
    
    const submitNew = () => {
        const newForm = {...form}
        axios.post('http://localhost:3001/add-journal', newForm)
    }

    const updateForm = (value) => {
        return setForm(prev =>{
            return {...prev, ...value}
        })
    }

    return (
        <div>
            <h1>Add Journals Here</h1>
            <form onSubmit={submitNew}>

                <div>
                    Title:
                    </div>
                    <div>
                    <input type="text" name="name" value={form.title} onChange={(e) => updateForm ({ title: e.target.value })}/>
                </div>

                <div>
                    Content:
                    </div>
                    <div>
                    <input type="text" name="name" value={form.content} onChange={(e) => updateForm ({ content: e.target.value })}/>
                </div>
                <button type='submit' value='addjournal'>Submit</button> 
                
            </form>
        </div>
    )
}

export default JournalAdd;


