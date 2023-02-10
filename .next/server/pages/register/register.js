"use strict";
(() => {
var exports = {};
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 5523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
// EXTERNAL MODULE: ./src/config/firebase.js
var firebase = __webpack_require__(5038);
// EXTERNAL MODULE: ./src/components/layout/nav/Navbar.jsx + 2 modules
var Navbar = __webpack_require__(1383);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7511);
// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__(5226);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(8907);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: external "react-bootstrap/Card"
const Card_namespaceObject = require("react-bootstrap/Card");
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 3 modules
var dist = __webpack_require__(8530);
// EXTERNAL MODULE: ./src/action/fb_database.js
var fb_database = __webpack_require__(6257);
;// CONCATENATED MODULE: ./src/pages/register/register.jsx


// import { Button, Container, Grid, TextField } from "@mui/material";











const auth = firebase/* authFirebase */.Wn;
class Register extends external_react_.Component {
    state = {
        name: "",
        username: "",
        email: "",
        password: "",
        city: "",
        social_media: ""
    };
    handleChangeField = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e)=>{
        e.preventDefault();
        const { email , password  } = this.state;
        (0,dist/* createUserWithEmailAndPassword */.Xb)(auth, email, password).then((res)=>{
            (0,fb_database/* registerUser2 */.xF)(res.user.uid, this.state.name, this.state.username, res.user.email, this.state.city, this.state.social_media);
            (0,dist/* sendEmailVerification */.w$)(res.user).then(()=>{
                alert("Mohon verifikasi email anda");
                window.location.href = "/";
            }).catch((error)=>{
                alert(error.message);
            });
        }).catch((err)=>{
            alert(err.message);
        });
    };
    render() {
        const { name , username , email , password , city , social_media  } = this.state;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                    bgColor: "#4A4A5C"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    className: "vw-100 vh-100",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-5 mt-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "mt-5",
                                    children: "Sign Up"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()), {
                                    className: "mt-3",
                                    onSubmit: this.handleSubmit,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                                            className: "mb-3",
                                            controlId: "formBasicEmail",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                                type: "email",
                                                placeholder: "Enter email",
                                                onChange: this.handleChangeField,
                                                name: "email"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                                            className: "mb-3",
                                            controlId: "formBasicPassword",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                                type: "password",
                                                placeholder: "Password",
                                                onChange: this.handleChangeField,
                                                name: "password"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                                            className: "mb-3",
                                            controlId: "name",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                                placeholder: "name",
                                                onChange: this.handleChangeField,
                                                name: "name"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                                            className: "mb-3",
                                            controlId: "username",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                                placeholder: "username",
                                                onChange: this.handleChangeField,
                                                name: "username"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                                            className: "mb-3",
                                            controlId: "city",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                                placeholder: "city",
                                                onChange: this.handleChangeField,
                                                name: "city"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                                            className: "mb-3",
                                            controlId: "social_media",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                                placeholder: "social media",
                                                onChange: this.handleChangeField,
                                                name: "social_media"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            variant: "primary",
                                            type: "submit",
                                            children: "Submit"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const register = (Register);


/***/ }),

/***/ 3398:
/***/ ((module) => {

module.exports = require("faye-websocket");

/***/ }),

/***/ 4809:
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 7511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 8907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [633,383], () => (__webpack_exec__(5523)));
module.exports = __webpack_exports__;

})();