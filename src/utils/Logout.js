

const TOKEN_KEY = 'jwt';


export const Logout = ()=>{
    localStorage.removeItem(TOKEN_KEY);
    
}
