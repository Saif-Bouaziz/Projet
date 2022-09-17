import { useState } from 'react';
import styles from './styles.module.css';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';
import Login from '../Login';

const Signup=()=>{
    
   

    const [isSigned, setIsSigned] = useState(true);
  
    const[data,setData]=useState({
        lname:"",
        fname:"",
        email:"",
        password:""
    })

    const [error,setError]= useState("");
     

    const navigate =useNavigate();

    const handleChange=({currentTarget:input})=>{
        setData({...data,[input.name]:input.value})
    }

    const handleSubmit= async(e)=>{
       // const user =localStorage.getItem("token")
       /*e.preventDefault();
       try{
        const url="http://localhost:3750/api/user"
        const {data:res} = await axios.post(url,data)*/
        navigate("/CreatePost");
       /* {user ? ( 
        navigate("/CreatePost") ) : (
            null
        )
         }*/
        
       
       /* console.log(res.message);
       }catch(error){
        if(error.response && 
            error.response.status >=400 &&
            error.response.status <=500
            ){
                setError(error.response.data.message)
            }

       }*/
    }
    
  

    return(
        <div >
          { isSigned ?
            <div className={styles.signup_form_container}>
           
               <div className={styles.left}>
                 <h1>Vous avez déjà un compte ?</h1>
                 	<button type="button" className={styles.white_btn}  
                     onClick={()=>setIsSigned(!isSigned)}
                      >
							Se connecter
					</button>
                        
                </div>

              

               <div className={styles.right}>
               
                  <form className={styles.form_container} onSubmit={handleSubmit}> 
                
                     <input
                      type="text"
                      placeholder='Prénom'
                      name='lname'
                      onChange={handleChange}
                      value={data.lastname}
                      required
                      className={styles.input}
                      />

                     <input
                      type="text"
                      placeholder='Nom'
                      name='fname'
                      onChange={handleChange}
                      value={data.firstname}
                      required
                      className={styles.input}
                      />

                     <input
                      type="email"
                      placeholder='Email'
                      name='email'
                      onChange={handleChange}
                      value={data.email}
                      required
                      className={styles.input}
                      />

                      <input
                      type="password"
                      placeholder='Mot de passe'
                      name='password'
                      onChange={handleChange}
                      value={data.password}
                      required
                      className={styles.input}
                      />
                    
                      {error && <div className={styles.error_msg}>{error}</div>}
                
                      <button type="submit" className={styles.green_btn} >
                        S'inscrire
                        
                      </button>

                    
                  </form>
                
               </div>
            </div> :
             <Login  />
             
            }
            
    
        </div>
    )
};

export default Signup;