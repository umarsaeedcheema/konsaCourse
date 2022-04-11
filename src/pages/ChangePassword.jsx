import styles from "./styles.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";

// const Login = () => {
// 	const [data, setData] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
//         console.log(e.target.value)
// 		// try {
// 		// 	const url = "http://localhost:8080/api/auth";
// 		// 	const { data: res } = await axios.post(url, data);
// 		// 	localStorage.setItem("token", res.data);
// 		// 	window.location = "/";
// 		// } catch (error) {
// 		// 	if (
// 		// 		error.response &&
// 		// 		error.response.status >= 400 &&
// 		// 		error.response.status <= 500
// 		// 	) {
// 		// 		setError(error.response.data.message);
// 		// 	}
// 		// }
// 	};

// 	return (
// 		<div className={styles.login_container}>
// 			<div className={styles.login_form_container}>
// 				<div className={styles.left}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Login to Your Account</h1>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Sing In
// 						</button>
// 					</form>
// 				</div>
// 				<div className={styles.right}>
// 					<h1>New Here ?</h1>
// 					<Link to="/signup">
// 						<button type="button" className={styles.white_btn}>
// 							Sing Up
// 						</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

const ChangePassword = ()=>{
	const [data, setData] = useState({ old: "", new: "" ,cnew:""});
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(input.value)
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
        // console.log(e.target.value)
		// console.log(data.email)
		// console.log(data.password)
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
       
        {/* <div className={styles.rightSupreme}>  add another encapsulation*/}
        <div className={styles.right}>
        {/* <Link
        href="http://geeksforgeeks.org/"
        onClick={() => {
          alert("Redirecting to GeeksforGeeks");
        }}>
        Click GeeksforGeeks
      </Link> */}
		{/* <Link href='./pages/Homepage'> */}
		<div className="d-flex align-items-start flex-column" style={{flex:1}}> 
		<text style={{color:"black", fontSize:"20px", paddingTop:"20px", paddingLeft:"20px" }}>
		KonsaCourse
		</text>
		</div>
 		{/* </Link> className={styles.form_container}		 */}
		 <div className="d-flex align-items-center justify-content-center felx-column" style={{flex:9}}>
		 {/* <div style={{alignContent:"center",height:"100%",width:"100%",justifyContent:"center",flexDirection:"column",borderTopLeftRadius:"10px",backgroundColor:"white"}}> */}
			<form className={styles.form_container} onSubmit={handleSubmit}>
						 <h1 style={{color:"black"}}>Change Password</h1>
						<input
							type="password"
							placeholder="Current Password"
							name="old"
							onChange={handleChange}
							value={data.old}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="New Password"
							name="new"
							onChange={handleChange}
							value={data.new}
							required
							className={styles.input}
						/>
                        <input
							type="password"
							placeholder="Confirm New Password"
							name="cnew"
							onChange={handleChange}
							value={data.cnew}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}						
						<button type="submit" className={styles.green_btn}>
						Update Password
						</button>
						{/* Update Pass */}
					</form>
					</div>
          {/* </div> */}
          </div>
          <div className={styles.left}>
 					<h1>Go To Home</h1>
 					<h2 >
 						<button type="button" className={styles.white_btn}>
 							Home
 						</button>
 					</h2>
 			</div>
         </div>
        //   </div>
        )
}

export default ChangePassword;