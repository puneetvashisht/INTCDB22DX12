import React, { useEffect, useState } from "react";

export default function ViewEmployee() {
  const deleteEmployee = (id) => {
    fetch("http://localhost:8000/employees/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // delete from the state
        let remainingEmployees = employees.filter((e) => e.id != id);
        setEmployees(remainingEmployees);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8000/employees")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      });
  }, []);

  const [employees, setEmployees] = useState([]);

  let employeeList = employees.map((employee, i) => {
    console.log(employee);
    return (
      <div key={i} className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{employee.name}</h5>
          <p className="card-text">{employee.salary}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
          <button
            onClick={() => deleteEmployee(employee.id)}
            className="btn btn-danger"
          >
            {" "}
            X{" "}
          </button>
        </div>
      </div>
    );
  });

  return <div className="container row">{employeeList}</div>;
}
