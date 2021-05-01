import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Login({history}){

  const {setUsername} = useContext(UserContext);

  const handleSubmit = () => {
    history.push({
      pathname:'/home'
    });
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" name="name" onChange={(e)=>{
        setUsername(e.target.value);
      }}/>
      <button type="submit">Submit</button>
    </form>
  );
}