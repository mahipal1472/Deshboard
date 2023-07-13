import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
return(
    <>
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
            <li className="mb-1">
            <Link tag="a"
              // className={selectedMenu === false} 
              to="/Demo" target="blank">
              <i className="fa fa-envelope-open"></i> All Challans
            </Link>
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



// import React from 'react'
// import { useNavigate } from "react-router-dom";

// export default function Home() {
// const navigate=useNavigate();
//     const handlesubmit=()=>{
//     // JSON.parse(localStorage.getItem("dome"))
      
//             // localStorage.removeItem("demo"); 
//         navigate("/")
//         console.log("navigated");
//     }
      
//     return (
//         <div className='hero'>
//             <button className='btn btn-primary' onClick={()=>handlesubmit}>logout</button>
//             <div className="card bg-dark text-white border-0">
//                 <img src="/assest/bg.webp" className="card-img" alt="Background" height="550px" />
//                 <div className="card-img-overlay">
//                     <div className="container">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     <p className="card-text">Last updated 3 mins ago</p>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//     )
// }