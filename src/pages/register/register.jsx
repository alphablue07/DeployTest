import React, { Component } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { authFirebase } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { registerUser2 } from "../../action/fb_database";

const auth = authFirebase;

class Register extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    city: "",
    social_media: "",
  };

  handleChangeField = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        registerUser(
          res.user.uid,
          this.state.name,
          this.state.username,
          res.user.email,
          this.state.city,
          this.state.social_media
        );
        sendEmailVerification(res.user)
          .then(() => {
            alert("Mohon verifikasi email anda");
            window.location.href = "/";
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  render() {
    const { name, username, email, password, city, social_media } = this.state;
    return (
      <Container>
        <Grid container justify="center">
          <Grid xs="12" md="8" lg="4">
            <h2>Halaman Registrasi / Daftar / Sign Up</h2>
            <form onSubmit={this.handleSubmit}>
              <TextField
                type="text"
                fullWidth
                margin="dense"
                variant="outlined"
                size="small"
                value={name}
                onChange={this.handleChangeField}
                name="name"
                label="Name"
                required
              />
              <TextField
                type="text"
                fullWidth
                margin="dense"
                variant="outlined"
                size="small"
                value={username}
                onChange={this.handleChangeField}
                name="username"
                label="Username"
                required
              />
              <TextField
                type="email"
                fullWidth
                margin="dense"
                variant="outlined"
                size="small"
                value={email}
                onChange={this.handleChangeField}
                name="email"
                label="Email"
                required
              />
              <TextField
                type="text"
                fullWidth
                margin="dense"
                variant="outlined"
                size="small"
                value={city}
                onChange={this.handleChangeField}
                name="city"
                label="city"
                required
              />
              <TextField
                type="text"
                fullWidth
                margin="dense"
                variant="outlined"
                size="small"
                value={social_media}
                onChange={this.handleChangeField}
                name="social_media"
                label="Social Media"
                required
              />
              <TextField
                type="password"
                fullWidth
                margin="dense"
                variant="outlined"
                size="small"
                value={password}
                onChange={this.handleChangeField}
                name="password"
                label="Password"
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Registrasi
              </Button>
            </form>
            <p>
              Sudah punya akun? <Link to="/">Login</Link>
            </p>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Register;
