import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Offcanvas } from "bootstrap";
import "./Deshboard.css"
import {Switch} from "antd"
// import  "./toggle.css"
import { Breadcrumb } from "react-bootstrap";

function Deshboard() {
  
  const [toggle,settoggle]=useState(true);
 const  handleswitch=()=>{
    toggle?settoggle(false):settoggle(true)
  }
  return (
    <>
    <Switch onClick={handleswitch}/>

  <div className="sidebar container-fluid  p-0 d-flex vh-100" >
        <div id="bdsidebar" className="mahi d-flex flex-column flex-shrink-0 p-3 bg-info text-white offcanvas-md  offcanvas-start" style={{width:"200px"}}>
          <a href="#" className="navbar-brand" >
            <h5><i className=" fa-solid fa-bomb " style={{ fontSize: "25px" }}></i> Remot dev </h5>
          </a>
          <hr />
    
          <ul className="mynav nav nav-pills flex-column">
            <li className="nav-item mb-3">
              <a href="#" className="active" >
                <i className="fa-solid fa-wave-square"></i>
                overview
              </a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="" >
                <i className="fa-solid fa-bell">
                  <span className="notification-badge "></span>
                </i>
                mahipal
              </a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="" >
                <i className="fa-solid fa-chart-simple"></i>
                anurag
              </a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="" >
                <i className="fa-solid fa-star"></i>
                vishal
              </a>

            </li>
            <li className="nav-item mb-3">
              <a href="#" className="" >
                <i className="fa-solid fa-cart-shopping"></i>
                insepctions
              </a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="" >
                <i className="fa-solid fa-user"></i>
                help
              </a>
            </li>
          </ul>
          <hr />
          <div className="d-flex ">
            <img src="images.jpg" alt=" " className="img-fluid rounded me-2 width-50px" />
            <span>
              <h6 className="mt-1  mb-0">mahipal</h6>

            </span>
          </div>
          
        </div>
        
        <div className="bg-light flex-fill" style={{ width: "100%" }}>
          <div className="p-2 d-md-none d-flex text-white bg-success">
            <a href="#" className="text-white" data-bs-toggle="offcanvas" data-bs-target="#bdsidebar">
              <i className="fa-solid fa-bars"></i>
            </a>
            <span className="ms-3"></span>
          </div>


          <div className="container mt-5 ">
            <div className="row ">
              <div className="col-md-3 col-lg-4 col-sm-2 my-3">
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-lg-4 col-sm-2 my-3">
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-4 col-sm-2 my-3">
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-4 col-sm-2 my-3">
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-4 col-sm-2 my-3">
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-4 col-sm-2 my-3">
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>

            </div>


            {/* <div className="card mx-5 d-flex h-10" style={{ width: "100px", height:"150px" }}>
            <img src="..." class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title texet-center">Card title</h5>
            </div>
          </div> */}
          </div>



        </div>
      </div>

      

    </>

  )
}

export default Deshboard;
{/* <nav class="navbar navbar-light bg-light " style={{width:"100%"}}>
  <a class="navbar-brand" href="#"><h3>Deshboard</h3></a>
  <i className="fa-solid fa-setting"></i>
</nav> */}
// {/* <div className="p-4" data-bs-target="#bdsidebar">
//         <nav >
//           <ol className="breadcrumb">
//             <li className="breadcrumb-item"><i className="fa-solid fa-house"></i></li>
//             <li className="breadcrumb-item">Setting</li>
//             <li className="breadcrumb-item">Help</li>
//             {/* style="--bs-breadcrumb-divider:'>; font-size-14'" */}
//           </ol>
//         </nav>
//         </div> */}
 



<>
<div className="container ">
    <div className=" m-0  vh-100 p-0 offcanvas-md offcanvas-start" >
        <div className=" bg-light m-0 w-25 h-25 ">
            <span>
                <img src="ada.png" alt=""/>
            </span>
        </div>
        <div className="  bg-info m-0 w-25 h-100 d-flex justify-content-center ">
            {/* <div className="admin bg-light "> */}
                {/* <span className="admin d-flex mx-auto"> */}
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="" className="admin m-2"/>
              {/* <i className="admin icon fa-regular fa-5x  mx-auto bg-light fa-user  " style={{width:"25px",height:"50px"}}></i>        */}
              {/* </span> */}
            {/* </div> */}
            
  <hr />
  
        </div>
        </div>
        </div>
</>