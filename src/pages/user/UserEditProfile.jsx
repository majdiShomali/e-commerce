import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/userContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: " solid #f2f2f2",
  boxShadow: 3,
  p: 4,
};

function EditProfile() {

  const { user, setUser } = useContext(UserContext);
  const {userUpdateRefresh ,setUpdateRefresh} = useContext(UserContext);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userId, setUserId] = useState();
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(()=>{
    setName(user?.userName) 
  },[user])


  const [productImage, setProductImage] = useState(null);

  const handleProductImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('userName',name)
    formData.append('image',productImage)

    axios
      .put(`http://localhost:5000/api/users/${user._id}`,
      formData
      )
      .then(function (response) {
        console.log(response);
         setUpdateRefresh(response.data)
        handleClose()
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="w-full">
      <Button
        className=" w-full mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
        variant="text"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col">
            <Input
              onChange={(e) => setName(e.target.value)}
              id="name"
              value={name}
              type="text"
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            
          <input
            className="file-upload-input mx-auto"
            type="file"
            name="image"
            onChange={handleProductImageChange}
            accept="image/*"
            required
          />
            <br></br>

            <br></br>
            <Button
              onClick={handleSubmit}
              className=" m-5 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
              variant="text"
            >
              Edit
            </Button>
            <Button
              className="m-5 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
              variant="text"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EditProfile;
