import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';



function App() {
  const [users, setUsers] = useState([]);
  const [usersDetails, setUsersDetails] = useState([]);
  const [details, setDetails] = useState({});
  const [details1, setDetail1] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
  axios
  .get("https://jsonplaceholder.typicode.com/users/")
  .then((res) => setUsersDetails(res.data))
  .catch((err) => console.log(err));
}, []);
  const [searchTerm, setSearchTerm] = useState("");
// console.log(details)
  const handleClick = (e) => {
    console.log(e)
     usersDetails.map((el) => {
      return el.id === e ? el : "by";
    });
    setDetails(usersDetails.find((el) => el.id === e));

    users.map((el) => {
      return el.id === e ? el : "by";
    });
    setDetail1(users.find((el) => el.id === e));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArr = users.filter((el) =>
    el.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className='w-100 text-center input_div'>
     <div className="input-group mb-3 input_div w-50">
              <input 
              type="text" 
              className="form-control w-50" 
             
              placeholder="Search" 
              onChange={handleSearch} 
              />
        </div>
      </div>
    <div className="App">
      <div className='table_div'>
             
  
      <table className="table table12 table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.map((item, index) => {
            return (index >=10?"":
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed===true?"completed":"Incompleted"}</td>
                <td>
                  <Button onClick={() => handleClick(item.id)}>view user</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      <div className='div_details'>
        <h6>ToDo Id: {details1.userId}</h6>
        <h6>Todo Title: {details1.title}</h6>
        <h6>User Id: {details1.userId}</h6>
        <h6>Name: {details.name}</h6>
        <h6>Email_Id: {details.email}</h6>
        </div>
       
 
    </div>
    </>
  );
}

export default App;
