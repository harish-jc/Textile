import axios from 'axios';
import { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const login = async () => {
    try {
      await axios.get('/sanctum/csrf-cookie'); // CSRF init
      const res = await axios.post('/api/admin/login', { email, password }, { withCredentials: true });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
      <p>{msg}</p>
    </div>
  );
};

export default AdminLogin;
