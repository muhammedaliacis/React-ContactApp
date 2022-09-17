import {useState} from 'react'
import "./styles.css"
const defaultForm = {fulname: "", phonenumber: ""};
function Form({addContact, contacts, data}) {
    const [form, setForm] = useState(defaultForm);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) =>{
        e.preventDefault(e);
        addContact([...contacts, form]);
        setForm(defaultForm);
        data.push(form)
        localStorage.setItem("items", JSON.stringify(data))
    }
  return (
    <div className='form'>
        <div>
            <input 
             id='input'
             name='fulname'
             placeholder='Full Name'
             value={form.fulname}
             onChange={onChangeInput}>
            </input>
        </div>
        <div>
            <input
             id='input'

            name='phonenumber' 
            placeholder='Phone Number'
            value={form.phonenumber}

            onChange={onChangeInput}>
        </input>
        </div>

        <div>
            <button typeof='click' onClick={onSubmit}>Add</button>
        </div>
    </div>
  )
}

export default Form
