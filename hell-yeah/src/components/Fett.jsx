 const Userdata=[
  {
    name:"jon snow",
    role:"React Developer",
    skills:["HTML","CSS","JAVASCRIPT","REACT"],
    ima:"images/jon.jpg"
  },
  {
    name:"Thomas Shelby",
    role:"Python  Developer",
    skills:["c","C++","JAVASCRIPT","Python"],
    ima:"images/sh.jpg"
  },
  {
    name:"Thomas Shelby",
    role:"Python  Developer",
    skills:["c","C++","JAVASCRIPT","Python"],
    ima:"images/sh.jpg"
  },
  {
    name:"Walter White",
    role:"Cloud Engineer",
    skills:["C","Cloud","AWS","Mysql"],
    ima:"images/wa.jpg"
  },
  {
    name:"HomeLander",
    role:"Java Fullstack Engineer",
    skills:["HTML","CSS","JAVASCRIPT","Java"],
    ima:"images/star.jpg"
  }
 ]
 
 export default function User(props){
return(
  <>
<div className="con">
<span className="userstat">Online</span>
<img className="img1" src={props.ima} alt="" />

<h2>{props.name}</h2>
<h3>{props.role}</h3>
<div className="btnog">
  <button className="btn1">Message</button>
  <button className="btn2">Follow</button>
</div>
<div className="skills">
<h4>Skills</h4>
<ul>
  {props.skills.map((skill,index)=>(
    <li key={index}>{skill}</li>
  ))}
</ul>
</div>
</div>
</>
)
}



export const Userid = () => {
  return (
    <>
    <div className="container">
    {Userdata.map((user,index)=>(
      <User key={index} name={user.name} role={user.role} skills={user.skills} ima={user.ima}/>
    ))}
    </div>
    </>
      
  )
}
