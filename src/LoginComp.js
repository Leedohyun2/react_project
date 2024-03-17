import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'; // 수정된 부분
import { auth } from './firebase'; // 수정된 부분
import './LoginComp.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null); // 로그인 상태를 저장할 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    // Firebase의 onAuthStateChanged 이벤트를 사용하여 로그인 상태 변경 감지
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // 사용자 정보 업데이트
    });

    // 컴포넌트가 언마운트될 때 이벤트 구독 해제
    return () => unsubscribe();
  }, []); // 한 번만 실행되도록 빈 배열 전달

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('로그인 성공!');
      // 로그인 성공 후 '/'로 이동
      navigate('/Groups');
    } catch (error) {
      alert('로그인 실패. 이메일 또는 비밀번호를 확인하세요.');
      setErrorMessage('로그인 실패. 이메일 또는 비밀번호를 확인하세요.');
      console.error('로그인 오류:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // 로그아웃
      // 로그아웃 후 '/'로 이동
      navigate('/');
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  return (
    <div className="login_wrap">
      <h2>Login</h2>
      {user ? ( // 로그인 상태에 따라 다른 내용을 표시
        <div className='logout_container'>
          <p>로그인 상태입니다.</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div className='login_container'>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='login_btn' type="submit">로그인</button>
          </form>
          {errorMessage && <p>{errorMessage}</p>}
          <SignupButton />
        </div>
      )}
    </div>
  );
};

// Signup 버튼을 렌더링하는 버튼 컴포넌트를 정의
const SignupButton = () => {
  const navigate = useNavigate();

  return (
    <div className='signup_btn'>
      <button onClick={() => navigate('/Signup')}>회원가입</button>
    </div>
  );
};

export default Login;
