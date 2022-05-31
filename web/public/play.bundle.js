/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/GameApi.ts":
/*!*****************************!*\
  !*** ./src/game/GameApi.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameApi = void 0;
var GameApi = /** @class */ (function () {
    function GameApi() {
        this.gameId = '';
        this.userName = '';
    }
    GameApi.prototype.update = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!!this.userName) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, fetch('/api/v2/login')];
                    case 1: return [4 /*yield*/, (_d.sent()).json()];
                    case 2:
                        _a.userName = (_d.sent()).data["username"];
                        _d.label = 3;
                    case 3:
                        if (!!this.gameId) return [3 /*break*/, 6];
                        _b = this;
                        return [4 /*yield*/, fetch('/api/v2/join')];
                    case 4: return [4 /*yield*/, (_d.sent()).json()];
                    case 5:
                        _b.gameId = (_d.sent()).data["game_id"];
                        _d.label = 6;
                    case 6:
                        _c = this;
                        return [4 /*yield*/, fetch("/api/v2/games/".concat(this.gameId))];
                    case 7: return [4 /*yield*/, (_d.sent()).json()];
                    case 8:
                        _c.gameData = (_d.sent()).data;
                        return [2 /*return*/];
                }
            });
        });
    };
    GameApi.prototype.hasWon = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.gameData.winner === this.userName];
            });
        });
    };
    GameApi.prototype.hasLost = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.gameData.winner !== this.userName && this.gameData.winner !== ''];
            });
        });
    };
    GameApi.prototype.isMyTurn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.gameData.next === this.userName];
            });
        });
    };
    GameApi.prototype.getBoardState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.gameData.board];
            });
        });
    };
    GameApi.prototype.move = function (pos) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/api/v2/games/".concat(this.gameId), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                x: pos.x,
                                y: pos.y,
                                z: pos.z,
                            }),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return GameApi;
}());
exports.GameApi = GameApi;


/***/ }),

/***/ "./src/game/GameRenderer.ts":
/*!**********************************!*\
  !*** ./src/game/GameRenderer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameRenderer = void 0;
var three = __webpack_require__(/*! three */ "three");
var ArcballControls_1 = __webpack_require__(/*! three/examples/jsm/controls/ArcballControls */ "./node_modules/three/examples/jsm/controls/ArcballControls.js");
var GameRenderer = /** @class */ (function () {
    function GameRenderer(canvas, scene) {
        var _this = this;
        this.renderer = new three.WebGLRenderer({ canvas: canvas, antialias: true });
        this.renderer.shadowMap.enabled = true;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xE1F5FE);
        this.renderer.setAnimationLoop(function () {
            _this.renderer.render(_this.scene, _this.camera);
        });
        this.scene = scene;
        this.camera = new three.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 30);
        var ambient_light = new three.AmbientLight(0xffffff, 0.9);
        this.scene.add(ambient_light);
        var main_light = new three.DirectionalLight(0xffffff, 0.3);
        main_light.position.set(1, 2, 3);
        main_light.lookAt(0, 0, 0);
        main_light.castShadow = true;
        main_light.shadow.bias = 0;
        main_light.shadow.mapSize.width = 2048;
        main_light.shadow.mapSize.height = 2048;
        main_light.shadow.camera.left = -10;
        main_light.shadow.camera.right = 10;
        main_light.shadow.camera.top = -10;
        main_light.shadow.camera.bottom = 10;
        main_light.shadow.camera.near = 1;
        main_light.shadow.camera.far = 10;
        this.scene.add(main_light);
        var fill_light = new three.DirectionalLight(0xffffff, 0.1);
        fill_light.position.set(-1, -2, -3);
        fill_light.lookAt(0, 0, 0);
        this.scene.add(fill_light);
        this.controls = new ArcballControls_1.ArcballControls(this.camera, this.renderer.domElement, this.scene);
        this.controls.setGizmosVisible(false);
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.controls.addEventListener('change', function () { return _this.renderer.render(_this.scene, _this.camera); });
    }
    GameRenderer.prototype.setCamera = function (position, lookAt) {
        this.camera.position.copy(position);
        this.camera.lookAt(lookAt);
        this.controls.update();
    };
    GameRenderer.prototype.getRayCaster = function (clientX, clientY) {
        var raycaster = new three.Raycaster();
        raycaster.setFromCamera(new three.Vector2(+(clientX / window.innerWidth) * 2 - 1, -(clientY / window.innerHeight) * 2 + 1), this.camera);
        return raycaster;
    };
    return GameRenderer;
}());
exports.GameRenderer = GameRenderer;


/***/ }),

/***/ "./src/game/index.ts":
/*!***************************!*\
  !*** ./src/game/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
var three = __webpack_require__(/*! three */ "three");
var OBJLoader_1 = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader */ "./node_modules/three/examples/jsm/loaders/OBJLoader.js");
var GameRenderer_1 = __webpack_require__(/*! ./GameRenderer */ "./src/game/GameRenderer.ts");
var GameApi_1 = __webpack_require__(/*! ./GameApi */ "./src/game/GameApi.ts");
var BoxState;
(function (BoxState) {
    BoxState[BoxState["Empty"] = 0] = "Empty";
    BoxState[BoxState["Player"] = 1] = "Player";
    BoxState[BoxState["Opponent"] = 2] = "Opponent";
})(BoxState || (BoxState = {}));
var Game = /** @class */ (function () {
    function Game(canvas, boardSize, onWon, onLost) {
        var _a;
        if (boardSize === void 0) { boardSize = [11, 11, 11]; }
        this.boxObjects = undefined;
        this.boxGeometry = undefined;
        this.boxMaterials = (_a = {},
            _a[BoxState.Empty] = null,
            _a[BoxState.Player] = new three.MeshStandardMaterial({ color: 0x81D4FA }),
            _a[BoxState.Opponent] = new three.MeshStandardMaterial({ color: 0xF06292 }),
            _a);
        this.hoverPosition = null;
        this.hoverObject = undefined;
        this.hoverMaterial = new three.MeshBasicMaterial({
            color: 0x81D4FA,
            wireframe: true,
        });
        this.mouseDownPosition = null;
        this.myTurn = false;
        this.isFirstMove = false;
        this.api = new GameApi_1.GameApi();
        this.onWon = onWon;
        this.onLost = onLost;
        this.canvas = canvas;
        this.scene = new three.Scene();
        this.renderer = new GameRenderer_1.GameRenderer(this.canvas, this.scene);
        this.renderer.setCamera(new three.Vector3(0, 0, 10), new three.Vector3(0, 0, 0));
        this.boardSize = boardSize;
        this.boardState = array3D(this.boardSize, function () { return BoxState.Empty; });
        this.boardObject = new three.Object3D();
        this.boardObject.position.set(-(this.boardSize[0] - 1) / 2, -(this.boardSize[1] - 1) / 2, -(this.boardSize[2] - 1) / 2);
        this.scene.add(this.boardObject);
    }
    Game.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadModels()];
                    case 1:
                        _a.sent();
                        this.canvas.onmousemove = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                if (!this.myTurn)
                                    return [2 /*return*/];
                                if (this.mouseDownPosition)
                                    return [2 /*return*/];
                                if (this.isFirstMove)
                                    this.updateHoverPositionForFirstMove();
                                else
                                    this.updateHoverPosition(e.clientX, e.clientY);
                                this.onHoverStateChanged();
                                return [2 /*return*/];
                            });
                        }); };
                        this.canvas.onmousedown = function (e) {
                            _this.mouseDownPosition = new three.Vector2(e.clientX, e.clientY);
                        };
                        this.canvas.onclick = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var mouseDownPosition;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        mouseDownPosition = this.mouseDownPosition;
                                        this.mouseDownPosition = null;
                                        if (!(this.myTurn &&
                                            this.hoverPosition &&
                                            mouseDownPosition &&
                                            mouseDownPosition.equals(new three.Vector2(e.clientX, e.clientY)))) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.api.move(new three.Vector3(this.hoverPosition[0], this.hoverPosition[1], this.hoverPosition[2]))];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.waitForMyTurn()];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        this.waitForMyTurn();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.waitForMyTurn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (false) {}
                        return [4 /*yield*/, this.api.update()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.api.hasWon()];
                    case 2:
                        if (!_c.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.onWon()];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                    case 4: return [4 /*yield*/, this.api.hasLost()];
                    case 5:
                        if (!_c.sent()) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.onLost()];
                    case 6:
                        _c.sent();
                        return [2 /*return*/];
                    case 7:
                        _a = this;
                        return [4 /*yield*/, this.api.getBoardState()];
                    case 8:
                        _a.boardState = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.api.isMyTurn()];
                    case 9:
                        _b.myTurn = _c.sent();
                        this.isFirstMove = !this.boardState.some(function (o) { return o.some(function (o) { return o.some(function (o) { return o !== BoxState.Empty; }); }); });
                        this.onBoardStateChanged();
                        if (this.myTurn)
                            return [3 /*break*/, 11];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 10:
                        _c.sent();
                        return [3 /*break*/, 0];
                    case 11:
                        alert("Your turn!");
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.loadModels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, boxLoaded, boxGeometry;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loader = new OBJLoader_1.OBJLoader();
                        return [4 /*yield*/, loader.loadAsync("/static/models/box.obj")];
                    case 1:
                        boxLoaded = _a.sent();
                        boxGeometry = undefined;
                        boxLoaded.traverse(function (child) {
                            if (child instanceof three.Mesh) {
                                boxGeometry = child.geometry;
                            }
                        });
                        this.boxGeometry = boxGeometry;
                        this.boxGeometry.scale(0.35, 0.35, 0.35);
                        this.boxObjects = array3D(this.boardSize, function (i, j, k) {
                            var box = new three.Mesh(_this.boxGeometry, _this.boxMaterials[BoxState.Player]);
                            box.position.set(i, j, k);
                            box.visible = false;
                            _this.boardObject.add(box);
                            return box;
                        });
                        this.hoverObject = new three.Mesh(this.boxGeometry, this.hoverMaterial);
                        this.hoverObject.visible = false;
                        this.boardObject.add(this.hoverObject);
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.onBoardStateChanged = function () {
        var _this = this;
        array3D(this.boardSize, function (i, j, k) { return [i, j, k]; })
            .flat()
            .flat()
            .forEach(function (_a) {
            var i_ = _a[0], j_ = _a[1], k_ = _a[2];
            return (function (i, j, k) {
                var _a;
                var obj = _this.boxObjects[i][j][k];
                var val = _this.boardState[i][j][k];
                obj.material = (_a = _this.boxMaterials[val]) !== null && _a !== void 0 ? _a : obj.material;
                obj.visible = val !== BoxState.Empty;
                obj.castShadow = val !== BoxState.Empty;
                obj.receiveShadow = val !== BoxState.Empty;
            })(i_, j_, k_);
        });
    };
    Game.prototype.onHoverStateChanged = function () {
        if (this.hoverPosition) {
            this.hoverObject.visible = true;
            this.hoverObject.position.set(this.hoverPosition[0], this.hoverPosition[1], this.hoverPosition[2]);
        }
        else {
            this.hoverObject.visible = false;
        }
    };
    Game.prototype.updateHoverPosition = function (mouseX, mouseY) {
        var _this = this;
        this.hoverPosition = null;
        var hoverCandidate = this.getHoverCandidates();
        var raycaster = this.renderer.getRayCaster(mouseX, mouseY);
        var intersections = raycaster.intersectObjects(hoverCandidate.map(function (_a) {
            var i = _a[0], j = _a[1], k = _a[2];
            return _this.boxObjects[i][j][k];
        }));
        if (intersections.length > 0) {
            var obj_1 = intersections[0].object;
            var _a = hoverCandidate.find(function (_a) {
                var i = _a[0], j = _a[1], k = _a[2];
                return _this.boxObjects[i][j][k] === obj_1;
            }), i = _a[0], j = _a[1], k = _a[2];
            this.hoverPosition = [i, j, k];
            return;
        }
    };
    Game.prototype.updateHoverPositionForFirstMove = function () {
        this.hoverPosition = [
            (this.boardSize[0] - 1) / 2,
            (this.boardSize[0] - 1) / 2,
            (this.boardSize[0] - 1) / 2,
        ];
    };
    Game.prototype.getHoverCandidates = function () {
        var _this = this;
        return Array.from(array3D(this.boardSize, function (i, j, k) { return [i, j, k]; })
            .flat()
            .flat()
            .filter(function (_a) {
            var i = _a[0], j = _a[1], k = _a[2];
            return _this.isHoverCandidate(i, j, k);
        }));
    };
    Game.prototype.isHoverCandidate = function (i, j, k) {
        var _this = this;
        return (this.boardState[i][j][k] === BoxState.Empty &&
            array3D([3, 3, 3], function (i, j, k) { return [i - 1, j - 1, k - 1]; })
                .flat()
                .flat()
                .some(function (_a) {
                var di_ = _a[0], dj_ = _a[1], dk_ = _a[2];
                return (function (di, dj, dk) {
                    return Math.abs(di) + Math.abs(dj) + Math.abs(dk) <= 2 &&
                        i + di > 0 && i + di < _this.boardSize[0] &&
                        j + dj > 0 && j + dj < _this.boardSize[1] &&
                        k + dk > 0 && k + dk < _this.boardSize[2] &&
                        _this.boardState[i + di][j + dj][k + dk] !== BoxState.Empty;
                })(di_, dj_, dk_);
            }));
    };
    return Game;
}());
exports.Game = Game;
function array3D(size, generator) {
    return range(0, size[0]).map(function (i) { return range(0, size[1]).map(function (j) { return range(0, size[2]).map(function (k) { return generator(i, j, k); }); }); });
}
function range(start, end) {
    return Array.from(Array(end - start).keys()).map(function (i) { return start + i; });
}


/***/ }),

/***/ "./src/play.ts":
/*!*********************!*\
  !*** ./src/play.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var game_1 = __webpack_require__(/*! ./game */ "./src/game/index.ts");
var game = new game_1.Game(document.getElementById("game"), [11, 11, 11], function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        window.location.href = "/static/victory.html";
        return [2 /*return*/, undefined];
    });
}); }, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        window.location.href = "/static/defeat.html";
        return [2 /*return*/, undefined];
    });
}); });
game.start();


/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/***/ ((module) => {

module.exports = THREE;

/***/ }),

/***/ "./node_modules/three/examples/jsm/controls/ArcballControls.js":
/*!*********************************************************************!*\
  !*** ./node_modules/three/examples/jsm/controls/ArcballControls.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcballControls": () => (/* binding */ ArcballControls)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");


//trackball state
const STATE = {

	IDLE: Symbol(),
	ROTATE: Symbol(),
	PAN: Symbol(),
	SCALE: Symbol(),
	FOV: Symbol(),
	FOCUS: Symbol(),
	ZROTATE: Symbol(),
	TOUCH_MULTI: Symbol(),
	ANIMATION_FOCUS: Symbol(),
	ANIMATION_ROTATE: Symbol()

};

const INPUT = {

	NONE: Symbol(),
	ONE_FINGER: Symbol(),
	ONE_FINGER_SWITCHED: Symbol(),
	TWO_FINGER: Symbol(),
	MULT_FINGER: Symbol(),
	CURSOR: Symbol()

};

//cursor center coordinates
const _center = {

	x: 0,
	y: 0

};

//transformation matrices for gizmos and camera
const _transformation = {

	camera: new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4(),
	gizmos: new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4()

};

//events
const _changeEvent = { type: 'change' };
const _startEvent = { type: 'start' };
const _endEvent = { type: 'end' };

const _raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();
const _offset = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

const _gizmoMatrixStateTemp = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
const _cameraMatrixStateTemp = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
const _scalePointTemp = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
/**
 *
 * @param {Camera} camera Virtual camera used in the scene
 * @param {HTMLElement} domElement Renderer's dom element
 * @param {Scene} scene The scene to be rendered
 */
class ArcballControls extends three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher {

	constructor( camera, domElement, scene = null ) {

		super();
		this.camera = null;
		this.domElement = domElement;
		this.scene = scene;
		this.target = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		this._currentTarget = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		this.radiusFactor = 0.67;

		this.mouseActions = [];
		this._mouseOp = null;


		//global vectors and matrices that are used in some operations to avoid creating new objects every time (e.g. every time cursor moves)
		this._v2_1 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();
		this._v3_1 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		this._v3_2 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

		this._m4_1 = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
		this._m4_2 = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();

		this._quat = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion();

		//transformation matrices
		this._translationMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4(); //matrix for translation operation
		this._rotationMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4(); //matrix for rotation operation
		this._scaleMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4(); //matrix for scaling operation

		this._rotationAxis = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(); //axis for rotate operation


		//camera state
		this._cameraMatrixState = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
		this._cameraProjectionState = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();

		this._fovState = 1;
		this._upState = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		this._zoomState = 1;
		this._nearPos = 0;
		this._farPos = 0;

		this._gizmoMatrixState = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();

		//initial values
		this._up0 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		this._zoom0 = 1;
		this._fov0 = 0;
		this._initialNear = 0;
		this._nearPos0 = 0;
		this._initialFar = 0;
		this._farPos0 = 0;
		this._cameraMatrixState0 = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
		this._gizmoMatrixState0 = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();

		//pointers array
		this._button = - 1;
		this._touchStart = [];
		this._touchCurrent = [];
		this._input = INPUT.NONE;

		//two fingers touch interaction
		this._switchSensibility = 32;	//minimum movement to be performed to fire single pan start after the second finger has been released
		this._startFingerDistance = 0; //distance between two fingers
		this._currentFingerDistance = 0;
		this._startFingerRotation = 0; //amount of rotation performed with two fingers
		this._currentFingerRotation = 0;

		//double tap
		this._devPxRatio = 0;
		this._downValid = true;
		this._nclicks = 0;
		this._downEvents = [];
		this._downStart = 0;	//pointerDown time
		this._clickStart = 0;	//first click time
		this._maxDownTime = 250;
		this._maxInterval = 300;
		this._posThreshold = 24;
		this._movementThreshold = 24;

		//cursor positions
		this._currentCursorPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		this._startCursorPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

		//grid
		this._grid = null; //grid to be visualized during pan operation
		this._gridPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

		//gizmos
		this._gizmos = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
		this._curvePts = 128;


		//animations
		this._timeStart = - 1; //initial time
		this._animationId = - 1;

		//focus animation
		this.focusAnimationTime = 500; //duration of focus animation in ms

		//rotate animation
		this._timePrev = 0; //time at which previous rotate operation has been detected
		this._timeCurrent = 0; //time at which current rotate operation has been detected
		this._anglePrev = 0; //angle of previous rotation
		this._angleCurrent = 0; //angle of current rotation
		this._cursorPosPrev = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();	//cursor position when previous rotate operation has been detected
		this._cursorPosCurr = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();//cursor position when current rotate operation has been detected
		this._wPrev = 0; //angular velocity of the previous rotate operation
		this._wCurr = 0; //angular velocity of the current rotate operation


		//parameters
		this.adjustNearFar = false;
		this.scaleFactor = 1.1;	//zoom/distance multiplier
		this.dampingFactor = 25;
		this.wMax = 20;	//maximum angular velocity allowed
		this.enableAnimations = true; //if animations should be performed
		this.enableGrid = false; //if grid should be showed during pan operation
		this.cursorZoom = false;	//if wheel zoom should be cursor centered
		this.minFov = 5;
		this.maxFov = 90;

		this.enabled = true;
		this.enablePan = true;
		this.enableRotate = true;
		this.enableZoom = true;
		this.enableGizmos = true;

		this.minDistance = 0;
		this.maxDistance = Infinity;
		this.minZoom = 0;
		this.maxZoom = Infinity;

		//trackball parameters
		this._tbRadius = 1;

		//FSA
		this._state = STATE.IDLE;

		this.setCamera( camera );

		if ( this.scene != null ) {

			this.scene.add( this._gizmos );

		}

		this.domElement.style.touchAction = 'none';
		this._devPxRatio = window.devicePixelRatio;

		this.initializeMouseActions();

		this.domElement.addEventListener( 'contextmenu', this.onContextMenu );
		this.domElement.addEventListener( 'wheel', this.onWheel );
		this.domElement.addEventListener( 'pointerdown', this.onPointerDown );
		this.domElement.addEventListener( 'pointercancel', this.onPointerCancel );

		window.addEventListener( 'resize', this.onWindowResize );

	}

	//listeners

	onWindowResize = () => {

		const scale = ( this._gizmos.scale.x + this._gizmos.scale.y + this._gizmos.scale.z ) / 3;
		this._tbRadius = this.calculateTbRadius( this.camera );

		const newRadius = this._tbRadius / scale;
		const curve = new three__WEBPACK_IMPORTED_MODULE_0__.EllipseCurve( 0, 0, newRadius, newRadius );
		const points = curve.getPoints( this._curvePts );
		const curveGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints( points );


		for ( const gizmo in this._gizmos.children ) {

			this._gizmos.children[ gizmo ].geometry = curveGeometry;

		}

		this.dispatchEvent( _changeEvent );

	};

	onContextMenu = ( event ) => {

		if ( ! this.enabled ) {

			return;

		}

		for ( let i = 0; i < this.mouseActions.length; i ++ ) {

			if ( this.mouseActions[ i ].mouse == 2 ) {

				//prevent only if button 2 is actually used
				event.preventDefault();
				break;

			}

		}

	};

	onPointerCancel = () => {

		this._touchStart.splice( 0, this._touchStart.length );
		this._touchCurrent.splice( 0, this._touchCurrent.length );
		this._input = INPUT.NONE;

	};

	onPointerDown = ( event ) => {

		if ( event.button == 0 && event.isPrimary ) {

			this._downValid = true;
			this._downEvents.push( event );
			this._downStart = performance.now();

		} else {

			this._downValid = false;

		}

		if ( event.pointerType == 'touch' && this._input != INPUT.CURSOR ) {

			this._touchStart.push( event );
			this._touchCurrent.push( event );

			switch ( this._input ) {

				case INPUT.NONE:

					//singleStart
					this._input = INPUT.ONE_FINGER;
					this.onSinglePanStart( event, 'ROTATE' );

					window.addEventListener( 'pointermove', this.onPointerMove );
					window.addEventListener( 'pointerup', this.onPointerUp );

					break;

				case INPUT.ONE_FINGER:
				case INPUT.ONE_FINGER_SWITCHED:

					//doubleStart
					this._input = INPUT.TWO_FINGER;

					this.onRotateStart();
					this.onPinchStart();
					this.onDoublePanStart();

					break;

				case INPUT.TWO_FINGER:

					//multipleStart
					this._input = INPUT.MULT_FINGER;
					this.onTriplePanStart( event );
					break;

			}

		} else if ( event.pointerType != 'touch' && this._input == INPUT.NONE ) {

			let modifier = null;

			if ( event.ctrlKey || event.metaKey ) {

				modifier = 'CTRL';

			} else if ( event.shiftKey ) {

				modifier = 'SHIFT';

			}

			this._mouseOp = this.getOpFromAction( event.button, modifier );
			if ( this._mouseOp != null ) {

				window.addEventListener( 'pointermove', this.onPointerMove );
				window.addEventListener( 'pointerup', this.onPointerUp );

				//singleStart
				this._input = INPUT.CURSOR;
				this._button = event.button;
				this.onSinglePanStart( event, this._mouseOp );

			}

		}

	};

	onPointerMove = ( event ) => {

		if ( event.pointerType == 'touch' && this._input != INPUT.CURSOR ) {

			switch ( this._input ) {

				case INPUT.ONE_FINGER:

					//singleMove
					this.updateTouchEvent( event );

					this.onSinglePanMove( event, STATE.ROTATE );
					break;

				case INPUT.ONE_FINGER_SWITCHED:

					const movement = this.calculatePointersDistance( this._touchCurrent[ 0 ], event ) * this._devPxRatio;

					if ( movement >= this._switchSensibility ) {

						//singleMove
						this._input = INPUT.ONE_FINGER;
						this.updateTouchEvent( event );

						this.onSinglePanStart( event, 'ROTATE' );
						break;

					}

					break;

				case INPUT.TWO_FINGER:

					//rotate/pan/pinchMove
					this.updateTouchEvent( event );

					this.onRotateMove();
					this.onPinchMove();
					this.onDoublePanMove();

					break;

				case INPUT.MULT_FINGER:

					//multMove
					this.updateTouchEvent( event );

					this.onTriplePanMove( event );
					break;

			}

		} else if ( event.pointerType != 'touch' && this._input == INPUT.CURSOR ) {

			let modifier = null;

			if ( event.ctrlKey || event.metaKey ) {

				modifier = 'CTRL';

			} else if ( event.shiftKey ) {

				modifier = 'SHIFT';

			}

			const mouseOpState = this.getOpStateFromAction( this._button, modifier );

			if ( mouseOpState != null ) {

				this.onSinglePanMove( event, mouseOpState );

			}

		}

		//checkDistance
		if ( this._downValid ) {

			const movement = this.calculatePointersDistance( this._downEvents[ this._downEvents.length - 1 ], event ) * this._devPxRatio;
			if ( movement > this._movementThreshold ) {

				this._downValid = false;

			}

		}

	};

	onPointerUp = ( event ) => {

		if ( event.pointerType == 'touch' && this._input != INPUT.CURSOR ) {

			const nTouch = this._touchCurrent.length;

			for ( let i = 0; i < nTouch; i ++ ) {

				if ( this._touchCurrent[ i ].pointerId == event.pointerId ) {

					this._touchCurrent.splice( i, 1 );
					this._touchStart.splice( i, 1 );
					break;

				}

			}

			switch ( this._input ) {

				case INPUT.ONE_FINGER:
				case INPUT.ONE_FINGER_SWITCHED:

					//singleEnd
					window.removeEventListener( 'pointermove', this.onPointerMove );
					window.removeEventListener( 'pointerup', this.onPointerUp );

					this._input = INPUT.NONE;
					this.onSinglePanEnd();

					break;

				case INPUT.TWO_FINGER:

					//doubleEnd
					this.onDoublePanEnd( event );
					this.onPinchEnd( event );
					this.onRotateEnd( event );

					//switching to singleStart
					this._input = INPUT.ONE_FINGER_SWITCHED;

					break;

				case INPUT.MULT_FINGER:

					if ( this._touchCurrent.length == 0 ) {

						window.removeEventListener( 'pointermove', this.onPointerMove );
						window.removeEventListener( 'pointerup', this.onPointerUp );

						//multCancel
						this._input = INPUT.NONE;
						this.onTriplePanEnd();

					}

					break;

			}

		} else if ( event.pointerType != 'touch' && this._input == INPUT.CURSOR ) {

			window.removeEventListener( 'pointermove', this.onPointerMove );
			window.removeEventListener( 'pointerup', this.onPointerUp );

			this._input = INPUT.NONE;
			this.onSinglePanEnd();
			this._button = - 1;

		}

		if ( event.isPrimary ) {

			if ( this._downValid ) {

				const downTime = event.timeStamp - this._downEvents[ this._downEvents.length - 1 ].timeStamp;

				if ( downTime <= this._maxDownTime ) {

					if ( this._nclicks == 0 ) {

						//first valid click detected
						this._nclicks = 1;
						this._clickStart = performance.now();

					} else {

						const clickInterval = event.timeStamp - this._clickStart;
						const movement = this.calculatePointersDistance( this._downEvents[ 1 ], this._downEvents[ 0 ] ) * this._devPxRatio;

						if ( clickInterval <= this._maxInterval && movement <= this._posThreshold ) {

							//second valid click detected
							//fire double tap and reset values
							this._nclicks = 0;
							this._downEvents.splice( 0, this._downEvents.length );
							this.onDoubleTap( event );

						} else {

							//new 'first click'
							this._nclicks = 1;
							this._downEvents.shift();
							this._clickStart = performance.now();

						}

					}

				} else {

					this._downValid = false;
					this._nclicks = 0;
					this._downEvents.splice( 0, this._downEvents.length );

				}

			} else {

				this._nclicks = 0;
				this._downEvents.splice( 0, this._downEvents.length );

			}

		}

	};

	onWheel = ( event ) => {

		if ( this.enabled && this.enableZoom ) {

			let modifier = null;

			if ( event.ctrlKey || event.metaKey ) {

				modifier = 'CTRL';

			} else if ( event.shiftKey ) {

				modifier = 'SHIFT';

			}

			const mouseOp = this.getOpFromAction( 'WHEEL', modifier );

			if ( mouseOp != null ) {

				event.preventDefault();
				this.dispatchEvent( _startEvent );

				const notchDeltaY = 125; //distance of one notch of mouse wheel
				let sgn = event.deltaY / notchDeltaY;

				let size = 1;

				if ( sgn > 0 ) {

					size = 1 / this.scaleFactor;

				} else if ( sgn < 0 ) {

					size = this.scaleFactor;

				}

				switch ( mouseOp ) {

					case 'ZOOM':

						this.updateTbState( STATE.SCALE, true );

						if ( sgn > 0 ) {

							size = 1 / ( Math.pow( this.scaleFactor, sgn ) );

						} else if ( sgn < 0 ) {

							size = Math.pow( this.scaleFactor, - sgn );

						}

						if ( this.cursorZoom && this.enablePan ) {

							let scalePoint;

							if ( this.camera.isOrthographicCamera ) {

								scalePoint = this.unprojectOnTbPlane( this.camera, event.clientX, event.clientY, this.domElement ).applyQuaternion( this.camera.quaternion ).multiplyScalar( 1 / this.camera.zoom ).add( this._gizmos.position );

							} else if ( this.camera.isPerspectiveCamera ) {

								scalePoint = this.unprojectOnTbPlane( this.camera, event.clientX, event.clientY, this.domElement ).applyQuaternion( this.camera.quaternion ).add( this._gizmos.position );

							}

							this.applyTransformMatrix( this.scale( size, scalePoint ) );

						} else {

							this.applyTransformMatrix( this.scale( size, this._gizmos.position ) );

						}

						if ( this._grid != null ) {

							this.disposeGrid();
							this.drawGrid();

						}

						this.updateTbState( STATE.IDLE, false );

						this.dispatchEvent( _changeEvent );
						this.dispatchEvent( _endEvent );

						break;

					case 'FOV':

						if ( this.camera.isPerspectiveCamera ) {

							this.updateTbState( STATE.FOV, true );


							//Vertigo effect

							//	  fov / 2
							//		|\
							//		| \
							//		|  \
							//	x	|	\
							//		| 	 \
							//		| 	  \
							//		| _ _ _\
							//			y

							//check for iOs shift shortcut
							if ( event.deltaX != 0 ) {

								sgn = event.deltaX / notchDeltaY;

								size = 1;

								if ( sgn > 0 ) {

									size = 1 / ( Math.pow( this.scaleFactor, sgn ) );

								} else if ( sgn < 0 ) {

									size = Math.pow( this.scaleFactor, - sgn );

								}

							}

							this._v3_1.setFromMatrixPosition( this._cameraMatrixState );
							const x = this._v3_1.distanceTo( this._gizmos.position );
							let xNew = x / size;	//distance between camera and gizmos if scale(size, scalepoint) would be performed

							//check min and max distance
							xNew = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp( xNew, this.minDistance, this.maxDistance );

							const y = x * Math.tan( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.DEG2RAD * this.camera.fov * 0.5 );

							//calculate new fov
							let newFov = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.RAD2DEG * ( Math.atan( y / xNew ) * 2 );

							//check min and max fov
							if ( newFov > this.maxFov ) {

								newFov = this.maxFov;

							} else if ( newFov < this.minFov ) {

								newFov = this.minFov;

							}

							const newDistance = y / Math.tan( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.DEG2RAD * ( newFov / 2 ) );
							size = x / newDistance;

							this.setFov( newFov );
							this.applyTransformMatrix( this.scale( size, this._gizmos.position, false ) );

						}

						if ( this._grid != null ) {

							this.disposeGrid();
							this.drawGrid();

						}

						this.updateTbState( STATE.IDLE, false );

						this.dispatchEvent( _changeEvent );
						this.dispatchEvent( _endEvent );

						break;

				}

			}

		}

	};

	onSinglePanStart = ( event, operation ) => {

		if ( this.enabled ) {

			this.dispatchEvent( _startEvent );

			this.setCenter( event.clientX, event.clientY );

			switch ( operation ) {

				case 'PAN':

					if ( ! this.enablePan ) {

						return;

					}

					if ( this._animationId != - 1 ) {

						cancelAnimationFrame( this._animationId );
						this._animationId = - 1;
						this._timeStart = - 1;

						this.activateGizmos( false );
						this.dispatchEvent( _changeEvent );

					}

					this.updateTbState( STATE.PAN, true );
					this._startCursorPosition.copy( this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement ) );
					if ( this.enableGrid ) {

						this.drawGrid();
						this.dispatchEvent( _changeEvent );

					}

					break;

				case 'ROTATE':

					if ( ! this.enableRotate ) {

						return;

					}

					if ( this._animationId != - 1 ) {

						cancelAnimationFrame( this._animationId );
						this._animationId = - 1;
						this._timeStart = - 1;

					}

					this.updateTbState( STATE.ROTATE, true );
					this._startCursorPosition.copy( this.unprojectOnTbSurface( this.camera, _center.x, _center.y, this.domElement, this._tbRadius ) );
					this.activateGizmos( true );
					if ( this.enableAnimations ) {

						this._timePrev = this._timeCurrent = performance.now();
						this._angleCurrent = this._anglePrev = 0;
						this._cursorPosPrev.copy( this._startCursorPosition );
						this._cursorPosCurr.copy( this._cursorPosPrev );
						this._wCurr = 0;
						this._wPrev = this._wCurr;

					}

					this.dispatchEvent( _changeEvent );
					break;

				case 'FOV':

					if ( ! this.camera.isPerspectiveCamera || ! this.enableZoom ) {

						return;

					}

					if ( this._animationId != - 1 ) {

						cancelAnimationFrame( this._animationId );
						this._animationId = - 1;
						this._timeStart = - 1;

						this.activateGizmos( false );
						this.dispatchEvent( _changeEvent );

					}

					this.updateTbState( STATE.FOV, true );
					this._startCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );
					this._currentCursorPosition.copy( this._startCursorPosition );
					break;

				case 'ZOOM':

					if ( ! this.enableZoom ) {

						return;

					}

					if ( this._animationId != - 1 ) {

						cancelAnimationFrame( this._animationId );
						this._animationId = - 1;
						this._timeStart = - 1;

						this.activateGizmos( false );
						this.dispatchEvent( _changeEvent );

					}

					this.updateTbState( STATE.SCALE, true );
					this._startCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );
					this._currentCursorPosition.copy( this._startCursorPosition );
					break;

			}

		}

	};

	onSinglePanMove = ( event, opState ) => {

		if ( this.enabled ) {

			const restart = opState != this._state;
			this.setCenter( event.clientX, event.clientY );

			switch ( opState ) {

				case STATE.PAN:

					if ( this.enablePan ) {

						if ( restart ) {

							//switch to pan operation

							this.dispatchEvent( _endEvent );
							this.dispatchEvent( _startEvent );

							this.updateTbState( opState, true );
							this._startCursorPosition.copy( this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement ) );
							if ( this.enableGrid ) {

								this.drawGrid();

							}

							this.activateGizmos( false );

						} else {

							//continue with pan operation
							this._currentCursorPosition.copy( this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement ) );
							this.applyTransformMatrix( this.pan( this._startCursorPosition, this._currentCursorPosition ) );

						}

					}

					break;

				case STATE.ROTATE:

					if ( this.enableRotate ) {

						if ( restart ) {

							//switch to rotate operation

							this.dispatchEvent( _endEvent );
							this.dispatchEvent( _startEvent );

							this.updateTbState( opState, true );
							this._startCursorPosition.copy( this.unprojectOnTbSurface( this.camera, _center.x, _center.y, this.domElement, this._tbRadius ) );

							if ( this.enableGrid ) {

								this.disposeGrid();

							}

							this.activateGizmos( true );

						} else {

							//continue with rotate operation
							this._currentCursorPosition.copy( this.unprojectOnTbSurface( this.camera, _center.x, _center.y, this.domElement, this._tbRadius ) );

							const distance = this._startCursorPosition.distanceTo( this._currentCursorPosition );
							const angle = this._startCursorPosition.angleTo( this._currentCursorPosition );
							const amount = Math.max( distance / this._tbRadius, angle ); //effective rotation angle

							this.applyTransformMatrix( this.rotate( this.calculateRotationAxis( this._startCursorPosition, this._currentCursorPosition ), amount ) );

							if ( this.enableAnimations ) {

								this._timePrev = this._timeCurrent;
								this._timeCurrent = performance.now();
								this._anglePrev = this._angleCurrent;
								this._angleCurrent = amount;
								this._cursorPosPrev.copy( this._cursorPosCurr );
								this._cursorPosCurr.copy( this._currentCursorPosition );
								this._wPrev = this._wCurr;
								this._wCurr = this.calculateAngularSpeed( this._anglePrev, this._angleCurrent, this._timePrev, this._timeCurrent );

							}

						}

					}

					break;

				case STATE.SCALE:

					if ( this.enableZoom ) {

						if ( restart ) {

							//switch to zoom operation

							this.dispatchEvent( _endEvent );
							this.dispatchEvent( _startEvent );

							this.updateTbState( opState, true );
							this._startCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );
							this._currentCursorPosition.copy( this._startCursorPosition );

							if ( this.enableGrid ) {

								this.disposeGrid();

							}

							this.activateGizmos( false );

						} else {

							//continue with zoom operation
							const screenNotches = 8;	//how many wheel notches corresponds to a full screen pan
							this._currentCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );

							const movement = this._currentCursorPosition.y - this._startCursorPosition.y;

							let size = 1;

							if ( movement < 0 ) {

								size = 1 / ( Math.pow( this.scaleFactor, - movement * screenNotches ) );

							} else if ( movement > 0 ) {

								size = Math.pow( this.scaleFactor, movement * screenNotches );

							}

							this._v3_1.setFromMatrixPosition(this._gizmoMatrixState);

							this.applyTransformMatrix( this.scale( size, this._v3_1 ) );

						}

					}

					break;

				case STATE.FOV:

					if ( this.enableZoom && this.camera.isPerspectiveCamera ) {

						if ( restart ) {

							//switch to fov operation

							this.dispatchEvent( _endEvent );
							this.dispatchEvent( _startEvent );

							this.updateTbState( opState, true );
							this._startCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );
							this._currentCursorPosition.copy( this._startCursorPosition );

							if ( this.enableGrid ) {

								this.disposeGrid();

							}

							this.activateGizmos( false );

						} else {

							//continue with fov operation
							const screenNotches = 8;	//how many wheel notches corresponds to a full screen pan
							this._currentCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );

							const movement = this._currentCursorPosition.y - this._startCursorPosition.y;

							let size = 1;

							if ( movement < 0 ) {

								size = 1 / ( Math.pow( this.scaleFactor, - movement * screenNotches ) );

							} else if ( movement > 0 ) {

								size = Math.pow( this.scaleFactor, movement * screenNotches );

							}

							this._v3_1.setFromMatrixPosition( this._cameraMatrixState );
							const x = this._v3_1.distanceTo( this._gizmos.position );
							let xNew = x / size; //distance between camera and gizmos if scale(size, scalepoint) would be performed

							//check min and max distance
							xNew = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp( xNew, this.minDistance, this.maxDistance );

							const y = x * Math.tan( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.DEG2RAD * this._fovState * 0.5 );

							//calculate new fov
							let newFov = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.RAD2DEG * ( Math.atan( y / xNew ) * 2 );

							//check min and max fov
							newFov = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp( newFov, this.minFov, this.maxFov );

							const newDistance = y / Math.tan( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.DEG2RAD * ( newFov / 2 ) );
							size = x / newDistance;
							this._v3_2.setFromMatrixPosition( this._gizmoMatrixState );

							this.setFov( newFov );
							this.applyTransformMatrix( this.scale( size, this._v3_2, false ) );

							//adjusting distance
							_offset.copy( this._gizmos.position ).sub( this.camera.position ).normalize().multiplyScalar( newDistance / x );
							this._m4_1.makeTranslation( _offset.x, _offset.y, _offset.z );

						}

					}

					break;

			}

			this.dispatchEvent( _changeEvent );

		}

	};

	onSinglePanEnd = () => {

		if ( this._state == STATE.ROTATE ) {


			if ( ! this.enableRotate ) {

				return;

			}

			if ( this.enableAnimations ) {

				//perform rotation animation
				const deltaTime = ( performance.now() - this._timeCurrent );
				if ( deltaTime < 120 ) {

					const w = Math.abs( ( this._wPrev + this._wCurr ) / 2 );

					const self = this;
					this._animationId = window.requestAnimationFrame( function ( t ) {

						self.updateTbState( STATE.ANIMATION_ROTATE, true );
						const rotationAxis = self.calculateRotationAxis( self._cursorPosPrev, self._cursorPosCurr );

						self.onRotationAnim( t, rotationAxis, Math.min( w, self.wMax ) );

					} );

				} else {

					//cursor has been standing still for over 120 ms since last movement
					this.updateTbState( STATE.IDLE, false );
					this.activateGizmos( false );
					this.dispatchEvent( _changeEvent );

				}

			} else {

				this.updateTbState( STATE.IDLE, false );
				this.activateGizmos( false );
				this.dispatchEvent( _changeEvent );

			}

		} else if ( this._state == STATE.PAN || this._state == STATE.IDLE ) {

			this.updateTbState( STATE.IDLE, false );

			if ( this.enableGrid ) {

				this.disposeGrid();

			}

			this.activateGizmos( false );
			this.dispatchEvent( _changeEvent );


		}

		this.dispatchEvent( _endEvent );

	};

	onDoubleTap = ( event ) => {

		if ( this.enabled && this.enablePan && this.scene != null ) {

			this.dispatchEvent( _startEvent );

			this.setCenter( event.clientX, event.clientY );
			const hitP = this.unprojectOnObj( this.getCursorNDC( _center.x, _center.y, this.domElement ), this.camera );

			if ( hitP != null && this.enableAnimations ) {

				const self = this;
				if ( this._animationId != - 1 ) {

					window.cancelAnimationFrame( this._animationId );

				}

				this._timeStart = - 1;
				this._animationId = window.requestAnimationFrame( function ( t ) {

					self.updateTbState( STATE.ANIMATION_FOCUS, true );
					self.onFocusAnim( t, hitP, self._cameraMatrixState, self._gizmoMatrixState );

				} );

			} else if ( hitP != null && ! this.enableAnimations ) {

				this.updateTbState( STATE.FOCUS, true );
				this.focus( hitP, this.scaleFactor );
				this.updateTbState( STATE.IDLE, false );
				this.dispatchEvent( _changeEvent );

			}

		}

		this.dispatchEvent( _endEvent );

	};

	onDoublePanStart = () => {

		if ( this.enabled && this.enablePan ) {

			this.dispatchEvent( _startEvent );

			this.updateTbState( STATE.PAN, true );

			this.setCenter( ( this._touchCurrent[ 0 ].clientX + this._touchCurrent[ 1 ].clientX ) / 2, ( this._touchCurrent[ 0 ].clientY + this._touchCurrent[ 1 ].clientY ) / 2 );
			this._startCursorPosition.copy( this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement, true ) );
			this._currentCursorPosition.copy( this._startCursorPosition );

			this.activateGizmos( false );

		}

	};

	onDoublePanMove = () => {

		if ( this.enabled && this.enablePan ) {

			this.setCenter( ( this._touchCurrent[ 0 ].clientX + this._touchCurrent[ 1 ].clientX ) / 2, ( this._touchCurrent[ 0 ].clientY + this._touchCurrent[ 1 ].clientY ) / 2 );

			if ( this._state != STATE.PAN ) {

				this.updateTbState( STATE.PAN, true );
				this._startCursorPosition.copy( this._currentCursorPosition );

			}

			this._currentCursorPosition.copy( this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement, true ) );
			this.applyTransformMatrix( this.pan( this._startCursorPosition, this._currentCursorPosition, true ) );
			this.dispatchEvent( _changeEvent );

		}

	};

	onDoublePanEnd = () => {

		this.updateTbState( STATE.IDLE, false );
		this.dispatchEvent( _endEvent );

	};


	onRotateStart = () => {

		if ( this.enabled && this.enableRotate ) {

			this.dispatchEvent( _startEvent );

			this.updateTbState( STATE.ZROTATE, true );

			//this._startFingerRotation = event.rotation;

			this._startFingerRotation = this.getAngle( this._touchCurrent[ 1 ], this._touchCurrent[ 0 ] ) + this.getAngle( this._touchStart[ 1 ], this._touchStart[ 0 ] );
			this._currentFingerRotation = this._startFingerRotation;

			this.camera.getWorldDirection( this._rotationAxis ); //rotation axis

			if ( ! this.enablePan && ! this.enableZoom ) {

				this.activateGizmos( true );

			}

		}

	};

	onRotateMove = () => {

		if ( this.enabled && this.enableRotate ) {

			this.setCenter( ( this._touchCurrent[ 0 ].clientX + this._touchCurrent[ 1 ].clientX ) / 2, ( this._touchCurrent[ 0 ].clientY + this._touchCurrent[ 1 ].clientY ) / 2 );
			let rotationPoint;

			if ( this._state != STATE.ZROTATE ) {

				this.updateTbState( STATE.ZROTATE, true );
				this._startFingerRotation = this._currentFingerRotation;

			}

			//this._currentFingerRotation = event.rotation;
			this._currentFingerRotation = this.getAngle( this._touchCurrent[ 1 ], this._touchCurrent[ 0 ] ) + this.getAngle( this._touchStart[ 1 ], this._touchStart[ 0 ] );

			if ( ! this.enablePan ) {

				rotationPoint = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().setFromMatrixPosition( this._gizmoMatrixState );

			} else {

				this._v3_2.setFromMatrixPosition( this._gizmoMatrixState );
				rotationPoint = this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement ).applyQuaternion( this.camera.quaternion ).multiplyScalar( 1 / this.camera.zoom ).add( this._v3_2 );

			}

			const amount = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.DEG2RAD * ( this._startFingerRotation - this._currentFingerRotation );

			this.applyTransformMatrix( this.zRotate( rotationPoint, amount ) );
			this.dispatchEvent( _changeEvent );

		}

	};

	onRotateEnd = () => {

		this.updateTbState( STATE.IDLE, false );
		this.activateGizmos( false );
		this.dispatchEvent( _endEvent );

	};

	onPinchStart = () => {

		if ( this.enabled && this.enableZoom ) {

			this.dispatchEvent( _startEvent );
			this.updateTbState( STATE.SCALE, true );

			this._startFingerDistance = this.calculatePointersDistance( this._touchCurrent[ 0 ], this._touchCurrent[ 1 ] );
			this._currentFingerDistance = this._startFingerDistance;

			this.activateGizmos( false );

		}

	};

	onPinchMove = () => {

		if ( this.enabled && this.enableZoom ) {

			this.setCenter( ( this._touchCurrent[ 0 ].clientX + this._touchCurrent[ 1 ].clientX ) / 2, ( this._touchCurrent[ 0 ].clientY + this._touchCurrent[ 1 ].clientY ) / 2 );
			const minDistance = 12; //minimum distance between fingers (in css pixels)

			if ( this._state != STATE.SCALE ) {

				this._startFingerDistance = this._currentFingerDistance;
				this.updateTbState( STATE.SCALE, true );

			}

			this._currentFingerDistance = Math.max( this.calculatePointersDistance( this._touchCurrent[ 0 ], this._touchCurrent[ 1 ] ), minDistance * this._devPxRatio );
			const amount = this._currentFingerDistance / this._startFingerDistance;

			let scalePoint;

			if ( ! this.enablePan ) {

				scalePoint = this._gizmos.position;

			} else {

				if ( this.camera.isOrthographicCamera ) {

					scalePoint = this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement )
						.applyQuaternion( this.camera.quaternion )
						.multiplyScalar( 1 / this.camera.zoom )
						.add( this._gizmos.position );

				} else if ( this.camera.isPerspectiveCamera ) {

					scalePoint = this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement )
						.applyQuaternion( this.camera.quaternion )
						.add( this._gizmos.position );

				}

			}

			this.applyTransformMatrix( this.scale( amount, scalePoint ) );
			this.dispatchEvent( _changeEvent );

		}

	};

	onPinchEnd = () => {

		this.updateTbState( STATE.IDLE, false );
		this.dispatchEvent( _endEvent );

	};

	onTriplePanStart = () => {

		if ( this.enabled && this.enableZoom ) {

			this.dispatchEvent( _startEvent );

			this.updateTbState( STATE.SCALE, true );

			//const center = event.center;
			let clientX = 0;
			let clientY = 0;
			const nFingers = this._touchCurrent.length;

			for ( let i = 0; i < nFingers; i ++ ) {

				clientX += this._touchCurrent[ i ].clientX;
				clientY += this._touchCurrent[ i ].clientY;

			}

			this.setCenter( clientX / nFingers, clientY / nFingers );

			this._startCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );
			this._currentCursorPosition.copy( this._startCursorPosition );

		}

	};

	onTriplePanMove = () => {

		if ( this.enabled && this.enableZoom ) {

			//	  fov / 2
			//		|\
			//		| \
			//		|  \
			//	x	|	\
			//		| 	 \
			//		| 	  \
			//		| _ _ _\
			//			y

			//const center = event.center;
			let clientX = 0;
			let clientY = 0;
			const nFingers = this._touchCurrent.length;

			for ( let i = 0; i < nFingers; i ++ ) {

				clientX += this._touchCurrent[ i ].clientX;
				clientY += this._touchCurrent[ i ].clientY;

			}

			this.setCenter( clientX / nFingers, clientY / nFingers );

			const screenNotches = 8;	//how many wheel notches corresponds to a full screen pan
			this._currentCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );

			const movement = this._currentCursorPosition.y - this._startCursorPosition.y;

			let size = 1;

			if ( movement < 0 ) {

				size = 1 / ( Math.pow( this.scaleFactor, - movement * screenNotches ) );

			} else if ( movement > 0 ) {

				size = Math.pow( this.scaleFactor, movement * screenNotches );

			}

			this._v3_1.setFromMatrixPosition( this._cameraMatrixState );
			const x = this._v3_1.distanceTo( this._gizmos.position );
			let xNew = x / size; //distance between camera and gizmos if scale(size, scalepoint) would be performed

			//check min and max distance
			xNew = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp( xNew, this.minDistance, this.maxDistance );

			const y = x * Math.tan( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.DEG2RAD * this._fovState * 0.5 );

			//calculate new fov
			let newFov = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.RAD2DEG * ( Math.atan( y / xNew ) * 2 );

			//check min and max fov
			newFov = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp( newFov, this.minFov, this.maxFov );

			const newDistance = y / Math.tan( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.DEG2RAD * ( newFov / 2 ) );
			size = x / newDistance;
			this._v3_2.setFromMatrixPosition( this._gizmoMatrixState );

			this.setFov( newFov );
			this.applyTransformMatrix( this.scale( size, this._v3_2, false ) );

			//adjusting distance
			_offset.copy( this._gizmos.position ).sub( this.camera.position ).normalize().multiplyScalar( newDistance / x );
			this._m4_1.makeTranslation( _offset.x, _offset.y, _offset.z );

			this.dispatchEvent( _changeEvent );

		}

	};

	onTriplePanEnd = () => {

		this.updateTbState( STATE.IDLE, false );
		this.dispatchEvent( _endEvent );
		//this.dispatchEvent( _changeEvent );

	};

	/**
	 * Set _center's x/y coordinates
	 * @param {Number} clientX
	 * @param {Number} clientY
	 */
	setCenter = ( clientX, clientY ) => {

		_center.x = clientX;
		_center.y = clientY;

	};

	/**
	 * Set default mouse actions
	 */
	initializeMouseActions = () => {

		this.setMouseAction( 'PAN', 0, 'CTRL' );
		this.setMouseAction( 'PAN', 2 );

		this.setMouseAction( 'ROTATE', 0 );

		this.setMouseAction( 'ZOOM', 'WHEEL' );
		this.setMouseAction( 'ZOOM', 1 );

		this.setMouseAction( 'FOV', 'WHEEL', 'SHIFT' );
		this.setMouseAction( 'FOV', 1, 'SHIFT' );


	};

	/**
	 * Compare two mouse actions
	 * @param {Object} action1
	 * @param {Object} action2
	 * @returns {Boolean} True if action1 and action 2 are the same mouse action, false otherwise
	 */
	compareMouseAction = ( action1, action2 ) => {

		if ( action1.operation == action2.operation ) {

			if ( action1.mouse == action2.mouse && action1.key == action2.key ) {

				return true;

			} else {

				return false;

			}

		} else {

			return false;

		}

	};

	/**
	 * Set a new mouse action by specifying the operation to be performed and a mouse/key combination. In case of conflict, replaces the existing one
	 * @param {String} operation The operation to be performed ('PAN', 'ROTATE', 'ZOOM', 'FOV)
	 * @param {*} mouse A mouse button (0, 1, 2) or 'WHEEL' for wheel notches
	 * @param {*} key The keyboard modifier ('CTRL', 'SHIFT') or null if key is not needed
	 * @returns {Boolean} True if the mouse action has been successfully added, false otherwise
	 */
	setMouseAction = ( operation, mouse, key = null ) => {

		const operationInput = [ 'PAN', 'ROTATE', 'ZOOM', 'FOV' ];
		const mouseInput = [ 0, 1, 2, 'WHEEL' ];
		const keyInput = [ 'CTRL', 'SHIFT', null ];
		let state;

		if ( ! operationInput.includes( operation ) || ! mouseInput.includes( mouse ) || ! keyInput.includes( key ) ) {

			//invalid parameters
			return false;

		}

		if ( mouse == 'WHEEL' ) {

			if ( operation != 'ZOOM' && operation != 'FOV' ) {

				//cannot associate 2D operation to 1D input
				return false;

			}

		}

		switch ( operation ) {

			case 'PAN':

				state = STATE.PAN;
				break;

			case 'ROTATE':

				state = STATE.ROTATE;
				break;

			case 'ZOOM':

				state = STATE.SCALE;
				break;

			case 'FOV':

				state = STATE.FOV;
				break;

		}

		const action = {

			operation: operation,
			mouse: mouse,
			key: key,
			state: state

		};

		for ( let i = 0; i < this.mouseActions.length; i ++ ) {

			if ( this.mouseActions[ i ].mouse == action.mouse && this.mouseActions[ i ].key == action.key ) {

				this.mouseActions.splice( i, 1, action );
				return true;

			}

		}

		this.mouseActions.push( action );
		return true;

	};

	/**
	 * Remove a mouse action by specifying its mouse/key combination
	 * @param {*} mouse A mouse button (0, 1, 2) or 'WHEEL' for wheel notches
	 * @param {*} key The keyboard modifier ('CTRL', 'SHIFT') or null if key is not needed
	 * @returns {Boolean} True if the operation has been succesfully removed, false otherwise
	 */
	unsetMouseAction = ( mouse, key = null ) => {

		for ( let i = 0; i < this.mouseActions.length; i ++ ) {

			if ( this.mouseActions[ i ].mouse == mouse && this.mouseActions[ i ].key == key ) {

				this.mouseActions.splice( i, 1 );
				return true;

			}

		}

		return false;

	};

	/**
	 * Return the operation associated to a mouse/keyboard combination
	 * @param {*} mouse A mouse button (0, 1, 2) or 'WHEEL' for wheel notches
	 * @param {*} key The keyboard modifier ('CTRL', 'SHIFT') or null if key is not needed
	 * @returns The operation if it has been found, null otherwise
	 */
	getOpFromAction = ( mouse, key ) => {

		let action;

		for ( let i = 0; i < this.mouseActions.length; i ++ ) {

			action = this.mouseActions[ i ];
			if ( action.mouse == mouse && action.key == key ) {

				return action.operation;

			}

		}

		if ( key != null ) {

			for ( let i = 0; i < this.mouseActions.length; i ++ ) {

				action = this.mouseActions[ i ];
				if ( action.mouse == mouse && action.key == null ) {

					return action.operation;

				}

			}

		}

		return null;

	};

	/**
	 * Get the operation associated to mouse and key combination and returns the corresponding FSA state
	 * @param {Number} mouse Mouse button
	 * @param {String} key Keyboard modifier
	 * @returns The FSA state obtained from the operation associated to mouse/keyboard combination
	 */
	getOpStateFromAction = ( mouse, key ) => {

		let action;

		for ( let i = 0; i < this.mouseActions.length; i ++ ) {

			action = this.mouseActions[ i ];
			if ( action.mouse == mouse && action.key == key ) {

				return action.state;

			}

		}

		if ( key != null ) {

			for ( let i = 0; i < this.mouseActions.length; i ++ ) {

				action = this.mouseActions[ i ];
				if ( action.mouse == mouse && action.key == null ) {

					return action.state;

				}

			}

		}

		return null;

	};

	/**
	 * Calculate the angle between two pointers
	 * @param {PointerEvent} p1
	 * @param {PointerEvent} p2
	 * @returns {Number} The angle between two pointers in degrees
	 */
	getAngle = ( p1, p2 ) => {

		return Math.atan2( p2.clientY - p1.clientY, p2.clientX - p1.clientX ) * 180 / Math.PI;

	};

	/**
	 * Update a PointerEvent inside current pointerevents array
	 * @param {PointerEvent} event
	 */
	updateTouchEvent = ( event ) => {

		for ( let i = 0; i < this._touchCurrent.length; i ++ ) {

			if ( this._touchCurrent[ i ].pointerId == event.pointerId ) {

				this._touchCurrent.splice( i, 1, event );
				break;

			}

		}

	};

	/**
	 * Apply a transformation matrix, to the camera and gizmos
	 * @param {Object} transformation Object containing matrices to apply to camera and gizmos
	 */
	applyTransformMatrix( transformation ) {

		if ( transformation.camera != null ) {

			this._m4_1.copy( this._cameraMatrixState ).premultiply( transformation.camera );
			this._m4_1.decompose( this.camera.position, this.camera.quaternion, this.camera.scale );
			this.camera.updateMatrix();

			//update camera up vector
			if ( this._state == STATE.ROTATE || this._state == STATE.ZROTATE || this._state == STATE.ANIMATION_ROTATE ) {

				this.camera.up.copy( this._upState ).applyQuaternion( this.camera.quaternion );

			}

		}

		if ( transformation.gizmos != null ) {

			this._m4_1.copy( this._gizmoMatrixState ).premultiply( transformation.gizmos );
			this._m4_1.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );
			this._gizmos.updateMatrix();

		}

		if ( this._state == STATE.SCALE || this._state == STATE.FOCUS || this._state == STATE.ANIMATION_FOCUS ) {

			this._tbRadius = this.calculateTbRadius( this.camera );

			if ( this.adjustNearFar ) {

				const cameraDistance = this.camera.position.distanceTo( this._gizmos.position );

				const bb = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();
				bb.setFromObject( this._gizmos );
				const sphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere();
				bb.getBoundingSphere( sphere );

				const adjustedNearPosition = Math.max( this._nearPos0, sphere.radius + sphere.center.length() );
				const regularNearPosition = cameraDistance - this._initialNear;

				const minNearPos = Math.min( adjustedNearPosition, regularNearPosition );
				this.camera.near = cameraDistance - minNearPos;


				const adjustedFarPosition = Math.min( this._farPos0, - sphere.radius + sphere.center.length() );
				const regularFarPosition = cameraDistance - this._initialFar;

				const minFarPos = Math.min( adjustedFarPosition, regularFarPosition );
				this.camera.far = cameraDistance - minFarPos;

				this.camera.updateProjectionMatrix();

			} else {

				let update = false;

				if ( this.camera.near != this._initialNear ) {

					this.camera.near = this._initialNear;
					update = true;

				}

				if ( this.camera.far != this._initialFar ) {

					this.camera.far = this._initialFar;
					update = true;

				}

				if ( update ) {

					this.camera.updateProjectionMatrix();

				}

			}

		}

	}

	/**
	 * Calculate the angular speed
	 * @param {Number} p0 Position at t0
	 * @param {Number} p1 Position at t1
	 * @param {Number} t0 Initial time in milliseconds
	 * @param {Number} t1 Ending time in milliseconds
	 */
	calculateAngularSpeed = ( p0, p1, t0, t1 ) => {

		const s = p1 - p0;
		const t = ( t1 - t0 ) / 1000;
		if ( t == 0 ) {

			return 0;

		}

		return s / t;

	};

	/**
	 * Calculate the distance between two pointers
	 * @param {PointerEvent} p0 The first pointer
	 * @param {PointerEvent} p1 The second pointer
	 * @returns {number} The distance between the two pointers
	 */
	calculatePointersDistance = ( p0, p1 ) => {

		return Math.sqrt( Math.pow( p1.clientX - p0.clientX, 2 ) + Math.pow( p1.clientY - p0.clientY, 2 ) );

	};

	/**
	 * Calculate the rotation axis as the vector perpendicular between two vectors
	 * @param {Vector3} vec1 The first vector
	 * @param {Vector3} vec2 The second vector
	 * @returns {Vector3} The normalized rotation axis
	 */
	calculateRotationAxis = ( vec1, vec2 ) => {

		this._rotationMatrix.extractRotation( this._cameraMatrixState );
		this._quat.setFromRotationMatrix( this._rotationMatrix );

		this._rotationAxis.crossVectors( vec1, vec2 ).applyQuaternion( this._quat );
		return this._rotationAxis.normalize().clone();

	};

	/**
	 * Calculate the trackball radius so that gizmo's diamater will be 2/3 of the minimum side of the camera frustum
	 * @param {Camera} camera
	 * @returns {Number} The trackball radius
	 */
	calculateTbRadius = ( camera ) => {

		const distance = camera.position.distanceTo( this._gizmos.position );

		if ( camera.type == 'PerspectiveCamera' ) {

			const halfFovV = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.DEG2RAD * camera.fov * 0.5; //vertical fov/2 in radians
			const halfFovH = Math.atan( ( camera.aspect ) * Math.tan( halfFovV ) ); //horizontal fov/2 in radians
			return Math.tan( Math.min( halfFovV, halfFovH ) ) * distance * this.radiusFactor;

		} else if ( camera.type == 'OrthographicCamera' ) {

			return Math.min( camera.top, camera.right ) * this.radiusFactor;

		}

	};

	/**
	 * Focus operation consist of positioning the point of interest in front of the camera and a slightly zoom in
	 * @param {Vector3} point The point of interest
	 * @param {Number} size Scale factor
	 * @param {Number} amount Amount of operation to be completed (used for focus animations, default is complete full operation)
	 */
	focus = ( point, size, amount = 1 ) => {

		//move center of camera (along with gizmos) towards point of interest
		_offset.copy( point ).sub( this._gizmos.position ).multiplyScalar( amount );
		this._translationMatrix.makeTranslation( _offset.x, _offset.y, _offset.z );

		_gizmoMatrixStateTemp.copy( this._gizmoMatrixState );
		this._gizmoMatrixState.premultiply( this._translationMatrix );
		this._gizmoMatrixState.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );

		_cameraMatrixStateTemp.copy( this._cameraMatrixState );
		this._cameraMatrixState.premultiply( this._translationMatrix );
		this._cameraMatrixState.decompose( this.camera.position, this.camera.quaternion, this.camera.scale );

		//apply zoom
		if ( this.enableZoom ) {

			this.applyTransformMatrix( this.scale( size, this._gizmos.position ) );

		}

		this._gizmoMatrixState.copy( _gizmoMatrixStateTemp );
		this._cameraMatrixState.copy( _cameraMatrixStateTemp );

	};

	/**
	 * Draw a grid and add it to the scene
	 */
	drawGrid = () => {

		if ( this.scene != null ) {

			const color = 0x888888;
			const multiplier = 3;
			let size, divisions, maxLength, tick;

			if ( this.camera.isOrthographicCamera ) {

				const width = this.camera.right - this.camera.left;
				const height = this.camera.bottom - this.camera.top;

				maxLength = Math.max( width, height );
				tick = maxLength / 20;

				size = maxLength / this.camera.zoom * multiplier;
				divisions = size / tick * this.camera.zoom;

			} else if ( this.camera.isPerspectiveCamera ) {

				const distance = this.camera.position.distanceTo( this._gizmos.position );
				const halfFovV = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.DEG2RAD * this.camera.fov * 0.5;
				const halfFovH = Math.atan( ( this.camera.aspect ) * Math.tan( halfFovV ) );

				maxLength = Math.tan( Math.max( halfFovV, halfFovH ) ) * distance * 2;
				tick = maxLength / 20;

				size = maxLength * multiplier;
				divisions = size / tick;

			}

			if ( this._grid == null ) {

				this._grid = new three__WEBPACK_IMPORTED_MODULE_0__.GridHelper( size, divisions, color, color );
				this._grid.position.copy( this._gizmos.position );
				this._gridPosition.copy( this._grid.position );
				this._grid.quaternion.copy( this.camera.quaternion );
				this._grid.rotateX( Math.PI * 0.5 );

				this.scene.add( this._grid );

			}

		}

	};

	/**
	 * Remove all listeners, stop animations and clean scene
	 */
	dispose = () => {

		if ( this._animationId != - 1 ) {

			window.cancelAnimationFrame( this._animationId );

		}

		this.domElement.removeEventListener( 'pointerdown', this.onPointerDown );
		this.domElement.removeEventListener( 'pointercancel', this.onPointerCancel );
		this.domElement.removeEventListener( 'wheel', this.onWheel );
		this.domElement.removeEventListener( 'contextmenu', this.onContextMenu );

		window.removeEventListener( 'pointermove', this.onPointerMove );
		window.removeEventListener( 'pointerup', this.onPointerUp );

		window.removeEventListener( 'resize', this.onWindowResize );

		if ( this.scene !== null ) this.scene.remove( this._gizmos );
		this.disposeGrid();

	};

	/**
	 * remove the grid from the scene
	 */
	disposeGrid = () => {

		if ( this._grid != null && this.scene != null ) {

			this.scene.remove( this._grid );
			this._grid = null;

		}

	};

	/**
	 * Compute the easing out cubic function for ease out effect in animation
	 * @param {Number} t The absolute progress of the animation in the bound of 0 (beginning of the) and 1 (ending of animation)
	 * @returns {Number} Result of easing out cubic at time t
	 */
	easeOutCubic = ( t ) => {

		return 1 - Math.pow( 1 - t, 3 );

	};

	/**
	 * Make rotation gizmos more or less visible
	 * @param {Boolean} isActive If true, make gizmos more visible
	 */
	activateGizmos = ( isActive ) => {

		const gizmoX = this._gizmos.children[ 0 ];
		const gizmoY = this._gizmos.children[ 1 ];
		const gizmoZ = this._gizmos.children[ 2 ];

		if ( isActive ) {

			gizmoX.material.setValues( { opacity: 1 } );
			gizmoY.material.setValues( { opacity: 1 } );
			gizmoZ.material.setValues( { opacity: 1 } );

		} else {

			gizmoX.material.setValues( { opacity: 0.6 } );
			gizmoY.material.setValues( { opacity: 0.6 } );
			gizmoZ.material.setValues( { opacity: 0.6 } );

		}

	};

	/**
	 * Calculate the cursor position in NDC
	 * @param {number} x Cursor horizontal coordinate within the canvas
	 * @param {number} y Cursor vertical coordinate within the canvas
	 * @param {HTMLElement} canvas The canvas where the renderer draws its output
	 * @returns {Vector2} Cursor normalized position inside the canvas
	 */
	getCursorNDC = ( cursorX, cursorY, canvas ) => {

		const canvasRect = canvas.getBoundingClientRect();
		this._v2_1.setX( ( ( cursorX - canvasRect.left ) / canvasRect.width ) * 2 - 1 );
		this._v2_1.setY( ( ( canvasRect.bottom - cursorY ) / canvasRect.height ) * 2 - 1 );
		return this._v2_1.clone();

	};

	/**
	 * Calculate the cursor position inside the canvas x/y coordinates with the origin being in the center of the canvas
	 * @param {Number} x Cursor horizontal coordinate within the canvas
	 * @param {Number} y Cursor vertical coordinate within the canvas
	 * @param {HTMLElement} canvas The canvas where the renderer draws its output
	 * @returns {Vector2} Cursor position inside the canvas
	 */
	getCursorPosition = ( cursorX, cursorY, canvas ) => {

		this._v2_1.copy( this.getCursorNDC( cursorX, cursorY, canvas ) );
		this._v2_1.x *= ( this.camera.right - this.camera.left ) * 0.5;
		this._v2_1.y *= ( this.camera.top - this.camera.bottom ) * 0.5;
		return this._v2_1.clone();

	};

	/**
	 * Set the camera to be controlled
	 * @param {Camera} camera The virtual camera to be controlled
	 */
	setCamera = ( camera ) => {

		camera.lookAt( this.target );
		camera.updateMatrix();

		//setting state
		if ( camera.type == 'PerspectiveCamera' ) {

			this._fov0 = camera.fov;
			this._fovState = camera.fov;

		}

		this._cameraMatrixState0.copy( camera.matrix );
		this._cameraMatrixState.copy( this._cameraMatrixState0 );
		this._cameraProjectionState.copy( camera.projectionMatrix );
		this._zoom0 = camera.zoom;
		this._zoomState = this._zoom0;

		this._initialNear = camera.near;
		this._nearPos0 = camera.position.distanceTo( this.target ) - camera.near;
		this._nearPos = this._initialNear;

		this._initialFar = camera.far;
		this._farPos0 = camera.position.distanceTo( this.target ) - camera.far;
		this._farPos = this._initialFar;

		this._up0.copy( camera.up );
		this._upState.copy( camera.up );

		this.camera = camera;
		this.camera.updateProjectionMatrix();

		//making gizmos
		this._tbRadius = this.calculateTbRadius( camera );
		this.makeGizmos( this.target, this._tbRadius );

	};

	/**
	 * Set gizmos visibility
	 * @param {Boolean} value Value of gizmos visibility
	 */
	setGizmosVisible( value ) {

		this._gizmos.visible = value;
		this.dispatchEvent( _changeEvent );

	}

	/**
	 * Set gizmos radius factor and redraws gizmos
	 * @param {Float} value Value of radius factor
	 */
	setTbRadius( value ) {

		this.radiusFactor = value;
		this._tbRadius = this.calculateTbRadius( this.camera );

		const curve = new three__WEBPACK_IMPORTED_MODULE_0__.EllipseCurve( 0, 0, this._tbRadius, this._tbRadius );
		const points = curve.getPoints( this._curvePts );
		const curveGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints( points );


		for ( const gizmo in this._gizmos.children ) {

			this._gizmos.children[ gizmo ].geometry = curveGeometry;

		}

		this.dispatchEvent( _changeEvent );

	}

	/**
	 * Creates the rotation gizmos matching trackball center and radius
	 * @param {Vector3} tbCenter The trackball center
	 * @param {number} tbRadius The trackball radius
	 */
	makeGizmos = ( tbCenter, tbRadius ) => {

		const curve = new three__WEBPACK_IMPORTED_MODULE_0__.EllipseCurve( 0, 0, tbRadius, tbRadius );
		const points = curve.getPoints( this._curvePts );

		//geometry
		const curveGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints( points );

		//material
		const curveMaterialX = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial( { color: 0xff8080, fog: false, transparent: true, opacity: 0.6 } );
		const curveMaterialY = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial( { color: 0x80ff80, fog: false, transparent: true, opacity: 0.6 } );
		const curveMaterialZ = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial( { color: 0x8080ff, fog: false, transparent: true, opacity: 0.6 } );

		//line
		const gizmoX = new three__WEBPACK_IMPORTED_MODULE_0__.Line( curveGeometry, curveMaterialX );
		const gizmoY = new three__WEBPACK_IMPORTED_MODULE_0__.Line( curveGeometry, curveMaterialY );
		const gizmoZ = new three__WEBPACK_IMPORTED_MODULE_0__.Line( curveGeometry, curveMaterialZ );

		const rotation = Math.PI * 0.5;
		gizmoX.rotation.x = rotation;
		gizmoY.rotation.y = rotation;


		//setting state
		this._gizmoMatrixState0.identity().setPosition( tbCenter );
		this._gizmoMatrixState.copy( this._gizmoMatrixState0 );

		if ( this.camera.zoom != 1 ) {

			//adapt gizmos size to camera zoom
			const size = 1 / this.camera.zoom;
			this._scaleMatrix.makeScale( size, size, size );
			this._translationMatrix.makeTranslation( - tbCenter.x, - tbCenter.y, - tbCenter.z );

			this._gizmoMatrixState.premultiply( this._translationMatrix ).premultiply( this._scaleMatrix );
			this._translationMatrix.makeTranslation( tbCenter.x, tbCenter.y, tbCenter.z );
			this._gizmoMatrixState.premultiply( this._translationMatrix );

		}

		this._gizmoMatrixState.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );

		this._gizmos.clear();

		this._gizmos.add( gizmoX );
		this._gizmos.add( gizmoY );
		this._gizmos.add( gizmoZ );

	};

	/**
	 * Perform animation for focus operation
	 * @param {Number} time Instant in which this function is called as performance.now()
	 * @param {Vector3} point Point of interest for focus operation
	 * @param {Matrix4} cameraMatrix Camera matrix
	 * @param {Matrix4} gizmoMatrix Gizmos matrix
	 */
	onFocusAnim = ( time, point, cameraMatrix, gizmoMatrix ) => {

		if ( this._timeStart == - 1 ) {

			//animation start
			this._timeStart = time;

		}

		if ( this._state == STATE.ANIMATION_FOCUS ) {

			const deltaTime = time - this._timeStart;
			const animTime = deltaTime / this.focusAnimationTime;

			this._gizmoMatrixState.copy( gizmoMatrix );

			if ( animTime >= 1 ) {

				//animation end

				this._gizmoMatrixState.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );

				this.focus( point, this.scaleFactor );

				this._timeStart = - 1;
				this.updateTbState( STATE.IDLE, false );
				this.activateGizmos( false );

				this.dispatchEvent( _changeEvent );

			} else {

				const amount = this.easeOutCubic( animTime );
				const size = ( ( 1 - amount ) + ( this.scaleFactor * amount ) );

				this._gizmoMatrixState.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );
				this.focus( point, size, amount );

				this.dispatchEvent( _changeEvent );
				const self = this;
				this._animationId = window.requestAnimationFrame( function ( t ) {

					self.onFocusAnim( t, point, cameraMatrix, gizmoMatrix.clone() );

				} );

			}

		} else {

			//interrupt animation

			this._animationId = - 1;
			this._timeStart = - 1;

		}

	};

	/**
	 * Perform animation for rotation operation
	 * @param {Number} time Instant in which this function is called as performance.now()
	 * @param {Vector3} rotationAxis Rotation axis
	 * @param {number} w0 Initial angular velocity
	 */
	onRotationAnim = ( time, rotationAxis, w0 ) => {

		if ( this._timeStart == - 1 ) {

			//animation start
			this._anglePrev = 0;
			this._angleCurrent = 0;
			this._timeStart = time;

		}

		if ( this._state == STATE.ANIMATION_ROTATE ) {

			//w = w0 + alpha * t
			const deltaTime = ( time - this._timeStart ) / 1000;
			const w = w0 + ( ( - this.dampingFactor ) * deltaTime );

			if ( w > 0 ) {

				//tetha = 0.5 * alpha * t^2 + w0 * t + tetha0
				this._angleCurrent = 0.5 * ( - this.dampingFactor ) * Math.pow( deltaTime, 2 ) + w0 * deltaTime + 0;
				this.applyTransformMatrix( this.rotate( rotationAxis, this._angleCurrent ) );
				this.dispatchEvent( _changeEvent );
				const self = this;
				this._animationId = window.requestAnimationFrame( function ( t ) {

					self.onRotationAnim( t, rotationAxis, w0 );

				} );

			} else {

				this._animationId = - 1;
				this._timeStart = - 1;

				this.updateTbState( STATE.IDLE, false );
				this.activateGizmos( false );

				this.dispatchEvent( _changeEvent );

			}

		} else {

			//interrupt animation

			this._animationId = - 1;
			this._timeStart = - 1;

			if ( this._state != STATE.ROTATE ) {

				this.activateGizmos( false );
				this.dispatchEvent( _changeEvent );

			}

		}

	};


	/**
	 * Perform pan operation moving camera between two points
	 * @param {Vector3} p0 Initial point
	 * @param {Vector3} p1 Ending point
	 * @param {Boolean} adjust If movement should be adjusted considering camera distance (Perspective only)
	 */
	pan = ( p0, p1, adjust = false ) => {

		const movement = p0.clone().sub( p1 );

		if ( this.camera.isOrthographicCamera ) {

			//adjust movement amount
			movement.multiplyScalar( 1 / this.camera.zoom );

		} else if ( this.camera.isPerspectiveCamera && adjust ) {

			//adjust movement amount
			this._v3_1.setFromMatrixPosition( this._cameraMatrixState0 );	//camera's initial position
			this._v3_2.setFromMatrixPosition( this._gizmoMatrixState0 );	//gizmo's initial position
			const distanceFactor = this._v3_1.distanceTo( this._v3_2 ) / this.camera.position.distanceTo( this._gizmos.position );
			movement.multiplyScalar( 1 / distanceFactor );

		}

		this._v3_1.set( movement.x, movement.y, 0 ).applyQuaternion( this.camera.quaternion );

		this._m4_1.makeTranslation( this._v3_1.x, this._v3_1.y, this._v3_1.z );

		this.setTransformationMatrices( this._m4_1, this._m4_1 );
		return _transformation;

	};

	/**
	 * Reset trackball
	 */
	reset = () => {

		this.camera.zoom = this._zoom0;

		if ( this.camera.isPerspectiveCamera ) {

			this.camera.fov = this._fov0;

		}

		this.camera.near = this._nearPos;
		this.camera.far = this._farPos;
		this._cameraMatrixState.copy( this._cameraMatrixState0 );
		this._cameraMatrixState.decompose( this.camera.position, this.camera.quaternion, this.camera.scale );
		this.camera.up.copy( this._up0 );

		this.camera.updateMatrix();
		this.camera.updateProjectionMatrix();

		this._gizmoMatrixState.copy( this._gizmoMatrixState0 );
		this._gizmoMatrixState0.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );
		this._gizmos.updateMatrix();

		this._tbRadius = this.calculateTbRadius( this.camera );
		this.makeGizmos( this._gizmos.position, this._tbRadius );

		this.camera.lookAt( this._gizmos.position );

		this.updateTbState( STATE.IDLE, false );

		this.dispatchEvent( _changeEvent );

	};

	/**
	 * Rotate the camera around an axis passing by trackball's center
	 * @param {Vector3} axis Rotation axis
	 * @param {number} angle Angle in radians
	 * @returns {Object} Object with 'camera' field containing transformation matrix resulting from the operation to be applied to the camera
	 */
	rotate = ( axis, angle ) => {

		const point = this._gizmos.position; //rotation center
		this._translationMatrix.makeTranslation( - point.x, - point.y, - point.z );
		this._rotationMatrix.makeRotationAxis( axis, - angle );

		//rotate camera
		this._m4_1.makeTranslation( point.x, point.y, point.z );
		this._m4_1.multiply( this._rotationMatrix );
		this._m4_1.multiply( this._translationMatrix );

		this.setTransformationMatrices( this._m4_1 );

		return _transformation;

	};

	copyState = () => {

		let state;
		if ( this.camera.isOrthographicCamera ) {

			state = JSON.stringify( { arcballState: {

				cameraFar: this.camera.far,
				cameraMatrix: this.camera.matrix,
				cameraNear: this.camera.near,
				cameraUp: this.camera.up,
				cameraZoom: this.camera.zoom,
				gizmoMatrix: this._gizmos.matrix

			} } );

		} else if ( this.camera.isPerspectiveCamera ) {

			state = JSON.stringify( { arcballState: {
				cameraFar: this.camera.far,
				cameraFov: this.camera.fov,
				cameraMatrix: this.camera.matrix,
				cameraNear: this.camera.near,
				cameraUp: this.camera.up,
				cameraZoom: this.camera.zoom,
				gizmoMatrix: this._gizmos.matrix

			} } );

		}

		navigator.clipboard.writeText( state );

	};

	pasteState = () => {

		const self = this;
		navigator.clipboard.readText().then( function resolved( value ) {

			self.setStateFromJSON( value );

		} );

	};

	/**
	 * Save the current state of the control. This can later be recover with .reset
	 */
	saveState = () => {

		this._cameraMatrixState0.copy( this.camera.matrix );
		this._gizmoMatrixState0.copy( this._gizmos.matrix );
		this._nearPos = this.camera.near;
		this._farPos = this.camera.far;
		this._zoom0 = this.camera.zoom;
		this._up0.copy( this.camera.up );

		if ( this.camera.isPerspectiveCamera ) {

			this._fov0 = this.camera.fov;

		}

	};

	/**
	 * Perform uniform scale operation around a given point
	 * @param {Number} size Scale factor
	 * @param {Vector3} point Point around which scale
	 * @param {Boolean} scaleGizmos If gizmos should be scaled (Perspective only)
	 * @returns {Object} Object with 'camera' and 'gizmo' fields containing transformation matrices resulting from the operation to be applied to the camera and gizmos
	 */
	scale = ( size, point, scaleGizmos = true ) => {

		_scalePointTemp.copy( point );
		let sizeInverse = 1 / size;

		if ( this.camera.isOrthographicCamera ) {

			//camera zoom
			this.camera.zoom = this._zoomState;
			this.camera.zoom *= size;

			//check min and max zoom
			if ( this.camera.zoom > this.maxZoom ) {

				this.camera.zoom = this.maxZoom;
				sizeInverse = this._zoomState / this.maxZoom;

			} else if ( this.camera.zoom < this.minZoom ) {

				this.camera.zoom = this.minZoom;
				sizeInverse = this._zoomState / this.minZoom;

			}

			this.camera.updateProjectionMatrix();

			this._v3_1.setFromMatrixPosition( this._gizmoMatrixState );	//gizmos position

			//scale gizmos so they appear in the same spot having the same dimension
			this._scaleMatrix.makeScale( sizeInverse, sizeInverse, sizeInverse );
			this._translationMatrix.makeTranslation( - this._v3_1.x, - this._v3_1.y, - this._v3_1.z );

			this._m4_2.makeTranslation( this._v3_1.x, this._v3_1.y, this._v3_1.z ).multiply( this._scaleMatrix );
			this._m4_2.multiply( this._translationMatrix );


			//move camera and gizmos to obtain pinch effect
			_scalePointTemp.sub( this._v3_1 );

			const amount = _scalePointTemp.clone().multiplyScalar( sizeInverse );
			_scalePointTemp.sub( amount );

			this._m4_1.makeTranslation( _scalePointTemp.x, _scalePointTemp.y, _scalePointTemp.z );
			this._m4_2.premultiply( this._m4_1 );

			this.setTransformationMatrices( this._m4_1, this._m4_2 );
			return _transformation;

		} else if ( this.camera.isPerspectiveCamera ) {

			this._v3_1.setFromMatrixPosition( this._cameraMatrixState );
			this._v3_2.setFromMatrixPosition( this._gizmoMatrixState );

			//move camera
			let distance = this._v3_1.distanceTo( _scalePointTemp );
			let amount = distance - ( distance * sizeInverse );

			//check min and max distance
			const newDistance = distance - amount;
			if ( newDistance < this.minDistance ) {

				sizeInverse = this.minDistance / distance;
				amount = distance - ( distance * sizeInverse );

			} else if ( newDistance > this.maxDistance ) {

				sizeInverse = this.maxDistance / distance;
				amount = distance - ( distance * sizeInverse );

			}

			_offset.copy( _scalePointTemp ).sub( this._v3_1 ).normalize().multiplyScalar( amount );

			this._m4_1.makeTranslation( _offset.x, _offset.y, _offset.z );


			if ( scaleGizmos ) {

				//scale gizmos so they appear in the same spot having the same dimension
				const pos = this._v3_2;

				distance = pos.distanceTo( _scalePointTemp );
				amount = distance - ( distance * sizeInverse );
				_offset.copy( _scalePointTemp ).sub( this._v3_2 ).normalize().multiplyScalar( amount );

				this._translationMatrix.makeTranslation( pos.x, pos.y, pos.z );
				this._scaleMatrix.makeScale( sizeInverse, sizeInverse, sizeInverse );

				this._m4_2.makeTranslation( _offset.x, _offset.y, _offset.z ).multiply( this._translationMatrix );
				this._m4_2.multiply( this._scaleMatrix );

				this._translationMatrix.makeTranslation( - pos.x, - pos.y, - pos.z );

				this._m4_2.multiply( this._translationMatrix );
				this.setTransformationMatrices( this._m4_1, this._m4_2 );


			} else {

				this.setTransformationMatrices( this._m4_1 );

			}

			return _transformation;

		}

	};

	/**
	 * Set camera fov
	 * @param {Number} value fov to be setted
	 */
	setFov = ( value ) => {

		if ( this.camera.isPerspectiveCamera ) {

			this.camera.fov = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp( value, this.minFov, this.maxFov );
			this.camera.updateProjectionMatrix();

		}

	};

	/**
	 * Set values in transformation object
	 * @param {Matrix4} camera Transformation to be applied to the camera
	 * @param {Matrix4} gizmos Transformation to be applied to gizmos
	 */
	 setTransformationMatrices( camera = null, gizmos = null ) {

		if ( camera != null ) {

			if ( _transformation.camera != null ) {

				_transformation.camera.copy( camera );

			} else {

				_transformation.camera = camera.clone();

			}

		} else {

			_transformation.camera = null;

		}

		if ( gizmos != null ) {

			if ( _transformation.gizmos != null ) {

				_transformation.gizmos.copy( gizmos );

			} else {

				_transformation.gizmos = gizmos.clone();

			}

		} else {

			_transformation.gizmos = null;

		}

	}

	/**
	 * Rotate camera around its direction axis passing by a given point by a given angle
	 * @param {Vector3} point The point where the rotation axis is passing trough
	 * @param {Number} angle Angle in radians
	 * @returns The computed transormation matix
	 */
	zRotate = ( point, angle ) => {

		this._rotationMatrix.makeRotationAxis( this._rotationAxis, angle );
		this._translationMatrix.makeTranslation( - point.x, - point.y, - point.z );

		this._m4_1.makeTranslation( point.x, point.y, point.z );
		this._m4_1.multiply( this._rotationMatrix );
		this._m4_1.multiply( this._translationMatrix );

		this._v3_1.setFromMatrixPosition( this._gizmoMatrixState ).sub( point );	//vector from rotation center to gizmos position
		this._v3_2.copy( this._v3_1 ).applyAxisAngle( this._rotationAxis, angle );	//apply rotation
		this._v3_2.sub( this._v3_1 );

		this._m4_2.makeTranslation( this._v3_2.x, this._v3_2.y, this._v3_2.z );

		this.setTransformationMatrices( this._m4_1, this._m4_2 );
		return _transformation;

	};


	getRaycaster() {

		return _raycaster;

	}


	/**
	 * Unproject the cursor on the 3D object surface
	 * @param {Vector2} cursor Cursor coordinates in NDC
	 * @param {Camera} camera Virtual camera
	 * @returns {Vector3} The point of intersection with the model, if exist, null otherwise
	 */
	unprojectOnObj = ( cursor, camera ) => {

		const raycaster = this.getRaycaster();
		raycaster.near = camera.near;
		raycaster.far = camera.far;
		raycaster.setFromCamera( cursor, camera );

		const intersect = raycaster.intersectObjects( this.scene.children, true );

		for ( let i = 0; i < intersect.length; i ++ ) {

			if ( intersect[ i ].object.uuid != this._gizmos.uuid && intersect[ i ].face != null ) {

				return intersect[ i ].point.clone();

			}

		}

		return null;

	};

	/**
	 * Unproject the cursor on the trackball surface
	 * @param {Camera} camera The virtual camera
	 * @param {Number} cursorX Cursor horizontal coordinate on screen
	 * @param {Number} cursorY Cursor vertical coordinate on screen
	 * @param {HTMLElement} canvas The canvas where the renderer draws its output
	 * @param {number} tbRadius The trackball radius
	 * @returns {Vector3} The unprojected point on the trackball surface
	 */
	unprojectOnTbSurface = ( camera, cursorX, cursorY, canvas, tbRadius ) => {

		if ( camera.type == 'OrthographicCamera' ) {

			this._v2_1.copy( this.getCursorPosition( cursorX, cursorY, canvas ) );
			this._v3_1.set( this._v2_1.x, this._v2_1.y, 0 );

			const x2 = Math.pow( this._v2_1.x, 2 );
			const y2 = Math.pow( this._v2_1.y, 2 );
			const r2 = Math.pow( this._tbRadius, 2 );

			if ( x2 + y2 <= r2 * 0.5 ) {

				//intersection with sphere
				this._v3_1.setZ( Math.sqrt( r2 - ( x2 + y2 ) ) );

			} else {

				//intersection with hyperboloid
				this._v3_1.setZ( ( r2 * 0.5 ) / ( Math.sqrt( x2 + y2 ) ) );

			}

			return this._v3_1;

		} else if ( camera.type == 'PerspectiveCamera' ) {

			//unproject cursor on the near plane
			this._v2_1.copy( this.getCursorNDC( cursorX, cursorY, canvas ) );

			this._v3_1.set( this._v2_1.x, this._v2_1.y, - 1 );
			this._v3_1.applyMatrix4( camera.projectionMatrixInverse );

			const rayDir = this._v3_1.clone().normalize(); //unprojected ray direction
			const cameraGizmoDistance = camera.position.distanceTo( this._gizmos.position );
			const radius2 = Math.pow( tbRadius, 2 );

			//	  camera
			//		|\
			//		| \
			//		|  \
			//	h	|	\
			//		| 	 \
			//		| 	  \
			//	_ _ | _ _ _\ _ _  near plane
			//			l

			const h = this._v3_1.z;
			const l = Math.sqrt( Math.pow( this._v3_1.x, 2 ) + Math.pow( this._v3_1.y, 2 ) );

			if ( l == 0 ) {

				//ray aligned with camera
				rayDir.set( this._v3_1.x, this._v3_1.y, tbRadius );
				return rayDir;

			}

			const m = h / l;
			const q = cameraGizmoDistance;

			/*
			 * calculate intersection point between unprojected ray and trackball surface
			 *|y = m * x + q
			 *|x^2 + y^2 = r^2
			 *
			 * (m^2 + 1) * x^2 + (2 * m * q) * x + q^2 - r^2 = 0
			 */
			let a = Math.pow( m, 2 ) + 1;
			let b = 2 * m * q;
			let c = Math.pow( q, 2 ) - radius2;
			let delta = Math.pow( b, 2 ) - ( 4 * a * c );

			if ( delta >= 0 ) {

				//intersection with sphere
				this._v2_1.setX( ( - b - Math.sqrt( delta ) ) / ( 2 * a ) );
				this._v2_1.setY( m * this._v2_1.x + q );

				const angle = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.RAD2DEG * this._v2_1.angle();

				if ( angle >= 45 ) {

					//if angle between intersection point and X' axis is >= 45°, return that point
					//otherwise, calculate intersection point with hyperboloid

					const rayLength = Math.sqrt( Math.pow( this._v2_1.x, 2 ) + Math.pow( ( cameraGizmoDistance - this._v2_1.y ), 2 ) );
					rayDir.multiplyScalar( rayLength );
					rayDir.z += cameraGizmoDistance;
					return rayDir;

				}

			}

			//intersection with hyperboloid
			/*
			 *|y = m * x + q
			 *|y = (1 / x) * (r^2 / 2)
			 *
			 * m * x^2 + q * x - r^2 / 2 = 0
			 */

			a = m;
			b = q;
			c = - radius2 * 0.5;
			delta = Math.pow( b, 2 ) - ( 4 * a * c );
			this._v2_1.setX( ( - b - Math.sqrt( delta ) ) / ( 2 * a ) );
			this._v2_1.setY( m * this._v2_1.x + q );

			const rayLength = Math.sqrt( Math.pow( this._v2_1.x, 2 ) + Math.pow( ( cameraGizmoDistance - this._v2_1.y ), 2 ) );

			rayDir.multiplyScalar( rayLength );
			rayDir.z += cameraGizmoDistance;
			return rayDir;

		}

	};


	/**
	 * Unproject the cursor on the plane passing through the center of the trackball orthogonal to the camera
	 * @param {Camera} camera The virtual camera
	 * @param {Number} cursorX Cursor horizontal coordinate on screen
	 * @param {Number} cursorY Cursor vertical coordinate on screen
	 * @param {HTMLElement} canvas The canvas where the renderer draws its output
	 * @param {Boolean} initialDistance If initial distance between camera and gizmos should be used for calculations instead of current (Perspective only)
	 * @returns {Vector3} The unprojected point on the trackball plane
	 */
	unprojectOnTbPlane = ( camera, cursorX, cursorY, canvas, initialDistance = false ) => {

		if ( camera.type == 'OrthographicCamera' ) {

			this._v2_1.copy( this.getCursorPosition( cursorX, cursorY, canvas ) );
			this._v3_1.set( this._v2_1.x, this._v2_1.y, 0 );

			return this._v3_1.clone();

		} else if ( camera.type == 'PerspectiveCamera' ) {

			this._v2_1.copy( this.getCursorNDC( cursorX, cursorY, canvas ) );

			//unproject cursor on the near plane
			this._v3_1.set( this._v2_1.x, this._v2_1.y, - 1 );
			this._v3_1.applyMatrix4( camera.projectionMatrixInverse );

			const rayDir = this._v3_1.clone().normalize(); //unprojected ray direction

			//	  camera
			//		|\
			//		| \
			//		|  \
			//	h	|	\
			//		| 	 \
			//		| 	  \
			//	_ _ | _ _ _\ _ _  near plane
			//			l

			const h = this._v3_1.z;
			const l = Math.sqrt( Math.pow( this._v3_1.x, 2 ) + Math.pow( this._v3_1.y, 2 ) );
			let cameraGizmoDistance;

			if ( initialDistance ) {

				cameraGizmoDistance = this._v3_1.setFromMatrixPosition( this._cameraMatrixState0 ).distanceTo( this._v3_2.setFromMatrixPosition( this._gizmoMatrixState0 ) );

			} else {

				cameraGizmoDistance = camera.position.distanceTo( this._gizmos.position );

			}

			/*
			 * calculate intersection point between unprojected ray and the plane
			 *|y = mx + q
			 *|y = 0
			 *
			 * x = -q/m
			*/
			if ( l == 0 ) {

				//ray aligned with camera
				rayDir.set( 0, 0, 0 );
				return rayDir;

			}

			const m = h / l;
			const q = cameraGizmoDistance;
			const x = - q / m;

			const rayLength = Math.sqrt( Math.pow( q, 2 ) + Math.pow( x, 2 ) );
			rayDir.multiplyScalar( rayLength );
			rayDir.z = 0;
			return rayDir;

		}

	};

	/**
	 * Update camera and gizmos state
	 */
	updateMatrixState = () => {

		//update camera and gizmos state
		this._cameraMatrixState.copy( this.camera.matrix );
		this._gizmoMatrixState.copy( this._gizmos.matrix );

		if ( this.camera.isOrthographicCamera ) {

			this._cameraProjectionState.copy( this.camera.projectionMatrix );
			this.camera.updateProjectionMatrix();
			this._zoomState = this.camera.zoom;

		} else if ( this.camera.isPerspectiveCamera ) {

			this._fovState = this.camera.fov;

		}

	};

	/**
	 * Update the trackball FSA
	 * @param {STATE} newState New state of the FSA
	 * @param {Boolean} updateMatrices If matriices state should be updated
	 */
	updateTbState = ( newState, updateMatrices ) => {

		this._state = newState;
		if ( updateMatrices ) {

			this.updateMatrixState();

		}

	};

	update = () => {

		const EPS = 0.000001;

		if ( this.target.equals( this._currentTarget ) === false ) {

			this._gizmos.position.copy( this.target );	//for correct radius calculation
			this._tbRadius = this.calculateTbRadius( this.camera );
			this.makeGizmos( this.target, this._tbRadius );
			this._currentTarget.copy( this.target );

		}

		//check min/max parameters
		if ( this.camera.isOrthographicCamera ) {

			//check zoom
			if ( this.camera.zoom > this.maxZoom || this.camera.zoom < this.minZoom ) {

				const newZoom = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp( this.camera.zoom, this.minZoom, this.maxZoom );
				this.applyTransformMatrix( this.scale( newZoom / this.camera.zoom, this._gizmos.position, true ) );

			}

		} else if ( this.camera.isPerspectiveCamera ) {

			//check distance
			const distance = this.camera.position.distanceTo( this._gizmos.position );

			if ( distance > this.maxDistance + EPS || distance < this.minDistance - EPS ) {

				const newDistance = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp( distance, this.minDistance, this.maxDistance );
				this.applyTransformMatrix( this.scale( newDistance / distance, this._gizmos.position ) );
				this.updateMatrixState();

			 }

			//check fov
			if ( this.camera.fov < this.minFov || this.camera.fov > this.maxFov ) {

				this.camera.fov = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp( this.camera.fov, this.minFov, this.maxFov );
				this.camera.updateProjectionMatrix();

			}

			const oldRadius = this._tbRadius;
			this._tbRadius = this.calculateTbRadius( this.camera );

			if ( oldRadius < this._tbRadius - EPS || oldRadius > this._tbRadius + EPS ) {

				const scale = ( this._gizmos.scale.x + this._gizmos.scale.y + this._gizmos.scale.z ) / 3;
				const newRadius = this._tbRadius / scale;
				const curve = new three__WEBPACK_IMPORTED_MODULE_0__.EllipseCurve( 0, 0, newRadius, newRadius );
				const points = curve.getPoints( this._curvePts );
				const curveGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints( points );

				for ( const gizmo in this._gizmos.children ) {

					this._gizmos.children[ gizmo ].geometry = curveGeometry;

				}

			}

		}

		this.camera.lookAt( this._gizmos.position );

	};

	setStateFromJSON = ( json ) => {

		const state = JSON.parse( json );

		if ( state.arcballState != undefined ) {

			this._cameraMatrixState.fromArray( state.arcballState.cameraMatrix.elements );
			this._cameraMatrixState.decompose( this.camera.position, this.camera.quaternion, this.camera.scale );

			this.camera.up.copy( state.arcballState.cameraUp );
			this.camera.near = state.arcballState.cameraNear;
			this.camera.far = state.arcballState.cameraFar;

			this.camera.zoom = state.arcballState.cameraZoom;

			if ( this.camera.isPerspectiveCamera ) {

				this.camera.fov = state.arcballState.cameraFov;

			}

			this._gizmoMatrixState.fromArray( state.arcballState.gizmoMatrix.elements );
			this._gizmoMatrixState.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );

			this.camera.updateMatrix();
			this.camera.updateProjectionMatrix();

			this._gizmos.updateMatrix();

			this._tbRadius = this.calculateTbRadius( this.camera );
			const gizmoTmp = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().copy( this._gizmoMatrixState0 );
			this.makeGizmos( this._gizmos.position, this._tbRadius );
			this._gizmoMatrixState0.copy( gizmoTmp );

			this.camera.lookAt( this._gizmos.position );
			this.updateTbState( STATE.IDLE, false );

			this.dispatchEvent( _changeEvent );

		}

	};

}




/***/ }),

/***/ "./node_modules/three/examples/jsm/loaders/OBJLoader.js":
/*!**************************************************************!*\
  !*** ./node_modules/three/examples/jsm/loaders/OBJLoader.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OBJLoader": () => (/* binding */ OBJLoader)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");


// o object_name | g group_name
const _object_pattern = /^[og]\s*(.+)?/;
// mtllib file_reference
const _material_library_pattern = /^mtllib /;
// usemtl material_name
const _material_use_pattern = /^usemtl /;
// usemap map_name
const _map_use_pattern = /^usemap /;

const _vA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _vB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _vC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

const _ab = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _cb = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

const _color = new three__WEBPACK_IMPORTED_MODULE_0__.Color();

function ParserState() {

	const state = {
		objects: [],
		object: {},

		vertices: [],
		normals: [],
		colors: [],
		uvs: [],

		materials: {},
		materialLibraries: [],

		startObject: function ( name, fromDeclaration ) {

			// If the current object (initial from reset) is not from a g/o declaration in the parsed
			// file. We need to use it for the first parsed g/o to keep things in sync.
			if ( this.object && this.object.fromDeclaration === false ) {

				this.object.name = name;
				this.object.fromDeclaration = ( fromDeclaration !== false );
				return;

			}

			const previousMaterial = ( this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined );

			if ( this.object && typeof this.object._finalize === 'function' ) {

				this.object._finalize( true );

			}

			this.object = {
				name: name || '',
				fromDeclaration: ( fromDeclaration !== false ),

				geometry: {
					vertices: [],
					normals: [],
					colors: [],
					uvs: [],
					hasUVIndices: false
				},
				materials: [],
				smooth: true,

				startMaterial: function ( name, libraries ) {

					const previous = this._finalize( false );

					// New usemtl declaration overwrites an inherited material, except if faces were declared
					// after the material, then it must be preserved for proper MultiMaterial continuation.
					if ( previous && ( previous.inherited || previous.groupCount <= 0 ) ) {

						this.materials.splice( previous.index, 1 );

					}

					const material = {
						index: this.materials.length,
						name: name || '',
						mtllib: ( Array.isArray( libraries ) && libraries.length > 0 ? libraries[ libraries.length - 1 ] : '' ),
						smooth: ( previous !== undefined ? previous.smooth : this.smooth ),
						groupStart: ( previous !== undefined ? previous.groupEnd : 0 ),
						groupEnd: - 1,
						groupCount: - 1,
						inherited: false,

						clone: function ( index ) {

							const cloned = {
								index: ( typeof index === 'number' ? index : this.index ),
								name: this.name,
								mtllib: this.mtllib,
								smooth: this.smooth,
								groupStart: 0,
								groupEnd: - 1,
								groupCount: - 1,
								inherited: false
							};
							cloned.clone = this.clone.bind( cloned );
							return cloned;

						}
					};

					this.materials.push( material );

					return material;

				},

				currentMaterial: function () {

					if ( this.materials.length > 0 ) {

						return this.materials[ this.materials.length - 1 ];

					}

					return undefined;

				},

				_finalize: function ( end ) {

					const lastMultiMaterial = this.currentMaterial();
					if ( lastMultiMaterial && lastMultiMaterial.groupEnd === - 1 ) {

						lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
						lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
						lastMultiMaterial.inherited = false;

					}

					// Ignore objects tail materials if no face declarations followed them before a new o/g started.
					if ( end && this.materials.length > 1 ) {

						for ( let mi = this.materials.length - 1; mi >= 0; mi -- ) {

							if ( this.materials[ mi ].groupCount <= 0 ) {

								this.materials.splice( mi, 1 );

							}

						}

					}

					// Guarantee at least one empty material, this makes the creation later more straight forward.
					if ( end && this.materials.length === 0 ) {

						this.materials.push( {
							name: '',
							smooth: this.smooth
						} );

					}

					return lastMultiMaterial;

				}
			};

			// Inherit previous objects material.
			// Spec tells us that a declared material must be set to all objects until a new material is declared.
			// If a usemtl declaration is encountered while this new object is being parsed, it will
			// overwrite the inherited material. Exception being that there was already face declarations
			// to the inherited material, then it will be preserved for proper MultiMaterial continuation.

			if ( previousMaterial && previousMaterial.name && typeof previousMaterial.clone === 'function' ) {

				const declared = previousMaterial.clone( 0 );
				declared.inherited = true;
				this.object.materials.push( declared );

			}

			this.objects.push( this.object );

		},

		finalize: function () {

			if ( this.object && typeof this.object._finalize === 'function' ) {

				this.object._finalize( true );

			}

		},

		parseVertexIndex: function ( value, len ) {

			const index = parseInt( value, 10 );
			return ( index >= 0 ? index - 1 : index + len / 3 ) * 3;

		},

		parseNormalIndex: function ( value, len ) {

			const index = parseInt( value, 10 );
			return ( index >= 0 ? index - 1 : index + len / 3 ) * 3;

		},

		parseUVIndex: function ( value, len ) {

			const index = parseInt( value, 10 );
			return ( index >= 0 ? index - 1 : index + len / 2 ) * 2;

		},

		addVertex: function ( a, b, c ) {

			const src = this.vertices;
			const dst = this.object.geometry.vertices;

			dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
			dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
			dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

		},

		addVertexPoint: function ( a ) {

			const src = this.vertices;
			const dst = this.object.geometry.vertices;

			dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );

		},

		addVertexLine: function ( a ) {

			const src = this.vertices;
			const dst = this.object.geometry.vertices;

			dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );

		},

		addNormal: function ( a, b, c ) {

			const src = this.normals;
			const dst = this.object.geometry.normals;

			dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
			dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
			dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

		},

		addFaceNormal: function ( a, b, c ) {

			const src = this.vertices;
			const dst = this.object.geometry.normals;

			_vA.fromArray( src, a );
			_vB.fromArray( src, b );
			_vC.fromArray( src, c );

			_cb.subVectors( _vC, _vB );
			_ab.subVectors( _vA, _vB );
			_cb.cross( _ab );

			_cb.normalize();

			dst.push( _cb.x, _cb.y, _cb.z );
			dst.push( _cb.x, _cb.y, _cb.z );
			dst.push( _cb.x, _cb.y, _cb.z );

		},

		addColor: function ( a, b, c ) {

			const src = this.colors;
			const dst = this.object.geometry.colors;

			if ( src[ a ] !== undefined ) dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
			if ( src[ b ] !== undefined ) dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
			if ( src[ c ] !== undefined ) dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

		},

		addUV: function ( a, b, c ) {

			const src = this.uvs;
			const dst = this.object.geometry.uvs;

			dst.push( src[ a + 0 ], src[ a + 1 ] );
			dst.push( src[ b + 0 ], src[ b + 1 ] );
			dst.push( src[ c + 0 ], src[ c + 1 ] );

		},

		addDefaultUV: function () {

			const dst = this.object.geometry.uvs;

			dst.push( 0, 0 );
			dst.push( 0, 0 );
			dst.push( 0, 0 );

		},

		addUVLine: function ( a ) {

			const src = this.uvs;
			const dst = this.object.geometry.uvs;

			dst.push( src[ a + 0 ], src[ a + 1 ] );

		},

		addFace: function ( a, b, c, ua, ub, uc, na, nb, nc ) {

			const vLen = this.vertices.length;

			let ia = this.parseVertexIndex( a, vLen );
			let ib = this.parseVertexIndex( b, vLen );
			let ic = this.parseVertexIndex( c, vLen );

			this.addVertex( ia, ib, ic );
			this.addColor( ia, ib, ic );

			// normals

			if ( na !== undefined && na !== '' ) {

				const nLen = this.normals.length;

				ia = this.parseNormalIndex( na, nLen );
				ib = this.parseNormalIndex( nb, nLen );
				ic = this.parseNormalIndex( nc, nLen );

				this.addNormal( ia, ib, ic );

			} else {

				this.addFaceNormal( ia, ib, ic );

			}

			// uvs

			if ( ua !== undefined && ua !== '' ) {

				const uvLen = this.uvs.length;

				ia = this.parseUVIndex( ua, uvLen );
				ib = this.parseUVIndex( ub, uvLen );
				ic = this.parseUVIndex( uc, uvLen );

				this.addUV( ia, ib, ic );

				this.object.geometry.hasUVIndices = true;

			} else {

				// add placeholder values (for inconsistent face definitions)

				this.addDefaultUV();

			}

		},

		addPointGeometry: function ( vertices ) {

			this.object.geometry.type = 'Points';

			const vLen = this.vertices.length;

			for ( let vi = 0, l = vertices.length; vi < l; vi ++ ) {

				const index = this.parseVertexIndex( vertices[ vi ], vLen );

				this.addVertexPoint( index );
				this.addColor( index );

			}

		},

		addLineGeometry: function ( vertices, uvs ) {

			this.object.geometry.type = 'Line';

			const vLen = this.vertices.length;
			const uvLen = this.uvs.length;

			for ( let vi = 0, l = vertices.length; vi < l; vi ++ ) {

				this.addVertexLine( this.parseVertexIndex( vertices[ vi ], vLen ) );

			}

			for ( let uvi = 0, l = uvs.length; uvi < l; uvi ++ ) {

				this.addUVLine( this.parseUVIndex( uvs[ uvi ], uvLen ) );

			}

		}

	};

	state.startObject( '', false );

	return state;

}

//

class OBJLoader extends three__WEBPACK_IMPORTED_MODULE_0__.Loader {

	constructor( manager ) {

		super( manager );

		this.materials = null;

	}

	load( url, onLoad, onProgress, onError ) {

		const scope = this;

		const loader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader( this.manager );
		loader.setPath( this.path );
		loader.setRequestHeader( this.requestHeader );
		loader.setWithCredentials( this.withCredentials );
		loader.load( url, function ( text ) {

			try {

				onLoad( scope.parse( text ) );

			} catch ( e ) {

				if ( onError ) {

					onError( e );

				} else {

					console.error( e );

				}

				scope.manager.itemError( url );

			}

		}, onProgress, onError );

	}

	setMaterials( materials ) {

		this.materials = materials;

		return this;

	}

	parse( text ) {

		const state = new ParserState();

		if ( text.indexOf( '\r\n' ) !== - 1 ) {

			// This is faster than String.split with regex that splits on both
			text = text.replace( /\r\n/g, '\n' );

		}

		if ( text.indexOf( '\\\n' ) !== - 1 ) {

			// join lines separated by a line continuation character (\)
			text = text.replace( /\\\n/g, '' );

		}

		const lines = text.split( '\n' );
		let line = '', lineFirstChar = '';
		let lineLength = 0;
		let result = [];

		// Faster to just trim left side of the line. Use if available.
		const trimLeft = ( typeof ''.trimLeft === 'function' );

		for ( let i = 0, l = lines.length; i < l; i ++ ) {

			line = lines[ i ];

			line = trimLeft ? line.trimLeft() : line.trim();

			lineLength = line.length;

			if ( lineLength === 0 ) continue;

			lineFirstChar = line.charAt( 0 );

			// @todo invoke passed in handler if any
			if ( lineFirstChar === '#' ) continue;

			if ( lineFirstChar === 'v' ) {

				const data = line.split( /\s+/ );

				switch ( data[ 0 ] ) {

					case 'v':
						state.vertices.push(
							parseFloat( data[ 1 ] ),
							parseFloat( data[ 2 ] ),
							parseFloat( data[ 3 ] )
						);
						if ( data.length >= 7 ) {

							_color.setRGB(
								parseFloat( data[ 4 ] ),
								parseFloat( data[ 5 ] ),
								parseFloat( data[ 6 ] )
							).convertSRGBToLinear();

							state.colors.push( _color.r, _color.g, _color.b );

						} else {

							// if no colors are defined, add placeholders so color and vertex indices match

							state.colors.push( undefined, undefined, undefined );

						}

						break;
					case 'vn':
						state.normals.push(
							parseFloat( data[ 1 ] ),
							parseFloat( data[ 2 ] ),
							parseFloat( data[ 3 ] )
						);
						break;
					case 'vt':
						state.uvs.push(
							parseFloat( data[ 1 ] ),
							parseFloat( data[ 2 ] )
						);
						break;

				}

			} else if ( lineFirstChar === 'f' ) {

				const lineData = line.slice( 1 ).trim();
				const vertexData = lineData.split( /\s+/ );
				const faceVertices = [];

				// Parse the face vertex data into an easy to work with format

				for ( let j = 0, jl = vertexData.length; j < jl; j ++ ) {

					const vertex = vertexData[ j ];

					if ( vertex.length > 0 ) {

						const vertexParts = vertex.split( '/' );
						faceVertices.push( vertexParts );

					}

				}

				// Draw an edge between the first vertex and all subsequent vertices to form an n-gon

				const v1 = faceVertices[ 0 ];

				for ( let j = 1, jl = faceVertices.length - 1; j < jl; j ++ ) {

					const v2 = faceVertices[ j ];
					const v3 = faceVertices[ j + 1 ];

					state.addFace(
						v1[ 0 ], v2[ 0 ], v3[ 0 ],
						v1[ 1 ], v2[ 1 ], v3[ 1 ],
						v1[ 2 ], v2[ 2 ], v3[ 2 ]
					);

				}

			} else if ( lineFirstChar === 'l' ) {

				const lineParts = line.substring( 1 ).trim().split( ' ' );
				let lineVertices = [];
				const lineUVs = [];

				if ( line.indexOf( '/' ) === - 1 ) {

					lineVertices = lineParts;

				} else {

					for ( let li = 0, llen = lineParts.length; li < llen; li ++ ) {

						const parts = lineParts[ li ].split( '/' );

						if ( parts[ 0 ] !== '' ) lineVertices.push( parts[ 0 ] );
						if ( parts[ 1 ] !== '' ) lineUVs.push( parts[ 1 ] );

					}

				}

				state.addLineGeometry( lineVertices, lineUVs );

			} else if ( lineFirstChar === 'p' ) {

				const lineData = line.slice( 1 ).trim();
				const pointData = lineData.split( ' ' );

				state.addPointGeometry( pointData );

			} else if ( ( result = _object_pattern.exec( line ) ) !== null ) {

				// o object_name
				// or
				// g group_name

				// WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
				// let name = result[ 0 ].slice( 1 ).trim();
				const name = ( ' ' + result[ 0 ].slice( 1 ).trim() ).slice( 1 );

				state.startObject( name );

			} else if ( _material_use_pattern.test( line ) ) {

				// material

				state.object.startMaterial( line.substring( 7 ).trim(), state.materialLibraries );

			} else if ( _material_library_pattern.test( line ) ) {

				// mtl file

				state.materialLibraries.push( line.substring( 7 ).trim() );

			} else if ( _map_use_pattern.test( line ) ) {

				// the line is parsed but ignored since the loader assumes textures are defined MTL files
				// (according to https://www.okino.com/conv/imp_wave.htm, 'usemap' is the old-style Wavefront texture reference method)

				console.warn( 'THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.' );

			} else if ( lineFirstChar === 's' ) {

				result = line.split( ' ' );

				// smooth shading

				// @todo Handle files that have varying smooth values for a set of faces inside one geometry,
				// but does not define a usemtl for each face set.
				// This should be detected and a dummy material created (later MultiMaterial and geometry groups).
				// This requires some care to not create extra material on each smooth value for "normal" obj files.
				// where explicit usemtl defines geometry groups.
				// Example asset: examples/models/obj/cerberus/Cerberus.obj

				/*
					 * http://paulbourke.net/dataformats/obj/
					 *
					 * From chapter "Grouping" Syntax explanation "s group_number":
					 * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
					 * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
					 * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
					 * than 0."
					 */
				if ( result.length > 1 ) {

					const value = result[ 1 ].trim().toLowerCase();
					state.object.smooth = ( value !== '0' && value !== 'off' );

				} else {

					// ZBrush can produce "s" lines #11707
					state.object.smooth = true;

				}

				const material = state.object.currentMaterial();
				if ( material ) material.smooth = state.object.smooth;

			} else {

				// Handle null terminated files without exception
				if ( line === '\0' ) continue;

				console.warn( 'THREE.OBJLoader: Unexpected line: "' + line + '"' );

			}

		}

		state.finalize();

		const container = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
		container.materialLibraries = [].concat( state.materialLibraries );

		const hasPrimitives = ! ( state.objects.length === 1 && state.objects[ 0 ].geometry.vertices.length === 0 );

		if ( hasPrimitives === true ) {

			for ( let i = 0, l = state.objects.length; i < l; i ++ ) {

				const object = state.objects[ i ];
				const geometry = object.geometry;
				const materials = object.materials;
				const isLine = ( geometry.type === 'Line' );
				const isPoints = ( geometry.type === 'Points' );
				let hasVertexColors = false;

				// Skip o/g line declarations that did not follow with any faces
				if ( geometry.vertices.length === 0 ) continue;

				const buffergeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();

				buffergeometry.setAttribute( 'position', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( geometry.vertices, 3 ) );

				if ( geometry.normals.length > 0 ) {

					buffergeometry.setAttribute( 'normal', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( geometry.normals, 3 ) );

				}

				if ( geometry.colors.length > 0 ) {

					hasVertexColors = true;
					buffergeometry.setAttribute( 'color', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( geometry.colors, 3 ) );

				}

				if ( geometry.hasUVIndices === true ) {

					buffergeometry.setAttribute( 'uv', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( geometry.uvs, 2 ) );

				}

				// Create materials

				const createdMaterials = [];

				for ( let mi = 0, miLen = materials.length; mi < miLen; mi ++ ) {

					const sourceMaterial = materials[ mi ];
					const materialHash = sourceMaterial.name + '_' + sourceMaterial.smooth + '_' + hasVertexColors;
					let material = state.materials[ materialHash ];

					if ( this.materials !== null ) {

						material = this.materials.create( sourceMaterial.name );

						// mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
						if ( isLine && material && ! ( material instanceof three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial ) ) {

							const materialLine = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial();
							three__WEBPACK_IMPORTED_MODULE_0__.Material.prototype.copy.call( materialLine, material );
							materialLine.color.copy( material.color );
							material = materialLine;

						} else if ( isPoints && material && ! ( material instanceof three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial ) ) {

							const materialPoints = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial( { size: 10, sizeAttenuation: false } );
							three__WEBPACK_IMPORTED_MODULE_0__.Material.prototype.copy.call( materialPoints, material );
							materialPoints.color.copy( material.color );
							materialPoints.map = material.map;
							material = materialPoints;

						}

					}

					if ( material === undefined ) {

						if ( isLine ) {

							material = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial();

						} else if ( isPoints ) {

							material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial( { size: 1, sizeAttenuation: false } );

						} else {

							material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial();

						}

						material.name = sourceMaterial.name;
						material.flatShading = sourceMaterial.smooth ? false : true;
						material.vertexColors = hasVertexColors;

						state.materials[ materialHash ] = material;

					}

					createdMaterials.push( material );

				}

				// Create mesh

				let mesh;

				if ( createdMaterials.length > 1 ) {

					for ( let mi = 0, miLen = materials.length; mi < miLen; mi ++ ) {

						const sourceMaterial = materials[ mi ];
						buffergeometry.addGroup( sourceMaterial.groupStart, sourceMaterial.groupCount, mi );

					}

					if ( isLine ) {

						mesh = new three__WEBPACK_IMPORTED_MODULE_0__.LineSegments( buffergeometry, createdMaterials );

					} else if ( isPoints ) {

						mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Points( buffergeometry, createdMaterials );

					} else {

						mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( buffergeometry, createdMaterials );

					}

				} else {

					if ( isLine ) {

						mesh = new three__WEBPACK_IMPORTED_MODULE_0__.LineSegments( buffergeometry, createdMaterials[ 0 ] );

					} else if ( isPoints ) {

						mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Points( buffergeometry, createdMaterials[ 0 ] );

					} else {

						mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( buffergeometry, createdMaterials[ 0 ] );

					}

				}

				mesh.name = object.name;

				container.add( mesh );

			}

		} else {

			// if there is only the default parser state object with no geometry data, interpret data as point cloud

			if ( state.vertices.length > 0 ) {

				const material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial( { size: 1, sizeAttenuation: false } );

				const buffergeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();

				buffergeometry.setAttribute( 'position', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( state.vertices, 3 ) );

				if ( state.colors.length > 0 && state.colors[ 0 ] !== undefined ) {

					buffergeometry.setAttribute( 'color', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( state.colors, 3 ) );
					material.vertexColors = true;

				}

				const points = new three__WEBPACK_IMPORTED_MODULE_0__.Points( buffergeometry, material );
				container.add( points );

			}

		}

		return container;

	}

}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/play.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CLFlBQVk7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOztBQUVOOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFFBQVE7O0FBRVI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQSxRQUFROztBQUVSOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7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O0FBRUE7O0FBRUEsT0FBTzs7QUFFUCxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFNOztBQUVOLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0RBQXdEOztBQUV4RDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsMENBQU87O0FBRS9CLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0Isb0RBQWlCOztBQUVuQztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkI7O0FBRTNCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsY0FBYzs7QUFFbEM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsY0FBYzs7QUFFbEM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw0QkFBNEI7QUFDNUI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBLFVBQVUsa0RBQWU7O0FBRXpCLDJCQUEyQixvREFBaUI7O0FBRTVDO0FBQ0EsZ0JBQWdCLG9EQUFpQjs7QUFFakM7QUFDQSxZQUFZLGtEQUFlOztBQUUzQixxQ0FBcUMsb0RBQWlCO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxHQUFHO0FBQ2YsWUFBWSxHQUFHO0FBQ2YsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLDhCQUE4Qjs7QUFFakQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLEdBQUc7QUFDZixZQUFZLEdBQUc7QUFDZixjQUFjLFNBQVM7QUFDdkI7QUFDQTs7QUFFQSxtQkFBbUIsOEJBQThCOztBQUVqRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLEdBQUc7QUFDZixZQUFZLEdBQUc7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLDhCQUE4Qjs7QUFFakQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0IsOEJBQThCOztBQUVsRDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsOEJBQThCOztBQUVqRDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQiw4QkFBOEI7O0FBRWxEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQixZQUFZLGNBQWM7QUFDMUIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBOztBQUVBLG1CQUFtQiwrQkFBK0I7O0FBRWxEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxtQkFBbUIsdUNBQUk7QUFDdkI7QUFDQSx1QkFBdUIseUNBQU07QUFDN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCLFlBQVksY0FBYztBQUMxQixjQUFjLFFBQVE7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksU0FBUztBQUNyQixjQUFjLFNBQVM7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixjQUFjLFFBQVE7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0Isb0RBQWlCLHFCQUFxQjtBQUMxRCwyRUFBMkU7QUFDM0U7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQSxxQkFBcUIsb0RBQWlCO0FBQ3RDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkNBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixjQUFjLFFBQVE7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdDQUFnQyxhQUFhO0FBQzdDLGdDQUFnQyxhQUFhO0FBQzdDLGdDQUFnQyxhQUFhOztBQUU3QyxJQUFJOztBQUVKLGdDQUFnQyxlQUFlO0FBQy9DLGdDQUFnQyxlQUFlO0FBQy9DLGdDQUFnQyxlQUFlOztBQUUvQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZLGFBQWE7QUFDekIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxhQUFhO0FBQ3pCLGNBQWMsU0FBUztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsK0NBQVk7QUFDaEM7QUFDQSw0QkFBNEIsaURBQWM7OztBQUcxQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBLG9CQUFvQiwrQ0FBWTtBQUNoQzs7QUFFQTtBQUNBLDRCQUE0QixpREFBYzs7QUFFMUM7QUFDQSw2QkFBNkIsb0RBQWlCLElBQUksK0RBQStEO0FBQ2pILDZCQUE2QixvREFBaUIsSUFBSSwrREFBK0Q7QUFDakgsNkJBQTZCLG9EQUFpQixJQUFJLCtEQUErRDs7QUFFakg7QUFDQSxxQkFBcUIsdUNBQUk7QUFDekIscUJBQXFCLHVDQUFJO0FBQ3pCLHFCQUFxQix1Q0FBSTs7QUFFekI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksU0FBUztBQUNyQixZQUFZLFNBQVM7QUFDckIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTjs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFNBQVM7QUFDckIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFNOztBQUVOLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksU0FBUztBQUNyQixZQUFZLFNBQVM7QUFDckI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQSxpRUFBaUU7QUFDakUsZ0VBQWdFO0FBQ2hFO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQixZQUFZLFFBQVE7QUFDcEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQLElBQUk7O0FBRUosNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksU0FBUztBQUNyQixZQUFZLFNBQVM7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLGtEQUFlO0FBQ3BDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkVBQTJFO0FBQzNFLDZFQUE2RTtBQUM3RTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQixZQUFZLFFBQVE7QUFDcEIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLHNCQUFzQjs7QUFFekM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksYUFBYTtBQUN6QixZQUFZLFFBQVE7QUFDcEIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG9EQUFpQjs7QUFFbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxhQUFhO0FBQ3pCLFlBQVksU0FBUztBQUNyQixjQUFjLFNBQVM7QUFDdkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFNBQVM7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixrREFBZTtBQUNuQzs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLGtEQUFlO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0Isa0RBQWU7QUFDckM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLCtDQUFZO0FBQ2xDO0FBQ0EsOEJBQThCLGlEQUFjOztBQUU1Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IsMENBQU87QUFDL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2puR1o7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsMENBQU87QUFDdkIsZ0JBQWdCLDBDQUFPO0FBQ3ZCLGdCQUFnQiwwQ0FBTzs7QUFFdkIsZ0JBQWdCLDBDQUFPO0FBQ3ZCLGdCQUFnQiwwQ0FBTzs7QUFFdkIsbUJBQW1CLHdDQUFLOztBQUV4Qjs7QUFFQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxnREFBZ0QsU0FBUzs7QUFFekQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsMENBQTBDLFFBQVE7O0FBRWxEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQyxRQUFROztBQUVsRDs7QUFFQTs7QUFFQSxzQ0FBc0MsU0FBUzs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHlDQUFNOztBQUU5Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkNBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQSxNQUFNOztBQUVOOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUNBQXFDLE9BQU87O0FBRTVDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxRQUFROztBQUVSOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkNBQTZDLFFBQVE7O0FBRXJEOztBQUVBOztBQUVBO0FB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LHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbW9rdTNkLy4vc3JjL2dhbWUvR2FtZUFwaS50cyIsIndlYnBhY2s6Ly9nb21va3UzZC8uL3NyYy9nYW1lL0dhbWVSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9nb21va3UzZC8uL3NyYy9nYW1lL2luZGV4LnRzIiwid2VicGFjazovL2dvbW9rdTNkLy4vc3JjL3BsYXkudHMiLCJ3ZWJwYWNrOi8vZ29tb2t1M2QvZXh0ZXJuYWwgdmFyIFwiVEhSRUVcIiIsIndlYnBhY2s6Ly9nb21va3UzZC8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvQXJjYmFsbENvbnRyb2xzLmpzIiwid2VicGFjazovL2dvbW9rdTNkLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlci5qcyIsIndlYnBhY2s6Ly9nb21va3UzZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb21va3UzZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29tb2t1M2Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb21va3UzZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvbW9rdTNkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ29tb2t1M2Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2dvbW9rdTNkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUFwaSB7XHJcbiAgICBwcml2YXRlIGdhbWVJZDogc3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIGdhbWVEYXRhOiBhbnk7XHJcbiAgICBwcml2YXRlIHVzZXJOYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgdXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghIHRoaXMudXNlck5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IChhd2FpdChhd2FpdCBmZXRjaCgnL2FwaS92Mi9sb2dpbicpKS5qc29uKCkgYXMgYW55KS5kYXRhW1widXNlcm5hbWVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghIHRoaXMuZ2FtZUlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gKGF3YWl0KGF3YWl0IGZldGNoKCcvYXBpL3YyL2pvaW4nKSkuanNvbigpIGFzIGFueSkuZGF0YVtcImdhbWVfaWRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEgPSAoYXdhaXQoYXdhaXQgZmV0Y2goYC9hcGkvdjIvZ2FtZXMvJHt0aGlzLmdhbWVJZH1gKSkuanNvbigpIGFzIGFueSkuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaGFzV29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVEYXRhLndpbm5lciA9PT0gdGhpcy51c2VyTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaGFzTG9zdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lRGF0YS53aW5uZXIgIT09IHRoaXMudXNlck5hbWUgJiYgdGhpcy5nYW1lRGF0YS53aW5uZXIgIT09ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBpc015VHVybigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lRGF0YS5uZXh0ID09PSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRCb2FyZFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVEYXRhLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtb3ZlKHBvczogVmVjdG9yMykge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL3YyL2dhbWVzLyR7dGhpcy5nYW1lSWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgeDogcG9zLngsXHJcbiAgICAgICAgICAgICAgICB5OiBwb3MueSxcclxuICAgICAgICAgICAgICAgIHo6IHBvcy56LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIHRocmVlIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IHsgQXJjYmFsbENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL0FyY2JhbGxDb250cm9scydcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lUmVuZGVyZXIge1xyXG4gICAgcHJpdmF0ZSBjYW1lcmEgIDogdGhyZWUuUGVyc3BlY3RpdmVDYW1lcmE7XHJcbiAgICBwcml2YXRlIGNvbnRyb2xzOiBBcmNiYWxsQ29udHJvbHM7XHJcbiAgICBcclxuICAgIHB1YmxpYyByZWFkb25seSByZW5kZXJlcjogdGhyZWUuV2ViR0xSZW5kZXJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBzY2VuZSAgIDogdGhyZWUuU2NlbmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgc2NlbmU6IHRocmVlLlNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyB0aHJlZS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzLCBhbnRpYWxpYXM6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweEUxRjVGRSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBbmltYXRpb25Mb29wKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgdGhyZWUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgICAgIDYwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAzMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFtYmllbnRfbGlnaHQgPSBuZXcgdGhyZWUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjkpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGFtYmllbnRfbGlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluX2xpZ2h0ID0gbmV3IHRocmVlLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDAuMyk7XHJcbiAgICAgICAgbWFpbl9saWdodC5wb3NpdGlvbi5zZXQoMSwgMiwgMyk7XHJcbiAgICAgICAgbWFpbl9saWdodC5sb29rQXQoMCwgMCwgMCk7XHJcbiAgICAgICAgbWFpbl9saWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICBtYWluX2xpZ2h0LnNoYWRvdy5iaWFzID0gMDtcclxuICAgICAgICBtYWluX2xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gMjA0ODtcclxuICAgICAgICBtYWluX2xpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IDIwNDg7XHJcbiAgICAgICAgbWFpbl9saWdodC5zaGFkb3cuY2FtZXJhLmxlZnQgPSAtMTA7XHJcbiAgICAgICAgbWFpbl9saWdodC5zaGFkb3cuY2FtZXJhLnJpZ2h0ID0gMTA7XHJcbiAgICAgICAgbWFpbl9saWdodC5zaGFkb3cuY2FtZXJhLnRvcCA9IC0xMDtcclxuICAgICAgICBtYWluX2xpZ2h0LnNoYWRvdy5jYW1lcmEuYm90dG9tID0gMTA7XHJcbiAgICAgICAgbWFpbl9saWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSAxO1xyXG4gICAgICAgIG1haW5fbGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSAxMDtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZChtYWluX2xpZ2h0KTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsbF9saWdodCA9IG5ldyB0aHJlZS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAwLjEpO1xyXG4gICAgICAgIGZpbGxfbGlnaHQucG9zaXRpb24uc2V0KC0xLCAtMiwgLTMpO1xyXG4gICAgICAgIGZpbGxfbGlnaHQubG9va0F0KDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGZpbGxfbGlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IEFyY2JhbGxDb250cm9scyhcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEsXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCxcclxuICAgICAgICAgICAgdGhpcy5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5jb250cm9scy5zZXRHaXptb3NWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVpvb20gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVBhbiAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdjaGFuZ2UnLCAoKSA9PiB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDYW1lcmEocG9zaXRpb246IHRocmVlLlZlY3RvcjMsIGxvb2tBdDogdGhyZWUuVmVjdG9yMykge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkocG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdChsb29rQXQpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJheUNhc3RlcihjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHJheWNhc3RlciA9IG5ldyB0aHJlZS5SYXljYXN0ZXIoKTtcclxuICAgICAgICByYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShuZXcgdGhyZWUuVmVjdG9yMihcclxuICAgICAgICAgICAgKyAoY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoICkgKiAyIC0gMSxcclxuICAgICAgICAgICAgLSAoY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAyICsgMSksIHRoaXMuY2FtZXJhKTtcclxuICAgICAgICByZXR1cm4gcmF5Y2FzdGVyO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIHRocmVlIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IHsgT0JKTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvT0JKTG9hZGVyJ1xyXG5cclxuaW1wb3J0IHsgR2FtZVJlbmRlcmVyIH0gZnJvbSAnLi9HYW1lUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBHYW1lQXBpICAgICAgfSBmcm9tICcuL0dhbWVBcGknO1xyXG5cclxuZW51bSBCb3hTdGF0ZSB7IEVtcHR5LCBQbGF5ZXIsIE9wcG9uZW50LCB9XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBHYW1lUmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIGFwaSAgICAgOiBHYW1lQXBpO1xyXG5cclxuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgc2NlbmUgOiB0aHJlZS5TY2VuZTtcclxuXHJcbiAgICBwcml2YXRlIGJvYXJkU2l6ZSAgOiB0aHJlZS5WZWN0b3IzVHVwbGU7XHJcbiAgICBwcml2YXRlIGJvYXJkU3RhdGUgOiBCb3hTdGF0ZVtdW11bXTtcclxuICAgIHByaXZhdGUgYm9hcmRPYmplY3Q6IHRocmVlLk9iamVjdDNEO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGJveE9iamVjdHMgIDogdGhyZWUuTWVzaFtdW11bXSAgICAgPSB1bmRlZmluZWQgYXMgYW55O1xyXG4gICAgcHJpdmF0ZSBib3hHZW9tZXRyeSA6IHRocmVlLkJ1ZmZlckdlb21ldHJ5ID0gdW5kZWZpbmVkIGFzIGFueTtcclxuICAgIHByaXZhdGUgYm94TWF0ZXJpYWxzOiB7IFtrZXkgaW4gQm94U3RhdGVdOiB0aHJlZS5NYXRlcmlhbCB8IG51bGwgfSA9IHtcclxuICAgICAgICBbQm94U3RhdGUuRW1wdHkgICAgIF06IG51bGwsXHJcbiAgICAgICAgW0JveFN0YXRlLlBsYXllciAgICBdOiBuZXcgdGhyZWUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHg4MUQ0RkEgfSksXHJcbiAgICAgICAgW0JveFN0YXRlLk9wcG9uZW50ICBdOiBuZXcgdGhyZWUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHhGMDYyOTIgfSksXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgaG92ZXJQb3NpdGlvbjogdGhyZWUuVmVjdG9yM1R1cGxlIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGhvdmVyT2JqZWN0ICA6IHRocmVlLk1lc2ggPSB1bmRlZmluZWQgYXMgYW55O1xyXG4gICAgcHJpdmF0ZSBob3Zlck1hdGVyaWFsOiB0aHJlZS5NYXRlcmlhbCA9IG5ldyB0aHJlZS5NZXNoQmFzaWNNYXRlcmlhbCh7XHJcbiAgICAgICAgY29sb3I6IDB4ODFENEZBLFxyXG4gICAgICAgIHdpcmVmcmFtZTogdHJ1ZSwgfSk7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25Qb3NpdGlvbjogdGhyZWUuVmVjdG9yMiB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgb25Xb24gOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHJpdmF0ZSBvbkxvc3Q6ICgpID0+IFByb21pc2U8dm9pZD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcclxuICAgICAgICBib2FyZFNpemU6IHRocmVlLlZlY3RvcjNUdXBsZSA9IFsxMSwgMTEsIDExXSxcclxuICAgICAgICBvbldvbiA6ICgpID0+IFByb21pc2U8dm9pZD4sXHJcbiAgICAgICAgb25Mb3N0OiAoKSA9PiBQcm9taXNlPHZvaWQ+LCkge1xyXG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEdhbWVBcGkoKTtcclxuICAgICAgICB0aGlzLm9uV29uICA9IG9uV29uO1xyXG4gICAgICAgIHRoaXMub25Mb3N0ID0gb25Mb3N0O1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLnNjZW5lICA9IG5ldyB0aHJlZS5TY2VuZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgR2FtZVJlbmRlcmVyKHRoaXMuY2FudmFzLCB0aGlzLnNjZW5lKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldENhbWVyYShcclxuICAgICAgICAgICAgbmV3IHRocmVlLlZlY3RvcjMoMCwgMCwgMTApLFxyXG4gICAgICAgICAgICBuZXcgdGhyZWUuVmVjdG9yMygwLCAwLCAgMCkpO1xyXG5cclxuICAgICAgICB0aGlzLmJvYXJkU2l6ZSAgPSBib2FyZFNpemU7XHJcbiAgICAgICAgdGhpcy5ib2FyZFN0YXRlID0gYXJyYXkzRCh0aGlzLmJvYXJkU2l6ZSwgKCkgPT4gQm94U3RhdGUuRW1wdHkpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRPYmplY3QgPSBuZXcgdGhyZWUuT2JqZWN0M0QoKTtcclxuICAgICAgICB0aGlzLmJvYXJkT2JqZWN0LnBvc2l0aW9uLnNldChcclxuICAgICAgICAgICAgLSAodGhpcy5ib2FyZFNpemVbMF0gLSAxKSAvIDIsXHJcbiAgICAgICAgICAgIC0gKHRoaXMuYm9hcmRTaXplWzFdIC0gMSkgLyAyLFxyXG4gICAgICAgICAgICAtICh0aGlzLmJvYXJkU2l6ZVsyXSAtIDEpIC8gMik7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5ib2FyZE9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBteVR1cm46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNGaXJzdE1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkTW9kZWxzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vtb3ZlID0gYXN5bmMgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCEgdGhpcy5teVR1cm4pIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duUG9zaXRpb24pIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNGaXJzdE1vdmUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhvdmVyUG9zaXRpb25Gb3JGaXJzdE1vdmUoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIb3ZlclBvc2l0aW9uKGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuICAgICAgICAgICAgdGhpcy5vbkhvdmVyU3RhdGVDaGFuZ2VkKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5vbm1vdXNlZG93biA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duUG9zaXRpb24gPSBuZXcgdGhyZWUuVmVjdG9yMihlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FudmFzLm9uY2xpY2sgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb3VzZURvd25Qb3NpdGlvbiA9IHRoaXMubW91c2VEb3duUG9zaXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duUG9zaXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5teVR1cm4gJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJQb3NpdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgbW91c2VEb3duUG9zaXRpb24gJiZcclxuICAgICAgICAgICAgICAgIG1vdXNlRG93blBvc2l0aW9uLmVxdWFscyhuZXcgdGhyZWUuVmVjdG9yMihlLmNsaWVudFgsIGUuY2xpZW50WSkpKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFwaS5tb3ZlKG5ldyB0aHJlZS5WZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJQb3NpdGlvblswXSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyUG9zaXRpb25bMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlclBvc2l0aW9uWzJdKSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndhaXRGb3JNeVR1cm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhaXRGb3JNeVR1cm4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHdhaXRGb3JNeVR1cm4oKSB7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcGkudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmFwaS5oYXNXb24gKCkpIHsgYXdhaXQgdGhpcy5vbldvbiAoKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmFwaS5oYXNMb3N0KCkpIHsgYXdhaXQgdGhpcy5vbkxvc3QoKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRTdGF0ZSA9IGF3YWl0IHRoaXMuYXBpLmdldEJvYXJkU3RhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gICAgID0gYXdhaXQgdGhpcy5hcGkuaXNNeVR1cm4oKTtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TW92ZSA9ICEgdGhpcy5ib2FyZFN0YXRlLnNvbWUoXHJcbiAgICAgICAgICAgICAgICBvID0+IG8uc29tZShvID0+IG8uc29tZShvID0+IG8gIT09IEJveFN0YXRlLkVtcHR5KSkpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQm9hcmRTdGF0ZUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubXlUdXJuKSBicmVhaztcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChcIllvdXIgdHVybiFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkTW9kZWxzKCkge1xyXG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcclxuICAgICAgICBjb25zdCBib3hMb2FkZWQgPSBhd2FpdCBsb2FkZXIubG9hZEFzeW5jKFwiL3N0YXRpYy9tb2RlbHMvYm94Lm9ialwiKTtcclxuICAgICAgICBsZXQgYm94R2VvbWV0cnk6IHRocmVlLkJ1ZmZlckdlb21ldHJ5ID0gdW5kZWZpbmVkIGFzIGFueTtcclxuICAgICAgICBib3hMb2FkZWQudHJhdmVyc2UoY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiB0aHJlZS5NZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBib3hHZW9tZXRyeSA9IGNoaWxkLmdlb21ldHJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94R2VvbWV0cnkgPSBib3hHZW9tZXRyeTtcclxuICAgICAgICB0aGlzLmJveEdlb21ldHJ5LnNjYWxlKDAuMzUsIDAuMzUsIDAuMzUpO1xyXG4gICAgICAgIHRoaXMuYm94T2JqZWN0cyA9IGFycmF5M0QodGhpcy5ib2FyZFNpemUsIChpLCBqLCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IG5ldyB0aHJlZS5NZXNoKHRoaXMuYm94R2VvbWV0cnksIHRoaXMuYm94TWF0ZXJpYWxzW0JveFN0YXRlLlBsYXllcl0hKTtcclxuICAgICAgICAgICAgYm94LnBvc2l0aW9uLnNldChpLCBqLCBrKTtcclxuICAgICAgICAgICAgYm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZE9iamVjdC5hZGQoYm94KTtcclxuICAgICAgICAgICAgcmV0dXJuIGJveDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3Zlck9iamVjdCA9IG5ldyB0aHJlZS5NZXNoKHRoaXMuYm94R2VvbWV0cnksIHRoaXMuaG92ZXJNYXRlcmlhbCk7XHJcbiAgICAgICAgdGhpcy5ob3Zlck9iamVjdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ib2FyZE9iamVjdC5hZGQodGhpcy5ob3Zlck9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkJvYXJkU3RhdGVDaGFuZ2VkKCkge1xyXG4gICAgICAgIGFycmF5M0QodGhpcy5ib2FyZFNpemUsIChpLCBqLCBrKSA9PiBbaSwgaiwga10pXHJcbiAgICAgICAgICAgIC5mbGF0KClcclxuICAgICAgICAgICAgLmZsYXQoKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoW2lfLCBqXywga19dKSA9PiAoKGk6IG51bWJlciwgajogbnVtYmVyLCBrOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuYm94T2JqZWN0c1tpXSFbal0hW2tdITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuYm9hcmRTdGF0ZVtpXSFbal0hW2tdIVxyXG4gICAgICAgICAgICAgICAgb2JqLm1hdGVyaWFsICAgICAgPSB0aGlzLmJveE1hdGVyaWFsc1t2YWxdID8/IG9iai5tYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgIG9iai52aXNpYmxlICAgICAgID0gdmFsICE9PSBCb3hTdGF0ZS5FbXB0eTtcclxuICAgICAgICAgICAgICAgIG9iai5jYXN0U2hhZG93ICAgID0gdmFsICE9PSBCb3hTdGF0ZS5FbXB0eTtcclxuICAgICAgICAgICAgICAgIG9iai5yZWNlaXZlU2hhZG93ID0gdmFsICE9PSBCb3hTdGF0ZS5FbXB0eTtcclxuICAgICAgICAgICAgfSkoaV8hLCBqXyEsIGtfISkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgb25Ib3ZlclN0YXRlQ2hhbmdlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ob3ZlclBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QucG9zaXRpb24uc2V0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlclBvc2l0aW9uWzBdLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlclBvc2l0aW9uWzFdLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlclBvc2l0aW9uWzJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUhvdmVyUG9zaXRpb24obW91c2VYOiBudW1iZXIsIG1vdXNlWTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ob3ZlclBvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICBjb25zdCBob3ZlckNhbmRpZGF0ZSA9IHRoaXMuZ2V0SG92ZXJDYW5kaWRhdGVzKCk7XHJcbiAgICAgICAgY29uc3QgcmF5Y2FzdGVyID0gdGhpcy5yZW5kZXJlci5nZXRSYXlDYXN0ZXIobW91c2VYLCBtb3VzZVkpO1xyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyhcclxuICAgICAgICAgICAgaG92ZXJDYW5kaWRhdGUubWFwKChbaSwgaiwga10pID0+IHRoaXMuYm94T2JqZWN0c1tpIV0hW2ohXSFbayFdISkpO1xyXG4gICAgICAgIGlmIChpbnRlcnNlY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqID0gaW50ZXJzZWN0aW9uc1swXSEub2JqZWN0O1xyXG4gICAgICAgICAgICBjb25zdCBbaSwgaiwga10gPSBob3ZlckNhbmRpZGF0ZS5maW5kKChbaSwgaiwga10pID0+IHRoaXMuYm94T2JqZWN0c1tpIV0hW2ohXSFbayFdISA9PT0gb2JqKSE7XHJcbiAgICAgICAgICAgIHRoaXMuaG92ZXJQb3NpdGlvbiA9IFtpISwgaiEsIGshXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUhvdmVyUG9zaXRpb25Gb3JGaXJzdE1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5ob3ZlclBvc2l0aW9uID0gW1xyXG4gICAgICAgICAgICAodGhpcy5ib2FyZFNpemVbMF0gLSAxKSAvIDIsXHJcbiAgICAgICAgICAgICh0aGlzLmJvYXJkU2l6ZVswXSAtIDEpIC8gMixcclxuICAgICAgICAgICAgKHRoaXMuYm9hcmRTaXplWzBdIC0gMSkgLyAyLFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEhvdmVyQ2FuZGlkYXRlcygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShcclxuICAgICAgICAgICAgYXJyYXkzRCh0aGlzLmJvYXJkU2l6ZSwgKGksIGosIGspID0+IFtpLCBqLCBrXSlcclxuICAgICAgICAgICAgICAgIC5mbGF0KClcclxuICAgICAgICAgICAgICAgIC5mbGF0KClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKFtpLCBqLCBrXSkgPT4gdGhpcy5pc0hvdmVyQ2FuZGlkYXRlKGkhLCBqISwgayEpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0hvdmVyQ2FuZGlkYXRlKGk6IG51bWJlciwgajogbnVtYmVyLCBrOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkU3RhdGVbaV0hW2pdIVtrXSEgPT09IEJveFN0YXRlLkVtcHR5ICYmXHJcbiAgICAgICAgICAgIGFycmF5M0QoWzMsIDMsIDNdLCAoaSwgaiwgaykgPT4gW2kgLSAxLCBqIC0gMSwgayAtIDFdKVxyXG4gICAgICAgICAgICAgICAgLmZsYXQoKVxyXG4gICAgICAgICAgICAgICAgLmZsYXQoKVxyXG4gICAgICAgICAgICAgICAgLnNvbWUoKFtkaV8sIGRqXywgZGtfXSkgPT4gKChkaSwgZGosIGRrKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGRpKSArIE1hdGguYWJzKGRqKSArIE1hdGguYWJzKGRrKSA8PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgaSArIGRpID4gMCAmJiBpICsgZGkgPCB0aGlzLmJvYXJkU2l6ZVswXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGogKyBkaiA+IDAgJiYgaiArIGRqIDwgdGhpcy5ib2FyZFNpemVbMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBrICsgZGsgPiAwICYmIGsgKyBkayA8IHRoaXMuYm9hcmRTaXplWzJdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFN0YXRlW2kgKyBkaV0hW2ogKyBkal0hW2sgKyBka10hICE9PSBCb3hTdGF0ZS5FbXB0eSkoXHJcbiAgICAgICAgICAgICAgICAgICAgZGlfISwgZGpfISwgZGtfISkpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXJyYXkzRDxUPihcclxuICAgIHNpemU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcclxuICAgIGdlbmVyYXRvcjogKGk6IG51bWJlciwgajogbnVtYmVyLCBrOiBudW1iZXIpID0+IFQpOiBUW11bXVtdIHtcclxuICAgIHJldHVybiByYW5nZSgwLCBzaXplWzBdKS5tYXAoXHJcbiAgICAgICAgaSA9PiByYW5nZSgwLCBzaXplWzFdKS5tYXAoXHJcbiAgICAgICAgICAgIGogPT4gcmFuZ2UoMCwgc2l6ZVsyXSkubWFwKFxyXG4gICAgICAgICAgICAgICAgayA9PiBnZW5lcmF0b3IoaSwgaiwgaykpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShlbmQgLSBzdGFydCkua2V5cygpKS5tYXAoaSA9PiBzdGFydCArIGkpO1xyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgICBbMTEsIDExLCAxMV0sXHJcbiAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9zdGF0aWMvdmljdG9yeS5odG1sXCI7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCBhcyBhbnkgYXMgbmV2ZXI7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvc3RhdGljL2RlZmVhdC5odG1sXCI7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCBhcyBhbnkgYXMgbmV2ZXI7XHJcbiAgICB9KTtcclxuZ2FtZS5zdGFydCgpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFRIUkVFOyIsImltcG9ydCB7XG5cdEdyaWRIZWxwZXIsXG5cdEVsbGlwc2VDdXJ2ZSxcblx0QnVmZmVyR2VvbWV0cnksXG5cdExpbmUsXG5cdExpbmVCYXNpY01hdGVyaWFsLFxuXHRSYXljYXN0ZXIsXG5cdEdyb3VwLFxuXHRCb3gzLFxuXHRTcGhlcmUsXG5cdFF1YXRlcm5pb24sXG5cdFZlY3RvcjIsXG5cdFZlY3RvcjMsXG5cdE1hdHJpeDQsXG5cdE1hdGhVdGlscyxcblx0RXZlbnREaXNwYXRjaGVyXG59IGZyb20gJ3RocmVlJztcblxuLy90cmFja2JhbGwgc3RhdGVcbmNvbnN0IFNUQVRFID0ge1xuXG5cdElETEU6IFN5bWJvbCgpLFxuXHRST1RBVEU6IFN5bWJvbCgpLFxuXHRQQU46IFN5bWJvbCgpLFxuXHRTQ0FMRTogU3ltYm9sKCksXG5cdEZPVjogU3ltYm9sKCksXG5cdEZPQ1VTOiBTeW1ib2woKSxcblx0WlJPVEFURTogU3ltYm9sKCksXG5cdFRPVUNIX01VTFRJOiBTeW1ib2woKSxcblx0QU5JTUFUSU9OX0ZPQ1VTOiBTeW1ib2woKSxcblx0QU5JTUFUSU9OX1JPVEFURTogU3ltYm9sKClcblxufTtcblxuY29uc3QgSU5QVVQgPSB7XG5cblx0Tk9ORTogU3ltYm9sKCksXG5cdE9ORV9GSU5HRVI6IFN5bWJvbCgpLFxuXHRPTkVfRklOR0VSX1NXSVRDSEVEOiBTeW1ib2woKSxcblx0VFdPX0ZJTkdFUjogU3ltYm9sKCksXG5cdE1VTFRfRklOR0VSOiBTeW1ib2woKSxcblx0Q1VSU09SOiBTeW1ib2woKVxuXG59O1xuXG4vL2N1cnNvciBjZW50ZXIgY29vcmRpbmF0ZXNcbmNvbnN0IF9jZW50ZXIgPSB7XG5cblx0eDogMCxcblx0eTogMFxuXG59O1xuXG4vL3RyYW5zZm9ybWF0aW9uIG1hdHJpY2VzIGZvciBnaXptb3MgYW5kIGNhbWVyYVxuY29uc3QgX3RyYW5zZm9ybWF0aW9uID0ge1xuXG5cdGNhbWVyYTogbmV3IE1hdHJpeDQoKSxcblx0Z2l6bW9zOiBuZXcgTWF0cml4NCgpXG5cbn07XG5cbi8vZXZlbnRzXG5jb25zdCBfY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5jb25zdCBfc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuY29uc3QgX2VuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5jb25zdCBfcmF5Y2FzdGVyID0gbmV3IFJheWNhc3RlcigpO1xuY29uc3QgX29mZnNldCA9IG5ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9naXptb01hdHJpeFN0YXRlVGVtcCA9IG5ldyBNYXRyaXg0KCk7XG5jb25zdCBfY2FtZXJhTWF0cml4U3RhdGVUZW1wID0gbmV3IE1hdHJpeDQoKTtcbmNvbnN0IF9zY2FsZVBvaW50VGVtcCA9IG5ldyBWZWN0b3IzKCk7XG4vKipcbiAqXG4gKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIFZpcnR1YWwgY2FtZXJhIHVzZWQgaW4gdGhlIHNjZW5lXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkb21FbGVtZW50IFJlbmRlcmVyJ3MgZG9tIGVsZW1lbnRcbiAqIEBwYXJhbSB7U2NlbmV9IHNjZW5lIFRoZSBzY2VuZSB0byBiZSByZW5kZXJlZFxuICovXG5jbGFzcyBBcmNiYWxsQ29udHJvbHMgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBjYW1lcmEsIGRvbUVsZW1lbnQsIHNjZW5lID0gbnVsbCApIHtcblxuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jYW1lcmEgPSBudWxsO1xuXHRcdHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xuXHRcdHRoaXMudGFyZ2V0ID0gbmV3IFZlY3RvcjMoKTtcblx0XHR0aGlzLl9jdXJyZW50VGFyZ2V0ID0gbmV3IFZlY3RvcjMoKTtcblx0XHR0aGlzLnJhZGl1c0ZhY3RvciA9IDAuNjc7XG5cblx0XHR0aGlzLm1vdXNlQWN0aW9ucyA9IFtdO1xuXHRcdHRoaXMuX21vdXNlT3AgPSBudWxsO1xuXG5cblx0XHQvL2dsb2JhbCB2ZWN0b3JzIGFuZCBtYXRyaWNlcyB0aGF0IGFyZSB1c2VkIGluIHNvbWUgb3BlcmF0aW9ucyB0byBhdm9pZCBjcmVhdGluZyBuZXcgb2JqZWN0cyBldmVyeSB0aW1lIChlLmcuIGV2ZXJ5IHRpbWUgY3Vyc29yIG1vdmVzKVxuXHRcdHRoaXMuX3YyXzEgPSBuZXcgVmVjdG9yMigpO1xuXHRcdHRoaXMuX3YzXzEgPSBuZXcgVmVjdG9yMygpO1xuXHRcdHRoaXMuX3YzXzIgPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0dGhpcy5fbTRfMSA9IG5ldyBNYXRyaXg0KCk7XG5cdFx0dGhpcy5fbTRfMiA9IG5ldyBNYXRyaXg0KCk7XG5cblx0XHR0aGlzLl9xdWF0ID0gbmV3IFF1YXRlcm5pb24oKTtcblxuXHRcdC8vdHJhbnNmb3JtYXRpb24gbWF0cmljZXNcblx0XHR0aGlzLl90cmFuc2xhdGlvbk1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7IC8vbWF0cml4IGZvciB0cmFuc2xhdGlvbiBvcGVyYXRpb25cblx0XHR0aGlzLl9yb3RhdGlvbk1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7IC8vbWF0cml4IGZvciByb3RhdGlvbiBvcGVyYXRpb25cblx0XHR0aGlzLl9zY2FsZU1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7IC8vbWF0cml4IGZvciBzY2FsaW5nIG9wZXJhdGlvblxuXG5cdFx0dGhpcy5fcm90YXRpb25BeGlzID0gbmV3IFZlY3RvcjMoKTsgLy9heGlzIGZvciByb3RhdGUgb3BlcmF0aW9uXG5cblxuXHRcdC8vY2FtZXJhIHN0YXRlXG5cdFx0dGhpcy5fY2FtZXJhTWF0cml4U3RhdGUgPSBuZXcgTWF0cml4NCgpO1xuXHRcdHRoaXMuX2NhbWVyYVByb2plY3Rpb25TdGF0ZSA9IG5ldyBNYXRyaXg0KCk7XG5cblx0XHR0aGlzLl9mb3ZTdGF0ZSA9IDE7XG5cdFx0dGhpcy5fdXBTdGF0ZSA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0dGhpcy5fem9vbVN0YXRlID0gMTtcblx0XHR0aGlzLl9uZWFyUG9zID0gMDtcblx0XHR0aGlzLl9mYXJQb3MgPSAwO1xuXG5cdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZSA9IG5ldyBNYXRyaXg0KCk7XG5cblx0XHQvL2luaXRpYWwgdmFsdWVzXG5cdFx0dGhpcy5fdXAwID0gbmV3IFZlY3RvcjMoKTtcblx0XHR0aGlzLl96b29tMCA9IDE7XG5cdFx0dGhpcy5fZm92MCA9IDA7XG5cdFx0dGhpcy5faW5pdGlhbE5lYXIgPSAwO1xuXHRcdHRoaXMuX25lYXJQb3MwID0gMDtcblx0XHR0aGlzLl9pbml0aWFsRmFyID0gMDtcblx0XHR0aGlzLl9mYXJQb3MwID0gMDtcblx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZTAgPSBuZXcgTWF0cml4NCgpO1xuXHRcdHRoaXMuX2dpem1vTWF0cml4U3RhdGUwID0gbmV3IE1hdHJpeDQoKTtcblxuXHRcdC8vcG9pbnRlcnMgYXJyYXlcblx0XHR0aGlzLl9idXR0b24gPSAtIDE7XG5cdFx0dGhpcy5fdG91Y2hTdGFydCA9IFtdO1xuXHRcdHRoaXMuX3RvdWNoQ3VycmVudCA9IFtdO1xuXHRcdHRoaXMuX2lucHV0ID0gSU5QVVQuTk9ORTtcblxuXHRcdC8vdHdvIGZpbmdlcnMgdG91Y2ggaW50ZXJhY3Rpb25cblx0XHR0aGlzLl9zd2l0Y2hTZW5zaWJpbGl0eSA9IDMyO1x0Ly9taW5pbXVtIG1vdmVtZW50IHRvIGJlIHBlcmZvcm1lZCB0byBmaXJlIHNpbmdsZSBwYW4gc3RhcnQgYWZ0ZXIgdGhlIHNlY29uZCBmaW5nZXIgaGFzIGJlZW4gcmVsZWFzZWRcblx0XHR0aGlzLl9zdGFydEZpbmdlckRpc3RhbmNlID0gMDsgLy9kaXN0YW5jZSBiZXR3ZWVuIHR3byBmaW5nZXJzXG5cdFx0dGhpcy5fY3VycmVudEZpbmdlckRpc3RhbmNlID0gMDtcblx0XHR0aGlzLl9zdGFydEZpbmdlclJvdGF0aW9uID0gMDsgLy9hbW91bnQgb2Ygcm90YXRpb24gcGVyZm9ybWVkIHdpdGggdHdvIGZpbmdlcnNcblx0XHR0aGlzLl9jdXJyZW50RmluZ2VyUm90YXRpb24gPSAwO1xuXG5cdFx0Ly9kb3VibGUgdGFwXG5cdFx0dGhpcy5fZGV2UHhSYXRpbyA9IDA7XG5cdFx0dGhpcy5fZG93blZhbGlkID0gdHJ1ZTtcblx0XHR0aGlzLl9uY2xpY2tzID0gMDtcblx0XHR0aGlzLl9kb3duRXZlbnRzID0gW107XG5cdFx0dGhpcy5fZG93blN0YXJ0ID0gMDtcdC8vcG9pbnRlckRvd24gdGltZVxuXHRcdHRoaXMuX2NsaWNrU3RhcnQgPSAwO1x0Ly9maXJzdCBjbGljayB0aW1lXG5cdFx0dGhpcy5fbWF4RG93blRpbWUgPSAyNTA7XG5cdFx0dGhpcy5fbWF4SW50ZXJ2YWwgPSAzMDA7XG5cdFx0dGhpcy5fcG9zVGhyZXNob2xkID0gMjQ7XG5cdFx0dGhpcy5fbW92ZW1lbnRUaHJlc2hvbGQgPSAyNDtcblxuXHRcdC8vY3Vyc29yIHBvc2l0aW9uc1xuXHRcdHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbiA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0dGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbiA9IG5ldyBWZWN0b3IzKCk7XG5cblx0XHQvL2dyaWRcblx0XHR0aGlzLl9ncmlkID0gbnVsbDsgLy9ncmlkIHRvIGJlIHZpc3VhbGl6ZWQgZHVyaW5nIHBhbiBvcGVyYXRpb25cblx0XHR0aGlzLl9ncmlkUG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0Ly9naXptb3Ncblx0XHR0aGlzLl9naXptb3MgPSBuZXcgR3JvdXAoKTtcblx0XHR0aGlzLl9jdXJ2ZVB0cyA9IDEyODtcblxuXG5cdFx0Ly9hbmltYXRpb25zXG5cdFx0dGhpcy5fdGltZVN0YXJ0ID0gLSAxOyAvL2luaXRpYWwgdGltZVxuXHRcdHRoaXMuX2FuaW1hdGlvbklkID0gLSAxO1xuXG5cdFx0Ly9mb2N1cyBhbmltYXRpb25cblx0XHR0aGlzLmZvY3VzQW5pbWF0aW9uVGltZSA9IDUwMDsgLy9kdXJhdGlvbiBvZiBmb2N1cyBhbmltYXRpb24gaW4gbXNcblxuXHRcdC8vcm90YXRlIGFuaW1hdGlvblxuXHRcdHRoaXMuX3RpbWVQcmV2ID0gMDsgLy90aW1lIGF0IHdoaWNoIHByZXZpb3VzIHJvdGF0ZSBvcGVyYXRpb24gaGFzIGJlZW4gZGV0ZWN0ZWRcblx0XHR0aGlzLl90aW1lQ3VycmVudCA9IDA7IC8vdGltZSBhdCB3aGljaCBjdXJyZW50IHJvdGF0ZSBvcGVyYXRpb24gaGFzIGJlZW4gZGV0ZWN0ZWRcblx0XHR0aGlzLl9hbmdsZVByZXYgPSAwOyAvL2FuZ2xlIG9mIHByZXZpb3VzIHJvdGF0aW9uXG5cdFx0dGhpcy5fYW5nbGVDdXJyZW50ID0gMDsgLy9hbmdsZSBvZiBjdXJyZW50IHJvdGF0aW9uXG5cdFx0dGhpcy5fY3Vyc29yUG9zUHJldiA9IG5ldyBWZWN0b3IzKCk7XHQvL2N1cnNvciBwb3NpdGlvbiB3aGVuIHByZXZpb3VzIHJvdGF0ZSBvcGVyYXRpb24gaGFzIGJlZW4gZGV0ZWN0ZWRcblx0XHR0aGlzLl9jdXJzb3JQb3NDdXJyID0gbmV3IFZlY3RvcjMoKTsvL2N1cnNvciBwb3NpdGlvbiB3aGVuIGN1cnJlbnQgcm90YXRlIG9wZXJhdGlvbiBoYXMgYmVlbiBkZXRlY3RlZFxuXHRcdHRoaXMuX3dQcmV2ID0gMDsgLy9hbmd1bGFyIHZlbG9jaXR5IG9mIHRoZSBwcmV2aW91cyByb3RhdGUgb3BlcmF0aW9uXG5cdFx0dGhpcy5fd0N1cnIgPSAwOyAvL2FuZ3VsYXIgdmVsb2NpdHkgb2YgdGhlIGN1cnJlbnQgcm90YXRlIG9wZXJhdGlvblxuXG5cblx0XHQvL3BhcmFtZXRlcnNcblx0XHR0aGlzLmFkanVzdE5lYXJGYXIgPSBmYWxzZTtcblx0XHR0aGlzLnNjYWxlRmFjdG9yID0gMS4xO1x0Ly96b29tL2Rpc3RhbmNlIG11bHRpcGxpZXJcblx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAyNTtcblx0XHR0aGlzLndNYXggPSAyMDtcdC8vbWF4aW11bSBhbmd1bGFyIHZlbG9jaXR5IGFsbG93ZWRcblx0XHR0aGlzLmVuYWJsZUFuaW1hdGlvbnMgPSB0cnVlOyAvL2lmIGFuaW1hdGlvbnMgc2hvdWxkIGJlIHBlcmZvcm1lZFxuXHRcdHRoaXMuZW5hYmxlR3JpZCA9IGZhbHNlOyAvL2lmIGdyaWQgc2hvdWxkIGJlIHNob3dlZCBkdXJpbmcgcGFuIG9wZXJhdGlvblxuXHRcdHRoaXMuY3Vyc29yWm9vbSA9IGZhbHNlO1x0Ly9pZiB3aGVlbCB6b29tIHNob3VsZCBiZSBjdXJzb3IgY2VudGVyZWRcblx0XHR0aGlzLm1pbkZvdiA9IDU7XG5cdFx0dGhpcy5tYXhGb3YgPSA5MDtcblxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHRcdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0XHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHRcdHRoaXMuZW5hYmxlR2l6bW9zID0gdHJ1ZTtcblxuXHRcdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHRcdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0XHR0aGlzLm1pblpvb20gPSAwO1xuXHRcdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdFx0Ly90cmFja2JhbGwgcGFyYW1ldGVyc1xuXHRcdHRoaXMuX3RiUmFkaXVzID0gMTtcblxuXHRcdC8vRlNBXG5cdFx0dGhpcy5fc3RhdGUgPSBTVEFURS5JRExFO1xuXG5cdFx0dGhpcy5zZXRDYW1lcmEoIGNhbWVyYSApO1xuXG5cdFx0aWYgKCB0aGlzLnNjZW5lICE9IG51bGwgKSB7XG5cblx0XHRcdHRoaXMuc2NlbmUuYWRkKCB0aGlzLl9naXptb3MgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMuZG9tRWxlbWVudC5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJztcblx0XHR0aGlzLl9kZXZQeFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cblx0XHR0aGlzLmluaXRpYWxpemVNb3VzZUFjdGlvbnMoKTtcblxuXHRcdHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCB0aGlzLm9uQ29udGV4dE1lbnUgKTtcblx0XHR0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgdGhpcy5vbldoZWVsICk7XG5cdFx0dGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVyZG93bicsIHRoaXMub25Qb2ludGVyRG93biApO1xuXHRcdHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmNhbmNlbCcsIHRoaXMub25Qb2ludGVyQ2FuY2VsICk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUgKTtcblxuXHR9XG5cblx0Ly9saXN0ZW5lcnNcblxuXHRvbldpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcblxuXHRcdGNvbnN0IHNjYWxlID0gKCB0aGlzLl9naXptb3Muc2NhbGUueCArIHRoaXMuX2dpem1vcy5zY2FsZS55ICsgdGhpcy5fZ2l6bW9zLnNjYWxlLnogKSAvIDM7XG5cdFx0dGhpcy5fdGJSYWRpdXMgPSB0aGlzLmNhbGN1bGF0ZVRiUmFkaXVzKCB0aGlzLmNhbWVyYSApO1xuXG5cdFx0Y29uc3QgbmV3UmFkaXVzID0gdGhpcy5fdGJSYWRpdXMgLyBzY2FsZTtcblx0XHRjb25zdCBjdXJ2ZSA9IG5ldyBFbGxpcHNlQ3VydmUoIDAsIDAsIG5ld1JhZGl1cywgbmV3UmFkaXVzICk7XG5cdFx0Y29uc3QgcG9pbnRzID0gY3VydmUuZ2V0UG9pbnRzKCB0aGlzLl9jdXJ2ZVB0cyApO1xuXHRcdGNvbnN0IGN1cnZlR2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKS5zZXRGcm9tUG9pbnRzKCBwb2ludHMgKTtcblxuXG5cdFx0Zm9yICggY29uc3QgZ2l6bW8gaW4gdGhpcy5fZ2l6bW9zLmNoaWxkcmVuICkge1xuXG5cdFx0XHR0aGlzLl9naXptb3MuY2hpbGRyZW5bIGdpem1vIF0uZ2VvbWV0cnkgPSBjdXJ2ZUdlb21ldHJ5O1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHR9O1xuXG5cdG9uQ29udGV4dE1lbnUgPSAoIGV2ZW50ICkgPT4ge1xuXG5cdFx0aWYgKCAhIHRoaXMuZW5hYmxlZCApIHtcblxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0fVxuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tb3VzZUFjdGlvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRpZiAoIHRoaXMubW91c2VBY3Rpb25zWyBpIF0ubW91c2UgPT0gMiApIHtcblxuXHRcdFx0XHQvL3ByZXZlbnQgb25seSBpZiBidXR0b24gMiBpcyBhY3R1YWxseSB1c2VkXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fTtcblxuXHRvblBvaW50ZXJDYW5jZWwgPSAoKSA9PiB7XG5cblx0XHR0aGlzLl90b3VjaFN0YXJ0LnNwbGljZSggMCwgdGhpcy5fdG91Y2hTdGFydC5sZW5ndGggKTtcblx0XHR0aGlzLl90b3VjaEN1cnJlbnQuc3BsaWNlKCAwLCB0aGlzLl90b3VjaEN1cnJlbnQubGVuZ3RoICk7XG5cdFx0dGhpcy5faW5wdXQgPSBJTlBVVC5OT05FO1xuXG5cdH07XG5cblx0b25Qb2ludGVyRG93biA9ICggZXZlbnQgKSA9PiB7XG5cblx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PSAwICYmIGV2ZW50LmlzUHJpbWFyeSApIHtcblxuXHRcdFx0dGhpcy5fZG93blZhbGlkID0gdHJ1ZTtcblx0XHRcdHRoaXMuX2Rvd25FdmVudHMucHVzaCggZXZlbnQgKTtcblx0XHRcdHRoaXMuX2Rvd25TdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy5fZG93blZhbGlkID0gZmFsc2U7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV2ZW50LnBvaW50ZXJUeXBlID09ICd0b3VjaCcgJiYgdGhpcy5faW5wdXQgIT0gSU5QVVQuQ1VSU09SICkge1xuXG5cdFx0XHR0aGlzLl90b3VjaFN0YXJ0LnB1c2goIGV2ZW50ICk7XG5cdFx0XHR0aGlzLl90b3VjaEN1cnJlbnQucHVzaCggZXZlbnQgKTtcblxuXHRcdFx0c3dpdGNoICggdGhpcy5faW5wdXQgKSB7XG5cblx0XHRcdFx0Y2FzZSBJTlBVVC5OT05FOlxuXG5cdFx0XHRcdFx0Ly9zaW5nbGVTdGFydFxuXHRcdFx0XHRcdHRoaXMuX2lucHV0ID0gSU5QVVQuT05FX0ZJTkdFUjtcblx0XHRcdFx0XHR0aGlzLm9uU2luZ2xlUGFuU3RhcnQoIGV2ZW50LCAnUk9UQVRFJyApO1xuXG5cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybW92ZScsIHRoaXMub25Qb2ludGVyTW92ZSApO1xuXHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgdGhpcy5vblBvaW50ZXJVcCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBJTlBVVC5PTkVfRklOR0VSOlxuXHRcdFx0XHRjYXNlIElOUFVULk9ORV9GSU5HRVJfU1dJVENIRUQ6XG5cblx0XHRcdFx0XHQvL2RvdWJsZVN0YXJ0XG5cdFx0XHRcdFx0dGhpcy5faW5wdXQgPSBJTlBVVC5UV09fRklOR0VSO1xuXG5cdFx0XHRcdFx0dGhpcy5vblJvdGF0ZVN0YXJ0KCk7XG5cdFx0XHRcdFx0dGhpcy5vblBpbmNoU3RhcnQoKTtcblx0XHRcdFx0XHR0aGlzLm9uRG91YmxlUGFuU3RhcnQoKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgSU5QVVQuVFdPX0ZJTkdFUjpcblxuXHRcdFx0XHRcdC8vbXVsdGlwbGVTdGFydFxuXHRcdFx0XHRcdHRoaXMuX2lucHV0ID0gSU5QVVQuTVVMVF9GSU5HRVI7XG5cdFx0XHRcdFx0dGhpcy5vblRyaXBsZVBhblN0YXJ0KCBldmVudCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5wb2ludGVyVHlwZSAhPSAndG91Y2gnICYmIHRoaXMuX2lucHV0ID09IElOUFVULk5PTkUgKSB7XG5cblx0XHRcdGxldCBtb2RpZmllciA9IG51bGw7XG5cblx0XHRcdGlmICggZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5ICkge1xuXG5cdFx0XHRcdG1vZGlmaWVyID0gJ0NUUkwnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5zaGlmdEtleSApIHtcblxuXHRcdFx0XHRtb2RpZmllciA9ICdTSElGVCc7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fbW91c2VPcCA9IHRoaXMuZ2V0T3BGcm9tQWN0aW9uKCBldmVudC5idXR0b24sIG1vZGlmaWVyICk7XG5cdFx0XHRpZiAoIHRoaXMuX21vdXNlT3AgIT0gbnVsbCApIHtcblxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgdGhpcy5vblBvaW50ZXJNb3ZlICk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgdGhpcy5vblBvaW50ZXJVcCApO1xuXG5cdFx0XHRcdC8vc2luZ2xlU3RhcnRcblx0XHRcdFx0dGhpcy5faW5wdXQgPSBJTlBVVC5DVVJTT1I7XG5cdFx0XHRcdHRoaXMuX2J1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcblx0XHRcdFx0dGhpcy5vblNpbmdsZVBhblN0YXJ0KCBldmVudCwgdGhpcy5fbW91c2VPcCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fTtcblxuXHRvblBvaW50ZXJNb3ZlID0gKCBldmVudCApID0+IHtcblxuXHRcdGlmICggZXZlbnQucG9pbnRlclR5cGUgPT0gJ3RvdWNoJyAmJiB0aGlzLl9pbnB1dCAhPSBJTlBVVC5DVVJTT1IgKSB7XG5cblx0XHRcdHN3aXRjaCAoIHRoaXMuX2lucHV0ICkge1xuXG5cdFx0XHRcdGNhc2UgSU5QVVQuT05FX0ZJTkdFUjpcblxuXHRcdFx0XHRcdC8vc2luZ2xlTW92ZVxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVG91Y2hFdmVudCggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHRoaXMub25TaW5nbGVQYW5Nb3ZlKCBldmVudCwgU1RBVEUuUk9UQVRFICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBJTlBVVC5PTkVfRklOR0VSX1NXSVRDSEVEOlxuXG5cdFx0XHRcdFx0Y29uc3QgbW92ZW1lbnQgPSB0aGlzLmNhbGN1bGF0ZVBvaW50ZXJzRGlzdGFuY2UoIHRoaXMuX3RvdWNoQ3VycmVudFsgMCBdLCBldmVudCApICogdGhpcy5fZGV2UHhSYXRpbztcblxuXHRcdFx0XHRcdGlmICggbW92ZW1lbnQgPj0gdGhpcy5fc3dpdGNoU2Vuc2liaWxpdHkgKSB7XG5cblx0XHRcdFx0XHRcdC8vc2luZ2xlTW92ZVxuXHRcdFx0XHRcdFx0dGhpcy5faW5wdXQgPSBJTlBVVC5PTkVfRklOR0VSO1xuXHRcdFx0XHRcdFx0dGhpcy51cGRhdGVUb3VjaEV2ZW50KCBldmVudCApO1xuXG5cdFx0XHRcdFx0XHR0aGlzLm9uU2luZ2xlUGFuU3RhcnQoIGV2ZW50LCAnUk9UQVRFJyApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIElOUFVULlRXT19GSU5HRVI6XG5cblx0XHRcdFx0XHQvL3JvdGF0ZS9wYW4vcGluY2hNb3ZlXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVUb3VjaEV2ZW50KCBldmVudCApO1xuXG5cdFx0XHRcdFx0dGhpcy5vblJvdGF0ZU1vdmUoKTtcblx0XHRcdFx0XHR0aGlzLm9uUGluY2hNb3ZlKCk7XG5cdFx0XHRcdFx0dGhpcy5vbkRvdWJsZVBhbk1vdmUoKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgSU5QVVQuTVVMVF9GSU5HRVI6XG5cblx0XHRcdFx0XHQvL211bHRNb3ZlXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVUb3VjaEV2ZW50KCBldmVudCApO1xuXG5cdFx0XHRcdFx0dGhpcy5vblRyaXBsZVBhbk1vdmUoIGV2ZW50ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LnBvaW50ZXJUeXBlICE9ICd0b3VjaCcgJiYgdGhpcy5faW5wdXQgPT0gSU5QVVQuQ1VSU09SICkge1xuXG5cdFx0XHRsZXQgbW9kaWZpZXIgPSBudWxsO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSApIHtcblxuXHRcdFx0XHRtb2RpZmllciA9ICdDVFJMJztcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuc2hpZnRLZXkgKSB7XG5cblx0XHRcdFx0bW9kaWZpZXIgPSAnU0hJRlQnO1xuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG1vdXNlT3BTdGF0ZSA9IHRoaXMuZ2V0T3BTdGF0ZUZyb21BY3Rpb24oIHRoaXMuX2J1dHRvbiwgbW9kaWZpZXIgKTtcblxuXHRcdFx0aWYgKCBtb3VzZU9wU3RhdGUgIT0gbnVsbCApIHtcblxuXHRcdFx0XHR0aGlzLm9uU2luZ2xlUGFuTW92ZSggZXZlbnQsIG1vdXNlT3BTdGF0ZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvL2NoZWNrRGlzdGFuY2Vcblx0XHRpZiAoIHRoaXMuX2Rvd25WYWxpZCApIHtcblxuXHRcdFx0Y29uc3QgbW92ZW1lbnQgPSB0aGlzLmNhbGN1bGF0ZVBvaW50ZXJzRGlzdGFuY2UoIHRoaXMuX2Rvd25FdmVudHNbIHRoaXMuX2Rvd25FdmVudHMubGVuZ3RoIC0gMSBdLCBldmVudCApICogdGhpcy5fZGV2UHhSYXRpbztcblx0XHRcdGlmICggbW92ZW1lbnQgPiB0aGlzLl9tb3ZlbWVudFRocmVzaG9sZCApIHtcblxuXHRcdFx0XHR0aGlzLl9kb3duVmFsaWQgPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH07XG5cblx0b25Qb2ludGVyVXAgPSAoIGV2ZW50ICkgPT4ge1xuXG5cdFx0aWYgKCBldmVudC5wb2ludGVyVHlwZSA9PSAndG91Y2gnICYmIHRoaXMuX2lucHV0ICE9IElOUFVULkNVUlNPUiApIHtcblxuXHRcdFx0Y29uc3QgblRvdWNoID0gdGhpcy5fdG91Y2hDdXJyZW50Lmxlbmd0aDtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgblRvdWNoOyBpICsrICkge1xuXG5cdFx0XHRcdGlmICggdGhpcy5fdG91Y2hDdXJyZW50WyBpIF0ucG9pbnRlcklkID09IGV2ZW50LnBvaW50ZXJJZCApIHtcblxuXHRcdFx0XHRcdHRoaXMuX3RvdWNoQ3VycmVudC5zcGxpY2UoIGksIDEgKTtcblx0XHRcdFx0XHR0aGlzLl90b3VjaFN0YXJ0LnNwbGljZSggaSwgMSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKCB0aGlzLl9pbnB1dCApIHtcblxuXHRcdFx0XHRjYXNlIElOUFVULk9ORV9GSU5HRVI6XG5cdFx0XHRcdGNhc2UgSU5QVVQuT05FX0ZJTkdFUl9TV0lUQ0hFRDpcblxuXHRcdFx0XHRcdC8vc2luZ2xlRW5kXG5cdFx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybW92ZScsIHRoaXMub25Qb2ludGVyTW92ZSApO1xuXHRcdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgdGhpcy5vblBvaW50ZXJVcCApO1xuXG5cdFx0XHRcdFx0dGhpcy5faW5wdXQgPSBJTlBVVC5OT05FO1xuXHRcdFx0XHRcdHRoaXMub25TaW5nbGVQYW5FbmQoKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgSU5QVVQuVFdPX0ZJTkdFUjpcblxuXHRcdFx0XHRcdC8vZG91YmxlRW5kXG5cdFx0XHRcdFx0dGhpcy5vbkRvdWJsZVBhbkVuZCggZXZlbnQgKTtcblx0XHRcdFx0XHR0aGlzLm9uUGluY2hFbmQoIGV2ZW50ICk7XG5cdFx0XHRcdFx0dGhpcy5vblJvdGF0ZUVuZCggZXZlbnQgKTtcblxuXHRcdFx0XHRcdC8vc3dpdGNoaW5nIHRvIHNpbmdsZVN0YXJ0XG5cdFx0XHRcdFx0dGhpcy5faW5wdXQgPSBJTlBVVC5PTkVfRklOR0VSX1NXSVRDSEVEO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBJTlBVVC5NVUxUX0ZJTkdFUjpcblxuXHRcdFx0XHRcdGlmICggdGhpcy5fdG91Y2hDdXJyZW50Lmxlbmd0aCA9PSAwICkge1xuXG5cdFx0XHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgdGhpcy5vblBvaW50ZXJNb3ZlICk7XG5cdFx0XHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIHRoaXMub25Qb2ludGVyVXAgKTtcblxuXHRcdFx0XHRcdFx0Ly9tdWx0Q2FuY2VsXG5cdFx0XHRcdFx0XHR0aGlzLl9pbnB1dCA9IElOUFVULk5PTkU7XG5cdFx0XHRcdFx0XHR0aGlzLm9uVHJpcGxlUGFuRW5kKCk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQucG9pbnRlclR5cGUgIT0gJ3RvdWNoJyAmJiB0aGlzLl9pbnB1dCA9PSBJTlBVVC5DVVJTT1IgKSB7XG5cblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCB0aGlzLm9uUG9pbnRlck1vdmUgKTtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgdGhpcy5vblBvaW50ZXJVcCApO1xuXG5cdFx0XHR0aGlzLl9pbnB1dCA9IElOUFVULk5PTkU7XG5cdFx0XHR0aGlzLm9uU2luZ2xlUGFuRW5kKCk7XG5cdFx0XHR0aGlzLl9idXR0b24gPSAtIDE7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV2ZW50LmlzUHJpbWFyeSApIHtcblxuXHRcdFx0aWYgKCB0aGlzLl9kb3duVmFsaWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgZG93blRpbWUgPSBldmVudC50aW1lU3RhbXAgLSB0aGlzLl9kb3duRXZlbnRzWyB0aGlzLl9kb3duRXZlbnRzLmxlbmd0aCAtIDEgXS50aW1lU3RhbXA7XG5cblx0XHRcdFx0aWYgKCBkb3duVGltZSA8PSB0aGlzLl9tYXhEb3duVGltZSApIHtcblxuXHRcdFx0XHRcdGlmICggdGhpcy5fbmNsaWNrcyA9PSAwICkge1xuXG5cdFx0XHRcdFx0XHQvL2ZpcnN0IHZhbGlkIGNsaWNrIGRldGVjdGVkXG5cdFx0XHRcdFx0XHR0aGlzLl9uY2xpY2tzID0gMTtcblx0XHRcdFx0XHRcdHRoaXMuX2NsaWNrU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGNsaWNrSW50ZXJ2YWwgPSBldmVudC50aW1lU3RhbXAgLSB0aGlzLl9jbGlja1N0YXJ0O1xuXHRcdFx0XHRcdFx0Y29uc3QgbW92ZW1lbnQgPSB0aGlzLmNhbGN1bGF0ZVBvaW50ZXJzRGlzdGFuY2UoIHRoaXMuX2Rvd25FdmVudHNbIDEgXSwgdGhpcy5fZG93bkV2ZW50c1sgMCBdICkgKiB0aGlzLl9kZXZQeFJhdGlvO1xuXG5cdFx0XHRcdFx0XHRpZiAoIGNsaWNrSW50ZXJ2YWwgPD0gdGhpcy5fbWF4SW50ZXJ2YWwgJiYgbW92ZW1lbnQgPD0gdGhpcy5fcG9zVGhyZXNob2xkICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vc2Vjb25kIHZhbGlkIGNsaWNrIGRldGVjdGVkXG5cdFx0XHRcdFx0XHRcdC8vZmlyZSBkb3VibGUgdGFwIGFuZCByZXNldCB2YWx1ZXNcblx0XHRcdFx0XHRcdFx0dGhpcy5fbmNsaWNrcyA9IDA7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2Rvd25FdmVudHMuc3BsaWNlKCAwLCB0aGlzLl9kb3duRXZlbnRzLmxlbmd0aCApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm9uRG91YmxlVGFwKCBldmVudCApO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vbmV3ICdmaXJzdCBjbGljaydcblx0XHRcdFx0XHRcdFx0dGhpcy5fbmNsaWNrcyA9IDE7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2Rvd25FdmVudHMuc2hpZnQoKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fY2xpY2tTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHRoaXMuX2Rvd25WYWxpZCA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuX25jbGlja3MgPSAwO1xuXHRcdFx0XHRcdHRoaXMuX2Rvd25FdmVudHMuc3BsaWNlKCAwLCB0aGlzLl9kb3duRXZlbnRzLmxlbmd0aCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHR0aGlzLl9uY2xpY2tzID0gMDtcblx0XHRcdFx0dGhpcy5fZG93bkV2ZW50cy5zcGxpY2UoIDAsIHRoaXMuX2Rvd25FdmVudHMubGVuZ3RoICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9O1xuXG5cdG9uV2hlZWwgPSAoIGV2ZW50ICkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgJiYgdGhpcy5lbmFibGVab29tICkge1xuXG5cdFx0XHRsZXQgbW9kaWZpZXIgPSBudWxsO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSApIHtcblxuXHRcdFx0XHRtb2RpZmllciA9ICdDVFJMJztcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuc2hpZnRLZXkgKSB7XG5cblx0XHRcdFx0bW9kaWZpZXIgPSAnU0hJRlQnO1xuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG1vdXNlT3AgPSB0aGlzLmdldE9wRnJvbUFjdGlvbiggJ1dIRUVMJywgbW9kaWZpZXIgKTtcblxuXHRcdFx0aWYgKCBtb3VzZU9wICE9IG51bGwgKSB7XG5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfc3RhcnRFdmVudCApO1xuXG5cdFx0XHRcdGNvbnN0IG5vdGNoRGVsdGFZID0gMTI1OyAvL2Rpc3RhbmNlIG9mIG9uZSBub3RjaCBvZiBtb3VzZSB3aGVlbFxuXHRcdFx0XHRsZXQgc2duID0gZXZlbnQuZGVsdGFZIC8gbm90Y2hEZWx0YVk7XG5cblx0XHRcdFx0bGV0IHNpemUgPSAxO1xuXG5cdFx0XHRcdGlmICggc2duID4gMCApIHtcblxuXHRcdFx0XHRcdHNpemUgPSAxIC8gdGhpcy5zY2FsZUZhY3RvcjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBzZ24gPCAwICkge1xuXG5cdFx0XHRcdFx0c2l6ZSA9IHRoaXMuc2NhbGVGYWN0b3I7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN3aXRjaCAoIG1vdXNlT3AgKSB7XG5cblx0XHRcdFx0XHRjYXNlICdaT09NJzpcblxuXHRcdFx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5TQ0FMRSwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNnbiA+IDAgKSB7XG5cblx0XHRcdFx0XHRcdFx0c2l6ZSA9IDEgLyAoIE1hdGgucG93KCB0aGlzLnNjYWxlRmFjdG9yLCBzZ24gKSApO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBzZ24gPCAwICkge1xuXG5cdFx0XHRcdFx0XHRcdHNpemUgPSBNYXRoLnBvdyggdGhpcy5zY2FsZUZhY3RvciwgLSBzZ24gKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIHRoaXMuY3Vyc29yWm9vbSAmJiB0aGlzLmVuYWJsZVBhbiApIHtcblxuXHRcdFx0XHRcdFx0XHRsZXQgc2NhbGVQb2ludDtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2NhbGVQb2ludCA9IHRoaXMudW5wcm9qZWN0T25UYlBsYW5lKCB0aGlzLmNhbWVyYSwgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSwgdGhpcy5kb21FbGVtZW50ICkuYXBwbHlRdWF0ZXJuaW9uKCB0aGlzLmNhbWVyYS5xdWF0ZXJuaW9uICkubXVsdGlwbHlTY2FsYXIoIDEgLyB0aGlzLmNhbWVyYS56b29tICkuYWRkKCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCB0aGlzLmNhbWVyYS5pc1BlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2NhbGVQb2ludCA9IHRoaXMudW5wcm9qZWN0T25UYlBsYW5lKCB0aGlzLmNhbWVyYSwgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSwgdGhpcy5kb21FbGVtZW50ICkuYXBwbHlRdWF0ZXJuaW9uKCB0aGlzLmNhbWVyYS5xdWF0ZXJuaW9uICkuYWRkKCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5zY2FsZSggc2l6ZSwgc2NhbGVQb2ludCApICk7XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5zY2FsZSggc2l6ZSwgdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICkgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIHRoaXMuX2dyaWQgIT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpc3Bvc2VHcmlkKCk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZHJhd0dyaWQoKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLklETEUsIGZhbHNlICk7XG5cblx0XHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9lbmRFdmVudCApO1xuXG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ0ZPVic6XG5cblx0XHRcdFx0XHRcdGlmICggdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLkZPViwgdHJ1ZSApO1xuXG5cblx0XHRcdFx0XHRcdFx0Ly9WZXJ0aWdvIGVmZmVjdFxuXG5cdFx0XHRcdFx0XHRcdC8vXHQgIGZvdiAvIDJcblx0XHRcdFx0XHRcdFx0Ly9cdFx0fFxcXG5cdFx0XHRcdFx0XHRcdC8vXHRcdHwgXFxcblx0XHRcdFx0XHRcdFx0Ly9cdFx0fCAgXFxcblx0XHRcdFx0XHRcdFx0Ly9cdHhcdHxcdFxcXG5cdFx0XHRcdFx0XHRcdC8vXHRcdHwgXHQgXFxcblx0XHRcdFx0XHRcdFx0Ly9cdFx0fCBcdCAgXFxcblx0XHRcdFx0XHRcdFx0Ly9cdFx0fCBfIF8gX1xcXG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0eVxuXG5cdFx0XHRcdFx0XHRcdC8vY2hlY2sgZm9yIGlPcyBzaGlmdCBzaG9ydGN1dFxuXHRcdFx0XHRcdFx0XHRpZiAoIGV2ZW50LmRlbHRhWCAhPSAwICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2duID0gZXZlbnQuZGVsdGFYIC8gbm90Y2hEZWx0YVk7XG5cblx0XHRcdFx0XHRcdFx0XHRzaXplID0gMTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmICggc2duID4gMCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZSA9IDEgLyAoIE1hdGgucG93KCB0aGlzLnNjYWxlRmFjdG9yLCBzZ24gKSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggc2duIDwgMCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZSA9IE1hdGgucG93KCB0aGlzLnNjYWxlRmFjdG9yLCAtIHNnbiApO1xuXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLl92M18xLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fY2FtZXJhTWF0cml4U3RhdGUgKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgeCA9IHRoaXMuX3YzXzEuZGlzdGFuY2VUbyggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICk7XG5cdFx0XHRcdFx0XHRcdGxldCB4TmV3ID0geCAvIHNpemU7XHQvL2Rpc3RhbmNlIGJldHdlZW4gY2FtZXJhIGFuZCBnaXptb3MgaWYgc2NhbGUoc2l6ZSwgc2NhbGVwb2ludCkgd291bGQgYmUgcGVyZm9ybWVkXG5cblx0XHRcdFx0XHRcdFx0Ly9jaGVjayBtaW4gYW5kIG1heCBkaXN0YW5jZVxuXHRcdFx0XHRcdFx0XHR4TmV3ID0gTWF0aFV0aWxzLmNsYW1wKCB4TmV3LCB0aGlzLm1pbkRpc3RhbmNlLCB0aGlzLm1heERpc3RhbmNlICk7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgeSA9IHggKiBNYXRoLnRhbiggTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLmNhbWVyYS5mb3YgKiAwLjUgKTtcblxuXHRcdFx0XHRcdFx0XHQvL2NhbGN1bGF0ZSBuZXcgZm92XG5cdFx0XHRcdFx0XHRcdGxldCBuZXdGb3YgPSBNYXRoVXRpbHMuUkFEMkRFRyAqICggTWF0aC5hdGFuKCB5IC8geE5ldyApICogMiApO1xuXG5cdFx0XHRcdFx0XHRcdC8vY2hlY2sgbWluIGFuZCBtYXggZm92XG5cdFx0XHRcdFx0XHRcdGlmICggbmV3Rm92ID4gdGhpcy5tYXhGb3YgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRuZXdGb3YgPSB0aGlzLm1heEZvdjtcblxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBuZXdGb3YgPCB0aGlzLm1pbkZvdiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdG5ld0ZvdiA9IHRoaXMubWluRm92O1xuXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBuZXdEaXN0YW5jZSA9IHkgLyBNYXRoLnRhbiggTWF0aFV0aWxzLkRFRzJSQUQgKiAoIG5ld0ZvdiAvIDIgKSApO1xuXHRcdFx0XHRcdFx0XHRzaXplID0geCAvIG5ld0Rpc3RhbmNlO1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0Rm92KCBuZXdGb3YgKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5zY2FsZSggc2l6ZSwgdGhpcy5fZ2l6bW9zLnBvc2l0aW9uLCBmYWxzZSApICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCB0aGlzLl9ncmlkICE9IG51bGwgKSB7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5kaXNwb3NlR3JpZCgpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRyYXdHcmlkKCk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXG5cdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfZW5kRXZlbnQgKTtcblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fTtcblxuXHRvblNpbmdsZVBhblN0YXJ0ID0gKCBldmVudCwgb3BlcmF0aW9uICkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgKSB7XG5cblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0dGhpcy5zZXRDZW50ZXIoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0c3dpdGNoICggb3BlcmF0aW9uICkge1xuXG5cdFx0XHRcdGNhc2UgJ1BBTic6XG5cblx0XHRcdFx0XHRpZiAoICEgdGhpcy5lbmFibGVQYW4gKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggdGhpcy5fYW5pbWF0aW9uSWQgIT0gLSAxICkge1xuXG5cdFx0XHRcdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5fYW5pbWF0aW9uSWQgKTtcblx0XHRcdFx0XHRcdHRoaXMuX2FuaW1hdGlvbklkID0gLSAxO1xuXHRcdFx0XHRcdFx0dGhpcy5fdGltZVN0YXJ0ID0gLSAxO1xuXG5cdFx0XHRcdFx0XHR0aGlzLmFjdGl2YXRlR2l6bW9zKCBmYWxzZSApO1xuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuUEFOLCB0cnVlICk7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbi5jb3B5KCB0aGlzLnVucHJvamVjdE9uVGJQbGFuZSggdGhpcy5jYW1lcmEsIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQgKSApO1xuXHRcdFx0XHRcdGlmICggdGhpcy5lbmFibGVHcmlkICkge1xuXG5cdFx0XHRcdFx0XHR0aGlzLmRyYXdHcmlkKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnUk9UQVRFJzpcblxuXHRcdFx0XHRcdGlmICggISB0aGlzLmVuYWJsZVJvdGF0ZSApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9hbmltYXRpb25JZCAhPSAtIDEgKSB7XG5cblx0XHRcdFx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLl9hbmltYXRpb25JZCApO1xuXHRcdFx0XHRcdFx0dGhpcy5fYW5pbWF0aW9uSWQgPSAtIDE7XG5cdFx0XHRcdFx0XHR0aGlzLl90aW1lU3RhcnQgPSAtIDE7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLlJPVEFURSwgdHJ1ZSApO1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy51bnByb2plY3RPblRiU3VyZmFjZSggdGhpcy5jYW1lcmEsIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQsIHRoaXMuX3RiUmFkaXVzICkgKTtcblx0XHRcdFx0XHR0aGlzLmFjdGl2YXRlR2l6bW9zKCB0cnVlICk7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLmVuYWJsZUFuaW1hdGlvbnMgKSB7XG5cblx0XHRcdFx0XHRcdHRoaXMuX3RpbWVQcmV2ID0gdGhpcy5fdGltZUN1cnJlbnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0XHRcdFx0XHRcdHRoaXMuX2FuZ2xlQ3VycmVudCA9IHRoaXMuX2FuZ2xlUHJldiA9IDA7XG5cdFx0XHRcdFx0XHR0aGlzLl9jdXJzb3JQb3NQcmV2LmNvcHkoIHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24gKTtcblx0XHRcdFx0XHRcdHRoaXMuX2N1cnNvclBvc0N1cnIuY29weSggdGhpcy5fY3Vyc29yUG9zUHJldiApO1xuXHRcdFx0XHRcdFx0dGhpcy5fd0N1cnIgPSAwO1xuXHRcdFx0XHRcdFx0dGhpcy5fd1ByZXYgPSB0aGlzLl93Q3VycjtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnRk9WJzpcblxuXHRcdFx0XHRcdGlmICggISB0aGlzLmNhbWVyYS5pc1BlcnNwZWN0aXZlQ2FtZXJhIHx8ICEgdGhpcy5lbmFibGVab29tICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIHRoaXMuX2FuaW1hdGlvbklkICE9IC0gMSApIHtcblxuXHRcdFx0XHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMuX2FuaW1hdGlvbklkICk7XG5cdFx0XHRcdFx0XHR0aGlzLl9hbmltYXRpb25JZCA9IC0gMTtcblx0XHRcdFx0XHRcdHRoaXMuX3RpbWVTdGFydCA9IC0gMTtcblxuXHRcdFx0XHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblx0XHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLkZPViwgdHJ1ZSApO1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uc2V0WSggdGhpcy5nZXRDdXJzb3JOREMoIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQgKS55ICogMC41ICk7XG5cdFx0XHRcdFx0dGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLmNvcHkoIHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdaT09NJzpcblxuXHRcdFx0XHRcdGlmICggISB0aGlzLmVuYWJsZVpvb20gKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggdGhpcy5fYW5pbWF0aW9uSWQgIT0gLSAxICkge1xuXG5cdFx0XHRcdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5fYW5pbWF0aW9uSWQgKTtcblx0XHRcdFx0XHRcdHRoaXMuX2FuaW1hdGlvbklkID0gLSAxO1xuXHRcdFx0XHRcdFx0dGhpcy5fdGltZVN0YXJ0ID0gLSAxO1xuXG5cdFx0XHRcdFx0XHR0aGlzLmFjdGl2YXRlR2l6bW9zKCBmYWxzZSApO1xuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuU0NBTEUsIHRydWUgKTtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLnNldFkoIHRoaXMuZ2V0Q3Vyc29yTkRDKCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50ICkueSAqIDAuNSApO1xuXHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi5jb3B5KCB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9O1xuXG5cdG9uU2luZ2xlUGFuTW92ZSA9ICggZXZlbnQsIG9wU3RhdGUgKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuZW5hYmxlZCApIHtcblxuXHRcdFx0Y29uc3QgcmVzdGFydCA9IG9wU3RhdGUgIT0gdGhpcy5fc3RhdGU7XG5cdFx0XHR0aGlzLnNldENlbnRlciggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHRzd2l0Y2ggKCBvcFN0YXRlICkge1xuXG5cdFx0XHRcdGNhc2UgU1RBVEUuUEFOOlxuXG5cdFx0XHRcdFx0aWYgKCB0aGlzLmVuYWJsZVBhbiApIHtcblxuXHRcdFx0XHRcdFx0aWYgKCByZXN0YXJ0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vc3dpdGNoIHRvIHBhbiBvcGVyYXRpb25cblxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9lbmRFdmVudCApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBvcFN0YXRlLCB0cnVlICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy51bnByb2plY3RPblRiUGxhbmUoIHRoaXMuY2FtZXJhLCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50ICkgKTtcblx0XHRcdFx0XHRcdFx0aWYgKCB0aGlzLmVuYWJsZUdyaWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRyYXdHcmlkKCk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly9jb250aW51ZSB3aXRoIHBhbiBvcGVyYXRpb25cblx0XHRcdFx0XHRcdFx0dGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLmNvcHkoIHRoaXMudW5wcm9qZWN0T25UYlBsYW5lKCB0aGlzLmNhbWVyYSwgX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCApICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuYXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRoaXMucGFuKCB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLCB0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24gKSApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFNUQVRFLlJPVEFURTpcblxuXHRcdFx0XHRcdGlmICggdGhpcy5lbmFibGVSb3RhdGUgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggcmVzdGFydCApIHtcblxuXHRcdFx0XHRcdFx0XHQvL3N3aXRjaCB0byByb3RhdGUgb3BlcmF0aW9uXG5cblx0XHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfZW5kRXZlbnQgKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfc3RhcnRFdmVudCApO1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggb3BTdGF0ZSwgdHJ1ZSApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLmNvcHkoIHRoaXMudW5wcm9qZWN0T25UYlN1cmZhY2UoIHRoaXMuY2FtZXJhLCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50LCB0aGlzLl90YlJhZGl1cyApICk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0aGlzLmVuYWJsZUdyaWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRpc3Bvc2VHcmlkKCk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIHRydWUgKTtcblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvL2NvbnRpbnVlIHdpdGggcm90YXRlIG9wZXJhdGlvblxuXHRcdFx0XHRcdFx0XHR0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy51bnByb2plY3RPblRiU3VyZmFjZSggdGhpcy5jYW1lcmEsIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQsIHRoaXMuX3RiUmFkaXVzICkgKTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uZGlzdGFuY2VUbyggdGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uICk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGFuZ2xlID0gdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbi5hbmdsZVRvKCB0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24gKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgYW1vdW50ID0gTWF0aC5tYXgoIGRpc3RhbmNlIC8gdGhpcy5fdGJSYWRpdXMsIGFuZ2xlICk7IC8vZWZmZWN0aXZlIHJvdGF0aW9uIGFuZ2xlXG5cblx0XHRcdFx0XHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5yb3RhdGUoIHRoaXMuY2FsY3VsYXRlUm90YXRpb25BeGlzKCB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLCB0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24gKSwgYW1vdW50ICkgKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHRoaXMuZW5hYmxlQW5pbWF0aW9ucyApIHtcblxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3RpbWVQcmV2ID0gdGhpcy5fdGltZUN1cnJlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fdGltZUN1cnJlbnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9hbmdsZVByZXYgPSB0aGlzLl9hbmdsZUN1cnJlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYW5nbGVDdXJyZW50ID0gYW1vdW50O1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2N1cnNvclBvc1ByZXYuY29weSggdGhpcy5fY3Vyc29yUG9zQ3VyciApO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2N1cnNvclBvc0N1cnIuY29weSggdGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uICk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fd1ByZXYgPSB0aGlzLl93Q3Vycjtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl93Q3VyciA9IHRoaXMuY2FsY3VsYXRlQW5ndWxhclNwZWVkKCB0aGlzLl9hbmdsZVByZXYsIHRoaXMuX2FuZ2xlQ3VycmVudCwgdGhpcy5fdGltZVByZXYsIHRoaXMuX3RpbWVDdXJyZW50ICk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFNUQVRFLlNDQUxFOlxuXG5cdFx0XHRcdFx0aWYgKCB0aGlzLmVuYWJsZVpvb20gKSB7XG5cblx0XHRcdFx0XHRcdGlmICggcmVzdGFydCApIHtcblxuXHRcdFx0XHRcdFx0XHQvL3N3aXRjaCB0byB6b29tIG9wZXJhdGlvblxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2VuZEV2ZW50ICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIG9wU3RhdGUsIHRydWUgKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbi5zZXRZKCB0aGlzLmdldEN1cnNvck5EQyggX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCApLnkgKiAwLjUgKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLmNvcHkoIHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24gKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHRoaXMuZW5hYmxlR3JpZCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZGlzcG9zZUdyaWQoKTtcblxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvL2NvbnRpbnVlIHdpdGggem9vbSBvcGVyYXRpb25cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc2NyZWVuTm90Y2hlcyA9IDg7XHQvL2hvdyBtYW55IHdoZWVsIG5vdGNoZXMgY29ycmVzcG9uZHMgdG8gYSBmdWxsIHNjcmVlbiBwYW5cblx0XHRcdFx0XHRcdFx0dGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLnNldFkoIHRoaXMuZ2V0Q3Vyc29yTkRDKCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50ICkueSAqIDAuNSApO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1vdmVtZW50ID0gdGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLnkgLSB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLnk7XG5cblx0XHRcdFx0XHRcdFx0bGV0IHNpemUgPSAxO1xuXG5cdFx0XHRcdFx0XHRcdGlmICggbW92ZW1lbnQgPCAwICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZSA9IDEgLyAoIE1hdGgucG93KCB0aGlzLnNjYWxlRmFjdG9yLCAtIG1vdmVtZW50ICogc2NyZWVuTm90Y2hlcyApICk7XG5cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggbW92ZW1lbnQgPiAwICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZSA9IE1hdGgucG93KCB0aGlzLnNjYWxlRmFjdG9yLCBtb3ZlbWVudCAqIHNjcmVlbk5vdGNoZXMgKTtcblxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5fdjNfMS5zZXRGcm9tTWF0cml4UG9zaXRpb24odGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZSk7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5zY2FsZSggc2l6ZSwgdGhpcy5fdjNfMSApICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgU1RBVEUuRk9WOlxuXG5cdFx0XHRcdFx0aWYgKCB0aGlzLmVuYWJsZVpvb20gJiYgdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRcdFx0aWYgKCByZXN0YXJ0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vc3dpdGNoIHRvIGZvdiBvcGVyYXRpb25cblxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9lbmRFdmVudCApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBvcFN0YXRlLCB0cnVlICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uc2V0WSggdGhpcy5nZXRDdXJzb3JOREMoIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQgKS55ICogMC41ICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi5jb3B5KCB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uICk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0aGlzLmVuYWJsZUdyaWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRpc3Bvc2VHcmlkKCk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly9jb250aW51ZSB3aXRoIGZvdiBvcGVyYXRpb25cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc2NyZWVuTm90Y2hlcyA9IDg7XHQvL2hvdyBtYW55IHdoZWVsIG5vdGNoZXMgY29ycmVzcG9uZHMgdG8gYSBmdWxsIHNjcmVlbiBwYW5cblx0XHRcdFx0XHRcdFx0dGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLnNldFkoIHRoaXMuZ2V0Q3Vyc29yTkRDKCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50ICkueSAqIDAuNSApO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1vdmVtZW50ID0gdGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLnkgLSB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLnk7XG5cblx0XHRcdFx0XHRcdFx0bGV0IHNpemUgPSAxO1xuXG5cdFx0XHRcdFx0XHRcdGlmICggbW92ZW1lbnQgPCAwICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZSA9IDEgLyAoIE1hdGgucG93KCB0aGlzLnNjYWxlRmFjdG9yLCAtIG1vdmVtZW50ICogc2NyZWVuTm90Y2hlcyApICk7XG5cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggbW92ZW1lbnQgPiAwICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZSA9IE1hdGgucG93KCB0aGlzLnNjYWxlRmFjdG9yLCBtb3ZlbWVudCAqIHNjcmVlbk5vdGNoZXMgKTtcblxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5fdjNfMS5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlICk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHggPSB0aGlzLl92M18xLmRpc3RhbmNlVG8oIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXHRcdFx0XHRcdFx0XHRsZXQgeE5ldyA9IHggLyBzaXplOyAvL2Rpc3RhbmNlIGJldHdlZW4gY2FtZXJhIGFuZCBnaXptb3MgaWYgc2NhbGUoc2l6ZSwgc2NhbGVwb2ludCkgd291bGQgYmUgcGVyZm9ybWVkXG5cblx0XHRcdFx0XHRcdFx0Ly9jaGVjayBtaW4gYW5kIG1heCBkaXN0YW5jZVxuXHRcdFx0XHRcdFx0XHR4TmV3ID0gTWF0aFV0aWxzLmNsYW1wKCB4TmV3LCB0aGlzLm1pbkRpc3RhbmNlLCB0aGlzLm1heERpc3RhbmNlICk7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgeSA9IHggKiBNYXRoLnRhbiggTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLl9mb3ZTdGF0ZSAqIDAuNSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vY2FsY3VsYXRlIG5ldyBmb3Zcblx0XHRcdFx0XHRcdFx0bGV0IG5ld0ZvdiA9IE1hdGhVdGlscy5SQUQyREVHICogKCBNYXRoLmF0YW4oIHkgLyB4TmV3ICkgKiAyICk7XG5cblx0XHRcdFx0XHRcdFx0Ly9jaGVjayBtaW4gYW5kIG1heCBmb3Zcblx0XHRcdFx0XHRcdFx0bmV3Rm92ID0gTWF0aFV0aWxzLmNsYW1wKCBuZXdGb3YsIHRoaXMubWluRm92LCB0aGlzLm1heEZvdiApO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG5ld0Rpc3RhbmNlID0geSAvIE1hdGgudGFuKCBNYXRoVXRpbHMuREVHMlJBRCAqICggbmV3Rm92IC8gMiApICk7XG5cdFx0XHRcdFx0XHRcdHNpemUgPSB4IC8gbmV3RGlzdGFuY2U7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3YzXzIuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLl9naXptb01hdHJpeFN0YXRlICk7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRGb3YoIG5ld0ZvdiApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmFwcGx5VHJhbnNmb3JtTWF0cml4KCB0aGlzLnNjYWxlKCBzaXplLCB0aGlzLl92M18yLCBmYWxzZSApICk7XG5cblx0XHRcdFx0XHRcdFx0Ly9hZGp1c3RpbmcgZGlzdGFuY2Vcblx0XHRcdFx0XHRcdFx0X29mZnNldC5jb3B5KCB0aGlzLl9naXptb3MucG9zaXRpb24gKS5zdWIoIHRoaXMuY2FtZXJhLnBvc2l0aW9uICkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoIG5ld0Rpc3RhbmNlIC8geCApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9tNF8xLm1ha2VUcmFuc2xhdGlvbiggX29mZnNldC54LCBfb2Zmc2V0LnksIF9vZmZzZXQueiApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0b25TaW5nbGVQYW5FbmQgPSAoKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuX3N0YXRlID09IFNUQVRFLlJPVEFURSApIHtcblxuXG5cdFx0XHRpZiAoICEgdGhpcy5lbmFibGVSb3RhdGUgKSB7XG5cblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggdGhpcy5lbmFibGVBbmltYXRpb25zICkge1xuXG5cdFx0XHRcdC8vcGVyZm9ybSByb3RhdGlvbiBhbmltYXRpb25cblx0XHRcdFx0Y29uc3QgZGVsdGFUaW1lID0gKCBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX3RpbWVDdXJyZW50ICk7XG5cdFx0XHRcdGlmICggZGVsdGFUaW1lIDwgMTIwICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgdyA9IE1hdGguYWJzKCAoIHRoaXMuX3dQcmV2ICsgdGhpcy5fd0N1cnIgKSAvIDIgKTtcblxuXHRcdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRcdHRoaXMuX2FuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggZnVuY3Rpb24gKCB0ICkge1xuXG5cdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLkFOSU1BVElPTl9ST1RBVEUsIHRydWUgKTtcblx0XHRcdFx0XHRcdGNvbnN0IHJvdGF0aW9uQXhpcyA9IHNlbGYuY2FsY3VsYXRlUm90YXRpb25BeGlzKCBzZWxmLl9jdXJzb3JQb3NQcmV2LCBzZWxmLl9jdXJzb3JQb3NDdXJyICk7XG5cblx0XHRcdFx0XHRcdHNlbGYub25Sb3RhdGlvbkFuaW0oIHQsIHJvdGF0aW9uQXhpcywgTWF0aC5taW4oIHcsIHNlbGYud01heCApICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vY3Vyc29yIGhhcyBiZWVuIHN0YW5kaW5nIHN0aWxsIGZvciBvdmVyIDEyMCBtcyBzaW5jZSBsYXN0IG1vdmVtZW50XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXHRcdFx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXHRcdFx0XHR0aGlzLmFjdGl2YXRlR2l6bW9zKCBmYWxzZSApO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2UgaWYgKCB0aGlzLl9zdGF0ZSA9PSBTVEFURS5QQU4gfHwgdGhpcy5fc3RhdGUgPT0gU1RBVEUuSURMRSApIHtcblxuXHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXG5cdFx0XHRpZiAoIHRoaXMuZW5hYmxlR3JpZCApIHtcblxuXHRcdFx0XHR0aGlzLmRpc3Bvc2VHcmlkKCk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblxuXHRcdH1cblxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2VuZEV2ZW50ICk7XG5cblx0fTtcblxuXHRvbkRvdWJsZVRhcCA9ICggZXZlbnQgKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuZW5hYmxlZCAmJiB0aGlzLmVuYWJsZVBhbiAmJiB0aGlzLnNjZW5lICE9IG51bGwgKSB7XG5cblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0dGhpcy5zZXRDZW50ZXIoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRcdGNvbnN0IGhpdFAgPSB0aGlzLnVucHJvamVjdE9uT2JqKCB0aGlzLmdldEN1cnNvck5EQyggX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCApLCB0aGlzLmNhbWVyYSApO1xuXG5cdFx0XHRpZiAoIGhpdFAgIT0gbnVsbCAmJiB0aGlzLmVuYWJsZUFuaW1hdGlvbnMgKSB7XG5cblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGlmICggdGhpcy5fYW5pbWF0aW9uSWQgIT0gLSAxICkge1xuXG5cdFx0XHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLl9hbmltYXRpb25JZCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl90aW1lU3RhcnQgPSAtIDE7XG5cdFx0XHRcdHRoaXMuX2FuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggZnVuY3Rpb24gKCB0ICkge1xuXG5cdFx0XHRcdFx0c2VsZi51cGRhdGVUYlN0YXRlKCBTVEFURS5BTklNQVRJT05fRk9DVVMsIHRydWUgKTtcblx0XHRcdFx0XHRzZWxmLm9uRm9jdXNBbmltKCB0LCBoaXRQLCBzZWxmLl9jYW1lcmFNYXRyaXhTdGF0ZSwgc2VsZi5fZ2l6bW9NYXRyaXhTdGF0ZSApO1xuXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fSBlbHNlIGlmICggaGl0UCAhPSBudWxsICYmICEgdGhpcy5lbmFibGVBbmltYXRpb25zICkge1xuXG5cdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuRk9DVVMsIHRydWUgKTtcblx0XHRcdFx0dGhpcy5mb2N1cyggaGl0UCwgdGhpcy5zY2FsZUZhY3RvciApO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLklETEUsIGZhbHNlICk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2VuZEV2ZW50ICk7XG5cblx0fTtcblxuXHRvbkRvdWJsZVBhblN0YXJ0ID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgJiYgdGhpcy5lbmFibGVQYW4gKSB7XG5cblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5QQU4sIHRydWUgKTtcblxuXHRcdFx0dGhpcy5zZXRDZW50ZXIoICggdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0uY2xpZW50WCArIHRoaXMuX3RvdWNoQ3VycmVudFsgMSBdLmNsaWVudFggKSAvIDIsICggdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0uY2xpZW50WSArIHRoaXMuX3RvdWNoQ3VycmVudFsgMSBdLmNsaWVudFkgKSAvIDIgKTtcblx0XHRcdHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy51bnByb2plY3RPblRiUGxhbmUoIHRoaXMuY2FtZXJhLCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50LCB0cnVlICkgKTtcblx0XHRcdHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi5jb3B5KCB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uICk7XG5cblx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cblx0XHR9XG5cblx0fTtcblxuXHRvbkRvdWJsZVBhbk1vdmUgPSAoKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuZW5hYmxlZCAmJiB0aGlzLmVuYWJsZVBhbiApIHtcblxuXHRcdFx0dGhpcy5zZXRDZW50ZXIoICggdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0uY2xpZW50WCArIHRoaXMuX3RvdWNoQ3VycmVudFsgMSBdLmNsaWVudFggKSAvIDIsICggdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0uY2xpZW50WSArIHRoaXMuX3RvdWNoQ3VycmVudFsgMSBdLmNsaWVudFkgKSAvIDIgKTtcblxuXHRcdFx0aWYgKCB0aGlzLl9zdGF0ZSAhPSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5QQU4sIHRydWUgKTtcblx0XHRcdFx0dGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbi5jb3B5KCB0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy51bnByb2plY3RPblRiUGxhbmUoIHRoaXMuY2FtZXJhLCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50LCB0cnVlICkgKTtcblx0XHRcdHRoaXMuYXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRoaXMucGFuKCB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLCB0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24sIHRydWUgKSApO1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdH1cblxuXHR9O1xuXG5cdG9uRG91YmxlUGFuRW5kID0gKCkgPT4ge1xuXG5cdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2VuZEV2ZW50ICk7XG5cblx0fTtcblxuXG5cdG9uUm90YXRlU3RhcnQgPSAoKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuZW5hYmxlZCAmJiB0aGlzLmVuYWJsZVJvdGF0ZSApIHtcblxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfc3RhcnRFdmVudCApO1xuXG5cdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLlpST1RBVEUsIHRydWUgKTtcblxuXHRcdFx0Ly90aGlzLl9zdGFydEZpbmdlclJvdGF0aW9uID0gZXZlbnQucm90YXRpb247XG5cblx0XHRcdHRoaXMuX3N0YXJ0RmluZ2VyUm90YXRpb24gPSB0aGlzLmdldEFuZ2xlKCB0aGlzLl90b3VjaEN1cnJlbnRbIDEgXSwgdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0gKSArIHRoaXMuZ2V0QW5nbGUoIHRoaXMuX3RvdWNoU3RhcnRbIDEgXSwgdGhpcy5fdG91Y2hTdGFydFsgMCBdICk7XG5cdFx0XHR0aGlzLl9jdXJyZW50RmluZ2VyUm90YXRpb24gPSB0aGlzLl9zdGFydEZpbmdlclJvdGF0aW9uO1xuXG5cdFx0XHR0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbiggdGhpcy5fcm90YXRpb25BeGlzICk7IC8vcm90YXRpb24gYXhpc1xuXG5cdFx0XHRpZiAoICEgdGhpcy5lbmFibGVQYW4gJiYgISB0aGlzLmVuYWJsZVpvb20gKSB7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggdHJ1ZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fTtcblxuXHRvblJvdGF0ZU1vdmUgPSAoKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuZW5hYmxlZCAmJiB0aGlzLmVuYWJsZVJvdGF0ZSApIHtcblxuXHRcdFx0dGhpcy5zZXRDZW50ZXIoICggdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0uY2xpZW50WCArIHRoaXMuX3RvdWNoQ3VycmVudFsgMSBdLmNsaWVudFggKSAvIDIsICggdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0uY2xpZW50WSArIHRoaXMuX3RvdWNoQ3VycmVudFsgMSBdLmNsaWVudFkgKSAvIDIgKTtcblx0XHRcdGxldCByb3RhdGlvblBvaW50O1xuXG5cdFx0XHRpZiAoIHRoaXMuX3N0YXRlICE9IFNUQVRFLlpST1RBVEUgKSB7XG5cblx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5aUk9UQVRFLCB0cnVlICk7XG5cdFx0XHRcdHRoaXMuX3N0YXJ0RmluZ2VyUm90YXRpb24gPSB0aGlzLl9jdXJyZW50RmluZ2VyUm90YXRpb247XG5cblx0XHRcdH1cblxuXHRcdFx0Ly90aGlzLl9jdXJyZW50RmluZ2VyUm90YXRpb24gPSBldmVudC5yb3RhdGlvbjtcblx0XHRcdHRoaXMuX2N1cnJlbnRGaW5nZXJSb3RhdGlvbiA9IHRoaXMuZ2V0QW5nbGUoIHRoaXMuX3RvdWNoQ3VycmVudFsgMSBdLCB0aGlzLl90b3VjaEN1cnJlbnRbIDAgXSApICsgdGhpcy5nZXRBbmdsZSggdGhpcy5fdG91Y2hTdGFydFsgMSBdLCB0aGlzLl90b3VjaFN0YXJ0WyAwIF0gKTtcblxuXHRcdFx0aWYgKCAhIHRoaXMuZW5hYmxlUGFuICkge1xuXG5cdFx0XHRcdHJvdGF0aW9uUG9pbnQgPSBuZXcgVmVjdG9yMygpLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHRoaXMuX3YzXzIuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLl9naXptb01hdHJpeFN0YXRlICk7XG5cdFx0XHRcdHJvdGF0aW9uUG9pbnQgPSB0aGlzLnVucHJvamVjdE9uVGJQbGFuZSggdGhpcy5jYW1lcmEsIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQgKS5hcHBseVF1YXRlcm5pb24oIHRoaXMuY2FtZXJhLnF1YXRlcm5pb24gKS5tdWx0aXBseVNjYWxhciggMSAvIHRoaXMuY2FtZXJhLnpvb20gKS5hZGQoIHRoaXMuX3YzXzIgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBhbW91bnQgPSBNYXRoVXRpbHMuREVHMlJBRCAqICggdGhpcy5fc3RhcnRGaW5nZXJSb3RhdGlvbiAtIHRoaXMuX2N1cnJlbnRGaW5nZXJSb3RhdGlvbiApO1xuXG5cdFx0XHR0aGlzLmFwcGx5VHJhbnNmb3JtTWF0cml4KCB0aGlzLnpSb3RhdGUoIHJvdGF0aW9uUG9pbnQsIGFtb3VudCApICk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0b25Sb3RhdGVFbmQgPSAoKSA9PiB7XG5cblx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLklETEUsIGZhbHNlICk7XG5cdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9lbmRFdmVudCApO1xuXG5cdH07XG5cblx0b25QaW5jaFN0YXJ0ID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgJiYgdGhpcy5lbmFibGVab29tICkge1xuXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLlNDQUxFLCB0cnVlICk7XG5cblx0XHRcdHRoaXMuX3N0YXJ0RmluZ2VyRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZVBvaW50ZXJzRGlzdGFuY2UoIHRoaXMuX3RvdWNoQ3VycmVudFsgMCBdLCB0aGlzLl90b3VjaEN1cnJlbnRbIDEgXSApO1xuXHRcdFx0dGhpcy5fY3VycmVudEZpbmdlckRpc3RhbmNlID0gdGhpcy5fc3RhcnRGaW5nZXJEaXN0YW5jZTtcblxuXHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblxuXHRcdH1cblxuXHR9O1xuXG5cdG9uUGluY2hNb3ZlID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgJiYgdGhpcy5lbmFibGVab29tICkge1xuXG5cdFx0XHR0aGlzLnNldENlbnRlciggKCB0aGlzLl90b3VjaEN1cnJlbnRbIDAgXS5jbGllbnRYICsgdGhpcy5fdG91Y2hDdXJyZW50WyAxIF0uY2xpZW50WCApIC8gMiwgKCB0aGlzLl90b3VjaEN1cnJlbnRbIDAgXS5jbGllbnRZICsgdGhpcy5fdG91Y2hDdXJyZW50WyAxIF0uY2xpZW50WSApIC8gMiApO1xuXHRcdFx0Y29uc3QgbWluRGlzdGFuY2UgPSAxMjsgLy9taW5pbXVtIGRpc3RhbmNlIGJldHdlZW4gZmluZ2VycyAoaW4gY3NzIHBpeGVscylcblxuXHRcdFx0aWYgKCB0aGlzLl9zdGF0ZSAhPSBTVEFURS5TQ0FMRSApIHtcblxuXHRcdFx0XHR0aGlzLl9zdGFydEZpbmdlckRpc3RhbmNlID0gdGhpcy5fY3VycmVudEZpbmdlckRpc3RhbmNlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLlNDQUxFLCB0cnVlICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY3VycmVudEZpbmdlckRpc3RhbmNlID0gTWF0aC5tYXgoIHRoaXMuY2FsY3VsYXRlUG9pbnRlcnNEaXN0YW5jZSggdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0sIHRoaXMuX3RvdWNoQ3VycmVudFsgMSBdICksIG1pbkRpc3RhbmNlICogdGhpcy5fZGV2UHhSYXRpbyApO1xuXHRcdFx0Y29uc3QgYW1vdW50ID0gdGhpcy5fY3VycmVudEZpbmdlckRpc3RhbmNlIC8gdGhpcy5fc3RhcnRGaW5nZXJEaXN0YW5jZTtcblxuXHRcdFx0bGV0IHNjYWxlUG9pbnQ7XG5cblx0XHRcdGlmICggISB0aGlzLmVuYWJsZVBhbiApIHtcblxuXHRcdFx0XHRzY2FsZVBvaW50ID0gdGhpcy5fZ2l6bW9zLnBvc2l0aW9uO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICggdGhpcy5jYW1lcmEuaXNPcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHRzY2FsZVBvaW50ID0gdGhpcy51bnByb2plY3RPblRiUGxhbmUoIHRoaXMuY2FtZXJhLCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50IClcblx0XHRcdFx0XHRcdC5hcHBseVF1YXRlcm5pb24oIHRoaXMuY2FtZXJhLnF1YXRlcm5pb24gKVxuXHRcdFx0XHRcdFx0Lm11bHRpcGx5U2NhbGFyKCAxIC8gdGhpcy5jYW1lcmEuem9vbSApXG5cdFx0XHRcdFx0XHQuYWRkKCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCB0aGlzLmNhbWVyYS5pc1BlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0c2NhbGVQb2ludCA9IHRoaXMudW5wcm9qZWN0T25UYlBsYW5lKCB0aGlzLmNhbWVyYSwgX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCApXG5cdFx0XHRcdFx0XHQuYXBwbHlRdWF0ZXJuaW9uKCB0aGlzLmNhbWVyYS5xdWF0ZXJuaW9uIClcblx0XHRcdFx0XHRcdC5hZGQoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmFwcGx5VHJhbnNmb3JtTWF0cml4KCB0aGlzLnNjYWxlKCBhbW91bnQsIHNjYWxlUG9pbnQgKSApO1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdH1cblxuXHR9O1xuXG5cdG9uUGluY2hFbmQgPSAoKSA9PiB7XG5cblx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLklETEUsIGZhbHNlICk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfZW5kRXZlbnQgKTtcblxuXHR9O1xuXG5cdG9uVHJpcGxlUGFuU3RhcnQgPSAoKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuZW5hYmxlZCAmJiB0aGlzLmVuYWJsZVpvb20gKSB7XG5cblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5TQ0FMRSwgdHJ1ZSApO1xuXG5cdFx0XHQvL2NvbnN0IGNlbnRlciA9IGV2ZW50LmNlbnRlcjtcblx0XHRcdGxldCBjbGllbnRYID0gMDtcblx0XHRcdGxldCBjbGllbnRZID0gMDtcblx0XHRcdGNvbnN0IG5GaW5nZXJzID0gdGhpcy5fdG91Y2hDdXJyZW50Lmxlbmd0aDtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgbkZpbmdlcnM7IGkgKysgKSB7XG5cblx0XHRcdFx0Y2xpZW50WCArPSB0aGlzLl90b3VjaEN1cnJlbnRbIGkgXS5jbGllbnRYO1xuXHRcdFx0XHRjbGllbnRZICs9IHRoaXMuX3RvdWNoQ3VycmVudFsgaSBdLmNsaWVudFk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRDZW50ZXIoIGNsaWVudFggLyBuRmluZ2VycywgY2xpZW50WSAvIG5GaW5nZXJzICk7XG5cblx0XHRcdHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uc2V0WSggdGhpcy5nZXRDdXJzb3JOREMoIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQgKS55ICogMC41ICk7XG5cdFx0XHR0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbiApO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0b25UcmlwbGVQYW5Nb3ZlID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgJiYgdGhpcy5lbmFibGVab29tICkge1xuXG5cdFx0XHQvL1x0ICBmb3YgLyAyXG5cdFx0XHQvL1x0XHR8XFxcblx0XHRcdC8vXHRcdHwgXFxcblx0XHRcdC8vXHRcdHwgIFxcXG5cdFx0XHQvL1x0eFx0fFx0XFxcblx0XHRcdC8vXHRcdHwgXHQgXFxcblx0XHRcdC8vXHRcdHwgXHQgIFxcXG5cdFx0XHQvL1x0XHR8IF8gXyBfXFxcblx0XHRcdC8vXHRcdFx0eVxuXG5cdFx0XHQvL2NvbnN0IGNlbnRlciA9IGV2ZW50LmNlbnRlcjtcblx0XHRcdGxldCBjbGllbnRYID0gMDtcblx0XHRcdGxldCBjbGllbnRZID0gMDtcblx0XHRcdGNvbnN0IG5GaW5nZXJzID0gdGhpcy5fdG91Y2hDdXJyZW50Lmxlbmd0aDtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgbkZpbmdlcnM7IGkgKysgKSB7XG5cblx0XHRcdFx0Y2xpZW50WCArPSB0aGlzLl90b3VjaEN1cnJlbnRbIGkgXS5jbGllbnRYO1xuXHRcdFx0XHRjbGllbnRZICs9IHRoaXMuX3RvdWNoQ3VycmVudFsgaSBdLmNsaWVudFk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRDZW50ZXIoIGNsaWVudFggLyBuRmluZ2VycywgY2xpZW50WSAvIG5GaW5nZXJzICk7XG5cblx0XHRcdGNvbnN0IHNjcmVlbk5vdGNoZXMgPSA4O1x0Ly9ob3cgbWFueSB3aGVlbCBub3RjaGVzIGNvcnJlc3BvbmRzIHRvIGEgZnVsbCBzY3JlZW4gcGFuXG5cdFx0XHR0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24uc2V0WSggdGhpcy5nZXRDdXJzb3JOREMoIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQgKS55ICogMC41ICk7XG5cblx0XHRcdGNvbnN0IG1vdmVtZW50ID0gdGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLnkgLSB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLnk7XG5cblx0XHRcdGxldCBzaXplID0gMTtcblxuXHRcdFx0aWYgKCBtb3ZlbWVudCA8IDAgKSB7XG5cblx0XHRcdFx0c2l6ZSA9IDEgLyAoIE1hdGgucG93KCB0aGlzLnNjYWxlRmFjdG9yLCAtIG1vdmVtZW50ICogc2NyZWVuTm90Y2hlcyApICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIG1vdmVtZW50ID4gMCApIHtcblxuXHRcdFx0XHRzaXplID0gTWF0aC5wb3coIHRoaXMuc2NhbGVGYWN0b3IsIG1vdmVtZW50ICogc2NyZWVuTm90Y2hlcyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3YzXzEuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZSApO1xuXHRcdFx0Y29uc3QgeCA9IHRoaXMuX3YzXzEuZGlzdGFuY2VUbyggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICk7XG5cdFx0XHRsZXQgeE5ldyA9IHggLyBzaXplOyAvL2Rpc3RhbmNlIGJldHdlZW4gY2FtZXJhIGFuZCBnaXptb3MgaWYgc2NhbGUoc2l6ZSwgc2NhbGVwb2ludCkgd291bGQgYmUgcGVyZm9ybWVkXG5cblx0XHRcdC8vY2hlY2sgbWluIGFuZCBtYXggZGlzdGFuY2Vcblx0XHRcdHhOZXcgPSBNYXRoVXRpbHMuY2xhbXAoIHhOZXcsIHRoaXMubWluRGlzdGFuY2UsIHRoaXMubWF4RGlzdGFuY2UgKTtcblxuXHRcdFx0Y29uc3QgeSA9IHggKiBNYXRoLnRhbiggTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLl9mb3ZTdGF0ZSAqIDAuNSApO1xuXG5cdFx0XHQvL2NhbGN1bGF0ZSBuZXcgZm92XG5cdFx0XHRsZXQgbmV3Rm92ID0gTWF0aFV0aWxzLlJBRDJERUcgKiAoIE1hdGguYXRhbiggeSAvIHhOZXcgKSAqIDIgKTtcblxuXHRcdFx0Ly9jaGVjayBtaW4gYW5kIG1heCBmb3Zcblx0XHRcdG5ld0ZvdiA9IE1hdGhVdGlscy5jbGFtcCggbmV3Rm92LCB0aGlzLm1pbkZvdiwgdGhpcy5tYXhGb3YgKTtcblxuXHRcdFx0Y29uc3QgbmV3RGlzdGFuY2UgPSB5IC8gTWF0aC50YW4oIE1hdGhVdGlscy5ERUcyUkFEICogKCBuZXdGb3YgLyAyICkgKTtcblx0XHRcdHNpemUgPSB4IC8gbmV3RGlzdGFuY2U7XG5cdFx0XHR0aGlzLl92M18yLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZSApO1xuXG5cdFx0XHR0aGlzLnNldEZvdiggbmV3Rm92ICk7XG5cdFx0XHR0aGlzLmFwcGx5VHJhbnNmb3JtTWF0cml4KCB0aGlzLnNjYWxlKCBzaXplLCB0aGlzLl92M18yLCBmYWxzZSApICk7XG5cblx0XHRcdC8vYWRqdXN0aW5nIGRpc3RhbmNlXG5cdFx0XHRfb2Zmc2V0LmNvcHkoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApLnN1YiggdGhpcy5jYW1lcmEucG9zaXRpb24gKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhciggbmV3RGlzdGFuY2UgLyB4ICk7XG5cdFx0XHR0aGlzLl9tNF8xLm1ha2VUcmFuc2xhdGlvbiggX29mZnNldC54LCBfb2Zmc2V0LnksIF9vZmZzZXQueiApO1xuXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0b25UcmlwbGVQYW5FbmQgPSAoKSA9PiB7XG5cblx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLklETEUsIGZhbHNlICk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfZW5kRXZlbnQgKTtcblx0XHQvL3RoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0fTtcblxuXHQvKipcblx0ICogU2V0IF9jZW50ZXIncyB4L3kgY29vcmRpbmF0ZXNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNsaWVudFhcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNsaWVudFlcblx0ICovXG5cdHNldENlbnRlciA9ICggY2xpZW50WCwgY2xpZW50WSApID0+IHtcblxuXHRcdF9jZW50ZXIueCA9IGNsaWVudFg7XG5cdFx0X2NlbnRlci55ID0gY2xpZW50WTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgZGVmYXVsdCBtb3VzZSBhY3Rpb25zXG5cdCAqL1xuXHRpbml0aWFsaXplTW91c2VBY3Rpb25zID0gKCkgPT4ge1xuXG5cdFx0dGhpcy5zZXRNb3VzZUFjdGlvbiggJ1BBTicsIDAsICdDVFJMJyApO1xuXHRcdHRoaXMuc2V0TW91c2VBY3Rpb24oICdQQU4nLCAyICk7XG5cblx0XHR0aGlzLnNldE1vdXNlQWN0aW9uKCAnUk9UQVRFJywgMCApO1xuXG5cdFx0dGhpcy5zZXRNb3VzZUFjdGlvbiggJ1pPT00nLCAnV0hFRUwnICk7XG5cdFx0dGhpcy5zZXRNb3VzZUFjdGlvbiggJ1pPT00nLCAxICk7XG5cblx0XHR0aGlzLnNldE1vdXNlQWN0aW9uKCAnRk9WJywgJ1dIRUVMJywgJ1NISUZUJyApO1xuXHRcdHRoaXMuc2V0TW91c2VBY3Rpb24oICdGT1YnLCAxLCAnU0hJRlQnICk7XG5cblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDb21wYXJlIHR3byBtb3VzZSBhY3Rpb25zXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24xXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24yXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIGFjdGlvbjEgYW5kIGFjdGlvbiAyIGFyZSB0aGUgc2FtZSBtb3VzZSBhY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuXHQgKi9cblx0Y29tcGFyZU1vdXNlQWN0aW9uID0gKCBhY3Rpb24xLCBhY3Rpb24yICkgPT4ge1xuXG5cdFx0aWYgKCBhY3Rpb24xLm9wZXJhdGlvbiA9PSBhY3Rpb24yLm9wZXJhdGlvbiApIHtcblxuXHRcdFx0aWYgKCBhY3Rpb24xLm1vdXNlID09IGFjdGlvbjIubW91c2UgJiYgYWN0aW9uMS5rZXkgPT0gYWN0aW9uMi5rZXkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogU2V0IGEgbmV3IG1vdXNlIGFjdGlvbiBieSBzcGVjaWZ5aW5nIHRoZSBvcGVyYXRpb24gdG8gYmUgcGVyZm9ybWVkIGFuZCBhIG1vdXNlL2tleSBjb21iaW5hdGlvbi4gSW4gY2FzZSBvZiBjb25mbGljdCwgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIG9uZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gb3BlcmF0aW9uIFRoZSBvcGVyYXRpb24gdG8gYmUgcGVyZm9ybWVkICgnUEFOJywgJ1JPVEFURScsICdaT09NJywgJ0ZPVilcblx0ICogQHBhcmFtIHsqfSBtb3VzZSBBIG1vdXNlIGJ1dHRvbiAoMCwgMSwgMikgb3IgJ1dIRUVMJyBmb3Igd2hlZWwgbm90Y2hlc1xuXHQgKiBAcGFyYW0geyp9IGtleSBUaGUga2V5Ym9hcmQgbW9kaWZpZXIgKCdDVFJMJywgJ1NISUZUJykgb3IgbnVsbCBpZiBrZXkgaXMgbm90IG5lZWRlZFxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbW91c2UgYWN0aW9uIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBhZGRlZCwgZmFsc2Ugb3RoZXJ3aXNlXG5cdCAqL1xuXHRzZXRNb3VzZUFjdGlvbiA9ICggb3BlcmF0aW9uLCBtb3VzZSwga2V5ID0gbnVsbCApID0+IHtcblxuXHRcdGNvbnN0IG9wZXJhdGlvbklucHV0ID0gWyAnUEFOJywgJ1JPVEFURScsICdaT09NJywgJ0ZPVicgXTtcblx0XHRjb25zdCBtb3VzZUlucHV0ID0gWyAwLCAxLCAyLCAnV0hFRUwnIF07XG5cdFx0Y29uc3Qga2V5SW5wdXQgPSBbICdDVFJMJywgJ1NISUZUJywgbnVsbCBdO1xuXHRcdGxldCBzdGF0ZTtcblxuXHRcdGlmICggISBvcGVyYXRpb25JbnB1dC5pbmNsdWRlcyggb3BlcmF0aW9uICkgfHwgISBtb3VzZUlucHV0LmluY2x1ZGVzKCBtb3VzZSApIHx8ICEga2V5SW5wdXQuaW5jbHVkZXMoIGtleSApICkge1xuXG5cdFx0XHQvL2ludmFsaWQgcGFyYW1ldGVyc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBtb3VzZSA9PSAnV0hFRUwnICkge1xuXG5cdFx0XHRpZiAoIG9wZXJhdGlvbiAhPSAnWk9PTScgJiYgb3BlcmF0aW9uICE9ICdGT1YnICkge1xuXG5cdFx0XHRcdC8vY2Fubm90IGFzc29jaWF0ZSAyRCBvcGVyYXRpb24gdG8gMUQgaW5wdXRcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRzd2l0Y2ggKCBvcGVyYXRpb24gKSB7XG5cblx0XHRcdGNhc2UgJ1BBTic6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdST1RBVEUnOlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWk9PTSc6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5TQ0FMRTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ0ZPVic6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5GT1Y7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgYWN0aW9uID0ge1xuXG5cdFx0XHRvcGVyYXRpb246IG9wZXJhdGlvbixcblx0XHRcdG1vdXNlOiBtb3VzZSxcblx0XHRcdGtleToga2V5LFxuXHRcdFx0c3RhdGU6IHN0YXRlXG5cblx0XHR9O1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tb3VzZUFjdGlvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRpZiAoIHRoaXMubW91c2VBY3Rpb25zWyBpIF0ubW91c2UgPT0gYWN0aW9uLm1vdXNlICYmIHRoaXMubW91c2VBY3Rpb25zWyBpIF0ua2V5ID09IGFjdGlvbi5rZXkgKSB7XG5cblx0XHRcdFx0dGhpcy5tb3VzZUFjdGlvbnMuc3BsaWNlKCBpLCAxLCBhY3Rpb24gKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHRoaXMubW91c2VBY3Rpb25zLnB1c2goIGFjdGlvbiApO1xuXHRcdHJldHVybiB0cnVlO1xuXG5cdH07XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhIG1vdXNlIGFjdGlvbiBieSBzcGVjaWZ5aW5nIGl0cyBtb3VzZS9rZXkgY29tYmluYXRpb25cblx0ICogQHBhcmFtIHsqfSBtb3VzZSBBIG1vdXNlIGJ1dHRvbiAoMCwgMSwgMikgb3IgJ1dIRUVMJyBmb3Igd2hlZWwgbm90Y2hlc1xuXHQgKiBAcGFyYW0geyp9IGtleSBUaGUga2V5Ym9hcmQgbW9kaWZpZXIgKCdDVFJMJywgJ1NISUZUJykgb3IgbnVsbCBpZiBrZXkgaXMgbm90IG5lZWRlZFxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIGhhcyBiZWVuIHN1Y2Nlc2Z1bGx5IHJlbW92ZWQsIGZhbHNlIG90aGVyd2lzZVxuXHQgKi9cblx0dW5zZXRNb3VzZUFjdGlvbiA9ICggbW91c2UsIGtleSA9IG51bGwgKSA9PiB7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1vdXNlQWN0aW9ucy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGlmICggdGhpcy5tb3VzZUFjdGlvbnNbIGkgXS5tb3VzZSA9PSBtb3VzZSAmJiB0aGlzLm1vdXNlQWN0aW9uc1sgaSBdLmtleSA9PSBrZXkgKSB7XG5cblx0XHRcdFx0dGhpcy5tb3VzZUFjdGlvbnMuc3BsaWNlKCBpLCAxICk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSBvcGVyYXRpb24gYXNzb2NpYXRlZCB0byBhIG1vdXNlL2tleWJvYXJkIGNvbWJpbmF0aW9uXG5cdCAqIEBwYXJhbSB7Kn0gbW91c2UgQSBtb3VzZSBidXR0b24gKDAsIDEsIDIpIG9yICdXSEVFTCcgZm9yIHdoZWVsIG5vdGNoZXNcblx0ICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleWJvYXJkIG1vZGlmaWVyICgnQ1RSTCcsICdTSElGVCcpIG9yIG51bGwgaWYga2V5IGlzIG5vdCBuZWVkZWRcblx0ICogQHJldHVybnMgVGhlIG9wZXJhdGlvbiBpZiBpdCBoYXMgYmVlbiBmb3VuZCwgbnVsbCBvdGhlcndpc2Vcblx0ICovXG5cdGdldE9wRnJvbUFjdGlvbiA9ICggbW91c2UsIGtleSApID0+IHtcblxuXHRcdGxldCBhY3Rpb247XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1vdXNlQWN0aW9ucy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGFjdGlvbiA9IHRoaXMubW91c2VBY3Rpb25zWyBpIF07XG5cdFx0XHRpZiAoIGFjdGlvbi5tb3VzZSA9PSBtb3VzZSAmJiBhY3Rpb24ua2V5ID09IGtleSApIHtcblxuXHRcdFx0XHRyZXR1cm4gYWN0aW9uLm9wZXJhdGlvbjtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBrZXkgIT0gbnVsbCApIHtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tb3VzZUFjdGlvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRcdGFjdGlvbiA9IHRoaXMubW91c2VBY3Rpb25zWyBpIF07XG5cdFx0XHRcdGlmICggYWN0aW9uLm1vdXNlID09IG1vdXNlICYmIGFjdGlvbi5rZXkgPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdHJldHVybiBhY3Rpb24ub3BlcmF0aW9uO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0fTtcblxuXHQvKipcblx0ICogR2V0IHRoZSBvcGVyYXRpb24gYXNzb2NpYXRlZCB0byBtb3VzZSBhbmQga2V5IGNvbWJpbmF0aW9uIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIEZTQSBzdGF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gbW91c2UgTW91c2UgYnV0dG9uXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgS2V5Ym9hcmQgbW9kaWZpZXJcblx0ICogQHJldHVybnMgVGhlIEZTQSBzdGF0ZSBvYnRhaW5lZCBmcm9tIHRoZSBvcGVyYXRpb24gYXNzb2NpYXRlZCB0byBtb3VzZS9rZXlib2FyZCBjb21iaW5hdGlvblxuXHQgKi9cblx0Z2V0T3BTdGF0ZUZyb21BY3Rpb24gPSAoIG1vdXNlLCBrZXkgKSA9PiB7XG5cblx0XHRsZXQgYWN0aW9uO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tb3VzZUFjdGlvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRhY3Rpb24gPSB0aGlzLm1vdXNlQWN0aW9uc1sgaSBdO1xuXHRcdFx0aWYgKCBhY3Rpb24ubW91c2UgPT0gbW91c2UgJiYgYWN0aW9uLmtleSA9PSBrZXkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGFjdGlvbi5zdGF0ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBrZXkgIT0gbnVsbCApIHtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tb3VzZUFjdGlvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRcdGFjdGlvbiA9IHRoaXMubW91c2VBY3Rpb25zWyBpIF07XG5cdFx0XHRcdGlmICggYWN0aW9uLm1vdXNlID09IG1vdXNlICYmIGFjdGlvbi5rZXkgPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdHJldHVybiBhY3Rpb24uc3RhdGU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIHBvaW50ZXJzXG5cdCAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBwMVxuXHQgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gcDJcblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGJldHdlZW4gdHdvIHBvaW50ZXJzIGluIGRlZ3JlZXNcblx0ICovXG5cdGdldEFuZ2xlID0gKCBwMSwgcDIgKSA9PiB7XG5cblx0XHRyZXR1cm4gTWF0aC5hdGFuMiggcDIuY2xpZW50WSAtIHAxLmNsaWVudFksIHAyLmNsaWVudFggLSBwMS5jbGllbnRYICkgKiAxODAgLyBNYXRoLlBJO1xuXG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBhIFBvaW50ZXJFdmVudCBpbnNpZGUgY3VycmVudCBwb2ludGVyZXZlbnRzIGFycmF5XG5cdCAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBldmVudFxuXHQgKi9cblx0dXBkYXRlVG91Y2hFdmVudCA9ICggZXZlbnQgKSA9PiB7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLl90b3VjaEN1cnJlbnQubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRpZiAoIHRoaXMuX3RvdWNoQ3VycmVudFsgaSBdLnBvaW50ZXJJZCA9PSBldmVudC5wb2ludGVySWQgKSB7XG5cblx0XHRcdFx0dGhpcy5fdG91Y2hDdXJyZW50LnNwbGljZSggaSwgMSwgZXZlbnQgKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBBcHBseSBhIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCwgdG8gdGhlIGNhbWVyYSBhbmQgZ2l6bW9zXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0cmFuc2Zvcm1hdGlvbiBPYmplY3QgY29udGFpbmluZyBtYXRyaWNlcyB0byBhcHBseSB0byBjYW1lcmEgYW5kIGdpem1vc1xuXHQgKi9cblx0YXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRyYW5zZm9ybWF0aW9uICkge1xuXG5cdFx0aWYgKCB0cmFuc2Zvcm1hdGlvbi5jYW1lcmEgIT0gbnVsbCApIHtcblxuXHRcdFx0dGhpcy5fbTRfMS5jb3B5KCB0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZSApLnByZW11bHRpcGx5KCB0cmFuc2Zvcm1hdGlvbi5jYW1lcmEgKTtcblx0XHRcdHRoaXMuX200XzEuZGVjb21wb3NlKCB0aGlzLmNhbWVyYS5wb3NpdGlvbiwgdGhpcy5jYW1lcmEucXVhdGVybmlvbiwgdGhpcy5jYW1lcmEuc2NhbGUgKTtcblx0XHRcdHRoaXMuY2FtZXJhLnVwZGF0ZU1hdHJpeCgpO1xuXG5cdFx0XHQvL3VwZGF0ZSBjYW1lcmEgdXAgdmVjdG9yXG5cdFx0XHRpZiAoIHRoaXMuX3N0YXRlID09IFNUQVRFLlJPVEFURSB8fCB0aGlzLl9zdGF0ZSA9PSBTVEFURS5aUk9UQVRFIHx8IHRoaXMuX3N0YXRlID09IFNUQVRFLkFOSU1BVElPTl9ST1RBVEUgKSB7XG5cblx0XHRcdFx0dGhpcy5jYW1lcmEudXAuY29weSggdGhpcy5fdXBTdGF0ZSApLmFwcGx5UXVhdGVybmlvbiggdGhpcy5jYW1lcmEucXVhdGVybmlvbiApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zZm9ybWF0aW9uLmdpem1vcyAhPSBudWxsICkge1xuXG5cdFx0XHR0aGlzLl9tNF8xLmNvcHkoIHRoaXMuX2dpem1vTWF0cml4U3RhdGUgKS5wcmVtdWx0aXBseSggdHJhbnNmb3JtYXRpb24uZ2l6bW9zICk7XG5cdFx0XHR0aGlzLl9tNF8xLmRlY29tcG9zZSggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uLCB0aGlzLl9naXptb3MucXVhdGVybmlvbiwgdGhpcy5fZ2l6bW9zLnNjYWxlICk7XG5cdFx0XHR0aGlzLl9naXptb3MudXBkYXRlTWF0cml4KCk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX3N0YXRlID09IFNUQVRFLlNDQUxFIHx8IHRoaXMuX3N0YXRlID09IFNUQVRFLkZPQ1VTIHx8IHRoaXMuX3N0YXRlID09IFNUQVRFLkFOSU1BVElPTl9GT0NVUyApIHtcblxuXHRcdFx0dGhpcy5fdGJSYWRpdXMgPSB0aGlzLmNhbGN1bGF0ZVRiUmFkaXVzKCB0aGlzLmNhbWVyYSApO1xuXG5cdFx0XHRpZiAoIHRoaXMuYWRqdXN0TmVhckZhciApIHtcblxuXHRcdFx0XHRjb25zdCBjYW1lcmFEaXN0YW5jZSA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXG5cdFx0XHRcdGNvbnN0IGJiID0gbmV3IEJveDMoKTtcblx0XHRcdFx0YmIuc2V0RnJvbU9iamVjdCggdGhpcy5fZ2l6bW9zICk7XG5cdFx0XHRcdGNvbnN0IHNwaGVyZSA9IG5ldyBTcGhlcmUoKTtcblx0XHRcdFx0YmIuZ2V0Qm91bmRpbmdTcGhlcmUoIHNwaGVyZSApO1xuXG5cdFx0XHRcdGNvbnN0IGFkanVzdGVkTmVhclBvc2l0aW9uID0gTWF0aC5tYXgoIHRoaXMuX25lYXJQb3MwLCBzcGhlcmUucmFkaXVzICsgc3BoZXJlLmNlbnRlci5sZW5ndGgoKSApO1xuXHRcdFx0XHRjb25zdCByZWd1bGFyTmVhclBvc2l0aW9uID0gY2FtZXJhRGlzdGFuY2UgLSB0aGlzLl9pbml0aWFsTmVhcjtcblxuXHRcdFx0XHRjb25zdCBtaW5OZWFyUG9zID0gTWF0aC5taW4oIGFkanVzdGVkTmVhclBvc2l0aW9uLCByZWd1bGFyTmVhclBvc2l0aW9uICk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhLm5lYXIgPSBjYW1lcmFEaXN0YW5jZSAtIG1pbk5lYXJQb3M7XG5cblxuXHRcdFx0XHRjb25zdCBhZGp1c3RlZEZhclBvc2l0aW9uID0gTWF0aC5taW4oIHRoaXMuX2ZhclBvczAsIC0gc3BoZXJlLnJhZGl1cyArIHNwaGVyZS5jZW50ZXIubGVuZ3RoKCkgKTtcblx0XHRcdFx0Y29uc3QgcmVndWxhckZhclBvc2l0aW9uID0gY2FtZXJhRGlzdGFuY2UgLSB0aGlzLl9pbml0aWFsRmFyO1xuXG5cdFx0XHRcdGNvbnN0IG1pbkZhclBvcyA9IE1hdGgubWluKCBhZGp1c3RlZEZhclBvc2l0aW9uLCByZWd1bGFyRmFyUG9zaXRpb24gKTtcblx0XHRcdFx0dGhpcy5jYW1lcmEuZmFyID0gY2FtZXJhRGlzdGFuY2UgLSBtaW5GYXJQb3M7XG5cblx0XHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGxldCB1cGRhdGUgPSBmYWxzZTtcblxuXHRcdFx0XHRpZiAoIHRoaXMuY2FtZXJhLm5lYXIgIT0gdGhpcy5faW5pdGlhbE5lYXIgKSB7XG5cblx0XHRcdFx0XHR0aGlzLmNhbWVyYS5uZWFyID0gdGhpcy5faW5pdGlhbE5lYXI7XG5cdFx0XHRcdFx0dXBkYXRlID0gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCB0aGlzLmNhbWVyYS5mYXIgIT0gdGhpcy5faW5pdGlhbEZhciApIHtcblxuXHRcdFx0XHRcdHRoaXMuY2FtZXJhLmZhciA9IHRoaXMuX2luaXRpYWxGYXI7XG5cdFx0XHRcdFx0dXBkYXRlID0gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCB1cGRhdGUgKSB7XG5cblx0XHRcdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGFuZ3VsYXIgc3BlZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHAwIFBvc2l0aW9uIGF0IHQwXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwMSBQb3NpdGlvbiBhdCB0MVxuXHQgKiBAcGFyYW0ge051bWJlcn0gdDAgSW5pdGlhbCB0aW1lIGluIG1pbGxpc2Vjb25kc1xuXHQgKiBAcGFyYW0ge051bWJlcn0gdDEgRW5kaW5nIHRpbWUgaW4gbWlsbGlzZWNvbmRzXG5cdCAqL1xuXHRjYWxjdWxhdGVBbmd1bGFyU3BlZWQgPSAoIHAwLCBwMSwgdDAsIHQxICkgPT4ge1xuXG5cdFx0Y29uc3QgcyA9IHAxIC0gcDA7XG5cdFx0Y29uc3QgdCA9ICggdDEgLSB0MCApIC8gMTAwMDtcblx0XHRpZiAoIHQgPT0gMCApIHtcblxuXHRcdFx0cmV0dXJuIDA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcyAvIHQ7XG5cblx0fTtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludGVyc1xuXHQgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gcDAgVGhlIGZpcnN0IHBvaW50ZXJcblx0ICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IHAxIFRoZSBzZWNvbmQgcG9pbnRlclxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50ZXJzXG5cdCAqL1xuXHRjYWxjdWxhdGVQb2ludGVyc0Rpc3RhbmNlID0gKCBwMCwgcDEgKSA9PiB7XG5cblx0XHRyZXR1cm4gTWF0aC5zcXJ0KCBNYXRoLnBvdyggcDEuY2xpZW50WCAtIHAwLmNsaWVudFgsIDIgKSArIE1hdGgucG93KCBwMS5jbGllbnRZIC0gcDAuY2xpZW50WSwgMiApICk7XG5cblx0fTtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSByb3RhdGlvbiBheGlzIGFzIHRoZSB2ZWN0b3IgcGVycGVuZGljdWxhciBiZXR3ZWVuIHR3byB2ZWN0b3JzXG5cdCAqIEBwYXJhbSB7VmVjdG9yM30gdmVjMSBUaGUgZmlyc3QgdmVjdG9yXG5cdCAqIEBwYXJhbSB7VmVjdG9yM30gdmVjMiBUaGUgc2Vjb25kIHZlY3RvclxuXHQgKiBAcmV0dXJucyB7VmVjdG9yM30gVGhlIG5vcm1hbGl6ZWQgcm90YXRpb24gYXhpc1xuXHQgKi9cblx0Y2FsY3VsYXRlUm90YXRpb25BeGlzID0gKCB2ZWMxLCB2ZWMyICkgPT4ge1xuXG5cdFx0dGhpcy5fcm90YXRpb25NYXRyaXguZXh0cmFjdFJvdGF0aW9uKCB0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZSApO1xuXHRcdHRoaXMuX3F1YXQuc2V0RnJvbVJvdGF0aW9uTWF0cml4KCB0aGlzLl9yb3RhdGlvbk1hdHJpeCApO1xuXG5cdFx0dGhpcy5fcm90YXRpb25BeGlzLmNyb3NzVmVjdG9ycyggdmVjMSwgdmVjMiApLmFwcGx5UXVhdGVybmlvbiggdGhpcy5fcXVhdCApO1xuXHRcdHJldHVybiB0aGlzLl9yb3RhdGlvbkF4aXMubm9ybWFsaXplKCkuY2xvbmUoKTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIHRyYWNrYmFsbCByYWRpdXMgc28gdGhhdCBnaXptbydzIGRpYW1hdGVyIHdpbGwgYmUgMi8zIG9mIHRoZSBtaW5pbXVtIHNpZGUgb2YgdGhlIGNhbWVyYSBmcnVzdHVtXG5cdCAqIEBwYXJhbSB7Q2FtZXJhfSBjYW1lcmFcblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIHRyYWNrYmFsbCByYWRpdXNcblx0ICovXG5cdGNhbGN1bGF0ZVRiUmFkaXVzID0gKCBjYW1lcmEgKSA9PiB7XG5cblx0XHRjb25zdCBkaXN0YW5jZSA9IGNhbWVyYS5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblxuXHRcdGlmICggY2FtZXJhLnR5cGUgPT0gJ1BlcnNwZWN0aXZlQ2FtZXJhJyApIHtcblxuXHRcdFx0Y29uc3QgaGFsZkZvdlYgPSBNYXRoVXRpbHMuREVHMlJBRCAqIGNhbWVyYS5mb3YgKiAwLjU7IC8vdmVydGljYWwgZm92LzIgaW4gcmFkaWFuc1xuXHRcdFx0Y29uc3QgaGFsZkZvdkggPSBNYXRoLmF0YW4oICggY2FtZXJhLmFzcGVjdCApICogTWF0aC50YW4oIGhhbGZGb3ZWICkgKTsgLy9ob3Jpem9udGFsIGZvdi8yIGluIHJhZGlhbnNcblx0XHRcdHJldHVybiBNYXRoLnRhbiggTWF0aC5taW4oIGhhbGZGb3ZWLCBoYWxmRm92SCApICkgKiBkaXN0YW5jZSAqIHRoaXMucmFkaXVzRmFjdG9yO1xuXG5cdFx0fSBlbHNlIGlmICggY2FtZXJhLnR5cGUgPT0gJ09ydGhvZ3JhcGhpY0NhbWVyYScgKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLm1pbiggY2FtZXJhLnRvcCwgY2FtZXJhLnJpZ2h0ICkgKiB0aGlzLnJhZGl1c0ZhY3RvcjtcblxuXHRcdH1cblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBGb2N1cyBvcGVyYXRpb24gY29uc2lzdCBvZiBwb3NpdGlvbmluZyB0aGUgcG9pbnQgb2YgaW50ZXJlc3QgaW4gZnJvbnQgb2YgdGhlIGNhbWVyYSBhbmQgYSBzbGlnaHRseSB6b29tIGluXG5cdCAqIEBwYXJhbSB7VmVjdG9yM30gcG9pbnQgVGhlIHBvaW50IG9mIGludGVyZXN0XG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIFNjYWxlIGZhY3RvclxuXHQgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IEFtb3VudCBvZiBvcGVyYXRpb24gdG8gYmUgY29tcGxldGVkICh1c2VkIGZvciBmb2N1cyBhbmltYXRpb25zLCBkZWZhdWx0IGlzIGNvbXBsZXRlIGZ1bGwgb3BlcmF0aW9uKVxuXHQgKi9cblx0Zm9jdXMgPSAoIHBvaW50LCBzaXplLCBhbW91bnQgPSAxICkgPT4ge1xuXG5cdFx0Ly9tb3ZlIGNlbnRlciBvZiBjYW1lcmEgKGFsb25nIHdpdGggZ2l6bW9zKSB0b3dhcmRzIHBvaW50IG9mIGludGVyZXN0XG5cdFx0X29mZnNldC5jb3B5KCBwb2ludCApLnN1YiggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICkubXVsdGlwbHlTY2FsYXIoIGFtb3VudCApO1xuXHRcdHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4Lm1ha2VUcmFuc2xhdGlvbiggX29mZnNldC54LCBfb2Zmc2V0LnksIF9vZmZzZXQueiApO1xuXG5cdFx0X2dpem1vTWF0cml4U3RhdGVUZW1wLmNvcHkoIHRoaXMuX2dpem1vTWF0cml4U3RhdGUgKTtcblx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLnByZW11bHRpcGx5KCB0aGlzLl90cmFuc2xhdGlvbk1hdHJpeCApO1xuXHRcdHRoaXMuX2dpem1vTWF0cml4U3RhdGUuZGVjb21wb3NlKCB0aGlzLl9naXptb3MucG9zaXRpb24sIHRoaXMuX2dpem1vcy5xdWF0ZXJuaW9uLCB0aGlzLl9naXptb3Muc2NhbGUgKTtcblxuXHRcdF9jYW1lcmFNYXRyaXhTdGF0ZVRlbXAuY29weSggdGhpcy5fY2FtZXJhTWF0cml4U3RhdGUgKTtcblx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZS5wcmVtdWx0aXBseSggdGhpcy5fdHJhbnNsYXRpb25NYXRyaXggKTtcblx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZS5kZWNvbXBvc2UoIHRoaXMuY2FtZXJhLnBvc2l0aW9uLCB0aGlzLmNhbWVyYS5xdWF0ZXJuaW9uLCB0aGlzLmNhbWVyYS5zY2FsZSApO1xuXG5cdFx0Ly9hcHBseSB6b29tXG5cdFx0aWYgKCB0aGlzLmVuYWJsZVpvb20gKSB7XG5cblx0XHRcdHRoaXMuYXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRoaXMuc2NhbGUoIHNpemUsIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLmNvcHkoIF9naXptb01hdHJpeFN0YXRlVGVtcCApO1xuXHRcdHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlLmNvcHkoIF9jYW1lcmFNYXRyaXhTdGF0ZVRlbXAgKTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEcmF3IGEgZ3JpZCBhbmQgYWRkIGl0IHRvIHRoZSBzY2VuZVxuXHQgKi9cblx0ZHJhd0dyaWQgPSAoKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuc2NlbmUgIT0gbnVsbCApIHtcblxuXHRcdFx0Y29uc3QgY29sb3IgPSAweDg4ODg4ODtcblx0XHRcdGNvbnN0IG11bHRpcGxpZXIgPSAzO1xuXHRcdFx0bGV0IHNpemUsIGRpdmlzaW9ucywgbWF4TGVuZ3RoLCB0aWNrO1xuXG5cdFx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdGNvbnN0IHdpZHRoID0gdGhpcy5jYW1lcmEucmlnaHQgLSB0aGlzLmNhbWVyYS5sZWZ0O1xuXHRcdFx0XHRjb25zdCBoZWlnaHQgPSB0aGlzLmNhbWVyYS5ib3R0b20gLSB0aGlzLmNhbWVyYS50b3A7XG5cblx0XHRcdFx0bWF4TGVuZ3RoID0gTWF0aC5tYXgoIHdpZHRoLCBoZWlnaHQgKTtcblx0XHRcdFx0dGljayA9IG1heExlbmd0aCAvIDIwO1xuXG5cdFx0XHRcdHNpemUgPSBtYXhMZW5ndGggLyB0aGlzLmNhbWVyYS56b29tICogbXVsdGlwbGllcjtcblx0XHRcdFx0ZGl2aXNpb25zID0gc2l6ZSAvIHRpY2sgKiB0aGlzLmNhbWVyYS56b29tO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLmNhbWVyYS5pc1BlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdGNvbnN0IGRpc3RhbmNlID0gdGhpcy5jYW1lcmEucG9zaXRpb24uZGlzdGFuY2VUbyggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICk7XG5cdFx0XHRcdGNvbnN0IGhhbGZGb3ZWID0gTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLmNhbWVyYS5mb3YgKiAwLjU7XG5cdFx0XHRcdGNvbnN0IGhhbGZGb3ZIID0gTWF0aC5hdGFuKCAoIHRoaXMuY2FtZXJhLmFzcGVjdCApICogTWF0aC50YW4oIGhhbGZGb3ZWICkgKTtcblxuXHRcdFx0XHRtYXhMZW5ndGggPSBNYXRoLnRhbiggTWF0aC5tYXgoIGhhbGZGb3ZWLCBoYWxmRm92SCApICkgKiBkaXN0YW5jZSAqIDI7XG5cdFx0XHRcdHRpY2sgPSBtYXhMZW5ndGggLyAyMDtcblxuXHRcdFx0XHRzaXplID0gbWF4TGVuZ3RoICogbXVsdGlwbGllcjtcblx0XHRcdFx0ZGl2aXNpb25zID0gc2l6ZSAvIHRpY2s7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0aGlzLl9ncmlkID09IG51bGwgKSB7XG5cblx0XHRcdFx0dGhpcy5fZ3JpZCA9IG5ldyBHcmlkSGVscGVyKCBzaXplLCBkaXZpc2lvbnMsIGNvbG9yLCBjb2xvciApO1xuXHRcdFx0XHR0aGlzLl9ncmlkLnBvc2l0aW9uLmNvcHkoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXHRcdFx0XHR0aGlzLl9ncmlkUG9zaXRpb24uY29weSggdGhpcy5fZ3JpZC5wb3NpdGlvbiApO1xuXHRcdFx0XHR0aGlzLl9ncmlkLnF1YXRlcm5pb24uY29weSggdGhpcy5jYW1lcmEucXVhdGVybmlvbiApO1xuXHRcdFx0XHR0aGlzLl9ncmlkLnJvdGF0ZVgoIE1hdGguUEkgKiAwLjUgKTtcblxuXHRcdFx0XHR0aGlzLnNjZW5lLmFkZCggdGhpcy5fZ3JpZCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIHN0b3AgYW5pbWF0aW9ucyBhbmQgY2xlYW4gc2NlbmVcblx0ICovXG5cdGRpc3Bvc2UgPSAoKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuX2FuaW1hdGlvbklkICE9IC0gMSApIHtcblxuXHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLl9hbmltYXRpb25JZCApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVyZG93bicsIHRoaXMub25Qb2ludGVyRG93biApO1xuXHRcdHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmNhbmNlbCcsIHRoaXMub25Qb2ludGVyQ2FuY2VsICk7XG5cdFx0dGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIHRoaXMub25XaGVlbCApO1xuXHRcdHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCB0aGlzLm9uQ29udGV4dE1lbnUgKTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCB0aGlzLm9uUG9pbnRlck1vdmUgKTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIHRoaXMub25Qb2ludGVyVXAgKTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSApO1xuXG5cdFx0aWYgKCB0aGlzLnNjZW5lICE9PSBudWxsICkgdGhpcy5zY2VuZS5yZW1vdmUoIHRoaXMuX2dpem1vcyApO1xuXHRcdHRoaXMuZGlzcG9zZUdyaWQoKTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiByZW1vdmUgdGhlIGdyaWQgZnJvbSB0aGUgc2NlbmVcblx0ICovXG5cdGRpc3Bvc2VHcmlkID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLl9ncmlkICE9IG51bGwgJiYgdGhpcy5zY2VuZSAhPSBudWxsICkge1xuXG5cdFx0XHR0aGlzLnNjZW5lLnJlbW92ZSggdGhpcy5fZ3JpZCApO1xuXHRcdFx0dGhpcy5fZ3JpZCA9IG51bGw7XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogQ29tcHV0ZSB0aGUgZWFzaW5nIG91dCBjdWJpYyBmdW5jdGlvbiBmb3IgZWFzZSBvdXQgZWZmZWN0IGluIGFuaW1hdGlvblxuXHQgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgYWJzb2x1dGUgcHJvZ3Jlc3Mgb2YgdGhlIGFuaW1hdGlvbiBpbiB0aGUgYm91bmQgb2YgMCAoYmVnaW5uaW5nIG9mIHRoZSkgYW5kIDEgKGVuZGluZyBvZiBhbmltYXRpb24pXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFJlc3VsdCBvZiBlYXNpbmcgb3V0IGN1YmljIGF0IHRpbWUgdFxuXHQgKi9cblx0ZWFzZU91dEN1YmljID0gKCB0ICkgPT4ge1xuXG5cdFx0cmV0dXJuIDEgLSBNYXRoLnBvdyggMSAtIHQsIDMgKTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBNYWtlIHJvdGF0aW9uIGdpem1vcyBtb3JlIG9yIGxlc3MgdmlzaWJsZVxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGlzQWN0aXZlIElmIHRydWUsIG1ha2UgZ2l6bW9zIG1vcmUgdmlzaWJsZVxuXHQgKi9cblx0YWN0aXZhdGVHaXptb3MgPSAoIGlzQWN0aXZlICkgPT4ge1xuXG5cdFx0Y29uc3QgZ2l6bW9YID0gdGhpcy5fZ2l6bW9zLmNoaWxkcmVuWyAwIF07XG5cdFx0Y29uc3QgZ2l6bW9ZID0gdGhpcy5fZ2l6bW9zLmNoaWxkcmVuWyAxIF07XG5cdFx0Y29uc3QgZ2l6bW9aID0gdGhpcy5fZ2l6bW9zLmNoaWxkcmVuWyAyIF07XG5cblx0XHRpZiAoIGlzQWN0aXZlICkge1xuXG5cdFx0XHRnaXptb1gubWF0ZXJpYWwuc2V0VmFsdWVzKCB7IG9wYWNpdHk6IDEgfSApO1xuXHRcdFx0Z2l6bW9ZLm1hdGVyaWFsLnNldFZhbHVlcyggeyBvcGFjaXR5OiAxIH0gKTtcblx0XHRcdGdpem1vWi5tYXRlcmlhbC5zZXRWYWx1ZXMoIHsgb3BhY2l0eTogMSB9ICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRnaXptb1gubWF0ZXJpYWwuc2V0VmFsdWVzKCB7IG9wYWNpdHk6IDAuNiB9ICk7XG5cdFx0XHRnaXptb1kubWF0ZXJpYWwuc2V0VmFsdWVzKCB7IG9wYWNpdHk6IDAuNiB9ICk7XG5cdFx0XHRnaXptb1oubWF0ZXJpYWwuc2V0VmFsdWVzKCB7IG9wYWNpdHk6IDAuNiB9ICk7XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBjdXJzb3IgcG9zaXRpb24gaW4gTkRDXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IEN1cnNvciBob3Jpem9udGFsIGNvb3JkaW5hdGUgd2l0aGluIHRoZSBjYW52YXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgQ3Vyc29yIHZlcnRpY2FsIGNvb3JkaW5hdGUgd2l0aGluIHRoZSBjYW52YXNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgd2hlcmUgdGhlIHJlbmRlcmVyIGRyYXdzIGl0cyBvdXRwdXRcblx0ICogQHJldHVybnMge1ZlY3RvcjJ9IEN1cnNvciBub3JtYWxpemVkIHBvc2l0aW9uIGluc2lkZSB0aGUgY2FudmFzXG5cdCAqL1xuXHRnZXRDdXJzb3JOREMgPSAoIGN1cnNvclgsIGN1cnNvclksIGNhbnZhcyApID0+IHtcblxuXHRcdGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dGhpcy5fdjJfMS5zZXRYKCAoICggY3Vyc29yWCAtIGNhbnZhc1JlY3QubGVmdCApIC8gY2FudmFzUmVjdC53aWR0aCApICogMiAtIDEgKTtcblx0XHR0aGlzLl92Ml8xLnNldFkoICggKCBjYW52YXNSZWN0LmJvdHRvbSAtIGN1cnNvclkgKSAvIGNhbnZhc1JlY3QuaGVpZ2h0ICkgKiAyIC0gMSApO1xuXHRcdHJldHVybiB0aGlzLl92Ml8xLmNsb25lKCk7XG5cblx0fTtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBjdXJzb3IgcG9zaXRpb24gaW5zaWRlIHRoZSBjYW52YXMgeC95IGNvb3JkaW5hdGVzIHdpdGggdGhlIG9yaWdpbiBiZWluZyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHggQ3Vyc29yIGhvcml6b250YWwgY29vcmRpbmF0ZSB3aXRoaW4gdGhlIGNhbnZhc1xuXHQgKiBAcGFyYW0ge051bWJlcn0geSBDdXJzb3IgdmVydGljYWwgY29vcmRpbmF0ZSB3aXRoaW4gdGhlIGNhbnZhc1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjYW52YXMgVGhlIGNhbnZhcyB3aGVyZSB0aGUgcmVuZGVyZXIgZHJhd3MgaXRzIG91dHB1dFxuXHQgKiBAcmV0dXJucyB7VmVjdG9yMn0gQ3Vyc29yIHBvc2l0aW9uIGluc2lkZSB0aGUgY2FudmFzXG5cdCAqL1xuXHRnZXRDdXJzb3JQb3NpdGlvbiA9ICggY3Vyc29yWCwgY3Vyc29yWSwgY2FudmFzICkgPT4ge1xuXG5cdFx0dGhpcy5fdjJfMS5jb3B5KCB0aGlzLmdldEN1cnNvck5EQyggY3Vyc29yWCwgY3Vyc29yWSwgY2FudmFzICkgKTtcblx0XHR0aGlzLl92Ml8xLnggKj0gKCB0aGlzLmNhbWVyYS5yaWdodCAtIHRoaXMuY2FtZXJhLmxlZnQgKSAqIDAuNTtcblx0XHR0aGlzLl92Ml8xLnkgKj0gKCB0aGlzLmNhbWVyYS50b3AgLSB0aGlzLmNhbWVyYS5ib3R0b20gKSAqIDAuNTtcblx0XHRyZXR1cm4gdGhpcy5fdjJfMS5jbG9uZSgpO1xuXG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgY2FtZXJhIHRvIGJlIGNvbnRyb2xsZWRcblx0ICogQHBhcmFtIHtDYW1lcmF9IGNhbWVyYSBUaGUgdmlydHVhbCBjYW1lcmEgdG8gYmUgY29udHJvbGxlZFxuXHQgKi9cblx0c2V0Q2FtZXJhID0gKCBjYW1lcmEgKSA9PiB7XG5cblx0XHRjYW1lcmEubG9va0F0KCB0aGlzLnRhcmdldCApO1xuXHRcdGNhbWVyYS51cGRhdGVNYXRyaXgoKTtcblxuXHRcdC8vc2V0dGluZyBzdGF0ZVxuXHRcdGlmICggY2FtZXJhLnR5cGUgPT0gJ1BlcnNwZWN0aXZlQ2FtZXJhJyApIHtcblxuXHRcdFx0dGhpcy5fZm92MCA9IGNhbWVyYS5mb3Y7XG5cdFx0XHR0aGlzLl9mb3ZTdGF0ZSA9IGNhbWVyYS5mb3Y7XG5cblx0XHR9XG5cblx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZTAuY29weSggY2FtZXJhLm1hdHJpeCApO1xuXHRcdHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlLmNvcHkoIHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlMCApO1xuXHRcdHRoaXMuX2NhbWVyYVByb2plY3Rpb25TdGF0ZS5jb3B5KCBjYW1lcmEucHJvamVjdGlvbk1hdHJpeCApO1xuXHRcdHRoaXMuX3pvb20wID0gY2FtZXJhLnpvb207XG5cdFx0dGhpcy5fem9vbVN0YXRlID0gdGhpcy5fem9vbTA7XG5cblx0XHR0aGlzLl9pbml0aWFsTmVhciA9IGNhbWVyYS5uZWFyO1xuXHRcdHRoaXMuX25lYXJQb3MwID0gY2FtZXJhLnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMudGFyZ2V0ICkgLSBjYW1lcmEubmVhcjtcblx0XHR0aGlzLl9uZWFyUG9zID0gdGhpcy5faW5pdGlhbE5lYXI7XG5cblx0XHR0aGlzLl9pbml0aWFsRmFyID0gY2FtZXJhLmZhcjtcblx0XHR0aGlzLl9mYXJQb3MwID0gY2FtZXJhLnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMudGFyZ2V0ICkgLSBjYW1lcmEuZmFyO1xuXHRcdHRoaXMuX2ZhclBvcyA9IHRoaXMuX2luaXRpYWxGYXI7XG5cblx0XHR0aGlzLl91cDAuY29weSggY2FtZXJhLnVwICk7XG5cdFx0dGhpcy5fdXBTdGF0ZS5jb3B5KCBjYW1lcmEudXAgKTtcblxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuXHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuXHRcdC8vbWFraW5nIGdpem1vc1xuXHRcdHRoaXMuX3RiUmFkaXVzID0gdGhpcy5jYWxjdWxhdGVUYlJhZGl1cyggY2FtZXJhICk7XG5cdFx0dGhpcy5tYWtlR2l6bW9zKCB0aGlzLnRhcmdldCwgdGhpcy5fdGJSYWRpdXMgKTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgZ2l6bW9zIHZpc2liaWxpdHlcblx0ICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZSBWYWx1ZSBvZiBnaXptb3MgdmlzaWJpbGl0eVxuXHQgKi9cblx0c2V0R2l6bW9zVmlzaWJsZSggdmFsdWUgKSB7XG5cblx0XHR0aGlzLl9naXptb3MudmlzaWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgZ2l6bW9zIHJhZGl1cyBmYWN0b3IgYW5kIHJlZHJhd3MgZ2l6bW9zXG5cdCAqIEBwYXJhbSB7RmxvYXR9IHZhbHVlIFZhbHVlIG9mIHJhZGl1cyBmYWN0b3Jcblx0ICovXG5cdHNldFRiUmFkaXVzKCB2YWx1ZSApIHtcblxuXHRcdHRoaXMucmFkaXVzRmFjdG9yID0gdmFsdWU7XG5cdFx0dGhpcy5fdGJSYWRpdXMgPSB0aGlzLmNhbGN1bGF0ZVRiUmFkaXVzKCB0aGlzLmNhbWVyYSApO1xuXG5cdFx0Y29uc3QgY3VydmUgPSBuZXcgRWxsaXBzZUN1cnZlKCAwLCAwLCB0aGlzLl90YlJhZGl1cywgdGhpcy5fdGJSYWRpdXMgKTtcblx0XHRjb25zdCBwb2ludHMgPSBjdXJ2ZS5nZXRQb2ludHMoIHRoaXMuX2N1cnZlUHRzICk7XG5cdFx0Y29uc3QgY3VydmVHZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpLnNldEZyb21Qb2ludHMoIHBvaW50cyApO1xuXG5cblx0XHRmb3IgKCBjb25zdCBnaXptbyBpbiB0aGlzLl9naXptb3MuY2hpbGRyZW4gKSB7XG5cblx0XHRcdHRoaXMuX2dpem1vcy5jaGlsZHJlblsgZ2l6bW8gXS5nZW9tZXRyeSA9IGN1cnZlR2VvbWV0cnk7XG5cblx0XHR9XG5cblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgcm90YXRpb24gZ2l6bW9zIG1hdGNoaW5nIHRyYWNrYmFsbCBjZW50ZXIgYW5kIHJhZGl1c1xuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IHRiQ2VudGVyIFRoZSB0cmFja2JhbGwgY2VudGVyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0YlJhZGl1cyBUaGUgdHJhY2tiYWxsIHJhZGl1c1xuXHQgKi9cblx0bWFrZUdpem1vcyA9ICggdGJDZW50ZXIsIHRiUmFkaXVzICkgPT4ge1xuXG5cdFx0Y29uc3QgY3VydmUgPSBuZXcgRWxsaXBzZUN1cnZlKCAwLCAwLCB0YlJhZGl1cywgdGJSYWRpdXMgKTtcblx0XHRjb25zdCBwb2ludHMgPSBjdXJ2ZS5nZXRQb2ludHMoIHRoaXMuX2N1cnZlUHRzICk7XG5cblx0XHQvL2dlb21ldHJ5XG5cdFx0Y29uc3QgY3VydmVHZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpLnNldEZyb21Qb2ludHMoIHBvaW50cyApO1xuXG5cdFx0Ly9tYXRlcmlhbFxuXHRcdGNvbnN0IGN1cnZlTWF0ZXJpYWxYID0gbmV3IExpbmVCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweGZmODA4MCwgZm9nOiBmYWxzZSwgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6IDAuNiB9ICk7XG5cdFx0Y29uc3QgY3VydmVNYXRlcmlhbFkgPSBuZXcgTGluZUJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4ODBmZjgwLCBmb2c6IGZhbHNlLCB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMC42IH0gKTtcblx0XHRjb25zdCBjdXJ2ZU1hdGVyaWFsWiA9IG5ldyBMaW5lQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHg4MDgwZmYsIGZvZzogZmFsc2UsIHRyYW5zcGFyZW50OiB0cnVlLCBvcGFjaXR5OiAwLjYgfSApO1xuXG5cdFx0Ly9saW5lXG5cdFx0Y29uc3QgZ2l6bW9YID0gbmV3IExpbmUoIGN1cnZlR2VvbWV0cnksIGN1cnZlTWF0ZXJpYWxYICk7XG5cdFx0Y29uc3QgZ2l6bW9ZID0gbmV3IExpbmUoIGN1cnZlR2VvbWV0cnksIGN1cnZlTWF0ZXJpYWxZICk7XG5cdFx0Y29uc3QgZ2l6bW9aID0gbmV3IExpbmUoIGN1cnZlR2VvbWV0cnksIGN1cnZlTWF0ZXJpYWxaICk7XG5cblx0XHRjb25zdCByb3RhdGlvbiA9IE1hdGguUEkgKiAwLjU7XG5cdFx0Z2l6bW9YLnJvdGF0aW9uLnggPSByb3RhdGlvbjtcblx0XHRnaXptb1kucm90YXRpb24ueSA9IHJvdGF0aW9uO1xuXG5cblx0XHQvL3NldHRpbmcgc3RhdGVcblx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlMC5pZGVudGl0eSgpLnNldFBvc2l0aW9uKCB0YkNlbnRlciApO1xuXHRcdHRoaXMuX2dpem1vTWF0cml4U3RhdGUuY29weSggdGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZTAgKTtcblxuXHRcdGlmICggdGhpcy5jYW1lcmEuem9vbSAhPSAxICkge1xuXG5cdFx0XHQvL2FkYXB0IGdpem1vcyBzaXplIHRvIGNhbWVyYSB6b29tXG5cdFx0XHRjb25zdCBzaXplID0gMSAvIHRoaXMuY2FtZXJhLnpvb207XG5cdFx0XHR0aGlzLl9zY2FsZU1hdHJpeC5tYWtlU2NhbGUoIHNpemUsIHNpemUsIHNpemUgKTtcblx0XHRcdHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4Lm1ha2VUcmFuc2xhdGlvbiggLSB0YkNlbnRlci54LCAtIHRiQ2VudGVyLnksIC0gdGJDZW50ZXIueiApO1xuXG5cdFx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLnByZW11bHRpcGx5KCB0aGlzLl90cmFuc2xhdGlvbk1hdHJpeCApLnByZW11bHRpcGx5KCB0aGlzLl9zY2FsZU1hdHJpeCApO1xuXHRcdFx0dGhpcy5fdHJhbnNsYXRpb25NYXRyaXgubWFrZVRyYW5zbGF0aW9uKCB0YkNlbnRlci54LCB0YkNlbnRlci55LCB0YkNlbnRlci56ICk7XG5cdFx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLnByZW11bHRpcGx5KCB0aGlzLl90cmFuc2xhdGlvbk1hdHJpeCApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5kZWNvbXBvc2UoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiwgdGhpcy5fZ2l6bW9zLnF1YXRlcm5pb24sIHRoaXMuX2dpem1vcy5zY2FsZSApO1xuXG5cdFx0dGhpcy5fZ2l6bW9zLmNsZWFyKCk7XG5cblx0XHR0aGlzLl9naXptb3MuYWRkKCBnaXptb1ggKTtcblx0XHR0aGlzLl9naXptb3MuYWRkKCBnaXptb1kgKTtcblx0XHR0aGlzLl9naXptb3MuYWRkKCBnaXptb1ogKTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBQZXJmb3JtIGFuaW1hdGlvbiBmb3IgZm9jdXMgb3BlcmF0aW9uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lIEluc3RhbnQgaW4gd2hpY2ggdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYXMgcGVyZm9ybWFuY2Uubm93KClcblx0ICogQHBhcmFtIHtWZWN0b3IzfSBwb2ludCBQb2ludCBvZiBpbnRlcmVzdCBmb3IgZm9jdXMgb3BlcmF0aW9uXG5cdCAqIEBwYXJhbSB7TWF0cml4NH0gY2FtZXJhTWF0cml4IENhbWVyYSBtYXRyaXhcblx0ICogQHBhcmFtIHtNYXRyaXg0fSBnaXptb01hdHJpeCBHaXptb3MgbWF0cml4XG5cdCAqL1xuXHRvbkZvY3VzQW5pbSA9ICggdGltZSwgcG9pbnQsIGNhbWVyYU1hdHJpeCwgZ2l6bW9NYXRyaXggKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuX3RpbWVTdGFydCA9PSAtIDEgKSB7XG5cblx0XHRcdC8vYW5pbWF0aW9uIHN0YXJ0XG5cdFx0XHR0aGlzLl90aW1lU3RhcnQgPSB0aW1lO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9zdGF0ZSA9PSBTVEFURS5BTklNQVRJT05fRk9DVVMgKSB7XG5cblx0XHRcdGNvbnN0IGRlbHRhVGltZSA9IHRpbWUgLSB0aGlzLl90aW1lU3RhcnQ7XG5cdFx0XHRjb25zdCBhbmltVGltZSA9IGRlbHRhVGltZSAvIHRoaXMuZm9jdXNBbmltYXRpb25UaW1lO1xuXG5cdFx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLmNvcHkoIGdpem1vTWF0cml4ICk7XG5cblx0XHRcdGlmICggYW5pbVRpbWUgPj0gMSApIHtcblxuXHRcdFx0XHQvL2FuaW1hdGlvbiBlbmRcblxuXHRcdFx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLmRlY29tcG9zZSggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uLCB0aGlzLl9naXptb3MucXVhdGVybmlvbiwgdGhpcy5fZ2l6bW9zLnNjYWxlICk7XG5cblx0XHRcdFx0dGhpcy5mb2N1cyggcG9pbnQsIHRoaXMuc2NhbGVGYWN0b3IgKTtcblxuXHRcdFx0XHR0aGlzLl90aW1lU3RhcnQgPSAtIDE7XG5cdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuSURMRSwgZmFsc2UgKTtcblx0XHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnN0IGFtb3VudCA9IHRoaXMuZWFzZU91dEN1YmljKCBhbmltVGltZSApO1xuXHRcdFx0XHRjb25zdCBzaXplID0gKCAoIDEgLSBhbW91bnQgKSArICggdGhpcy5zY2FsZUZhY3RvciAqIGFtb3VudCApICk7XG5cblx0XHRcdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5kZWNvbXBvc2UoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiwgdGhpcy5fZ2l6bW9zLnF1YXRlcm5pb24sIHRoaXMuX2dpem1vcy5zY2FsZSApO1xuXHRcdFx0XHR0aGlzLmZvY3VzKCBwb2ludCwgc2l6ZSwgYW1vdW50ICk7XG5cblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuX2FuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggZnVuY3Rpb24gKCB0ICkge1xuXG5cdFx0XHRcdFx0c2VsZi5vbkZvY3VzQW5pbSggdCwgcG9pbnQsIGNhbWVyYU1hdHJpeCwgZ2l6bW9NYXRyaXguY2xvbmUoKSApO1xuXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly9pbnRlcnJ1cHQgYW5pbWF0aW9uXG5cblx0XHRcdHRoaXMuX2FuaW1hdGlvbklkID0gLSAxO1xuXHRcdFx0dGhpcy5fdGltZVN0YXJ0ID0gLSAxO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0LyoqXG5cdCAqIFBlcmZvcm0gYW5pbWF0aW9uIGZvciByb3RhdGlvbiBvcGVyYXRpb25cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHRpbWUgSW5zdGFudCBpbiB3aGljaCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhcyBwZXJmb3JtYW5jZS5ub3coKVxuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IHJvdGF0aW9uQXhpcyBSb3RhdGlvbiBheGlzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3MCBJbml0aWFsIGFuZ3VsYXIgdmVsb2NpdHlcblx0ICovXG5cdG9uUm90YXRpb25BbmltID0gKCB0aW1lLCByb3RhdGlvbkF4aXMsIHcwICkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLl90aW1lU3RhcnQgPT0gLSAxICkge1xuXG5cdFx0XHQvL2FuaW1hdGlvbiBzdGFydFxuXHRcdFx0dGhpcy5fYW5nbGVQcmV2ID0gMDtcblx0XHRcdHRoaXMuX2FuZ2xlQ3VycmVudCA9IDA7XG5cdFx0XHR0aGlzLl90aW1lU3RhcnQgPSB0aW1lO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9zdGF0ZSA9PSBTVEFURS5BTklNQVRJT05fUk9UQVRFICkge1xuXG5cdFx0XHQvL3cgPSB3MCArIGFscGhhICogdFxuXHRcdFx0Y29uc3QgZGVsdGFUaW1lID0gKCB0aW1lIC0gdGhpcy5fdGltZVN0YXJ0ICkgLyAxMDAwO1xuXHRcdFx0Y29uc3QgdyA9IHcwICsgKCAoIC0gdGhpcy5kYW1waW5nRmFjdG9yICkgKiBkZWx0YVRpbWUgKTtcblxuXHRcdFx0aWYgKCB3ID4gMCApIHtcblxuXHRcdFx0XHQvL3RldGhhID0gMC41ICogYWxwaGEgKiB0XjIgKyB3MCAqIHQgKyB0ZXRoYTBcblx0XHRcdFx0dGhpcy5fYW5nbGVDdXJyZW50ID0gMC41ICogKCAtIHRoaXMuZGFtcGluZ0ZhY3RvciApICogTWF0aC5wb3coIGRlbHRhVGltZSwgMiApICsgdzAgKiBkZWx0YVRpbWUgKyAwO1xuXHRcdFx0XHR0aGlzLmFwcGx5VHJhbnNmb3JtTWF0cml4KCB0aGlzLnJvdGF0ZSggcm90YXRpb25BeGlzLCB0aGlzLl9hbmdsZUN1cnJlbnQgKSApO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0dGhpcy5fYW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBmdW5jdGlvbiAoIHQgKSB7XG5cblx0XHRcdFx0XHRzZWxmLm9uUm90YXRpb25BbmltKCB0LCByb3RhdGlvbkF4aXMsIHcwICk7XG5cblx0XHRcdFx0fSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHRoaXMuX2FuaW1hdGlvbklkID0gLSAxO1xuXHRcdFx0XHR0aGlzLl90aW1lU3RhcnQgPSAtIDE7XG5cblx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXHRcdFx0XHR0aGlzLmFjdGl2YXRlR2l6bW9zKCBmYWxzZSApO1xuXG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vaW50ZXJydXB0IGFuaW1hdGlvblxuXG5cdFx0XHR0aGlzLl9hbmltYXRpb25JZCA9IC0gMTtcblx0XHRcdHRoaXMuX3RpbWVTdGFydCA9IC0gMTtcblxuXHRcdFx0aWYgKCB0aGlzLl9zdGF0ZSAhPSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH07XG5cblxuXHQvKipcblx0ICogUGVyZm9ybSBwYW4gb3BlcmF0aW9uIG1vdmluZyBjYW1lcmEgYmV0d2VlbiB0d28gcG9pbnRzXG5cdCAqIEBwYXJhbSB7VmVjdG9yM30gcDAgSW5pdGlhbCBwb2ludFxuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IHAxIEVuZGluZyBwb2ludFxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGFkanVzdCBJZiBtb3ZlbWVudCBzaG91bGQgYmUgYWRqdXN0ZWQgY29uc2lkZXJpbmcgY2FtZXJhIGRpc3RhbmNlIChQZXJzcGVjdGl2ZSBvbmx5KVxuXHQgKi9cblx0cGFuID0gKCBwMCwgcDEsIGFkanVzdCA9IGZhbHNlICkgPT4ge1xuXG5cdFx0Y29uc3QgbW92ZW1lbnQgPSBwMC5jbG9uZSgpLnN1YiggcDEgKTtcblxuXHRcdGlmICggdGhpcy5jYW1lcmEuaXNPcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdC8vYWRqdXN0IG1vdmVtZW50IGFtb3VudFxuXHRcdFx0bW92ZW1lbnQubXVsdGlwbHlTY2FsYXIoIDEgLyB0aGlzLmNhbWVyYS56b29tICk7XG5cblx0XHR9IGVsc2UgaWYgKCB0aGlzLmNhbWVyYS5pc1BlcnNwZWN0aXZlQ2FtZXJhICYmIGFkanVzdCApIHtcblxuXHRcdFx0Ly9hZGp1c3QgbW92ZW1lbnQgYW1vdW50XG5cdFx0XHR0aGlzLl92M18xLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fY2FtZXJhTWF0cml4U3RhdGUwICk7XHQvL2NhbWVyYSdzIGluaXRpYWwgcG9zaXRpb25cblx0XHRcdHRoaXMuX3YzXzIuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLl9naXptb01hdHJpeFN0YXRlMCApO1x0Ly9naXptbydzIGluaXRpYWwgcG9zaXRpb25cblx0XHRcdGNvbnN0IGRpc3RhbmNlRmFjdG9yID0gdGhpcy5fdjNfMS5kaXN0YW5jZVRvKCB0aGlzLl92M18yICkgLyB0aGlzLmNhbWVyYS5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblx0XHRcdG1vdmVtZW50Lm11bHRpcGx5U2NhbGFyKCAxIC8gZGlzdGFuY2VGYWN0b3IgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMuX3YzXzEuc2V0KCBtb3ZlbWVudC54LCBtb3ZlbWVudC55LCAwICkuYXBwbHlRdWF0ZXJuaW9uKCB0aGlzLmNhbWVyYS5xdWF0ZXJuaW9uICk7XG5cblx0XHR0aGlzLl9tNF8xLm1ha2VUcmFuc2xhdGlvbiggdGhpcy5fdjNfMS54LCB0aGlzLl92M18xLnksIHRoaXMuX3YzXzEueiApO1xuXG5cdFx0dGhpcy5zZXRUcmFuc2Zvcm1hdGlvbk1hdHJpY2VzKCB0aGlzLl9tNF8xLCB0aGlzLl9tNF8xICk7XG5cdFx0cmV0dXJuIF90cmFuc2Zvcm1hdGlvbjtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXNldCB0cmFja2JhbGxcblx0ICovXG5cdHJlc2V0ID0gKCkgPT4ge1xuXG5cdFx0dGhpcy5jYW1lcmEuem9vbSA9IHRoaXMuX3pvb20wO1xuXG5cdFx0aWYgKCB0aGlzLmNhbWVyYS5pc1BlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHR0aGlzLmNhbWVyYS5mb3YgPSB0aGlzLl9mb3YwO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5jYW1lcmEubmVhciA9IHRoaXMuX25lYXJQb3M7XG5cdFx0dGhpcy5jYW1lcmEuZmFyID0gdGhpcy5fZmFyUG9zO1xuXHRcdHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlLmNvcHkoIHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlMCApO1xuXHRcdHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlLmRlY29tcG9zZSggdGhpcy5jYW1lcmEucG9zaXRpb24sIHRoaXMuY2FtZXJhLnF1YXRlcm5pb24sIHRoaXMuY2FtZXJhLnNjYWxlICk7XG5cdFx0dGhpcy5jYW1lcmEudXAuY29weSggdGhpcy5fdXAwICk7XG5cblx0XHR0aGlzLmNhbWVyYS51cGRhdGVNYXRyaXgoKTtcblx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLmNvcHkoIHRoaXMuX2dpem1vTWF0cml4U3RhdGUwICk7XG5cdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZTAuZGVjb21wb3NlKCB0aGlzLl9naXptb3MucG9zaXRpb24sIHRoaXMuX2dpem1vcy5xdWF0ZXJuaW9uLCB0aGlzLl9naXptb3Muc2NhbGUgKTtcblx0XHR0aGlzLl9naXptb3MudXBkYXRlTWF0cml4KCk7XG5cblx0XHR0aGlzLl90YlJhZGl1cyA9IHRoaXMuY2FsY3VsYXRlVGJSYWRpdXMoIHRoaXMuY2FtZXJhICk7XG5cdFx0dGhpcy5tYWtlR2l6bW9zKCB0aGlzLl9naXptb3MucG9zaXRpb24sIHRoaXMuX3RiUmFkaXVzICk7XG5cblx0XHR0aGlzLmNhbWVyYS5sb29rQXQoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXG5cdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSb3RhdGUgdGhlIGNhbWVyYSBhcm91bmQgYW4gYXhpcyBwYXNzaW5nIGJ5IHRyYWNrYmFsbCdzIGNlbnRlclxuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IGF4aXMgUm90YXRpb24gYXhpc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gYW5nbGUgQW5nbGUgaW4gcmFkaWFuc1xuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBPYmplY3Qgd2l0aCAnY2FtZXJhJyBmaWVsZCBjb250YWluaW5nIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCByZXN1bHRpbmcgZnJvbSB0aGUgb3BlcmF0aW9uIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGNhbWVyYVxuXHQgKi9cblx0cm90YXRlID0gKCBheGlzLCBhbmdsZSApID0+IHtcblxuXHRcdGNvbnN0IHBvaW50ID0gdGhpcy5fZ2l6bW9zLnBvc2l0aW9uOyAvL3JvdGF0aW9uIGNlbnRlclxuXHRcdHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4Lm1ha2VUcmFuc2xhdGlvbiggLSBwb2ludC54LCAtIHBvaW50LnksIC0gcG9pbnQueiApO1xuXHRcdHRoaXMuX3JvdGF0aW9uTWF0cml4Lm1ha2VSb3RhdGlvbkF4aXMoIGF4aXMsIC0gYW5nbGUgKTtcblxuXHRcdC8vcm90YXRlIGNhbWVyYVxuXHRcdHRoaXMuX200XzEubWFrZVRyYW5zbGF0aW9uKCBwb2ludC54LCBwb2ludC55LCBwb2ludC56ICk7XG5cdFx0dGhpcy5fbTRfMS5tdWx0aXBseSggdGhpcy5fcm90YXRpb25NYXRyaXggKTtcblx0XHR0aGlzLl9tNF8xLm11bHRpcGx5KCB0aGlzLl90cmFuc2xhdGlvbk1hdHJpeCApO1xuXG5cdFx0dGhpcy5zZXRUcmFuc2Zvcm1hdGlvbk1hdHJpY2VzKCB0aGlzLl9tNF8xICk7XG5cblx0XHRyZXR1cm4gX3RyYW5zZm9ybWF0aW9uO1xuXG5cdH07XG5cblx0Y29weVN0YXRlID0gKCkgPT4ge1xuXG5cdFx0bGV0IHN0YXRlO1xuXHRcdGlmICggdGhpcy5jYW1lcmEuaXNPcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHN0YXRlID0gSlNPTi5zdHJpbmdpZnkoIHsgYXJjYmFsbFN0YXRlOiB7XG5cblx0XHRcdFx0Y2FtZXJhRmFyOiB0aGlzLmNhbWVyYS5mYXIsXG5cdFx0XHRcdGNhbWVyYU1hdHJpeDogdGhpcy5jYW1lcmEubWF0cml4LFxuXHRcdFx0XHRjYW1lcmFOZWFyOiB0aGlzLmNhbWVyYS5uZWFyLFxuXHRcdFx0XHRjYW1lcmFVcDogdGhpcy5jYW1lcmEudXAsXG5cdFx0XHRcdGNhbWVyYVpvb206IHRoaXMuY2FtZXJhLnpvb20sXG5cdFx0XHRcdGdpem1vTWF0cml4OiB0aGlzLl9naXptb3MubWF0cml4XG5cblx0XHRcdH0gfSApO1xuXG5cdFx0fSBlbHNlIGlmICggdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c3RhdGUgPSBKU09OLnN0cmluZ2lmeSggeyBhcmNiYWxsU3RhdGU6IHtcblx0XHRcdFx0Y2FtZXJhRmFyOiB0aGlzLmNhbWVyYS5mYXIsXG5cdFx0XHRcdGNhbWVyYUZvdjogdGhpcy5jYW1lcmEuZm92LFxuXHRcdFx0XHRjYW1lcmFNYXRyaXg6IHRoaXMuY2FtZXJhLm1hdHJpeCxcblx0XHRcdFx0Y2FtZXJhTmVhcjogdGhpcy5jYW1lcmEubmVhcixcblx0XHRcdFx0Y2FtZXJhVXA6IHRoaXMuY2FtZXJhLnVwLFxuXHRcdFx0XHRjYW1lcmFab29tOiB0aGlzLmNhbWVyYS56b29tLFxuXHRcdFx0XHRnaXptb01hdHJpeDogdGhpcy5fZ2l6bW9zLm1hdHJpeFxuXG5cdFx0XHR9IH0gKTtcblxuXHRcdH1cblxuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCBzdGF0ZSApO1xuXG5cdH07XG5cblx0cGFzdGVTdGF0ZSA9ICgpID0+IHtcblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKS50aGVuKCBmdW5jdGlvbiByZXNvbHZlZCggdmFsdWUgKSB7XG5cblx0XHRcdHNlbGYuc2V0U3RhdGVGcm9tSlNPTiggdmFsdWUgKTtcblxuXHRcdH0gKTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTYXZlIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjb250cm9sLiBUaGlzIGNhbiBsYXRlciBiZSByZWNvdmVyIHdpdGggLnJlc2V0XG5cdCAqL1xuXHRzYXZlU3RhdGUgPSAoKSA9PiB7XG5cblx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZTAuY29weSggdGhpcy5jYW1lcmEubWF0cml4ICk7XG5cdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZTAuY29weSggdGhpcy5fZ2l6bW9zLm1hdHJpeCApO1xuXHRcdHRoaXMuX25lYXJQb3MgPSB0aGlzLmNhbWVyYS5uZWFyO1xuXHRcdHRoaXMuX2ZhclBvcyA9IHRoaXMuY2FtZXJhLmZhcjtcblx0XHR0aGlzLl96b29tMCA9IHRoaXMuY2FtZXJhLnpvb207XG5cdFx0dGhpcy5fdXAwLmNvcHkoIHRoaXMuY2FtZXJhLnVwICk7XG5cblx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHRoaXMuX2ZvdjAgPSB0aGlzLmNhbWVyYS5mb3Y7XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogUGVyZm9ybSB1bmlmb3JtIHNjYWxlIG9wZXJhdGlvbiBhcm91bmQgYSBnaXZlbiBwb2ludFxuXHQgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBTY2FsZSBmYWN0b3Jcblx0ICogQHBhcmFtIHtWZWN0b3IzfSBwb2ludCBQb2ludCBhcm91bmQgd2hpY2ggc2NhbGVcblx0ICogQHBhcmFtIHtCb29sZWFufSBzY2FsZUdpem1vcyBJZiBnaXptb3Mgc2hvdWxkIGJlIHNjYWxlZCAoUGVyc3BlY3RpdmUgb25seSlcblx0ICogQHJldHVybnMge09iamVjdH0gT2JqZWN0IHdpdGggJ2NhbWVyYScgYW5kICdnaXptbycgZmllbGRzIGNvbnRhaW5pbmcgdHJhbnNmb3JtYXRpb24gbWF0cmljZXMgcmVzdWx0aW5nIGZyb20gdGhlIG9wZXJhdGlvbiB0byBiZSBhcHBsaWVkIHRvIHRoZSBjYW1lcmEgYW5kIGdpem1vc1xuXHQgKi9cblx0c2NhbGUgPSAoIHNpemUsIHBvaW50LCBzY2FsZUdpem1vcyA9IHRydWUgKSA9PiB7XG5cblx0XHRfc2NhbGVQb2ludFRlbXAuY29weSggcG9pbnQgKTtcblx0XHRsZXQgc2l6ZUludmVyc2UgPSAxIC8gc2l6ZTtcblxuXHRcdGlmICggdGhpcy5jYW1lcmEuaXNPcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdC8vY2FtZXJhIHpvb21cblx0XHRcdHRoaXMuY2FtZXJhLnpvb20gPSB0aGlzLl96b29tU3RhdGU7XG5cdFx0XHR0aGlzLmNhbWVyYS56b29tICo9IHNpemU7XG5cblx0XHRcdC8vY2hlY2sgbWluIGFuZCBtYXggem9vbVxuXHRcdFx0aWYgKCB0aGlzLmNhbWVyYS56b29tID4gdGhpcy5tYXhab29tICkge1xuXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnpvb20gPSB0aGlzLm1heFpvb207XG5cdFx0XHRcdHNpemVJbnZlcnNlID0gdGhpcy5fem9vbVN0YXRlIC8gdGhpcy5tYXhab29tO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLmNhbWVyYS56b29tIDwgdGhpcy5taW5ab29tICkge1xuXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnpvb20gPSB0aGlzLm1pblpvb207XG5cdFx0XHRcdHNpemVJbnZlcnNlID0gdGhpcy5fem9vbVN0YXRlIC8gdGhpcy5taW5ab29tO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuXHRcdFx0dGhpcy5fdjNfMS5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2dpem1vTWF0cml4U3RhdGUgKTtcdC8vZ2l6bW9zIHBvc2l0aW9uXG5cblx0XHRcdC8vc2NhbGUgZ2l6bW9zIHNvIHRoZXkgYXBwZWFyIGluIHRoZSBzYW1lIHNwb3QgaGF2aW5nIHRoZSBzYW1lIGRpbWVuc2lvblxuXHRcdFx0dGhpcy5fc2NhbGVNYXRyaXgubWFrZVNjYWxlKCBzaXplSW52ZXJzZSwgc2l6ZUludmVyc2UsIHNpemVJbnZlcnNlICk7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGlvbk1hdHJpeC5tYWtlVHJhbnNsYXRpb24oIC0gdGhpcy5fdjNfMS54LCAtIHRoaXMuX3YzXzEueSwgLSB0aGlzLl92M18xLnogKTtcblxuXHRcdFx0dGhpcy5fbTRfMi5tYWtlVHJhbnNsYXRpb24oIHRoaXMuX3YzXzEueCwgdGhpcy5fdjNfMS55LCB0aGlzLl92M18xLnogKS5tdWx0aXBseSggdGhpcy5fc2NhbGVNYXRyaXggKTtcblx0XHRcdHRoaXMuX200XzIubXVsdGlwbHkoIHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4ICk7XG5cblxuXHRcdFx0Ly9tb3ZlIGNhbWVyYSBhbmQgZ2l6bW9zIHRvIG9idGFpbiBwaW5jaCBlZmZlY3Rcblx0XHRcdF9zY2FsZVBvaW50VGVtcC5zdWIoIHRoaXMuX3YzXzEgKTtcblxuXHRcdFx0Y29uc3QgYW1vdW50ID0gX3NjYWxlUG9pbnRUZW1wLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoIHNpemVJbnZlcnNlICk7XG5cdFx0XHRfc2NhbGVQb2ludFRlbXAuc3ViKCBhbW91bnQgKTtcblxuXHRcdFx0dGhpcy5fbTRfMS5tYWtlVHJhbnNsYXRpb24oIF9zY2FsZVBvaW50VGVtcC54LCBfc2NhbGVQb2ludFRlbXAueSwgX3NjYWxlUG9pbnRUZW1wLnogKTtcblx0XHRcdHRoaXMuX200XzIucHJlbXVsdGlwbHkoIHRoaXMuX200XzEgKTtcblxuXHRcdFx0dGhpcy5zZXRUcmFuc2Zvcm1hdGlvbk1hdHJpY2VzKCB0aGlzLl9tNF8xLCB0aGlzLl9tNF8yICk7XG5cdFx0XHRyZXR1cm4gX3RyYW5zZm9ybWF0aW9uO1xuXG5cdFx0fSBlbHNlIGlmICggdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0dGhpcy5fdjNfMS5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlICk7XG5cdFx0XHR0aGlzLl92M18yLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZSApO1xuXG5cdFx0XHQvL21vdmUgY2FtZXJhXG5cdFx0XHRsZXQgZGlzdGFuY2UgPSB0aGlzLl92M18xLmRpc3RhbmNlVG8oIF9zY2FsZVBvaW50VGVtcCApO1xuXHRcdFx0bGV0IGFtb3VudCA9IGRpc3RhbmNlIC0gKCBkaXN0YW5jZSAqIHNpemVJbnZlcnNlICk7XG5cblx0XHRcdC8vY2hlY2sgbWluIGFuZCBtYXggZGlzdGFuY2Vcblx0XHRcdGNvbnN0IG5ld0Rpc3RhbmNlID0gZGlzdGFuY2UgLSBhbW91bnQ7XG5cdFx0XHRpZiAoIG5ld0Rpc3RhbmNlIDwgdGhpcy5taW5EaXN0YW5jZSApIHtcblxuXHRcdFx0XHRzaXplSW52ZXJzZSA9IHRoaXMubWluRGlzdGFuY2UgLyBkaXN0YW5jZTtcblx0XHRcdFx0YW1vdW50ID0gZGlzdGFuY2UgLSAoIGRpc3RhbmNlICogc2l6ZUludmVyc2UgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggbmV3RGlzdGFuY2UgPiB0aGlzLm1heERpc3RhbmNlICkge1xuXG5cdFx0XHRcdHNpemVJbnZlcnNlID0gdGhpcy5tYXhEaXN0YW5jZSAvIGRpc3RhbmNlO1xuXHRcdFx0XHRhbW91bnQgPSBkaXN0YW5jZSAtICggZGlzdGFuY2UgKiBzaXplSW52ZXJzZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdF9vZmZzZXQuY29weSggX3NjYWxlUG9pbnRUZW1wICkuc3ViKCB0aGlzLl92M18xICkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoIGFtb3VudCApO1xuXG5cdFx0XHR0aGlzLl9tNF8xLm1ha2VUcmFuc2xhdGlvbiggX29mZnNldC54LCBfb2Zmc2V0LnksIF9vZmZzZXQueiApO1xuXG5cblx0XHRcdGlmICggc2NhbGVHaXptb3MgKSB7XG5cblx0XHRcdFx0Ly9zY2FsZSBnaXptb3Mgc28gdGhleSBhcHBlYXIgaW4gdGhlIHNhbWUgc3BvdCBoYXZpbmcgdGhlIHNhbWUgZGltZW5zaW9uXG5cdFx0XHRcdGNvbnN0IHBvcyA9IHRoaXMuX3YzXzI7XG5cblx0XHRcdFx0ZGlzdGFuY2UgPSBwb3MuZGlzdGFuY2VUbyggX3NjYWxlUG9pbnRUZW1wICk7XG5cdFx0XHRcdGFtb3VudCA9IGRpc3RhbmNlIC0gKCBkaXN0YW5jZSAqIHNpemVJbnZlcnNlICk7XG5cdFx0XHRcdF9vZmZzZXQuY29weSggX3NjYWxlUG9pbnRUZW1wICkuc3ViKCB0aGlzLl92M18yICkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoIGFtb3VudCApO1xuXG5cdFx0XHRcdHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4Lm1ha2VUcmFuc2xhdGlvbiggcG9zLngsIHBvcy55LCBwb3MueiApO1xuXHRcdFx0XHR0aGlzLl9zY2FsZU1hdHJpeC5tYWtlU2NhbGUoIHNpemVJbnZlcnNlLCBzaXplSW52ZXJzZSwgc2l6ZUludmVyc2UgKTtcblxuXHRcdFx0XHR0aGlzLl9tNF8yLm1ha2VUcmFuc2xhdGlvbiggX29mZnNldC54LCBfb2Zmc2V0LnksIF9vZmZzZXQueiApLm11bHRpcGx5KCB0aGlzLl90cmFuc2xhdGlvbk1hdHJpeCApO1xuXHRcdFx0XHR0aGlzLl9tNF8yLm11bHRpcGx5KCB0aGlzLl9zY2FsZU1hdHJpeCApO1xuXG5cdFx0XHRcdHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4Lm1ha2VUcmFuc2xhdGlvbiggLSBwb3MueCwgLSBwb3MueSwgLSBwb3MueiApO1xuXG5cdFx0XHRcdHRoaXMuX200XzIubXVsdGlwbHkoIHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4ICk7XG5cdFx0XHRcdHRoaXMuc2V0VHJhbnNmb3JtYXRpb25NYXRyaWNlcyggdGhpcy5fbTRfMSwgdGhpcy5fbTRfMiApO1xuXG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0dGhpcy5zZXRUcmFuc2Zvcm1hdGlvbk1hdHJpY2VzKCB0aGlzLl9tNF8xICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIF90cmFuc2Zvcm1hdGlvbjtcblxuXHRcdH1cblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgY2FtZXJhIGZvdlxuXHQgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgZm92IHRvIGJlIHNldHRlZFxuXHQgKi9cblx0c2V0Rm92ID0gKCB2YWx1ZSApID0+IHtcblxuXHRcdGlmICggdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0dGhpcy5jYW1lcmEuZm92ID0gTWF0aFV0aWxzLmNsYW1wKCB2YWx1ZSwgdGhpcy5taW5Gb3YsIHRoaXMubWF4Rm92ICk7XG5cdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogU2V0IHZhbHVlcyBpbiB0cmFuc2Zvcm1hdGlvbiBvYmplY3Rcblx0ICogQHBhcmFtIHtNYXRyaXg0fSBjYW1lcmEgVHJhbnNmb3JtYXRpb24gdG8gYmUgYXBwbGllZCB0byB0aGUgY2FtZXJhXG5cdCAqIEBwYXJhbSB7TWF0cml4NH0gZ2l6bW9zIFRyYW5zZm9ybWF0aW9uIHRvIGJlIGFwcGxpZWQgdG8gZ2l6bW9zXG5cdCAqL1xuXHQgc2V0VHJhbnNmb3JtYXRpb25NYXRyaWNlcyggY2FtZXJhID0gbnVsbCwgZ2l6bW9zID0gbnVsbCApIHtcblxuXHRcdGlmICggY2FtZXJhICE9IG51bGwgKSB7XG5cblx0XHRcdGlmICggX3RyYW5zZm9ybWF0aW9uLmNhbWVyYSAhPSBudWxsICkge1xuXG5cdFx0XHRcdF90cmFuc2Zvcm1hdGlvbi5jYW1lcmEuY29weSggY2FtZXJhICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0X3RyYW5zZm9ybWF0aW9uLmNhbWVyYSA9IGNhbWVyYS5jbG9uZSgpO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRfdHJhbnNmb3JtYXRpb24uY2FtZXJhID0gbnVsbDtcblxuXHRcdH1cblxuXHRcdGlmICggZ2l6bW9zICE9IG51bGwgKSB7XG5cblx0XHRcdGlmICggX3RyYW5zZm9ybWF0aW9uLmdpem1vcyAhPSBudWxsICkge1xuXG5cdFx0XHRcdF90cmFuc2Zvcm1hdGlvbi5naXptb3MuY29weSggZ2l6bW9zICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0X3RyYW5zZm9ybWF0aW9uLmdpem1vcyA9IGdpem1vcy5jbG9uZSgpO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRfdHJhbnNmb3JtYXRpb24uZ2l6bW9zID0gbnVsbDtcblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFJvdGF0ZSBjYW1lcmEgYXJvdW5kIGl0cyBkaXJlY3Rpb24gYXhpcyBwYXNzaW5nIGJ5IGEgZ2l2ZW4gcG9pbnQgYnkgYSBnaXZlbiBhbmdsZVxuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IHBvaW50IFRoZSBwb2ludCB3aGVyZSB0aGUgcm90YXRpb24gYXhpcyBpcyBwYXNzaW5nIHRyb3VnaFxuXHQgKiBAcGFyYW0ge051bWJlcn0gYW5nbGUgQW5nbGUgaW4gcmFkaWFuc1xuXHQgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdHJhbnNvcm1hdGlvbiBtYXRpeFxuXHQgKi9cblx0elJvdGF0ZSA9ICggcG9pbnQsIGFuZ2xlICkgPT4ge1xuXG5cdFx0dGhpcy5fcm90YXRpb25NYXRyaXgubWFrZVJvdGF0aW9uQXhpcyggdGhpcy5fcm90YXRpb25BeGlzLCBhbmdsZSApO1xuXHRcdHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4Lm1ha2VUcmFuc2xhdGlvbiggLSBwb2ludC54LCAtIHBvaW50LnksIC0gcG9pbnQueiApO1xuXG5cdFx0dGhpcy5fbTRfMS5tYWtlVHJhbnNsYXRpb24oIHBvaW50LngsIHBvaW50LnksIHBvaW50LnogKTtcblx0XHR0aGlzLl9tNF8xLm11bHRpcGx5KCB0aGlzLl9yb3RhdGlvbk1hdHJpeCApO1xuXHRcdHRoaXMuX200XzEubXVsdGlwbHkoIHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4ICk7XG5cblx0XHR0aGlzLl92M18xLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZSApLnN1YiggcG9pbnQgKTtcdC8vdmVjdG9yIGZyb20gcm90YXRpb24gY2VudGVyIHRvIGdpem1vcyBwb3NpdGlvblxuXHRcdHRoaXMuX3YzXzIuY29weSggdGhpcy5fdjNfMSApLmFwcGx5QXhpc0FuZ2xlKCB0aGlzLl9yb3RhdGlvbkF4aXMsIGFuZ2xlICk7XHQvL2FwcGx5IHJvdGF0aW9uXG5cdFx0dGhpcy5fdjNfMi5zdWIoIHRoaXMuX3YzXzEgKTtcblxuXHRcdHRoaXMuX200XzIubWFrZVRyYW5zbGF0aW9uKCB0aGlzLl92M18yLngsIHRoaXMuX3YzXzIueSwgdGhpcy5fdjNfMi56ICk7XG5cblx0XHR0aGlzLnNldFRyYW5zZm9ybWF0aW9uTWF0cmljZXMoIHRoaXMuX200XzEsIHRoaXMuX200XzIgKTtcblx0XHRyZXR1cm4gX3RyYW5zZm9ybWF0aW9uO1xuXG5cdH07XG5cblxuXHRnZXRSYXljYXN0ZXIoKSB7XG5cblx0XHRyZXR1cm4gX3JheWNhc3RlcjtcblxuXHR9XG5cblxuXHQvKipcblx0ICogVW5wcm9qZWN0IHRoZSBjdXJzb3Igb24gdGhlIDNEIG9iamVjdCBzdXJmYWNlXG5cdCAqIEBwYXJhbSB7VmVjdG9yMn0gY3Vyc29yIEN1cnNvciBjb29yZGluYXRlcyBpbiBORENcblx0ICogQHBhcmFtIHtDYW1lcmF9IGNhbWVyYSBWaXJ0dWFsIGNhbWVyYVxuXHQgKiBAcmV0dXJucyB7VmVjdG9yM30gVGhlIHBvaW50IG9mIGludGVyc2VjdGlvbiB3aXRoIHRoZSBtb2RlbCwgaWYgZXhpc3QsIG51bGwgb3RoZXJ3aXNlXG5cdCAqL1xuXHR1bnByb2plY3RPbk9iaiA9ICggY3Vyc29yLCBjYW1lcmEgKSA9PiB7XG5cblx0XHRjb25zdCByYXljYXN0ZXIgPSB0aGlzLmdldFJheWNhc3RlcigpO1xuXHRcdHJheWNhc3Rlci5uZWFyID0gY2FtZXJhLm5lYXI7XG5cdFx0cmF5Y2FzdGVyLmZhciA9IGNhbWVyYS5mYXI7XG5cdFx0cmF5Y2FzdGVyLnNldEZyb21DYW1lcmEoIGN1cnNvciwgY2FtZXJhICk7XG5cblx0XHRjb25zdCBpbnRlcnNlY3QgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggdGhpcy5zY2VuZS5jaGlsZHJlbiwgdHJ1ZSApO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0Lmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0aWYgKCBpbnRlcnNlY3RbIGkgXS5vYmplY3QudXVpZCAhPSB0aGlzLl9naXptb3MudXVpZCAmJiBpbnRlcnNlY3RbIGkgXS5mYWNlICE9IG51bGwgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGludGVyc2VjdFsgaSBdLnBvaW50LmNsb25lKCk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXG5cdH07XG5cblx0LyoqXG5cdCAqIFVucHJvamVjdCB0aGUgY3Vyc29yIG9uIHRoZSB0cmFja2JhbGwgc3VyZmFjZVxuXHQgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIFRoZSB2aXJ0dWFsIGNhbWVyYVxuXHQgKiBAcGFyYW0ge051bWJlcn0gY3Vyc29yWCBDdXJzb3IgaG9yaXpvbnRhbCBjb29yZGluYXRlIG9uIHNjcmVlblxuXHQgKiBAcGFyYW0ge051bWJlcn0gY3Vyc29yWSBDdXJzb3IgdmVydGljYWwgY29vcmRpbmF0ZSBvbiBzY3JlZW5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgd2hlcmUgdGhlIHJlbmRlcmVyIGRyYXdzIGl0cyBvdXRwdXRcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRiUmFkaXVzIFRoZSB0cmFja2JhbGwgcmFkaXVzXG5cdCAqIEByZXR1cm5zIHtWZWN0b3IzfSBUaGUgdW5wcm9qZWN0ZWQgcG9pbnQgb24gdGhlIHRyYWNrYmFsbCBzdXJmYWNlXG5cdCAqL1xuXHR1bnByb2plY3RPblRiU3VyZmFjZSA9ICggY2FtZXJhLCBjdXJzb3JYLCBjdXJzb3JZLCBjYW52YXMsIHRiUmFkaXVzICkgPT4ge1xuXG5cdFx0aWYgKCBjYW1lcmEudHlwZSA9PSAnT3J0aG9ncmFwaGljQ2FtZXJhJyApIHtcblxuXHRcdFx0dGhpcy5fdjJfMS5jb3B5KCB0aGlzLmdldEN1cnNvclBvc2l0aW9uKCBjdXJzb3JYLCBjdXJzb3JZLCBjYW52YXMgKSApO1xuXHRcdFx0dGhpcy5fdjNfMS5zZXQoIHRoaXMuX3YyXzEueCwgdGhpcy5fdjJfMS55LCAwICk7XG5cblx0XHRcdGNvbnN0IHgyID0gTWF0aC5wb3coIHRoaXMuX3YyXzEueCwgMiApO1xuXHRcdFx0Y29uc3QgeTIgPSBNYXRoLnBvdyggdGhpcy5fdjJfMS55LCAyICk7XG5cdFx0XHRjb25zdCByMiA9IE1hdGgucG93KCB0aGlzLl90YlJhZGl1cywgMiApO1xuXG5cdFx0XHRpZiAoIHgyICsgeTIgPD0gcjIgKiAwLjUgKSB7XG5cblx0XHRcdFx0Ly9pbnRlcnNlY3Rpb24gd2l0aCBzcGhlcmVcblx0XHRcdFx0dGhpcy5fdjNfMS5zZXRaKCBNYXRoLnNxcnQoIHIyIC0gKCB4MiArIHkyICkgKSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vaW50ZXJzZWN0aW9uIHdpdGggaHlwZXJib2xvaWRcblx0XHRcdFx0dGhpcy5fdjNfMS5zZXRaKCAoIHIyICogMC41ICkgLyAoIE1hdGguc3FydCggeDIgKyB5MiApICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5fdjNfMTtcblxuXHRcdH0gZWxzZSBpZiAoIGNhbWVyYS50eXBlID09ICdQZXJzcGVjdGl2ZUNhbWVyYScgKSB7XG5cblx0XHRcdC8vdW5wcm9qZWN0IGN1cnNvciBvbiB0aGUgbmVhciBwbGFuZVxuXHRcdFx0dGhpcy5fdjJfMS5jb3B5KCB0aGlzLmdldEN1cnNvck5EQyggY3Vyc29yWCwgY3Vyc29yWSwgY2FudmFzICkgKTtcblxuXHRcdFx0dGhpcy5fdjNfMS5zZXQoIHRoaXMuX3YyXzEueCwgdGhpcy5fdjJfMS55LCAtIDEgKTtcblx0XHRcdHRoaXMuX3YzXzEuYXBwbHlNYXRyaXg0KCBjYW1lcmEucHJvamVjdGlvbk1hdHJpeEludmVyc2UgKTtcblxuXHRcdFx0Y29uc3QgcmF5RGlyID0gdGhpcy5fdjNfMS5jbG9uZSgpLm5vcm1hbGl6ZSgpOyAvL3VucHJvamVjdGVkIHJheSBkaXJlY3Rpb25cblx0XHRcdGNvbnN0IGNhbWVyYUdpem1vRGlzdGFuY2UgPSBjYW1lcmEucG9zaXRpb24uZGlzdGFuY2VUbyggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICk7XG5cdFx0XHRjb25zdCByYWRpdXMyID0gTWF0aC5wb3coIHRiUmFkaXVzLCAyICk7XG5cblx0XHRcdC8vXHQgIGNhbWVyYVxuXHRcdFx0Ly9cdFx0fFxcXG5cdFx0XHQvL1x0XHR8IFxcXG5cdFx0XHQvL1x0XHR8ICBcXFxuXHRcdFx0Ly9cdGhcdHxcdFxcXG5cdFx0XHQvL1x0XHR8IFx0IFxcXG5cdFx0XHQvL1x0XHR8IFx0ICBcXFxuXHRcdFx0Ly9cdF8gXyB8IF8gXyBfXFwgXyBfICBuZWFyIHBsYW5lXG5cdFx0XHQvL1x0XHRcdGxcblxuXHRcdFx0Y29uc3QgaCA9IHRoaXMuX3YzXzEuejtcblx0XHRcdGNvbnN0IGwgPSBNYXRoLnNxcnQoIE1hdGgucG93KCB0aGlzLl92M18xLngsIDIgKSArIE1hdGgucG93KCB0aGlzLl92M18xLnksIDIgKSApO1xuXG5cdFx0XHRpZiAoIGwgPT0gMCApIHtcblxuXHRcdFx0XHQvL3JheSBhbGlnbmVkIHdpdGggY2FtZXJhXG5cdFx0XHRcdHJheURpci5zZXQoIHRoaXMuX3YzXzEueCwgdGhpcy5fdjNfMS55LCB0YlJhZGl1cyApO1xuXHRcdFx0XHRyZXR1cm4gcmF5RGlyO1xuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG0gPSBoIC8gbDtcblx0XHRcdGNvbnN0IHEgPSBjYW1lcmFHaXptb0Rpc3RhbmNlO1xuXG5cdFx0XHQvKlxuXHRcdFx0ICogY2FsY3VsYXRlIGludGVyc2VjdGlvbiBwb2ludCBiZXR3ZWVuIHVucHJvamVjdGVkIHJheSBhbmQgdHJhY2tiYWxsIHN1cmZhY2Vcblx0XHRcdCAqfHkgPSBtICogeCArIHFcblx0XHRcdCAqfHheMiArIHleMiA9IHJeMlxuXHRcdFx0ICpcblx0XHRcdCAqIChtXjIgKyAxKSAqIHheMiArICgyICogbSAqIHEpICogeCArIHFeMiAtIHJeMiA9IDBcblx0XHRcdCAqL1xuXHRcdFx0bGV0IGEgPSBNYXRoLnBvdyggbSwgMiApICsgMTtcblx0XHRcdGxldCBiID0gMiAqIG0gKiBxO1xuXHRcdFx0bGV0IGMgPSBNYXRoLnBvdyggcSwgMiApIC0gcmFkaXVzMjtcblx0XHRcdGxldCBkZWx0YSA9IE1hdGgucG93KCBiLCAyICkgLSAoIDQgKiBhICogYyApO1xuXG5cdFx0XHRpZiAoIGRlbHRhID49IDAgKSB7XG5cblx0XHRcdFx0Ly9pbnRlcnNlY3Rpb24gd2l0aCBzcGhlcmVcblx0XHRcdFx0dGhpcy5fdjJfMS5zZXRYKCAoIC0gYiAtIE1hdGguc3FydCggZGVsdGEgKSApIC8gKCAyICogYSApICk7XG5cdFx0XHRcdHRoaXMuX3YyXzEuc2V0WSggbSAqIHRoaXMuX3YyXzEueCArIHEgKTtcblxuXHRcdFx0XHRjb25zdCBhbmdsZSA9IE1hdGhVdGlscy5SQUQyREVHICogdGhpcy5fdjJfMS5hbmdsZSgpO1xuXG5cdFx0XHRcdGlmICggYW5nbGUgPj0gNDUgKSB7XG5cblx0XHRcdFx0XHQvL2lmIGFuZ2xlIGJldHdlZW4gaW50ZXJzZWN0aW9uIHBvaW50IGFuZCBYJyBheGlzIGlzID49IDQ1wrAsIHJldHVybiB0aGF0IHBvaW50XG5cdFx0XHRcdFx0Ly9vdGhlcndpc2UsIGNhbGN1bGF0ZSBpbnRlcnNlY3Rpb24gcG9pbnQgd2l0aCBoeXBlcmJvbG9pZFxuXG5cdFx0XHRcdFx0Y29uc3QgcmF5TGVuZ3RoID0gTWF0aC5zcXJ0KCBNYXRoLnBvdyggdGhpcy5fdjJfMS54LCAyICkgKyBNYXRoLnBvdyggKCBjYW1lcmFHaXptb0Rpc3RhbmNlIC0gdGhpcy5fdjJfMS55ICksIDIgKSApO1xuXHRcdFx0XHRcdHJheURpci5tdWx0aXBseVNjYWxhciggcmF5TGVuZ3RoICk7XG5cdFx0XHRcdFx0cmF5RGlyLnogKz0gY2FtZXJhR2l6bW9EaXN0YW5jZTtcblx0XHRcdFx0XHRyZXR1cm4gcmF5RGlyO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHQvL2ludGVyc2VjdGlvbiB3aXRoIGh5cGVyYm9sb2lkXG5cdFx0XHQvKlxuXHRcdFx0ICp8eSA9IG0gKiB4ICsgcVxuXHRcdFx0ICp8eSA9ICgxIC8geCkgKiAocl4yIC8gMilcblx0XHRcdCAqXG5cdFx0XHQgKiBtICogeF4yICsgcSAqIHggLSByXjIgLyAyID0gMFxuXHRcdFx0ICovXG5cblx0XHRcdGEgPSBtO1xuXHRcdFx0YiA9IHE7XG5cdFx0XHRjID0gLSByYWRpdXMyICogMC41O1xuXHRcdFx0ZGVsdGEgPSBNYXRoLnBvdyggYiwgMiApIC0gKCA0ICogYSAqIGMgKTtcblx0XHRcdHRoaXMuX3YyXzEuc2V0WCggKCAtIGIgLSBNYXRoLnNxcnQoIGRlbHRhICkgKSAvICggMiAqIGEgKSApO1xuXHRcdFx0dGhpcy5fdjJfMS5zZXRZKCBtICogdGhpcy5fdjJfMS54ICsgcSApO1xuXG5cdFx0XHRjb25zdCByYXlMZW5ndGggPSBNYXRoLnNxcnQoIE1hdGgucG93KCB0aGlzLl92Ml8xLngsIDIgKSArIE1hdGgucG93KCAoIGNhbWVyYUdpem1vRGlzdGFuY2UgLSB0aGlzLl92Ml8xLnkgKSwgMiApICk7XG5cblx0XHRcdHJheURpci5tdWx0aXBseVNjYWxhciggcmF5TGVuZ3RoICk7XG5cdFx0XHRyYXlEaXIueiArPSBjYW1lcmFHaXptb0Rpc3RhbmNlO1xuXHRcdFx0cmV0dXJuIHJheURpcjtcblxuXHRcdH1cblxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFVucHJvamVjdCB0aGUgY3Vyc29yIG9uIHRoZSBwbGFuZSBwYXNzaW5nIHRocm91Z2ggdGhlIGNlbnRlciBvZiB0aGUgdHJhY2tiYWxsIG9ydGhvZ29uYWwgdG8gdGhlIGNhbWVyYVxuXHQgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIFRoZSB2aXJ0dWFsIGNhbWVyYVxuXHQgKiBAcGFyYW0ge051bWJlcn0gY3Vyc29yWCBDdXJzb3IgaG9yaXpvbnRhbCBjb29yZGluYXRlIG9uIHNjcmVlblxuXHQgKiBAcGFyYW0ge051bWJlcn0gY3Vyc29yWSBDdXJzb3IgdmVydGljYWwgY29vcmRpbmF0ZSBvbiBzY3JlZW5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgd2hlcmUgdGhlIHJlbmRlcmVyIGRyYXdzIGl0cyBvdXRwdXRcblx0ICogQHBhcmFtIHtCb29sZWFufSBpbml0aWFsRGlzdGFuY2UgSWYgaW5pdGlhbCBkaXN0YW5jZSBiZXR3ZWVuIGNhbWVyYSBhbmQgZ2l6bW9zIHNob3VsZCBiZSB1c2VkIGZvciBjYWxjdWxhdGlvbnMgaW5zdGVhZCBvZiBjdXJyZW50IChQZXJzcGVjdGl2ZSBvbmx5KVxuXHQgKiBAcmV0dXJucyB7VmVjdG9yM30gVGhlIHVucHJvamVjdGVkIHBvaW50IG9uIHRoZSB0cmFja2JhbGwgcGxhbmVcblx0ICovXG5cdHVucHJvamVjdE9uVGJQbGFuZSA9ICggY2FtZXJhLCBjdXJzb3JYLCBjdXJzb3JZLCBjYW52YXMsIGluaXRpYWxEaXN0YW5jZSA9IGZhbHNlICkgPT4ge1xuXG5cdFx0aWYgKCBjYW1lcmEudHlwZSA9PSAnT3J0aG9ncmFwaGljQ2FtZXJhJyApIHtcblxuXHRcdFx0dGhpcy5fdjJfMS5jb3B5KCB0aGlzLmdldEN1cnNvclBvc2l0aW9uKCBjdXJzb3JYLCBjdXJzb3JZLCBjYW52YXMgKSApO1xuXHRcdFx0dGhpcy5fdjNfMS5zZXQoIHRoaXMuX3YyXzEueCwgdGhpcy5fdjJfMS55LCAwICk7XG5cblx0XHRcdHJldHVybiB0aGlzLl92M18xLmNsb25lKCk7XG5cblx0XHR9IGVsc2UgaWYgKCBjYW1lcmEudHlwZSA9PSAnUGVyc3BlY3RpdmVDYW1lcmEnICkge1xuXG5cdFx0XHR0aGlzLl92Ml8xLmNvcHkoIHRoaXMuZ2V0Q3Vyc29yTkRDKCBjdXJzb3JYLCBjdXJzb3JZLCBjYW52YXMgKSApO1xuXG5cdFx0XHQvL3VucHJvamVjdCBjdXJzb3Igb24gdGhlIG5lYXIgcGxhbmVcblx0XHRcdHRoaXMuX3YzXzEuc2V0KCB0aGlzLl92Ml8xLngsIHRoaXMuX3YyXzEueSwgLSAxICk7XG5cdFx0XHR0aGlzLl92M18xLmFwcGx5TWF0cml4NCggY2FtZXJhLnByb2plY3Rpb25NYXRyaXhJbnZlcnNlICk7XG5cblx0XHRcdGNvbnN0IHJheURpciA9IHRoaXMuX3YzXzEuY2xvbmUoKS5ub3JtYWxpemUoKTsgLy91bnByb2plY3RlZCByYXkgZGlyZWN0aW9uXG5cblx0XHRcdC8vXHQgIGNhbWVyYVxuXHRcdFx0Ly9cdFx0fFxcXG5cdFx0XHQvL1x0XHR8IFxcXG5cdFx0XHQvL1x0XHR8ICBcXFxuXHRcdFx0Ly9cdGhcdHxcdFxcXG5cdFx0XHQvL1x0XHR8IFx0IFxcXG5cdFx0XHQvL1x0XHR8IFx0ICBcXFxuXHRcdFx0Ly9cdF8gXyB8IF8gXyBfXFwgXyBfICBuZWFyIHBsYW5lXG5cdFx0XHQvL1x0XHRcdGxcblxuXHRcdFx0Y29uc3QgaCA9IHRoaXMuX3YzXzEuejtcblx0XHRcdGNvbnN0IGwgPSBNYXRoLnNxcnQoIE1hdGgucG93KCB0aGlzLl92M18xLngsIDIgKSArIE1hdGgucG93KCB0aGlzLl92M18xLnksIDIgKSApO1xuXHRcdFx0bGV0IGNhbWVyYUdpem1vRGlzdGFuY2U7XG5cblx0XHRcdGlmICggaW5pdGlhbERpc3RhbmNlICkge1xuXG5cdFx0XHRcdGNhbWVyYUdpem1vRGlzdGFuY2UgPSB0aGlzLl92M18xLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fY2FtZXJhTWF0cml4U3RhdGUwICkuZGlzdGFuY2VUbyggdGhpcy5fdjNfMi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2dpem1vTWF0cml4U3RhdGUwICkgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjYW1lcmFHaXptb0Rpc3RhbmNlID0gY2FtZXJhLnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8qXG5cdFx0XHQgKiBjYWxjdWxhdGUgaW50ZXJzZWN0aW9uIHBvaW50IGJldHdlZW4gdW5wcm9qZWN0ZWQgcmF5IGFuZCB0aGUgcGxhbmVcblx0XHRcdCAqfHkgPSBteCArIHFcblx0XHRcdCAqfHkgPSAwXG5cdFx0XHQgKlxuXHRcdFx0ICogeCA9IC1xL21cblx0XHRcdCovXG5cdFx0XHRpZiAoIGwgPT0gMCApIHtcblxuXHRcdFx0XHQvL3JheSBhbGlnbmVkIHdpdGggY2FtZXJhXG5cdFx0XHRcdHJheURpci5zZXQoIDAsIDAsIDAgKTtcblx0XHRcdFx0cmV0dXJuIHJheURpcjtcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtID0gaCAvIGw7XG5cdFx0XHRjb25zdCBxID0gY2FtZXJhR2l6bW9EaXN0YW5jZTtcblx0XHRcdGNvbnN0IHggPSAtIHEgLyBtO1xuXG5cdFx0XHRjb25zdCByYXlMZW5ndGggPSBNYXRoLnNxcnQoIE1hdGgucG93KCBxLCAyICkgKyBNYXRoLnBvdyggeCwgMiApICk7XG5cdFx0XHRyYXlEaXIubXVsdGlwbHlTY2FsYXIoIHJheUxlbmd0aCApO1xuXHRcdFx0cmF5RGlyLnogPSAwO1xuXHRcdFx0cmV0dXJuIHJheURpcjtcblxuXHRcdH1cblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGUgY2FtZXJhIGFuZCBnaXptb3Mgc3RhdGVcblx0ICovXG5cdHVwZGF0ZU1hdHJpeFN0YXRlID0gKCkgPT4ge1xuXG5cdFx0Ly91cGRhdGUgY2FtZXJhIGFuZCBnaXptb3Mgc3RhdGVcblx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZS5jb3B5KCB0aGlzLmNhbWVyYS5tYXRyaXggKTtcblx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLmNvcHkoIHRoaXMuX2dpem1vcy5tYXRyaXggKTtcblxuXHRcdGlmICggdGhpcy5jYW1lcmEuaXNPcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHRoaXMuX2NhbWVyYVByb2plY3Rpb25TdGF0ZS5jb3B5KCB0aGlzLmNhbWVyYS5wcm9qZWN0aW9uTWF0cml4ICk7XG5cdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR0aGlzLl96b29tU3RhdGUgPSB0aGlzLmNhbWVyYS56b29tO1xuXG5cdFx0fSBlbHNlIGlmICggdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0dGhpcy5fZm92U3RhdGUgPSB0aGlzLmNhbWVyYS5mb3Y7XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlIHRoZSB0cmFja2JhbGwgRlNBXG5cdCAqIEBwYXJhbSB7U1RBVEV9IG5ld1N0YXRlIE5ldyBzdGF0ZSBvZiB0aGUgRlNBXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gdXBkYXRlTWF0cmljZXMgSWYgbWF0cmlpY2VzIHN0YXRlIHNob3VsZCBiZSB1cGRhdGVkXG5cdCAqL1xuXHR1cGRhdGVUYlN0YXRlID0gKCBuZXdTdGF0ZSwgdXBkYXRlTWF0cmljZXMgKSA9PiB7XG5cblx0XHR0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xuXHRcdGlmICggdXBkYXRlTWF0cmljZXMgKSB7XG5cblx0XHRcdHRoaXMudXBkYXRlTWF0cml4U3RhdGUoKTtcblxuXHRcdH1cblxuXHR9O1xuXG5cdHVwZGF0ZSA9ICgpID0+IHtcblxuXHRcdGNvbnN0IEVQUyA9IDAuMDAwMDAxO1xuXG5cdFx0aWYgKCB0aGlzLnRhcmdldC5lcXVhbHMoIHRoaXMuX2N1cnJlbnRUYXJnZXQgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdHRoaXMuX2dpem1vcy5wb3NpdGlvbi5jb3B5KCB0aGlzLnRhcmdldCApO1x0Ly9mb3IgY29ycmVjdCByYWRpdXMgY2FsY3VsYXRpb25cblx0XHRcdHRoaXMuX3RiUmFkaXVzID0gdGhpcy5jYWxjdWxhdGVUYlJhZGl1cyggdGhpcy5jYW1lcmEgKTtcblx0XHRcdHRoaXMubWFrZUdpem1vcyggdGhpcy50YXJnZXQsIHRoaXMuX3RiUmFkaXVzICk7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGFyZ2V0LmNvcHkoIHRoaXMudGFyZ2V0ICk7XG5cblx0XHR9XG5cblx0XHQvL2NoZWNrIG1pbi9tYXggcGFyYW1ldGVyc1xuXHRcdGlmICggdGhpcy5jYW1lcmEuaXNPcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdC8vY2hlY2sgem9vbVxuXHRcdFx0aWYgKCB0aGlzLmNhbWVyYS56b29tID4gdGhpcy5tYXhab29tIHx8IHRoaXMuY2FtZXJhLnpvb20gPCB0aGlzLm1pblpvb20gKSB7XG5cblx0XHRcdFx0Y29uc3QgbmV3Wm9vbSA9IE1hdGhVdGlscy5jbGFtcCggdGhpcy5jYW1lcmEuem9vbSwgdGhpcy5taW5ab29tLCB0aGlzLm1heFpvb20gKTtcblx0XHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5zY2FsZSggbmV3Wm9vbSAvIHRoaXMuY2FtZXJhLnpvb20sIHRoaXMuX2dpem1vcy5wb3NpdGlvbiwgdHJ1ZSApICk7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMuY2FtZXJhLmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdC8vY2hlY2sgZGlzdGFuY2Vcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gdGhpcy5jYW1lcmEucG9zaXRpb24uZGlzdGFuY2VUbyggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICk7XG5cblx0XHRcdGlmICggZGlzdGFuY2UgPiB0aGlzLm1heERpc3RhbmNlICsgRVBTIHx8IGRpc3RhbmNlIDwgdGhpcy5taW5EaXN0YW5jZSAtIEVQUyApIHtcblxuXHRcdFx0XHRjb25zdCBuZXdEaXN0YW5jZSA9IE1hdGhVdGlscy5jbGFtcCggZGlzdGFuY2UsIHRoaXMubWluRGlzdGFuY2UsIHRoaXMubWF4RGlzdGFuY2UgKTtcblx0XHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5zY2FsZSggbmV3RGlzdGFuY2UgLyBkaXN0YW5jZSwgdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICkgKTtcblx0XHRcdFx0dGhpcy51cGRhdGVNYXRyaXhTdGF0ZSgpO1xuXG5cdFx0XHQgfVxuXG5cdFx0XHQvL2NoZWNrIGZvdlxuXHRcdFx0aWYgKCB0aGlzLmNhbWVyYS5mb3YgPCB0aGlzLm1pbkZvdiB8fCB0aGlzLmNhbWVyYS5mb3YgPiB0aGlzLm1heEZvdiApIHtcblxuXHRcdFx0XHR0aGlzLmNhbWVyYS5mb3YgPSBNYXRoVXRpbHMuY2xhbXAoIHRoaXMuY2FtZXJhLmZvdiwgdGhpcy5taW5Gb3YsIHRoaXMubWF4Rm92ICk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvbGRSYWRpdXMgPSB0aGlzLl90YlJhZGl1cztcblx0XHRcdHRoaXMuX3RiUmFkaXVzID0gdGhpcy5jYWxjdWxhdGVUYlJhZGl1cyggdGhpcy5jYW1lcmEgKTtcblxuXHRcdFx0aWYgKCBvbGRSYWRpdXMgPCB0aGlzLl90YlJhZGl1cyAtIEVQUyB8fCBvbGRSYWRpdXMgPiB0aGlzLl90YlJhZGl1cyArIEVQUyApIHtcblxuXHRcdFx0XHRjb25zdCBzY2FsZSA9ICggdGhpcy5fZ2l6bW9zLnNjYWxlLnggKyB0aGlzLl9naXptb3Muc2NhbGUueSArIHRoaXMuX2dpem1vcy5zY2FsZS56ICkgLyAzO1xuXHRcdFx0XHRjb25zdCBuZXdSYWRpdXMgPSB0aGlzLl90YlJhZGl1cyAvIHNjYWxlO1xuXHRcdFx0XHRjb25zdCBjdXJ2ZSA9IG5ldyBFbGxpcHNlQ3VydmUoIDAsIDAsIG5ld1JhZGl1cywgbmV3UmFkaXVzICk7XG5cdFx0XHRcdGNvbnN0IHBvaW50cyA9IGN1cnZlLmdldFBvaW50cyggdGhpcy5fY3VydmVQdHMgKTtcblx0XHRcdFx0Y29uc3QgY3VydmVHZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpLnNldEZyb21Qb2ludHMoIHBvaW50cyApO1xuXG5cdFx0XHRcdGZvciAoIGNvbnN0IGdpem1vIGluIHRoaXMuX2dpem1vcy5jaGlsZHJlbiApIHtcblxuXHRcdFx0XHRcdHRoaXMuX2dpem1vcy5jaGlsZHJlblsgZ2l6bW8gXS5nZW9tZXRyeSA9IGN1cnZlR2VvbWV0cnk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHR0aGlzLmNhbWVyYS5sb29rQXQoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXG5cdH07XG5cblx0c2V0U3RhdGVGcm9tSlNPTiA9ICgganNvbiApID0+IHtcblxuXHRcdGNvbnN0IHN0YXRlID0gSlNPTi5wYXJzZSgganNvbiApO1xuXG5cdFx0aWYgKCBzdGF0ZS5hcmNiYWxsU3RhdGUgIT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZS5mcm9tQXJyYXkoIHN0YXRlLmFyY2JhbGxTdGF0ZS5jYW1lcmFNYXRyaXguZWxlbWVudHMgKTtcblx0XHRcdHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlLmRlY29tcG9zZSggdGhpcy5jYW1lcmEucG9zaXRpb24sIHRoaXMuY2FtZXJhLnF1YXRlcm5pb24sIHRoaXMuY2FtZXJhLnNjYWxlICk7XG5cblx0XHRcdHRoaXMuY2FtZXJhLnVwLmNvcHkoIHN0YXRlLmFyY2JhbGxTdGF0ZS5jYW1lcmFVcCApO1xuXHRcdFx0dGhpcy5jYW1lcmEubmVhciA9IHN0YXRlLmFyY2JhbGxTdGF0ZS5jYW1lcmFOZWFyO1xuXHRcdFx0dGhpcy5jYW1lcmEuZmFyID0gc3RhdGUuYXJjYmFsbFN0YXRlLmNhbWVyYUZhcjtcblxuXHRcdFx0dGhpcy5jYW1lcmEuem9vbSA9IHN0YXRlLmFyY2JhbGxTdGF0ZS5jYW1lcmFab29tO1xuXG5cdFx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0dGhpcy5jYW1lcmEuZm92ID0gc3RhdGUuYXJjYmFsbFN0YXRlLmNhbWVyYUZvdjtcblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLmZyb21BcnJheSggc3RhdGUuYXJjYmFsbFN0YXRlLmdpem1vTWF0cml4LmVsZW1lbnRzICk7XG5cdFx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLmRlY29tcG9zZSggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uLCB0aGlzLl9naXptb3MucXVhdGVybmlvbiwgdGhpcy5fZ2l6bW9zLnNjYWxlICk7XG5cblx0XHRcdHRoaXMuY2FtZXJhLnVwZGF0ZU1hdHJpeCgpO1xuXHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG5cdFx0XHR0aGlzLl9naXptb3MudXBkYXRlTWF0cml4KCk7XG5cblx0XHRcdHRoaXMuX3RiUmFkaXVzID0gdGhpcy5jYWxjdWxhdGVUYlJhZGl1cyggdGhpcy5jYW1lcmEgKTtcblx0XHRcdGNvbnN0IGdpem1vVG1wID0gbmV3IE1hdHJpeDQoKS5jb3B5KCB0aGlzLl9naXptb01hdHJpeFN0YXRlMCApO1xuXHRcdFx0dGhpcy5tYWtlR2l6bW9zKCB0aGlzLl9naXptb3MucG9zaXRpb24sIHRoaXMuX3RiUmFkaXVzICk7XG5cdFx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlMC5jb3B5KCBnaXptb1RtcCApO1xuXG5cdFx0XHR0aGlzLmNhbWVyYS5sb29rQXQoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0fVxuXG5cdH07XG5cbn1cblxuZXhwb3J0IHsgQXJjYmFsbENvbnRyb2xzIH07XG4iLCJpbXBvcnQge1xuXHRCdWZmZXJHZW9tZXRyeSxcblx0RmlsZUxvYWRlcixcblx0RmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcblx0R3JvdXAsXG5cdExpbmVCYXNpY01hdGVyaWFsLFxuXHRMaW5lU2VnbWVudHMsXG5cdExvYWRlcixcblx0TWF0ZXJpYWwsXG5cdE1lc2gsXG5cdE1lc2hQaG9uZ01hdGVyaWFsLFxuXHRQb2ludHMsXG5cdFBvaW50c01hdGVyaWFsLFxuXHRWZWN0b3IzLFxuXHRDb2xvclxufSBmcm9tICd0aHJlZSc7XG5cbi8vIG8gb2JqZWN0X25hbWUgfCBnIGdyb3VwX25hbWVcbmNvbnN0IF9vYmplY3RfcGF0dGVybiA9IC9eW29nXVxccyooLispPy87XG4vLyBtdGxsaWIgZmlsZV9yZWZlcmVuY2VcbmNvbnN0IF9tYXRlcmlhbF9saWJyYXJ5X3BhdHRlcm4gPSAvXm10bGxpYiAvO1xuLy8gdXNlbXRsIG1hdGVyaWFsX25hbWVcbmNvbnN0IF9tYXRlcmlhbF91c2VfcGF0dGVybiA9IC9edXNlbXRsIC87XG4vLyB1c2VtYXAgbWFwX25hbWVcbmNvbnN0IF9tYXBfdXNlX3BhdHRlcm4gPSAvXnVzZW1hcCAvO1xuXG5jb25zdCBfdkEgPSBuZXcgVmVjdG9yMygpO1xuY29uc3QgX3ZCID0gbmV3IFZlY3RvcjMoKTtcbmNvbnN0IF92QyA9IG5ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9hYiA9IG5ldyBWZWN0b3IzKCk7XG5jb25zdCBfY2IgPSBuZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfY29sb3IgPSBuZXcgQ29sb3IoKTtcblxuZnVuY3Rpb24gUGFyc2VyU3RhdGUoKSB7XG5cblx0Y29uc3Qgc3RhdGUgPSB7XG5cdFx0b2JqZWN0czogW10sXG5cdFx0b2JqZWN0OiB7fSxcblxuXHRcdHZlcnRpY2VzOiBbXSxcblx0XHRub3JtYWxzOiBbXSxcblx0XHRjb2xvcnM6IFtdLFxuXHRcdHV2czogW10sXG5cblx0XHRtYXRlcmlhbHM6IHt9LFxuXHRcdG1hdGVyaWFsTGlicmFyaWVzOiBbXSxcblxuXHRcdHN0YXJ0T2JqZWN0OiBmdW5jdGlvbiAoIG5hbWUsIGZyb21EZWNsYXJhdGlvbiApIHtcblxuXHRcdFx0Ly8gSWYgdGhlIGN1cnJlbnQgb2JqZWN0IChpbml0aWFsIGZyb20gcmVzZXQpIGlzIG5vdCBmcm9tIGEgZy9vIGRlY2xhcmF0aW9uIGluIHRoZSBwYXJzZWRcblx0XHRcdC8vIGZpbGUuIFdlIG5lZWQgdG8gdXNlIGl0IGZvciB0aGUgZmlyc3QgcGFyc2VkIGcvbyB0byBrZWVwIHRoaW5ncyBpbiBzeW5jLlxuXHRcdFx0aWYgKCB0aGlzLm9iamVjdCAmJiB0aGlzLm9iamVjdC5mcm9tRGVjbGFyYXRpb24gPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdHRoaXMub2JqZWN0Lm5hbWUgPSBuYW1lO1xuXHRcdFx0XHR0aGlzLm9iamVjdC5mcm9tRGVjbGFyYXRpb24gPSAoIGZyb21EZWNsYXJhdGlvbiAhPT0gZmFsc2UgKTtcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHByZXZpb3VzTWF0ZXJpYWwgPSAoIHRoaXMub2JqZWN0ICYmIHR5cGVvZiB0aGlzLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwgPT09ICdmdW5jdGlvbicgPyB0aGlzLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwoKSA6IHVuZGVmaW5lZCApO1xuXG5cdFx0XHRpZiAoIHRoaXMub2JqZWN0ICYmIHR5cGVvZiB0aGlzLm9iamVjdC5fZmluYWxpemUgPT09ICdmdW5jdGlvbicgKSB7XG5cblx0XHRcdFx0dGhpcy5vYmplY3QuX2ZpbmFsaXplKCB0cnVlICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vYmplY3QgPSB7XG5cdFx0XHRcdG5hbWU6IG5hbWUgfHwgJycsXG5cdFx0XHRcdGZyb21EZWNsYXJhdGlvbjogKCBmcm9tRGVjbGFyYXRpb24gIT09IGZhbHNlICksXG5cblx0XHRcdFx0Z2VvbWV0cnk6IHtcblx0XHRcdFx0XHR2ZXJ0aWNlczogW10sXG5cdFx0XHRcdFx0bm9ybWFsczogW10sXG5cdFx0XHRcdFx0Y29sb3JzOiBbXSxcblx0XHRcdFx0XHR1dnM6IFtdLFxuXHRcdFx0XHRcdGhhc1VWSW5kaWNlczogZmFsc2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0bWF0ZXJpYWxzOiBbXSxcblx0XHRcdFx0c21vb3RoOiB0cnVlLFxuXG5cdFx0XHRcdHN0YXJ0TWF0ZXJpYWw6IGZ1bmN0aW9uICggbmFtZSwgbGlicmFyaWVzICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgcHJldmlvdXMgPSB0aGlzLl9maW5hbGl6ZSggZmFsc2UgKTtcblxuXHRcdFx0XHRcdC8vIE5ldyB1c2VtdGwgZGVjbGFyYXRpb24gb3ZlcndyaXRlcyBhbiBpbmhlcml0ZWQgbWF0ZXJpYWwsIGV4Y2VwdCBpZiBmYWNlcyB3ZXJlIGRlY2xhcmVkXG5cdFx0XHRcdFx0Ly8gYWZ0ZXIgdGhlIG1hdGVyaWFsLCB0aGVuIGl0IG11c3QgYmUgcHJlc2VydmVkIGZvciBwcm9wZXIgTXVsdGlNYXRlcmlhbCBjb250aW51YXRpb24uXG5cdFx0XHRcdFx0aWYgKCBwcmV2aW91cyAmJiAoIHByZXZpb3VzLmluaGVyaXRlZCB8fCBwcmV2aW91cy5ncm91cENvdW50IDw9IDAgKSApIHtcblxuXHRcdFx0XHRcdFx0dGhpcy5tYXRlcmlhbHMuc3BsaWNlKCBwcmV2aW91cy5pbmRleCwgMSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgbWF0ZXJpYWwgPSB7XG5cdFx0XHRcdFx0XHRpbmRleDogdGhpcy5tYXRlcmlhbHMubGVuZ3RoLFxuXHRcdFx0XHRcdFx0bmFtZTogbmFtZSB8fCAnJyxcblx0XHRcdFx0XHRcdG10bGxpYjogKCBBcnJheS5pc0FycmF5KCBsaWJyYXJpZXMgKSAmJiBsaWJyYXJpZXMubGVuZ3RoID4gMCA/IGxpYnJhcmllc1sgbGlicmFyaWVzLmxlbmd0aCAtIDEgXSA6ICcnICksXG5cdFx0XHRcdFx0XHRzbW9vdGg6ICggcHJldmlvdXMgIT09IHVuZGVmaW5lZCA/IHByZXZpb3VzLnNtb290aCA6IHRoaXMuc21vb3RoICksXG5cdFx0XHRcdFx0XHRncm91cFN0YXJ0OiAoIHByZXZpb3VzICE9PSB1bmRlZmluZWQgPyBwcmV2aW91cy5ncm91cEVuZCA6IDAgKSxcblx0XHRcdFx0XHRcdGdyb3VwRW5kOiAtIDEsXG5cdFx0XHRcdFx0XHRncm91cENvdW50OiAtIDEsXG5cdFx0XHRcdFx0XHRpbmhlcml0ZWQ6IGZhbHNlLFxuXG5cdFx0XHRcdFx0XHRjbG9uZTogZnVuY3Rpb24gKCBpbmRleCApIHtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBjbG9uZWQgPSB7XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXg6ICggdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyA/IGluZGV4IDogdGhpcy5pbmRleCApLFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU6IHRoaXMubmFtZSxcblx0XHRcdFx0XHRcdFx0XHRtdGxsaWI6IHRoaXMubXRsbGliLFxuXHRcdFx0XHRcdFx0XHRcdHNtb290aDogdGhpcy5zbW9vdGgsXG5cdFx0XHRcdFx0XHRcdFx0Z3JvdXBTdGFydDogMCxcblx0XHRcdFx0XHRcdFx0XHRncm91cEVuZDogLSAxLFxuXHRcdFx0XHRcdFx0XHRcdGdyb3VwQ291bnQ6IC0gMSxcblx0XHRcdFx0XHRcdFx0XHRpbmhlcml0ZWQ6IGZhbHNlXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGNsb25lZC5jbG9uZSA9IHRoaXMuY2xvbmUuYmluZCggY2xvbmVkICk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjbG9uZWQ7XG5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0dGhpcy5tYXRlcmlhbHMucHVzaCggbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHRcdHJldHVybiBtYXRlcmlhbDtcblxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdGN1cnJlbnRNYXRlcmlhbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0aWYgKCB0aGlzLm1hdGVyaWFscy5sZW5ndGggPiAwICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5tYXRlcmlhbHNbIHRoaXMubWF0ZXJpYWxzLmxlbmd0aCAtIDEgXTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0XHRcdFx0fSxcblxuXHRcdFx0XHRfZmluYWxpemU6IGZ1bmN0aW9uICggZW5kICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgbGFzdE11bHRpTWF0ZXJpYWwgPSB0aGlzLmN1cnJlbnRNYXRlcmlhbCgpO1xuXHRcdFx0XHRcdGlmICggbGFzdE11bHRpTWF0ZXJpYWwgJiYgbGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBFbmQgPT09IC0gMSApIHtcblxuXHRcdFx0XHRcdFx0bGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBFbmQgPSB0aGlzLmdlb21ldHJ5LnZlcnRpY2VzLmxlbmd0aCAvIDM7XG5cdFx0XHRcdFx0XHRsYXN0TXVsdGlNYXRlcmlhbC5ncm91cENvdW50ID0gbGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBFbmQgLSBsYXN0TXVsdGlNYXRlcmlhbC5ncm91cFN0YXJ0O1xuXHRcdFx0XHRcdFx0bGFzdE11bHRpTWF0ZXJpYWwuaW5oZXJpdGVkID0gZmFsc2U7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJZ25vcmUgb2JqZWN0cyB0YWlsIG1hdGVyaWFscyBpZiBubyBmYWNlIGRlY2xhcmF0aW9ucyBmb2xsb3dlZCB0aGVtIGJlZm9yZSBhIG5ldyBvL2cgc3RhcnRlZC5cblx0XHRcdFx0XHRpZiAoIGVuZCAmJiB0aGlzLm1hdGVyaWFscy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHRcdFx0XHRmb3IgKCBsZXQgbWkgPSB0aGlzLm1hdGVyaWFscy5sZW5ndGggLSAxOyBtaSA+PSAwOyBtaSAtLSApIHtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHRoaXMubWF0ZXJpYWxzWyBtaSBdLmdyb3VwQ291bnQgPD0gMCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnNwbGljZSggbWksIDEgKTtcblxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEd1YXJhbnRlZSBhdCBsZWFzdCBvbmUgZW1wdHkgbWF0ZXJpYWwsIHRoaXMgbWFrZXMgdGhlIGNyZWF0aW9uIGxhdGVyIG1vcmUgc3RyYWlnaHQgZm9yd2FyZC5cblx0XHRcdFx0XHRpZiAoIGVuZCAmJiB0aGlzLm1hdGVyaWFscy5sZW5ndGggPT09IDAgKSB7XG5cblx0XHRcdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnB1c2goIHtcblx0XHRcdFx0XHRcdFx0bmFtZTogJycsXG5cdFx0XHRcdFx0XHRcdHNtb290aDogdGhpcy5zbW9vdGhcblx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBsYXN0TXVsdGlNYXRlcmlhbDtcblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBJbmhlcml0IHByZXZpb3VzIG9iamVjdHMgbWF0ZXJpYWwuXG5cdFx0XHQvLyBTcGVjIHRlbGxzIHVzIHRoYXQgYSBkZWNsYXJlZCBtYXRlcmlhbCBtdXN0IGJlIHNldCB0byBhbGwgb2JqZWN0cyB1bnRpbCBhIG5ldyBtYXRlcmlhbCBpcyBkZWNsYXJlZC5cblx0XHRcdC8vIElmIGEgdXNlbXRsIGRlY2xhcmF0aW9uIGlzIGVuY291bnRlcmVkIHdoaWxlIHRoaXMgbmV3IG9iamVjdCBpcyBiZWluZyBwYXJzZWQsIGl0IHdpbGxcblx0XHRcdC8vIG92ZXJ3cml0ZSB0aGUgaW5oZXJpdGVkIG1hdGVyaWFsLiBFeGNlcHRpb24gYmVpbmcgdGhhdCB0aGVyZSB3YXMgYWxyZWFkeSBmYWNlIGRlY2xhcmF0aW9uc1xuXHRcdFx0Ly8gdG8gdGhlIGluaGVyaXRlZCBtYXRlcmlhbCwgdGhlbiBpdCB3aWxsIGJlIHByZXNlcnZlZCBmb3IgcHJvcGVyIE11bHRpTWF0ZXJpYWwgY29udGludWF0aW9uLlxuXG5cdFx0XHRpZiAoIHByZXZpb3VzTWF0ZXJpYWwgJiYgcHJldmlvdXNNYXRlcmlhbC5uYW1lICYmIHR5cGVvZiBwcmV2aW91c01hdGVyaWFsLmNsb25lID09PSAnZnVuY3Rpb24nICkge1xuXG5cdFx0XHRcdGNvbnN0IGRlY2xhcmVkID0gcHJldmlvdXNNYXRlcmlhbC5jbG9uZSggMCApO1xuXHRcdFx0XHRkZWNsYXJlZC5pbmhlcml0ZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLm9iamVjdC5tYXRlcmlhbHMucHVzaCggZGVjbGFyZWQgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9iamVjdHMucHVzaCggdGhpcy5vYmplY3QgKTtcblxuXHRcdH0sXG5cblx0XHRmaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRpZiAoIHRoaXMub2JqZWN0ICYmIHR5cGVvZiB0aGlzLm9iamVjdC5fZmluYWxpemUgPT09ICdmdW5jdGlvbicgKSB7XG5cblx0XHRcdFx0dGhpcy5vYmplY3QuX2ZpbmFsaXplKCB0cnVlICk7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRwYXJzZVZlcnRleEluZGV4OiBmdW5jdGlvbiAoIHZhbHVlLCBsZW4gKSB7XG5cblx0XHRcdGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoIHZhbHVlLCAxMCApO1xuXHRcdFx0cmV0dXJuICggaW5kZXggPj0gMCA/IGluZGV4IC0gMSA6IGluZGV4ICsgbGVuIC8gMyApICogMztcblxuXHRcdH0sXG5cblx0XHRwYXJzZU5vcm1hbEluZGV4OiBmdW5jdGlvbiAoIHZhbHVlLCBsZW4gKSB7XG5cblx0XHRcdGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoIHZhbHVlLCAxMCApO1xuXHRcdFx0cmV0dXJuICggaW5kZXggPj0gMCA/IGluZGV4IC0gMSA6IGluZGV4ICsgbGVuIC8gMyApICogMztcblxuXHRcdH0sXG5cblx0XHRwYXJzZVVWSW5kZXg6IGZ1bmN0aW9uICggdmFsdWUsIGxlbiApIHtcblxuXHRcdFx0Y29uc3QgaW5kZXggPSBwYXJzZUludCggdmFsdWUsIDEwICk7XG5cdFx0XHRyZXR1cm4gKCBpbmRleCA+PSAwID8gaW5kZXggLSAxIDogaW5kZXggKyBsZW4gLyAyICkgKiAyO1xuXG5cdFx0fSxcblxuXHRcdGFkZFZlcnRleDogZnVuY3Rpb24gKCBhLCBiLCBjICkge1xuXG5cdFx0XHRjb25zdCBzcmMgPSB0aGlzLnZlcnRpY2VzO1xuXHRcdFx0Y29uc3QgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudmVydGljZXM7XG5cblx0XHRcdGRzdC5wdXNoKCBzcmNbIGEgKyAwIF0sIHNyY1sgYSArIDEgXSwgc3JjWyBhICsgMiBdICk7XG5cdFx0XHRkc3QucHVzaCggc3JjWyBiICsgMCBdLCBzcmNbIGIgKyAxIF0sIHNyY1sgYiArIDIgXSApO1xuXHRcdFx0ZHN0LnB1c2goIHNyY1sgYyArIDAgXSwgc3JjWyBjICsgMSBdLCBzcmNbIGMgKyAyIF0gKTtcblxuXHRcdH0sXG5cblx0XHRhZGRWZXJ0ZXhQb2ludDogZnVuY3Rpb24gKCBhICkge1xuXG5cdFx0XHRjb25zdCBzcmMgPSB0aGlzLnZlcnRpY2VzO1xuXHRcdFx0Y29uc3QgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudmVydGljZXM7XG5cblx0XHRcdGRzdC5wdXNoKCBzcmNbIGEgKyAwIF0sIHNyY1sgYSArIDEgXSwgc3JjWyBhICsgMiBdICk7XG5cblx0XHR9LFxuXG5cdFx0YWRkVmVydGV4TGluZTogZnVuY3Rpb24gKCBhICkge1xuXG5cdFx0XHRjb25zdCBzcmMgPSB0aGlzLnZlcnRpY2VzO1xuXHRcdFx0Y29uc3QgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudmVydGljZXM7XG5cblx0XHRcdGRzdC5wdXNoKCBzcmNbIGEgKyAwIF0sIHNyY1sgYSArIDEgXSwgc3JjWyBhICsgMiBdICk7XG5cblx0XHR9LFxuXG5cdFx0YWRkTm9ybWFsOiBmdW5jdGlvbiAoIGEsIGIsIGMgKSB7XG5cblx0XHRcdGNvbnN0IHNyYyA9IHRoaXMubm9ybWFscztcblx0XHRcdGNvbnN0IGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5Lm5vcm1hbHM7XG5cblx0XHRcdGRzdC5wdXNoKCBzcmNbIGEgKyAwIF0sIHNyY1sgYSArIDEgXSwgc3JjWyBhICsgMiBdICk7XG5cdFx0XHRkc3QucHVzaCggc3JjWyBiICsgMCBdLCBzcmNbIGIgKyAxIF0sIHNyY1sgYiArIDIgXSApO1xuXHRcdFx0ZHN0LnB1c2goIHNyY1sgYyArIDAgXSwgc3JjWyBjICsgMSBdLCBzcmNbIGMgKyAyIF0gKTtcblxuXHRcdH0sXG5cblx0XHRhZGRGYWNlTm9ybWFsOiBmdW5jdGlvbiAoIGEsIGIsIGMgKSB7XG5cblx0XHRcdGNvbnN0IHNyYyA9IHRoaXMudmVydGljZXM7XG5cdFx0XHRjb25zdCBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS5ub3JtYWxzO1xuXG5cdFx0XHRfdkEuZnJvbUFycmF5KCBzcmMsIGEgKTtcblx0XHRcdF92Qi5mcm9tQXJyYXkoIHNyYywgYiApO1xuXHRcdFx0X3ZDLmZyb21BcnJheSggc3JjLCBjICk7XG5cblx0XHRcdF9jYi5zdWJWZWN0b3JzKCBfdkMsIF92QiApO1xuXHRcdFx0X2FiLnN1YlZlY3RvcnMoIF92QSwgX3ZCICk7XG5cdFx0XHRfY2IuY3Jvc3MoIF9hYiApO1xuXG5cdFx0XHRfY2Iubm9ybWFsaXplKCk7XG5cblx0XHRcdGRzdC5wdXNoKCBfY2IueCwgX2NiLnksIF9jYi56ICk7XG5cdFx0XHRkc3QucHVzaCggX2NiLngsIF9jYi55LCBfY2IueiApO1xuXHRcdFx0ZHN0LnB1c2goIF9jYi54LCBfY2IueSwgX2NiLnogKTtcblxuXHRcdH0sXG5cblx0XHRhZGRDb2xvcjogZnVuY3Rpb24gKCBhLCBiLCBjICkge1xuXG5cdFx0XHRjb25zdCBzcmMgPSB0aGlzLmNvbG9ycztcblx0XHRcdGNvbnN0IGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LmNvbG9ycztcblxuXHRcdFx0aWYgKCBzcmNbIGEgXSAhPT0gdW5kZWZpbmVkICkgZHN0LnB1c2goIHNyY1sgYSArIDAgXSwgc3JjWyBhICsgMSBdLCBzcmNbIGEgKyAyIF0gKTtcblx0XHRcdGlmICggc3JjWyBiIF0gIT09IHVuZGVmaW5lZCApIGRzdC5wdXNoKCBzcmNbIGIgKyAwIF0sIHNyY1sgYiArIDEgXSwgc3JjWyBiICsgMiBdICk7XG5cdFx0XHRpZiAoIHNyY1sgYyBdICE9PSB1bmRlZmluZWQgKSBkc3QucHVzaCggc3JjWyBjICsgMCBdLCBzcmNbIGMgKyAxIF0sIHNyY1sgYyArIDIgXSApO1xuXG5cdFx0fSxcblxuXHRcdGFkZFVWOiBmdW5jdGlvbiAoIGEsIGIsIGMgKSB7XG5cblx0XHRcdGNvbnN0IHNyYyA9IHRoaXMudXZzO1xuXHRcdFx0Y29uc3QgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudXZzO1xuXG5cdFx0XHRkc3QucHVzaCggc3JjWyBhICsgMCBdLCBzcmNbIGEgKyAxIF0gKTtcblx0XHRcdGRzdC5wdXNoKCBzcmNbIGIgKyAwIF0sIHNyY1sgYiArIDEgXSApO1xuXHRcdFx0ZHN0LnB1c2goIHNyY1sgYyArIDAgXSwgc3JjWyBjICsgMSBdICk7XG5cblx0XHR9LFxuXG5cdFx0YWRkRGVmYXVsdFVWOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnV2cztcblxuXHRcdFx0ZHN0LnB1c2goIDAsIDAgKTtcblx0XHRcdGRzdC5wdXNoKCAwLCAwICk7XG5cdFx0XHRkc3QucHVzaCggMCwgMCApO1xuXG5cdFx0fSxcblxuXHRcdGFkZFVWTGluZTogZnVuY3Rpb24gKCBhICkge1xuXG5cdFx0XHRjb25zdCBzcmMgPSB0aGlzLnV2cztcblx0XHRcdGNvbnN0IGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnV2cztcblxuXHRcdFx0ZHN0LnB1c2goIHNyY1sgYSArIDAgXSwgc3JjWyBhICsgMSBdICk7XG5cblx0XHR9LFxuXG5cdFx0YWRkRmFjZTogZnVuY3Rpb24gKCBhLCBiLCBjLCB1YSwgdWIsIHVjLCBuYSwgbmIsIG5jICkge1xuXG5cdFx0XHRjb25zdCB2TGVuID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG5cblx0XHRcdGxldCBpYSA9IHRoaXMucGFyc2VWZXJ0ZXhJbmRleCggYSwgdkxlbiApO1xuXHRcdFx0bGV0IGliID0gdGhpcy5wYXJzZVZlcnRleEluZGV4KCBiLCB2TGVuICk7XG5cdFx0XHRsZXQgaWMgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoIGMsIHZMZW4gKTtcblxuXHRcdFx0dGhpcy5hZGRWZXJ0ZXgoIGlhLCBpYiwgaWMgKTtcblx0XHRcdHRoaXMuYWRkQ29sb3IoIGlhLCBpYiwgaWMgKTtcblxuXHRcdFx0Ly8gbm9ybWFsc1xuXG5cdFx0XHRpZiAoIG5hICE9PSB1bmRlZmluZWQgJiYgbmEgIT09ICcnICkge1xuXG5cdFx0XHRcdGNvbnN0IG5MZW4gPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xuXG5cdFx0XHRcdGlhID0gdGhpcy5wYXJzZU5vcm1hbEluZGV4KCBuYSwgbkxlbiApO1xuXHRcdFx0XHRpYiA9IHRoaXMucGFyc2VOb3JtYWxJbmRleCggbmIsIG5MZW4gKTtcblx0XHRcdFx0aWMgPSB0aGlzLnBhcnNlTm9ybWFsSW5kZXgoIG5jLCBuTGVuICk7XG5cblx0XHRcdFx0dGhpcy5hZGROb3JtYWwoIGlhLCBpYiwgaWMgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHR0aGlzLmFkZEZhY2VOb3JtYWwoIGlhLCBpYiwgaWMgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyB1dnNcblxuXHRcdFx0aWYgKCB1YSAhPT0gdW5kZWZpbmVkICYmIHVhICE9PSAnJyApIHtcblxuXHRcdFx0XHRjb25zdCB1dkxlbiA9IHRoaXMudXZzLmxlbmd0aDtcblxuXHRcdFx0XHRpYSA9IHRoaXMucGFyc2VVVkluZGV4KCB1YSwgdXZMZW4gKTtcblx0XHRcdFx0aWIgPSB0aGlzLnBhcnNlVVZJbmRleCggdWIsIHV2TGVuICk7XG5cdFx0XHRcdGljID0gdGhpcy5wYXJzZVVWSW5kZXgoIHVjLCB1dkxlbiApO1xuXG5cdFx0XHRcdHRoaXMuYWRkVVYoIGlhLCBpYiwgaWMgKTtcblxuXHRcdFx0XHR0aGlzLm9iamVjdC5nZW9tZXRyeS5oYXNVVkluZGljZXMgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIGFkZCBwbGFjZWhvbGRlciB2YWx1ZXMgKGZvciBpbmNvbnNpc3RlbnQgZmFjZSBkZWZpbml0aW9ucylcblxuXHRcdFx0XHR0aGlzLmFkZERlZmF1bHRVVigpO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0YWRkUG9pbnRHZW9tZXRyeTogZnVuY3Rpb24gKCB2ZXJ0aWNlcyApIHtcblxuXHRcdFx0dGhpcy5vYmplY3QuZ2VvbWV0cnkudHlwZSA9ICdQb2ludHMnO1xuXG5cdFx0XHRjb25zdCB2TGVuID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG5cblx0XHRcdGZvciAoIGxldCB2aSA9IDAsIGwgPSB2ZXJ0aWNlcy5sZW5ndGg7IHZpIDwgbDsgdmkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoIHZlcnRpY2VzWyB2aSBdLCB2TGVuICk7XG5cblx0XHRcdFx0dGhpcy5hZGRWZXJ0ZXhQb2ludCggaW5kZXggKTtcblx0XHRcdFx0dGhpcy5hZGRDb2xvciggaW5kZXggKTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdGFkZExpbmVHZW9tZXRyeTogZnVuY3Rpb24gKCB2ZXJ0aWNlcywgdXZzICkge1xuXG5cdFx0XHR0aGlzLm9iamVjdC5nZW9tZXRyeS50eXBlID0gJ0xpbmUnO1xuXG5cdFx0XHRjb25zdCB2TGVuID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG5cdFx0XHRjb25zdCB1dkxlbiA9IHRoaXMudXZzLmxlbmd0aDtcblxuXHRcdFx0Zm9yICggbGV0IHZpID0gMCwgbCA9IHZlcnRpY2VzLmxlbmd0aDsgdmkgPCBsOyB2aSArKyApIHtcblxuXHRcdFx0XHR0aGlzLmFkZFZlcnRleExpbmUoIHRoaXMucGFyc2VWZXJ0ZXhJbmRleCggdmVydGljZXNbIHZpIF0sIHZMZW4gKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGxldCB1dmkgPSAwLCBsID0gdXZzLmxlbmd0aDsgdXZpIDwgbDsgdXZpICsrICkge1xuXG5cdFx0XHRcdHRoaXMuYWRkVVZMaW5lKCB0aGlzLnBhcnNlVVZJbmRleCggdXZzWyB1dmkgXSwgdXZMZW4gKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fTtcblxuXHRzdGF0ZS5zdGFydE9iamVjdCggJycsIGZhbHNlICk7XG5cblx0cmV0dXJuIHN0YXRlO1xuXG59XG5cbi8vXG5cbmNsYXNzIE9CSkxvYWRlciBleHRlbmRzIExvYWRlciB7XG5cblx0Y29uc3RydWN0b3IoIG1hbmFnZXIgKSB7XG5cblx0XHRzdXBlciggbWFuYWdlciApO1xuXG5cdFx0dGhpcy5tYXRlcmlhbHMgPSBudWxsO1xuXG5cdH1cblxuXHRsb2FkKCB1cmwsIG9uTG9hZCwgb25Qcm9ncmVzcywgb25FcnJvciApIHtcblxuXHRcdGNvbnN0IHNjb3BlID0gdGhpcztcblxuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBGaWxlTG9hZGVyKCB0aGlzLm1hbmFnZXIgKTtcblx0XHRsb2FkZXIuc2V0UGF0aCggdGhpcy5wYXRoICk7XG5cdFx0bG9hZGVyLnNldFJlcXVlc3RIZWFkZXIoIHRoaXMucmVxdWVzdEhlYWRlciApO1xuXHRcdGxvYWRlci5zZXRXaXRoQ3JlZGVudGlhbHMoIHRoaXMud2l0aENyZWRlbnRpYWxzICk7XG5cdFx0bG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCB0ZXh0ICkge1xuXG5cdFx0XHR0cnkge1xuXG5cdFx0XHRcdG9uTG9hZCggc2NvcGUucGFyc2UoIHRleHQgKSApO1xuXG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRpZiAoIG9uRXJyb3IgKSB7XG5cblx0XHRcdFx0XHRvbkVycm9yKCBlICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRXJyb3IoIHVybCApO1xuXG5cdFx0XHR9XG5cblx0XHR9LCBvblByb2dyZXNzLCBvbkVycm9yICk7XG5cblx0fVxuXG5cdHNldE1hdGVyaWFscyggbWF0ZXJpYWxzICkge1xuXG5cdFx0dGhpcy5tYXRlcmlhbHMgPSBtYXRlcmlhbHM7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0cGFyc2UoIHRleHQgKSB7XG5cblx0XHRjb25zdCBzdGF0ZSA9IG5ldyBQYXJzZXJTdGF0ZSgpO1xuXG5cdFx0aWYgKCB0ZXh0LmluZGV4T2YoICdcXHJcXG4nICkgIT09IC0gMSApIHtcblxuXHRcdFx0Ly8gVGhpcyBpcyBmYXN0ZXIgdGhhbiBTdHJpbmcuc3BsaXQgd2l0aCByZWdleCB0aGF0IHNwbGl0cyBvbiBib3RoXG5cdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKCAvXFxyXFxuL2csICdcXG4nICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHRleHQuaW5kZXhPZiggJ1xcXFxcXG4nICkgIT09IC0gMSApIHtcblxuXHRcdFx0Ly8gam9pbiBsaW5lcyBzZXBhcmF0ZWQgYnkgYSBsaW5lIGNvbnRpbnVhdGlvbiBjaGFyYWN0ZXIgKFxcKVxuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSggL1xcXFxcXG4vZywgJycgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCggJ1xcbicgKTtcblx0XHRsZXQgbGluZSA9ICcnLCBsaW5lRmlyc3RDaGFyID0gJyc7XG5cdFx0bGV0IGxpbmVMZW5ndGggPSAwO1xuXHRcdGxldCByZXN1bHQgPSBbXTtcblxuXHRcdC8vIEZhc3RlciB0byBqdXN0IHRyaW0gbGVmdCBzaWRlIG9mIHRoZSBsaW5lLiBVc2UgaWYgYXZhaWxhYmxlLlxuXHRcdGNvbnN0IHRyaW1MZWZ0ID0gKCB0eXBlb2YgJycudHJpbUxlZnQgPT09ICdmdW5jdGlvbicgKTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkgKysgKSB7XG5cblx0XHRcdGxpbmUgPSBsaW5lc1sgaSBdO1xuXG5cdFx0XHRsaW5lID0gdHJpbUxlZnQgPyBsaW5lLnRyaW1MZWZ0KCkgOiBsaW5lLnRyaW0oKTtcblxuXHRcdFx0bGluZUxlbmd0aCA9IGxpbmUubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIGxpbmVMZW5ndGggPT09IDAgKSBjb250aW51ZTtcblxuXHRcdFx0bGluZUZpcnN0Q2hhciA9IGxpbmUuY2hhckF0KCAwICk7XG5cblx0XHRcdC8vIEB0b2RvIGludm9rZSBwYXNzZWQgaW4gaGFuZGxlciBpZiBhbnlcblx0XHRcdGlmICggbGluZUZpcnN0Q2hhciA9PT0gJyMnICkgY29udGludWU7XG5cblx0XHRcdGlmICggbGluZUZpcnN0Q2hhciA9PT0gJ3YnICkge1xuXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBsaW5lLnNwbGl0KCAvXFxzKy8gKTtcblxuXHRcdFx0XHRzd2l0Y2ggKCBkYXRhWyAwIF0gKSB7XG5cblx0XHRcdFx0XHRjYXNlICd2Jzpcblx0XHRcdFx0XHRcdHN0YXRlLnZlcnRpY2VzLnB1c2goXG5cdFx0XHRcdFx0XHRcdHBhcnNlRmxvYXQoIGRhdGFbIDEgXSApLFxuXHRcdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCBkYXRhWyAyIF0gKSxcblx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggZGF0YVsgMyBdIClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRpZiAoIGRhdGEubGVuZ3RoID49IDcgKSB7XG5cblx0XHRcdFx0XHRcdFx0X2NvbG9yLnNldFJHQihcblx0XHRcdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCBkYXRhWyA0IF0gKSxcblx0XHRcdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCBkYXRhWyA1IF0gKSxcblx0XHRcdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCBkYXRhWyA2IF0gKVxuXHRcdFx0XHRcdFx0XHQpLmNvbnZlcnRTUkdCVG9MaW5lYXIoKTtcblxuXHRcdFx0XHRcdFx0XHRzdGF0ZS5jb2xvcnMucHVzaCggX2NvbG9yLnIsIF9jb2xvci5nLCBfY29sb3IuYiApO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIGlmIG5vIGNvbG9ycyBhcmUgZGVmaW5lZCwgYWRkIHBsYWNlaG9sZGVycyBzbyBjb2xvciBhbmQgdmVydGV4IGluZGljZXMgbWF0Y2hcblxuXHRcdFx0XHRcdFx0XHRzdGF0ZS5jb2xvcnMucHVzaCggdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3ZuJzpcblx0XHRcdFx0XHRcdHN0YXRlLm5vcm1hbHMucHVzaChcblx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggZGF0YVsgMSBdICksXG5cdFx0XHRcdFx0XHRcdHBhcnNlRmxvYXQoIGRhdGFbIDIgXSApLFxuXHRcdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCBkYXRhWyAzIF0gKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3Z0Jzpcblx0XHRcdFx0XHRcdHN0YXRlLnV2cy5wdXNoKFxuXHRcdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCBkYXRhWyAxIF0gKSxcblx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggZGF0YVsgMiBdIClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSBpZiAoIGxpbmVGaXJzdENoYXIgPT09ICdmJyApIHtcblxuXHRcdFx0XHRjb25zdCBsaW5lRGF0YSA9IGxpbmUuc2xpY2UoIDEgKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0IHZlcnRleERhdGEgPSBsaW5lRGF0YS5zcGxpdCggL1xccysvICk7XG5cdFx0XHRcdGNvbnN0IGZhY2VWZXJ0aWNlcyA9IFtdO1xuXG5cdFx0XHRcdC8vIFBhcnNlIHRoZSBmYWNlIHZlcnRleCBkYXRhIGludG8gYW4gZWFzeSB0byB3b3JrIHdpdGggZm9ybWF0XG5cblx0XHRcdFx0Zm9yICggbGV0IGogPSAwLCBqbCA9IHZlcnRleERhdGEubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCB2ZXJ0ZXggPSB2ZXJ0ZXhEYXRhWyBqIF07XG5cblx0XHRcdFx0XHRpZiAoIHZlcnRleC5sZW5ndGggPiAwICkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCB2ZXJ0ZXhQYXJ0cyA9IHZlcnRleC5zcGxpdCggJy8nICk7XG5cdFx0XHRcdFx0XHRmYWNlVmVydGljZXMucHVzaCggdmVydGV4UGFydHMgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRHJhdyBhbiBlZGdlIGJldHdlZW4gdGhlIGZpcnN0IHZlcnRleCBhbmQgYWxsIHN1YnNlcXVlbnQgdmVydGljZXMgdG8gZm9ybSBhbiBuLWdvblxuXG5cdFx0XHRcdGNvbnN0IHYxID0gZmFjZVZlcnRpY2VzWyAwIF07XG5cblx0XHRcdFx0Zm9yICggbGV0IGogPSAxLCBqbCA9IGZhY2VWZXJ0aWNlcy5sZW5ndGggLSAxOyBqIDwgamw7IGogKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCB2MiA9IGZhY2VWZXJ0aWNlc1sgaiBdO1xuXHRcdFx0XHRcdGNvbnN0IHYzID0gZmFjZVZlcnRpY2VzWyBqICsgMSBdO1xuXG5cdFx0XHRcdFx0c3RhdGUuYWRkRmFjZShcblx0XHRcdFx0XHRcdHYxWyAwIF0sIHYyWyAwIF0sIHYzWyAwIF0sXG5cdFx0XHRcdFx0XHR2MVsgMSBdLCB2MlsgMSBdLCB2M1sgMSBdLFxuXHRcdFx0XHRcdFx0djFbIDIgXSwgdjJbIDIgXSwgdjNbIDIgXVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKCBsaW5lRmlyc3RDaGFyID09PSAnbCcgKSB7XG5cblx0XHRcdFx0Y29uc3QgbGluZVBhcnRzID0gbGluZS5zdWJzdHJpbmcoIDEgKS50cmltKCkuc3BsaXQoICcgJyApO1xuXHRcdFx0XHRsZXQgbGluZVZlcnRpY2VzID0gW107XG5cdFx0XHRcdGNvbnN0IGxpbmVVVnMgPSBbXTtcblxuXHRcdFx0XHRpZiAoIGxpbmUuaW5kZXhPZiggJy8nICkgPT09IC0gMSApIHtcblxuXHRcdFx0XHRcdGxpbmVWZXJ0aWNlcyA9IGxpbmVQYXJ0cztcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGxpID0gMCwgbGxlbiA9IGxpbmVQYXJ0cy5sZW5ndGg7IGxpIDwgbGxlbjsgbGkgKysgKSB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHBhcnRzID0gbGluZVBhcnRzWyBsaSBdLnNwbGl0KCAnLycgKTtcblxuXHRcdFx0XHRcdFx0aWYgKCBwYXJ0c1sgMCBdICE9PSAnJyApIGxpbmVWZXJ0aWNlcy5wdXNoKCBwYXJ0c1sgMCBdICk7XG5cdFx0XHRcdFx0XHRpZiAoIHBhcnRzWyAxIF0gIT09ICcnICkgbGluZVVWcy5wdXNoKCBwYXJ0c1sgMSBdICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN0YXRlLmFkZExpbmVHZW9tZXRyeSggbGluZVZlcnRpY2VzLCBsaW5lVVZzICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGxpbmVGaXJzdENoYXIgPT09ICdwJyApIHtcblxuXHRcdFx0XHRjb25zdCBsaW5lRGF0YSA9IGxpbmUuc2xpY2UoIDEgKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0IHBvaW50RGF0YSA9IGxpbmVEYXRhLnNwbGl0KCAnICcgKTtcblxuXHRcdFx0XHRzdGF0ZS5hZGRQb2ludEdlb21ldHJ5KCBwb2ludERhdGEgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggKCByZXN1bHQgPSBfb2JqZWN0X3BhdHRlcm4uZXhlYyggbGluZSApICkgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0Ly8gbyBvYmplY3RfbmFtZVxuXHRcdFx0XHQvLyBvclxuXHRcdFx0XHQvLyBnIGdyb3VwX25hbWVcblxuXHRcdFx0XHQvLyBXT1JLQVJPVU5EOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yODY5XG5cdFx0XHRcdC8vIGxldCBuYW1lID0gcmVzdWx0WyAwIF0uc2xpY2UoIDEgKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSAoICcgJyArIHJlc3VsdFsgMCBdLnNsaWNlKCAxICkudHJpbSgpICkuc2xpY2UoIDEgKTtcblxuXHRcdFx0XHRzdGF0ZS5zdGFydE9iamVjdCggbmFtZSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBfbWF0ZXJpYWxfdXNlX3BhdHRlcm4udGVzdCggbGluZSApICkge1xuXG5cdFx0XHRcdC8vIG1hdGVyaWFsXG5cblx0XHRcdFx0c3RhdGUub2JqZWN0LnN0YXJ0TWF0ZXJpYWwoIGxpbmUuc3Vic3RyaW5nKCA3ICkudHJpbSgpLCBzdGF0ZS5tYXRlcmlhbExpYnJhcmllcyApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBfbWF0ZXJpYWxfbGlicmFyeV9wYXR0ZXJuLnRlc3QoIGxpbmUgKSApIHtcblxuXHRcdFx0XHQvLyBtdGwgZmlsZVxuXG5cdFx0XHRcdHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzLnB1c2goIGxpbmUuc3Vic3RyaW5nKCA3ICkudHJpbSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIF9tYXBfdXNlX3BhdHRlcm4udGVzdCggbGluZSApICkge1xuXG5cdFx0XHRcdC8vIHRoZSBsaW5lIGlzIHBhcnNlZCBidXQgaWdub3JlZCBzaW5jZSB0aGUgbG9hZGVyIGFzc3VtZXMgdGV4dHVyZXMgYXJlIGRlZmluZWQgTVRMIGZpbGVzXG5cdFx0XHRcdC8vIChhY2NvcmRpbmcgdG8gaHR0cHM6Ly93d3cub2tpbm8uY29tL2NvbnYvaW1wX3dhdmUuaHRtLCAndXNlbWFwJyBpcyB0aGUgb2xkLXN0eWxlIFdhdmVmcm9udCB0ZXh0dXJlIHJlZmVyZW5jZSBtZXRob2QpXG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT0JKTG9hZGVyOiBSZW5kZXJpbmcgaWRlbnRpZmllciBcInVzZW1hcFwiIG5vdCBzdXBwb3J0ZWQuIFRleHR1cmVzIG11c3QgYmUgZGVmaW5lZCBpbiBNVEwgZmlsZXMuJyApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBsaW5lRmlyc3RDaGFyID09PSAncycgKSB7XG5cblx0XHRcdFx0cmVzdWx0ID0gbGluZS5zcGxpdCggJyAnICk7XG5cblx0XHRcdFx0Ly8gc21vb3RoIHNoYWRpbmdcblxuXHRcdFx0XHQvLyBAdG9kbyBIYW5kbGUgZmlsZXMgdGhhdCBoYXZlIHZhcnlpbmcgc21vb3RoIHZhbHVlcyBmb3IgYSBzZXQgb2YgZmFjZXMgaW5zaWRlIG9uZSBnZW9tZXRyeSxcblx0XHRcdFx0Ly8gYnV0IGRvZXMgbm90IGRlZmluZSBhIHVzZW10bCBmb3IgZWFjaCBmYWNlIHNldC5cblx0XHRcdFx0Ly8gVGhpcyBzaG91bGQgYmUgZGV0ZWN0ZWQgYW5kIGEgZHVtbXkgbWF0ZXJpYWwgY3JlYXRlZCAobGF0ZXIgTXVsdGlNYXRlcmlhbCBhbmQgZ2VvbWV0cnkgZ3JvdXBzKS5cblx0XHRcdFx0Ly8gVGhpcyByZXF1aXJlcyBzb21lIGNhcmUgdG8gbm90IGNyZWF0ZSBleHRyYSBtYXRlcmlhbCBvbiBlYWNoIHNtb290aCB2YWx1ZSBmb3IgXCJub3JtYWxcIiBvYmogZmlsZXMuXG5cdFx0XHRcdC8vIHdoZXJlIGV4cGxpY2l0IHVzZW10bCBkZWZpbmVzIGdlb21ldHJ5IGdyb3Vwcy5cblx0XHRcdFx0Ly8gRXhhbXBsZSBhc3NldDogZXhhbXBsZXMvbW9kZWxzL29iai9jZXJiZXJ1cy9DZXJiZXJ1cy5vYmpcblxuXHRcdFx0XHQvKlxuXHRcdFx0XHRcdCAqIGh0dHA6Ly9wYXVsYm91cmtlLm5ldC9kYXRhZm9ybWF0cy9vYmovXG5cdFx0XHRcdFx0ICpcblx0XHRcdFx0XHQgKiBGcm9tIGNoYXB0ZXIgXCJHcm91cGluZ1wiIFN5bnRheCBleHBsYW5hdGlvbiBcInMgZ3JvdXBfbnVtYmVyXCI6XG5cdFx0XHRcdFx0ICogXCJncm91cF9udW1iZXIgaXMgdGhlIHNtb290aGluZyBncm91cCBudW1iZXIuIFRvIHR1cm4gb2ZmIHNtb290aGluZyBncm91cHMsIHVzZSBhIHZhbHVlIG9mIDAgb3Igb2ZmLlxuXHRcdFx0XHRcdCAqIFBvbHlnb25hbCBlbGVtZW50cyB1c2UgZ3JvdXAgbnVtYmVycyB0byBwdXQgZWxlbWVudHMgaW4gZGlmZmVyZW50IHNtb290aGluZyBncm91cHMuIEZvciBmcmVlLWZvcm1cblx0XHRcdFx0XHQgKiBzdXJmYWNlcywgc21vb3RoaW5nIGdyb3VwcyBhcmUgZWl0aGVyIHR1cm5lZCBvbiBvciBvZmY7IHRoZXJlIGlzIG5vIGRpZmZlcmVuY2UgYmV0d2VlbiB2YWx1ZXMgZ3JlYXRlclxuXHRcdFx0XHRcdCAqIHRoYW4gMC5cIlxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRpZiAoIHJlc3VsdC5sZW5ndGggPiAxICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSByZXN1bHRbIDEgXS50cmltKCkudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRzdGF0ZS5vYmplY3Quc21vb3RoID0gKCB2YWx1ZSAhPT0gJzAnICYmIHZhbHVlICE9PSAnb2ZmJyApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBaQnJ1c2ggY2FuIHByb2R1Y2UgXCJzXCIgbGluZXMgIzExNzA3XG5cdFx0XHRcdFx0c3RhdGUub2JqZWN0LnNtb290aCA9IHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IG1hdGVyaWFsID0gc3RhdGUub2JqZWN0LmN1cnJlbnRNYXRlcmlhbCgpO1xuXHRcdFx0XHRpZiAoIG1hdGVyaWFsICkgbWF0ZXJpYWwuc21vb3RoID0gc3RhdGUub2JqZWN0LnNtb290aDtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBIYW5kbGUgbnVsbCB0ZXJtaW5hdGVkIGZpbGVzIHdpdGhvdXQgZXhjZXB0aW9uXG5cdFx0XHRcdGlmICggbGluZSA9PT0gJ1xcMCcgKSBjb250aW51ZTtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PQkpMb2FkZXI6IFVuZXhwZWN0ZWQgbGluZTogXCInICsgbGluZSArICdcIicgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0c3RhdGUuZmluYWxpemUoKTtcblxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IG5ldyBHcm91cCgpO1xuXHRcdGNvbnRhaW5lci5tYXRlcmlhbExpYnJhcmllcyA9IFtdLmNvbmNhdCggc3RhdGUubWF0ZXJpYWxMaWJyYXJpZXMgKTtcblxuXHRcdGNvbnN0IGhhc1ByaW1pdGl2ZXMgPSAhICggc3RhdGUub2JqZWN0cy5sZW5ndGggPT09IDEgJiYgc3RhdGUub2JqZWN0c1sgMCBdLmdlb21ldHJ5LnZlcnRpY2VzLmxlbmd0aCA9PT0gMCApO1xuXG5cdFx0aWYgKCBoYXNQcmltaXRpdmVzID09PSB0cnVlICkge1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGwgPSBzdGF0ZS5vYmplY3RzLmxlbmd0aDsgaSA8IGw7IGkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3Qgb2JqZWN0ID0gc3RhdGUub2JqZWN0c1sgaSBdO1xuXHRcdFx0XHRjb25zdCBnZW9tZXRyeSA9IG9iamVjdC5nZW9tZXRyeTtcblx0XHRcdFx0Y29uc3QgbWF0ZXJpYWxzID0gb2JqZWN0Lm1hdGVyaWFscztcblx0XHRcdFx0Y29uc3QgaXNMaW5lID0gKCBnZW9tZXRyeS50eXBlID09PSAnTGluZScgKTtcblx0XHRcdFx0Y29uc3QgaXNQb2ludHMgPSAoIGdlb21ldHJ5LnR5cGUgPT09ICdQb2ludHMnICk7XG5cdFx0XHRcdGxldCBoYXNWZXJ0ZXhDb2xvcnMgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBTa2lwIG8vZyBsaW5lIGRlY2xhcmF0aW9ucyB0aGF0IGRpZCBub3QgZm9sbG93IHdpdGggYW55IGZhY2VzXG5cdFx0XHRcdGlmICggZ2VvbWV0cnkudmVydGljZXMubGVuZ3RoID09PSAwICkgY29udGludWU7XG5cblx0XHRcdFx0Y29uc3QgYnVmZmVyZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcblxuXHRcdFx0XHRidWZmZXJnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICdwb3NpdGlvbicsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKCBnZW9tZXRyeS52ZXJ0aWNlcywgMyApICk7XG5cblx0XHRcdFx0aWYgKCBnZW9tZXRyeS5ub3JtYWxzLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRcdFx0XHRidWZmZXJnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICdub3JtYWwnLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSggZ2VvbWV0cnkubm9ybWFscywgMyApICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggZ2VvbWV0cnkuY29sb3JzLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRcdFx0XHRoYXNWZXJ0ZXhDb2xvcnMgPSB0cnVlO1xuXHRcdFx0XHRcdGJ1ZmZlcmdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ2NvbG9yJywgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoIGdlb21ldHJ5LmNvbG9ycywgMyApICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggZ2VvbWV0cnkuaGFzVVZJbmRpY2VzID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0YnVmZmVyZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCAndXYnLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSggZ2VvbWV0cnkudXZzLCAyICkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIG1hdGVyaWFsc1xuXG5cdFx0XHRcdGNvbnN0IGNyZWF0ZWRNYXRlcmlhbHMgPSBbXTtcblxuXHRcdFx0XHRmb3IgKCBsZXQgbWkgPSAwLCBtaUxlbiA9IG1hdGVyaWFscy5sZW5ndGg7IG1pIDwgbWlMZW47IG1pICsrICkge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc291cmNlTWF0ZXJpYWwgPSBtYXRlcmlhbHNbIG1pIF07XG5cdFx0XHRcdFx0Y29uc3QgbWF0ZXJpYWxIYXNoID0gc291cmNlTWF0ZXJpYWwubmFtZSArICdfJyArIHNvdXJjZU1hdGVyaWFsLnNtb290aCArICdfJyArIGhhc1ZlcnRleENvbG9ycztcblx0XHRcdFx0XHRsZXQgbWF0ZXJpYWwgPSBzdGF0ZS5tYXRlcmlhbHNbIG1hdGVyaWFsSGFzaCBdO1xuXG5cdFx0XHRcdFx0aWYgKCB0aGlzLm1hdGVyaWFscyAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdFx0bWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFscy5jcmVhdGUoIHNvdXJjZU1hdGVyaWFsLm5hbWUgKTtcblxuXHRcdFx0XHRcdFx0Ly8gbXRsIGV0Yy4gbG9hZGVycyBwcm9iYWJseSBjYW4ndCBjcmVhdGUgbGluZSBtYXRlcmlhbHMgY29ycmVjdGx5LCBjb3B5IHByb3BlcnRpZXMgdG8gYSBsaW5lIG1hdGVyaWFsLlxuXHRcdFx0XHRcdFx0aWYgKCBpc0xpbmUgJiYgbWF0ZXJpYWwgJiYgISAoIG1hdGVyaWFsIGluc3RhbmNlb2YgTGluZUJhc2ljTWF0ZXJpYWwgKSApIHtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBtYXRlcmlhbExpbmUgPSBuZXcgTGluZUJhc2ljTWF0ZXJpYWwoKTtcblx0XHRcdFx0XHRcdFx0TWF0ZXJpYWwucHJvdG90eXBlLmNvcHkuY2FsbCggbWF0ZXJpYWxMaW5lLCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdFx0XHRtYXRlcmlhbExpbmUuY29sb3IuY29weSggbWF0ZXJpYWwuY29sb3IgKTtcblx0XHRcdFx0XHRcdFx0bWF0ZXJpYWwgPSBtYXRlcmlhbExpbmU7XG5cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGlzUG9pbnRzICYmIG1hdGVyaWFsICYmICEgKCBtYXRlcmlhbCBpbnN0YW5jZW9mIFBvaW50c01hdGVyaWFsICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbWF0ZXJpYWxQb2ludHMgPSBuZXcgUG9pbnRzTWF0ZXJpYWwoIHsgc2l6ZTogMTAsIHNpemVBdHRlbnVhdGlvbjogZmFsc2UgfSApO1xuXHRcdFx0XHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBtYXRlcmlhbFBvaW50cywgbWF0ZXJpYWwgKTtcblx0XHRcdFx0XHRcdFx0bWF0ZXJpYWxQb2ludHMuY29sb3IuY29weSggbWF0ZXJpYWwuY29sb3IgKTtcblx0XHRcdFx0XHRcdFx0bWF0ZXJpYWxQb2ludHMubWFwID0gbWF0ZXJpYWwubWFwO1xuXHRcdFx0XHRcdFx0XHRtYXRlcmlhbCA9IG1hdGVyaWFsUG9pbnRzO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIG1hdGVyaWFsID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggaXNMaW5lICkge1xuXG5cdFx0XHRcdFx0XHRcdG1hdGVyaWFsID0gbmV3IExpbmVCYXNpY01hdGVyaWFsKCk7XG5cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGlzUG9pbnRzICkge1xuXG5cdFx0XHRcdFx0XHRcdG1hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKCB7IHNpemU6IDEsIHNpemVBdHRlbnVhdGlvbjogZmFsc2UgfSApO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdG1hdGVyaWFsID0gbmV3IE1lc2hQaG9uZ01hdGVyaWFsKCk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bWF0ZXJpYWwubmFtZSA9IHNvdXJjZU1hdGVyaWFsLm5hbWU7XG5cdFx0XHRcdFx0XHRtYXRlcmlhbC5mbGF0U2hhZGluZyA9IHNvdXJjZU1hdGVyaWFsLnNtb290aCA/IGZhbHNlIDogdHJ1ZTtcblx0XHRcdFx0XHRcdG1hdGVyaWFsLnZlcnRleENvbG9ycyA9IGhhc1ZlcnRleENvbG9ycztcblxuXHRcdFx0XHRcdFx0c3RhdGUubWF0ZXJpYWxzWyBtYXRlcmlhbEhhc2ggXSA9IG1hdGVyaWFsO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y3JlYXRlZE1hdGVyaWFscy5wdXNoKCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgbWVzaFxuXG5cdFx0XHRcdGxldCBtZXNoO1xuXG5cdFx0XHRcdGlmICggY3JlYXRlZE1hdGVyaWFscy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IG1pID0gMCwgbWlMZW4gPSBtYXRlcmlhbHMubGVuZ3RoOyBtaSA8IG1pTGVuOyBtaSArKyApIHtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc291cmNlTWF0ZXJpYWwgPSBtYXRlcmlhbHNbIG1pIF07XG5cdFx0XHRcdFx0XHRidWZmZXJnZW9tZXRyeS5hZGRHcm91cCggc291cmNlTWF0ZXJpYWwuZ3JvdXBTdGFydCwgc291cmNlTWF0ZXJpYWwuZ3JvdXBDb3VudCwgbWkgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggaXNMaW5lICkge1xuXG5cdFx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmVTZWdtZW50cyggYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHMgKTtcblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIGlzUG9pbnRzICkge1xuXG5cdFx0XHRcdFx0XHRtZXNoID0gbmV3IFBvaW50cyggYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHMgKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdG1lc2ggPSBuZXcgTWVzaCggYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHMgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0aWYgKCBpc0xpbmUgKSB7XG5cblx0XHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZVNlZ21lbnRzKCBidWZmZXJnZW9tZXRyeSwgY3JlYXRlZE1hdGVyaWFsc1sgMCBdICk7XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBpc1BvaW50cyApIHtcblxuXHRcdFx0XHRcdFx0bWVzaCA9IG5ldyBQb2ludHMoIGJ1ZmZlcmdlb21ldHJ5LCBjcmVhdGVkTWF0ZXJpYWxzWyAwIF0gKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdG1lc2ggPSBuZXcgTWVzaCggYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHNbIDAgXSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtZXNoLm5hbWUgPSBvYmplY3QubmFtZTtcblxuXHRcdFx0XHRjb250YWluZXIuYWRkKCBtZXNoICk7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgdGhlIGRlZmF1bHQgcGFyc2VyIHN0YXRlIG9iamVjdCB3aXRoIG5vIGdlb21ldHJ5IGRhdGEsIGludGVycHJldCBkYXRhIGFzIHBvaW50IGNsb3VkXG5cblx0XHRcdGlmICggc3RhdGUudmVydGljZXMubGVuZ3RoID4gMCApIHtcblxuXHRcdFx0XHRjb25zdCBtYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCggeyBzaXplOiAxLCBzaXplQXR0ZW51YXRpb246IGZhbHNlIH0gKTtcblxuXHRcdFx0XHRjb25zdCBidWZmZXJnZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xuXG5cdFx0XHRcdGJ1ZmZlcmdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJywgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoIHN0YXRlLnZlcnRpY2VzLCAzICkgKTtcblxuXHRcdFx0XHRpZiAoIHN0YXRlLmNvbG9ycy5sZW5ndGggPiAwICYmIHN0YXRlLmNvbG9yc1sgMCBdICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRidWZmZXJnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICdjb2xvcicsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKCBzdGF0ZS5jb2xvcnMsIDMgKSApO1xuXHRcdFx0XHRcdG1hdGVyaWFsLnZlcnRleENvbG9ycyA9IHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHBvaW50cyA9IG5ldyBQb2ludHMoIGJ1ZmZlcmdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXHRcdFx0XHRjb250YWluZXIuYWRkKCBwb2ludHMgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcblxuXHR9XG5cbn1cblxuZXhwb3J0IHsgT0JKTG9hZGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BsYXkudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=