import React from 'react'
import styles from './styles.module.css'
import NavbarComponent from '../components/NavbarComponent'
import {useState} from 'react'

 const AddInstructor = () => {
	const [data, setData] = useState({ fname: "",sname: "",cname: "", ccode: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(input.value)
	};

    const handleSubmit = (event)=>{
        console.log(event)
    }

  return (
        <div className={styles.gradient} style={{justifyContent:"start"}}>

            <div className='justify-content-center'>
              <div className="d-flex align-items-center justify-content-center flex-column"
					style={{
						margin: 'auto',
						backgroundColor: '#3aafa020',
						borderRadius: '5%',
						width: '50%',
						height: '60%',
						
					}}
				>
                    <form className={styles.form_container} onSubmit={handleSubmit}
                    style={{

                        height: '100 %',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: ' center',
                        justifyContent: 'center'

                    }}>
                    <h3 className="mb-5" style={{ color: "black"}}>Add A Course Or Instructor</h3>

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
                        name="sname"
                        onChange={handleChange}
                        value={data.sname}
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
                    {error && <div className={styles.error_msg}>{error}</div>}
                     <button type="submit" className={styles.green_btn}>
                        Sign In
                    </button>
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