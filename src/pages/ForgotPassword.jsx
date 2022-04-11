import styles from "./styles.module.css";
import { useState } from "react";
// import { Link } from "react-router-dom";


const ForgotPassword = ()=>{
	const [data, setData] = useState({ question: "",answer:"", password: "" });
	const [error, setError] = useState("");
	// const [showPassword , setvisibility] = useState(false)

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(input.value)
	};
	// const handleClickShowPassword = ()=>{
	// 	setvisibility(!showPassword)
	// }

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
 					<h1>New Here ?</h1>
 					<h2 >
 						<button type="button" className={styles.white_btn}>
 							Sign Up
 						</button>
 					</h2>
 				</div>
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
		<div className="d-flex align-items-end flex-column" style={{flex:1}}> 
		<text style={{color:"black", fontSize:"20px", paddingTop:"20px", paddingRight:"20px" }}>
		KonsaCourse
		</text>
		{/* <text>KonsaCourse</text> */}
		</div>
 		{/* </Link> className={styles.form_container}		 */}
		 <div className="d-flex align-items-center justify-content-center felx-column" style={{flex:9}}>
		 {/* <div style={{alignContent:"center",height:"100%",width:"100%",justifyContent:"center",flexDirection:"column",borderTopLeftRadius:"10px",backgroundColor:"white"}}> */}
			<form className={styles.form_container} onSubmit={handleSubmit}>
						 <h1 style={{color:"black"}}>Forgot Password</h1>
						<input
							type="text"
							placeholder="Select your Security question"
							name="question"
							onChange={handleChange}
							value={data.question}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Answer"
							name="answer"
							onChange={handleChange}
							value={data.answer}
							required
							className={styles.input}
						/>
						<input
							type={"password"}
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
						<button type="submit" className={styles.green_btn}>
							Update Password
						</button>
						
					</form>
					</div>
          {/* </div> */}
          </div>
         </div>
        //   </div>
        )
}

export default ForgotPassword;