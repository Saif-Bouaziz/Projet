import { useState } from 'react';
import styles from './styles.module.css';
import axios from 'axios'
import { Link,useNavigate} from 'react-router-dom'
import Signup from '../Signup';

const Login=()=>{
    
    const [isSigned, setIsSigned] = useState(false);
    const[data,setData]=useState({
        email:"",
        password:""
    })

    const [error,setError]= useState("");
    const handleChange=({currentTarget:input})=>{
        setData({...data,[input.name]:input.value})
    }
    
   const navigate =useNavigate();
    const handleSubmit= async(e)=>{
        /* const user =localStorage.getItem("token");
       e.preventDefault();
       try{
        const url="http://localhost:3750/api/auth"
        const { data: res } = await axios.post(url,data);
        localStorage.setItem("token", res.data);
        {user ? ( 
            navigate("/CreatePost") ) : (
                null
            )
             }
       }catch(error){
        if(error.response && 
            error.response.status >=400 &&
            error.response.status <=500
            ){
                setError(error.response.data.message)
            }

       } */
       navigate("/CreatePost")
    }

  

    return(
        <div >
          { !isSigned ?
            <div className={styles.login_form_container}>
               <div className={styles.left}>

               <form className={styles.form_container} onSubmit={handleSubmit}>
                
                     <input
                      type="email"
                      placeholder='Email'
                      name='email'
                      onChange={handleChange}
                      value={data.email}
                      required
                      className={styles.input}
                      /> <br/>

                      <input
                      type="password"
                      placeholder='Mot de passe'
                      name='password'
                      onChange={handleChange}
                      value={data.password}
                      required
                      className={styles.input}
                      />
                      <br/>
                      {error && <div className={styles.error_msg}>{error}</div>}
                    
                      <button type="submit" className={styles.green_btn}>
                        Se connecter
                          
                      </button>
                      
                  </form>
        
               </div>

               <div className={styles.right}>
                 <h1>Vous n'avez pas un compte ?</h1>
                
						<button type="button" className={styles.white_btn} 
                     onClick={()=>setIsSigned(!isSigned)}
                        >
							S'inscrire
						</button>
				
                          
               </div>
            </div> : 
            <Signup /> }
        </div>
    )
};

export default Login;