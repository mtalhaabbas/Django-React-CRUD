import React, { useEffect, useState, useRef } from "react";

const Home = () => {
  const [users, setusers] = useState([]);
  const get_users = () => {
    fetch("/user/")
      .then((res) => res.json())
      .then((data) => {
        setusers(data);
      });
  };

  const re = useRef(null);
  if (re.current) {
    re.current.addEventListener("show.bs.modal", function (event) {
      // Button that triggered the modal
      var button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      var recipient = button.getAttribute("data-bs-whatever");
      // If necessary, you could initiate an AJAX request here
      // and then do the updating in a callback.
      //
      // Update the modal's content.
      var modalTitle = re.current.querySelector(".modal-title");
      var modalBodyInput = re.current.querySelector(".modal-body input");

      modalTitle.textContent = "New message to " + recipient;
      modalBodyInput.value = recipient;
    });
  }
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    clas: "",
  });

  const deleteUser = (u) => {
    const res = fetch(`/user/${u}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (res) {
      alert("Student Deleted");
      get_users();
    }
  };
  const updateUser = (id, user, email, clas) => {
    const res = fetch(`/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        first_name: clas,
        username: user,
        email: email,
      }),
    });
    if (res) {
      alert("Student Detail Updated");
      window.location.reload();
    }
  };
  const postUserData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { username, email, clas } = userData;
    if (username && clas && email) {
      const res = fetch("/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          first_name: clas,
          username: username,
          email: email,
        }),
      });

      if (res) {
        setUserData({
          username: "",
          email: "",
          clas: "",
        });

        alert("Student Added");
        get_users();
      } else {
        alert("plz fill the Student Detail");
      }
    } else {
      alert("plz fill the Student Detail");
    }
  };

  useEffect(() => {
    get_users();
  }, []);

  return (
    <>
      <div className="container mt-4 mx-auto">
        <h2 className="text-center alert alert-warning">
          Django React CRUD Application for Students Record
        </h2>
        <div className="row mt-5">
          <div className="col-sm-4">
            <h5 className="text-center alert alert-info">Add New Student</h5>

            <form type="post" onSubmit={submitData}>
              <div class="mb-3">
                <label for="exampleInput" class="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInput"
                  name="username"
                  value={userData.username}
                  onChange={postUserData}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={userData.email}
                  onChange={postUserData}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInput" class="form-label">
                  Class Name:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="clas"
                  value={userData.clas}
                  onChange={postUserData}
                />
              </div>
              <button type="submit" class="btn btn-success">
                Add
              </button>
            </form>
          </div>

          <div className="col-sm-8">
            <h5 className="text-center alert alert-info">
              All Students Details
            </h5>
            <table class="table ">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Class</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr>
                    <th>{u.id}</th>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>{u.first_name}</td>
                    <td>
                      <button
                        className="btn btn-outline-warning mx-auto"
                        type="button"
                        value="Edit"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal${u.id}`}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger mx-auto"
                        type="button"
                        value="Delete"
                        onClick={() => deleteUser(u.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <div
                      class="modal fade"
                      id={`exampleModal${u.id}`}
                      ref={re}
                      aria-labelledby="exampleModalLabel"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Update Student Detail
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="mb-3">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  Name:
                                </label>
                                <input
                                  type="text"
                                  name="username"
                                  class="form-control"
                                  value={u.username}
                                />
                              </div>
                              <div class="mb-3">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  Email:
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  class="form-control"
                                  id=""
                                  value={u.email}
                                />
                              </div>
                              <div class="mb-3">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  Class:
                                </label>
                                <input
                                  type="text"
                                  name="clas"
                                  class="form-control"
                                  id=""
                                  value={u.first_name}
                                />
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={() =>
                                updateUser(u.id, u.username, u.email, u.clas)
                              }
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
