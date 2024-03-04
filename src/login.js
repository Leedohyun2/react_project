import './login.css'

const LoginComp = () => {
    return (
      <div className="login">
        <div className='login_container'>
            <span className='login_left'>
                <h2>Join 43 million football fans today</h2>
                <ul>
                    <li>Watch live and on-demand</li>
                    <li>Play games and challenge your friends</li>
                    <li>Win money-can’t-buy prizes</li>
                    <li>Apply for tickets to Europe’s biggest games</li>
                </ul>
            </span>
            <span className='login_right'>
                <h2>Log in</h2>
            </span>
        </div>
      </div>
    );
  };

  export default LoginComp;