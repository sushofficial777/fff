// import React, { useEffect,useCallback } from "react";
// import { useNavigate } from "react-router-dom";



// const ProtectedRoute = (props) => {
//   const navigate = useNavigate();
//   const { Component } = props;

//   const authFunction = useCallback(async () =>{
//   await  fetch("/admin/authentication").then((res) => {
    
//       if (res.status === 201) {
        
//         navigate("/auth/sign-in", { replace: true });
//         return;
//       } else if (res.status === 200) {
        
//         if (window.location.pathname === "/auth/sign-in" || window.location.pathname === "/" ) {
//           navigate("/admin/dashboard", { replace: true });
//         }
//       } else {
       
      
//       }
//     });
//   });
  
//   useEffect(() => {
//     // window.location.reload();
//     authFunction();
//   });
//   return (
//     <>
//       <Component />
//     </>
//   );
// };

// export default ProtectedRoute;
