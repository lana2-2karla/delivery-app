const requestLogin = (email, password) => {
  axios.post('localhost:3001/login', {
    email,
    password,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default requestLogin;
