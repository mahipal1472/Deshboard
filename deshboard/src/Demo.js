import React, { useState } from "react";
import './Demo.css'
// import "../../assets/css/profile.css"
// import userProfileLayout from "../../hoc/userProfileLayout";

function Demo(){
    const [user,setuser]=useState(false)
    const [modalVisible, setModalVisible] = useState(false);

    const [input, setinput] = useState({
        Drivername: "",
        licenceNum: "",
      
      })

    // const handleClick=()=>{
    //     setuser(true)
    //     console.log(user)
    // }

    const handleInput = (e, id, field) => {
        const value= e.target.value;
        setinput({
            ...input,
            [e.target.name]:value
          })
        }
    const handleAdd = () => {
        // const DriverList = JSON.parse(localStorage.getItem('newDriver')) ?? []
        const obj = {
          Drivername: input.Drivername,
          licenceNum: input.licenceNum,
        }
        if (
          input.Drivername.trim() === ' ' ||
          input.licenceNum.trim() === ' '
        ) {
        //   toast("Please fill in all the required fields") 
        alert("Please fill in all the required fields")
        }else{
        setModalVisible(true)
        }
         
        //   DriverList.unshift(obj)
        //   localStorage.setItem('newDriver', JSON.stringify(DriverList))
        // const getDriver = (localStorage.getItem("newDriver"));
        // setuser(JSON.parse(getDriver))
        
      }
        return <>
        <div>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#driverModal">Save</button>
        </div>
                
        <div class="modal fade" id="driverModal" tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">  <i className="fa fa-map"></i> Add New Driver</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Driver Name</label>
    <input type="text" name="Drivername" class="form-control" onChange={(e)=>handleInput(e)}  id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Licence No.</label>
    <input type="text" name="licenceNum" class="form-control" onChange={(e)=>handleInput(e)} id="exampleInputPassword1"/>
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" id="bt" class="btn btn-primary"  data-bs-dismiss={modalVisible?"modal":""} onClick={handleAdd}>Save</button>
      </div>
    </div>
  </div>
</div>
        </>
    }


export default Demo;
{/* <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Personal Info</h6>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2">@</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="First Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Contact Number</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Contact Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-mobile"></i></span>
                                    </div>
                                </div>
                            </div>
                           
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                </div> */}


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Demo.css"
// import { ButtonGroup } from "react-bootstrap";

// const Demo = () => {
//   const [user, setUser] = useState([]);
//   const [editedData, setEditedData] = useState({});
//   const [modalVisible, setModalVisible] = useState(true);

//   useEffect(() => {
//     const data=JSON.parse(localStorage.getItem("newadd"))
//     setUser(data);
//     // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => { 
//     //   setUser(res.data);
    
  
//   }, []); 

//   const handleDisable = (id) => {
//     setUser((prevUsers) =>
//       prevUsers.map((user,index) => {
//         if (index === id) {
//           return {
//             ...user,
//             disable: !user.disable,
//           };
//         }
//         return user;
        
//       })
//     );
//   };
//   // const handleedit=(ff)=>{
  
//   //   setUser((prevUsers) =>
//   //     prevUsers.map((user) => {
//   //       if (user.id === ff) {
//   //         return {
//   //           ...user,
//   //           edit: !user.edit,
//   //         };
        
//   //       }
        
//   //       return user;

//   //     })
//   //   );
//   // }
//   const handleedit = (id) => {
//     const updatedData = user.map((userData,index) => {
//       if (index === id) {
//         return {
//           ...userData,
//           edit:!userData.edit,
//         };
//       }
//       return userData;
//     });
  
//     setUser(updatedData);

//     setEditedData({}); 
//   };


//   const handleInputChange = (e, id, field) => {
//     const value= e.target.value;
//     setEditedData((prevData) => ({
//       ...prevData,
//       [id]: {
//         ...prevData[id],
//         [field]: value,
        
//       },
      
//     }));
//   };

//   const handleSaveChanges = () => {
//     const updatedUser = user.map((userData) => {
//       console.log(userData.id);
//       const editedUserData = editedData[userData.id];
//       console.log(editedUserData);
//       if (editedUserData) {
//         return {
//           ...userData,
//           ...editedUserData,
//           edit: false,
//         };
//       }
//       return userData;
//     });
  
//     setUser(updatedUser);
//     localStorage.setItem("newadd", JSON.stringify(updatedUser));
//   };

  

//   return (
//     <>
//       {/* <button 
//       type="button" 
//       className="btn btn-primary" 
//       data-bs-toggle="modal" 
//       data-bs-target="#exampleModal"
//       onClick={() => setModalVisible(true)}
//       >
//         Launch demo modal
//       </button> */}

//    {modalVisible &&    <div className="modal fade show" id="exampleModal" style={{ display: "block" }}
//  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-fullscreen">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">User List</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <table className="table table-hover table-striped overflow-hidden align-middle">
//                 <thead>
//                   <tr>
//                     <th scope="col">S.r</th>
//                     <th scope="col">Companyname</th>
//                     <th scope="col">area</th>
//                     <th scope="col">serveyNO</th>
//                     <th scope="col">disable</th>
//                     <th scope="col">Edit</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {user && user.map((res,index) => (
                  
//   <tr key={index} className={res.disable ? "disabled" : ""}>
//     <th scope="row">{index}</th>
//     <td>
//       {res.edit ? (
//         <input
//           className="input-group flex-nowrap form-control"
//           type="text"
//           value={editedData[index]?.CompanyName || res.CompanyName}
//           onChange={(e) => handleInputChange(e, index, "CompanyName")}
//         />
//       ) : (
//         <span>{res.CompanyName}</span>
//       )}
//     </td>                     <td>
//       {res.edit ? (
//         <input
//           className="input-group flex-nowrap form-control"
//           type="text"
//           value={editedData[index]?.Area || res.Area}
//           onChange={(e) => handleInputChange(e, index, "Area")}
//         />
//       ) : (
//         <span>{res.Area}</span>
//       )}
//     </td>
//     {/* ... Repeat the same pattern for other fields ... */}
//     <td>
//       <button  className=" btn btn-primary" onClick={() => handleDisable(index)}>
//         {res.disable ?"Enable":"Disable"}
//       </button>
//     </td>
//     <td>
//       {res.edit ? (
//         <button className="btn btn-primary" disabled={res.disable} onClick={() => handleedit(index)}>
//           Cancel
//         </button>
//       ) : (
//         <button className="btn btn-primary" disabled={res.disable} onClick={() => handleedit(index)}>
//           Edit
//         </button>
//       )}
//     </td>
//   </tr>
// ))}

//                 {/* key={res.id}  className={res.disable ? "disabled" : ""}   */}
//                   {/* {user && user.map((res) => (
//                     <tr  >
//                       <th scope="row">{res.id}</th>
//                       <td>{ res.edit ? <input className="input-group flex-nowrap form-control" type="text" />:<span>{res.companyName}</span>}</td>
//                       <td>{ res.edit ? <input className="input-group flex-nowrap form-control" type="text" />:<span>{res.area}</span>}</td>
//                       <td>{ res.edit ? <input className="input-group flex-nowrap form-control" type="text" s/>:<span>{res.surveyNo}</span>}</td>
//                       <td>
//                         <button className="btn btn-primary" onClick={() => handleDisable(res.id)}>
//                           {res.disable ? "Enable" : "Disable"} 
//                           Disable
//                         </button>
//                       </td>
//                       <td>
//                         <button className="btn btn-primary" onClick={()=>handleedit(res.id)} >
//                           Edit
//                         </button>
//                       </td>
//                     </tr>
//                   ))} */}
//                 </tbody>
//               </table>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>
// }
//     </>
//   );
// };

// export default Demo;


// import React from "react";
// import { useState } from "react";
// function Demo(){
//   const [textarea, settextarea] = useState({
//     CompanyName: "",
//     Area: "",
//     SurveyNo: "",
//     City: "",
//     State: "",
//     Pincode: "",
//     GSTIN: "",
//     Website: "",
//   })

//   const handletextarea = (evt) => {
//     const value = evt.target.value;
//     settextarea({
//       ...textarea,
//       [evt.target.name]: value
//     });
   
//   }

//   const Savedata = () => {

//     const userList = JSON.parse(localStorage.getItem('newadd')) ?? []
//      // Check if userList is not empty
//      var id=0;
//   if (userList.length > 0) {
//     // Get the highest id value from the existing userList
//     const highestId = Math.max(...userList.map(obj => obj.id));

//     // Increment id by 1
//     id = highestId + 1;
//   }
  
//     var obj = {
//       id:id,
//       CompanyName: textarea.CompanyName,
//       Area: textarea.Area,
//       SurveyNo: textarea.SurveyNo,
//       City: textarea.City,
//       State: textarea.State,
//       Pincode: textarea.Pincode,
//       GSTIN: textarea.GSTIN,
//       Website: textarea.Website,

//     }

//     userList.push(obj)
//     localStorage.setItem('newadd', JSON.stringify(userList))
    

//   }
// return(
//   <div className="col-sm-12">
//               <input name="CompanyName" value={textarea.CompanyName} placeholder=" Enter Compnayname" className="form-control " required=""  onChange={handletextarea}></input>
//               <input name="Area" value={textarea.Area} onChange={handletextarea} placeholder="Enter area" className="form-control "></input>
//               <input name="SurveyNo" value={textarea.SurveyNo} onChange={handletextarea} placeholder="Enter surveyNo" className="form-control "></input>
//               <input name="City" value={textarea.City} onChange={handletextarea} placeholder="Enter city" className="form-control "></input>
//               <input name="State" value={textarea.State} onChange={handletextarea} placeholder="Enter state" className="form-control "></input>
//               <input name="Pincode" value={textarea.Pincode} onChange={handletextarea} placeholder="Enter pincode" className="form-control "></input>
//               <input name="GSTIN" value={textarea.GSTIN} onChange={handletextarea} placeholder="Enter GST NO." className="form-control "></input>
//               <input name="Website" value={textarea.Website} onChange={handletextarea} placeholder="Enter Website" className="form-control "></input>
//               <button variant="primary" onClick={Savedata}>
//             Add
//           </button>
//             </div>
            
// )
// }
// export default Demo;


















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Demo.css"
// import { ButtonGroup } from "react-bootstrap";


// const Demo=()=>{
//   const [user,setuser]=useState("");
//   const [disable,setdisable]=useState(false);
//   const [value,setvalue]=useState("Disable")
//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{ 
//       setuser(res.data)

//       })
//   },[])

//   const handledisable=(id)=>{
   
//     user.map((dt)=>{
//       if(dt.id==id){
//       //   console.log(dt.id);
//       //  setdisable(true);
//       //   setvalue("enable")
     
//         // setdisable(false);
//         // setvalue("Disable")
//       }
//     })
    
       
      
   
    
//   }
//   return(
//     <>
//    {/* <!-- Button trigger modal --> */}
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

// {/* <!-- Modal --> */}
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//       <table class="table table-hover table-striped overflow-hidden">
//       <thead>
//     <tr>
//       <th scope="col">S.r</th>
//       <th scope="col">name</th>
//       <th scope="col">email</th>
//       <th scope="col">username</th>
//       <th scope="col">disable</th>
//     </tr>
//   </thead>
//   <tbody>
//     {user && user.map((res)=>(
//     <tr>
//       <th scope="row">{res.id}</th>
//       <td>{res.name}</td>
//       <td>{res.email}</td>
//       <td>{res.username}</td>
//       <td><button className="btn btn-primary"  onClick={()=>handledisable(res.id)}>{value}</button></td>
//     </tr>))
    
// }
//   </tbody>
// </table>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//   </>
//   )
// }
// export default Demo;
// import React, { useRef, useState } from "react";
// import axios from "axios";
// function Demo(){
  
//   const [state,setstate]=useState({
//     name:"",
//     email:"",
//     username:""
//   })
//   const textArea=useRef();

//   function handleChange(evt) {
//   const value=evt.target.value;
//     setstate({
//     //   name:evt.target.value,
//     // email:evt.target.value,
//     // username:evt.target.value
  
//       ...state,
//       [evt.target.name]: value
      
//     });
//   }
    
//  const sendDataSomewhere=()=>{
//   var id
//  var contactList = JSON.parse(localStorage.getItem('Demo')) ?? []
// console.log(contactList);
// var id=0;
//   const obj={
//     id:id++,
//     name:state.name,
//     email:state.email,
//     username:state.username
//   };
//  contactList.push(obj);
//  localStorage.setItem('Demo', JSON.stringify(contactList))
// console.log(state);
//  }
 

//     return (
//      <div>
      
      
     
//       <input name="name" className="form-control" value={state.name} onChange={handleChange}/>
//           <br/>
//         <br/>
//         <input  name="email" className="form-control" value={state.email} onChange={handleChange}></input>
//           <br/>
//           <br/>
          
//           <input name="username" className="form-control" value={state.username} onChange={handleChange}></input>
//           <br/>

//         <button onClick={sendDataSomewhere}>Submit</button>
      
//      </div>
//     );
  
//     }
// export default Demo;




// import React, { useEffect, useState } from "react";
//  import axios from "axios";
// function Demo(){

//     const [data,setdata]=useState('');
//     const [finddata,setfinddata]=useState('')
//     const [selectauth,setselectauth]=useState([])
// useEffect(()=>{
// axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     const response=res.data
//     setdata(response)
//     setfinddata(res.data)
// }).catch((res)=>{
//   console.log(res)
// })
// },[])
// const Searchdata=(evt)=>{
 
//   setfinddata( data.filter(f=>f.name.toLowerCase().includes(evt.target.value)));
// }
// const selectpost=(id)=>{

//   axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
//     setselectauth(res.data);
//     selectauth.map((data)=>{

//       if(data.userId==id){
//         return(
//           <div>
// { data }
//           </div>
        
//         )
      
//       }
//     })
    
//   }).catch((res)=>{
//     console.log(res)
//   })
// }

//     return(
//         <div className="container-fluid ">
//           <div className="shadow-lg p-3 mb-5 bg-body rounded">
//           <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
//             <div className="">
//           <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={Searchdata}/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//       </div>
//           </nav>
//           </div>
       
//           <table class="table table-striped table-hover shadow-lg p-3 mb-5 bg-body rounded">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//   {finddata && finddata.map((res)=>(
//                   <tr>
//                   <td>{res.name}</td>
//                     <td >{res.id}</td>
//                     <td>{res.email}</td>
//                     <td>{res.username}</td>
//                     <td><button onClick={()=>selectpost(res.id)}>select</button></td>
//                   </tr>
//             ))}
//   </tbody>
// </table>

//           {/* <input type="text" placeholder="search" onChange={Searchdata} />
//           <table border="1">
//                 <thead >
//                   <tr>
//                   <td>name</td>
//                   <td>id</td>
//                   <td>email</td>
//                   <td>username</td>
//                   <td>select</td>
//                   </tr>
//                 </thead>
//                 <tbody >
//                 {finddata && finddata.map((res)=>(
//                   <tr>
//                   <td>{res.name}</td>
//                     <td >{res.id}</td>
//                     <td>{res.email}</td>
//                     <td>{res.username}</td>
//                     <td><button>select</button></td>
//                   </tr>
//             ))}
//                             </tbody>

//               </table> */}
//         </div>
//     )
// }
// export default Demo;







// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./admin.css"
// import { logDOM } from "@testing-library/react";
// import Home from "./components/Home";
// function Demo() {
//   const [isValid, setIsValid] = useState(false);
//   const [message, setMessage] = useState('');
//   const [email, setemail] = useState('')
//   const [user, setuser] = useState("");

//   const emailRegex = /\S+@\S+\.\S+/;

//   const navigate = useNavigate();
//   const validateEmail = (event) => {
//     const check = event.target.value
//       if (emailRegex.test(check)) {
//       setIsValid(true);
//       setMessage('Your email looks good!');
//     } else {
//       setIsValid(false);
//       setMessage('Please enter a valid email!');
//     }
//     setemail(check)
//   };
//   console.log(email);            
//   const handlesubmit = () => {
//     const userlogin = JSON.parse(localStorage.getItem('demo'));
//   console.log(userlogin);
//     if(userlogin==email){
//       navigate("/Home")
//       console.log("naigated");
//     }
//     else{
//       localStorage.setItem('demo', JSON.stringify(email));
    
//     }
//   }
//   return (
//     <div className="container">
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className="email-input"
//         onChange={validateEmail} 
//       />
//       <button onClick={() =>handlesubmit()}>submit</button>
//       {/* isValid ? "" : alert("enter valid email" */}
//       {/*If the entered email is valid, the message will be blue, otherwise it will be red. */}
//       <div className={`message ${isValid ? 'success' : "djjflk"}`}>
//         {message}
//       </div>
//     </div>
//   )
// }
// export default Demo;