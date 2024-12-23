// import React from "react";
// import AdminHeader from "../components/Layout/AdminHeader";
// import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
// import CreateAdminProducts from "../components/Admin/CreateAdminProducts";

// const AdminDashboardAddProducts = () => {
//     return (
//         <div>
//           <AdminHeader />
//           <div className="w-full flex">
//             <div className="flex items-start justify-between w-full">
//               <div className="w-[80px] 800px:w-[330px]">
//                 <AdminSideBar active={8} />
//               </div>
//               <CreateAdminProducts/>
//             </div>
//           </div>
//         </div>
//       );
// }

// export default AdminDashboardAddProducts

import React from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import CreateAdminProducts from "../components/Admin/CreateAdminProducts";

const AdminDashboardAddProducts = () => {
    return (
        <div>
          {/* Header */}
          <AdminHeader />
          
          {/* Main content */}
          <div className="w-full flex">
            {/* Sidebar */}
            <div className="w-[80px] 800px:w-[330px]">
              <AdminSideBar active={8} />
            </div>
            
            {/* Main section */}
            <div className="flex-1 p-4">
              <CreateAdminProducts />
            </div>
          </div>
        </div>
    );
}

export default AdminDashboardAddProducts;
