import './Main.css';
import { useRef, useState } from 'react';

import axios from "axios";

import writingsArr from './writing.json';
const writingsArrRev = [...writingsArr].reverse();

const getRandomUser = async () => {
  try {
    const data = await axios.get("https://random-data-api.com/api/users/random_user");
    return data;
  } catch(err) {
    console.log("error: ", err);
  }
}

const Main = () => {

  const initialInfo = {
    login: false,
    name: '',
    birthDate: '',
    address: '',
    email: '',
    phoneNumber: '',
    subscription: {},
    employment: '',
    alert: false,
    showPersonalData: false
  }

  const [info, setInfo] = useState(initialInfo);

  const nameInput = useRef();
  const pwInput = useRef();

  const { login, name, birthDate, address, email, phoneNumber, subscription, employment, alert, showPersonalData } = info;

  const submitUser = () => {

    if(!nameInput.current.value || !pwInput.current.value) {
      setInfo({
        ...info,
        alert: true
      });
      
      nameInput.current.value = '';
      pwInput.current.value = '';

      return;
    }

    getRandomUser()
      .then(raw => {
        
        nameInput.current.value = '';
        pwInput.current.value = '';

        const {country, state, city, street_name, street_address, zip_code} = raw.data.address;
        setInfo({
          ...info,
          login: true,
          name: raw.data.first_name + ' ' + raw.data.last_name,
          birthDate: raw.data.date_of_birth,
          address: `${street_address}, ${street_name}, ${city}, ${state}, ${zip_code} ${country}`,
          email: raw.data.email,
          phoneNumber: raw.data.phone_number,
          subscription: raw.data.subscription,
          employment: raw.data.employment.title,
          alert: false
        })

      });
  }

  const logoutUser = () => {
    setInfo({
      ...info,
      ...initialInfo
    });
  }
  const showUserData = () => {
    setInfo({
      ...info,
      showPersonalData: !info.showPersonalData
    })
  }

  const showDataStyle = {transform: "rotate(180deg)"}

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <h1>Login Mini Project</h1>
        </header>
        <section className="App-section">
          <div className="input-box">
            { 
              login ?
                <input className="logout-btn" type="button" value="Logout" onClick={logoutUser} />
              :
                <>
                  <label>User Name</label>
                  <input name="housename" type="text" placeholder="User Name" ref={nameInput} required autoFocus />
                  <label>Password</label>
                  <input name="password" type="password" placeholder="Password" ref={pwInput} required />
                  <input type="button" value="Login" onClick={submitUser} />
                </>
            }
            {alert && <p className="alert-msg">You need to enter both id and pw</p>}
          </div>
          {
            login && <div className="output-box">
              <p className="personal-data-hello"><strong>{login && `Wellcome, ${name}`}</strong></p>
              <span className="show-personal-data-btn" onClick={showUserData} style={showPersonalData ? showDataStyle : {}}>{showPersonalData ? "close" : "show"}</span>
              <div className="personal-data-box">
                {
                  showPersonalData && 
                    <>
                      <p><strong>Date of Birth : </strong> {birthDate}</p>
                      <p><strong>Address : </strong> {address}</p>
                      <p><strong>Email : </strong> {email}</p>
                      <p><strong>Phone Number : </strong> {phoneNumber}</p>
                      <p><strong>Job : </strong> {employment}</p>
                      <p><strong>Subscription : </strong> {subscription ? "yes" : "no"}</p>
                    </>
                }
              </div>
            </div>
          }
          {
            login && <div className="table-box">
              <table>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    writingsArrRev.map((item, idx) => {
                      return (
                        <tr key={writingsArrRev.length - idx}>
                          <td>{writingsArrRev.length - idx}</td>
                          <td>{item.title}</td>
                          <td>{item.author}</td>
                          <td>{item.date}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          }
        </section>
      </div>
    </div>
  );
}

export default Main;
