// Login.js
import React, { useState } from 'react';
import styles from './login.module.css'; // Import CSS module
import './login.css'; // Import regular CSS file
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
  
  const handleLogin = () => {
    // Here you can implement your login logic
    // For simplicity, let's assume login is successful if username and password are not empty
    if (username==='mobin' && password==='123') {
      // Call the onLogin function passed from the parent component
      onLogin();
      // Redirect the user to the homepage
      history.push('/');
    }
    else{
      alert('Incorrect Password Entered');
    }
  };

  const handleLoginadm = () => {
    // Here you can implement your login logic
    // For simplicity, let's assume login is successful if username and password are not empty
    if (username==='admin' && password==='123') {
      // Call the onLogin function passed from the parent component
      onLogin();
      // Redirect the user to the homepage
      history.push('/');
    }
    else{
      alert('Incorrect Password Entered');
    }
  };

  

  return (
    <div className={styles.loginContainer}> {/* Use CSS module class */}
      <h2>Login</h2>
      <div className={styles.inputGroup}> {/* Use CSS module class */}
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div className={styles.inputGroup}> {/* Use CSS module class */}
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button onClick={handleLogin} className='login-button'>Login</button>
      <button onClick={handleLoginadm} className='login-button-adm'>Login as Admin</button>
    </div>
  );
};

export default Login;


// display system
// //this code prints out the data
// import React, { useState, useEffect } from 'react';

// const LoginData = () => {
//  const [data, setData] = useState([]);
//  const [error, setError] = useState(null);

//  useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/login');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchData();
//  }, []);

//  if (error) {
//     return <div>Error: {error}</div>;
//  }

//  return (
//     <div>
//       <h2>Tasks</h2>
//       {data.length > 0 ? (
//         <ul>
//           {data.map((task) => (
//             <li key={task.id}>{task.description}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No tasks found.</p>
//       )}
//     </div>
//  );
// };

// export default LoginData;
