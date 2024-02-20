import React,{useEffect,useState} from "react"
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";


const ProjectUpdate=()=>{
    const {id}= useParams();
    const [protit,setProtit]=useState('');
    const [prodesc,setProdesc]=useState('');
    const [repolink,setRepolink]=useState('');
    const [prolink,setProlink]=useState('');
    //const [projects,setProjects]=useState([]);

    const navigate=useNavigate();

    useEffect(()=>{
        axios.get('https://project-adder-backend.onrender.com/api/update/'+id)
        .then(result=>{console.log(result)
            setProtit(result.data.protit);
            setProdesc(result.data.prodesc);
            setRepolink(result.data.repolink);
            setProlink(result.data.prolink);
        })
        .catch(err=>console.log(err))
    },[])
    function updateProject(e){
        alert("updated");
        e.preventDefault();
        axios.put('https://project-adder-backend.onrender.com/api/updateData/'+id,{protit,prodesc,repolink,prolink})
        .then(result=>{
            console.log(result)
            //navigate('sub')
            window.open("http://localhost:3000/sub","_self")
            //console.log("ok")
        })
        .catch(err=>console.log(err))
    }
    

    return(
        <>
        <h1 className="head">New Project Adder for Portfolio</h1>
        <form >
            <div>
                <h1 className="Mobhead">Project Adder</h1>
                    <h1>Project Title</h1>
                    <input type="text" value={protit} onChange={ev=>setProtit(ev.target.value)} required/>
                </div>
                <div>
                    <h1>Project Description</h1>
                    <input type="text" value={prodesc} onChange={ev=>setProdesc(ev.target.value)} required/>
                </div>
                <div>
                    <h1>Repository Link</h1>           
                    <input type="text" value={repolink} onChange={ev=>setRepolink(ev.target.value)}  required/>
                </div>
                <div>
                    <h1>Project Link</h1>
                    <input type="text" value={prolink} onChange={ev=>setProlink(ev.target.value)} required/>
                </div>

                <button type="click" onClick={updateProject}>Update</button>
                <a className="link" href="https://bit.ly/Mr_Rajeev_Ranjan"> Go to Portfolio</a>
        </form>
        <a className="phonelink" href="https://bit.ly/Mr_Rajeev_Ranjan"> Go to Portfolio</a>
        </>
    )
}
export default ProjectUpdate;