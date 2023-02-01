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
  Button,
} from "react-bootstrap";
import { getUserById } from "../../action/fb_database";

import "./styles.css";
import { checkDataLogin } from "../../action/autentication";
import { render } from "@testing-library/react";
import { halamanGameVerifikasi } from "../../action/games";

    const Profiles = (props) => {
      halamanGameVerifikasi();
      const dataUser = [];
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
      
      const Capitalize = (value) => {
        if (value) {return value.toUpperCase()}
        return ""
      }
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
                <div>
                <MDBTypography tag='div' className='display-3 pb-3 mb-3'>
                  {profile?.name}
                </MDBTypography>
            </div>
                <div
                  id="pp"
                  className="border mb-4 d-flex justify-content-center align-items-center"
                  style={{ width: "25vh", height: "25vh", borderRadius: "50%" }}
                >
                  {profile?.image}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <Form>
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label>username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={profile?.username}
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={profile?.name}
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={profile?.email}
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
                  <Button href="profiles/update" className="btn btn-primary me-3">Update
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

export default Profiles;
