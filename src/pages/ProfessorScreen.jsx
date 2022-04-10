import React, {useState} from 'react'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css'

const ProfessorScreen = () => {
  
    

    const labels = ["F","C-","C","C+","B-","B","B+","A-","A","A+"];
    const rating = 2.5;
    const labnum = (rating*2) - 1;
    const numrating = 17;
    const firstname = "Suleman";
    const lastname = "Shahid";
    const tags = ["Lenient", "Accomodating", "Punctual", "Inspirational", "Interactive"];
    
    

    return (
    <div className='ProfessorScreen'>

        
        <div className="d-flex justify-content-center align-items-start flex-column">

            <h1>{firstname} {lastname}</h1>
            <p size="large">Professor in the Computer Science Department</p>

            <div class="d-flex align-items-center">

                <div>
                <Rating

                    name="profStars"
                    value={rating}
                    size="large"
                    //precision={0.5}
                    
                    readOnly
                />
                </div>
                
                <div className={styles.rubber}>{labels[labnum]}</div>
                
            </div>

            <div style={{fontSize: "small"}}>Based on {numrating} ratings</div>

            <button type="submit" className={styles.green_btn}>
				Rate Professor
			</button>

            <h4>Professor {firstname}'s Top Five Tags</h4>

            <div className = "d-flex justify-content-start">
                {tags.map((value,key) => {

                    return (<button className={styles.tag_btn} disabled="true">

                        {value}

                    </button>)

                })}

            </div>

        </div>
        
    </div>
  )
}

export default ProfessorScreen