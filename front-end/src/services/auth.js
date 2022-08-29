import axios from 'axios';

const requestLogin = async (email, password) => {
  console.log('authhhh');
  await axios.post('localhost:3001/login', {
    email,
    password,
  });
};

export default requestLogin;
