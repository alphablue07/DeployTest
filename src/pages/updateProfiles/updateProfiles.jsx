/* eslint-disable no-restricted-globals */
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
import { halamanGameVerifikasi } from "../../action/games";
import { useAuth,upload,deletePhoto } from "../../action/fb_storage.js"
import  Link  from "next/link";
import { updateProfile2 } from "../../action/fb_database";

export default function Profile(){

      halamanGameVerifikasi();
      const currentUser = useAuth();

      const [updateProfile, setUpdateProfile] = useState("");
      const [isLogin, setIsLogin] = useState(false);
      const [profile, setProfile] = useState();

      function handleChange(e){
        setUpdateProfile({[e.target.name] : e.target.value})
        // console.log({[e.target.name] : e.target.value})
      }

      function handleClick(){
        updateProfile2()
      }

      const setDataUser = (dataUser)=>{
        // console.log("Data User", dataUser)
        setProfile(dataUser)
      } 
      
      const setDataUserDetail = (dataUser) =>{
          // console.log("data user detail:", dataUser)
      }
      useEffect(() => {
          checkDataLogin(setIsLogin, setDataUserDetail, setDataUser, setProfile)
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
          <div className="col-5">
              <Form onSubmit={handleClick}>
                <Form.Group className="mb-3" controlId="full-name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control id="fullname" type="plaintext" onChange={handleChange} placeholder={profile?.name} name="name"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>username</Form.Label>
                  <Form.Control  type="plaintext" onChange={handleChange} placeholder={profile?.username}  name="username"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="plaintext"  onChange={handleChange} placeholder={profile?.city} name="city"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Social-Media">
                  <Form.Label>Social Media</Form.Label>
                  <Form.Control type="plaintext" onChange={handleChange} placeholder={profile?.social_media} name="social_media"></Form.Control>
                </Form.Group>
                <Button type="submit" className="btn btn-primary me-3" >
                  Update
                </Button>
              </Form>
            </div>
        </div>
        </Container>
        <Footer />
      </div>
    );
  }

