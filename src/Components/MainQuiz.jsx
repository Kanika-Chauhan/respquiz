import "./mainquiz.css"
import cube from "../images/pic4.png"
import quizimg from "../images/Quiz-Logo-PNG-HD.png"
import { Outlet, useNavigate } from "react-router-dom"

export default function MainQuiz(){
    const navigate = useNavigate();

    return(
        <>
            <div className="bgmainquiz">
            <div className="row mt-5 text-center text-md-start ">
                <div className="col-md-6 ">
            <div className=" mt-5 ms-md-5" >
                <img src={quizimg} className="logo" alt="" />
                <h4 className="mainheading">Take the quiz</h4> 

            <img  src={cube} alt="" className="cube img-fluid d-none d-md-block" />

            </div>
            

                </div>
                <div className="col-md-6 mt-5  ">
                    <div className="ms-md-5 mb-5"> 
                    <h1 className="mainheading mt-5 mt-md-0">Time to test you knowledge</h1> <br />
                    <div className="my-5">

                    <h3>Keeping yourself entertained and educated is just a quiz away. Take a quiz today to discover amazing facts about the world.</h3> <br />
                    
                    
                    <button onClick={()=>navigate('/Quiz') } className="startbtn mt-5" >START</button>
                    </div>
                    </div>
                    <Outlet/>
                </div>
            </div>
            </div>
        </> 
    )
}