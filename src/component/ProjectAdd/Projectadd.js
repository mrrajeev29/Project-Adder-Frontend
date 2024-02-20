import React,{useEffect,useState} from "react"
import {Link} from 'react-router-dom';
import "./Projectad.css";
const Projectadd=()=>{
    const [protit,setProtit]=useState('');
    const [prodesc,setProdesc]=useState('');
    const [repolink,setRepolink]=useState('');
    const [prolink,setProlink]=useState('');
    const [projects,setProjects]=useState([]);

    useEffect(()=>{
    getProjects().then(setProjects)
    },[])

    async function  getProjects(){
        const url="https://project-adder-backend.onrender.com/api/projects";
        const response=await fetch(url);
        return await response.json();
    }

    function addNewProject(ev){
        ev.preventDefault();
        const url="https://project-adder-backend.onrender.com/api/project";
        fetch(url,{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(
            {
                protit,
                prodesc,
                repolink,
                prolink,
            })
        }).then(response=>{
            response.json().then(json=>{
                console.log('result',json);
            });
        });
        window.open("sub","_self");
        alert("Project Added.");
    }


    const deleteUser = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}`)) {
          fetch("https://project-adder-backend.onrender.com/api/delete", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              userid: id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.data);
              //getAllUser();
            });
        } else {
        }
      };


    return(
        <>
        <h1 className="head">New Project Adder for Portfolio</h1>
        <form onSubmit={addNewProject}>
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

            <button>Add</button>
            <a className="link" href="https://bit.ly/Mr_Rajeev_Ranjan"> Go to Portfolio</a>
        </form>
        <a className="phonelink" href="https://bit.ly/Mr_Rajeev_Ranjan"> Go to Portfolio</a>
        <div className="ProjectsBack" id="ProBack">
                {projects.length>0 && projects.map(project=>(
                <div className="Project">
                    <h1>{project.protit}</h1>
                    <h3>{project.prodesc}</h3>
                    <h3>{project.repolink}</h3>
                    <h3>{project.prolink}</h3>
                    <Link to={`/update/${project._id}`}><button type="click">Update</button></Link>
                    <button type="click" onClick={()=>deleteUser(project._id,project.protit)}>Delete</button>              
                </div>
                ))}
        </div>
        </>
    )
}
export default Projectadd;