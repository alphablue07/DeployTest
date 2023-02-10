(() => {
var exports = {};
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ rock_paper_scissors)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/layout/nav/Navbar.jsx + 2 modules
var Navbar = __webpack_require__(1383);
;// CONCATENATED MODULE: ./src/assets/images/games/rock-paper-scissors/hand_batu.png
/* harmony default export */ const hand_batu = ({"src":"/_next/static/media/hand_batu.f76f7807.png","height":6135,"width":8305,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AZFHHgBvueIUyJ6HxwcICPkFBAP6APj3B+jp6nZDdIy1AeaegDnsBw1/FBsbR/f19gAMCwoABAMCAPH5+/z77u2wAdOSdqsgNDZU7/n8/PXx8QP49vb/EA8N//79/QP89vXLAbV1WVM2QkOsER8hAPP09f749/gB/v///fn49wTLxshcAeuniQDS2txnKC8wkhEaHAYECgoAAAAAAOnq7NYdQlk5Af/rwwHMnqj/BQUGXAQHCFEFEBIY/AID7qB9cmlKcX/kGD1faI1Q8UcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/images/games/rock-paper-scissors/hand_kertas.png
/* harmony default export */ const hand_kertas = ({"src":"/_next/static/media/hand_kertas.71051c23.png","height":150,"width":115,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/AfixkCXX6PBl+wUJQP4A//bNzc9oMR4W2AH///8A2aaOwREXGD75+vsA3+Dhiz4L8IgBo3xpYzUqJXoSFxki+vz8/uzs7PME+/ioAd2wmv8JBgQA/wEB//n6+/4BAQED9fj6jgHgspv4BgUEBgwODgH5+vv/+vr7AfXw7rIB5bKa/wANEAALCgkADw8P/vr6+gLb1dSkAeGlifgdLDEH6fHz/xcUE/38/PwEz9LUgQHGim6UIiIhaw8ZHv4ACAkC8fP1/8fIykyC1WgBPYr+hAAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/games/rock-paper-scissors/hand_gunting.png
/* harmony default export */ const hand_gunting = ({"src":"/_next/static/media/hand_gunting.8dbab8cb.png","height":160,"width":134,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA5ElEQVR42mOAgccLW1QuLuzYd39ZTxaIf3JGAxPD6cU98w7O63QH8oUe7lz4/8aqSYUgyU1Tm1gYbq+beu/F4dWf660FfN8cWvl/bU9FBgMMnGrPynh9cMX/y6snv765YcbvR3uW/7+4evr5BfV5Ugz/982VOjKhrP/x7qX/b29Z8Pfh9oX/H+1a+v/gpJpEBhDY3ZiW++Pstv+3ti3+eWn5pN83N8z+f3lh50Kw5OGOnPK3O+f//3lux/8fF3f/v79r6Zmj3YUGYMknS7sULk0uX3B9buOu3f1VaQwMDOwMDAwMAEG6dioF43EdAAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/games/rock-paper-scissors/icon_refresh.png
/* harmony default export */ const icon_refresh = ({"src":"/_next/static/media/icon_refresh.a149e125.png","height":71,"width":77,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAlUlEQVR42k2PMQrCQBBFp0qvaDpF252tdmuxEA+hxmPozUQQrAQPoFVyBLFM6uRNSEIGHvN39v9ZVqyid2n0+gze1UFb3lFd2l3qEr4Mf3DAtAtec3QFazMUXWojo+J8w3g0kcEFJpgTekKfwhXOwsoT4j5Ok9wGVduam2GFKOkFxj1k8Gf2gUX/3hxeUYdfPGAmItIA6hwwuUMvbSwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
// EXTERNAL MODULE: ./src/assets/pages/games/rock_paper_scissors/style.css
var style = __webpack_require__(7931);
// EXTERNAL MODULE: ./src/action/games.js
var games = __webpack_require__(1735);
// EXTERNAL MODULE: ./src/action/autentication.js
var autentication = __webpack_require__(6987);
;// CONCATENATED MODULE: ./src/pages/games/rock_paper_scissors.jsx










const GameRPS = ()=>{
    const game_id = "-NG-Fxccy-8f1RZoup6D";
    const uuid = localStorage.getItem("UID");
    let color_chose = "#C4C4C4";
    let color_unchose = "#00000000";
    let have_result = false;
    let text_vs = null;
    let winner = null;
    let winner_text = null;
    let result_text = [
        "DRAW",
        "PLAYER 1<br>WIN",
        "COM<br>WIN"
    ];
    let hand_p = [];
    let hand_com = [];
    let hand = null;
    function reset() {
        have_result = false;
        card_hand(0, "com");
        card_hand(0, "player");
        winner.style.display = "none";
        text_vs.style.display = "block";
    }
    function card_hand(handChose, who) {
        for(let i = 1; i <= 3; i++){
            hand[who][i].style.backgroundColor = color_unchose;
        }
        if (handChose > 0) {
            hand[who][handChose].style.backgroundColor = color_chose;
        }
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function press(you_chose) {
        console.log("Button has been pressed");
        if (have_result) {
            return;
        }
        have_result = true;
        let com_chose = getRandomInt(1, 3);
        let who_won = 0;
        let res = you_chose - com_chose;
        card_hand(com_chose, "com");
        card_hand(you_chose, "player");
        if (res != 0) {
            if (res < 2 && res > -2) {
                if (you_chose > com_chose) {
                    who_won = 1;
                } else {
                    who_won = 2;
                }
            } else {
                if (you_chose > com_chose) {
                    who_won = 2;
                } else {
                    who_won = 1;
                }
            }
        }
        winner_text.innerHTML = result_text[who_won];
        winner.style.display = "block";
        text_vs.style.display = "none";
        if (who_won === 1) {
            (0,games/* insertGameScore */.rQ)(game_id, uuid, 2);
        } else if (who_won === 2) {
            (0,games/* insertGameScore */.rQ)(game_id, uuid, -1);
        } else {
            (0,games/* insertGameScore */.rQ)(game_id, uuid, 0);
        }
    }
    (0,external_react_.useEffect)(()=>{
        (0,games/* halamanGameVerifikasi */.TK)();
        let hand_com_1 = document.getElementById("hand_com_1");
        let hand_com_2 = document.getElementById("hand_com_2");
        let hand_com_3 = document.getElementById("hand_com_3");
        let hand_p_1 = document.getElementById("hand_p_1");
        let hand_p_2 = document.getElementById("hand_p_2");
        let hand_p_3 = document.getElementById("hand_p_3");
        text_vs = document.getElementById("text_vs");
        winner = document.getElementById("winner");
        winner_text = document.getElementById("winner_text");
        hand_p = [
            null,
            hand_p_1,
            hand_p_2,
            hand_p_3
        ];
        hand_com = [
            null,
            hand_com_1,
            hand_com_2,
            hand_com_3
        ];
        hand = {
            "player": hand_p,
            "com": hand_com
        };
        reset();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            backgroundColor: "#9C835F"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                bgColor: "#4A4A5C"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row text-center align-items-center justify-content-center",
                    style: {
                        height: "100vh"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-3 ",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "PLAYER 1"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 container-hand-items",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            onClick: ()=>{
                                                press(1);
                                            },
                                            className: "",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "card-hand d-flex ",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    id: "hand_p_1",
                                                    className: "card-hand",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: hand_batu,
                                                        className: "img-hand "
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 container-hand-items ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            onClick: ()=>{
                                                press(2);
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "card-hand d-flex ",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    id: "hand_p_2",
                                                    className: "card-hand",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: hand_kertas,
                                                        className: "img-hand"
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 container-hand-items ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            onClick: ()=>{
                                                press(3);
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "card-hand d-flex ",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    id: "hand_p_3",
                                                    className: "card-hand d-flex",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: hand_gunting,
                                                        className: "img-hand"
                                                    })
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-3 container-hand-items justify-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    id: "text_vs",
                                    className: "text-vs",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "VS"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "winner",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-result d-flex",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "d-flex justify-content-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                id: "winner_text",
                                                className: "align-middle ",
                                                children: "WHO WIN?"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "position-absolute bottom-0 start-5 translate-middle-y",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        onClick: ()=>{
                                            reset();
                                        },
                                        className: "",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-reset d-flex",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: icon_refresh,
                                                className: "img-reset"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "COM"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 container-hand-items ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "hand_com_1",
                                            className: "card-hand",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: hand_batu,
                                                className: "img-hand"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 container-hand-items ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "hand_com_2",
                                            className: "card-hand",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: hand_kertas,
                                                className: "img-hand"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 container-hand-items ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "hand_com_3",
                                            className: "card-hand",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: hand_gunting,
                                                className: "img-hand"
                                            })
                                        })
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
/* harmony default export */ const rock_paper_scissors = (GameRPS);


/***/ }),

/***/ 7931:
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
var __webpack_exports__ = __webpack_require__.X(0, [633,383,735], () => (__webpack_exec__(5764)));
module.exports = __webpack_exports__;

})();