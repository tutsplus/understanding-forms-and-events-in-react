import { useState } from "react";

function UserProfile(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [password, setPassword] = useState("");

    const emit = () => {
        props.callback({name: name, email: email, age: age, password: password});
    }
    
    const logState = () => {
        console.log(name);
        console.log(email);
        console.log(age);
        console.log(password);
    }

  return (
    <div>
        <h2>Provide your profile details</h2>
        <form>
            <div>
                <label for="name-field">Name</label>
                <input 
                    id="name-field"
                    type="text"
                    value={name}       
                    onChange={(e) => setName(e.target.value)}             
                />            
            </div>

            <div>
                <label for="email-field">Email</label>
                <input 
                    id="email-field"
                    type="text"
                    value={email}                  

                    onChange={(e) => setEmail(e.target.value)}
                />            
            </div>

            <div>
                <label for="age-field">Age</label>
                <input 
                    id="age-field"
                    type="number"
                    value={age}     
                    onChange={(e) => setAge(e.target.value)}
                />            
            </div>

            <div>
                <label for="password-field">Password</label>
                <input 
                    id="password-field"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />            
            </div>
            
            <button type="button" onClick={emit}>Submit</button>            

        </form>
    </div>
  );
}

export default UserProfile;