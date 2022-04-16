import styles from "./styles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
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

const ChangePassword = () => {
	const [data, setData] = useState({ old: "", new: "", cnew: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(input.value)
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		const localuser = JSON.parse(localStorage.getItem("user"))
		const changeObject = {
			email: localuser.email,
			currentPassword: data.old,
			newPassword: data.cnew,
		}
		const url = `/changePassword`;
		await axios.post(url, changeObject).then((res)=>{
			console.log("hello from inside")
			console.log(res);
			alert("Your password has been changed")
			navigate('/pages/homepage');
		})
		.catch((error)=>{
			
			// if (error.response) {
			// 	if (
			// 		error.response &&
			// 		error.response.status >= 400 &&
			// 		error.response.status <= 500
			// 	) {
			// 		setError(error.response.data.error);
			// 		// setError(error.response.data.message);
			// 		// console.log(error.response.data.error);
			// 	}	
			// console.log("hello");
			setError(error.response.data.error);
		})

	};


	const navigate = useNavigate()
	return (
		<div className={styles.login_form_container}>


			<div className={styles.right}>

				<div className="d-flex justify-content-start ml-20 mt-4 ">
					<div className="d-flex fw-bold" onClick={() => { navigate('/pages/landing') }}
						style={{ color: '#319fa0', cursor: 'pointer' }} >KONSA</div>
					<div className="d-flex fw-bold" onClick={() => { navigate('/pages/landing') }}
						style={{ color: '#000000', cursor: 'pointer' }}
					>COURSE</div>
				</div>

				<div className="d-flex align-items-center justify-content-center flex-column"
					style={{
						backgroundColor: 'rgba(58, 175, 160, 0.05)',
						margin: 'auto',
						width: '435px',
						height: '350px',
						borderRadius: '5%'
					}}

				>

					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1 className="mb-10"  style={{ color: "black" }}>Change Password</h1>
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

					</form>
				</div>

			</div>
			<div className={styles.left}>
				<h1>Go To Home</h1>
				<h2 >
					<button type="button" className={styles.white_btn} onClick={() => { navigate('/pages/landing') }}>
						Home
					</button>
				</h2>
			</div>
		</div>

	)
}

export default ChangePassword;