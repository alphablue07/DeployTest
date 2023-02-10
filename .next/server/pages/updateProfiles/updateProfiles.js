(() => {
var exports = {};
exports.id = 438;
exports.ids = [438];
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

/***/ 1460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_nav_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1383);
/* harmony import */ var _components_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(350);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _action_autentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6987);
/* harmony import */ var _action_games__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1735);
/* harmony import */ var _action_fb_storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1185);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _action_fb_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6257);
/* eslint-disable no-restricted-globals */ 









function Profile() {
    (0,_action_games__WEBPACK_IMPORTED_MODULE_6__/* .halamanGameVerifikasi */ .TK)();
    const currentUser = (0,_action_fb_storage_js__WEBPACK_IMPORTED_MODULE_7__/* .useAuth */ .aC)();
    const [updateProfile, setUpdateProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    function handleChange(e) {
        setUpdateProfile({
            [e.target.name]: e.target.value
        });
    // console.log({[e.target.name] : e.target.value})
    }
    function handleClick() {
        (0,_action_fb_database__WEBPACK_IMPORTED_MODULE_9__/* .updateProfile2 */ .Ug)();
    }
    const setDataUser = (dataUser)=>{
        // console.log("Data User", dataUser)
        setProfile(dataUser);
    };
    const setDataUserDetail = (dataUser)=>{
    // console.log("data user detail:", dataUser)
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_action_autentication__WEBPACK_IMPORTED_MODULE_5__/* .checkDataLogin */ .C)(setIsLogin, setDataUserDetail, setDataUser, setProfile);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundColor: "#2B2D33",
            color: "#fff"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_nav_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                bgColor: "#4A4A5C"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                fluid: true,
                className: "mt-5 vw-100 vh-120",
                style: {
                    padding: "10vh 10vh",
                    backgroundColor: "#3E4552"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-5",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {
                            onSubmit: handleClick,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                    className: "mb-3",
                                    controlId: "full-name",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
                                            children: "Full Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                            id: "fullname",
                                            type: "plaintext",
                                            onChange: handleChange,
                                            placeholder: profile?.name,
                                            name: "name"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                    className: "mb-3",
                                    controlId: "email",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
                                            children: "username"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                            type: "plaintext",
                                            onChange: handleChange,
                                            placeholder: profile?.username,
                                            name: "username"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                    className: "mb-3",
                                    controlId: "City",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
                                            children: "City"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                            type: "plaintext",
                                            onChange: handleChange,
                                            placeholder: profile?.city,
                                            name: "city"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                    className: "mb-3",
                                    controlId: "Social-Media",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
                                            children: "Social Media"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                            type: "plaintext",
                                            onChange: handleChange,
                                            placeholder: profile?.social_media,
                                            name: "social_media"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    type: "submit",
                                    className: "btn btn-primary me-3",
                                    children: "Update"
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}


/***/ }),

/***/ 4345:
/***/ (() => {



/***/ }),

/***/ 3398:
/***/ ((module) => {

"use strict";
module.exports = require("faye-websocket");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [633,210,932,676,664,383,735], () => (__webpack_exec__(1460)));
module.exports = __webpack_exports__;

})();