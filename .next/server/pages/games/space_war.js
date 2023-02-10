"use strict";
(() => {
var exports = {};
exports.id = 826;
exports.ids = [826];
exports.modules = {

/***/ 3728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ space_war)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-unity-webgl"
const external_react_unity_webgl_namespaceObject = require("react-unity-webgl");
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/layout/nav/Navbar.jsx + 2 modules
var Navbar = __webpack_require__(1383);
// EXTERNAL MODULE: ./src/config/firebase.js
var firebase = __webpack_require__(5038);
// EXTERNAL MODULE: ./src/action/games.js
var games = __webpack_require__(1735);
// EXTERNAL MODULE: ./src/action/autentication.js
var autentication = __webpack_require__(6987);
;// CONCATENATED MODULE: ./src/pages/games/space_war.jsx








// https://react-unity-webgl.dev/
// https://github.com/jeffreylanters/react-unity-webgl/discussions/264
const GameSpaceWar = ()=>{
    // const [isLogin, setIsLogin] = useState(true);
    const game_id = "-NG-FxcdZAq13GcqcZIm";
    const uuid = localStorage.getItem("UID");
    const { unityProvider , sendMessage , addEventListener , removeEventListener  } = (0,external_react_unity_webgl_namespaceObject.useUnityContext)({
        loaderUrl: "/game/space_war/BinarSpaceWar.loader.js",
        dataUrl: "/game/space_war/BinarSpaceWar.data.unityweb",
        frameworkUrl: "/game/space_war/BinarSpaceWar.framework.js.unityweb",
        codeUrl: "/game/space_war/BinarSpaceWar.wasm.unityweb"
    });
    // sendMessage("JavascriptHook", "ChangeData", "HarlanSR");
    const handleGameOver = (0,external_react_.useCallback)((userName2, score)=>{
        (0,games/* insertGameScore */.rQ)(game_id, uuid, score);
    }, []);
    (0,external_react_.useEffect)(()=>{
        (0,games/* halamanGameVerifikasi */.TK)();
    }, []);
    (0,external_react_.useEffect)(()=>{
        addEventListener("GameOver", handleGameOver);
        return ()=>{
            removeEventListener("GameOver", handleGameOver);
        };
    }, [
        addEventListener,
        removeEventListener,
        handleGameOver
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            backgroundColor: "#2B2D33",
            color: "#fff",
            height: "100vh"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                bgColor: "#4A4A5C"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                className: "mt-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_unity_webgl_namespaceObject.Unity, {
                        style: {
                            width: "100%",
                            justifySelf: "center",
                            alignSelf: "center"
                        },
                        unityProvider: unityProvider
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const space_war = (GameSpaceWar);


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

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

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
var __webpack_exports__ = __webpack_require__.X(0, [633,383,735], () => (__webpack_exec__(3728)));
module.exports = __webpack_exports__;

})();