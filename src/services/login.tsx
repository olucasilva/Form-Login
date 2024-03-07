export const login = (data: any): void => {
    if(data.email.length>0 && data.password.length>0)
        alert(`Email: ${data.email}\nSenha: ${data.password}`)
    else
        alert('Digite email e senha!')
};
