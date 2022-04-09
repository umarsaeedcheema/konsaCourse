import React from 'react'
// import Button from "@material-tailwind/react/Button";
import { useState } from 'react'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
// added  import styles from './styles.module.css'  


// const Login = () => {

//     const [details,setDetails] = useState({name:"",emial:""})



//     return (
      
//     <form>
//         <div className="form-inner">
//             <h2>Login</h2>
//             {/*ERROR*/}
//             <div className="form-group">
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" name="name" id="name" />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" name="email" id="email" />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="passwrd">Password:</label>
//                 <input type="password" name="password" id="password" />
//             </div>
//             <Button color="lightBlue" ripple="light">Button</Button>

//             <input type="submit" value="LOGIN" />
//         </div>
//     </form>
  
//   )
// }

const Login = ()=>{
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
        console.log(e.target.value)
		// try {
		// 	const url = "http://localhost:8080/api/auth";
		// 	const { data: res } = await axios.post(url, data);
		// 	localStorage.setItem("token", res.data);
		// 	window.location = "/";
		// } catch (error) {
		// 	if (
		// 		error.response &&
		// 		error.response.status >= 400 &&
		// 		error.response.status <= 500
		// 	) {
		// 		setError(error.response.data.message);
		// 	}
		// }
	};



    return (
        // <div className={styles.login_container}>
        //{/* // <div> */}
        <div className={styles.login_form_container}>
       <div className={styles.left}>
 					{/* <Link>
					 
					 </Link> */}
					 <h1>New Here ?</h1>
 					<h2 >
 						<Link to="./pages/Signup">
						 <button type="button" className={styles.white_btn}>
 							Sign Up
 						</button>
						 </Link>
 					</h2>
 				</div>
        {/* <div className={styles.rightSupreme}>  add another encapsulation*/}
        <div className={styles.right}>
        
 				
        <form className={styles.form_container} onSubmit={handleSubmit}>
 						<h1>Sign in to Your Account</h1>
						<input
							type="email"
							placeholder="email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
          {/* </div> */}
          </div>
         </div>
        //   </div>
        )
}


export default Login

// smjh nahi aa rahi 