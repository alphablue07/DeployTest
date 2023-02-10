"use strict";
exports.id = 735;
exports.ids = [735];
exports.modules = {

/***/ 1185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aC": () => (/* binding */ useAuth),
/* harmony export */   "ws": () => (/* binding */ upload)
/* harmony export */ });
/* unused harmony export deletePhoto */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8530);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8177);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9286);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5038);





// const auth = getAuth();
// initialize
// export const uploadProfileImg = async (fileObject) => {
//     const imgRef = storageRef(storage, `profile_img/${fileObject.name}`)
//     const snapshot = await uploadBytes(imgRef, fileObject)
//     const url = await getDownloadURL(imgRef)
//     console.log(url)
//     return url
//   }
function useAuth() {
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const unsub = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .onAuthStateChanged */ .Aj)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__/* .authFirebase */ .Wn, (user)=>setCurrentUser(user));
        return unsub;
    }, []);
    return currentUser;
}
async function deletePhoto(currentUser) {
    const fileRef = ref(storage, currentUser.uid + ".jpg");
    deleteObject(fileRef);
}
async function upload(file, currentUser) {
    const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .iH)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__/* .storage */ .tO, currentUser.uid + ".jpg");
    const snapshot = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__/* .uploadBytes */ .KV)(fileRef, file);
    const photoURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__/* .getDownloadURL */ .Jt)(fileRef);
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .updateProfile */ .ck)(currentUser, {
        photoURL
    });
// if(file.name == '.png'){
//   const newMetadata = {
//     contentType: 'png'
//   };
//  updateMetadata(fileRef,newMetadata)
// }
}


/***/ }),

/***/ 1735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EX": () => (/* binding */ retrieveAllGames),
/* harmony export */   "TK": () => (/* binding */ halamanGameVerifikasi),
/* harmony export */   "rQ": () => (/* binding */ insertGameScore),
/* harmony export */   "y8": () => (/* binding */ getLeaderBoard),
/* harmony export */   "zH": () => (/* binding */ retrieveAllSlideshow)
/* harmony export */ });
/* unused harmony exports seederGame, insertGame, insertSlideshow, updateGame, retrieveAllPlayer, getPlayerById, retrieveAllGamesScore, getPlayerByUUID, getScore */
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7249);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5038);
/* harmony import */ var _autentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6987);
/* harmony import */ var _fb_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);




const db = _config_firebase__WEBPACK_IMPORTED_MODULE_1__/* .database */ .Fs;
// WRITE
const seederGame = ()=>{
    insertGame("Rock Paper Scissors Online", "Ini adalaha permainan tradisional Jepang", "https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg?w=2000", "/game/rps");
    insertGame("Space War", "Perang luar angkasa, mencoba bertahan selama mungkin di luar angkasa", "https://forthbox.io/img/banner-5.0ae066bc.jpg", "/game/space_war");
    insertSlideshow("https://compass-ssl.xbox.com/assets/64/02/6402981a-9446-46d8-8289-e370f3158746.jpg?n=Red-Dead-Redemption-II_GLP-Page-Hero-1084_1920x1080.jpg", "Red Dead Redemption II");
    insertSlideshow("https://tomassoejakto.files.wordpress.com/2020/06/00-banner-2.jpg?w=1200", "The Last of Us Part II");
    insertSlideshow("https://www.teahub.io/photos/full/272-2727819_detroit-become-human.jpg", "Detroit Become Human");
    insertSlideshow("https://cdn.cloudflare.steamstatic.com/steam/apps/1612220/header.jpg?t=1636562551", "Project to Escape");
};
const insertGame = (game_title, game_description, game_image, game_url)=>{
    const dbRef = ref(db, "game_info");
    const data = {
        game_title,
        game_description,
        game_image,
        game_url
    };
    push(dbRef, data);
};
const insertSlideshow = (hs_image, hs_title)=>{
    const dbRef = ref(db, "home_slideshow");
    const data = {
        hs_image,
        hs_title
    };
    push(dbRef, data);
};
const insertGameScore = (game_id, id_player, score)=>{
    const today = new Date();
    const time = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .iH)(db, "game_score");
    const data = {
        id_player,
        game_id,
        score,
        time
    };
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__/* .push */ .VF)(dbRef, data);
};
// UPDATE
const updateGame = (game_id, game_title, game_description, game_image, game_url)=>{
    const dbRef = ref(db, `game_info/${game_id}`);
    const data = {
        game_title,
        game_description,
        game_image,
        game_url
    };
    push(dbRef, data);
};
// READ
const retrieveAllGames = ()=>{
    return new Promise((resolve, reject)=>{
        const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .iH)(db, "game_info");
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__/* .onValue */ .jM)(dbRef, (snapshot)=>{
            const value = [];
            Object.keys(snapshot.val()).map((key)=>{
                value.push({
                    id: key,
                    data: snapshot.val()[key]
                });
            });
            // resolve(value)
            resolve(value);
        });
    });
};
const retrieveAllPlayer = ()=>{
    return new Promise((resolve, reject)=>{
        const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .iH)(db, "game_user");
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__/* .onValue */ .jM)(dbRef, (snapshot)=>{
            const value = [];
            Object.keys(snapshot.val()).map((key)=>{
                value.push({
                    id: key,
                    data: snapshot.val()[key]
                });
            });
            // resolve(value)
            resolve(value);
        });
    });
};
const getPlayerById = (id)=>{
    return new Promise((resolve, reject)=>{
        const dbRef = ref(db, `game_user/${id}`);
        onValue(dbRef, (data)=>{
            const value = data.val();
            resolve(value);
        });
    });
};
const retrieveAllGamesScore = ()=>{
    return new Promise((resolve, reject)=>{
        const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .iH)(db, "game_score");
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__/* .onValue */ .jM)(dbRef, (snapshot)=>{
            const value = [];
            Object.keys(snapshot.val()).map((key)=>{
                value.push({
                    id: key,
                    data: snapshot.val()[key]
                });
            });
            // resolve(value)
            resolve(value);
        });
    });
};
const retrieveAllSlideshow = ()=>{
    return new Promise((resolve, reject)=>{
        const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .iH)(db, "home_slideshow");
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__/* .onValue */ .jM)(dbRef, (snapshot)=>{
            const value = [];
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
const getPlayerByUUID = async (id_player)=>{
    return new Promise((resolve, reject)=>{
        const dbRef = ref(db, "game_user");
        onValue(dbRef, (snapshot)=>{
            Object.keys(snapshot.val()).map((key)=>{
                if (snapshot.val()[key]["id_player"] == id_player) {
                    resolve(snapshot.val()[key]);
                }
            });
            resolve(null);
        });
    });
};
const getLeaderBoard = async (limit = 0)=>{
    const py = await retrieveAllPlayer();
    const players = [];
    const data_score = await retrieveAllGamesScore();
    data_score.forEach(async (element)=>{
        const found = players.some((el)=>el.id_player === element.data.id_player);
        if (!found) {
            let name = "< Unknown >";
            let image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
            const py_index = py.findIndex(function(c) {
                return c.data.id_player == element.data.id_player;
            });
            if (py_index >= 0) {
                name = py[py_index].data.name;
                if (py[py_index].data.profile_picture) {
                    image = py[py_index].data.profile_picture;
                }
            }
            players.push({
                id_player: element.data.id_player,
                name: name,
                image: image,
                score: element.data.score
            });
        } else {
            var commentIndex = players.findIndex(function(c) {
                return c.id_player == element.data.id_player;
            });
            players[commentIndex]["score"] += element.data.score;
        }
    });
    const playersDescending = [
        ...players
    ].sort((a, b)=>b.score - a.score);
    if (limit > 0) {
        return playersDescending.slice(0, limit);
    }
    return playersDescending;
};
const getScore = async ()=>{
    const players = [];
    const data_score = await retrieveAllGamesScore();
    data_score.forEach(async (element)=>{
        const found = players.some((el)=>el.id_player === element.data.id_player);
        var commentIndex = players.findIndex(function(c) {
            return c.id_player == element.data.id_player;
        });
        players[commentIndex]["score"] += element.data.score;
    });
};
const halamanGameVerifikasi = async ()=>{
    const isLogin = false;
    const cekLogin = (res)=>{
        // isLogin = res
        // console.log("Login : ",res)
        if (!res) {
            window.location.href = "/";
        }
    };
    await (0,_autentication__WEBPACK_IMPORTED_MODULE_2__/* .checkDataLogin */ .C)(cekLogin);
};


/***/ })

};
;