
function isAuthenticate() {
  const token = JSON.parse(localStorage.getItem('user'))?.token;

  if(token){
    return true;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {isAuthenticate}