import React from 'react'

class Login extends React.PureComponent{
    constructor(props) {
        super(props);
        
    }
        
    LookItWork(){
        
        
    }

    render() 
        {
            return(   
        <form className="login_block" id="login_block">
        <div><input type="text" placeholder="Логин"/></div>
        <div><input type="password" placeholder="Пароль"/></div>
        <button className="sub_search_block_button" onClick={this.LookItWork}>Войти</button>
        </form>
            )
        }
    }

   

export default Login;    