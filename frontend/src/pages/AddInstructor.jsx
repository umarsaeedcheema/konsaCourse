import React from 'react'
import styles from './styles.module.css'
import NavbarComponent from '../components/NavbarComponent'
import {useState, useEffect} from 'react'
import { Button } from '@mui/material'
import { Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const axios = require('axios');

 const AddInstructor = () => {
	
    const [loggedin, setLoggedin] = useState();
    const [adminin, setAdminin] = useState();


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      if (foundUser.isAdmin) {
        setAdminin(true)
      } else {
        setLoggedin(true)
      }
      console.log("Logged in User");
    }
  }, []);
    
  
    
    const [data, setData] = useState({ fname: "",lname: "",cname: "", ccode: "",dname:'' });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(input.value)
	};

    const handleSubmit = async (e) => {
		e.preventDefault();

        const inobject = {
            firstName:data.fname,
            lastName:data.lname,
            department:data.dname,
            courseName:data.cname,
            courseCode:data.ccode
        }

        console.log(data.fname);
        console.log(data.lname);
        console.log(data.dname);
        console.log(data.cname);
        console.log(data.ccode);

		
        const url = `/request/addRequest`;
        await axios.post(url, inobject).then((res) => {
            console.log("Hello");
            console.log(res);
            navigate("/pages/landing");
            
        })
        .catch(function (error) {
            
            setError(error);

        });
    }

    

    
    
    const navigate = useNavigate()
    return (
        <div className={styles.gradient} style={{justifyContent:"start"}}>
            <div>
        <NavbarComponent
          // style={{backgroundColor:"#000fff00",flex:1}}
          isLoggedIn={loggedin}
          isAdmin={adminin} />
      </div>

            <div className='justify-content-center'>
              <div className="d-flex align-items-center justify-content-center flex-column"
					style={{
						margin: 'auto',
						// backgroundColor: '#3aafa020',
						borderRadius: '5%',
						width: '50%',
						height: '60%',
						
					}}
				>
                    <form className={styles.form_container} onSubmit={handleSubmit}
                    style={{

                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '15%',
                        background: 'rgba(58, 175, 160, 0.05)',
                        width: '60%',
                        padding: '4%',
                        borderRadius: '15px'

                    }}>
                    <h3 className="mb-4" style={{ color: "black"}}>Add A Course Or Instructor</h3>

                         <input
                        type="text"
                        placeholder="Enter Instructor's First Name"
                        name="fname"
                        onChange={handleChange}
                        value={data.fname}
                        required
                        className={styles.input}
                    />
                     <input
                        type="text" 
                        placeholder="Enter Instructor's Second Name"
                        name="lname"
                        onChange={handleChange}
                        value={data.lname}
                        required
                        className={styles.input}
                     />   
                     <input
                        type="text" 
                        placeholder="Enter Instructor's Department Name"
                        name="dname"
                        onChange={handleChange}
                        value={data.dname}
                        required
                        className={styles.input}
                     />   
                    <input
                        type="text"
                        placeholder="Enter Course Name"
                        name="cname"
                        onChange={handleChange}
                        value={data.cname}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text" 
                        placeholder="Enter Course Code"
                        name="ccode"
                        onChange={handleChange}
                        value={data.ccode}
                        required
                        className={styles.input}

                    />
                    {error && <div className={styles.error_msg}
                    style={{
                        width:'100%'
                    }}
                    >{error}</div>}
                     <Button type="submit" variant='contained' onSubmit={handleSubmit}
                     style={{
                         borderRadius:'15px',
                         width:'35%',
                         marginTop:'5%'
                     }}
                     >
                        Add
                    </Button>
                        </form>
                    </div>

            </div>
        </div>
    )
    }
    
    export default AddInstructor

//{/* <div className={styles.gradient}>  */}
//     {/* <NavbarComponent
//        isLoggedin={true}
    //     isAdmin={false}
    //     style={{backgroundColor:"#3aafa000"}}
    // ></NavbarComponent>  */}

//  <div className="d-flex align-items-center justify-content-center flex-column"
// 					style={{
// 						margin: 'auto',
// 						backgroundColor: 'rgba(58, 175, 160, 0.05)',
// 						borderRadius: '5%',
// 						width: '500px',
// 						height: '320px',
						
// 					}}
// 				>

// <form className={styles.form_container} onSubmit={handleSubmit}
// style={{

//     height: '100 %',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: ' center',
//     justifyContent: 'center'

// }}
// >

// <h1 className="mb-5" style={{ color: "black"}}>Add A Course Or Instructor</h1>

// <input
//     type="text"
//     placeholder="Enter Instructor's First Name"
//     name="fname"
//     onChange={handleChange}
//     value={data.fname}
//     required
//     className={styles.input}
// />
// <input
//     type="text" 
//     placeholder="Enter Instructor's Second Name"
//     name="sname"
//     onChange={handleChange}
//     value={data.sname}
//     required
//     className={styles.input}

// />
// <input
//     type="text"
//     placeholder="Enter Course Name"
//     name="cname"
//     onChange={handleChange}
//     value={data.cname}
//     required
//     className={styles.input}
// />
// <input
//     type="text" 
//     placeholder="Enter Course Code"
//     name="ccode"
//     onChange={handleChange}
//     value={data.ccode}
//     required
//     className={styles.input}

// />

// {error && <div className={styles.error_msg}>{error}</div>}


// <button type="submit" className={styles.green_btn}>
//     Sign In
// </button>

// </form>
// </div> 
//  </div>  