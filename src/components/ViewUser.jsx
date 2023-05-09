import React from "react";

const ViewUser = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUser;
