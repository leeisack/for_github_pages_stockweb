import React,{useState} from 'react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if(name==="email"){
            setEmail(value);
        }else if(name==="password"){
            setPassword(value);
        };
    };
    const onSubmit = (event) => {
        event.preventDefault();
    };
    return (  
        <div>
            <form onSubmit={onSubmit }>
                <input name ="email" type="email" placeholder="Email" onChange={onChange} required value = {email} />
                <input name = "password" type="password" placeholder="Password" onChange={onChange} required value ={ password} />
                <input type="submit" value="Log In" />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
};

export default Auth;