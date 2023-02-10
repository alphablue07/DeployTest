exports.id = 383;
exports.ids = [383];
exports.modules = {

/***/ 2836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/echamp-white.8e93c262.png","height":428,"width":1728,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAALElEQVR42mP4t/Pfwn82/7z+efwL/+f6z4vh37F/8/5Z/nP/5/Mv+J/VPy8AhCIV9lwqEBoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 6987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ firebaseLogout),
/* harmony export */   "C": () => (/* binding */ checkDataLogin)
/* harmony export */ });
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5038);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8530);
/* harmony import */ var _fb_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6257);



const checkDataLogin = async (setIsLogin, setDataUser = ()=>{}, setDataUserInfo = ()=>{})=>{
    const uuid = await localStorage.getItem("UID");
    if (uuid == null) {
        setIsLogin(false);
    } else {
        setIsLogin(true);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .onAuthStateChanged */ .Aj)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .authFirebase */ .Wn, async (user)=>{
            if (user) {
                setDataUser(user);
                setDataUserInfo(await (0,_fb_database__WEBPACK_IMPORTED_MODULE_2__/* .getDataUser */ .VW)(user.uid));
            } else {
                setIsLogin(false);
            }
        });
    }
};
const firebaseLogout = async ()=>{
    localStorage.setItem("jwt-token", null);
    localStorage.setItem("UID", null);
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .signOut */ .w7)(_config_firebase__WEBPACK_IMPORTED_MODULE_0__/* .authFirebase */ .Wn);
    console.log("Signed Out");
};


/***/ }),

/***/ 6257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ug": () => (/* binding */ updateProfile2),
/* harmony export */   "VW": () => (/* binding */ getDataUser),
/* harmony export */   "xF": () => (/* binding */ registerUser2)
/* harmony export */ });
/* unused harmony exports registerUser, retrieveAllUser, retrieveAllScore, getUserById, updateProfile, updateScore, updateProfileImg, getGameInfoById, totalPointByUser, historyByUser, leaderBoardByGame, countPlayerByGame, playerRank, totalGameByUser */
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7917);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7249);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5038);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8530);





const db = _config_firebase__WEBPACK_IMPORTED_MODULE_2__/* .database */ .Fs;
//write biodata
const registerUser = (id_player, name, username, email, city, social_media)=>{
    const dbRef = ref(db, `game_user`);
    const data = {
        id_player,
        name,
        username,
        email,
        total_score: 0,
        city,
        social_media,
        profile_picture: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1fd5442419075.57cc3f77ed8c7.png",
        total_game: 0,
        player_rank: 0
    };
    push(dbRef, data);
};
function registerUser2(id_player, name, username, email, city, social_media) {
    // const db = getDatabase();
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .set */ .t8)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .iH)(db, "game_user/" + id_player), {
        id_player,
        name,
        username,
        email,
        total_score: 0,
        city,
        social_media,
        profile_picture: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1fd5442419075.57cc3f77ed8c7.png",
        total_game: 0,
        player_rank: 0
    });
}
// get one user by id
const getDataUser = (id)=>{
    return new Promise((resolve, reject)=>{
        const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .iH)(db, `game_user/${id}`);
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .onValue */ .jM)(dbRef, (data)=>{
            const value = data.val();
            resolve(value);
        });
    });
};
// get all user
const retrieveAllUser = ()=>{
    return new Promise((resolve, reject)=>{
        const dbRef = ref(db, "game_user");
        onValue(dbRef, (snapshot)=>{
            const value = [];
            // Ubah Object ke Array of Object
            Object.keys(snapshot.val()).map((key)=>{
                value.push({
                    id: key,
                    data: snapshot.val()[key]
                });
            });
            resolve(value);
        });
    });
};
// get game score
const retrieveAllScore = ()=>{
    return new Promise((resolve, reject)=>{
        const dbRef = ref(db, "game_score");
        onValue(dbRef, (snapshot)=>{
            const value = [];
            // Ubah Object ke Array of Object
            Object.keys(snapshot.val()).map((key)=>{
                value.push({
                    id: key,
                    data: snapshot.val()[key]
                });
            });
            resolve(value);
        });
    });
};
//read one biodata
const getUserById = async (id)=>{
    const selected = [];
    const resp = await retrieveAllUser();
    resp.forEach((e)=>{
        if (e.data.id_player === id) {
            selected.push(e);
        }
    });
    return selected;
};
//edit profile
const updateProfile = (id, name, username, city, social_media, profile_picture)=>{
    const dbRef = ref(db, `game_user/${id}`);
    const data = {
        name,
        username,
        city,
        social_media,
        profile_picture
    };
    update(dbRef, data);
    console.log("update done");
};
//updateProfiles
const updateProfile2 = (id_player, name, username, city, social_media)=>{
    const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .iH)(db, `game_user/${id_player}`);
    const data = {
        name,
        username,
        city,
        social_media
    };
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .update */ .Vx)(dbRef, data);
    alert("update done");
};
//update score
const updateScore = (id, total_score)=>{
    const dbRef = ref(db, `game_user/${id}`);
    const data = {
        total_score
    };
    update(dbRef, data);
};
//update profile photo
const updateProfileImg = (id, profile_picture)=>{
    const dbRef = ref(db, `game_user/${id}`);
    const data = {
        profile_picture
    };
    update(dbRef, data);
};
//get game info
const getGameInfoById = (id)=>{
    return new Promise((resolve, reject)=>{
        const dbRef = ref(db, `game_info/${id}`);
        onValue(dbRef, (data)=>{
            const value = data.val();
            resolve(value);
        });
    });
};
//total point
const totalPointByUser = async (id)=>{
    let store = [];
    let point = 0;
    const scoreAll = await retrieveAllScore();
    scoreAll.forEach((e)=>{
        if (e.data.id_player == id) {
            store.push(e);
        }
    });
    store.forEach((e)=>{
        point = point + e.data.score;
    });
    const id_generate = await getUserById(id);
    await updateScore(id_generate[0].id, point);
    return point;
};
//game history
const historyByUser = async (id)=>{
    let store = [];
    const scoreAll = await retrieveAllScore();
    scoreAll.forEach((e)=>{
        if (e.data.id_player == id) {
            store.push(e);
        }
    });
    return store;
};
//leaderboard pergame
const leaderBoardByGame = async (id)=>{
    let temp = [];
    let result = [];
    const scoreAll = await retrieveAllScore();
    scoreAll.forEach((e)=>{
        if (e.data.game_id == id) {
            temp.push(e);
        }
    });
    temp.reduce(function(res, value) {
        if (!res[value.data.id_player]) {
            res[value.data.id_player] = {
                id_player: value.data.id_player,
                score: 0
            };
            result.push(res[value.data.id_player]);
        }
        res[value.data.id_player].score += value.data.score;
        return res;
    }, {});
    // const sorted = Object.keys(resultan).sort(function(a,b){return resultan[a]-resultan(b)})
    let tempSort = result.sort((a, b)=>{
        return b.score - a.score;
    });
    return tempSort;
};
//jumlah user yang bermain pergame
const countPlayerByGame = async (id)=>{
    let counter = 0;
    let player = [];
    let game_player = [];
    const scoreAll = await retrieveAllScore();
    scoreAll.forEach((e)=>{
        if (e.data.game_id == id) {
            player.push(e);
        }
    });
    player.forEach((e)=>{
        if (game_player.includes(e.data.id_player) === false) {
            game_player.push(e.data.id_player);
            counter = counter + 1;
        }
    });
    return counter;
};
// player rank
const playerRank = async (id)=>{
    let result = [];
    const scoreAll = await retrieveAllScore();
    scoreAll.reduce(function(res, value) {
        if (!res[value.data.id_player]) {
            res[value.data.id_player] = {
                id_player: value.data.id_player,
                score: 0
            };
            result.push(res[value.data.id_player]);
        }
        res[value.data.id_player].score += value.data.score;
        return res;
    }, {});
    let tempSort = result.sort((a, b)=>{
        return b.score - a.score;
    });
    const rank = tempSort.findIndex((x)=>x.id_player === id);
    return rank + 1;
};
// total game per user
const totalGameByUser = async (id)=>{
    let game_list = [];
    let temp = [];
    const scoreAll = await retrieveAllScore();
    scoreAll.forEach((e)=>{
        if (e.data.id_player == id) {
            temp.push(e);
        }
    });
    temp.forEach((e)=>{
        if (game_list.includes(e.data.game_id) === false) {
            game_list.push(e.data.game_id);
        }
    });
    return game_list.length;
};


/***/ }),

/***/ 1383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ nav_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/assets/images/echamp-white.png
var echamp_white = __webpack_require__(2836);
// EXTERNAL MODULE: ./src/config/firebase.js
var firebase = __webpack_require__(5038);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 3 modules
var dist = __webpack_require__(8530);
// EXTERNAL MODULE: ./src/action/autentication.js
var autentication = __webpack_require__(6987);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7511);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(8907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__(5226);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);
;// CONCATENATED MODULE: ./src/assets/images/echamp.png
/* harmony default export */ const echamp = ({"src":"/_next/static/media/echamp.e694dc24.png","height":1005,"width":4065,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAR0lEQVR4nGM8VF/3nJGJ6fHd+oZsQWsz8X8f3/9h+P+fn4GB4T0QszLuzc99zi4m/vh+dU0mn6WJ6L/PH1mACtiBks+BWAAAmdoZlFE77xcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/login/login.css
var login = __webpack_require__(9462);
;// CONCATENATED MODULE: ./src/components/login/login.jsx














class Login extends external_react_.Component {
    state = {
        email: "",
        password: ""
    };
    handleLogin = ()=>{
        (0,dist/* signInWithEmailAndPassword */.e5)(firebase/* authFirebase */.Wn, this.state.email, this.state.password).then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            if (!user.emailVerified) {
                alert("Akun ini belum verifikasi email");
            // firebaseLogout()
            } else {}
            localStorage.setItem("jwt-token", user.accessToken);
            localStorage.setItem("UID", user.uid);
            window.location.href = "/";
        // console.log(user.uid)
        }).catch((error)=>{
            const errorMessage = error.message;
            alert(errorMessage);
        });
    };
    handleOnChange = (event)=>{
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
            show: this.props.showModal,
            onHide: this.props.toggleFunc,
            size: "lg",
            "aria-labelledby": "contained-modal-title-vcenter",
            centered: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Body, {
                className: "show-grid modal_body",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                md: 6,
                                className: "row_left"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                                md: 6,
                                className: "row_right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: echamp,
                                            className: "logo_image"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form_login",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()), {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                                                    className: "mb-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                                        type: "email",
                                                        placeholder: "Enter email",
                                                        id: "email",
                                                        onChange: this.handleOnChange
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                                                    className: "mb-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                                        type: "password",
                                                        placeholder: "Password",
                                                        id: "password",
                                                        onChange: this.handleOnChange
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "d-grid gap-2 pb-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                        variant: "primary",
                                                        onClick: this.handleLogin,
                                                        children: "LOGIN"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "lupa_pass",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                "Lupa password? klik\xa0",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "disini"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "Belum punya akun?\xa0",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/register",
                                                        children: "Buat akun"
                                                    }),
                                                    "\xa0baru"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Login Name ",
                                                    this.props.userName
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        });
    }
}
const reduxState = (state)=>({
        userName: state.user
    });
/* harmony default export */ const login_login = ((0,external_react_redux_.connect)(reduxState, null)(Login));

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
;// CONCATENATED MODULE: ./src/components/layout/nav/Navbar.jsx





// import { useDispatch, useSelector } from "react-redux";




const Navbar = ({ bgColor , user , transparant =false  })=>{
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const [isLogin, setIsLogin] = (0,external_react_.useState)(true);
    // const { user: userGame } = useSelector((state) => ({ ...state }));
    // let dispatch = useDispatch();
    // let navigate = useNavigate();
    const toggleModal = ()=>{
        setShowModal((previousValue)=>!previousValue);
    };
    const handleLogout = ()=>{
        // dispatch({
        //   type: "LOGOUT",
        //   payload: null,
        // });
        // navigate("/");
        (0,autentication/* firebaseLogout */.$)();
    };
    (0,external_react_.useEffect)(()=>{
        (0,autentication/* checkDataLogin */.C)(setIsLogin);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "navbar navbar-expand-lg navbar-dark fixed-top",
                style: transparant ? null : {
                    backgroundColor: bgColor ? `${bgColor}` : "#212529"
                },
                id: "mainNav",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "navbar-brand",
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: echamp_white/* default */.Z
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "navbar-toggler",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarResponsive",
                            "aria-controls": "navbarResponsive",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: [
                                "Menu",
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-bars ms-1"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "collapse navbar-collapse",
                            id: "navbarResponsive",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "navbar-nav text-uppercase ms-5 py-4 py-lg-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link",
                                                href: "/#",
                                                children: "HOME"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link",
                                                href: "/#game",
                                                children: "GAME"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link",
                                                href: "/#leaderboard",
                                                children: "LEADERBOARD"
                                            })
                                        })
                                    ]
                                }),
                                isLogin ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "navbar-nav text-uppercase ms-auto py-4 py-lg-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link",
                                                href: `/profiles`,
                                                children: "PROFILE"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link",
                                                href: "#",
                                                onClick: ()=>{
                                                    if (window.confirm("Are you sure to Logout?")) {
                                                        handleLogout();
                                                    }
                                                },
                                                children: "LOGOUT"
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "navbar-nav text-uppercase ms-auto py-4 py-lg-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            href: "#",
                                            onClick: toggleModal,
                                            children: "LOGIN"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(login_login, {
                showModal: showModal,
                toggleFunc: toggleModal
            })
        ]
    });
};
/* harmony default export */ const nav_Navbar = (Navbar);


/***/ }),

/***/ 5038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fs": () => (/* binding */ database),
/* harmony export */   "Wn": () => (/* binding */ authFirebase),
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9286);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8530);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7249);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8177);
// Import the functions you need from the SDKs you need




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG59xDz-dhD402QS18ovBFTs8MIm5t99s",
    authDomain: "st-project-f2c80.firebaseapp.com",
    databaseURL: "https://st-project-f2c80-default-rtdb.firebaseio.com",
    projectId: "st-project-f2c80",
    storageBucket: "st-project-f2c80.appspot.com",
    messagingSenderId: "105374234602",
    appId: "1:105374234602:web:73556ef5ff52146623e493",
    measurementId: "G-GPRFGQPD3H"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const authFirebase = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .getAuth */ .v0)(app);
const database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .getDatabase */ .N8)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__/* .getStorage */ .cF)(app);


/***/ }),

/***/ 9462:
/***/ (() => {



/***/ })

};
;