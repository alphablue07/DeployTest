import React, { Component, useState,useEffect } from "react";
import Navbar from "../../components/layout/nav/Navbar";
import Footer from "../../components/layout/footer/Footer";
import { MDBTypography } from 'mdb-react-ui-kit';
import {
  Form,
  Container,
  Card,
  CardGroup,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { getUserById } from "../../action/fb_database";

import "./styles.css";
import { checkDataLogin } from "../../action/autentication";
import { render } from "@testing-library/react";
import { halamanGameVerifikasi } from "../../action/games";
import { useAuth } from "../../action/fb_storage";
import { getLeaderBoard } from "../../action/games";
import { upload } from "../../action/fb_storage";

const Profiles = (props) => {
      halamanGameVerifikasi();

      const dataUser = [];
      const currentUser = useAuth();
      const [dataList, setDataList] = useState([]);
      const [isLogin, setIsLogin] = useState(false);
      const [photoURL, setphotoURL] = useState('https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80');
      const [profile, setProfile] = useState();
      const [photo, setPhoto] = useState(null);
      const setDataUser = (dataUser)=>{
          console.log("Data User", dataUser)
        }       
        const setDataUserDetail = (dataUser) =>{
          console.log("Data User Detail", dataUser)
          setProfile(dataUser)
      }

      const files = document.getElementById('profileSubmit');

      function handleChange(e){
        files.className = 'mt-1 disabled btn btn-primary me-3';
        files.textContent = 'Waiting for input...'
        if(e.target.files[0]){
          setPhoto(e.target.files[0])
          files.textContent = 'Save Changes'
          files.className = 'mt-1 btn btn-primary me-3'
        }
      }

      function handleClick(){
        if(photo == null){
          alert('Photo data is empty')
        }else{
          upload(photo,currentUser)
          alert('uploaded file')
        }
      }

      const getData = async () => {
        const data_new = await getLeaderBoard(10)
        setDataList(data_new)
        console.log(data_new)
    }

    dataList.forEach((elem) => {
      if(elem.id_player == currentUser.uid){
        const score = elem.score;
        dataUser.push(score)
      }
    })
      useEffect(() => {
          checkDataLogin(setIsLogin,setDataUser, setDataUserDetail, setProfile)
      }, []);
      
      useEffect(() => {
        if(currentUser?.photoURL){
          setphotoURL(currentUser.photoURL)
        }
      }, [currentUser])

      useEffect(() => {
        getData()
    }, []);

      return (
        
        <div style={{ backgroundColor: "#2B2D33", color: "#fff" }}>
          <Navbar bgColor="#4A4A5C" />
          <Container
            fluid
            className="mt-5 vw-100 vh-100"
            style={{ padding: "10vh 10vh", backgroundColor: "#3E4552" }}
          >
            <div className="row">
              <div className="col-3">
              <Form>  
              <Card className="bg-dark" style={{ width: '100%' }}>
                <Card.Img variant="top" src={photoURL}/> 
                <Card.Body style={{position: "relative"}}>
                <div style={{position: "absolute", top:"1px", left:"0" , right:"0", backgroundColor:"rgba(255,255,255,0.8)"}}>
                  <Form.Control onChange={handleChange} type="file" size="sm" />
                </div>
                </Card.Body>
              </Card>
              <Button id="profileSubmit" className="mt-1 disabled" type="submit" onClick={handleClick}>Save Changes</Button>
              </Form>
              </div>
              <div className="col-lg-5 offset-1">
              <Form>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>full name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={profile?.name}
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label>username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={profile?.username}
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="City">
                    <Form.Label>city</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={profile?.city}
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Social-Media">
                    <Form.Label>social media</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={profile?.social_media}
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Form.Group>
                  <Button href="profiles/update" className="btn btn-primary me-3">Here, Update Your Profile Data !
                  </Button>
                </Form>
              </div>
              <div className="col-lg-2 offset-1">
                <Card className="text-dark">
                  <Card.Header as="h5" className="text-center text-dark">Game Score</Card.Header>
                  <Card.Text className="text-center">{dataUser}</Card.Text>
                </Card>
              </div>
            </div>
          </Container>
        </div>
      );
}  

export default Profiles;
