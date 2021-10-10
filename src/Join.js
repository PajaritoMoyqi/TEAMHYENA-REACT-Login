import './Join.css';
import { useRef, useReducer } from 'react';


const nameReducer = (state, action) => {
  switch (action.type) {
    case 'SPECIAL CARACTER':
      return '특수문자를 포함할 수 없습니다.';
    case 'LENGTH':
      return '아이디는 4개 이상, 10개 이하의 영문자 및 숫자로 이루어져야 합니다.';
    default:
      return '';
  }
}

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'TOO SIMPLE':
      return '영문자, 숫자, 특수문자가 하나 이상씩 들어가야 합니다.';
    case 'LENGTH':
      return '비밀번호는 4개 이상, 16개 이하의 영문자, 숫자, 특수문자의 조합로 이루어져야 합니다.';
    default:
      return '';
  }
}

const password2Reducer = (state, action) => {
  switch (action.type) {
    case 'DIFFERENT':
      return '위에 입력한 비밀번호와 다릅니다.';
    default:
      return '';
  }
}


const Join = () => {

  const [name, nameDispatch] = useReducer(nameReducer, '');
  const [password, passwordDispatch] = useReducer(passwordReducer, '');
  const [password2, password2Dispatch] = useReducer(password2Reducer, '');

  const nameInput = useRef();
  const pwInput = useRef();
  const pwInput2 = useRef();

  const numberPattern = /[0-9]/;
  const letterPattern = /[a-zA-Z]/;
  const specialCharacterPattern = /[~!@#$%^&*()_+|<>?:{}]/;

  const nameChange = () => {
    const userInput = nameInput.current.value;

    if(userInput.length<4 || userInput.length>10){
      nameDispatch({type: 'LENGTH'})
    }else if(specialCharacterPattern.test(userInput)){
      nameDispatch({type: 'SPECIAL CARACTER'})
    }else{
      nameDispatch({type: ''})
    }
  }

  const passwordChange = () => {
    const userInput = pwInput.current.value;

    if(userInput.length<4 || userInput.length>16){
      passwordDispatch({type: 'LENGTH'})
    }else if(!specialCharacterPattern.test(userInput) || !letterPattern.test(userInput) || !numberPattern.test(userInput)){
      passwordDispatch({type: 'TOO SIMPLE'})
    }else{
      passwordDispatch({type: ''})
    }
  }

  const password2Change = () => {
    const userInput = pwInput2.current.value;

    if(!(userInput===pwInput.current.value)){
      password2Dispatch({type: 'DIFFERENT'})
    }else{
      password2Dispatch({type: ''})
    }
  }

  return (
    <div className="Join">
      <label>User Name</label>
      <input name="housename" type="text" placeholder="User Name" ref={nameInput} required autoFocus onChange={nameChange} />
      <p className="username-verify">
        {name}
      </p>
      <label>Password</label>
      <input name="password" type="password" placeholder="Password" ref={pwInput} required onChange={passwordChange} />
      <p className="password-verify">
        {password}
      </p>
      <label>Password verification</label>
      <input name="password" type="password" placeholder="Password" ref={pwInput2} required onChange={password2Change} />
      <p className="password2-verify">
        {password2}
      </p>
      <input type="button" value="Join" />
    </div>
  )
}

export default Join;
