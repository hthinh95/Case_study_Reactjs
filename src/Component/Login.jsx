import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import routes from '../routes'
import axios from 'axios'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users?userName=${username}&password=${password}`);
      const data = response.data;
      const index = data && data.findIndex((appUser) => appUser.userName === username && appUser.password === password);

      if (index !== -1) {
        window.localStorage.setItem('loginUser', JSON.stringify(data[index]));

        if (data[index].id) {
          navigate(`${routes.web.home}/${data[index].id}`);
        } else {
          setLoginStatus('error');
          console.error('Lỗi: Người dùng không có ID.');
        }
      } else {
        setLoginStatus('error');
      }
    } catch (error) {
      console.error('Lỗi kiểm tra đăng nhập:', error);
      setLoginStatus('error');
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h2 className="text-center">Đăng nhập</h2>
          {loginStatus === 'error' && (
            <div className="alert alert-danger">Tên đăng nhập hoặc mật khẩu không đúng.</div>
          )}
          {loginStatus === 'success' && (
            <div className="alert alert-success">Đăng nhập thành công!</div>
          )}
          <form>
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleEnterKeyPress}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
