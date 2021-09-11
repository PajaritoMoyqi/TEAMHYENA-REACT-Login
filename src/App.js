import './App.css';
import { useRef, useState } from 'react';

import axios from "axios";

const getRandomUser = async () => {
  try {
    const data = await axios.get("https://random-data-api.com/api/users/random_user");
    return data;
  } catch(err) {
    console.log("error: ", err);
  }
}

const App = () => {

  const initialInfo = {
    login: false,
    name: '',
    birthDate: '',
    address: '',
    email: '',
    phoneNumber: '',
    subscription: {},
    employment: ''
  }

  const [info, setInfo] = useState(initialInfo);

  const nameInput = useRef();
  const pwInput = useRef();

  const { login, name, birthDate, address, email, phoneNumber, subscription, employment } = info;

  const submitUser = () => {

    getRandomUser()
      .then(raw => {
        const {country, state, city, street_name, street_address, zip_code} = raw.data.address;
        setInfo({
          ...info,
          login: true,
          name: raw.data.first_name + raw.data.last_name,
          birthDate: raw.data.date_of_birth,
          address: `${street_address}, ${street_name}, ${city}, ${state}, ${zip_code} ${country}`,
          email: raw.data.email,
          phoneNumber: raw.data.phone_number,
          subscription: raw.data.subscription,
          employment: raw.data.employment.title
        })

        nameInput.current.value = '';
        pwInput.current.value = '';
      });
  }

  const logoutUser = () => {
    setInfo({
      ...info,
      ...initialInfo
    });
  }

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <h1>Login Mini Project</h1>
        </header>
        <section className="App-section">
          <div className="input-box">
              <input type="button" value="Logout" onClick={logoutUser} />
              <label>User Name</label>
              <input name="housename" type="text" placeholder="User Name" ref={nameInput} required autoFocus />
              <label>Password</label>
              <input name="password" type="password" placeholder="Password" ref={pwInput} required />
              <input type="button" value="Login" onClick={submitUser} />
          </div>
          <div className="output-box">
            <p><strong>{login && `${name}님 반갑습니다.`}</strong></p>
            {login && <p><strong>Date of Birth : </strong> {birthDate}</p>}
            {login && <p><strong>Address : </strong> {address}</p>}
            {login && <p><strong>Email : </strong> {email}</p>}
            {login && <p><strong>Phone Number : </strong> {phoneNumber}</p>}
            {login && <p><strong>Employment : </strong> {employment}</p>}
            {login && (<p><strong>Subscription : </strong> {subscription ? "yes" : "no"}</p>)}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
