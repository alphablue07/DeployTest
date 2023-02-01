import React, { Component, useState, useEffect} from "react";
import Navbar from "../../components/layout/nav/Navbar";
import Footer from "../../components/layout/footer/Footer";
import {
  Form,
  Container,
  Card,
  CardGroup,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { checkDataLogin } from "../../action/autentication";
import { getUserById, updateProfile2 } from "../../action/fb_database";

const ProfileUpdate = (props) => {



  const [isLogin, setIsLogin] = useState(false);

      const [profile, setProfile] = useState();
      const setDataUser = (dataUser)=>{
          console.log("Data User", dataUser)
        }       
        const setDataUserDetail = (dataUser) =>{
          console.log("Data User Detail", dataUser)
          setProfile(dataUser)
      }
      useEffect(() => {
          checkDataLogin(setIsLogin,setDataUser, setDataUserDetail, setProfile)
      }, []);      

  
  
    return (
      <div style={{ backgroundColor: "#2B2D33", color: "#fff" }}>
        <Navbar bgColor="#4A4A5C" />
        <Container
          fluid
          className="mt-5 vw-100 vh-120"
          style={{ padding: "10vh 10vh", backgroundColor: "#3E4552" }}
        >
          <div className="row">
            <div className="col-3">
              <p className="lead fs-2">username</p>
              <div
                id="pp"
                className="border mb-4 d-flex justify-content-center align-items-center"
                style={{ width: "25vh", height: "25vh", borderRadius: "50%" }}
              >
                profile picture
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col-5">
              <Form>
                <Form.Group className="mb-3" controlId="full-name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="plaintext" placeholder={profile?.name}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder={profile?.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="plaintext" placeholder={profile?.city}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Social-Media">
                  <Form.Label>Social Media</Form.Label>
                  <Form.Control type="plaintext"placeholder={profile?.social_media}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="profile-picture">
                  <Form.Label>Profile picture</Form.Label>
                  <Form.Control type="file"></Form.Control>
                </Form.Group>
                <Button type="submit" className="btn btn-primary me-3">
                  Update
                </Button>
                <Button type="submit" className="btn btn-danger">
                  Delete
                </Button>
              </Form>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }


export default ProfileUpdate;
