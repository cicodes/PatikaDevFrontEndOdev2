import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues); //2.yöntem input field'ları temizleme
  }, [contacts]); //Bence bunu state ile uğraşmadan yapmak lazım

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") return false;

    console.log(form);

    addContact([...contacts, form]);
    // Bu şekilde yapıp contacts'ı hiç almayabilirdik
    // addContact((prevState) => [...prevState, form]);

    // setForm(initialFormValues); // 1. yöntem:input field'ları temizliyoruz
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Full Name"
            value={form.fullname}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
