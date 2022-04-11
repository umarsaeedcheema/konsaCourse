import styles from "./styles.module.css";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import IconButton from "@material-ui/core/IconButton";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import InputAdornment from "@material-ui/core/InputAdornment";

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

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [showPassword, setvisibility] = useState(false)

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(input.value)
	};
	const handleClickShowPassword = () => {
		setvisibility(!showPassword)
	}

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


	let navigate = useNavigate()
	return (
		// <div className={styles.login_container}>
		//{/* // <div> */}
		< div className={styles.login_form_container} >
			<div className={styles.left}>
				<h1 >New Here ?</h1>
				<h2 >
					<button type="button" className={styles.white_btn}
						onClick={() => {
							navigate('/pages/signup')
						}}>
						Sign Up
					</button>
				</h2>
			</div>
			{/* <div className={styles.rightSupreme}>  add another encapsulation*/}
			<div className={styles.right} >
				<div className="d-flex align-items-end flex-column" style={{ flex: 1 }}>
					<text style={{ color: "black", fontSize: "20px", paddingTop: "20px", paddingRight: "20px",cursor: 'pointer' }}
					onClick={()=>{
						navigate('/pages/landing')
					}}>
						KonsaCourse
					</text>
					{/* <text>KonsaCourse</text> */}
				</div>
				{/* </Link> className={styles.form_container}		 */}
				<div className="d-flex align-items-center justify-content-center felx-column" style={{ flex: 9 }}>
					{/* <div style={{alignContent:"center",height:"100%",width:"100%",justifyContent:"center",flexDirection:"column",borderTopLeftRadius:"10px",backgroundColor:"white"}}> */}
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1 style={{ color: "black", fontSize: "120%" }}>Sign in to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						// endAdornment={
						// 	<InputAdornment position="end" style={{color:"black",height:"10%"}}>
						// 	  <IconButton
						// 		onClick={handleClickShowPassword}
						// 	  >
						// 		{showPassword ? <Visibility /> : <VisibilityOff />}
						// 	  </IconButton>
						// 	</InputAdornment>
						//   }
						/>
						{/* <IconButton
									onClick={handleClickShowPassword}
								  >
									{showPassword ? <Visibility /> : <VisibilityOff />}
								  </IconButton> */}
						{/* <button></button> */}
						{error && <div className={styles.error_msg}>{error}</div>}

						<span className="d-flex justify-content-end"
							style={{ width: "100%", marginRight: "2%", fontSize: "15px", cursor: 'pointer' }}
							onClick={() => {
								navigate('/pages/forgotpassword')
							}}>
							Forgot password?
						</span>


						<button type="submit"
							className={styles.green_btn}
						>
							Sign In
						</button>

					</form>
				</div>
				{/* </div> */}
			</div>
		</div >
		//   </div>
	)
}

export default Login;