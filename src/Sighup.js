import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import firebase from './firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("비밀번호가 다릅니다");
      return;
    }
  
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password); 
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError(null);
      setLoading(false);
      alert("회원가입 성공");
      navigate('/login');
    } catch (error) {
      console.error(error); 
      setError("다시 입력하세요.");
      setLoading(false);
    }
  };

  return (
    <div className='signup_wrap'>
      <h2>Signup</h2>
      <div className='signup_container'>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>회원가입</button>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
