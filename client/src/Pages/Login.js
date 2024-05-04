import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='container_auth'>
            <div>
                <h1>Login</h1>

                <div className='form-group'>
                    <input 
                        type="text"
                        placeholder='username'
                    />
                </div>

                <div className='form-group'>
                    <input 
                        type="text"
                        placeholder='password'
                    />
                </div>

                <div className='form-group'>
                    <button>Login</button>
                </div>

                <div className='form-group'>
                    <Link to="/register">REGISTER</Link>
                </div>

            </div>
        </div>
        
    )
}

export default Login