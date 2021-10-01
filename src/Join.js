import './Join.css';
import { useRef } from 'react';


const Join = () => {

  const nameInput = useRef();
  const pwInput = useRef();
  const pwInput2 = useRef();

  return (
    <div className="Join">
      <label>User Name</label>
      <input name="housename" type="text" placeholder="User Name" ref={nameInput} required autoFocus />
      <label>Password</label>
      <input name="password" type="password" placeholder="Password" ref={pwInput} required />
      <label>Password verification</label>
      <input name="password" type="password" placeholder="Password" ref={pwInput2} required />
      <input type="button" value="Join" />
    </div>
  )
}

export default Join;
