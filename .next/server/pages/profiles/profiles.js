(() => {
var exports = {};
exports.id = 557;
exports.ids = [557];
exports.modules = {

/***/ 350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4345);
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_3__);




const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "page-section bg-dark py-5 text-center",
        id: "footer",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "span-footer",
                children: "Terms of Service"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 5987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profiles)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/layout/nav/Navbar.jsx + 2 modules
var Navbar = __webpack_require__(1383);
// EXTERNAL MODULE: ./src/components/layout/footer/Footer.jsx
var Footer = __webpack_require__(350);
;// CONCATENATED MODULE: external "mdb-react-ui-kit"
const external_mdb_react_ui_kit_namespaceObject = require("mdb-react-ui-kit");
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/action/fb_database.js
var fb_database = __webpack_require__(6257);
// EXTERNAL MODULE: ./src/action/autentication.js
var autentication = __webpack_require__(6987);
;// CONCATENATED MODULE: external "@testing-library/react"
const react_namespaceObject = require("@testing-library/react");
// EXTERNAL MODULE: ./src/action/games.js
var games = __webpack_require__(1735);
// EXTERNAL MODULE: ./src/action/fb_storage.js
var fb_storage = __webpack_require__(1185);
;// CONCATENATED MODULE: ./src/pages/profiles/profiles.jsx
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());














const Profiles = (props)=>{
    (0,games/* halamanGameVerifikasi */.TK)();
    const dataUser = [];
    const currentUser = (0,fb_storage/* useAuth */.aC)();
    const [dataList, setDataList] = (0,external_react_.useState)([]);
    const [isLogin, setIsLogin] = (0,external_react_.useState)(false);
    const [photoURL, setphotoURL] = (0,external_react_.useState)("https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80");
    const [profile, setProfile] = (0,external_react_.useState)();
    const [photo, setPhoto] = (0,external_react_.useState)(null);
    const setDataUser = (dataUser)=>{
        console.log("Data User", dataUser);
    };
    const setDataUserDetail = (dataUser)=>{
        console.log("Data User Detail", dataUser);
        setProfile(dataUser);
    };
    const files = document.getElementById("profileSubmit");
    function handleChange(e) {
        files.className = "mt-1 disabled btn btn-primary me-3";
        files.textContent = "Waiting for input...";
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
            files.textContent = "Save Changes";
            files.className = "mt-1 btn btn-primary me-3";
        }
    }
    function handleClick() {
        if (photo == null) {
            alert("Photo data is empty");
        } else {
            (0,fb_storage/* upload */.ws)(photo, currentUser);
            alert("uploaded file");
        }
    }
    const getData = async ()=>{
        const data_new = await (0,games/* getLeaderBoard */.y8)(10);
        setDataList(data_new);
        console.log(data_new);
    };
    dataList.forEach((elem)=>{
        if (elem.id_player == currentUser.uid) {
            const score = elem.score;
            dataUser.push(score);
        }
    });
    (0,external_react_.useEffect)(()=>{
        (0,autentication/* checkDataLogin */.C)(setIsLogin, setDataUser, setDataUserDetail, setProfile);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (currentUser?.photoURL) {
            setphotoURL(currentUser.photoURL);
        }
    }, [
        currentUser
    ]);
    (0,external_react_.useEffect)(()=>{
        getData();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            backgroundColor: "#2B2D33",
            color: "#fff"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                bgColor: "#4A4A5C"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                fluid: true,
                className: "mt-5 vw-100 vh-100",
                style: {
                    padding: "10vh 10vh",
                    backgroundColor: "#3E4552"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
                                        className: "bg-dark",
                                        style: {
                                            width: "100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Img, {
                                                variant: "top",
                                                src: photoURL
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Body, {
                                                style: {
                                                    position: "relative"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    style: {
                                                        position: "absolute",
                                                        top: "1px",
                                                        left: "0",
                                                        right: "0",
                                                        backgroundColor: "rgba(255,255,255,0.8)"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                        onChange: handleChange,
                                                        type: "file",
                                                        size: "sm"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                        id: "profileSubmit",
                                        className: "mt-1 disabled",
                                        type: "submit",
                                        onClick: handleClick,
                                        children: "Save Changes"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5 offset-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                        className: "mb-3",
                                        controlId: "name",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                children: "full name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                type: "text",
                                                placeholder: profile?.name,
                                                "aria-label": "Disabled input example",
                                                readOnly: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                        className: "mb-3",
                                        controlId: "username",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                children: "username"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                type: "text",
                                                placeholder: profile?.username,
                                                "aria-label": "Disabled input example",
                                                readOnly: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                        className: "mb-3",
                                        controlId: "City",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                children: "city"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                type: "text",
                                                placeholder: profile?.city,
                                                "aria-label": "Disabled input example",
                                                readOnly: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                        className: "mb-3",
                                        controlId: "Social-Media",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                children: "social media"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                type: "text",
                                                placeholder: profile?.social_media,
                                                "aria-label": "Disabled input example",
                                                readOnly: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                        href: "profiles/update",
                                        className: "btn btn-primary me-3",
                                        children: "Here, Update Your Profile Data !"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2 offset-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
                                className: "text-dark",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Header, {
                                        as: "h5",
                                        className: "text-center text-dark",
                                        children: "Game Score"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                        className: "text-center",
                                        children: dataUser
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const profiles = (Profiles);


/***/ }),

/***/ 4345:
/***/ (() => {



/***/ }),

/***/ 3398:
/***/ ((module) => {

"use strict";
module.exports = require("faye-websocket");

/***/ }),

/***/ 4809:
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 1937:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 7511:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 4678:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 5226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 9306:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 8907:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 4661:
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [633,383,735], () => (__webpack_exec__(5987)));
module.exports = __webpack_exports__;

})();