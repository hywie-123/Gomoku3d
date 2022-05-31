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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwrQ0FBWTtBQUNoQztBQUNBLDRCQUE0QixpREFBYzs7O0FBRzFDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG1CQUFtQiw4QkFBOEI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQixZQUFZOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxRQUFROztBQUVSOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUEsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsTUFBTTs7QUFFTixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RDs7QUFFeEQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLDBDQUFPOztBQUUvQixLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLG9EQUFpQjs7QUFFbkM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCOztBQUUzQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNB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QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZ0RBQWdELFNBQVM7O0FBRXpEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb21va3UzZC8uL3NyYy9nYW1lL0dhbWVBcGkudHMiLCJ3ZWJwYWNrOi8vZ29tb2t1M2QvLi9zcmMvZ2FtZS9HYW1lUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vZ29tb2t1M2QvLi9zcmMvZ2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9nb21va3UzZC8uL3NyYy9wbGF5LnRzIiwid2VicGFjazovL2dvbW9rdTNkL2V4dGVybmFsIHZhciBcIlRIUkVFXCIiLCJ3ZWJwYWNrOi8vZ29tb2t1M2QvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL0FyY2JhbGxDb250cm9scy5qcyIsIndlYnBhY2s6Ly9nb21va3UzZC8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9PQkpMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZ29tb2t1M2Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29tb2t1M2Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvbW9rdTNkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29tb2t1M2Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb21va3UzZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2dvbW9rdTNkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9nb21va3UzZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVBcGkge1xyXG4gICAgcHJpdmF0ZSBnYW1lSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBnYW1lRGF0YTogYW55O1xyXG4gICAgcHJpdmF0ZSB1c2VyTmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoISB0aGlzLnVzZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSAoYXdhaXQoYXdhaXQgZmV0Y2goJy9hcGkvdjIvbG9naW4nKSkuanNvbigpIGFzIGFueSkuZGF0YVtcInVzZXJuYW1lXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISB0aGlzLmdhbWVJZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IChhd2FpdChhd2FpdCBmZXRjaCgnL2FwaS92Mi9qb2luJykpLmpzb24oKSBhcyBhbnkpLmRhdGFbXCJnYW1lX2lkXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVEYXRhID0gKGF3YWl0KGF3YWl0IGZldGNoKGAvYXBpL3YyL2dhbWVzLyR7dGhpcy5nYW1lSWR9YCkpLmpzb24oKSBhcyBhbnkpLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGhhc1dvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lRGF0YS53aW5uZXIgPT09IHRoaXMudXNlck5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGhhc0xvc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZURhdGEud2lubmVyICE9PSB0aGlzLnVzZXJOYW1lICYmIHRoaXMuZ2FtZURhdGEud2lubmVyICE9PSAnJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaXNNeVR1cm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZURhdGEubmV4dCA9PT0gdGhpcy51c2VyTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Qm9hcmRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lRGF0YS5ib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbW92ZShwb3M6IFZlY3RvcjMpIHtcclxuICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS92Mi9nYW1lcy8ke3RoaXMuZ2FtZUlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHg6IHBvcy54LFxyXG4gICAgICAgICAgICAgICAgeTogcG9zLnksXHJcbiAgICAgICAgICAgICAgICB6OiBwb3MueixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyB0aHJlZSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IEFyY2JhbGxDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9BcmNiYWxsQ29udHJvbHMnXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVJlbmRlcmVyIHtcclxuICAgIHByaXZhdGUgY2FtZXJhICA6IHRocmVlLlBlcnNwZWN0aXZlQ2FtZXJhO1xyXG4gICAgcHJpdmF0ZSBjb250cm9sczogQXJjYmFsbENvbnRyb2xzO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVuZGVyZXI6IHRocmVlLldlYkdMUmVuZGVyZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2NlbmUgICA6IHRocmVlLlNjZW5lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHNjZW5lOiB0aHJlZS5TY2VuZSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgdGhyZWUuV2ViR0xSZW5kZXJlcih7IGNhbnZhcywgYW50aWFsaWFzOiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhFMUY1RkUpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QW5pbWF0aW9uTG9vcCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IHRocmVlLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICAgICAgICA2MCwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMzApO1xyXG5cclxuICAgICAgICBjb25zdCBhbWJpZW50X2xpZ2h0ID0gbmV3IHRocmVlLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMC45KTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZChhbWJpZW50X2xpZ2h0KTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbl9saWdodCA9IG5ldyB0aHJlZS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAwLjMpO1xyXG4gICAgICAgIG1haW5fbGlnaHQucG9zaXRpb24uc2V0KDEsIDIsIDMpO1xyXG4gICAgICAgIG1haW5fbGlnaHQubG9va0F0KDAsIDAsIDApO1xyXG4gICAgICAgIG1haW5fbGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgbWFpbl9saWdodC5zaGFkb3cuYmlhcyA9IDA7XHJcbiAgICAgICAgbWFpbl9saWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IDIwNDg7XHJcbiAgICAgICAgbWFpbl9saWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSAyMDQ4O1xyXG4gICAgICAgIG1haW5fbGlnaHQuc2hhZG93LmNhbWVyYS5sZWZ0ID0gLTEwO1xyXG4gICAgICAgIG1haW5fbGlnaHQuc2hhZG93LmNhbWVyYS5yaWdodCA9IDEwO1xyXG4gICAgICAgIG1haW5fbGlnaHQuc2hhZG93LmNhbWVyYS50b3AgPSAtMTA7XHJcbiAgICAgICAgbWFpbl9saWdodC5zaGFkb3cuY2FtZXJhLmJvdHRvbSA9IDEwO1xyXG4gICAgICAgIG1haW5fbGlnaHQuc2hhZG93LmNhbWVyYS5uZWFyID0gMTtcclxuICAgICAgICBtYWluX2xpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gMTA7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQobWFpbl9saWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbGxfbGlnaHQgPSBuZXcgdGhyZWUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMC4xKTtcclxuICAgICAgICBmaWxsX2xpZ2h0LnBvc2l0aW9uLnNldCgtMSwgLTIsIC0zKTtcclxuICAgICAgICBmaWxsX2xpZ2h0Lmxvb2tBdCgwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZChmaWxsX2xpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBBcmNiYWxsQ29udHJvbHMoXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMuc2V0R2l6bW9zVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jb250cm9scy5lbmFibGVab29tID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250cm9scy5lbmFibGVQYW4gID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250cm9scy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnY2hhbmdlJywgKCkgPT4gdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q2FtZXJhKHBvc2l0aW9uOiB0aHJlZS5WZWN0b3IzLCBsb29rQXQ6IHRocmVlLlZlY3RvcjMpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KHBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQobG9va0F0KTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSYXlDYXN0ZXIoY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCByYXljYXN0ZXIgPSBuZXcgdGhyZWUuUmF5Y2FzdGVyKCk7XHJcbiAgICAgICAgcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEobmV3IHRocmVlLlZlY3RvcjIoXHJcbiAgICAgICAgICAgICsgKGNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCApICogMiAtIDEsXHJcbiAgICAgICAgICAgIC0gKGNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMiArIDEpLCB0aGlzLmNhbWVyYSk7XHJcbiAgICAgICAgcmV0dXJuIHJheWNhc3RlcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyB0aHJlZSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IE9CSkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlcidcclxuXHJcbmltcG9ydCB7IEdhbWVSZW5kZXJlciB9IGZyb20gJy4vR2FtZVJlbmRlcmVyJztcclxuaW1wb3J0IHsgR2FtZUFwaSAgICAgIH0gZnJvbSAnLi9HYW1lQXBpJztcclxuXHJcbmVudW0gQm94U3RhdGUgeyBFbXB0eSwgUGxheWVyLCBPcHBvbmVudCwgfVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogR2FtZVJlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBhcGkgICAgIDogR2FtZUFwaTtcclxuXHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHNjZW5lIDogdGhyZWUuU2NlbmU7XHJcblxyXG4gICAgcHJpdmF0ZSBib2FyZFNpemUgIDogdGhyZWUuVmVjdG9yM1R1cGxlO1xyXG4gICAgcHJpdmF0ZSBib2FyZFN0YXRlIDogQm94U3RhdGVbXVtdW107XHJcbiAgICBwcml2YXRlIGJvYXJkT2JqZWN0OiB0aHJlZS5PYmplY3QzRDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBib3hPYmplY3RzICA6IHRocmVlLk1lc2hbXVtdW10gICAgID0gdW5kZWZpbmVkIGFzIGFueTtcclxuICAgIHByaXZhdGUgYm94R2VvbWV0cnkgOiB0aHJlZS5CdWZmZXJHZW9tZXRyeSA9IHVuZGVmaW5lZCBhcyBhbnk7XHJcbiAgICBwcml2YXRlIGJveE1hdGVyaWFsczogeyBba2V5IGluIEJveFN0YXRlXTogdGhyZWUuTWF0ZXJpYWwgfCBudWxsIH0gPSB7XHJcbiAgICAgICAgW0JveFN0YXRlLkVtcHR5ICAgICBdOiBudWxsLFxyXG4gICAgICAgIFtCb3hTdGF0ZS5QbGF5ZXIgICAgXTogbmV3IHRocmVlLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4ODFENEZBIH0pLFxyXG4gICAgICAgIFtCb3hTdGF0ZS5PcHBvbmVudCAgXTogbmV3IHRocmVlLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4RjA2MjkyIH0pLFxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGhvdmVyUG9zaXRpb246IHRocmVlLlZlY3RvcjNUdXBsZSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBob3Zlck9iamVjdCAgOiB0aHJlZS5NZXNoID0gdW5kZWZpbmVkIGFzIGFueTtcclxuICAgIHByaXZhdGUgaG92ZXJNYXRlcmlhbDogdGhyZWUuTWF0ZXJpYWwgPSBuZXcgdGhyZWUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgIGNvbG9yOiAweDgxRDRGQSxcclxuICAgICAgICB3aXJlZnJhbWU6IHRydWUsIH0pO1xyXG5cclxuICAgIHByaXZhdGUgbW91c2VEb3duUG9zaXRpb246IHRocmVlLlZlY3RvcjIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG9uV29uIDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIHByaXZhdGUgb25Mb3N0OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgICAgICAgYm9hcmRTaXplOiB0aHJlZS5WZWN0b3IzVHVwbGUgPSBbMTEsIDExLCAxMV0sXHJcbiAgICAgICAgb25Xb24gOiAoKSA9PiBQcm9taXNlPHZvaWQ+LFxyXG4gICAgICAgIG9uTG9zdDogKCkgPT4gUHJvbWlzZTx2b2lkPiwpIHtcclxuICAgICAgICB0aGlzLmFwaSA9IG5ldyBHYW1lQXBpKCk7XHJcbiAgICAgICAgdGhpcy5vbldvbiAgPSBvbldvbjtcclxuICAgICAgICB0aGlzLm9uTG9zdCA9IG9uTG9zdDtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5zY2VuZSAgPSBuZXcgdGhyZWUuU2NlbmUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IEdhbWVSZW5kZXJlcih0aGlzLmNhbnZhcywgdGhpcy5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRDYW1lcmEoXHJcbiAgICAgICAgICAgIG5ldyB0aHJlZS5WZWN0b3IzKDAsIDAsIDEwKSxcclxuICAgICAgICAgICAgbmV3IHRocmVlLlZlY3RvcjMoMCwgMCwgIDApKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib2FyZFNpemUgID0gYm9hcmRTaXplO1xyXG4gICAgICAgIHRoaXMuYm9hcmRTdGF0ZSA9IGFycmF5M0QodGhpcy5ib2FyZFNpemUsICgpID0+IEJveFN0YXRlLkVtcHR5KTtcclxuICAgICAgICB0aGlzLmJvYXJkT2JqZWN0ID0gbmV3IHRocmVlLk9iamVjdDNEKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZE9iamVjdC5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgICAgIC0gKHRoaXMuYm9hcmRTaXplWzBdIC0gMSkgLyAyLFxyXG4gICAgICAgICAgICAtICh0aGlzLmJvYXJkU2l6ZVsxXSAtIDEpIC8gMixcclxuICAgICAgICAgICAgLSAodGhpcy5ib2FyZFNpemVbMl0gLSAxKSAvIDIpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuYm9hcmRPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbXlUdXJuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzRmlyc3RNb3ZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZE1vZGVscygpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcy5vbm1vdXNlbW92ZSA9IGFzeW5jIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghIHRoaXMubXlUdXJuKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRmlyc3RNb3ZlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIb3ZlclBvc2l0aW9uRm9yRmlyc3RNb3ZlKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSG92ZXJQb3NpdGlvbihlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcbiAgICAgICAgICAgIHRoaXMub25Ib3ZlclN0YXRlQ2hhbmdlZCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYW52YXMub25tb3VzZWRvd24gPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93blBvc2l0aW9uID0gbmV3IHRocmVlLlZlY3RvcjIoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbnZhcy5vbmNsaWNrID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW91c2VEb3duUG9zaXRpb24gPSB0aGlzLm1vdXNlRG93blBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93blBvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubXlUdXJuICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyUG9zaXRpb24gJiZcclxuICAgICAgICAgICAgICAgIG1vdXNlRG93blBvc2l0aW9uICYmXHJcbiAgICAgICAgICAgICAgICBtb3VzZURvd25Qb3NpdGlvbi5lcXVhbHMobmV3IHRocmVlLlZlY3RvcjIoZS5jbGllbnRYLCBlLmNsaWVudFkpKSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hcGkubW92ZShuZXcgdGhyZWUuVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyUG9zaXRpb25bMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlclBvc2l0aW9uWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJQb3NpdGlvblsyXSkpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53YWl0Rm9yTXlUdXJuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YWl0Rm9yTXlUdXJuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyB3YWl0Rm9yTXlUdXJuKCkge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoYXdhaXQgdGhpcy5hcGkuaGFzV29uICgpKSB7IGF3YWl0IHRoaXMub25Xb24gKCk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiAoYXdhaXQgdGhpcy5hcGkuaGFzTG9zdCgpKSB7IGF3YWl0IHRoaXMub25Mb3N0KCk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkU3RhdGUgPSBhd2FpdCB0aGlzLmFwaS5nZXRCb2FyZFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuICAgICA9IGF3YWl0IHRoaXMuYXBpLmlzTXlUdXJuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSAhIHRoaXMuYm9hcmRTdGF0ZS5zb21lKFxyXG4gICAgICAgICAgICAgICAgbyA9PiBvLnNvbWUobyA9PiBvLnNvbWUobyA9PiBvICE9PSBCb3hTdGF0ZS5FbXB0eSkpKTtcclxuICAgICAgICAgICAgdGhpcy5vbkJvYXJkU3RhdGVDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm15VHVybikgYnJlYWs7XHJcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnQoXCJZb3VyIHR1cm4hXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgbG9hZE1vZGVscygpIHtcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XHJcbiAgICAgICAgY29uc3QgYm94TG9hZGVkID0gYXdhaXQgbG9hZGVyLmxvYWRBc3luYyhcIi9zdGF0aWMvbW9kZWxzL2JveC5vYmpcIik7XHJcbiAgICAgICAgbGV0IGJveEdlb21ldHJ5OiB0aHJlZS5CdWZmZXJHZW9tZXRyeSA9IHVuZGVmaW5lZCBhcyBhbnk7XHJcbiAgICAgICAgYm94TG9hZGVkLnRyYXZlcnNlKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgdGhyZWUuTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgYm94R2VvbWV0cnkgPSBjaGlsZC5nZW9tZXRyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJveEdlb21ldHJ5ID0gYm94R2VvbWV0cnk7XHJcbiAgICAgICAgdGhpcy5ib3hHZW9tZXRyeS5zY2FsZSgwLjM1LCAwLjM1LCAwLjM1KTtcclxuICAgICAgICB0aGlzLmJveE9iamVjdHMgPSBhcnJheTNEKHRoaXMuYm9hcmRTaXplLCAoaSwgaiwgaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib3ggPSBuZXcgdGhyZWUuTWVzaCh0aGlzLmJveEdlb21ldHJ5LCB0aGlzLmJveE1hdGVyaWFsc1tCb3hTdGF0ZS5QbGF5ZXJdISk7XHJcbiAgICAgICAgICAgIGJveC5wb3NpdGlvbi5zZXQoaSwgaiwgayk7XHJcbiAgICAgICAgICAgIGJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRPYmplY3QuYWRkKGJveCk7XHJcbiAgICAgICAgICAgIHJldHVybiBib3g7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaG92ZXJPYmplY3QgPSBuZXcgdGhyZWUuTWVzaCh0aGlzLmJveEdlb21ldHJ5LCB0aGlzLmhvdmVyTWF0ZXJpYWwpO1xyXG4gICAgICAgIHRoaXMuaG92ZXJPYmplY3QudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm9hcmRPYmplY3QuYWRkKHRoaXMuaG92ZXJPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Cb2FyZFN0YXRlQ2hhbmdlZCgpIHtcclxuICAgICAgICBhcnJheTNEKHRoaXMuYm9hcmRTaXplLCAoaSwgaiwgaykgPT4gW2ksIGosIGtdKVxyXG4gICAgICAgICAgICAuZmxhdCgpXHJcbiAgICAgICAgICAgIC5mbGF0KClcclxuICAgICAgICAgICAgLmZvckVhY2goKFtpXywgal8sIGtfXSkgPT4gKChpOiBudW1iZXIsIGo6IG51bWJlciwgazogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB0aGlzLmJveE9iamVjdHNbaV0hW2pdIVtrXSE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmJvYXJkU3RhdGVbaV0hW2pdIVtrXSFcclxuICAgICAgICAgICAgICAgIG9iai5tYXRlcmlhbCAgICAgID0gdGhpcy5ib3hNYXRlcmlhbHNbdmFsXSA/PyBvYmoubWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICBvYmoudmlzaWJsZSAgICAgICA9IHZhbCAhPT0gQm94U3RhdGUuRW1wdHk7XHJcbiAgICAgICAgICAgICAgICBvYmouY2FzdFNoYWRvdyAgICA9IHZhbCAhPT0gQm94U3RhdGUuRW1wdHk7XHJcbiAgICAgICAgICAgICAgICBvYmoucmVjZWl2ZVNoYWRvdyA9IHZhbCAhPT0gQm94U3RhdGUuRW1wdHk7XHJcbiAgICAgICAgICAgIH0pKGlfISwgal8hLCBrXyEpKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG9uSG92ZXJTdGF0ZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJQb3NpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0LnBvc2l0aW9uLnNldChcclxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJQb3NpdGlvblswXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJQb3NpdGlvblsxXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJQb3NpdGlvblsyXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3ZlclBvc2l0aW9uKG1vdXNlWDogbnVtYmVyLCBtb3VzZVk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaG92ZXJQb3NpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgaG92ZXJDYW5kaWRhdGUgPSB0aGlzLmdldEhvdmVyQ2FuZGlkYXRlcygpO1xyXG4gICAgICAgIGNvbnN0IHJheWNhc3RlciA9IHRoaXMucmVuZGVyZXIuZ2V0UmF5Q2FzdGVyKG1vdXNlWCwgbW91c2VZKTtcclxuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoXHJcbiAgICAgICAgICAgIGhvdmVyQ2FuZGlkYXRlLm1hcCgoW2ksIGosIGtdKSA9PiB0aGlzLmJveE9iamVjdHNbaSFdIVtqIV0hW2shXSEpKTtcclxuICAgICAgICBpZiAoaW50ZXJzZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IGludGVyc2VjdGlvbnNbMF0hLm9iamVjdDtcclxuICAgICAgICAgICAgY29uc3QgW2ksIGosIGtdID0gaG92ZXJDYW5kaWRhdGUuZmluZCgoW2ksIGosIGtdKSA9PiB0aGlzLmJveE9iamVjdHNbaSFdIVtqIV0hW2shXSEgPT09IG9iaikhO1xyXG4gICAgICAgICAgICB0aGlzLmhvdmVyUG9zaXRpb24gPSBbaSEsIGohLCBrIV07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3ZlclBvc2l0aW9uRm9yRmlyc3RNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuaG92ZXJQb3NpdGlvbiA9IFtcclxuICAgICAgICAgICAgKHRoaXMuYm9hcmRTaXplWzBdIC0gMSkgLyAyLFxyXG4gICAgICAgICAgICAodGhpcy5ib2FyZFNpemVbMF0gLSAxKSAvIDIsXHJcbiAgICAgICAgICAgICh0aGlzLmJvYXJkU2l6ZVswXSAtIDEpIC8gMixcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIb3ZlckNhbmRpZGF0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oXHJcbiAgICAgICAgICAgIGFycmF5M0QodGhpcy5ib2FyZFNpemUsIChpLCBqLCBrKSA9PiBbaSwgaiwga10pXHJcbiAgICAgICAgICAgICAgICAuZmxhdCgpXHJcbiAgICAgICAgICAgICAgICAuZmxhdCgpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChbaSwgaiwga10pID0+IHRoaXMuaXNIb3ZlckNhbmRpZGF0ZShpISwgaiEsIGshKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNIb3ZlckNhbmRpZGF0ZShpOiBudW1iZXIsIGo6IG51bWJlciwgazogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFN0YXRlW2ldIVtqXSFba10hID09PSBCb3hTdGF0ZS5FbXB0eSAmJlxyXG4gICAgICAgICAgICBhcnJheTNEKFszLCAzLCAzXSwgKGksIGosIGspID0+IFtpIC0gMSwgaiAtIDEsIGsgLSAxXSlcclxuICAgICAgICAgICAgICAgIC5mbGF0KClcclxuICAgICAgICAgICAgICAgIC5mbGF0KClcclxuICAgICAgICAgICAgICAgIC5zb21lKChbZGlfLCBkal8sIGRrX10pID0+ICgoZGksIGRqLCBkaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhkaSkgKyBNYXRoLmFicyhkaikgKyBNYXRoLmFicyhkaykgPD0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGkgKyBkaSA+IDAgJiYgaSArIGRpIDwgdGhpcy5ib2FyZFNpemVbMF0gJiZcclxuICAgICAgICAgICAgICAgICAgICBqICsgZGogPiAwICYmIGogKyBkaiA8IHRoaXMuYm9hcmRTaXplWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgayArIGRrID4gMCAmJiBrICsgZGsgPCB0aGlzLmJvYXJkU2l6ZVsyXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRTdGF0ZVtpICsgZGldIVtqICsgZGpdIVtrICsgZGtdISAhPT0gQm94U3RhdGUuRW1wdHkpKFxyXG4gICAgICAgICAgICAgICAgICAgIGRpXyEsIGRqXyEsIGRrXyEpKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFycmF5M0Q8VD4oXHJcbiAgICBzaXplOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXHJcbiAgICBnZW5lcmF0b3I6IChpOiBudW1iZXIsIGo6IG51bWJlciwgazogbnVtYmVyKSA9PiBUKTogVFtdW11bXSB7XHJcbiAgICByZXR1cm4gcmFuZ2UoMCwgc2l6ZVswXSkubWFwKFxyXG4gICAgICAgIGkgPT4gcmFuZ2UoMCwgc2l6ZVsxXSkubWFwKFxyXG4gICAgICAgICAgICBqID0+IHJhbmdlKDAsIHNpemVbMl0pLm1hcChcclxuICAgICAgICAgICAgICAgIGsgPT4gZ2VuZXJhdG9yKGksIGosIGspKSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5nZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoZW5kIC0gc3RhcnQpLmtleXMoKSkubWFwKGkgPT4gc3RhcnQgKyBpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50LFxyXG4gICAgWzExLCAxMSwgMTFdLFxyXG4gICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvc3RhdGljL3ZpY3RvcnkuaHRtbFwiO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgYXMgYW55IGFzIG5ldmVyO1xyXG4gICAgfSxcclxuICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3N0YXRpYy9kZWZlYXQuaHRtbFwiO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgYXMgYW55IGFzIG5ldmVyO1xyXG4gICAgfSk7XHJcbmdhbWUuc3RhcnQoKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBUSFJFRTsiLCJpbXBvcnQge1xuXHRHcmlkSGVscGVyLFxuXHRFbGxpcHNlQ3VydmUsXG5cdEJ1ZmZlckdlb21ldHJ5LFxuXHRMaW5lLFxuXHRMaW5lQmFzaWNNYXRlcmlhbCxcblx0UmF5Y2FzdGVyLFxuXHRHcm91cCxcblx0Qm94Myxcblx0U3BoZXJlLFxuXHRRdWF0ZXJuaW9uLFxuXHRWZWN0b3IyLFxuXHRWZWN0b3IzLFxuXHRNYXRyaXg0LFxuXHRNYXRoVXRpbHMsXG5cdEV2ZW50RGlzcGF0Y2hlclxufSBmcm9tICd0aHJlZSc7XG5cbi8vdHJhY2tiYWxsIHN0YXRlXG5jb25zdCBTVEFURSA9IHtcblxuXHRJRExFOiBTeW1ib2woKSxcblx0Uk9UQVRFOiBTeW1ib2woKSxcblx0UEFOOiBTeW1ib2woKSxcblx0U0NBTEU6IFN5bWJvbCgpLFxuXHRGT1Y6IFN5bWJvbCgpLFxuXHRGT0NVUzogU3ltYm9sKCksXG5cdFpST1RBVEU6IFN5bWJvbCgpLFxuXHRUT1VDSF9NVUxUSTogU3ltYm9sKCksXG5cdEFOSU1BVElPTl9GT0NVUzogU3ltYm9sKCksXG5cdEFOSU1BVElPTl9ST1RBVEU6IFN5bWJvbCgpXG5cbn07XG5cbmNvbnN0IElOUFVUID0ge1xuXG5cdE5PTkU6IFN5bWJvbCgpLFxuXHRPTkVfRklOR0VSOiBTeW1ib2woKSxcblx0T05FX0ZJTkdFUl9TV0lUQ0hFRDogU3ltYm9sKCksXG5cdFRXT19GSU5HRVI6IFN5bWJvbCgpLFxuXHRNVUxUX0ZJTkdFUjogU3ltYm9sKCksXG5cdENVUlNPUjogU3ltYm9sKClcblxufTtcblxuLy9jdXJzb3IgY2VudGVyIGNvb3JkaW5hdGVzXG5jb25zdCBfY2VudGVyID0ge1xuXG5cdHg6IDAsXG5cdHk6IDBcblxufTtcblxuLy90cmFuc2Zvcm1hdGlvbiBtYXRyaWNlcyBmb3IgZ2l6bW9zIGFuZCBjYW1lcmFcbmNvbnN0IF90cmFuc2Zvcm1hdGlvbiA9IHtcblxuXHRjYW1lcmE6IG5ldyBNYXRyaXg0KCksXG5cdGdpem1vczogbmV3IE1hdHJpeDQoKVxuXG59O1xuXG4vL2V2ZW50c1xuY29uc3QgX2NoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuY29uc3QgX3N0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcbmNvbnN0IF9lbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuY29uc3QgX3JheWNhc3RlciA9IG5ldyBSYXljYXN0ZXIoKTtcbmNvbnN0IF9vZmZzZXQgPSBuZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfZ2l6bW9NYXRyaXhTdGF0ZVRlbXAgPSBuZXcgTWF0cml4NCgpO1xuY29uc3QgX2NhbWVyYU1hdHJpeFN0YXRlVGVtcCA9IG5ldyBNYXRyaXg0KCk7XG5jb25zdCBfc2NhbGVQb2ludFRlbXAgPSBuZXcgVmVjdG9yMygpO1xuLyoqXG4gKlxuICogQHBhcmFtIHtDYW1lcmF9IGNhbWVyYSBWaXJ0dWFsIGNhbWVyYSB1c2VkIGluIHRoZSBzY2VuZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZG9tRWxlbWVudCBSZW5kZXJlcidzIGRvbSBlbGVtZW50XG4gKiBAcGFyYW0ge1NjZW5lfSBzY2VuZSBUaGUgc2NlbmUgdG8gYmUgcmVuZGVyZWRcbiAqL1xuY2xhc3MgQXJjYmFsbENvbnRyb2xzIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3RvciggY2FtZXJhLCBkb21FbGVtZW50LCBzY2VuZSA9IG51bGwgKSB7XG5cblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuY2FtZXJhID0gbnVsbDtcblx0XHR0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZTtcblx0XHR0aGlzLnRhcmdldCA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0dGhpcy5fY3VycmVudFRhcmdldCA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0dGhpcy5yYWRpdXNGYWN0b3IgPSAwLjY3O1xuXG5cdFx0dGhpcy5tb3VzZUFjdGlvbnMgPSBbXTtcblx0XHR0aGlzLl9tb3VzZU9wID0gbnVsbDtcblxuXG5cdFx0Ly9nbG9iYWwgdmVjdG9ycyBhbmQgbWF0cmljZXMgdGhhdCBhcmUgdXNlZCBpbiBzb21lIG9wZXJhdGlvbnMgdG8gYXZvaWQgY3JlYXRpbmcgbmV3IG9iamVjdHMgZXZlcnkgdGltZSAoZS5nLiBldmVyeSB0aW1lIGN1cnNvciBtb3Zlcylcblx0XHR0aGlzLl92Ml8xID0gbmV3IFZlY3RvcjIoKTtcblx0XHR0aGlzLl92M18xID0gbmV3IFZlY3RvcjMoKTtcblx0XHR0aGlzLl92M18yID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdHRoaXMuX200XzEgPSBuZXcgTWF0cml4NCgpO1xuXHRcdHRoaXMuX200XzIgPSBuZXcgTWF0cml4NCgpO1xuXG5cdFx0dGhpcy5fcXVhdCA9IG5ldyBRdWF0ZXJuaW9uKCk7XG5cblx0XHQvL3RyYW5zZm9ybWF0aW9uIG1hdHJpY2VzXG5cdFx0dGhpcy5fdHJhbnNsYXRpb25NYXRyaXggPSBuZXcgTWF0cml4NCgpOyAvL21hdHJpeCBmb3IgdHJhbnNsYXRpb24gb3BlcmF0aW9uXG5cdFx0dGhpcy5fcm90YXRpb25NYXRyaXggPSBuZXcgTWF0cml4NCgpOyAvL21hdHJpeCBmb3Igcm90YXRpb24gb3BlcmF0aW9uXG5cdFx0dGhpcy5fc2NhbGVNYXRyaXggPSBuZXcgTWF0cml4NCgpOyAvL21hdHJpeCBmb3Igc2NhbGluZyBvcGVyYXRpb25cblxuXHRcdHRoaXMuX3JvdGF0aW9uQXhpcyA9IG5ldyBWZWN0b3IzKCk7IC8vYXhpcyBmb3Igcm90YXRlIG9wZXJhdGlvblxuXG5cblx0XHQvL2NhbWVyYSBzdGF0ZVxuXHRcdHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlID0gbmV3IE1hdHJpeDQoKTtcblx0XHR0aGlzLl9jYW1lcmFQcm9qZWN0aW9uU3RhdGUgPSBuZXcgTWF0cml4NCgpO1xuXG5cdFx0dGhpcy5fZm92U3RhdGUgPSAxO1xuXHRcdHRoaXMuX3VwU3RhdGUgPSBuZXcgVmVjdG9yMygpO1xuXHRcdHRoaXMuX3pvb21TdGF0ZSA9IDE7XG5cdFx0dGhpcy5fbmVhclBvcyA9IDA7XG5cdFx0dGhpcy5fZmFyUG9zID0gMDtcblxuXHRcdHRoaXMuX2dpem1vTWF0cml4U3RhdGUgPSBuZXcgTWF0cml4NCgpO1xuXG5cdFx0Ly9pbml0aWFsIHZhbHVlc1xuXHRcdHRoaXMuX3VwMCA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0dGhpcy5fem9vbTAgPSAxO1xuXHRcdHRoaXMuX2ZvdjAgPSAwO1xuXHRcdHRoaXMuX2luaXRpYWxOZWFyID0gMDtcblx0XHR0aGlzLl9uZWFyUG9zMCA9IDA7XG5cdFx0dGhpcy5faW5pdGlhbEZhciA9IDA7XG5cdFx0dGhpcy5fZmFyUG9zMCA9IDA7XG5cdFx0dGhpcy5fY2FtZXJhTWF0cml4U3RhdGUwID0gbmV3IE1hdHJpeDQoKTtcblx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlMCA9IG5ldyBNYXRyaXg0KCk7XG5cblx0XHQvL3BvaW50ZXJzIGFycmF5XG5cdFx0dGhpcy5fYnV0dG9uID0gLSAxO1xuXHRcdHRoaXMuX3RvdWNoU3RhcnQgPSBbXTtcblx0XHR0aGlzLl90b3VjaEN1cnJlbnQgPSBbXTtcblx0XHR0aGlzLl9pbnB1dCA9IElOUFVULk5PTkU7XG5cblx0XHQvL3R3byBmaW5nZXJzIHRvdWNoIGludGVyYWN0aW9uXG5cdFx0dGhpcy5fc3dpdGNoU2Vuc2liaWxpdHkgPSAzMjtcdC8vbWluaW11bSBtb3ZlbWVudCB0byBiZSBwZXJmb3JtZWQgdG8gZmlyZSBzaW5nbGUgcGFuIHN0YXJ0IGFmdGVyIHRoZSBzZWNvbmQgZmluZ2VyIGhhcyBiZWVuIHJlbGVhc2VkXG5cdFx0dGhpcy5fc3RhcnRGaW5nZXJEaXN0YW5jZSA9IDA7IC8vZGlzdGFuY2UgYmV0d2VlbiB0d28gZmluZ2Vyc1xuXHRcdHRoaXMuX2N1cnJlbnRGaW5nZXJEaXN0YW5jZSA9IDA7XG5cdFx0dGhpcy5fc3RhcnRGaW5nZXJSb3RhdGlvbiA9IDA7IC8vYW1vdW50IG9mIHJvdGF0aW9uIHBlcmZvcm1lZCB3aXRoIHR3byBmaW5nZXJzXG5cdFx0dGhpcy5fY3VycmVudEZpbmdlclJvdGF0aW9uID0gMDtcblxuXHRcdC8vZG91YmxlIHRhcFxuXHRcdHRoaXMuX2RldlB4UmF0aW8gPSAwO1xuXHRcdHRoaXMuX2Rvd25WYWxpZCA9IHRydWU7XG5cdFx0dGhpcy5fbmNsaWNrcyA9IDA7XG5cdFx0dGhpcy5fZG93bkV2ZW50cyA9IFtdO1xuXHRcdHRoaXMuX2Rvd25TdGFydCA9IDA7XHQvL3BvaW50ZXJEb3duIHRpbWVcblx0XHR0aGlzLl9jbGlja1N0YXJ0ID0gMDtcdC8vZmlyc3QgY2xpY2sgdGltZVxuXHRcdHRoaXMuX21heERvd25UaW1lID0gMjUwO1xuXHRcdHRoaXMuX21heEludGVydmFsID0gMzAwO1xuXHRcdHRoaXMuX3Bvc1RocmVzaG9sZCA9IDI0O1xuXHRcdHRoaXMuX21vdmVtZW50VGhyZXNob2xkID0gMjQ7XG5cblx0XHQvL2N1cnNvciBwb3NpdGlvbnNcblx0XHR0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xuXHRcdHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0Ly9ncmlkXG5cdFx0dGhpcy5fZ3JpZCA9IG51bGw7IC8vZ3JpZCB0byBiZSB2aXN1YWxpemVkIGR1cmluZyBwYW4gb3BlcmF0aW9uXG5cdFx0dGhpcy5fZ3JpZFBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdC8vZ2l6bW9zXG5cdFx0dGhpcy5fZ2l6bW9zID0gbmV3IEdyb3VwKCk7XG5cdFx0dGhpcy5fY3VydmVQdHMgPSAxMjg7XG5cblxuXHRcdC8vYW5pbWF0aW9uc1xuXHRcdHRoaXMuX3RpbWVTdGFydCA9IC0gMTsgLy9pbml0aWFsIHRpbWVcblx0XHR0aGlzLl9hbmltYXRpb25JZCA9IC0gMTtcblxuXHRcdC8vZm9jdXMgYW5pbWF0aW9uXG5cdFx0dGhpcy5mb2N1c0FuaW1hdGlvblRpbWUgPSA1MDA7IC8vZHVyYXRpb24gb2YgZm9jdXMgYW5pbWF0aW9uIGluIG1zXG5cblx0XHQvL3JvdGF0ZSBhbmltYXRpb25cblx0XHR0aGlzLl90aW1lUHJldiA9IDA7IC8vdGltZSBhdCB3aGljaCBwcmV2aW91cyByb3RhdGUgb3BlcmF0aW9uIGhhcyBiZWVuIGRldGVjdGVkXG5cdFx0dGhpcy5fdGltZUN1cnJlbnQgPSAwOyAvL3RpbWUgYXQgd2hpY2ggY3VycmVudCByb3RhdGUgb3BlcmF0aW9uIGhhcyBiZWVuIGRldGVjdGVkXG5cdFx0dGhpcy5fYW5nbGVQcmV2ID0gMDsgLy9hbmdsZSBvZiBwcmV2aW91cyByb3RhdGlvblxuXHRcdHRoaXMuX2FuZ2xlQ3VycmVudCA9IDA7IC8vYW5nbGUgb2YgY3VycmVudCByb3RhdGlvblxuXHRcdHRoaXMuX2N1cnNvclBvc1ByZXYgPSBuZXcgVmVjdG9yMygpO1x0Ly9jdXJzb3IgcG9zaXRpb24gd2hlbiBwcmV2aW91cyByb3RhdGUgb3BlcmF0aW9uIGhhcyBiZWVuIGRldGVjdGVkXG5cdFx0dGhpcy5fY3Vyc29yUG9zQ3VyciA9IG5ldyBWZWN0b3IzKCk7Ly9jdXJzb3IgcG9zaXRpb24gd2hlbiBjdXJyZW50IHJvdGF0ZSBvcGVyYXRpb24gaGFzIGJlZW4gZGV0ZWN0ZWRcblx0XHR0aGlzLl93UHJldiA9IDA7IC8vYW5ndWxhciB2ZWxvY2l0eSBvZiB0aGUgcHJldmlvdXMgcm90YXRlIG9wZXJhdGlvblxuXHRcdHRoaXMuX3dDdXJyID0gMDsgLy9hbmd1bGFyIHZlbG9jaXR5IG9mIHRoZSBjdXJyZW50IHJvdGF0ZSBvcGVyYXRpb25cblxuXG5cdFx0Ly9wYXJhbWV0ZXJzXG5cdFx0dGhpcy5hZGp1c3ROZWFyRmFyID0gZmFsc2U7XG5cdFx0dGhpcy5zY2FsZUZhY3RvciA9IDEuMTtcdC8vem9vbS9kaXN0YW5jZSBtdWx0aXBsaWVyXG5cdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gMjU7XG5cdFx0dGhpcy53TWF4ID0gMjA7XHQvL21heGltdW0gYW5ndWxhciB2ZWxvY2l0eSBhbGxvd2VkXG5cdFx0dGhpcy5lbmFibGVBbmltYXRpb25zID0gdHJ1ZTsgLy9pZiBhbmltYXRpb25zIHNob3VsZCBiZSBwZXJmb3JtZWRcblx0XHR0aGlzLmVuYWJsZUdyaWQgPSBmYWxzZTsgLy9pZiBncmlkIHNob3VsZCBiZSBzaG93ZWQgZHVyaW5nIHBhbiBvcGVyYXRpb25cblx0XHR0aGlzLmN1cnNvclpvb20gPSBmYWxzZTtcdC8vaWYgd2hlZWwgem9vbSBzaG91bGQgYmUgY3Vyc29yIGNlbnRlcmVkXG5cdFx0dGhpcy5taW5Gb3YgPSA1O1xuXHRcdHRoaXMubWF4Rm92ID0gOTA7XG5cblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdFx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0XHR0aGlzLmVuYWJsZUdpem1vcyA9IHRydWU7XG5cblx0XHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0XHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cdFx0dGhpcy5taW5ab29tID0gMDtcblx0XHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHRcdC8vdHJhY2tiYWxsIHBhcmFtZXRlcnNcblx0XHR0aGlzLl90YlJhZGl1cyA9IDE7XG5cblx0XHQvL0ZTQVxuXHRcdHRoaXMuX3N0YXRlID0gU1RBVEUuSURMRTtcblxuXHRcdHRoaXMuc2V0Q2FtZXJhKCBjYW1lcmEgKTtcblxuXHRcdGlmICggdGhpcy5zY2VuZSAhPSBudWxsICkge1xuXG5cdFx0XHR0aGlzLnNjZW5lLmFkZCggdGhpcy5fZ2l6bW9zICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLmRvbUVsZW1lbnQuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7XG5cdFx0dGhpcy5fZGV2UHhSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG5cdFx0dGhpcy5pbml0aWFsaXplTW91c2VBY3Rpb25zKCk7XG5cblx0XHR0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgdGhpcy5vbkNvbnRleHRNZW51ICk7XG5cdFx0dGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIHRoaXMub25XaGVlbCApO1xuXHRcdHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24gKTtcblx0XHR0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLm9uUG9pbnRlckNhbmNlbCApO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplICk7XG5cblx0fVxuXG5cdC8vbGlzdGVuZXJzXG5cblx0b25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XG5cblx0XHRjb25zdCBzY2FsZSA9ICggdGhpcy5fZ2l6bW9zLnNjYWxlLnggKyB0aGlzLl9naXptb3Muc2NhbGUueSArIHRoaXMuX2dpem1vcy5zY2FsZS56ICkgLyAzO1xuXHRcdHRoaXMuX3RiUmFkaXVzID0gdGhpcy5jYWxjdWxhdGVUYlJhZGl1cyggdGhpcy5jYW1lcmEgKTtcblxuXHRcdGNvbnN0IG5ld1JhZGl1cyA9IHRoaXMuX3RiUmFkaXVzIC8gc2NhbGU7XG5cdFx0Y29uc3QgY3VydmUgPSBuZXcgRWxsaXBzZUN1cnZlKCAwLCAwLCBuZXdSYWRpdXMsIG5ld1JhZGl1cyApO1xuXHRcdGNvbnN0IHBvaW50cyA9IGN1cnZlLmdldFBvaW50cyggdGhpcy5fY3VydmVQdHMgKTtcblx0XHRjb25zdCBjdXJ2ZUdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCkuc2V0RnJvbVBvaW50cyggcG9pbnRzICk7XG5cblxuXHRcdGZvciAoIGNvbnN0IGdpem1vIGluIHRoaXMuX2dpem1vcy5jaGlsZHJlbiApIHtcblxuXHRcdFx0dGhpcy5fZ2l6bW9zLmNoaWxkcmVuWyBnaXptbyBdLmdlb21ldHJ5ID0gY3VydmVHZW9tZXRyeTtcblxuXHRcdH1cblxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0fTtcblxuXHRvbkNvbnRleHRNZW51ID0gKCBldmVudCApID0+IHtcblxuXHRcdGlmICggISB0aGlzLmVuYWJsZWQgKSB7XG5cblx0XHRcdHJldHVybjtcblxuXHRcdH1cblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubW91c2VBY3Rpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0aWYgKCB0aGlzLm1vdXNlQWN0aW9uc1sgaSBdLm1vdXNlID09IDIgKSB7XG5cblx0XHRcdFx0Ly9wcmV2ZW50IG9ubHkgaWYgYnV0dG9uIDIgaXMgYWN0dWFsbHkgdXNlZFxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH07XG5cblx0b25Qb2ludGVyQ2FuY2VsID0gKCkgPT4ge1xuXG5cdFx0dGhpcy5fdG91Y2hTdGFydC5zcGxpY2UoIDAsIHRoaXMuX3RvdWNoU3RhcnQubGVuZ3RoICk7XG5cdFx0dGhpcy5fdG91Y2hDdXJyZW50LnNwbGljZSggMCwgdGhpcy5fdG91Y2hDdXJyZW50Lmxlbmd0aCApO1xuXHRcdHRoaXMuX2lucHV0ID0gSU5QVVQuTk9ORTtcblxuXHR9O1xuXG5cdG9uUG9pbnRlckRvd24gPSAoIGV2ZW50ICkgPT4ge1xuXG5cdFx0aWYgKCBldmVudC5idXR0b24gPT0gMCAmJiBldmVudC5pc1ByaW1hcnkgKSB7XG5cblx0XHRcdHRoaXMuX2Rvd25WYWxpZCA9IHRydWU7XG5cdFx0XHR0aGlzLl9kb3duRXZlbnRzLnB1c2goIGV2ZW50ICk7XG5cdFx0XHR0aGlzLl9kb3duU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHRoaXMuX2Rvd25WYWxpZCA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBldmVudC5wb2ludGVyVHlwZSA9PSAndG91Y2gnICYmIHRoaXMuX2lucHV0ICE9IElOUFVULkNVUlNPUiApIHtcblxuXHRcdFx0dGhpcy5fdG91Y2hTdGFydC5wdXNoKCBldmVudCApO1xuXHRcdFx0dGhpcy5fdG91Y2hDdXJyZW50LnB1c2goIGV2ZW50ICk7XG5cblx0XHRcdHN3aXRjaCAoIHRoaXMuX2lucHV0ICkge1xuXG5cdFx0XHRcdGNhc2UgSU5QVVQuTk9ORTpcblxuXHRcdFx0XHRcdC8vc2luZ2xlU3RhcnRcblx0XHRcdFx0XHR0aGlzLl9pbnB1dCA9IElOUFVULk9ORV9GSU5HRVI7XG5cdFx0XHRcdFx0dGhpcy5vblNpbmdsZVBhblN0YXJ0KCBldmVudCwgJ1JPVEFURScgKTtcblxuXHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCB0aGlzLm9uUG9pbnRlck1vdmUgKTtcblx0XHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIHRoaXMub25Qb2ludGVyVXAgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgSU5QVVQuT05FX0ZJTkdFUjpcblx0XHRcdFx0Y2FzZSBJTlBVVC5PTkVfRklOR0VSX1NXSVRDSEVEOlxuXG5cdFx0XHRcdFx0Ly9kb3VibGVTdGFydFxuXHRcdFx0XHRcdHRoaXMuX2lucHV0ID0gSU5QVVQuVFdPX0ZJTkdFUjtcblxuXHRcdFx0XHRcdHRoaXMub25Sb3RhdGVTdGFydCgpO1xuXHRcdFx0XHRcdHRoaXMub25QaW5jaFN0YXJ0KCk7XG5cdFx0XHRcdFx0dGhpcy5vbkRvdWJsZVBhblN0YXJ0KCk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIElOUFVULlRXT19GSU5HRVI6XG5cblx0XHRcdFx0XHQvL211bHRpcGxlU3RhcnRcblx0XHRcdFx0XHR0aGlzLl9pbnB1dCA9IElOUFVULk1VTFRfRklOR0VSO1xuXHRcdFx0XHRcdHRoaXMub25UcmlwbGVQYW5TdGFydCggZXZlbnQgKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQucG9pbnRlclR5cGUgIT0gJ3RvdWNoJyAmJiB0aGlzLl9pbnB1dCA9PSBJTlBVVC5OT05FICkge1xuXG5cdFx0XHRsZXQgbW9kaWZpZXIgPSBudWxsO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSApIHtcblxuXHRcdFx0XHRtb2RpZmllciA9ICdDVFJMJztcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuc2hpZnRLZXkgKSB7XG5cblx0XHRcdFx0bW9kaWZpZXIgPSAnU0hJRlQnO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX21vdXNlT3AgPSB0aGlzLmdldE9wRnJvbUFjdGlvbiggZXZlbnQuYnV0dG9uLCBtb2RpZmllciApO1xuXHRcdFx0aWYgKCB0aGlzLl9tb3VzZU9wICE9IG51bGwgKSB7XG5cblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybW92ZScsIHRoaXMub25Qb2ludGVyTW92ZSApO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIHRoaXMub25Qb2ludGVyVXAgKTtcblxuXHRcdFx0XHQvL3NpbmdsZVN0YXJ0XG5cdFx0XHRcdHRoaXMuX2lucHV0ID0gSU5QVVQuQ1VSU09SO1xuXHRcdFx0XHR0aGlzLl9idXR0b24gPSBldmVudC5idXR0b247XG5cdFx0XHRcdHRoaXMub25TaW5nbGVQYW5TdGFydCggZXZlbnQsIHRoaXMuX21vdXNlT3AgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH07XG5cblx0b25Qb2ludGVyTW92ZSA9ICggZXZlbnQgKSA9PiB7XG5cblx0XHRpZiAoIGV2ZW50LnBvaW50ZXJUeXBlID09ICd0b3VjaCcgJiYgdGhpcy5faW5wdXQgIT0gSU5QVVQuQ1VSU09SICkge1xuXG5cdFx0XHRzd2l0Y2ggKCB0aGlzLl9pbnB1dCApIHtcblxuXHRcdFx0XHRjYXNlIElOUFVULk9ORV9GSU5HRVI6XG5cblx0XHRcdFx0XHQvL3NpbmdsZU1vdmVcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRvdWNoRXZlbnQoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHR0aGlzLm9uU2luZ2xlUGFuTW92ZSggZXZlbnQsIFNUQVRFLlJPVEFURSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgSU5QVVQuT05FX0ZJTkdFUl9TV0lUQ0hFRDpcblxuXHRcdFx0XHRcdGNvbnN0IG1vdmVtZW50ID0gdGhpcy5jYWxjdWxhdGVQb2ludGVyc0Rpc3RhbmNlKCB0aGlzLl90b3VjaEN1cnJlbnRbIDAgXSwgZXZlbnQgKSAqIHRoaXMuX2RldlB4UmF0aW87XG5cblx0XHRcdFx0XHRpZiAoIG1vdmVtZW50ID49IHRoaXMuX3N3aXRjaFNlbnNpYmlsaXR5ICkge1xuXG5cdFx0XHRcdFx0XHQvL3NpbmdsZU1vdmVcblx0XHRcdFx0XHRcdHRoaXMuX2lucHV0ID0gSU5QVVQuT05FX0ZJTkdFUjtcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVG91Y2hFdmVudCggZXZlbnQgKTtcblxuXHRcdFx0XHRcdFx0dGhpcy5vblNpbmdsZVBhblN0YXJ0KCBldmVudCwgJ1JPVEFURScgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBJTlBVVC5UV09fRklOR0VSOlxuXG5cdFx0XHRcdFx0Ly9yb3RhdGUvcGFuL3BpbmNoTW92ZVxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVG91Y2hFdmVudCggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHRoaXMub25Sb3RhdGVNb3ZlKCk7XG5cdFx0XHRcdFx0dGhpcy5vblBpbmNoTW92ZSgpO1xuXHRcdFx0XHRcdHRoaXMub25Eb3VibGVQYW5Nb3ZlKCk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIElOUFVULk1VTFRfRklOR0VSOlxuXG5cdFx0XHRcdFx0Ly9tdWx0TW92ZVxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVG91Y2hFdmVudCggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHRoaXMub25UcmlwbGVQYW5Nb3ZlKCBldmVudCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5wb2ludGVyVHlwZSAhPSAndG91Y2gnICYmIHRoaXMuX2lucHV0ID09IElOUFVULkNVUlNPUiApIHtcblxuXHRcdFx0bGV0IG1vZGlmaWVyID0gbnVsbDtcblxuXHRcdFx0aWYgKCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgKSB7XG5cblx0XHRcdFx0bW9kaWZpZXIgPSAnQ1RSTCc7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LnNoaWZ0S2V5ICkge1xuXG5cdFx0XHRcdG1vZGlmaWVyID0gJ1NISUZUJztcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtb3VzZU9wU3RhdGUgPSB0aGlzLmdldE9wU3RhdGVGcm9tQWN0aW9uKCB0aGlzLl9idXR0b24sIG1vZGlmaWVyICk7XG5cblx0XHRcdGlmICggbW91c2VPcFN0YXRlICE9IG51bGwgKSB7XG5cblx0XHRcdFx0dGhpcy5vblNpbmdsZVBhbk1vdmUoIGV2ZW50LCBtb3VzZU9wU3RhdGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly9jaGVja0Rpc3RhbmNlXG5cdFx0aWYgKCB0aGlzLl9kb3duVmFsaWQgKSB7XG5cblx0XHRcdGNvbnN0IG1vdmVtZW50ID0gdGhpcy5jYWxjdWxhdGVQb2ludGVyc0Rpc3RhbmNlKCB0aGlzLl9kb3duRXZlbnRzWyB0aGlzLl9kb3duRXZlbnRzLmxlbmd0aCAtIDEgXSwgZXZlbnQgKSAqIHRoaXMuX2RldlB4UmF0aW87XG5cdFx0XHRpZiAoIG1vdmVtZW50ID4gdGhpcy5fbW92ZW1lbnRUaHJlc2hvbGQgKSB7XG5cblx0XHRcdFx0dGhpcy5fZG93blZhbGlkID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9O1xuXG5cdG9uUG9pbnRlclVwID0gKCBldmVudCApID0+IHtcblxuXHRcdGlmICggZXZlbnQucG9pbnRlclR5cGUgPT0gJ3RvdWNoJyAmJiB0aGlzLl9pbnB1dCAhPSBJTlBVVC5DVVJTT1IgKSB7XG5cblx0XHRcdGNvbnN0IG5Ub3VjaCA9IHRoaXMuX3RvdWNoQ3VycmVudC5sZW5ndGg7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IG5Ub3VjaDsgaSArKyApIHtcblxuXHRcdFx0XHRpZiAoIHRoaXMuX3RvdWNoQ3VycmVudFsgaSBdLnBvaW50ZXJJZCA9PSBldmVudC5wb2ludGVySWQgKSB7XG5cblx0XHRcdFx0XHR0aGlzLl90b3VjaEN1cnJlbnQuc3BsaWNlKCBpLCAxICk7XG5cdFx0XHRcdFx0dGhpcy5fdG91Y2hTdGFydC5zcGxpY2UoIGksIDEgKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0c3dpdGNoICggdGhpcy5faW5wdXQgKSB7XG5cblx0XHRcdFx0Y2FzZSBJTlBVVC5PTkVfRklOR0VSOlxuXHRcdFx0XHRjYXNlIElOUFVULk9ORV9GSU5HRVJfU1dJVENIRUQ6XG5cblx0XHRcdFx0XHQvL3NpbmdsZUVuZFxuXHRcdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCB0aGlzLm9uUG9pbnRlck1vdmUgKTtcblx0XHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIHRoaXMub25Qb2ludGVyVXAgKTtcblxuXHRcdFx0XHRcdHRoaXMuX2lucHV0ID0gSU5QVVQuTk9ORTtcblx0XHRcdFx0XHR0aGlzLm9uU2luZ2xlUGFuRW5kKCk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIElOUFVULlRXT19GSU5HRVI6XG5cblx0XHRcdFx0XHQvL2RvdWJsZUVuZFxuXHRcdFx0XHRcdHRoaXMub25Eb3VibGVQYW5FbmQoIGV2ZW50ICk7XG5cdFx0XHRcdFx0dGhpcy5vblBpbmNoRW5kKCBldmVudCApO1xuXHRcdFx0XHRcdHRoaXMub25Sb3RhdGVFbmQoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHQvL3N3aXRjaGluZyB0byBzaW5nbGVTdGFydFxuXHRcdFx0XHRcdHRoaXMuX2lucHV0ID0gSU5QVVQuT05FX0ZJTkdFUl9TV0lUQ0hFRDtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgSU5QVVQuTVVMVF9GSU5HRVI6XG5cblx0XHRcdFx0XHRpZiAoIHRoaXMuX3RvdWNoQ3VycmVudC5sZW5ndGggPT0gMCApIHtcblxuXHRcdFx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybW92ZScsIHRoaXMub25Qb2ludGVyTW92ZSApO1xuXHRcdFx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVydXAnLCB0aGlzLm9uUG9pbnRlclVwICk7XG5cblx0XHRcdFx0XHRcdC8vbXVsdENhbmNlbFxuXHRcdFx0XHRcdFx0dGhpcy5faW5wdXQgPSBJTlBVVC5OT05FO1xuXHRcdFx0XHRcdFx0dGhpcy5vblRyaXBsZVBhbkVuZCgpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LnBvaW50ZXJUeXBlICE9ICd0b3VjaCcgJiYgdGhpcy5faW5wdXQgPT0gSU5QVVQuQ1VSU09SICkge1xuXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgdGhpcy5vblBvaW50ZXJNb3ZlICk7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIHRoaXMub25Qb2ludGVyVXAgKTtcblxuXHRcdFx0dGhpcy5faW5wdXQgPSBJTlBVVC5OT05FO1xuXHRcdFx0dGhpcy5vblNpbmdsZVBhbkVuZCgpO1xuXHRcdFx0dGhpcy5fYnV0dG9uID0gLSAxO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBldmVudC5pc1ByaW1hcnkgKSB7XG5cblx0XHRcdGlmICggdGhpcy5fZG93blZhbGlkICkge1xuXG5cdFx0XHRcdGNvbnN0IGRvd25UaW1lID0gZXZlbnQudGltZVN0YW1wIC0gdGhpcy5fZG93bkV2ZW50c1sgdGhpcy5fZG93bkV2ZW50cy5sZW5ndGggLSAxIF0udGltZVN0YW1wO1xuXG5cdFx0XHRcdGlmICggZG93blRpbWUgPD0gdGhpcy5fbWF4RG93blRpbWUgKSB7XG5cblx0XHRcdFx0XHRpZiAoIHRoaXMuX25jbGlja3MgPT0gMCApIHtcblxuXHRcdFx0XHRcdFx0Ly9maXJzdCB2YWxpZCBjbGljayBkZXRlY3RlZFxuXHRcdFx0XHRcdFx0dGhpcy5fbmNsaWNrcyA9IDE7XG5cdFx0XHRcdFx0XHR0aGlzLl9jbGlja1N0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBjbGlja0ludGVydmFsID0gZXZlbnQudGltZVN0YW1wIC0gdGhpcy5fY2xpY2tTdGFydDtcblx0XHRcdFx0XHRcdGNvbnN0IG1vdmVtZW50ID0gdGhpcy5jYWxjdWxhdGVQb2ludGVyc0Rpc3RhbmNlKCB0aGlzLl9kb3duRXZlbnRzWyAxIF0sIHRoaXMuX2Rvd25FdmVudHNbIDAgXSApICogdGhpcy5fZGV2UHhSYXRpbztcblxuXHRcdFx0XHRcdFx0aWYgKCBjbGlja0ludGVydmFsIDw9IHRoaXMuX21heEludGVydmFsICYmIG1vdmVtZW50IDw9IHRoaXMuX3Bvc1RocmVzaG9sZCApIHtcblxuXHRcdFx0XHRcdFx0XHQvL3NlY29uZCB2YWxpZCBjbGljayBkZXRlY3RlZFxuXHRcdFx0XHRcdFx0XHQvL2ZpcmUgZG91YmxlIHRhcCBhbmQgcmVzZXQgdmFsdWVzXG5cdFx0XHRcdFx0XHRcdHRoaXMuX25jbGlja3MgPSAwO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9kb3duRXZlbnRzLnNwbGljZSggMCwgdGhpcy5fZG93bkV2ZW50cy5sZW5ndGggKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5vbkRvdWJsZVRhcCggZXZlbnQgKTtcblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvL25ldyAnZmlyc3QgY2xpY2snXG5cdFx0XHRcdFx0XHRcdHRoaXMuX25jbGlja3MgPSAxO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9kb3duRXZlbnRzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2NsaWNrU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHR0aGlzLl9kb3duVmFsaWQgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLl9uY2xpY2tzID0gMDtcblx0XHRcdFx0XHR0aGlzLl9kb3duRXZlbnRzLnNwbGljZSggMCwgdGhpcy5fZG93bkV2ZW50cy5sZW5ndGggKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0dGhpcy5fbmNsaWNrcyA9IDA7XG5cdFx0XHRcdHRoaXMuX2Rvd25FdmVudHMuc3BsaWNlKCAwLCB0aGlzLl9kb3duRXZlbnRzLmxlbmd0aCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fTtcblxuXHRvbldoZWVsID0gKCBldmVudCApID0+IHtcblxuXHRcdGlmICggdGhpcy5lbmFibGVkICYmIHRoaXMuZW5hYmxlWm9vbSApIHtcblxuXHRcdFx0bGV0IG1vZGlmaWVyID0gbnVsbDtcblxuXHRcdFx0aWYgKCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgKSB7XG5cblx0XHRcdFx0bW9kaWZpZXIgPSAnQ1RSTCc7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LnNoaWZ0S2V5ICkge1xuXG5cdFx0XHRcdG1vZGlmaWVyID0gJ1NISUZUJztcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtb3VzZU9wID0gdGhpcy5nZXRPcEZyb21BY3Rpb24oICdXSEVFTCcsIG1vZGlmaWVyICk7XG5cblx0XHRcdGlmICggbW91c2VPcCAhPSBudWxsICkge1xuXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0XHRjb25zdCBub3RjaERlbHRhWSA9IDEyNTsgLy9kaXN0YW5jZSBvZiBvbmUgbm90Y2ggb2YgbW91c2Ugd2hlZWxcblx0XHRcdFx0bGV0IHNnbiA9IGV2ZW50LmRlbHRhWSAvIG5vdGNoRGVsdGFZO1xuXG5cdFx0XHRcdGxldCBzaXplID0gMTtcblxuXHRcdFx0XHRpZiAoIHNnbiA+IDAgKSB7XG5cblx0XHRcdFx0XHRzaXplID0gMSAvIHRoaXMuc2NhbGVGYWN0b3I7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggc2duIDwgMCApIHtcblxuXHRcdFx0XHRcdHNpemUgPSB0aGlzLnNjYWxlRmFjdG9yO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzd2l0Y2ggKCBtb3VzZU9wICkge1xuXG5cdFx0XHRcdFx0Y2FzZSAnWk9PTSc6XG5cblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuU0NBTEUsIHRydWUgKTtcblxuXHRcdFx0XHRcdFx0aWYgKCBzZ24gPiAwICkge1xuXG5cdFx0XHRcdFx0XHRcdHNpemUgPSAxIC8gKCBNYXRoLnBvdyggdGhpcy5zY2FsZUZhY3Rvciwgc2duICkgKTtcblxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggc2duIDwgMCApIHtcblxuXHRcdFx0XHRcdFx0XHRzaXplID0gTWF0aC5wb3coIHRoaXMuc2NhbGVGYWN0b3IsIC0gc2duICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCB0aGlzLmN1cnNvclpvb20gJiYgdGhpcy5lbmFibGVQYW4gKSB7XG5cblx0XHRcdFx0XHRcdFx0bGV0IHNjYWxlUG9pbnQ7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0aGlzLmNhbWVyYS5pc09ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdHNjYWxlUG9pbnQgPSB0aGlzLnVucHJvamVjdE9uVGJQbGFuZSggdGhpcy5jYW1lcmEsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFksIHRoaXMuZG9tRWxlbWVudCApLmFwcGx5UXVhdGVybmlvbiggdGhpcy5jYW1lcmEucXVhdGVybmlvbiApLm11bHRpcGx5U2NhbGFyKCAxIC8gdGhpcy5jYW1lcmEuem9vbSApLmFkZCggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICk7XG5cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdHNjYWxlUG9pbnQgPSB0aGlzLnVucHJvamVjdE9uVGJQbGFuZSggdGhpcy5jYW1lcmEsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFksIHRoaXMuZG9tRWxlbWVudCApLmFwcGx5UXVhdGVybmlvbiggdGhpcy5jYW1lcmEucXVhdGVybmlvbiApLmFkZCggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuYXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRoaXMuc2NhbGUoIHNpemUsIHNjYWxlUG9pbnQgKSApO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMuYXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRoaXMuc2NhbGUoIHNpemUsIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCB0aGlzLl9ncmlkICE9IG51bGwgKSB7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5kaXNwb3NlR3JpZCgpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRyYXdHcmlkKCk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXG5cdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfZW5kRXZlbnQgKTtcblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlICdGT1YnOlxuXG5cdFx0XHRcdFx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5GT1YsIHRydWUgKTtcblxuXG5cdFx0XHRcdFx0XHRcdC8vVmVydGlnbyBlZmZlY3RcblxuXHRcdFx0XHRcdFx0XHQvL1x0ICBmb3YgLyAyXG5cdFx0XHRcdFx0XHRcdC8vXHRcdHxcXFxuXHRcdFx0XHRcdFx0XHQvL1x0XHR8IFxcXG5cdFx0XHRcdFx0XHRcdC8vXHRcdHwgIFxcXG5cdFx0XHRcdFx0XHRcdC8vXHR4XHR8XHRcXFxuXHRcdFx0XHRcdFx0XHQvL1x0XHR8IFx0IFxcXG5cdFx0XHRcdFx0XHRcdC8vXHRcdHwgXHQgIFxcXG5cdFx0XHRcdFx0XHRcdC8vXHRcdHwgXyBfIF9cXFxuXHRcdFx0XHRcdFx0XHQvL1x0XHRcdHlcblxuXHRcdFx0XHRcdFx0XHQvL2NoZWNrIGZvciBpT3Mgc2hpZnQgc2hvcnRjdXRcblx0XHRcdFx0XHRcdFx0aWYgKCBldmVudC5kZWx0YVggIT0gMCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdHNnbiA9IGV2ZW50LmRlbHRhWCAvIG5vdGNoRGVsdGFZO1xuXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZSA9IDE7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoIHNnbiA+IDAgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdHNpemUgPSAxIC8gKCBNYXRoLnBvdyggdGhpcy5zY2FsZUZhY3Rvciwgc2duICkgKTtcblxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHNnbiA8IDAgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdHNpemUgPSBNYXRoLnBvdyggdGhpcy5zY2FsZUZhY3RvciwgLSBzZ24gKTtcblxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5fdjNfMS5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlICk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHggPSB0aGlzLl92M18xLmRpc3RhbmNlVG8oIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXHRcdFx0XHRcdFx0XHRsZXQgeE5ldyA9IHggLyBzaXplO1x0Ly9kaXN0YW5jZSBiZXR3ZWVuIGNhbWVyYSBhbmQgZ2l6bW9zIGlmIHNjYWxlKHNpemUsIHNjYWxlcG9pbnQpIHdvdWxkIGJlIHBlcmZvcm1lZFxuXG5cdFx0XHRcdFx0XHRcdC8vY2hlY2sgbWluIGFuZCBtYXggZGlzdGFuY2Vcblx0XHRcdFx0XHRcdFx0eE5ldyA9IE1hdGhVdGlscy5jbGFtcCggeE5ldywgdGhpcy5taW5EaXN0YW5jZSwgdGhpcy5tYXhEaXN0YW5jZSApO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHkgPSB4ICogTWF0aC50YW4oIE1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5jYW1lcmEuZm92ICogMC41ICk7XG5cblx0XHRcdFx0XHRcdFx0Ly9jYWxjdWxhdGUgbmV3IGZvdlxuXHRcdFx0XHRcdFx0XHRsZXQgbmV3Rm92ID0gTWF0aFV0aWxzLlJBRDJERUcgKiAoIE1hdGguYXRhbiggeSAvIHhOZXcgKSAqIDIgKTtcblxuXHRcdFx0XHRcdFx0XHQvL2NoZWNrIG1pbiBhbmQgbWF4IGZvdlxuXHRcdFx0XHRcdFx0XHRpZiAoIG5ld0ZvdiA+IHRoaXMubWF4Rm92ICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0bmV3Rm92ID0gdGhpcy5tYXhGb3Y7XG5cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggbmV3Rm92IDwgdGhpcy5taW5Gb3YgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRuZXdGb3YgPSB0aGlzLm1pbkZvdjtcblxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3RGlzdGFuY2UgPSB5IC8gTWF0aC50YW4oIE1hdGhVdGlscy5ERUcyUkFEICogKCBuZXdGb3YgLyAyICkgKTtcblx0XHRcdFx0XHRcdFx0c2l6ZSA9IHggLyBuZXdEaXN0YW5jZTtcblxuXHRcdFx0XHRcdFx0XHR0aGlzLnNldEZvdiggbmV3Rm92ICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuYXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRoaXMuc2NhbGUoIHNpemUsIHRoaXMuX2dpem1vcy5wb3NpdGlvbiwgZmFsc2UgKSApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICggdGhpcy5fZ3JpZCAhPSBudWxsICkge1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlzcG9zZUdyaWQoKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5kcmF3R3JpZCgpO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuSURMRSwgZmFsc2UgKTtcblxuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblx0XHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2VuZEV2ZW50ICk7XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH07XG5cblx0b25TaW5nbGVQYW5TdGFydCA9ICggZXZlbnQsIG9wZXJhdGlvbiApID0+IHtcblxuXHRcdGlmICggdGhpcy5lbmFibGVkICkge1xuXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cblx0XHRcdHRoaXMuc2V0Q2VudGVyKCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdHN3aXRjaCAoIG9wZXJhdGlvbiApIHtcblxuXHRcdFx0XHRjYXNlICdQQU4nOlxuXG5cdFx0XHRcdFx0aWYgKCAhIHRoaXMuZW5hYmxlUGFuICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIHRoaXMuX2FuaW1hdGlvbklkICE9IC0gMSApIHtcblxuXHRcdFx0XHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMuX2FuaW1hdGlvbklkICk7XG5cdFx0XHRcdFx0XHR0aGlzLl9hbmltYXRpb25JZCA9IC0gMTtcblx0XHRcdFx0XHRcdHRoaXMuX3RpbWVTdGFydCA9IC0gMTtcblxuXHRcdFx0XHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblx0XHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLlBBTiwgdHJ1ZSApO1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy51bnByb2plY3RPblRiUGxhbmUoIHRoaXMuY2FtZXJhLCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50ICkgKTtcblx0XHRcdFx0XHRpZiAoIHRoaXMuZW5hYmxlR3JpZCApIHtcblxuXHRcdFx0XHRcdFx0dGhpcy5kcmF3R3JpZCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ1JPVEFURSc6XG5cblx0XHRcdFx0XHRpZiAoICEgdGhpcy5lbmFibGVSb3RhdGUgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggdGhpcy5fYW5pbWF0aW9uSWQgIT0gLSAxICkge1xuXG5cdFx0XHRcdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5fYW5pbWF0aW9uSWQgKTtcblx0XHRcdFx0XHRcdHRoaXMuX2FuaW1hdGlvbklkID0gLSAxO1xuXHRcdFx0XHRcdFx0dGhpcy5fdGltZVN0YXJ0ID0gLSAxO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5ST1RBVEUsIHRydWUgKTtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLmNvcHkoIHRoaXMudW5wcm9qZWN0T25UYlN1cmZhY2UoIHRoaXMuY2FtZXJhLCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50LCB0aGlzLl90YlJhZGl1cyApICk7XG5cdFx0XHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggdHJ1ZSApO1xuXHRcdFx0XHRcdGlmICggdGhpcy5lbmFibGVBbmltYXRpb25zICkge1xuXG5cdFx0XHRcdFx0XHR0aGlzLl90aW1lUHJldiA9IHRoaXMuX3RpbWVDdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9hbmdsZUN1cnJlbnQgPSB0aGlzLl9hbmdsZVByZXYgPSAwO1xuXHRcdFx0XHRcdFx0dGhpcy5fY3Vyc29yUG9zUHJldi5jb3B5KCB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uICk7XG5cdFx0XHRcdFx0XHR0aGlzLl9jdXJzb3JQb3NDdXJyLmNvcHkoIHRoaXMuX2N1cnNvclBvc1ByZXYgKTtcblx0XHRcdFx0XHRcdHRoaXMuX3dDdXJyID0gMDtcblx0XHRcdFx0XHRcdHRoaXMuX3dQcmV2ID0gdGhpcy5fd0N1cnI7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ0ZPVic6XG5cblx0XHRcdFx0XHRpZiAoICEgdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSB8fCAhIHRoaXMuZW5hYmxlWm9vbSApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9hbmltYXRpb25JZCAhPSAtIDEgKSB7XG5cblx0XHRcdFx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLl9hbmltYXRpb25JZCApO1xuXHRcdFx0XHRcdFx0dGhpcy5fYW5pbWF0aW9uSWQgPSAtIDE7XG5cdFx0XHRcdFx0XHR0aGlzLl90aW1lU3RhcnQgPSAtIDE7XG5cblx0XHRcdFx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5GT1YsIHRydWUgKTtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLnNldFkoIHRoaXMuZ2V0Q3Vyc29yTkRDKCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50ICkueSAqIDAuNSApO1xuXHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi5jb3B5KCB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnWk9PTSc6XG5cblx0XHRcdFx0XHRpZiAoICEgdGhpcy5lbmFibGVab29tICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIHRoaXMuX2FuaW1hdGlvbklkICE9IC0gMSApIHtcblxuXHRcdFx0XHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMuX2FuaW1hdGlvbklkICk7XG5cdFx0XHRcdFx0XHR0aGlzLl9hbmltYXRpb25JZCA9IC0gMTtcblx0XHRcdFx0XHRcdHRoaXMuX3RpbWVTdGFydCA9IC0gMTtcblxuXHRcdFx0XHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblx0XHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLlNDQUxFLCB0cnVlICk7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbi5zZXRZKCB0aGlzLmdldEN1cnNvck5EQyggX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCApLnkgKiAwLjUgKTtcblx0XHRcdFx0XHR0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbiApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fTtcblxuXHRvblNpbmdsZVBhbk1vdmUgPSAoIGV2ZW50LCBvcFN0YXRlICkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgKSB7XG5cblx0XHRcdGNvbnN0IHJlc3RhcnQgPSBvcFN0YXRlICE9IHRoaXMuX3N0YXRlO1xuXHRcdFx0dGhpcy5zZXRDZW50ZXIoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0c3dpdGNoICggb3BTdGF0ZSApIHtcblxuXHRcdFx0XHRjYXNlIFNUQVRFLlBBTjpcblxuXHRcdFx0XHRcdGlmICggdGhpcy5lbmFibGVQYW4gKSB7XG5cblx0XHRcdFx0XHRcdGlmICggcmVzdGFydCApIHtcblxuXHRcdFx0XHRcdFx0XHQvL3N3aXRjaCB0byBwYW4gb3BlcmF0aW9uXG5cblx0XHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfZW5kRXZlbnQgKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfc3RhcnRFdmVudCApO1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggb3BTdGF0ZSwgdHJ1ZSApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLmNvcHkoIHRoaXMudW5wcm9qZWN0T25UYlBsYW5lKCB0aGlzLmNhbWVyYSwgX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCApICk7XG5cdFx0XHRcdFx0XHRcdGlmICggdGhpcy5lbmFibGVHcmlkICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kcmF3R3JpZCgpO1xuXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLmFjdGl2YXRlR2l6bW9zKCBmYWxzZSApO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vY29udGludWUgd2l0aCBwYW4gb3BlcmF0aW9uXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi5jb3B5KCB0aGlzLnVucHJvamVjdE9uVGJQbGFuZSggdGhpcy5jYW1lcmEsIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQgKSApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmFwcGx5VHJhbnNmb3JtTWF0cml4KCB0aGlzLnBhbiggdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbiwgdGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uICkgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBTVEFURS5ST1RBVEU6XG5cblx0XHRcdFx0XHRpZiAoIHRoaXMuZW5hYmxlUm90YXRlICkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIHJlc3RhcnQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly9zd2l0Y2ggdG8gcm90YXRlIG9wZXJhdGlvblxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2VuZEV2ZW50ICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIG9wU3RhdGUsIHRydWUgKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbi5jb3B5KCB0aGlzLnVucHJvamVjdE9uVGJTdXJmYWNlKCB0aGlzLmNhbWVyYSwgX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCwgdGhpcy5fdGJSYWRpdXMgKSApO1xuXG5cdFx0XHRcdFx0XHRcdGlmICggdGhpcy5lbmFibGVHcmlkICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kaXNwb3NlR3JpZCgpO1xuXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLmFjdGl2YXRlR2l6bW9zKCB0cnVlICk7XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly9jb250aW51ZSB3aXRoIHJvdGF0ZSBvcGVyYXRpb25cblx0XHRcdFx0XHRcdFx0dGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLmNvcHkoIHRoaXMudW5wcm9qZWN0T25UYlN1cmZhY2UoIHRoaXMuY2FtZXJhLCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50LCB0aGlzLl90YlJhZGl1cyApICk7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgZGlzdGFuY2UgPSB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbiApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBhbmdsZSA9IHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uYW5nbGVUbyggdGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uICk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGFtb3VudCA9IE1hdGgubWF4KCBkaXN0YW5jZSAvIHRoaXMuX3RiUmFkaXVzLCBhbmdsZSApOyAvL2VmZmVjdGl2ZSByb3RhdGlvbiBhbmdsZVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuYXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRoaXMucm90YXRlKCB0aGlzLmNhbGN1bGF0ZVJvdGF0aW9uQXhpcyggdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbiwgdGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uICksIGFtb3VudCApICk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0aGlzLmVuYWJsZUFuaW1hdGlvbnMgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHR0aGlzLl90aW1lUHJldiA9IHRoaXMuX3RpbWVDdXJyZW50O1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3RpbWVDdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYW5nbGVQcmV2ID0gdGhpcy5fYW5nbGVDdXJyZW50O1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2FuZ2xlQ3VycmVudCA9IGFtb3VudDtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9jdXJzb3JQb3NQcmV2LmNvcHkoIHRoaXMuX2N1cnNvclBvc0N1cnIgKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9jdXJzb3JQb3NDdXJyLmNvcHkoIHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbiApO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3dQcmV2ID0gdGhpcy5fd0N1cnI7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fd0N1cnIgPSB0aGlzLmNhbGN1bGF0ZUFuZ3VsYXJTcGVlZCggdGhpcy5fYW5nbGVQcmV2LCB0aGlzLl9hbmdsZUN1cnJlbnQsIHRoaXMuX3RpbWVQcmV2LCB0aGlzLl90aW1lQ3VycmVudCApO1xuXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBTVEFURS5TQ0FMRTpcblxuXHRcdFx0XHRcdGlmICggdGhpcy5lbmFibGVab29tICkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIHJlc3RhcnQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly9zd2l0Y2ggdG8gem9vbSBvcGVyYXRpb25cblxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9lbmRFdmVudCApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBvcFN0YXRlLCB0cnVlICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uc2V0WSggdGhpcy5nZXRDdXJzb3JOREMoIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQgKS55ICogMC41ICk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi5jb3B5KCB0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uICk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0aGlzLmVuYWJsZUdyaWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRpc3Bvc2VHcmlkKCk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly9jb250aW51ZSB3aXRoIHpvb20gb3BlcmF0aW9uXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNjcmVlbk5vdGNoZXMgPSA4O1x0Ly9ob3cgbWFueSB3aGVlbCBub3RjaGVzIGNvcnJlc3BvbmRzIHRvIGEgZnVsbCBzY3JlZW4gcGFuXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi5zZXRZKCB0aGlzLmdldEN1cnNvck5EQyggX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCApLnkgKiAwLjUgKTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBtb3ZlbWVudCA9IHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi55IC0gdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbi55O1xuXG5cdFx0XHRcdFx0XHRcdGxldCBzaXplID0gMTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIG1vdmVtZW50IDwgMCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdHNpemUgPSAxIC8gKCBNYXRoLnBvdyggdGhpcy5zY2FsZUZhY3RvciwgLSBtb3ZlbWVudCAqIHNjcmVlbk5vdGNoZXMgKSApO1xuXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIG1vdmVtZW50ID4gMCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdHNpemUgPSBNYXRoLnBvdyggdGhpcy5zY2FsZUZhY3RvciwgbW92ZW1lbnQgKiBzY3JlZW5Ob3RjaGVzICk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuX3YzXzEuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKHRoaXMuX2dpem1vTWF0cml4U3RhdGUpO1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMuYXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRoaXMuc2NhbGUoIHNpemUsIHRoaXMuX3YzXzEgKSApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFNUQVRFLkZPVjpcblxuXHRcdFx0XHRcdGlmICggdGhpcy5lbmFibGVab29tICYmIHRoaXMuY2FtZXJhLmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggcmVzdGFydCApIHtcblxuXHRcdFx0XHRcdFx0XHQvL3N3aXRjaCB0byBmb3Ygb3BlcmF0aW9uXG5cblx0XHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfZW5kRXZlbnQgKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfc3RhcnRFdmVudCApO1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggb3BTdGF0ZSwgdHJ1ZSApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLnNldFkoIHRoaXMuZ2V0Q3Vyc29yTkRDKCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50ICkueSAqIDAuNSApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbiApO1xuXG5cdFx0XHRcdFx0XHRcdGlmICggdGhpcy5lbmFibGVHcmlkICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kaXNwb3NlR3JpZCgpO1xuXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLmFjdGl2YXRlR2l6bW9zKCBmYWxzZSApO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vY29udGludWUgd2l0aCBmb3Ygb3BlcmF0aW9uXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNjcmVlbk5vdGNoZXMgPSA4O1x0Ly9ob3cgbWFueSB3aGVlbCBub3RjaGVzIGNvcnJlc3BvbmRzIHRvIGEgZnVsbCBzY3JlZW4gcGFuXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi5zZXRZKCB0aGlzLmdldEN1cnNvck5EQyggX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCApLnkgKiAwLjUgKTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBtb3ZlbWVudCA9IHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi55IC0gdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbi55O1xuXG5cdFx0XHRcdFx0XHRcdGxldCBzaXplID0gMTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIG1vdmVtZW50IDwgMCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdHNpemUgPSAxIC8gKCBNYXRoLnBvdyggdGhpcy5zY2FsZUZhY3RvciwgLSBtb3ZlbWVudCAqIHNjcmVlbk5vdGNoZXMgKSApO1xuXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIG1vdmVtZW50ID4gMCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdHNpemUgPSBNYXRoLnBvdyggdGhpcy5zY2FsZUZhY3RvciwgbW92ZW1lbnQgKiBzY3JlZW5Ob3RjaGVzICk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuX3YzXzEuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZSApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCB4ID0gdGhpcy5fdjNfMS5kaXN0YW5jZVRvKCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblx0XHRcdFx0XHRcdFx0bGV0IHhOZXcgPSB4IC8gc2l6ZTsgLy9kaXN0YW5jZSBiZXR3ZWVuIGNhbWVyYSBhbmQgZ2l6bW9zIGlmIHNjYWxlKHNpemUsIHNjYWxlcG9pbnQpIHdvdWxkIGJlIHBlcmZvcm1lZFxuXG5cdFx0XHRcdFx0XHRcdC8vY2hlY2sgbWluIGFuZCBtYXggZGlzdGFuY2Vcblx0XHRcdFx0XHRcdFx0eE5ldyA9IE1hdGhVdGlscy5jbGFtcCggeE5ldywgdGhpcy5taW5EaXN0YW5jZSwgdGhpcy5tYXhEaXN0YW5jZSApO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHkgPSB4ICogTWF0aC50YW4oIE1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5fZm92U3RhdGUgKiAwLjUgKTtcblxuXHRcdFx0XHRcdFx0XHQvL2NhbGN1bGF0ZSBuZXcgZm92XG5cdFx0XHRcdFx0XHRcdGxldCBuZXdGb3YgPSBNYXRoVXRpbHMuUkFEMkRFRyAqICggTWF0aC5hdGFuKCB5IC8geE5ldyApICogMiApO1xuXG5cdFx0XHRcdFx0XHRcdC8vY2hlY2sgbWluIGFuZCBtYXggZm92XG5cdFx0XHRcdFx0XHRcdG5ld0ZvdiA9IE1hdGhVdGlscy5jbGFtcCggbmV3Rm92LCB0aGlzLm1pbkZvdiwgdGhpcy5tYXhGb3YgKTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBuZXdEaXN0YW5jZSA9IHkgLyBNYXRoLnRhbiggTWF0aFV0aWxzLkRFRzJSQUQgKiAoIG5ld0ZvdiAvIDIgKSApO1xuXHRcdFx0XHRcdFx0XHRzaXplID0geCAvIG5ld0Rpc3RhbmNlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl92M18yLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZSApO1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0Rm92KCBuZXdGb3YgKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5zY2FsZSggc2l6ZSwgdGhpcy5fdjNfMiwgZmFsc2UgKSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vYWRqdXN0aW5nIGRpc3RhbmNlXG5cdFx0XHRcdFx0XHRcdF9vZmZzZXQuY29weSggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICkuc3ViKCB0aGlzLmNhbWVyYS5wb3NpdGlvbiApLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKCBuZXdEaXN0YW5jZSAvIHggKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fbTRfMS5tYWtlVHJhbnNsYXRpb24oIF9vZmZzZXQueCwgX29mZnNldC55LCBfb2Zmc2V0LnogKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdH1cblxuXHR9O1xuXG5cdG9uU2luZ2xlUGFuRW5kID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLl9zdGF0ZSA9PSBTVEFURS5ST1RBVEUgKSB7XG5cblxuXHRcdFx0aWYgKCAhIHRoaXMuZW5hYmxlUm90YXRlICkge1xuXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRoaXMuZW5hYmxlQW5pbWF0aW9ucyApIHtcblxuXHRcdFx0XHQvL3BlcmZvcm0gcm90YXRpb24gYW5pbWF0aW9uXG5cdFx0XHRcdGNvbnN0IGRlbHRhVGltZSA9ICggcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLl90aW1lQ3VycmVudCApO1xuXHRcdFx0XHRpZiAoIGRlbHRhVGltZSA8IDEyMCApIHtcblxuXHRcdFx0XHRcdGNvbnN0IHcgPSBNYXRoLmFicyggKCB0aGlzLl93UHJldiArIHRoaXMuX3dDdXJyICkgLyAyICk7XG5cblx0XHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0XHR0aGlzLl9hbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGZ1bmN0aW9uICggdCApIHtcblxuXHRcdFx0XHRcdFx0c2VsZi51cGRhdGVUYlN0YXRlKCBTVEFURS5BTklNQVRJT05fUk9UQVRFLCB0cnVlICk7XG5cdFx0XHRcdFx0XHRjb25zdCByb3RhdGlvbkF4aXMgPSBzZWxmLmNhbGN1bGF0ZVJvdGF0aW9uQXhpcyggc2VsZi5fY3Vyc29yUG9zUHJldiwgc2VsZi5fY3Vyc29yUG9zQ3VyciApO1xuXG5cdFx0XHRcdFx0XHRzZWxmLm9uUm90YXRpb25BbmltKCB0LCByb3RhdGlvbkF4aXMsIE1hdGgubWluKCB3LCBzZWxmLndNYXggKSApO1xuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvL2N1cnNvciBoYXMgYmVlbiBzdGFuZGluZyBzdGlsbCBmb3Igb3ZlciAxMjAgbXMgc2luY2UgbGFzdCBtb3ZlbWVudFxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuSURMRSwgZmFsc2UgKTtcblx0XHRcdFx0XHR0aGlzLmFjdGl2YXRlR2l6bW9zKCBmYWxzZSApO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuSURMRSwgZmFsc2UgKTtcblx0XHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmICggdGhpcy5fc3RhdGUgPT0gU1RBVEUuUEFOIHx8IHRoaXMuX3N0YXRlID09IFNUQVRFLklETEUgKSB7XG5cblx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuSURMRSwgZmFsc2UgKTtcblxuXHRcdFx0aWYgKCB0aGlzLmVuYWJsZUdyaWQgKSB7XG5cblx0XHRcdFx0dGhpcy5kaXNwb3NlR3JpZCgpO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cblx0XHR9XG5cblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9lbmRFdmVudCApO1xuXG5cdH07XG5cblx0b25Eb3VibGVUYXAgPSAoIGV2ZW50ICkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgJiYgdGhpcy5lbmFibGVQYW4gJiYgdGhpcy5zY2VuZSAhPSBudWxsICkge1xuXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cblx0XHRcdHRoaXMuc2V0Q2VudGVyKCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0XHRjb25zdCBoaXRQID0gdGhpcy51bnByb2plY3RPbk9iaiggdGhpcy5nZXRDdXJzb3JOREMoIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQgKSwgdGhpcy5jYW1lcmEgKTtcblxuXHRcdFx0aWYgKCBoaXRQICE9IG51bGwgJiYgdGhpcy5lbmFibGVBbmltYXRpb25zICkge1xuXG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpZiAoIHRoaXMuX2FuaW1hdGlvbklkICE9IC0gMSApIHtcblxuXHRcdFx0XHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5fYW5pbWF0aW9uSWQgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fdGltZVN0YXJ0ID0gLSAxO1xuXHRcdFx0XHR0aGlzLl9hbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGZ1bmN0aW9uICggdCApIHtcblxuXHRcdFx0XHRcdHNlbGYudXBkYXRlVGJTdGF0ZSggU1RBVEUuQU5JTUFUSU9OX0ZPQ1VTLCB0cnVlICk7XG5cdFx0XHRcdFx0c2VsZi5vbkZvY3VzQW5pbSggdCwgaGl0UCwgc2VsZi5fY2FtZXJhTWF0cml4U3RhdGUsIHNlbGYuX2dpem1vTWF0cml4U3RhdGUgKTtcblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGhpdFAgIT0gbnVsbCAmJiAhIHRoaXMuZW5hYmxlQW5pbWF0aW9ucyApIHtcblxuXHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLkZPQ1VTLCB0cnVlICk7XG5cdFx0XHRcdHRoaXMuZm9jdXMoIGhpdFAsIHRoaXMuc2NhbGVGYWN0b3IgKTtcblx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9lbmRFdmVudCApO1xuXG5cdH07XG5cblx0b25Eb3VibGVQYW5TdGFydCA9ICgpID0+IHtcblxuXHRcdGlmICggdGhpcy5lbmFibGVkICYmIHRoaXMuZW5hYmxlUGFuICkge1xuXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cblx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuUEFOLCB0cnVlICk7XG5cblx0XHRcdHRoaXMuc2V0Q2VudGVyKCAoIHRoaXMuX3RvdWNoQ3VycmVudFsgMCBdLmNsaWVudFggKyB0aGlzLl90b3VjaEN1cnJlbnRbIDEgXS5jbGllbnRYICkgLyAyLCAoIHRoaXMuX3RvdWNoQ3VycmVudFsgMCBdLmNsaWVudFkgKyB0aGlzLl90b3VjaEN1cnJlbnRbIDEgXS5jbGllbnRZICkgLyAyICk7XG5cdFx0XHR0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLmNvcHkoIHRoaXMudW5wcm9qZWN0T25UYlBsYW5lKCB0aGlzLmNhbWVyYSwgX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCwgdHJ1ZSApICk7XG5cdFx0XHR0aGlzLl9jdXJyZW50Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbiApO1xuXG5cdFx0XHR0aGlzLmFjdGl2YXRlR2l6bW9zKCBmYWxzZSApO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0b25Eb3VibGVQYW5Nb3ZlID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgJiYgdGhpcy5lbmFibGVQYW4gKSB7XG5cblx0XHRcdHRoaXMuc2V0Q2VudGVyKCAoIHRoaXMuX3RvdWNoQ3VycmVudFsgMCBdLmNsaWVudFggKyB0aGlzLl90b3VjaEN1cnJlbnRbIDEgXS5jbGllbnRYICkgLyAyLCAoIHRoaXMuX3RvdWNoQ3VycmVudFsgMCBdLmNsaWVudFkgKyB0aGlzLl90b3VjaEN1cnJlbnRbIDEgXS5jbGllbnRZICkgLyAyICk7XG5cblx0XHRcdGlmICggdGhpcy5fc3RhdGUgIT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuUEFOLCB0cnVlICk7XG5cdFx0XHRcdHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24uY29weSggdGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLmNvcHkoIHRoaXMudW5wcm9qZWN0T25UYlBsYW5lKCB0aGlzLmNhbWVyYSwgX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCwgdHJ1ZSApICk7XG5cdFx0XHR0aGlzLmFwcGx5VHJhbnNmb3JtTWF0cml4KCB0aGlzLnBhbiggdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbiwgdGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLCB0cnVlICkgKTtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHR9XG5cblx0fTtcblxuXHRvbkRvdWJsZVBhbkVuZCA9ICgpID0+IHtcblxuXHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuSURMRSwgZmFsc2UgKTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9lbmRFdmVudCApO1xuXG5cdH07XG5cblxuXHRvblJvdGF0ZVN0YXJ0ID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgJiYgdGhpcy5lbmFibGVSb3RhdGUgKSB7XG5cblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5aUk9UQVRFLCB0cnVlICk7XG5cblx0XHRcdC8vdGhpcy5fc3RhcnRGaW5nZXJSb3RhdGlvbiA9IGV2ZW50LnJvdGF0aW9uO1xuXG5cdFx0XHR0aGlzLl9zdGFydEZpbmdlclJvdGF0aW9uID0gdGhpcy5nZXRBbmdsZSggdGhpcy5fdG91Y2hDdXJyZW50WyAxIF0sIHRoaXMuX3RvdWNoQ3VycmVudFsgMCBdICkgKyB0aGlzLmdldEFuZ2xlKCB0aGlzLl90b3VjaFN0YXJ0WyAxIF0sIHRoaXMuX3RvdWNoU3RhcnRbIDAgXSApO1xuXHRcdFx0dGhpcy5fY3VycmVudEZpbmdlclJvdGF0aW9uID0gdGhpcy5fc3RhcnRGaW5nZXJSb3RhdGlvbjtcblxuXHRcdFx0dGhpcy5jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oIHRoaXMuX3JvdGF0aW9uQXhpcyApOyAvL3JvdGF0aW9uIGF4aXNcblxuXHRcdFx0aWYgKCAhIHRoaXMuZW5hYmxlUGFuICYmICEgdGhpcy5lbmFibGVab29tICkge1xuXG5cdFx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIHRydWUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH07XG5cblx0b25Sb3RhdGVNb3ZlID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgJiYgdGhpcy5lbmFibGVSb3RhdGUgKSB7XG5cblx0XHRcdHRoaXMuc2V0Q2VudGVyKCAoIHRoaXMuX3RvdWNoQ3VycmVudFsgMCBdLmNsaWVudFggKyB0aGlzLl90b3VjaEN1cnJlbnRbIDEgXS5jbGllbnRYICkgLyAyLCAoIHRoaXMuX3RvdWNoQ3VycmVudFsgMCBdLmNsaWVudFkgKyB0aGlzLl90b3VjaEN1cnJlbnRbIDEgXS5jbGllbnRZICkgLyAyICk7XG5cdFx0XHRsZXQgcm90YXRpb25Qb2ludDtcblxuXHRcdFx0aWYgKCB0aGlzLl9zdGF0ZSAhPSBTVEFURS5aUk9UQVRFICkge1xuXG5cdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuWlJPVEFURSwgdHJ1ZSApO1xuXHRcdFx0XHR0aGlzLl9zdGFydEZpbmdlclJvdGF0aW9uID0gdGhpcy5fY3VycmVudEZpbmdlclJvdGF0aW9uO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vdGhpcy5fY3VycmVudEZpbmdlclJvdGF0aW9uID0gZXZlbnQucm90YXRpb247XG5cdFx0XHR0aGlzLl9jdXJyZW50RmluZ2VyUm90YXRpb24gPSB0aGlzLmdldEFuZ2xlKCB0aGlzLl90b3VjaEN1cnJlbnRbIDEgXSwgdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0gKSArIHRoaXMuZ2V0QW5nbGUoIHRoaXMuX3RvdWNoU3RhcnRbIDEgXSwgdGhpcy5fdG91Y2hTdGFydFsgMCBdICk7XG5cblx0XHRcdGlmICggISB0aGlzLmVuYWJsZVBhbiApIHtcblxuXHRcdFx0XHRyb3RhdGlvblBvaW50ID0gbmV3IFZlY3RvcjMoKS5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2dpem1vTWF0cml4U3RhdGUgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHR0aGlzLl92M18yLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZSApO1xuXHRcdFx0XHRyb3RhdGlvblBvaW50ID0gdGhpcy51bnByb2plY3RPblRiUGxhbmUoIHRoaXMuY2FtZXJhLCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50ICkuYXBwbHlRdWF0ZXJuaW9uKCB0aGlzLmNhbWVyYS5xdWF0ZXJuaW9uICkubXVsdGlwbHlTY2FsYXIoIDEgLyB0aGlzLmNhbWVyYS56b29tICkuYWRkKCB0aGlzLl92M18yICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgYW1vdW50ID0gTWF0aFV0aWxzLkRFRzJSQUQgKiAoIHRoaXMuX3N0YXJ0RmluZ2VyUm90YXRpb24gLSB0aGlzLl9jdXJyZW50RmluZ2VyUm90YXRpb24gKTtcblxuXHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy56Um90YXRlKCByb3RhdGlvblBvaW50LCBhbW91bnQgKSApO1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdH1cblxuXHR9O1xuXG5cdG9uUm90YXRlRW5kID0gKCkgPT4ge1xuXG5cdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfZW5kRXZlbnQgKTtcblxuXHR9O1xuXG5cdG9uUGluY2hTdGFydCA9ICgpID0+IHtcblxuXHRcdGlmICggdGhpcy5lbmFibGVkICYmIHRoaXMuZW5hYmxlWm9vbSApIHtcblxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfc3RhcnRFdmVudCApO1xuXHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5TQ0FMRSwgdHJ1ZSApO1xuXG5cdFx0XHR0aGlzLl9zdGFydEZpbmdlckRpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVQb2ludGVyc0Rpc3RhbmNlKCB0aGlzLl90b3VjaEN1cnJlbnRbIDAgXSwgdGhpcy5fdG91Y2hDdXJyZW50WyAxIF0gKTtcblx0XHRcdHRoaXMuX2N1cnJlbnRGaW5nZXJEaXN0YW5jZSA9IHRoaXMuX3N0YXJ0RmluZ2VyRGlzdGFuY2U7XG5cblx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cblx0XHR9XG5cblx0fTtcblxuXHRvblBpbmNoTW92ZSA9ICgpID0+IHtcblxuXHRcdGlmICggdGhpcy5lbmFibGVkICYmIHRoaXMuZW5hYmxlWm9vbSApIHtcblxuXHRcdFx0dGhpcy5zZXRDZW50ZXIoICggdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0uY2xpZW50WCArIHRoaXMuX3RvdWNoQ3VycmVudFsgMSBdLmNsaWVudFggKSAvIDIsICggdGhpcy5fdG91Y2hDdXJyZW50WyAwIF0uY2xpZW50WSArIHRoaXMuX3RvdWNoQ3VycmVudFsgMSBdLmNsaWVudFkgKSAvIDIgKTtcblx0XHRcdGNvbnN0IG1pbkRpc3RhbmNlID0gMTI7IC8vbWluaW11bSBkaXN0YW5jZSBiZXR3ZWVuIGZpbmdlcnMgKGluIGNzcyBwaXhlbHMpXG5cblx0XHRcdGlmICggdGhpcy5fc3RhdGUgIT0gU1RBVEUuU0NBTEUgKSB7XG5cblx0XHRcdFx0dGhpcy5fc3RhcnRGaW5nZXJEaXN0YW5jZSA9IHRoaXMuX2N1cnJlbnRGaW5nZXJEaXN0YW5jZTtcblx0XHRcdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5TQ0FMRSwgdHJ1ZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2N1cnJlbnRGaW5nZXJEaXN0YW5jZSA9IE1hdGgubWF4KCB0aGlzLmNhbGN1bGF0ZVBvaW50ZXJzRGlzdGFuY2UoIHRoaXMuX3RvdWNoQ3VycmVudFsgMCBdLCB0aGlzLl90b3VjaEN1cnJlbnRbIDEgXSApLCBtaW5EaXN0YW5jZSAqIHRoaXMuX2RldlB4UmF0aW8gKTtcblx0XHRcdGNvbnN0IGFtb3VudCA9IHRoaXMuX2N1cnJlbnRGaW5nZXJEaXN0YW5jZSAvIHRoaXMuX3N0YXJ0RmluZ2VyRGlzdGFuY2U7XG5cblx0XHRcdGxldCBzY2FsZVBvaW50O1xuXG5cdFx0XHRpZiAoICEgdGhpcy5lbmFibGVQYW4gKSB7XG5cblx0XHRcdFx0c2NhbGVQb2ludCA9IHRoaXMuX2dpem1vcy5wb3NpdGlvbjtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0c2NhbGVQb2ludCA9IHRoaXMudW5wcm9qZWN0T25UYlBsYW5lKCB0aGlzLmNhbWVyYSwgX2NlbnRlci54LCBfY2VudGVyLnksIHRoaXMuZG9tRWxlbWVudCApXG5cdFx0XHRcdFx0XHQuYXBwbHlRdWF0ZXJuaW9uKCB0aGlzLmNhbWVyYS5xdWF0ZXJuaW9uIClcblx0XHRcdFx0XHRcdC5tdWx0aXBseVNjYWxhciggMSAvIHRoaXMuY2FtZXJhLnpvb20gKVxuXHRcdFx0XHRcdFx0LmFkZCggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRcdHNjYWxlUG9pbnQgPSB0aGlzLnVucHJvamVjdE9uVGJQbGFuZSggdGhpcy5jYW1lcmEsIF9jZW50ZXIueCwgX2NlbnRlci55LCB0aGlzLmRvbUVsZW1lbnQgKVxuXHRcdFx0XHRcdFx0LmFwcGx5UXVhdGVybmlvbiggdGhpcy5jYW1lcmEucXVhdGVybmlvbiApXG5cdFx0XHRcdFx0XHQuYWRkKCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5zY2FsZSggYW1vdW50LCBzY2FsZVBvaW50ICkgKTtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHR9XG5cblx0fTtcblxuXHRvblBpbmNoRW5kID0gKCkgPT4ge1xuXG5cdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2VuZEV2ZW50ICk7XG5cblx0fTtcblxuXHRvblRyaXBsZVBhblN0YXJ0ID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLmVuYWJsZWQgJiYgdGhpcy5lbmFibGVab29tICkge1xuXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cblx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuU0NBTEUsIHRydWUgKTtcblxuXHRcdFx0Ly9jb25zdCBjZW50ZXIgPSBldmVudC5jZW50ZXI7XG5cdFx0XHRsZXQgY2xpZW50WCA9IDA7XG5cdFx0XHRsZXQgY2xpZW50WSA9IDA7XG5cdFx0XHRjb25zdCBuRmluZ2VycyA9IHRoaXMuX3RvdWNoQ3VycmVudC5sZW5ndGg7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IG5GaW5nZXJzOyBpICsrICkge1xuXG5cdFx0XHRcdGNsaWVudFggKz0gdGhpcy5fdG91Y2hDdXJyZW50WyBpIF0uY2xpZW50WDtcblx0XHRcdFx0Y2xpZW50WSArPSB0aGlzLl90b3VjaEN1cnJlbnRbIGkgXS5jbGllbnRZO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0Q2VudGVyKCBjbGllbnRYIC8gbkZpbmdlcnMsIGNsaWVudFkgLyBuRmluZ2VycyApO1xuXG5cdFx0XHR0aGlzLl9zdGFydEN1cnNvclBvc2l0aW9uLnNldFkoIHRoaXMuZ2V0Q3Vyc29yTkRDKCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50ICkueSAqIDAuNSApO1xuXHRcdFx0dGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLmNvcHkoIHRoaXMuX3N0YXJ0Q3Vyc29yUG9zaXRpb24gKTtcblxuXHRcdH1cblxuXHR9O1xuXG5cdG9uVHJpcGxlUGFuTW92ZSA9ICgpID0+IHtcblxuXHRcdGlmICggdGhpcy5lbmFibGVkICYmIHRoaXMuZW5hYmxlWm9vbSApIHtcblxuXHRcdFx0Ly9cdCAgZm92IC8gMlxuXHRcdFx0Ly9cdFx0fFxcXG5cdFx0XHQvL1x0XHR8IFxcXG5cdFx0XHQvL1x0XHR8ICBcXFxuXHRcdFx0Ly9cdHhcdHxcdFxcXG5cdFx0XHQvL1x0XHR8IFx0IFxcXG5cdFx0XHQvL1x0XHR8IFx0ICBcXFxuXHRcdFx0Ly9cdFx0fCBfIF8gX1xcXG5cdFx0XHQvL1x0XHRcdHlcblxuXHRcdFx0Ly9jb25zdCBjZW50ZXIgPSBldmVudC5jZW50ZXI7XG5cdFx0XHRsZXQgY2xpZW50WCA9IDA7XG5cdFx0XHRsZXQgY2xpZW50WSA9IDA7XG5cdFx0XHRjb25zdCBuRmluZ2VycyA9IHRoaXMuX3RvdWNoQ3VycmVudC5sZW5ndGg7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IG5GaW5nZXJzOyBpICsrICkge1xuXG5cdFx0XHRcdGNsaWVudFggKz0gdGhpcy5fdG91Y2hDdXJyZW50WyBpIF0uY2xpZW50WDtcblx0XHRcdFx0Y2xpZW50WSArPSB0aGlzLl90b3VjaEN1cnJlbnRbIGkgXS5jbGllbnRZO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0Q2VudGVyKCBjbGllbnRYIC8gbkZpbmdlcnMsIGNsaWVudFkgLyBuRmluZ2VycyApO1xuXG5cdFx0XHRjb25zdCBzY3JlZW5Ob3RjaGVzID0gODtcdC8vaG93IG1hbnkgd2hlZWwgbm90Y2hlcyBjb3JyZXNwb25kcyB0byBhIGZ1bGwgc2NyZWVuIHBhblxuXHRcdFx0dGhpcy5fY3VycmVudEN1cnNvclBvc2l0aW9uLnNldFkoIHRoaXMuZ2V0Q3Vyc29yTkRDKCBfY2VudGVyLngsIF9jZW50ZXIueSwgdGhpcy5kb21FbGVtZW50ICkueSAqIDAuNSApO1xuXG5cdFx0XHRjb25zdCBtb3ZlbWVudCA9IHRoaXMuX2N1cnJlbnRDdXJzb3JQb3NpdGlvbi55IC0gdGhpcy5fc3RhcnRDdXJzb3JQb3NpdGlvbi55O1xuXG5cdFx0XHRsZXQgc2l6ZSA9IDE7XG5cblx0XHRcdGlmICggbW92ZW1lbnQgPCAwICkge1xuXG5cdFx0XHRcdHNpemUgPSAxIC8gKCBNYXRoLnBvdyggdGhpcy5zY2FsZUZhY3RvciwgLSBtb3ZlbWVudCAqIHNjcmVlbk5vdGNoZXMgKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBtb3ZlbWVudCA+IDAgKSB7XG5cblx0XHRcdFx0c2l6ZSA9IE1hdGgucG93KCB0aGlzLnNjYWxlRmFjdG9yLCBtb3ZlbWVudCAqIHNjcmVlbk5vdGNoZXMgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl92M18xLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fY2FtZXJhTWF0cml4U3RhdGUgKTtcblx0XHRcdGNvbnN0IHggPSB0aGlzLl92M18xLmRpc3RhbmNlVG8oIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXHRcdFx0bGV0IHhOZXcgPSB4IC8gc2l6ZTsgLy9kaXN0YW5jZSBiZXR3ZWVuIGNhbWVyYSBhbmQgZ2l6bW9zIGlmIHNjYWxlKHNpemUsIHNjYWxlcG9pbnQpIHdvdWxkIGJlIHBlcmZvcm1lZFxuXG5cdFx0XHQvL2NoZWNrIG1pbiBhbmQgbWF4IGRpc3RhbmNlXG5cdFx0XHR4TmV3ID0gTWF0aFV0aWxzLmNsYW1wKCB4TmV3LCB0aGlzLm1pbkRpc3RhbmNlLCB0aGlzLm1heERpc3RhbmNlICk7XG5cblx0XHRcdGNvbnN0IHkgPSB4ICogTWF0aC50YW4oIE1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5fZm92U3RhdGUgKiAwLjUgKTtcblxuXHRcdFx0Ly9jYWxjdWxhdGUgbmV3IGZvdlxuXHRcdFx0bGV0IG5ld0ZvdiA9IE1hdGhVdGlscy5SQUQyREVHICogKCBNYXRoLmF0YW4oIHkgLyB4TmV3ICkgKiAyICk7XG5cblx0XHRcdC8vY2hlY2sgbWluIGFuZCBtYXggZm92XG5cdFx0XHRuZXdGb3YgPSBNYXRoVXRpbHMuY2xhbXAoIG5ld0ZvdiwgdGhpcy5taW5Gb3YsIHRoaXMubWF4Rm92ICk7XG5cblx0XHRcdGNvbnN0IG5ld0Rpc3RhbmNlID0geSAvIE1hdGgudGFuKCBNYXRoVXRpbHMuREVHMlJBRCAqICggbmV3Rm92IC8gMiApICk7XG5cdFx0XHRzaXplID0geCAvIG5ld0Rpc3RhbmNlO1xuXHRcdFx0dGhpcy5fdjNfMi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2dpem1vTWF0cml4U3RhdGUgKTtcblxuXHRcdFx0dGhpcy5zZXRGb3YoIG5ld0ZvdiApO1xuXHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5zY2FsZSggc2l6ZSwgdGhpcy5fdjNfMiwgZmFsc2UgKSApO1xuXG5cdFx0XHQvL2FkanVzdGluZyBkaXN0YW5jZVxuXHRcdFx0X29mZnNldC5jb3B5KCB0aGlzLl9naXptb3MucG9zaXRpb24gKS5zdWIoIHRoaXMuY2FtZXJhLnBvc2l0aW9uICkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoIG5ld0Rpc3RhbmNlIC8geCApO1xuXHRcdFx0dGhpcy5fbTRfMS5tYWtlVHJhbnNsYXRpb24oIF9vZmZzZXQueCwgX29mZnNldC55LCBfb2Zmc2V0LnogKTtcblxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdH1cblxuXHR9O1xuXG5cdG9uVHJpcGxlUGFuRW5kID0gKCkgPT4ge1xuXG5cdFx0dGhpcy51cGRhdGVUYlN0YXRlKCBTVEFURS5JRExFLCBmYWxzZSApO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2VuZEV2ZW50ICk7XG5cdFx0Ly90aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCBfY2VudGVyJ3MgeC95IGNvb3JkaW5hdGVzXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjbGllbnRYXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjbGllbnRZXG5cdCAqL1xuXHRzZXRDZW50ZXIgPSAoIGNsaWVudFgsIGNsaWVudFkgKSA9PiB7XG5cblx0XHRfY2VudGVyLnggPSBjbGllbnRYO1xuXHRcdF9jZW50ZXIueSA9IGNsaWVudFk7XG5cblx0fTtcblxuXHQvKipcblx0ICogU2V0IGRlZmF1bHQgbW91c2UgYWN0aW9uc1xuXHQgKi9cblx0aW5pdGlhbGl6ZU1vdXNlQWN0aW9ucyA9ICgpID0+IHtcblxuXHRcdHRoaXMuc2V0TW91c2VBY3Rpb24oICdQQU4nLCAwLCAnQ1RSTCcgKTtcblx0XHR0aGlzLnNldE1vdXNlQWN0aW9uKCAnUEFOJywgMiApO1xuXG5cdFx0dGhpcy5zZXRNb3VzZUFjdGlvbiggJ1JPVEFURScsIDAgKTtcblxuXHRcdHRoaXMuc2V0TW91c2VBY3Rpb24oICdaT09NJywgJ1dIRUVMJyApO1xuXHRcdHRoaXMuc2V0TW91c2VBY3Rpb24oICdaT09NJywgMSApO1xuXG5cdFx0dGhpcy5zZXRNb3VzZUFjdGlvbiggJ0ZPVicsICdXSEVFTCcsICdTSElGVCcgKTtcblx0XHR0aGlzLnNldE1vdXNlQWN0aW9uKCAnRk9WJywgMSwgJ1NISUZUJyApO1xuXG5cblx0fTtcblxuXHQvKipcblx0ICogQ29tcGFyZSB0d28gbW91c2UgYWN0aW9uc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uMVxuXHQgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uMlxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiBhY3Rpb24xIGFuZCBhY3Rpb24gMiBhcmUgdGhlIHNhbWUgbW91c2UgYWN0aW9uLCBmYWxzZSBvdGhlcndpc2Vcblx0ICovXG5cdGNvbXBhcmVNb3VzZUFjdGlvbiA9ICggYWN0aW9uMSwgYWN0aW9uMiApID0+IHtcblxuXHRcdGlmICggYWN0aW9uMS5vcGVyYXRpb24gPT0gYWN0aW9uMi5vcGVyYXRpb24gKSB7XG5cblx0XHRcdGlmICggYWN0aW9uMS5tb3VzZSA9PSBhY3Rpb24yLm1vdXNlICYmIGFjdGlvbjEua2V5ID09IGFjdGlvbjIua2V5ICkge1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCBhIG5ldyBtb3VzZSBhY3Rpb24gYnkgc3BlY2lmeWluZyB0aGUgb3BlcmF0aW9uIHRvIGJlIHBlcmZvcm1lZCBhbmQgYSBtb3VzZS9rZXkgY29tYmluYXRpb24uIEluIGNhc2Ugb2YgY29uZmxpY3QsIHJlcGxhY2VzIHRoZSBleGlzdGluZyBvbmVcblx0ICogQHBhcmFtIHtTdHJpbmd9IG9wZXJhdGlvbiBUaGUgb3BlcmF0aW9uIHRvIGJlIHBlcmZvcm1lZCAoJ1BBTicsICdST1RBVEUnLCAnWk9PTScsICdGT1YpXG5cdCAqIEBwYXJhbSB7Kn0gbW91c2UgQSBtb3VzZSBidXR0b24gKDAsIDEsIDIpIG9yICdXSEVFTCcgZm9yIHdoZWVsIG5vdGNoZXNcblx0ICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleWJvYXJkIG1vZGlmaWVyICgnQ1RSTCcsICdTSElGVCcpIG9yIG51bGwgaWYga2V5IGlzIG5vdCBuZWVkZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1vdXNlIGFjdGlvbiBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgYWRkZWQsIGZhbHNlIG90aGVyd2lzZVxuXHQgKi9cblx0c2V0TW91c2VBY3Rpb24gPSAoIG9wZXJhdGlvbiwgbW91c2UsIGtleSA9IG51bGwgKSA9PiB7XG5cblx0XHRjb25zdCBvcGVyYXRpb25JbnB1dCA9IFsgJ1BBTicsICdST1RBVEUnLCAnWk9PTScsICdGT1YnIF07XG5cdFx0Y29uc3QgbW91c2VJbnB1dCA9IFsgMCwgMSwgMiwgJ1dIRUVMJyBdO1xuXHRcdGNvbnN0IGtleUlucHV0ID0gWyAnQ1RSTCcsICdTSElGVCcsIG51bGwgXTtcblx0XHRsZXQgc3RhdGU7XG5cblx0XHRpZiAoICEgb3BlcmF0aW9uSW5wdXQuaW5jbHVkZXMoIG9wZXJhdGlvbiApIHx8ICEgbW91c2VJbnB1dC5pbmNsdWRlcyggbW91c2UgKSB8fCAhIGtleUlucHV0LmluY2x1ZGVzKCBrZXkgKSApIHtcblxuXHRcdFx0Ly9pbnZhbGlkIHBhcmFtZXRlcnNcblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdH1cblxuXHRcdGlmICggbW91c2UgPT0gJ1dIRUVMJyApIHtcblxuXHRcdFx0aWYgKCBvcGVyYXRpb24gIT0gJ1pPT00nICYmIG9wZXJhdGlvbiAhPSAnRk9WJyApIHtcblxuXHRcdFx0XHQvL2Nhbm5vdCBhc3NvY2lhdGUgMkQgb3BlcmF0aW9uIHRvIDFEIGlucHV0XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0c3dpdGNoICggb3BlcmF0aW9uICkge1xuXG5cdFx0XHRjYXNlICdQQU4nOlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnUk9UQVRFJzpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1pPT00nOlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuU0NBTEU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdGT1YnOlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuRk9WO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHRcdGNvbnN0IGFjdGlvbiA9IHtcblxuXHRcdFx0b3BlcmF0aW9uOiBvcGVyYXRpb24sXG5cdFx0XHRtb3VzZTogbW91c2UsXG5cdFx0XHRrZXk6IGtleSxcblx0XHRcdHN0YXRlOiBzdGF0ZVxuXG5cdFx0fTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubW91c2VBY3Rpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0aWYgKCB0aGlzLm1vdXNlQWN0aW9uc1sgaSBdLm1vdXNlID09IGFjdGlvbi5tb3VzZSAmJiB0aGlzLm1vdXNlQWN0aW9uc1sgaSBdLmtleSA9PSBhY3Rpb24ua2V5ICkge1xuXG5cdFx0XHRcdHRoaXMubW91c2VBY3Rpb25zLnNwbGljZSggaSwgMSwgYWN0aW9uICk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHR0aGlzLm1vdXNlQWN0aW9ucy5wdXNoKCBhY3Rpb24gKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYSBtb3VzZSBhY3Rpb24gYnkgc3BlY2lmeWluZyBpdHMgbW91c2Uva2V5IGNvbWJpbmF0aW9uXG5cdCAqIEBwYXJhbSB7Kn0gbW91c2UgQSBtb3VzZSBidXR0b24gKDAsIDEsIDIpIG9yICdXSEVFTCcgZm9yIHdoZWVsIG5vdGNoZXNcblx0ICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleWJvYXJkIG1vZGlmaWVyICgnQ1RSTCcsICdTSElGVCcpIG9yIG51bGwgaWYga2V5IGlzIG5vdCBuZWVkZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG9wZXJhdGlvbiBoYXMgYmVlbiBzdWNjZXNmdWxseSByZW1vdmVkLCBmYWxzZSBvdGhlcndpc2Vcblx0ICovXG5cdHVuc2V0TW91c2VBY3Rpb24gPSAoIG1vdXNlLCBrZXkgPSBudWxsICkgPT4ge1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tb3VzZUFjdGlvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRpZiAoIHRoaXMubW91c2VBY3Rpb25zWyBpIF0ubW91c2UgPT0gbW91c2UgJiYgdGhpcy5tb3VzZUFjdGlvbnNbIGkgXS5rZXkgPT0ga2V5ICkge1xuXG5cdFx0XHRcdHRoaXMubW91c2VBY3Rpb25zLnNwbGljZSggaSwgMSApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXG5cdH07XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgb3BlcmF0aW9uIGFzc29jaWF0ZWQgdG8gYSBtb3VzZS9rZXlib2FyZCBjb21iaW5hdGlvblxuXHQgKiBAcGFyYW0geyp9IG1vdXNlIEEgbW91c2UgYnV0dG9uICgwLCAxLCAyKSBvciAnV0hFRUwnIGZvciB3aGVlbCBub3RjaGVzXG5cdCAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXlib2FyZCBtb2RpZmllciAoJ0NUUkwnLCAnU0hJRlQnKSBvciBudWxsIGlmIGtleSBpcyBub3QgbmVlZGVkXG5cdCAqIEByZXR1cm5zIFRoZSBvcGVyYXRpb24gaWYgaXQgaGFzIGJlZW4gZm91bmQsIG51bGwgb3RoZXJ3aXNlXG5cdCAqL1xuXHRnZXRPcEZyb21BY3Rpb24gPSAoIG1vdXNlLCBrZXkgKSA9PiB7XG5cblx0XHRsZXQgYWN0aW9uO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tb3VzZUFjdGlvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRhY3Rpb24gPSB0aGlzLm1vdXNlQWN0aW9uc1sgaSBdO1xuXHRcdFx0aWYgKCBhY3Rpb24ubW91c2UgPT0gbW91c2UgJiYgYWN0aW9uLmtleSA9PSBrZXkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGFjdGlvbi5vcGVyYXRpb247XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICgga2V5ICE9IG51bGwgKSB7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubW91c2VBY3Rpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0XHRhY3Rpb24gPSB0aGlzLm1vdXNlQWN0aW9uc1sgaSBdO1xuXHRcdFx0XHRpZiAoIGFjdGlvbi5tb3VzZSA9PSBtb3VzZSAmJiBhY3Rpb24ua2V5ID09IG51bGwgKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gYWN0aW9uLm9wZXJhdGlvbjtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXG5cdH07XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgb3BlcmF0aW9uIGFzc29jaWF0ZWQgdG8gbW91c2UgYW5kIGtleSBjb21iaW5hdGlvbiBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBGU0Egc3RhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IG1vdXNlIE1vdXNlIGJ1dHRvblxuXHQgKiBAcGFyYW0ge1N0cmluZ30ga2V5IEtleWJvYXJkIG1vZGlmaWVyXG5cdCAqIEByZXR1cm5zIFRoZSBGU0Egc3RhdGUgb2J0YWluZWQgZnJvbSB0aGUgb3BlcmF0aW9uIGFzc29jaWF0ZWQgdG8gbW91c2Uva2V5Ym9hcmQgY29tYmluYXRpb25cblx0ICovXG5cdGdldE9wU3RhdGVGcm9tQWN0aW9uID0gKCBtb3VzZSwga2V5ICkgPT4ge1xuXG5cdFx0bGV0IGFjdGlvbjtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubW91c2VBY3Rpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0YWN0aW9uID0gdGhpcy5tb3VzZUFjdGlvbnNbIGkgXTtcblx0XHRcdGlmICggYWN0aW9uLm1vdXNlID09IG1vdXNlICYmIGFjdGlvbi5rZXkgPT0ga2V5ICkge1xuXG5cdFx0XHRcdHJldHVybiBhY3Rpb24uc3RhdGU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICgga2V5ICE9IG51bGwgKSB7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubW91c2VBY3Rpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0XHRhY3Rpb24gPSB0aGlzLm1vdXNlQWN0aW9uc1sgaSBdO1xuXHRcdFx0XHRpZiAoIGFjdGlvbi5tb3VzZSA9PSBtb3VzZSAmJiBhY3Rpb24ua2V5ID09IG51bGwgKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gYWN0aW9uLnN0YXRlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0fTtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBhbmdsZSBiZXR3ZWVuIHR3byBwb2ludGVyc1xuXHQgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gcDFcblx0ICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IHAyXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBiZXR3ZWVuIHR3byBwb2ludGVycyBpbiBkZWdyZWVzXG5cdCAqL1xuXHRnZXRBbmdsZSA9ICggcDEsIHAyICkgPT4ge1xuXG5cdFx0cmV0dXJuIE1hdGguYXRhbjIoIHAyLmNsaWVudFkgLSBwMS5jbGllbnRZLCBwMi5jbGllbnRYIC0gcDEuY2xpZW50WCApICogMTgwIC8gTWF0aC5QSTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGUgYSBQb2ludGVyRXZlbnQgaW5zaWRlIGN1cnJlbnQgcG9pbnRlcmV2ZW50cyBhcnJheVxuXHQgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gZXZlbnRcblx0ICovXG5cdHVwZGF0ZVRvdWNoRXZlbnQgPSAoIGV2ZW50ICkgPT4ge1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5fdG91Y2hDdXJyZW50Lmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0aWYgKCB0aGlzLl90b3VjaEN1cnJlbnRbIGkgXS5wb2ludGVySWQgPT0gZXZlbnQucG9pbnRlcklkICkge1xuXG5cdFx0XHRcdHRoaXMuX3RvdWNoQ3VycmVudC5zcGxpY2UoIGksIDEsIGV2ZW50ICk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogQXBwbHkgYSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXgsIHRvIHRoZSBjYW1lcmEgYW5kIGdpem1vc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gdHJhbnNmb3JtYXRpb24gT2JqZWN0IGNvbnRhaW5pbmcgbWF0cmljZXMgdG8gYXBwbHkgdG8gY2FtZXJhIGFuZCBnaXptb3Ncblx0ICovXG5cdGFwcGx5VHJhbnNmb3JtTWF0cml4KCB0cmFuc2Zvcm1hdGlvbiApIHtcblxuXHRcdGlmICggdHJhbnNmb3JtYXRpb24uY2FtZXJhICE9IG51bGwgKSB7XG5cblx0XHRcdHRoaXMuX200XzEuY29weSggdGhpcy5fY2FtZXJhTWF0cml4U3RhdGUgKS5wcmVtdWx0aXBseSggdHJhbnNmb3JtYXRpb24uY2FtZXJhICk7XG5cdFx0XHR0aGlzLl9tNF8xLmRlY29tcG9zZSggdGhpcy5jYW1lcmEucG9zaXRpb24sIHRoaXMuY2FtZXJhLnF1YXRlcm5pb24sIHRoaXMuY2FtZXJhLnNjYWxlICk7XG5cdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVNYXRyaXgoKTtcblxuXHRcdFx0Ly91cGRhdGUgY2FtZXJhIHVwIHZlY3RvclxuXHRcdFx0aWYgKCB0aGlzLl9zdGF0ZSA9PSBTVEFURS5ST1RBVEUgfHwgdGhpcy5fc3RhdGUgPT0gU1RBVEUuWlJPVEFURSB8fCB0aGlzLl9zdGF0ZSA9PSBTVEFURS5BTklNQVRJT05fUk9UQVRFICkge1xuXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnVwLmNvcHkoIHRoaXMuX3VwU3RhdGUgKS5hcHBseVF1YXRlcm5pb24oIHRoaXMuY2FtZXJhLnF1YXRlcm5pb24gKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2Zvcm1hdGlvbi5naXptb3MgIT0gbnVsbCApIHtcblxuXHRcdFx0dGhpcy5fbTRfMS5jb3B5KCB0aGlzLl9naXptb01hdHJpeFN0YXRlICkucHJlbXVsdGlwbHkoIHRyYW5zZm9ybWF0aW9uLmdpem1vcyApO1xuXHRcdFx0dGhpcy5fbTRfMS5kZWNvbXBvc2UoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiwgdGhpcy5fZ2l6bW9zLnF1YXRlcm5pb24sIHRoaXMuX2dpem1vcy5zY2FsZSApO1xuXHRcdFx0dGhpcy5fZ2l6bW9zLnVwZGF0ZU1hdHJpeCgpO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9zdGF0ZSA9PSBTVEFURS5TQ0FMRSB8fCB0aGlzLl9zdGF0ZSA9PSBTVEFURS5GT0NVUyB8fCB0aGlzLl9zdGF0ZSA9PSBTVEFURS5BTklNQVRJT05fRk9DVVMgKSB7XG5cblx0XHRcdHRoaXMuX3RiUmFkaXVzID0gdGhpcy5jYWxjdWxhdGVUYlJhZGl1cyggdGhpcy5jYW1lcmEgKTtcblxuXHRcdFx0aWYgKCB0aGlzLmFkanVzdE5lYXJGYXIgKSB7XG5cblx0XHRcdFx0Y29uc3QgY2FtZXJhRGlzdGFuY2UgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblxuXHRcdFx0XHRjb25zdCBiYiA9IG5ldyBCb3gzKCk7XG5cdFx0XHRcdGJiLnNldEZyb21PYmplY3QoIHRoaXMuX2dpem1vcyApO1xuXHRcdFx0XHRjb25zdCBzcGhlcmUgPSBuZXcgU3BoZXJlKCk7XG5cdFx0XHRcdGJiLmdldEJvdW5kaW5nU3BoZXJlKCBzcGhlcmUgKTtcblxuXHRcdFx0XHRjb25zdCBhZGp1c3RlZE5lYXJQb3NpdGlvbiA9IE1hdGgubWF4KCB0aGlzLl9uZWFyUG9zMCwgc3BoZXJlLnJhZGl1cyArIHNwaGVyZS5jZW50ZXIubGVuZ3RoKCkgKTtcblx0XHRcdFx0Y29uc3QgcmVndWxhck5lYXJQb3NpdGlvbiA9IGNhbWVyYURpc3RhbmNlIC0gdGhpcy5faW5pdGlhbE5lYXI7XG5cblx0XHRcdFx0Y29uc3QgbWluTmVhclBvcyA9IE1hdGgubWluKCBhZGp1c3RlZE5lYXJQb3NpdGlvbiwgcmVndWxhck5lYXJQb3NpdGlvbiApO1xuXHRcdFx0XHR0aGlzLmNhbWVyYS5uZWFyID0gY2FtZXJhRGlzdGFuY2UgLSBtaW5OZWFyUG9zO1xuXG5cblx0XHRcdFx0Y29uc3QgYWRqdXN0ZWRGYXJQb3NpdGlvbiA9IE1hdGgubWluKCB0aGlzLl9mYXJQb3MwLCAtIHNwaGVyZS5yYWRpdXMgKyBzcGhlcmUuY2VudGVyLmxlbmd0aCgpICk7XG5cdFx0XHRcdGNvbnN0IHJlZ3VsYXJGYXJQb3NpdGlvbiA9IGNhbWVyYURpc3RhbmNlIC0gdGhpcy5faW5pdGlhbEZhcjtcblxuXHRcdFx0XHRjb25zdCBtaW5GYXJQb3MgPSBNYXRoLm1pbiggYWRqdXN0ZWRGYXJQb3NpdGlvbiwgcmVndWxhckZhclBvc2l0aW9uICk7XG5cdFx0XHRcdHRoaXMuY2FtZXJhLmZhciA9IGNhbWVyYURpc3RhbmNlIC0gbWluRmFyUG9zO1xuXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRsZXQgdXBkYXRlID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKCB0aGlzLmNhbWVyYS5uZWFyICE9IHRoaXMuX2luaXRpYWxOZWFyICkge1xuXG5cdFx0XHRcdFx0dGhpcy5jYW1lcmEubmVhciA9IHRoaXMuX2luaXRpYWxOZWFyO1xuXHRcdFx0XHRcdHVwZGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggdGhpcy5jYW1lcmEuZmFyICE9IHRoaXMuX2luaXRpYWxGYXIgKSB7XG5cblx0XHRcdFx0XHR0aGlzLmNhbWVyYS5mYXIgPSB0aGlzLl9pbml0aWFsRmFyO1xuXHRcdFx0XHRcdHVwZGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggdXBkYXRlICkge1xuXG5cdFx0XHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBhbmd1bGFyIHNwZWVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwMCBQb3NpdGlvbiBhdCB0MFxuXHQgKiBAcGFyYW0ge051bWJlcn0gcDEgUG9zaXRpb24gYXQgdDFcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHQwIEluaXRpYWwgdGltZSBpbiBtaWxsaXNlY29uZHNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHQxIEVuZGluZyB0aW1lIGluIG1pbGxpc2Vjb25kc1xuXHQgKi9cblx0Y2FsY3VsYXRlQW5ndWxhclNwZWVkID0gKCBwMCwgcDEsIHQwLCB0MSApID0+IHtcblxuXHRcdGNvbnN0IHMgPSBwMSAtIHAwO1xuXHRcdGNvbnN0IHQgPSAoIHQxIC0gdDAgKSAvIDEwMDA7XG5cdFx0aWYgKCB0ID09IDAgKSB7XG5cblx0XHRcdHJldHVybiAwO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHMgLyB0O1xuXG5cdH07XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9pbnRlcnNcblx0ICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IHAwIFRoZSBmaXJzdCBwb2ludGVyXG5cdCAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBwMSBUaGUgc2Vjb25kIHBvaW50ZXJcblx0ICogQHJldHVybnMge251bWJlcn0gVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludGVyc1xuXHQgKi9cblx0Y2FsY3VsYXRlUG9pbnRlcnNEaXN0YW5jZSA9ICggcDAsIHAxICkgPT4ge1xuXG5cdFx0cmV0dXJuIE1hdGguc3FydCggTWF0aC5wb3coIHAxLmNsaWVudFggLSBwMC5jbGllbnRYLCAyICkgKyBNYXRoLnBvdyggcDEuY2xpZW50WSAtIHAwLmNsaWVudFksIDIgKSApO1xuXG5cdH07XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgcm90YXRpb24gYXhpcyBhcyB0aGUgdmVjdG9yIHBlcnBlbmRpY3VsYXIgYmV0d2VlbiB0d28gdmVjdG9yc1xuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IHZlYzEgVGhlIGZpcnN0IHZlY3RvclxuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IHZlYzIgVGhlIHNlY29uZCB2ZWN0b3Jcblx0ICogQHJldHVybnMge1ZlY3RvcjN9IFRoZSBub3JtYWxpemVkIHJvdGF0aW9uIGF4aXNcblx0ICovXG5cdGNhbGN1bGF0ZVJvdGF0aW9uQXhpcyA9ICggdmVjMSwgdmVjMiApID0+IHtcblxuXHRcdHRoaXMuX3JvdGF0aW9uTWF0cml4LmV4dHJhY3RSb3RhdGlvbiggdGhpcy5fY2FtZXJhTWF0cml4U3RhdGUgKTtcblx0XHR0aGlzLl9xdWF0LnNldEZyb21Sb3RhdGlvbk1hdHJpeCggdGhpcy5fcm90YXRpb25NYXRyaXggKTtcblxuXHRcdHRoaXMuX3JvdGF0aW9uQXhpcy5jcm9zc1ZlY3RvcnMoIHZlYzEsIHZlYzIgKS5hcHBseVF1YXRlcm5pb24oIHRoaXMuX3F1YXQgKTtcblx0XHRyZXR1cm4gdGhpcy5fcm90YXRpb25BeGlzLm5vcm1hbGl6ZSgpLmNsb25lKCk7XG5cblx0fTtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSB0cmFja2JhbGwgcmFkaXVzIHNvIHRoYXQgZ2l6bW8ncyBkaWFtYXRlciB3aWxsIGJlIDIvMyBvZiB0aGUgbWluaW11bSBzaWRlIG9mIHRoZSBjYW1lcmEgZnJ1c3R1bVxuXHQgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSB0cmFja2JhbGwgcmFkaXVzXG5cdCAqL1xuXHRjYWxjdWxhdGVUYlJhZGl1cyA9ICggY2FtZXJhICkgPT4ge1xuXG5cdFx0Y29uc3QgZGlzdGFuY2UgPSBjYW1lcmEucG9zaXRpb24uZGlzdGFuY2VUbyggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICk7XG5cblx0XHRpZiAoIGNhbWVyYS50eXBlID09ICdQZXJzcGVjdGl2ZUNhbWVyYScgKSB7XG5cblx0XHRcdGNvbnN0IGhhbGZGb3ZWID0gTWF0aFV0aWxzLkRFRzJSQUQgKiBjYW1lcmEuZm92ICogMC41OyAvL3ZlcnRpY2FsIGZvdi8yIGluIHJhZGlhbnNcblx0XHRcdGNvbnN0IGhhbGZGb3ZIID0gTWF0aC5hdGFuKCAoIGNhbWVyYS5hc3BlY3QgKSAqIE1hdGgudGFuKCBoYWxmRm92ViApICk7IC8vaG9yaXpvbnRhbCBmb3YvMiBpbiByYWRpYW5zXG5cdFx0XHRyZXR1cm4gTWF0aC50YW4oIE1hdGgubWluKCBoYWxmRm92ViwgaGFsZkZvdkggKSApICogZGlzdGFuY2UgKiB0aGlzLnJhZGl1c0ZhY3RvcjtcblxuXHRcdH0gZWxzZSBpZiAoIGNhbWVyYS50eXBlID09ICdPcnRob2dyYXBoaWNDYW1lcmEnICkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5taW4oIGNhbWVyYS50b3AsIGNhbWVyYS5yaWdodCApICogdGhpcy5yYWRpdXNGYWN0b3I7XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogRm9jdXMgb3BlcmF0aW9uIGNvbnNpc3Qgb2YgcG9zaXRpb25pbmcgdGhlIHBvaW50IG9mIGludGVyZXN0IGluIGZyb250IG9mIHRoZSBjYW1lcmEgYW5kIGEgc2xpZ2h0bHkgem9vbSBpblxuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IHBvaW50IFRoZSBwb2ludCBvZiBpbnRlcmVzdFxuXHQgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBTY2FsZSBmYWN0b3Jcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBBbW91bnQgb2Ygb3BlcmF0aW9uIHRvIGJlIGNvbXBsZXRlZCAodXNlZCBmb3IgZm9jdXMgYW5pbWF0aW9ucywgZGVmYXVsdCBpcyBjb21wbGV0ZSBmdWxsIG9wZXJhdGlvbilcblx0ICovXG5cdGZvY3VzID0gKCBwb2ludCwgc2l6ZSwgYW1vdW50ID0gMSApID0+IHtcblxuXHRcdC8vbW92ZSBjZW50ZXIgb2YgY2FtZXJhIChhbG9uZyB3aXRoIGdpem1vcykgdG93YXJkcyBwb2ludCBvZiBpbnRlcmVzdFxuXHRcdF9vZmZzZXQuY29weSggcG9pbnQgKS5zdWIoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApLm11bHRpcGx5U2NhbGFyKCBhbW91bnQgKTtcblx0XHR0aGlzLl90cmFuc2xhdGlvbk1hdHJpeC5tYWtlVHJhbnNsYXRpb24oIF9vZmZzZXQueCwgX29mZnNldC55LCBfb2Zmc2V0LnogKTtcblxuXHRcdF9naXptb01hdHJpeFN0YXRlVGVtcC5jb3B5KCB0aGlzLl9naXptb01hdHJpeFN0YXRlICk7XG5cdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5wcmVtdWx0aXBseSggdGhpcy5fdHJhbnNsYXRpb25NYXRyaXggKTtcblx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLmRlY29tcG9zZSggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uLCB0aGlzLl9naXptb3MucXVhdGVybmlvbiwgdGhpcy5fZ2l6bW9zLnNjYWxlICk7XG5cblx0XHRfY2FtZXJhTWF0cml4U3RhdGVUZW1wLmNvcHkoIHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlICk7XG5cdFx0dGhpcy5fY2FtZXJhTWF0cml4U3RhdGUucHJlbXVsdGlwbHkoIHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4ICk7XG5cdFx0dGhpcy5fY2FtZXJhTWF0cml4U3RhdGUuZGVjb21wb3NlKCB0aGlzLmNhbWVyYS5wb3NpdGlvbiwgdGhpcy5jYW1lcmEucXVhdGVybmlvbiwgdGhpcy5jYW1lcmEuc2NhbGUgKTtcblxuXHRcdC8vYXBwbHkgem9vbVxuXHRcdGlmICggdGhpcy5lbmFibGVab29tICkge1xuXG5cdFx0XHR0aGlzLmFwcGx5VHJhbnNmb3JtTWF0cml4KCB0aGlzLnNjYWxlKCBzaXplLCB0aGlzLl9naXptb3MucG9zaXRpb24gKSApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5jb3B5KCBfZ2l6bW9NYXRyaXhTdGF0ZVRlbXAgKTtcblx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZS5jb3B5KCBfY2FtZXJhTWF0cml4U3RhdGVUZW1wICk7XG5cblx0fTtcblxuXHQvKipcblx0ICogRHJhdyBhIGdyaWQgYW5kIGFkZCBpdCB0byB0aGUgc2NlbmVcblx0ICovXG5cdGRyYXdHcmlkID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLnNjZW5lICE9IG51bGwgKSB7XG5cblx0XHRcdGNvbnN0IGNvbG9yID0gMHg4ODg4ODg7XG5cdFx0XHRjb25zdCBtdWx0aXBsaWVyID0gMztcblx0XHRcdGxldCBzaXplLCBkaXZpc2lvbnMsIG1heExlbmd0aCwgdGljaztcblxuXHRcdFx0aWYgKCB0aGlzLmNhbWVyYS5pc09ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRjb25zdCB3aWR0aCA9IHRoaXMuY2FtZXJhLnJpZ2h0IC0gdGhpcy5jYW1lcmEubGVmdDtcblx0XHRcdFx0Y29uc3QgaGVpZ2h0ID0gdGhpcy5jYW1lcmEuYm90dG9tIC0gdGhpcy5jYW1lcmEudG9wO1xuXG5cdFx0XHRcdG1heExlbmd0aCA9IE1hdGgubWF4KCB3aWR0aCwgaGVpZ2h0ICk7XG5cdFx0XHRcdHRpY2sgPSBtYXhMZW5ndGggLyAyMDtcblxuXHRcdFx0XHRzaXplID0gbWF4TGVuZ3RoIC8gdGhpcy5jYW1lcmEuem9vbSAqIG11bHRpcGxpZXI7XG5cdFx0XHRcdGRpdmlzaW9ucyA9IHNpemUgLyB0aWNrICogdGhpcy5jYW1lcmEuem9vbTtcblxuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXHRcdFx0XHRjb25zdCBoYWxmRm92ViA9IE1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5jYW1lcmEuZm92ICogMC41O1xuXHRcdFx0XHRjb25zdCBoYWxmRm92SCA9IE1hdGguYXRhbiggKCB0aGlzLmNhbWVyYS5hc3BlY3QgKSAqIE1hdGgudGFuKCBoYWxmRm92ViApICk7XG5cblx0XHRcdFx0bWF4TGVuZ3RoID0gTWF0aC50YW4oIE1hdGgubWF4KCBoYWxmRm92ViwgaGFsZkZvdkggKSApICogZGlzdGFuY2UgKiAyO1xuXHRcdFx0XHR0aWNrID0gbWF4TGVuZ3RoIC8gMjA7XG5cblx0XHRcdFx0c2l6ZSA9IG1heExlbmd0aCAqIG11bHRpcGxpZXI7XG5cdFx0XHRcdGRpdmlzaW9ucyA9IHNpemUgLyB0aWNrO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggdGhpcy5fZ3JpZCA9PSBudWxsICkge1xuXG5cdFx0XHRcdHRoaXMuX2dyaWQgPSBuZXcgR3JpZEhlbHBlciggc2l6ZSwgZGl2aXNpb25zLCBjb2xvciwgY29sb3IgKTtcblx0XHRcdFx0dGhpcy5fZ3JpZC5wb3NpdGlvbi5jb3B5KCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblx0XHRcdFx0dGhpcy5fZ3JpZFBvc2l0aW9uLmNvcHkoIHRoaXMuX2dyaWQucG9zaXRpb24gKTtcblx0XHRcdFx0dGhpcy5fZ3JpZC5xdWF0ZXJuaW9uLmNvcHkoIHRoaXMuY2FtZXJhLnF1YXRlcm5pb24gKTtcblx0XHRcdFx0dGhpcy5fZ3JpZC5yb3RhdGVYKCBNYXRoLlBJICogMC41ICk7XG5cblx0XHRcdFx0dGhpcy5zY2VuZS5hZGQoIHRoaXMuX2dyaWQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH07XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLCBzdG9wIGFuaW1hdGlvbnMgYW5kIGNsZWFuIHNjZW5lXG5cdCAqL1xuXHRkaXNwb3NlID0gKCkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLl9hbmltYXRpb25JZCAhPSAtIDEgKSB7XG5cblx0XHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5fYW5pbWF0aW9uSWQgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24gKTtcblx0XHR0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLm9uUG9pbnRlckNhbmNlbCApO1xuXHRcdHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCB0aGlzLm9uV2hlZWwgKTtcblx0XHR0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgdGhpcy5vbkNvbnRleHRNZW51ICk7XG5cblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgdGhpcy5vblBvaW50ZXJNb3ZlICk7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVydXAnLCB0aGlzLm9uUG9pbnRlclVwICk7XG5cblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUgKTtcblxuXHRcdGlmICggdGhpcy5zY2VuZSAhPT0gbnVsbCApIHRoaXMuc2NlbmUucmVtb3ZlKCB0aGlzLl9naXptb3MgKTtcblx0XHR0aGlzLmRpc3Bvc2VHcmlkKCk7XG5cblx0fTtcblxuXHQvKipcblx0ICogcmVtb3ZlIHRoZSBncmlkIGZyb20gdGhlIHNjZW5lXG5cdCAqL1xuXHRkaXNwb3NlR3JpZCA9ICgpID0+IHtcblxuXHRcdGlmICggdGhpcy5fZ3JpZCAhPSBudWxsICYmIHRoaXMuc2NlbmUgIT0gbnVsbCApIHtcblxuXHRcdFx0dGhpcy5zY2VuZS5yZW1vdmUoIHRoaXMuX2dyaWQgKTtcblx0XHRcdHRoaXMuX2dyaWQgPSBudWxsO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0LyoqXG5cdCAqIENvbXB1dGUgdGhlIGVhc2luZyBvdXQgY3ViaWMgZnVuY3Rpb24gZm9yIGVhc2Ugb3V0IGVmZmVjdCBpbiBhbmltYXRpb25cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGFic29sdXRlIHByb2dyZXNzIG9mIHRoZSBhbmltYXRpb24gaW4gdGhlIGJvdW5kIG9mIDAgKGJlZ2lubmluZyBvZiB0aGUpIGFuZCAxIChlbmRpbmcgb2YgYW5pbWF0aW9uKVxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBSZXN1bHQgb2YgZWFzaW5nIG91dCBjdWJpYyBhdCB0aW1lIHRcblx0ICovXG5cdGVhc2VPdXRDdWJpYyA9ICggdCApID0+IHtcblxuXHRcdHJldHVybiAxIC0gTWF0aC5wb3coIDEgLSB0LCAzICk7XG5cblx0fTtcblxuXHQvKipcblx0ICogTWFrZSByb3RhdGlvbiBnaXptb3MgbW9yZSBvciBsZXNzIHZpc2libGVcblx0ICogQHBhcmFtIHtCb29sZWFufSBpc0FjdGl2ZSBJZiB0cnVlLCBtYWtlIGdpem1vcyBtb3JlIHZpc2libGVcblx0ICovXG5cdGFjdGl2YXRlR2l6bW9zID0gKCBpc0FjdGl2ZSApID0+IHtcblxuXHRcdGNvbnN0IGdpem1vWCA9IHRoaXMuX2dpem1vcy5jaGlsZHJlblsgMCBdO1xuXHRcdGNvbnN0IGdpem1vWSA9IHRoaXMuX2dpem1vcy5jaGlsZHJlblsgMSBdO1xuXHRcdGNvbnN0IGdpem1vWiA9IHRoaXMuX2dpem1vcy5jaGlsZHJlblsgMiBdO1xuXG5cdFx0aWYgKCBpc0FjdGl2ZSApIHtcblxuXHRcdFx0Z2l6bW9YLm1hdGVyaWFsLnNldFZhbHVlcyggeyBvcGFjaXR5OiAxIH0gKTtcblx0XHRcdGdpem1vWS5tYXRlcmlhbC5zZXRWYWx1ZXMoIHsgb3BhY2l0eTogMSB9ICk7XG5cdFx0XHRnaXptb1oubWF0ZXJpYWwuc2V0VmFsdWVzKCB7IG9wYWNpdHk6IDEgfSApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Z2l6bW9YLm1hdGVyaWFsLnNldFZhbHVlcyggeyBvcGFjaXR5OiAwLjYgfSApO1xuXHRcdFx0Z2l6bW9ZLm1hdGVyaWFsLnNldFZhbHVlcyggeyBvcGFjaXR5OiAwLjYgfSApO1xuXHRcdFx0Z2l6bW9aLm1hdGVyaWFsLnNldFZhbHVlcyggeyBvcGFjaXR5OiAwLjYgfSApO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgY3Vyc29yIHBvc2l0aW9uIGluIE5EQ1xuXHQgKiBAcGFyYW0ge251bWJlcn0geCBDdXJzb3IgaG9yaXpvbnRhbCBjb29yZGluYXRlIHdpdGhpbiB0aGUgY2FudmFzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IEN1cnNvciB2ZXJ0aWNhbCBjb29yZGluYXRlIHdpdGhpbiB0aGUgY2FudmFzXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIHdoZXJlIHRoZSByZW5kZXJlciBkcmF3cyBpdHMgb3V0cHV0XG5cdCAqIEByZXR1cm5zIHtWZWN0b3IyfSBDdXJzb3Igbm9ybWFsaXplZCBwb3NpdGlvbiBpbnNpZGUgdGhlIGNhbnZhc1xuXHQgKi9cblx0Z2V0Q3Vyc29yTkRDID0gKCBjdXJzb3JYLCBjdXJzb3JZLCBjYW52YXMgKSA9PiB7XG5cblx0XHRjb25zdCBjYW52YXNSZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHRoaXMuX3YyXzEuc2V0WCggKCAoIGN1cnNvclggLSBjYW52YXNSZWN0LmxlZnQgKSAvIGNhbnZhc1JlY3Qud2lkdGggKSAqIDIgLSAxICk7XG5cdFx0dGhpcy5fdjJfMS5zZXRZKCAoICggY2FudmFzUmVjdC5ib3R0b20gLSBjdXJzb3JZICkgLyBjYW52YXNSZWN0LmhlaWdodCApICogMiAtIDEgKTtcblx0XHRyZXR1cm4gdGhpcy5fdjJfMS5jbG9uZSgpO1xuXG5cdH07XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgY3Vyc29yIHBvc2l0aW9uIGluc2lkZSB0aGUgY2FudmFzIHgveSBjb29yZGluYXRlcyB3aXRoIHRoZSBvcmlnaW4gYmVpbmcgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB4IEN1cnNvciBob3Jpem9udGFsIGNvb3JkaW5hdGUgd2l0aGluIHRoZSBjYW52YXNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHkgQ3Vyc29yIHZlcnRpY2FsIGNvb3JkaW5hdGUgd2l0aGluIHRoZSBjYW52YXNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgd2hlcmUgdGhlIHJlbmRlcmVyIGRyYXdzIGl0cyBvdXRwdXRcblx0ICogQHJldHVybnMge1ZlY3RvcjJ9IEN1cnNvciBwb3NpdGlvbiBpbnNpZGUgdGhlIGNhbnZhc1xuXHQgKi9cblx0Z2V0Q3Vyc29yUG9zaXRpb24gPSAoIGN1cnNvclgsIGN1cnNvclksIGNhbnZhcyApID0+IHtcblxuXHRcdHRoaXMuX3YyXzEuY29weSggdGhpcy5nZXRDdXJzb3JOREMoIGN1cnNvclgsIGN1cnNvclksIGNhbnZhcyApICk7XG5cdFx0dGhpcy5fdjJfMS54ICo9ICggdGhpcy5jYW1lcmEucmlnaHQgLSB0aGlzLmNhbWVyYS5sZWZ0ICkgKiAwLjU7XG5cdFx0dGhpcy5fdjJfMS55ICo9ICggdGhpcy5jYW1lcmEudG9wIC0gdGhpcy5jYW1lcmEuYm90dG9tICkgKiAwLjU7XG5cdFx0cmV0dXJuIHRoaXMuX3YyXzEuY2xvbmUoKTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGNhbWVyYSB0byBiZSBjb250cm9sbGVkXG5cdCAqIEBwYXJhbSB7Q2FtZXJhfSBjYW1lcmEgVGhlIHZpcnR1YWwgY2FtZXJhIHRvIGJlIGNvbnRyb2xsZWRcblx0ICovXG5cdHNldENhbWVyYSA9ICggY2FtZXJhICkgPT4ge1xuXG5cdFx0Y2FtZXJhLmxvb2tBdCggdGhpcy50YXJnZXQgKTtcblx0XHRjYW1lcmEudXBkYXRlTWF0cml4KCk7XG5cblx0XHQvL3NldHRpbmcgc3RhdGVcblx0XHRpZiAoIGNhbWVyYS50eXBlID09ICdQZXJzcGVjdGl2ZUNhbWVyYScgKSB7XG5cblx0XHRcdHRoaXMuX2ZvdjAgPSBjYW1lcmEuZm92O1xuXHRcdFx0dGhpcy5fZm92U3RhdGUgPSBjYW1lcmEuZm92O1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5fY2FtZXJhTWF0cml4U3RhdGUwLmNvcHkoIGNhbWVyYS5tYXRyaXggKTtcblx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZS5jb3B5KCB0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZTAgKTtcblx0XHR0aGlzLl9jYW1lcmFQcm9qZWN0aW9uU3RhdGUuY29weSggY2FtZXJhLnByb2plY3Rpb25NYXRyaXggKTtcblx0XHR0aGlzLl96b29tMCA9IGNhbWVyYS56b29tO1xuXHRcdHRoaXMuX3pvb21TdGF0ZSA9IHRoaXMuX3pvb20wO1xuXG5cdFx0dGhpcy5faW5pdGlhbE5lYXIgPSBjYW1lcmEubmVhcjtcblx0XHR0aGlzLl9uZWFyUG9zMCA9IGNhbWVyYS5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLnRhcmdldCApIC0gY2FtZXJhLm5lYXI7XG5cdFx0dGhpcy5fbmVhclBvcyA9IHRoaXMuX2luaXRpYWxOZWFyO1xuXG5cdFx0dGhpcy5faW5pdGlhbEZhciA9IGNhbWVyYS5mYXI7XG5cdFx0dGhpcy5fZmFyUG9zMCA9IGNhbWVyYS5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLnRhcmdldCApIC0gY2FtZXJhLmZhcjtcblx0XHR0aGlzLl9mYXJQb3MgPSB0aGlzLl9pbml0aWFsRmFyO1xuXG5cdFx0dGhpcy5fdXAwLmNvcHkoIGNhbWVyYS51cCApO1xuXHRcdHRoaXMuX3VwU3RhdGUuY29weSggY2FtZXJhLnVwICk7XG5cblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0XHQvL21ha2luZyBnaXptb3Ncblx0XHR0aGlzLl90YlJhZGl1cyA9IHRoaXMuY2FsY3VsYXRlVGJSYWRpdXMoIGNhbWVyYSApO1xuXHRcdHRoaXMubWFrZUdpem1vcyggdGhpcy50YXJnZXQsIHRoaXMuX3RiUmFkaXVzICk7XG5cblx0fTtcblxuXHQvKipcblx0ICogU2V0IGdpem1vcyB2aXNpYmlsaXR5XG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWUgVmFsdWUgb2YgZ2l6bW9zIHZpc2liaWxpdHlcblx0ICovXG5cdHNldEdpem1vc1Zpc2libGUoIHZhbHVlICkge1xuXG5cdFx0dGhpcy5fZ2l6bW9zLnZpc2libGUgPSB2YWx1ZTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU2V0IGdpem1vcyByYWRpdXMgZmFjdG9yIGFuZCByZWRyYXdzIGdpem1vc1xuXHQgKiBAcGFyYW0ge0Zsb2F0fSB2YWx1ZSBWYWx1ZSBvZiByYWRpdXMgZmFjdG9yXG5cdCAqL1xuXHRzZXRUYlJhZGl1cyggdmFsdWUgKSB7XG5cblx0XHR0aGlzLnJhZGl1c0ZhY3RvciA9IHZhbHVlO1xuXHRcdHRoaXMuX3RiUmFkaXVzID0gdGhpcy5jYWxjdWxhdGVUYlJhZGl1cyggdGhpcy5jYW1lcmEgKTtcblxuXHRcdGNvbnN0IGN1cnZlID0gbmV3IEVsbGlwc2VDdXJ2ZSggMCwgMCwgdGhpcy5fdGJSYWRpdXMsIHRoaXMuX3RiUmFkaXVzICk7XG5cdFx0Y29uc3QgcG9pbnRzID0gY3VydmUuZ2V0UG9pbnRzKCB0aGlzLl9jdXJ2ZVB0cyApO1xuXHRcdGNvbnN0IGN1cnZlR2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKS5zZXRGcm9tUG9pbnRzKCBwb2ludHMgKTtcblxuXG5cdFx0Zm9yICggY29uc3QgZ2l6bW8gaW4gdGhpcy5fZ2l6bW9zLmNoaWxkcmVuICkge1xuXG5cdFx0XHR0aGlzLl9naXptb3MuY2hpbGRyZW5bIGdpem1vIF0uZ2VvbWV0cnkgPSBjdXJ2ZUdlb21ldHJ5O1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIHJvdGF0aW9uIGdpem1vcyBtYXRjaGluZyB0cmFja2JhbGwgY2VudGVyIGFuZCByYWRpdXNcblx0ICogQHBhcmFtIHtWZWN0b3IzfSB0YkNlbnRlciBUaGUgdHJhY2tiYWxsIGNlbnRlclxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGJSYWRpdXMgVGhlIHRyYWNrYmFsbCByYWRpdXNcblx0ICovXG5cdG1ha2VHaXptb3MgPSAoIHRiQ2VudGVyLCB0YlJhZGl1cyApID0+IHtcblxuXHRcdGNvbnN0IGN1cnZlID0gbmV3IEVsbGlwc2VDdXJ2ZSggMCwgMCwgdGJSYWRpdXMsIHRiUmFkaXVzICk7XG5cdFx0Y29uc3QgcG9pbnRzID0gY3VydmUuZ2V0UG9pbnRzKCB0aGlzLl9jdXJ2ZVB0cyApO1xuXG5cdFx0Ly9nZW9tZXRyeVxuXHRcdGNvbnN0IGN1cnZlR2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKS5zZXRGcm9tUG9pbnRzKCBwb2ludHMgKTtcblxuXHRcdC8vbWF0ZXJpYWxcblx0XHRjb25zdCBjdXJ2ZU1hdGVyaWFsWCA9IG5ldyBMaW5lQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHhmZjgwODAsIGZvZzogZmFsc2UsIHRyYW5zcGFyZW50OiB0cnVlLCBvcGFjaXR5OiAwLjYgfSApO1xuXHRcdGNvbnN0IGN1cnZlTWF0ZXJpYWxZID0gbmV3IExpbmVCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweDgwZmY4MCwgZm9nOiBmYWxzZSwgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6IDAuNiB9ICk7XG5cdFx0Y29uc3QgY3VydmVNYXRlcmlhbFogPSBuZXcgTGluZUJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4ODA4MGZmLCBmb2c6IGZhbHNlLCB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMC42IH0gKTtcblxuXHRcdC8vbGluZVxuXHRcdGNvbnN0IGdpem1vWCA9IG5ldyBMaW5lKCBjdXJ2ZUdlb21ldHJ5LCBjdXJ2ZU1hdGVyaWFsWCApO1xuXHRcdGNvbnN0IGdpem1vWSA9IG5ldyBMaW5lKCBjdXJ2ZUdlb21ldHJ5LCBjdXJ2ZU1hdGVyaWFsWSApO1xuXHRcdGNvbnN0IGdpem1vWiA9IG5ldyBMaW5lKCBjdXJ2ZUdlb21ldHJ5LCBjdXJ2ZU1hdGVyaWFsWiApO1xuXG5cdFx0Y29uc3Qgcm90YXRpb24gPSBNYXRoLlBJICogMC41O1xuXHRcdGdpem1vWC5yb3RhdGlvbi54ID0gcm90YXRpb247XG5cdFx0Z2l6bW9ZLnJvdGF0aW9uLnkgPSByb3RhdGlvbjtcblxuXG5cdFx0Ly9zZXR0aW5nIHN0YXRlXG5cdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZTAuaWRlbnRpdHkoKS5zZXRQb3NpdGlvbiggdGJDZW50ZXIgKTtcblx0XHR0aGlzLl9naXptb01hdHJpeFN0YXRlLmNvcHkoIHRoaXMuX2dpem1vTWF0cml4U3RhdGUwICk7XG5cblx0XHRpZiAoIHRoaXMuY2FtZXJhLnpvb20gIT0gMSApIHtcblxuXHRcdFx0Ly9hZGFwdCBnaXptb3Mgc2l6ZSB0byBjYW1lcmEgem9vbVxuXHRcdFx0Y29uc3Qgc2l6ZSA9IDEgLyB0aGlzLmNhbWVyYS56b29tO1xuXHRcdFx0dGhpcy5fc2NhbGVNYXRyaXgubWFrZVNjYWxlKCBzaXplLCBzaXplLCBzaXplICk7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGlvbk1hdHJpeC5tYWtlVHJhbnNsYXRpb24oIC0gdGJDZW50ZXIueCwgLSB0YkNlbnRlci55LCAtIHRiQ2VudGVyLnogKTtcblxuXHRcdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5wcmVtdWx0aXBseSggdGhpcy5fdHJhbnNsYXRpb25NYXRyaXggKS5wcmVtdWx0aXBseSggdGhpcy5fc2NhbGVNYXRyaXggKTtcblx0XHRcdHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4Lm1ha2VUcmFuc2xhdGlvbiggdGJDZW50ZXIueCwgdGJDZW50ZXIueSwgdGJDZW50ZXIueiApO1xuXHRcdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5wcmVtdWx0aXBseSggdGhpcy5fdHJhbnNsYXRpb25NYXRyaXggKTtcblxuXHRcdH1cblxuXHRcdHRoaXMuX2dpem1vTWF0cml4U3RhdGUuZGVjb21wb3NlKCB0aGlzLl9naXptb3MucG9zaXRpb24sIHRoaXMuX2dpem1vcy5xdWF0ZXJuaW9uLCB0aGlzLl9naXptb3Muc2NhbGUgKTtcblxuXHRcdHRoaXMuX2dpem1vcy5jbGVhcigpO1xuXG5cdFx0dGhpcy5fZ2l6bW9zLmFkZCggZ2l6bW9YICk7XG5cdFx0dGhpcy5fZ2l6bW9zLmFkZCggZ2l6bW9ZICk7XG5cdFx0dGhpcy5fZ2l6bW9zLmFkZCggZ2l6bW9aICk7XG5cblx0fTtcblxuXHQvKipcblx0ICogUGVyZm9ybSBhbmltYXRpb24gZm9yIGZvY3VzIG9wZXJhdGlvblxuXHQgKiBAcGFyYW0ge051bWJlcn0gdGltZSBJbnN0YW50IGluIHdoaWNoIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFzIHBlcmZvcm1hbmNlLm5vdygpXG5cdCAqIEBwYXJhbSB7VmVjdG9yM30gcG9pbnQgUG9pbnQgb2YgaW50ZXJlc3QgZm9yIGZvY3VzIG9wZXJhdGlvblxuXHQgKiBAcGFyYW0ge01hdHJpeDR9IGNhbWVyYU1hdHJpeCBDYW1lcmEgbWF0cml4XG5cdCAqIEBwYXJhbSB7TWF0cml4NH0gZ2l6bW9NYXRyaXggR2l6bW9zIG1hdHJpeFxuXHQgKi9cblx0b25Gb2N1c0FuaW0gPSAoIHRpbWUsIHBvaW50LCBjYW1lcmFNYXRyaXgsIGdpem1vTWF0cml4ICkgPT4ge1xuXG5cdFx0aWYgKCB0aGlzLl90aW1lU3RhcnQgPT0gLSAxICkge1xuXG5cdFx0XHQvL2FuaW1hdGlvbiBzdGFydFxuXHRcdFx0dGhpcy5fdGltZVN0YXJ0ID0gdGltZTtcblxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fc3RhdGUgPT0gU1RBVEUuQU5JTUFUSU9OX0ZPQ1VTICkge1xuXG5cdFx0XHRjb25zdCBkZWx0YVRpbWUgPSB0aW1lIC0gdGhpcy5fdGltZVN0YXJ0O1xuXHRcdFx0Y29uc3QgYW5pbVRpbWUgPSBkZWx0YVRpbWUgLyB0aGlzLmZvY3VzQW5pbWF0aW9uVGltZTtcblxuXHRcdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5jb3B5KCBnaXptb01hdHJpeCApO1xuXG5cdFx0XHRpZiAoIGFuaW1UaW1lID49IDEgKSB7XG5cblx0XHRcdFx0Ly9hbmltYXRpb24gZW5kXG5cblx0XHRcdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5kZWNvbXBvc2UoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiwgdGhpcy5fZ2l6bW9zLnF1YXRlcm5pb24sIHRoaXMuX2dpem1vcy5zY2FsZSApO1xuXG5cdFx0XHRcdHRoaXMuZm9jdXMoIHBvaW50LCB0aGlzLnNjYWxlRmFjdG9yICk7XG5cblx0XHRcdFx0dGhpcy5fdGltZVN0YXJ0ID0gLSAxO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVRiU3RhdGUoIFNUQVRFLklETEUsIGZhbHNlICk7XG5cdFx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zdCBhbW91bnQgPSB0aGlzLmVhc2VPdXRDdWJpYyggYW5pbVRpbWUgKTtcblx0XHRcdFx0Y29uc3Qgc2l6ZSA9ICggKCAxIC0gYW1vdW50ICkgKyAoIHRoaXMuc2NhbGVGYWN0b3IgKiBhbW91bnQgKSApO1xuXG5cdFx0XHRcdHRoaXMuX2dpem1vTWF0cml4U3RhdGUuZGVjb21wb3NlKCB0aGlzLl9naXptb3MucG9zaXRpb24sIHRoaXMuX2dpem1vcy5xdWF0ZXJuaW9uLCB0aGlzLl9naXptb3Muc2NhbGUgKTtcblx0XHRcdFx0dGhpcy5mb2N1cyggcG9pbnQsIHNpemUsIGFtb3VudCApO1xuXG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHR0aGlzLl9hbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGZ1bmN0aW9uICggdCApIHtcblxuXHRcdFx0XHRcdHNlbGYub25Gb2N1c0FuaW0oIHQsIHBvaW50LCBjYW1lcmFNYXRyaXgsIGdpem1vTWF0cml4LmNsb25lKCkgKTtcblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vaW50ZXJydXB0IGFuaW1hdGlvblxuXG5cdFx0XHR0aGlzLl9hbmltYXRpb25JZCA9IC0gMTtcblx0XHRcdHRoaXMuX3RpbWVTdGFydCA9IC0gMTtcblxuXHRcdH1cblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBQZXJmb3JtIGFuaW1hdGlvbiBmb3Igcm90YXRpb24gb3BlcmF0aW9uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lIEluc3RhbnQgaW4gd2hpY2ggdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYXMgcGVyZm9ybWFuY2Uubm93KClcblx0ICogQHBhcmFtIHtWZWN0b3IzfSByb3RhdGlvbkF4aXMgUm90YXRpb24gYXhpc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gdzAgSW5pdGlhbCBhbmd1bGFyIHZlbG9jaXR5XG5cdCAqL1xuXHRvblJvdGF0aW9uQW5pbSA9ICggdGltZSwgcm90YXRpb25BeGlzLCB3MCApID0+IHtcblxuXHRcdGlmICggdGhpcy5fdGltZVN0YXJ0ID09IC0gMSApIHtcblxuXHRcdFx0Ly9hbmltYXRpb24gc3RhcnRcblx0XHRcdHRoaXMuX2FuZ2xlUHJldiA9IDA7XG5cdFx0XHR0aGlzLl9hbmdsZUN1cnJlbnQgPSAwO1xuXHRcdFx0dGhpcy5fdGltZVN0YXJ0ID0gdGltZTtcblxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fc3RhdGUgPT0gU1RBVEUuQU5JTUFUSU9OX1JPVEFURSApIHtcblxuXHRcdFx0Ly93ID0gdzAgKyBhbHBoYSAqIHRcblx0XHRcdGNvbnN0IGRlbHRhVGltZSA9ICggdGltZSAtIHRoaXMuX3RpbWVTdGFydCApIC8gMTAwMDtcblx0XHRcdGNvbnN0IHcgPSB3MCArICggKCAtIHRoaXMuZGFtcGluZ0ZhY3RvciApICogZGVsdGFUaW1lICk7XG5cblx0XHRcdGlmICggdyA+IDAgKSB7XG5cblx0XHRcdFx0Ly90ZXRoYSA9IDAuNSAqIGFscGhhICogdF4yICsgdzAgKiB0ICsgdGV0aGEwXG5cdFx0XHRcdHRoaXMuX2FuZ2xlQ3VycmVudCA9IDAuNSAqICggLSB0aGlzLmRhbXBpbmdGYWN0b3IgKSAqIE1hdGgucG93KCBkZWx0YVRpbWUsIDIgKSArIHcwICogZGVsdGFUaW1lICsgMDtcblx0XHRcdFx0dGhpcy5hcHBseVRyYW5zZm9ybU1hdHJpeCggdGhpcy5yb3RhdGUoIHJvdGF0aW9uQXhpcywgdGhpcy5fYW5nbGVDdXJyZW50ICkgKTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuX2FuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggZnVuY3Rpb24gKCB0ICkge1xuXG5cdFx0XHRcdFx0c2VsZi5vblJvdGF0aW9uQW5pbSggdCwgcm90YXRpb25BeGlzLCB3MCApO1xuXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHR0aGlzLl9hbmltYXRpb25JZCA9IC0gMTtcblx0XHRcdFx0dGhpcy5fdGltZVN0YXJ0ID0gLSAxO1xuXG5cdFx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuSURMRSwgZmFsc2UgKTtcblx0XHRcdFx0dGhpcy5hY3RpdmF0ZUdpem1vcyggZmFsc2UgKTtcblxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvL2ludGVycnVwdCBhbmltYXRpb25cblxuXHRcdFx0dGhpcy5fYW5pbWF0aW9uSWQgPSAtIDE7XG5cdFx0XHR0aGlzLl90aW1lU3RhcnQgPSAtIDE7XG5cblx0XHRcdGlmICggdGhpcy5fc3RhdGUgIT0gU1RBVEUuUk9UQVRFICkge1xuXG5cdFx0XHRcdHRoaXMuYWN0aXZhdGVHaXptb3MoIGZhbHNlICk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFBlcmZvcm0gcGFuIG9wZXJhdGlvbiBtb3ZpbmcgY2FtZXJhIGJldHdlZW4gdHdvIHBvaW50c1xuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IHAwIEluaXRpYWwgcG9pbnRcblx0ICogQHBhcmFtIHtWZWN0b3IzfSBwMSBFbmRpbmcgcG9pbnRcblx0ICogQHBhcmFtIHtCb29sZWFufSBhZGp1c3QgSWYgbW92ZW1lbnQgc2hvdWxkIGJlIGFkanVzdGVkIGNvbnNpZGVyaW5nIGNhbWVyYSBkaXN0YW5jZSAoUGVyc3BlY3RpdmUgb25seSlcblx0ICovXG5cdHBhbiA9ICggcDAsIHAxLCBhZGp1c3QgPSBmYWxzZSApID0+IHtcblxuXHRcdGNvbnN0IG1vdmVtZW50ID0gcDAuY2xvbmUoKS5zdWIoIHAxICk7XG5cblx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHQvL2FkanVzdCBtb3ZlbWVudCBhbW91bnRcblx0XHRcdG1vdmVtZW50Lm11bHRpcGx5U2NhbGFyKCAxIC8gdGhpcy5jYW1lcmEuem9vbSApO1xuXG5cdFx0fSBlbHNlIGlmICggdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSAmJiBhZGp1c3QgKSB7XG5cblx0XHRcdC8vYWRqdXN0IG1vdmVtZW50IGFtb3VudFxuXHRcdFx0dGhpcy5fdjNfMS5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlMCApO1x0Ly9jYW1lcmEncyBpbml0aWFsIHBvc2l0aW9uXG5cdFx0XHR0aGlzLl92M18yLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZTAgKTtcdC8vZ2l6bW8ncyBpbml0aWFsIHBvc2l0aW9uXG5cdFx0XHRjb25zdCBkaXN0YW5jZUZhY3RvciA9IHRoaXMuX3YzXzEuZGlzdGFuY2VUbyggdGhpcy5fdjNfMiApIC8gdGhpcy5jYW1lcmEucG9zaXRpb24uZGlzdGFuY2VUbyggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uICk7XG5cdFx0XHRtb3ZlbWVudC5tdWx0aXBseVNjYWxhciggMSAvIGRpc3RhbmNlRmFjdG9yICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLl92M18xLnNldCggbW92ZW1lbnQueCwgbW92ZW1lbnQueSwgMCApLmFwcGx5UXVhdGVybmlvbiggdGhpcy5jYW1lcmEucXVhdGVybmlvbiApO1xuXG5cdFx0dGhpcy5fbTRfMS5tYWtlVHJhbnNsYXRpb24oIHRoaXMuX3YzXzEueCwgdGhpcy5fdjNfMS55LCB0aGlzLl92M18xLnogKTtcblxuXHRcdHRoaXMuc2V0VHJhbnNmb3JtYXRpb25NYXRyaWNlcyggdGhpcy5fbTRfMSwgdGhpcy5fbTRfMSApO1xuXHRcdHJldHVybiBfdHJhbnNmb3JtYXRpb247XG5cblx0fTtcblxuXHQvKipcblx0ICogUmVzZXQgdHJhY2tiYWxsXG5cdCAqL1xuXHRyZXNldCA9ICgpID0+IHtcblxuXHRcdHRoaXMuY2FtZXJhLnpvb20gPSB0aGlzLl96b29tMDtcblxuXHRcdGlmICggdGhpcy5jYW1lcmEuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0dGhpcy5jYW1lcmEuZm92ID0gdGhpcy5fZm92MDtcblxuXHRcdH1cblxuXHRcdHRoaXMuY2FtZXJhLm5lYXIgPSB0aGlzLl9uZWFyUG9zO1xuXHRcdHRoaXMuY2FtZXJhLmZhciA9IHRoaXMuX2ZhclBvcztcblx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZS5jb3B5KCB0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZTAgKTtcblx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZS5kZWNvbXBvc2UoIHRoaXMuY2FtZXJhLnBvc2l0aW9uLCB0aGlzLmNhbWVyYS5xdWF0ZXJuaW9uLCB0aGlzLmNhbWVyYS5zY2FsZSApO1xuXHRcdHRoaXMuY2FtZXJhLnVwLmNvcHkoIHRoaXMuX3VwMCApO1xuXG5cdFx0dGhpcy5jYW1lcmEudXBkYXRlTWF0cml4KCk7XG5cdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG5cdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5jb3B5KCB0aGlzLl9naXptb01hdHJpeFN0YXRlMCApO1xuXHRcdHRoaXMuX2dpem1vTWF0cml4U3RhdGUwLmRlY29tcG9zZSggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uLCB0aGlzLl9naXptb3MucXVhdGVybmlvbiwgdGhpcy5fZ2l6bW9zLnNjYWxlICk7XG5cdFx0dGhpcy5fZ2l6bW9zLnVwZGF0ZU1hdHJpeCgpO1xuXG5cdFx0dGhpcy5fdGJSYWRpdXMgPSB0aGlzLmNhbGN1bGF0ZVRiUmFkaXVzKCB0aGlzLmNhbWVyYSApO1xuXHRcdHRoaXMubWFrZUdpem1vcyggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uLCB0aGlzLl90YlJhZGl1cyApO1xuXG5cdFx0dGhpcy5jYW1lcmEubG9va0F0KCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblxuXHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuSURMRSwgZmFsc2UgKTtcblxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0fTtcblxuXHQvKipcblx0ICogUm90YXRlIHRoZSBjYW1lcmEgYXJvdW5kIGFuIGF4aXMgcGFzc2luZyBieSB0cmFja2JhbGwncyBjZW50ZXJcblx0ICogQHBhcmFtIHtWZWN0b3IzfSBheGlzIFJvdGF0aW9uIGF4aXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlIEFuZ2xlIGluIHJhZGlhbnNcblx0ICogQHJldHVybnMge09iamVjdH0gT2JqZWN0IHdpdGggJ2NhbWVyYScgZmllbGQgY29udGFpbmluZyB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggcmVzdWx0aW5nIGZyb20gdGhlIG9wZXJhdGlvbiB0byBiZSBhcHBsaWVkIHRvIHRoZSBjYW1lcmFcblx0ICovXG5cdHJvdGF0ZSA9ICggYXhpcywgYW5nbGUgKSA9PiB7XG5cblx0XHRjb25zdCBwb2ludCA9IHRoaXMuX2dpem1vcy5wb3NpdGlvbjsgLy9yb3RhdGlvbiBjZW50ZXJcblx0XHR0aGlzLl90cmFuc2xhdGlvbk1hdHJpeC5tYWtlVHJhbnNsYXRpb24oIC0gcG9pbnQueCwgLSBwb2ludC55LCAtIHBvaW50LnogKTtcblx0XHR0aGlzLl9yb3RhdGlvbk1hdHJpeC5tYWtlUm90YXRpb25BeGlzKCBheGlzLCAtIGFuZ2xlICk7XG5cblx0XHQvL3JvdGF0ZSBjYW1lcmFcblx0XHR0aGlzLl9tNF8xLm1ha2VUcmFuc2xhdGlvbiggcG9pbnQueCwgcG9pbnQueSwgcG9pbnQueiApO1xuXHRcdHRoaXMuX200XzEubXVsdGlwbHkoIHRoaXMuX3JvdGF0aW9uTWF0cml4ICk7XG5cdFx0dGhpcy5fbTRfMS5tdWx0aXBseSggdGhpcy5fdHJhbnNsYXRpb25NYXRyaXggKTtcblxuXHRcdHRoaXMuc2V0VHJhbnNmb3JtYXRpb25NYXRyaWNlcyggdGhpcy5fbTRfMSApO1xuXG5cdFx0cmV0dXJuIF90cmFuc2Zvcm1hdGlvbjtcblxuXHR9O1xuXG5cdGNvcHlTdGF0ZSA9ICgpID0+IHtcblxuXHRcdGxldCBzdGF0ZTtcblx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzdGF0ZSA9IEpTT04uc3RyaW5naWZ5KCB7IGFyY2JhbGxTdGF0ZToge1xuXG5cdFx0XHRcdGNhbWVyYUZhcjogdGhpcy5jYW1lcmEuZmFyLFxuXHRcdFx0XHRjYW1lcmFNYXRyaXg6IHRoaXMuY2FtZXJhLm1hdHJpeCxcblx0XHRcdFx0Y2FtZXJhTmVhcjogdGhpcy5jYW1lcmEubmVhcixcblx0XHRcdFx0Y2FtZXJhVXA6IHRoaXMuY2FtZXJhLnVwLFxuXHRcdFx0XHRjYW1lcmFab29tOiB0aGlzLmNhbWVyYS56b29tLFxuXHRcdFx0XHRnaXptb01hdHJpeDogdGhpcy5fZ2l6bW9zLm1hdHJpeFxuXG5cdFx0XHR9IH0gKTtcblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMuY2FtZXJhLmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHN0YXRlID0gSlNPTi5zdHJpbmdpZnkoIHsgYXJjYmFsbFN0YXRlOiB7XG5cdFx0XHRcdGNhbWVyYUZhcjogdGhpcy5jYW1lcmEuZmFyLFxuXHRcdFx0XHRjYW1lcmFGb3Y6IHRoaXMuY2FtZXJhLmZvdixcblx0XHRcdFx0Y2FtZXJhTWF0cml4OiB0aGlzLmNhbWVyYS5tYXRyaXgsXG5cdFx0XHRcdGNhbWVyYU5lYXI6IHRoaXMuY2FtZXJhLm5lYXIsXG5cdFx0XHRcdGNhbWVyYVVwOiB0aGlzLmNhbWVyYS51cCxcblx0XHRcdFx0Y2FtZXJhWm9vbTogdGhpcy5jYW1lcmEuem9vbSxcblx0XHRcdFx0Z2l6bW9NYXRyaXg6IHRoaXMuX2dpem1vcy5tYXRyaXhcblxuXHRcdFx0fSB9ICk7XG5cblx0XHR9XG5cblx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCggc3RhdGUgKTtcblxuXHR9O1xuXG5cdHBhc3RlU3RhdGUgPSAoKSA9PiB7XG5cblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbiggZnVuY3Rpb24gcmVzb2x2ZWQoIHZhbHVlICkge1xuXG5cdFx0XHRzZWxmLnNldFN0YXRlRnJvbUpTT04oIHZhbHVlICk7XG5cblx0XHR9ICk7XG5cblx0fTtcblxuXHQvKipcblx0ICogU2F2ZSB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgY29udHJvbC4gVGhpcyBjYW4gbGF0ZXIgYmUgcmVjb3ZlciB3aXRoIC5yZXNldFxuXHQgKi9cblx0c2F2ZVN0YXRlID0gKCkgPT4ge1xuXG5cdFx0dGhpcy5fY2FtZXJhTWF0cml4U3RhdGUwLmNvcHkoIHRoaXMuY2FtZXJhLm1hdHJpeCApO1xuXHRcdHRoaXMuX2dpem1vTWF0cml4U3RhdGUwLmNvcHkoIHRoaXMuX2dpem1vcy5tYXRyaXggKTtcblx0XHR0aGlzLl9uZWFyUG9zID0gdGhpcy5jYW1lcmEubmVhcjtcblx0XHR0aGlzLl9mYXJQb3MgPSB0aGlzLmNhbWVyYS5mYXI7XG5cdFx0dGhpcy5fem9vbTAgPSB0aGlzLmNhbWVyYS56b29tO1xuXHRcdHRoaXMuX3VwMC5jb3B5KCB0aGlzLmNhbWVyYS51cCApO1xuXG5cdFx0aWYgKCB0aGlzLmNhbWVyYS5pc1BlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHR0aGlzLl9mb3YwID0gdGhpcy5jYW1lcmEuZm92O1xuXG5cdFx0fVxuXG5cdH07XG5cblx0LyoqXG5cdCAqIFBlcmZvcm0gdW5pZm9ybSBzY2FsZSBvcGVyYXRpb24gYXJvdW5kIGEgZ2l2ZW4gcG9pbnRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgU2NhbGUgZmFjdG9yXG5cdCAqIEBwYXJhbSB7VmVjdG9yM30gcG9pbnQgUG9pbnQgYXJvdW5kIHdoaWNoIHNjYWxlXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gc2NhbGVHaXptb3MgSWYgZ2l6bW9zIHNob3VsZCBiZSBzY2FsZWQgKFBlcnNwZWN0aXZlIG9ubHkpXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE9iamVjdCB3aXRoICdjYW1lcmEnIGFuZCAnZ2l6bW8nIGZpZWxkcyBjb250YWluaW5nIHRyYW5zZm9ybWF0aW9uIG1hdHJpY2VzIHJlc3VsdGluZyBmcm9tIHRoZSBvcGVyYXRpb24gdG8gYmUgYXBwbGllZCB0byB0aGUgY2FtZXJhIGFuZCBnaXptb3Ncblx0ICovXG5cdHNjYWxlID0gKCBzaXplLCBwb2ludCwgc2NhbGVHaXptb3MgPSB0cnVlICkgPT4ge1xuXG5cdFx0X3NjYWxlUG9pbnRUZW1wLmNvcHkoIHBvaW50ICk7XG5cdFx0bGV0IHNpemVJbnZlcnNlID0gMSAvIHNpemU7XG5cblx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHQvL2NhbWVyYSB6b29tXG5cdFx0XHR0aGlzLmNhbWVyYS56b29tID0gdGhpcy5fem9vbVN0YXRlO1xuXHRcdFx0dGhpcy5jYW1lcmEuem9vbSAqPSBzaXplO1xuXG5cdFx0XHQvL2NoZWNrIG1pbiBhbmQgbWF4IHpvb21cblx0XHRcdGlmICggdGhpcy5jYW1lcmEuem9vbSA+IHRoaXMubWF4Wm9vbSApIHtcblxuXHRcdFx0XHR0aGlzLmNhbWVyYS56b29tID0gdGhpcy5tYXhab29tO1xuXHRcdFx0XHRzaXplSW52ZXJzZSA9IHRoaXMuX3pvb21TdGF0ZSAvIHRoaXMubWF4Wm9vbTtcblxuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5jYW1lcmEuem9vbSA8IHRoaXMubWluWm9vbSApIHtcblxuXHRcdFx0XHR0aGlzLmNhbWVyYS56b29tID0gdGhpcy5taW5ab29tO1xuXHRcdFx0XHRzaXplSW52ZXJzZSA9IHRoaXMuX3pvb21TdGF0ZSAvIHRoaXMubWluWm9vbTtcblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0XHRcdHRoaXMuX3YzXzEuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLl9naXptb01hdHJpeFN0YXRlICk7XHQvL2dpem1vcyBwb3NpdGlvblxuXG5cdFx0XHQvL3NjYWxlIGdpem1vcyBzbyB0aGV5IGFwcGVhciBpbiB0aGUgc2FtZSBzcG90IGhhdmluZyB0aGUgc2FtZSBkaW1lbnNpb25cblx0XHRcdHRoaXMuX3NjYWxlTWF0cml4Lm1ha2VTY2FsZSggc2l6ZUludmVyc2UsIHNpemVJbnZlcnNlLCBzaXplSW52ZXJzZSApO1xuXHRcdFx0dGhpcy5fdHJhbnNsYXRpb25NYXRyaXgubWFrZVRyYW5zbGF0aW9uKCAtIHRoaXMuX3YzXzEueCwgLSB0aGlzLl92M18xLnksIC0gdGhpcy5fdjNfMS56ICk7XG5cblx0XHRcdHRoaXMuX200XzIubWFrZVRyYW5zbGF0aW9uKCB0aGlzLl92M18xLngsIHRoaXMuX3YzXzEueSwgdGhpcy5fdjNfMS56ICkubXVsdGlwbHkoIHRoaXMuX3NjYWxlTWF0cml4ICk7XG5cdFx0XHR0aGlzLl9tNF8yLm11bHRpcGx5KCB0aGlzLl90cmFuc2xhdGlvbk1hdHJpeCApO1xuXG5cblx0XHRcdC8vbW92ZSBjYW1lcmEgYW5kIGdpem1vcyB0byBvYnRhaW4gcGluY2ggZWZmZWN0XG5cdFx0XHRfc2NhbGVQb2ludFRlbXAuc3ViKCB0aGlzLl92M18xICk7XG5cblx0XHRcdGNvbnN0IGFtb3VudCA9IF9zY2FsZVBvaW50VGVtcC5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKCBzaXplSW52ZXJzZSApO1xuXHRcdFx0X3NjYWxlUG9pbnRUZW1wLnN1YiggYW1vdW50ICk7XG5cblx0XHRcdHRoaXMuX200XzEubWFrZVRyYW5zbGF0aW9uKCBfc2NhbGVQb2ludFRlbXAueCwgX3NjYWxlUG9pbnRUZW1wLnksIF9zY2FsZVBvaW50VGVtcC56ICk7XG5cdFx0XHR0aGlzLl9tNF8yLnByZW11bHRpcGx5KCB0aGlzLl9tNF8xICk7XG5cblx0XHRcdHRoaXMuc2V0VHJhbnNmb3JtYXRpb25NYXRyaWNlcyggdGhpcy5fbTRfMSwgdGhpcy5fbTRfMiApO1xuXHRcdFx0cmV0dXJuIF90cmFuc2Zvcm1hdGlvbjtcblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMuY2FtZXJhLmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHRoaXMuX3YzXzEuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZSApO1xuXHRcdFx0dGhpcy5fdjNfMi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2dpem1vTWF0cml4U3RhdGUgKTtcblxuXHRcdFx0Ly9tb3ZlIGNhbWVyYVxuXHRcdFx0bGV0IGRpc3RhbmNlID0gdGhpcy5fdjNfMS5kaXN0YW5jZVRvKCBfc2NhbGVQb2ludFRlbXAgKTtcblx0XHRcdGxldCBhbW91bnQgPSBkaXN0YW5jZSAtICggZGlzdGFuY2UgKiBzaXplSW52ZXJzZSApO1xuXG5cdFx0XHQvL2NoZWNrIG1pbiBhbmQgbWF4IGRpc3RhbmNlXG5cdFx0XHRjb25zdCBuZXdEaXN0YW5jZSA9IGRpc3RhbmNlIC0gYW1vdW50O1xuXHRcdFx0aWYgKCBuZXdEaXN0YW5jZSA8IHRoaXMubWluRGlzdGFuY2UgKSB7XG5cblx0XHRcdFx0c2l6ZUludmVyc2UgPSB0aGlzLm1pbkRpc3RhbmNlIC8gZGlzdGFuY2U7XG5cdFx0XHRcdGFtb3VudCA9IGRpc3RhbmNlIC0gKCBkaXN0YW5jZSAqIHNpemVJbnZlcnNlICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIG5ld0Rpc3RhbmNlID4gdGhpcy5tYXhEaXN0YW5jZSApIHtcblxuXHRcdFx0XHRzaXplSW52ZXJzZSA9IHRoaXMubWF4RGlzdGFuY2UgLyBkaXN0YW5jZTtcblx0XHRcdFx0YW1vdW50ID0gZGlzdGFuY2UgLSAoIGRpc3RhbmNlICogc2l6ZUludmVyc2UgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRfb2Zmc2V0LmNvcHkoIF9zY2FsZVBvaW50VGVtcCApLnN1YiggdGhpcy5fdjNfMSApLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKCBhbW91bnQgKTtcblxuXHRcdFx0dGhpcy5fbTRfMS5tYWtlVHJhbnNsYXRpb24oIF9vZmZzZXQueCwgX29mZnNldC55LCBfb2Zmc2V0LnogKTtcblxuXG5cdFx0XHRpZiAoIHNjYWxlR2l6bW9zICkge1xuXG5cdFx0XHRcdC8vc2NhbGUgZ2l6bW9zIHNvIHRoZXkgYXBwZWFyIGluIHRoZSBzYW1lIHNwb3QgaGF2aW5nIHRoZSBzYW1lIGRpbWVuc2lvblxuXHRcdFx0XHRjb25zdCBwb3MgPSB0aGlzLl92M18yO1xuXG5cdFx0XHRcdGRpc3RhbmNlID0gcG9zLmRpc3RhbmNlVG8oIF9zY2FsZVBvaW50VGVtcCApO1xuXHRcdFx0XHRhbW91bnQgPSBkaXN0YW5jZSAtICggZGlzdGFuY2UgKiBzaXplSW52ZXJzZSApO1xuXHRcdFx0XHRfb2Zmc2V0LmNvcHkoIF9zY2FsZVBvaW50VGVtcCApLnN1YiggdGhpcy5fdjNfMiApLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKCBhbW91bnQgKTtcblxuXHRcdFx0XHR0aGlzLl90cmFuc2xhdGlvbk1hdHJpeC5tYWtlVHJhbnNsYXRpb24oIHBvcy54LCBwb3MueSwgcG9zLnogKTtcblx0XHRcdFx0dGhpcy5fc2NhbGVNYXRyaXgubWFrZVNjYWxlKCBzaXplSW52ZXJzZSwgc2l6ZUludmVyc2UsIHNpemVJbnZlcnNlICk7XG5cblx0XHRcdFx0dGhpcy5fbTRfMi5tYWtlVHJhbnNsYXRpb24oIF9vZmZzZXQueCwgX29mZnNldC55LCBfb2Zmc2V0LnogKS5tdWx0aXBseSggdGhpcy5fdHJhbnNsYXRpb25NYXRyaXggKTtcblx0XHRcdFx0dGhpcy5fbTRfMi5tdWx0aXBseSggdGhpcy5fc2NhbGVNYXRyaXggKTtcblxuXHRcdFx0XHR0aGlzLl90cmFuc2xhdGlvbk1hdHJpeC5tYWtlVHJhbnNsYXRpb24oIC0gcG9zLngsIC0gcG9zLnksIC0gcG9zLnogKTtcblxuXHRcdFx0XHR0aGlzLl9tNF8yLm11bHRpcGx5KCB0aGlzLl90cmFuc2xhdGlvbk1hdHJpeCApO1xuXHRcdFx0XHR0aGlzLnNldFRyYW5zZm9ybWF0aW9uTWF0cmljZXMoIHRoaXMuX200XzEsIHRoaXMuX200XzIgKTtcblxuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHRoaXMuc2V0VHJhbnNmb3JtYXRpb25NYXRyaWNlcyggdGhpcy5fbTRfMSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfdHJhbnNmb3JtYXRpb247XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogU2V0IGNhbWVyYSBmb3Zcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIGZvdiB0byBiZSBzZXR0ZWRcblx0ICovXG5cdHNldEZvdiA9ICggdmFsdWUgKSA9PiB7XG5cblx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHRoaXMuY2FtZXJhLmZvdiA9IE1hdGhVdGlscy5jbGFtcCggdmFsdWUsIHRoaXMubWluRm92LCB0aGlzLm1heEZvdiApO1xuXHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB2YWx1ZXMgaW4gdHJhbnNmb3JtYXRpb24gb2JqZWN0XG5cdCAqIEBwYXJhbSB7TWF0cml4NH0gY2FtZXJhIFRyYW5zZm9ybWF0aW9uIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGNhbWVyYVxuXHQgKiBAcGFyYW0ge01hdHJpeDR9IGdpem1vcyBUcmFuc2Zvcm1hdGlvbiB0byBiZSBhcHBsaWVkIHRvIGdpem1vc1xuXHQgKi9cblx0IHNldFRyYW5zZm9ybWF0aW9uTWF0cmljZXMoIGNhbWVyYSA9IG51bGwsIGdpem1vcyA9IG51bGwgKSB7XG5cblx0XHRpZiAoIGNhbWVyYSAhPSBudWxsICkge1xuXG5cdFx0XHRpZiAoIF90cmFuc2Zvcm1hdGlvbi5jYW1lcmEgIT0gbnVsbCApIHtcblxuXHRcdFx0XHRfdHJhbnNmb3JtYXRpb24uY2FtZXJhLmNvcHkoIGNhbWVyYSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdF90cmFuc2Zvcm1hdGlvbi5jYW1lcmEgPSBjYW1lcmEuY2xvbmUoKTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0X3RyYW5zZm9ybWF0aW9uLmNhbWVyYSA9IG51bGw7XG5cblx0XHR9XG5cblx0XHRpZiAoIGdpem1vcyAhPSBudWxsICkge1xuXG5cdFx0XHRpZiAoIF90cmFuc2Zvcm1hdGlvbi5naXptb3MgIT0gbnVsbCApIHtcblxuXHRcdFx0XHRfdHJhbnNmb3JtYXRpb24uZ2l6bW9zLmNvcHkoIGdpem1vcyApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdF90cmFuc2Zvcm1hdGlvbi5naXptb3MgPSBnaXptb3MuY2xvbmUoKTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0X3RyYW5zZm9ybWF0aW9uLmdpem1vcyA9IG51bGw7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSb3RhdGUgY2FtZXJhIGFyb3VuZCBpdHMgZGlyZWN0aW9uIGF4aXMgcGFzc2luZyBieSBhIGdpdmVuIHBvaW50IGJ5IGEgZ2l2ZW4gYW5nbGVcblx0ICogQHBhcmFtIHtWZWN0b3IzfSBwb2ludCBUaGUgcG9pbnQgd2hlcmUgdGhlIHJvdGF0aW9uIGF4aXMgaXMgcGFzc2luZyB0cm91Z2hcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGFuZ2xlIEFuZ2xlIGluIHJhZGlhbnNcblx0ICogQHJldHVybnMgVGhlIGNvbXB1dGVkIHRyYW5zb3JtYXRpb24gbWF0aXhcblx0ICovXG5cdHpSb3RhdGUgPSAoIHBvaW50LCBhbmdsZSApID0+IHtcblxuXHRcdHRoaXMuX3JvdGF0aW9uTWF0cml4Lm1ha2VSb3RhdGlvbkF4aXMoIHRoaXMuX3JvdGF0aW9uQXhpcywgYW5nbGUgKTtcblx0XHR0aGlzLl90cmFuc2xhdGlvbk1hdHJpeC5tYWtlVHJhbnNsYXRpb24oIC0gcG9pbnQueCwgLSBwb2ludC55LCAtIHBvaW50LnogKTtcblxuXHRcdHRoaXMuX200XzEubWFrZVRyYW5zbGF0aW9uKCBwb2ludC54LCBwb2ludC55LCBwb2ludC56ICk7XG5cdFx0dGhpcy5fbTRfMS5tdWx0aXBseSggdGhpcy5fcm90YXRpb25NYXRyaXggKTtcblx0XHR0aGlzLl9tNF8xLm11bHRpcGx5KCB0aGlzLl90cmFuc2xhdGlvbk1hdHJpeCApO1xuXG5cdFx0dGhpcy5fdjNfMS5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2dpem1vTWF0cml4U3RhdGUgKS5zdWIoIHBvaW50ICk7XHQvL3ZlY3RvciBmcm9tIHJvdGF0aW9uIGNlbnRlciB0byBnaXptb3MgcG9zaXRpb25cblx0XHR0aGlzLl92M18yLmNvcHkoIHRoaXMuX3YzXzEgKS5hcHBseUF4aXNBbmdsZSggdGhpcy5fcm90YXRpb25BeGlzLCBhbmdsZSApO1x0Ly9hcHBseSByb3RhdGlvblxuXHRcdHRoaXMuX3YzXzIuc3ViKCB0aGlzLl92M18xICk7XG5cblx0XHR0aGlzLl9tNF8yLm1ha2VUcmFuc2xhdGlvbiggdGhpcy5fdjNfMi54LCB0aGlzLl92M18yLnksIHRoaXMuX3YzXzIueiApO1xuXG5cdFx0dGhpcy5zZXRUcmFuc2Zvcm1hdGlvbk1hdHJpY2VzKCB0aGlzLl9tNF8xLCB0aGlzLl9tNF8yICk7XG5cdFx0cmV0dXJuIF90cmFuc2Zvcm1hdGlvbjtcblxuXHR9O1xuXG5cblx0Z2V0UmF5Y2FzdGVyKCkge1xuXG5cdFx0cmV0dXJuIF9yYXljYXN0ZXI7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIFVucHJvamVjdCB0aGUgY3Vyc29yIG9uIHRoZSAzRCBvYmplY3Qgc3VyZmFjZVxuXHQgKiBAcGFyYW0ge1ZlY3RvcjJ9IGN1cnNvciBDdXJzb3IgY29vcmRpbmF0ZXMgaW4gTkRDXG5cdCAqIEBwYXJhbSB7Q2FtZXJhfSBjYW1lcmEgVmlydHVhbCBjYW1lcmFcblx0ICogQHJldHVybnMge1ZlY3RvcjN9IFRoZSBwb2ludCBvZiBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgbW9kZWwsIGlmIGV4aXN0LCBudWxsIG90aGVyd2lzZVxuXHQgKi9cblx0dW5wcm9qZWN0T25PYmogPSAoIGN1cnNvciwgY2FtZXJhICkgPT4ge1xuXG5cdFx0Y29uc3QgcmF5Y2FzdGVyID0gdGhpcy5nZXRSYXljYXN0ZXIoKTtcblx0XHRyYXljYXN0ZXIubmVhciA9IGNhbWVyYS5uZWFyO1xuXHRcdHJheWNhc3Rlci5mYXIgPSBjYW1lcmEuZmFyO1xuXHRcdHJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCBjdXJzb3IsIGNhbWVyYSApO1xuXG5cdFx0Y29uc3QgaW50ZXJzZWN0ID0gcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIHRoaXMuc2NlbmUuY2hpbGRyZW4sIHRydWUgKTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGludGVyc2VjdC5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGlmICggaW50ZXJzZWN0WyBpIF0ub2JqZWN0LnV1aWQgIT0gdGhpcy5fZ2l6bW9zLnV1aWQgJiYgaW50ZXJzZWN0WyBpIF0uZmFjZSAhPSBudWxsICkge1xuXG5cdFx0XHRcdHJldHVybiBpbnRlcnNlY3RbIGkgXS5wb2ludC5jbG9uZSgpO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBVbnByb2plY3QgdGhlIGN1cnNvciBvbiB0aGUgdHJhY2tiYWxsIHN1cmZhY2Vcblx0ICogQHBhcmFtIHtDYW1lcmF9IGNhbWVyYSBUaGUgdmlydHVhbCBjYW1lcmFcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGN1cnNvclggQ3Vyc29yIGhvcml6b250YWwgY29vcmRpbmF0ZSBvbiBzY3JlZW5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IGN1cnNvclkgQ3Vyc29yIHZlcnRpY2FsIGNvb3JkaW5hdGUgb24gc2NyZWVuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIHdoZXJlIHRoZSByZW5kZXJlciBkcmF3cyBpdHMgb3V0cHV0XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0YlJhZGl1cyBUaGUgdHJhY2tiYWxsIHJhZGl1c1xuXHQgKiBAcmV0dXJucyB7VmVjdG9yM30gVGhlIHVucHJvamVjdGVkIHBvaW50IG9uIHRoZSB0cmFja2JhbGwgc3VyZmFjZVxuXHQgKi9cblx0dW5wcm9qZWN0T25UYlN1cmZhY2UgPSAoIGNhbWVyYSwgY3Vyc29yWCwgY3Vyc29yWSwgY2FudmFzLCB0YlJhZGl1cyApID0+IHtcblxuXHRcdGlmICggY2FtZXJhLnR5cGUgPT0gJ09ydGhvZ3JhcGhpY0NhbWVyYScgKSB7XG5cblx0XHRcdHRoaXMuX3YyXzEuY29weSggdGhpcy5nZXRDdXJzb3JQb3NpdGlvbiggY3Vyc29yWCwgY3Vyc29yWSwgY2FudmFzICkgKTtcblx0XHRcdHRoaXMuX3YzXzEuc2V0KCB0aGlzLl92Ml8xLngsIHRoaXMuX3YyXzEueSwgMCApO1xuXG5cdFx0XHRjb25zdCB4MiA9IE1hdGgucG93KCB0aGlzLl92Ml8xLngsIDIgKTtcblx0XHRcdGNvbnN0IHkyID0gTWF0aC5wb3coIHRoaXMuX3YyXzEueSwgMiApO1xuXHRcdFx0Y29uc3QgcjIgPSBNYXRoLnBvdyggdGhpcy5fdGJSYWRpdXMsIDIgKTtcblxuXHRcdFx0aWYgKCB4MiArIHkyIDw9IHIyICogMC41ICkge1xuXG5cdFx0XHRcdC8vaW50ZXJzZWN0aW9uIHdpdGggc3BoZXJlXG5cdFx0XHRcdHRoaXMuX3YzXzEuc2V0WiggTWF0aC5zcXJ0KCByMiAtICggeDIgKyB5MiApICkgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvL2ludGVyc2VjdGlvbiB3aXRoIGh5cGVyYm9sb2lkXG5cdFx0XHRcdHRoaXMuX3YzXzEuc2V0WiggKCByMiAqIDAuNSApIC8gKCBNYXRoLnNxcnQoIHgyICsgeTIgKSApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuX3YzXzE7XG5cblx0XHR9IGVsc2UgaWYgKCBjYW1lcmEudHlwZSA9PSAnUGVyc3BlY3RpdmVDYW1lcmEnICkge1xuXG5cdFx0XHQvL3VucHJvamVjdCBjdXJzb3Igb24gdGhlIG5lYXIgcGxhbmVcblx0XHRcdHRoaXMuX3YyXzEuY29weSggdGhpcy5nZXRDdXJzb3JOREMoIGN1cnNvclgsIGN1cnNvclksIGNhbnZhcyApICk7XG5cblx0XHRcdHRoaXMuX3YzXzEuc2V0KCB0aGlzLl92Ml8xLngsIHRoaXMuX3YyXzEueSwgLSAxICk7XG5cdFx0XHR0aGlzLl92M18xLmFwcGx5TWF0cml4NCggY2FtZXJhLnByb2plY3Rpb25NYXRyaXhJbnZlcnNlICk7XG5cblx0XHRcdGNvbnN0IHJheURpciA9IHRoaXMuX3YzXzEuY2xvbmUoKS5ub3JtYWxpemUoKTsgLy91bnByb2plY3RlZCByYXkgZGlyZWN0aW9uXG5cdFx0XHRjb25zdCBjYW1lcmFHaXptb0Rpc3RhbmNlID0gY2FtZXJhLnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXHRcdFx0Y29uc3QgcmFkaXVzMiA9IE1hdGgucG93KCB0YlJhZGl1cywgMiApO1xuXG5cdFx0XHQvL1x0ICBjYW1lcmFcblx0XHRcdC8vXHRcdHxcXFxuXHRcdFx0Ly9cdFx0fCBcXFxuXHRcdFx0Ly9cdFx0fCAgXFxcblx0XHRcdC8vXHRoXHR8XHRcXFxuXHRcdFx0Ly9cdFx0fCBcdCBcXFxuXHRcdFx0Ly9cdFx0fCBcdCAgXFxcblx0XHRcdC8vXHRfIF8gfCBfIF8gX1xcIF8gXyAgbmVhciBwbGFuZVxuXHRcdFx0Ly9cdFx0XHRsXG5cblx0XHRcdGNvbnN0IGggPSB0aGlzLl92M18xLno7XG5cdFx0XHRjb25zdCBsID0gTWF0aC5zcXJ0KCBNYXRoLnBvdyggdGhpcy5fdjNfMS54LCAyICkgKyBNYXRoLnBvdyggdGhpcy5fdjNfMS55LCAyICkgKTtcblxuXHRcdFx0aWYgKCBsID09IDAgKSB7XG5cblx0XHRcdFx0Ly9yYXkgYWxpZ25lZCB3aXRoIGNhbWVyYVxuXHRcdFx0XHRyYXlEaXIuc2V0KCB0aGlzLl92M18xLngsIHRoaXMuX3YzXzEueSwgdGJSYWRpdXMgKTtcblx0XHRcdFx0cmV0dXJuIHJheURpcjtcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtID0gaCAvIGw7XG5cdFx0XHRjb25zdCBxID0gY2FtZXJhR2l6bW9EaXN0YW5jZTtcblxuXHRcdFx0Lypcblx0XHRcdCAqIGNhbGN1bGF0ZSBpbnRlcnNlY3Rpb24gcG9pbnQgYmV0d2VlbiB1bnByb2plY3RlZCByYXkgYW5kIHRyYWNrYmFsbCBzdXJmYWNlXG5cdFx0XHQgKnx5ID0gbSAqIHggKyBxXG5cdFx0XHQgKnx4XjIgKyB5XjIgPSByXjJcblx0XHRcdCAqXG5cdFx0XHQgKiAobV4yICsgMSkgKiB4XjIgKyAoMiAqIG0gKiBxKSAqIHggKyBxXjIgLSByXjIgPSAwXG5cdFx0XHQgKi9cblx0XHRcdGxldCBhID0gTWF0aC5wb3coIG0sIDIgKSArIDE7XG5cdFx0XHRsZXQgYiA9IDIgKiBtICogcTtcblx0XHRcdGxldCBjID0gTWF0aC5wb3coIHEsIDIgKSAtIHJhZGl1czI7XG5cdFx0XHRsZXQgZGVsdGEgPSBNYXRoLnBvdyggYiwgMiApIC0gKCA0ICogYSAqIGMgKTtcblxuXHRcdFx0aWYgKCBkZWx0YSA+PSAwICkge1xuXG5cdFx0XHRcdC8vaW50ZXJzZWN0aW9uIHdpdGggc3BoZXJlXG5cdFx0XHRcdHRoaXMuX3YyXzEuc2V0WCggKCAtIGIgLSBNYXRoLnNxcnQoIGRlbHRhICkgKSAvICggMiAqIGEgKSApO1xuXHRcdFx0XHR0aGlzLl92Ml8xLnNldFkoIG0gKiB0aGlzLl92Ml8xLnggKyBxICk7XG5cblx0XHRcdFx0Y29uc3QgYW5nbGUgPSBNYXRoVXRpbHMuUkFEMkRFRyAqIHRoaXMuX3YyXzEuYW5nbGUoKTtcblxuXHRcdFx0XHRpZiAoIGFuZ2xlID49IDQ1ICkge1xuXG5cdFx0XHRcdFx0Ly9pZiBhbmdsZSBiZXR3ZWVuIGludGVyc2VjdGlvbiBwb2ludCBhbmQgWCcgYXhpcyBpcyA+PSA0NcKwLCByZXR1cm4gdGhhdCBwb2ludFxuXHRcdFx0XHRcdC8vb3RoZXJ3aXNlLCBjYWxjdWxhdGUgaW50ZXJzZWN0aW9uIHBvaW50IHdpdGggaHlwZXJib2xvaWRcblxuXHRcdFx0XHRcdGNvbnN0IHJheUxlbmd0aCA9IE1hdGguc3FydCggTWF0aC5wb3coIHRoaXMuX3YyXzEueCwgMiApICsgTWF0aC5wb3coICggY2FtZXJhR2l6bW9EaXN0YW5jZSAtIHRoaXMuX3YyXzEueSApLCAyICkgKTtcblx0XHRcdFx0XHRyYXlEaXIubXVsdGlwbHlTY2FsYXIoIHJheUxlbmd0aCApO1xuXHRcdFx0XHRcdHJheURpci56ICs9IGNhbWVyYUdpem1vRGlzdGFuY2U7XG5cdFx0XHRcdFx0cmV0dXJuIHJheURpcjtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0Ly9pbnRlcnNlY3Rpb24gd2l0aCBoeXBlcmJvbG9pZFxuXHRcdFx0Lypcblx0XHRcdCAqfHkgPSBtICogeCArIHFcblx0XHRcdCAqfHkgPSAoMSAvIHgpICogKHJeMiAvIDIpXG5cdFx0XHQgKlxuXHRcdFx0ICogbSAqIHheMiArIHEgKiB4IC0gcl4yIC8gMiA9IDBcblx0XHRcdCAqL1xuXG5cdFx0XHRhID0gbTtcblx0XHRcdGIgPSBxO1xuXHRcdFx0YyA9IC0gcmFkaXVzMiAqIDAuNTtcblx0XHRcdGRlbHRhID0gTWF0aC5wb3coIGIsIDIgKSAtICggNCAqIGEgKiBjICk7XG5cdFx0XHR0aGlzLl92Ml8xLnNldFgoICggLSBiIC0gTWF0aC5zcXJ0KCBkZWx0YSApICkgLyAoIDIgKiBhICkgKTtcblx0XHRcdHRoaXMuX3YyXzEuc2V0WSggbSAqIHRoaXMuX3YyXzEueCArIHEgKTtcblxuXHRcdFx0Y29uc3QgcmF5TGVuZ3RoID0gTWF0aC5zcXJ0KCBNYXRoLnBvdyggdGhpcy5fdjJfMS54LCAyICkgKyBNYXRoLnBvdyggKCBjYW1lcmFHaXptb0Rpc3RhbmNlIC0gdGhpcy5fdjJfMS55ICksIDIgKSApO1xuXG5cdFx0XHRyYXlEaXIubXVsdGlwbHlTY2FsYXIoIHJheUxlbmd0aCApO1xuXHRcdFx0cmF5RGlyLnogKz0gY2FtZXJhR2l6bW9EaXN0YW5jZTtcblx0XHRcdHJldHVybiByYXlEaXI7XG5cblx0XHR9XG5cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBVbnByb2plY3QgdGhlIGN1cnNvciBvbiB0aGUgcGxhbmUgcGFzc2luZyB0aHJvdWdoIHRoZSBjZW50ZXIgb2YgdGhlIHRyYWNrYmFsbCBvcnRob2dvbmFsIHRvIHRoZSBjYW1lcmFcblx0ICogQHBhcmFtIHtDYW1lcmF9IGNhbWVyYSBUaGUgdmlydHVhbCBjYW1lcmFcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGN1cnNvclggQ3Vyc29yIGhvcml6b250YWwgY29vcmRpbmF0ZSBvbiBzY3JlZW5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IGN1cnNvclkgQ3Vyc29yIHZlcnRpY2FsIGNvb3JkaW5hdGUgb24gc2NyZWVuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIHdoZXJlIHRoZSByZW5kZXJlciBkcmF3cyBpdHMgb3V0cHV0XG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5pdGlhbERpc3RhbmNlIElmIGluaXRpYWwgZGlzdGFuY2UgYmV0d2VlbiBjYW1lcmEgYW5kIGdpem1vcyBzaG91bGQgYmUgdXNlZCBmb3IgY2FsY3VsYXRpb25zIGluc3RlYWQgb2YgY3VycmVudCAoUGVyc3BlY3RpdmUgb25seSlcblx0ICogQHJldHVybnMge1ZlY3RvcjN9IFRoZSB1bnByb2plY3RlZCBwb2ludCBvbiB0aGUgdHJhY2tiYWxsIHBsYW5lXG5cdCAqL1xuXHR1bnByb2plY3RPblRiUGxhbmUgPSAoIGNhbWVyYSwgY3Vyc29yWCwgY3Vyc29yWSwgY2FudmFzLCBpbml0aWFsRGlzdGFuY2UgPSBmYWxzZSApID0+IHtcblxuXHRcdGlmICggY2FtZXJhLnR5cGUgPT0gJ09ydGhvZ3JhcGhpY0NhbWVyYScgKSB7XG5cblx0XHRcdHRoaXMuX3YyXzEuY29weSggdGhpcy5nZXRDdXJzb3JQb3NpdGlvbiggY3Vyc29yWCwgY3Vyc29yWSwgY2FudmFzICkgKTtcblx0XHRcdHRoaXMuX3YzXzEuc2V0KCB0aGlzLl92Ml8xLngsIHRoaXMuX3YyXzEueSwgMCApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5fdjNfMS5jbG9uZSgpO1xuXG5cdFx0fSBlbHNlIGlmICggY2FtZXJhLnR5cGUgPT0gJ1BlcnNwZWN0aXZlQ2FtZXJhJyApIHtcblxuXHRcdFx0dGhpcy5fdjJfMS5jb3B5KCB0aGlzLmdldEN1cnNvck5EQyggY3Vyc29yWCwgY3Vyc29yWSwgY2FudmFzICkgKTtcblxuXHRcdFx0Ly91bnByb2plY3QgY3Vyc29yIG9uIHRoZSBuZWFyIHBsYW5lXG5cdFx0XHR0aGlzLl92M18xLnNldCggdGhpcy5fdjJfMS54LCB0aGlzLl92Ml8xLnksIC0gMSApO1xuXHRcdFx0dGhpcy5fdjNfMS5hcHBseU1hdHJpeDQoIGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4SW52ZXJzZSApO1xuXG5cdFx0XHRjb25zdCByYXlEaXIgPSB0aGlzLl92M18xLmNsb25lKCkubm9ybWFsaXplKCk7IC8vdW5wcm9qZWN0ZWQgcmF5IGRpcmVjdGlvblxuXG5cdFx0XHQvL1x0ICBjYW1lcmFcblx0XHRcdC8vXHRcdHxcXFxuXHRcdFx0Ly9cdFx0fCBcXFxuXHRcdFx0Ly9cdFx0fCAgXFxcblx0XHRcdC8vXHRoXHR8XHRcXFxuXHRcdFx0Ly9cdFx0fCBcdCBcXFxuXHRcdFx0Ly9cdFx0fCBcdCAgXFxcblx0XHRcdC8vXHRfIF8gfCBfIF8gX1xcIF8gXyAgbmVhciBwbGFuZVxuXHRcdFx0Ly9cdFx0XHRsXG5cblx0XHRcdGNvbnN0IGggPSB0aGlzLl92M18xLno7XG5cdFx0XHRjb25zdCBsID0gTWF0aC5zcXJ0KCBNYXRoLnBvdyggdGhpcy5fdjNfMS54LCAyICkgKyBNYXRoLnBvdyggdGhpcy5fdjNfMS55LCAyICkgKTtcblx0XHRcdGxldCBjYW1lcmFHaXptb0Rpc3RhbmNlO1xuXG5cdFx0XHRpZiAoIGluaXRpYWxEaXN0YW5jZSApIHtcblxuXHRcdFx0XHRjYW1lcmFHaXptb0Rpc3RhbmNlID0gdGhpcy5fdjNfMS5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMuX2NhbWVyYU1hdHJpeFN0YXRlMCApLmRpc3RhbmNlVG8oIHRoaXMuX3YzXzIuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLl9naXptb01hdHJpeFN0YXRlMCApICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y2FtZXJhR2l6bW9EaXN0YW5jZSA9IGNhbWVyYS5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvKlxuXHRcdFx0ICogY2FsY3VsYXRlIGludGVyc2VjdGlvbiBwb2ludCBiZXR3ZWVuIHVucHJvamVjdGVkIHJheSBhbmQgdGhlIHBsYW5lXG5cdFx0XHQgKnx5ID0gbXggKyBxXG5cdFx0XHQgKnx5ID0gMFxuXHRcdFx0ICpcblx0XHRcdCAqIHggPSAtcS9tXG5cdFx0XHQqL1xuXHRcdFx0aWYgKCBsID09IDAgKSB7XG5cblx0XHRcdFx0Ly9yYXkgYWxpZ25lZCB3aXRoIGNhbWVyYVxuXHRcdFx0XHRyYXlEaXIuc2V0KCAwLCAwLCAwICk7XG5cdFx0XHRcdHJldHVybiByYXlEaXI7XG5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbSA9IGggLyBsO1xuXHRcdFx0Y29uc3QgcSA9IGNhbWVyYUdpem1vRGlzdGFuY2U7XG5cdFx0XHRjb25zdCB4ID0gLSBxIC8gbTtcblxuXHRcdFx0Y29uc3QgcmF5TGVuZ3RoID0gTWF0aC5zcXJ0KCBNYXRoLnBvdyggcSwgMiApICsgTWF0aC5wb3coIHgsIDIgKSApO1xuXHRcdFx0cmF5RGlyLm11bHRpcGx5U2NhbGFyKCByYXlMZW5ndGggKTtcblx0XHRcdHJheURpci56ID0gMDtcblx0XHRcdHJldHVybiByYXlEaXI7XG5cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlIGNhbWVyYSBhbmQgZ2l6bW9zIHN0YXRlXG5cdCAqL1xuXHR1cGRhdGVNYXRyaXhTdGF0ZSA9ICgpID0+IHtcblxuXHRcdC8vdXBkYXRlIGNhbWVyYSBhbmQgZ2l6bW9zIHN0YXRlXG5cdFx0dGhpcy5fY2FtZXJhTWF0cml4U3RhdGUuY29weSggdGhpcy5jYW1lcmEubWF0cml4ICk7XG5cdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5jb3B5KCB0aGlzLl9naXptb3MubWF0cml4ICk7XG5cblx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHR0aGlzLl9jYW1lcmFQcm9qZWN0aW9uU3RhdGUuY29weSggdGhpcy5jYW1lcmEucHJvamVjdGlvbk1hdHJpeCApO1xuXHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0dGhpcy5fem9vbVN0YXRlID0gdGhpcy5jYW1lcmEuem9vbTtcblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMuY2FtZXJhLmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHRoaXMuX2ZvdlN0YXRlID0gdGhpcy5jYW1lcmEuZm92O1xuXG5cdFx0fVxuXG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgdHJhY2tiYWxsIEZTQVxuXHQgKiBAcGFyYW0ge1NUQVRFfSBuZXdTdGF0ZSBOZXcgc3RhdGUgb2YgdGhlIEZTQVxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IHVwZGF0ZU1hdHJpY2VzIElmIG1hdHJpaWNlcyBzdGF0ZSBzaG91bGQgYmUgdXBkYXRlZFxuXHQgKi9cblx0dXBkYXRlVGJTdGF0ZSA9ICggbmV3U3RhdGUsIHVwZGF0ZU1hdHJpY2VzICkgPT4ge1xuXG5cdFx0dGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcblx0XHRpZiAoIHVwZGF0ZU1hdHJpY2VzICkge1xuXG5cdFx0XHR0aGlzLnVwZGF0ZU1hdHJpeFN0YXRlKCk7XG5cblx0XHR9XG5cblx0fTtcblxuXHR1cGRhdGUgPSAoKSA9PiB7XG5cblx0XHRjb25zdCBFUFMgPSAwLjAwMDAwMTtcblxuXHRcdGlmICggdGhpcy50YXJnZXQuZXF1YWxzKCB0aGlzLl9jdXJyZW50VGFyZ2V0ICkgPT09IGZhbHNlICkge1xuXG5cdFx0XHR0aGlzLl9naXptb3MucG9zaXRpb24uY29weSggdGhpcy50YXJnZXQgKTtcdC8vZm9yIGNvcnJlY3QgcmFkaXVzIGNhbGN1bGF0aW9uXG5cdFx0XHR0aGlzLl90YlJhZGl1cyA9IHRoaXMuY2FsY3VsYXRlVGJSYWRpdXMoIHRoaXMuY2FtZXJhICk7XG5cdFx0XHR0aGlzLm1ha2VHaXptb3MoIHRoaXMudGFyZ2V0LCB0aGlzLl90YlJhZGl1cyApO1xuXHRcdFx0dGhpcy5fY3VycmVudFRhcmdldC5jb3B5KCB0aGlzLnRhcmdldCApO1xuXG5cdFx0fVxuXG5cdFx0Ly9jaGVjayBtaW4vbWF4IHBhcmFtZXRlcnNcblx0XHRpZiAoIHRoaXMuY2FtZXJhLmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHQvL2NoZWNrIHpvb21cblx0XHRcdGlmICggdGhpcy5jYW1lcmEuem9vbSA+IHRoaXMubWF4Wm9vbSB8fCB0aGlzLmNhbWVyYS56b29tIDwgdGhpcy5taW5ab29tICkge1xuXG5cdFx0XHRcdGNvbnN0IG5ld1pvb20gPSBNYXRoVXRpbHMuY2xhbXAoIHRoaXMuY2FtZXJhLnpvb20sIHRoaXMubWluWm9vbSwgdGhpcy5tYXhab29tICk7XG5cdFx0XHRcdHRoaXMuYXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRoaXMuc2NhbGUoIG5ld1pvb20gLyB0aGlzLmNhbWVyYS56b29tLCB0aGlzLl9naXptb3MucG9zaXRpb24sIHRydWUgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2UgaWYgKCB0aGlzLmNhbWVyYS5pc1BlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHQvL2NoZWNrIGRpc3RhbmNlXG5cdFx0XHRjb25zdCBkaXN0YW5jZSA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApO1xuXG5cdFx0XHRpZiAoIGRpc3RhbmNlID4gdGhpcy5tYXhEaXN0YW5jZSArIEVQUyB8fCBkaXN0YW5jZSA8IHRoaXMubWluRGlzdGFuY2UgLSBFUFMgKSB7XG5cblx0XHRcdFx0Y29uc3QgbmV3RGlzdGFuY2UgPSBNYXRoVXRpbHMuY2xhbXAoIGRpc3RhbmNlLCB0aGlzLm1pbkRpc3RhbmNlLCB0aGlzLm1heERpc3RhbmNlICk7XG5cdFx0XHRcdHRoaXMuYXBwbHlUcmFuc2Zvcm1NYXRyaXgoIHRoaXMuc2NhbGUoIG5ld0Rpc3RhbmNlIC8gZGlzdGFuY2UsIHRoaXMuX2dpem1vcy5wb3NpdGlvbiApICk7XG5cdFx0XHRcdHRoaXMudXBkYXRlTWF0cml4U3RhdGUoKTtcblxuXHRcdFx0IH1cblxuXHRcdFx0Ly9jaGVjayBmb3Zcblx0XHRcdGlmICggdGhpcy5jYW1lcmEuZm92IDwgdGhpcy5taW5Gb3YgfHwgdGhpcy5jYW1lcmEuZm92ID4gdGhpcy5tYXhGb3YgKSB7XG5cblx0XHRcdFx0dGhpcy5jYW1lcmEuZm92ID0gTWF0aFV0aWxzLmNsYW1wKCB0aGlzLmNhbWVyYS5mb3YsIHRoaXMubWluRm92LCB0aGlzLm1heEZvdiApO1xuXHRcdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb2xkUmFkaXVzID0gdGhpcy5fdGJSYWRpdXM7XG5cdFx0XHR0aGlzLl90YlJhZGl1cyA9IHRoaXMuY2FsY3VsYXRlVGJSYWRpdXMoIHRoaXMuY2FtZXJhICk7XG5cblx0XHRcdGlmICggb2xkUmFkaXVzIDwgdGhpcy5fdGJSYWRpdXMgLSBFUFMgfHwgb2xkUmFkaXVzID4gdGhpcy5fdGJSYWRpdXMgKyBFUFMgKSB7XG5cblx0XHRcdFx0Y29uc3Qgc2NhbGUgPSAoIHRoaXMuX2dpem1vcy5zY2FsZS54ICsgdGhpcy5fZ2l6bW9zLnNjYWxlLnkgKyB0aGlzLl9naXptb3Muc2NhbGUueiApIC8gMztcblx0XHRcdFx0Y29uc3QgbmV3UmFkaXVzID0gdGhpcy5fdGJSYWRpdXMgLyBzY2FsZTtcblx0XHRcdFx0Y29uc3QgY3VydmUgPSBuZXcgRWxsaXBzZUN1cnZlKCAwLCAwLCBuZXdSYWRpdXMsIG5ld1JhZGl1cyApO1xuXHRcdFx0XHRjb25zdCBwb2ludHMgPSBjdXJ2ZS5nZXRQb2ludHMoIHRoaXMuX2N1cnZlUHRzICk7XG5cdFx0XHRcdGNvbnN0IGN1cnZlR2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKS5zZXRGcm9tUG9pbnRzKCBwb2ludHMgKTtcblxuXHRcdFx0XHRmb3IgKCBjb25zdCBnaXptbyBpbiB0aGlzLl9naXptb3MuY2hpbGRyZW4gKSB7XG5cblx0XHRcdFx0XHR0aGlzLl9naXptb3MuY2hpbGRyZW5bIGdpem1vIF0uZ2VvbWV0cnkgPSBjdXJ2ZUdlb21ldHJ5O1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0dGhpcy5jYW1lcmEubG9va0F0KCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblxuXHR9O1xuXG5cdHNldFN0YXRlRnJvbUpTT04gPSAoIGpzb24gKSA9PiB7XG5cblx0XHRjb25zdCBzdGF0ZSA9IEpTT04ucGFyc2UoIGpzb24gKTtcblxuXHRcdGlmICggc3RhdGUuYXJjYmFsbFN0YXRlICE9IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGhpcy5fY2FtZXJhTWF0cml4U3RhdGUuZnJvbUFycmF5KCBzdGF0ZS5hcmNiYWxsU3RhdGUuY2FtZXJhTWF0cml4LmVsZW1lbnRzICk7XG5cdFx0XHR0aGlzLl9jYW1lcmFNYXRyaXhTdGF0ZS5kZWNvbXBvc2UoIHRoaXMuY2FtZXJhLnBvc2l0aW9uLCB0aGlzLmNhbWVyYS5xdWF0ZXJuaW9uLCB0aGlzLmNhbWVyYS5zY2FsZSApO1xuXG5cdFx0XHR0aGlzLmNhbWVyYS51cC5jb3B5KCBzdGF0ZS5hcmNiYWxsU3RhdGUuY2FtZXJhVXAgKTtcblx0XHRcdHRoaXMuY2FtZXJhLm5lYXIgPSBzdGF0ZS5hcmNiYWxsU3RhdGUuY2FtZXJhTmVhcjtcblx0XHRcdHRoaXMuY2FtZXJhLmZhciA9IHN0YXRlLmFyY2JhbGxTdGF0ZS5jYW1lcmFGYXI7XG5cblx0XHRcdHRoaXMuY2FtZXJhLnpvb20gPSBzdGF0ZS5hcmNiYWxsU3RhdGUuY2FtZXJhWm9vbTtcblxuXHRcdFx0aWYgKCB0aGlzLmNhbWVyYS5pc1BlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdHRoaXMuY2FtZXJhLmZvdiA9IHN0YXRlLmFyY2JhbGxTdGF0ZS5jYW1lcmFGb3Y7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5mcm9tQXJyYXkoIHN0YXRlLmFyY2JhbGxTdGF0ZS5naXptb01hdHJpeC5lbGVtZW50cyApO1xuXHRcdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZS5kZWNvbXBvc2UoIHRoaXMuX2dpem1vcy5wb3NpdGlvbiwgdGhpcy5fZ2l6bW9zLnF1YXRlcm5pb24sIHRoaXMuX2dpem1vcy5zY2FsZSApO1xuXG5cdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVNYXRyaXgoKTtcblx0XHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuXHRcdFx0dGhpcy5fZ2l6bW9zLnVwZGF0ZU1hdHJpeCgpO1xuXG5cdFx0XHR0aGlzLl90YlJhZGl1cyA9IHRoaXMuY2FsY3VsYXRlVGJSYWRpdXMoIHRoaXMuY2FtZXJhICk7XG5cdFx0XHRjb25zdCBnaXptb1RtcCA9IG5ldyBNYXRyaXg0KCkuY29weSggdGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZTAgKTtcblx0XHRcdHRoaXMubWFrZUdpem1vcyggdGhpcy5fZ2l6bW9zLnBvc2l0aW9uLCB0aGlzLl90YlJhZGl1cyApO1xuXHRcdFx0dGhpcy5fZ2l6bW9NYXRyaXhTdGF0ZTAuY29weSggZ2l6bW9UbXAgKTtcblxuXHRcdFx0dGhpcy5jYW1lcmEubG9va0F0KCB0aGlzLl9naXptb3MucG9zaXRpb24gKTtcblx0XHRcdHRoaXMudXBkYXRlVGJTdGF0ZSggU1RBVEUuSURMRSwgZmFsc2UgKTtcblxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdH1cblxuXHR9O1xuXG59XG5cbmV4cG9ydCB7IEFyY2JhbGxDb250cm9scyB9O1xuIiwiaW1wb3J0IHtcblx0QnVmZmVyR2VvbWV0cnksXG5cdEZpbGVMb2FkZXIsXG5cdEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUsXG5cdEdyb3VwLFxuXHRMaW5lQmFzaWNNYXRlcmlhbCxcblx0TGluZVNlZ21lbnRzLFxuXHRMb2FkZXIsXG5cdE1hdGVyaWFsLFxuXHRNZXNoLFxuXHRNZXNoUGhvbmdNYXRlcmlhbCxcblx0UG9pbnRzLFxuXHRQb2ludHNNYXRlcmlhbCxcblx0VmVjdG9yMyxcblx0Q29sb3Jcbn0gZnJvbSAndGhyZWUnO1xuXG4vLyBvIG9iamVjdF9uYW1lIHwgZyBncm91cF9uYW1lXG5jb25zdCBfb2JqZWN0X3BhdHRlcm4gPSAvXltvZ11cXHMqKC4rKT8vO1xuLy8gbXRsbGliIGZpbGVfcmVmZXJlbmNlXG5jb25zdCBfbWF0ZXJpYWxfbGlicmFyeV9wYXR0ZXJuID0gL15tdGxsaWIgLztcbi8vIHVzZW10bCBtYXRlcmlhbF9uYW1lXG5jb25zdCBfbWF0ZXJpYWxfdXNlX3BhdHRlcm4gPSAvXnVzZW10bCAvO1xuLy8gdXNlbWFwIG1hcF9uYW1lXG5jb25zdCBfbWFwX3VzZV9wYXR0ZXJuID0gL151c2VtYXAgLztcblxuY29uc3QgX3ZBID0gbmV3IFZlY3RvcjMoKTtcbmNvbnN0IF92QiA9IG5ldyBWZWN0b3IzKCk7XG5jb25zdCBfdkMgPSBuZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfYWIgPSBuZXcgVmVjdG9yMygpO1xuY29uc3QgX2NiID0gbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2NvbG9yID0gbmV3IENvbG9yKCk7XG5cbmZ1bmN0aW9uIFBhcnNlclN0YXRlKCkge1xuXG5cdGNvbnN0IHN0YXRlID0ge1xuXHRcdG9iamVjdHM6IFtdLFxuXHRcdG9iamVjdDoge30sXG5cblx0XHR2ZXJ0aWNlczogW10sXG5cdFx0bm9ybWFsczogW10sXG5cdFx0Y29sb3JzOiBbXSxcblx0XHR1dnM6IFtdLFxuXG5cdFx0bWF0ZXJpYWxzOiB7fSxcblx0XHRtYXRlcmlhbExpYnJhcmllczogW10sXG5cblx0XHRzdGFydE9iamVjdDogZnVuY3Rpb24gKCBuYW1lLCBmcm9tRGVjbGFyYXRpb24gKSB7XG5cblx0XHRcdC8vIElmIHRoZSBjdXJyZW50IG9iamVjdCAoaW5pdGlhbCBmcm9tIHJlc2V0KSBpcyBub3QgZnJvbSBhIGcvbyBkZWNsYXJhdGlvbiBpbiB0aGUgcGFyc2VkXG5cdFx0XHQvLyBmaWxlLiBXZSBuZWVkIHRvIHVzZSBpdCBmb3IgdGhlIGZpcnN0IHBhcnNlZCBnL28gdG8ga2VlcCB0aGluZ3MgaW4gc3luYy5cblx0XHRcdGlmICggdGhpcy5vYmplY3QgJiYgdGhpcy5vYmplY3QuZnJvbURlY2xhcmF0aW9uID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHR0aGlzLm9iamVjdC5uYW1lID0gbmFtZTtcblx0XHRcdFx0dGhpcy5vYmplY3QuZnJvbURlY2xhcmF0aW9uID0gKCBmcm9tRGVjbGFyYXRpb24gIT09IGZhbHNlICk7XG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwcmV2aW91c01hdGVyaWFsID0gKCB0aGlzLm9iamVjdCAmJiB0eXBlb2YgdGhpcy5vYmplY3QuY3VycmVudE1hdGVyaWFsID09PSAnZnVuY3Rpb24nID8gdGhpcy5vYmplY3QuY3VycmVudE1hdGVyaWFsKCkgOiB1bmRlZmluZWQgKTtcblxuXHRcdFx0aWYgKCB0aGlzLm9iamVjdCAmJiB0eXBlb2YgdGhpcy5vYmplY3QuX2ZpbmFsaXplID09PSAnZnVuY3Rpb24nICkge1xuXG5cdFx0XHRcdHRoaXMub2JqZWN0Ll9maW5hbGl6ZSggdHJ1ZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMub2JqZWN0ID0ge1xuXHRcdFx0XHRuYW1lOiBuYW1lIHx8ICcnLFxuXHRcdFx0XHRmcm9tRGVjbGFyYXRpb246ICggZnJvbURlY2xhcmF0aW9uICE9PSBmYWxzZSApLFxuXG5cdFx0XHRcdGdlb21ldHJ5OiB7XG5cdFx0XHRcdFx0dmVydGljZXM6IFtdLFxuXHRcdFx0XHRcdG5vcm1hbHM6IFtdLFxuXHRcdFx0XHRcdGNvbG9yczogW10sXG5cdFx0XHRcdFx0dXZzOiBbXSxcblx0XHRcdFx0XHRoYXNVVkluZGljZXM6IGZhbHNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1hdGVyaWFsczogW10sXG5cdFx0XHRcdHNtb290aDogdHJ1ZSxcblxuXHRcdFx0XHRzdGFydE1hdGVyaWFsOiBmdW5jdGlvbiAoIG5hbWUsIGxpYnJhcmllcyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IHByZXZpb3VzID0gdGhpcy5fZmluYWxpemUoIGZhbHNlICk7XG5cblx0XHRcdFx0XHQvLyBOZXcgdXNlbXRsIGRlY2xhcmF0aW9uIG92ZXJ3cml0ZXMgYW4gaW5oZXJpdGVkIG1hdGVyaWFsLCBleGNlcHQgaWYgZmFjZXMgd2VyZSBkZWNsYXJlZFxuXHRcdFx0XHRcdC8vIGFmdGVyIHRoZSBtYXRlcmlhbCwgdGhlbiBpdCBtdXN0IGJlIHByZXNlcnZlZCBmb3IgcHJvcGVyIE11bHRpTWF0ZXJpYWwgY29udGludWF0aW9uLlxuXHRcdFx0XHRcdGlmICggcHJldmlvdXMgJiYgKCBwcmV2aW91cy5pbmhlcml0ZWQgfHwgcHJldmlvdXMuZ3JvdXBDb3VudCA8PSAwICkgKSB7XG5cblx0XHRcdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnNwbGljZSggcHJldmlvdXMuaW5kZXgsIDEgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IG1hdGVyaWFsID0ge1xuXHRcdFx0XHRcdFx0aW5kZXg6IHRoaXMubWF0ZXJpYWxzLmxlbmd0aCxcblx0XHRcdFx0XHRcdG5hbWU6IG5hbWUgfHwgJycsXG5cdFx0XHRcdFx0XHRtdGxsaWI6ICggQXJyYXkuaXNBcnJheSggbGlicmFyaWVzICkgJiYgbGlicmFyaWVzLmxlbmd0aCA+IDAgPyBsaWJyYXJpZXNbIGxpYnJhcmllcy5sZW5ndGggLSAxIF0gOiAnJyApLFxuXHRcdFx0XHRcdFx0c21vb3RoOiAoIHByZXZpb3VzICE9PSB1bmRlZmluZWQgPyBwcmV2aW91cy5zbW9vdGggOiB0aGlzLnNtb290aCApLFxuXHRcdFx0XHRcdFx0Z3JvdXBTdGFydDogKCBwcmV2aW91cyAhPT0gdW5kZWZpbmVkID8gcHJldmlvdXMuZ3JvdXBFbmQgOiAwICksXG5cdFx0XHRcdFx0XHRncm91cEVuZDogLSAxLFxuXHRcdFx0XHRcdFx0Z3JvdXBDb3VudDogLSAxLFxuXHRcdFx0XHRcdFx0aW5oZXJpdGVkOiBmYWxzZSxcblxuXHRcdFx0XHRcdFx0Y2xvbmU6IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgY2xvbmVkID0ge1xuXHRcdFx0XHRcdFx0XHRcdGluZGV4OiAoIHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHRoaXMuaW5kZXggKSxcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0bXRsbGliOiB0aGlzLm10bGxpYixcblx0XHRcdFx0XHRcdFx0XHRzbW9vdGg6IHRoaXMuc21vb3RoLFxuXHRcdFx0XHRcdFx0XHRcdGdyb3VwU3RhcnQ6IDAsXG5cdFx0XHRcdFx0XHRcdFx0Z3JvdXBFbmQ6IC0gMSxcblx0XHRcdFx0XHRcdFx0XHRncm91cENvdW50OiAtIDEsXG5cdFx0XHRcdFx0XHRcdFx0aW5oZXJpdGVkOiBmYWxzZVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRjbG9uZWQuY2xvbmUgPSB0aGlzLmNsb25lLmJpbmQoIGNsb25lZCApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY2xvbmVkO1xuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnB1c2goIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbWF0ZXJpYWw7XG5cblx0XHRcdFx0fSxcblxuXHRcdFx0XHRjdXJyZW50TWF0ZXJpYWw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdGlmICggdGhpcy5tYXRlcmlhbHMubGVuZ3RoID4gMCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMubWF0ZXJpYWxzWyB0aGlzLm1hdGVyaWFscy5sZW5ndGggLSAxIF07XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0X2ZpbmFsaXplOiBmdW5jdGlvbiAoIGVuZCApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGxhc3RNdWx0aU1hdGVyaWFsID0gdGhpcy5jdXJyZW50TWF0ZXJpYWwoKTtcblx0XHRcdFx0XHRpZiAoIGxhc3RNdWx0aU1hdGVyaWFsICYmIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kID09PSAtIDEgKSB7XG5cblx0XHRcdFx0XHRcdGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kID0gdGhpcy5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGggLyAzO1xuXHRcdFx0XHRcdFx0bGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBDb3VudCA9IGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kIC0gbGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBTdGFydDtcblx0XHRcdFx0XHRcdGxhc3RNdWx0aU1hdGVyaWFsLmluaGVyaXRlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWdub3JlIG9iamVjdHMgdGFpbCBtYXRlcmlhbHMgaWYgbm8gZmFjZSBkZWNsYXJhdGlvbnMgZm9sbG93ZWQgdGhlbSBiZWZvcmUgYSBuZXcgby9nIHN0YXJ0ZWQuXG5cdFx0XHRcdFx0aWYgKCBlbmQgJiYgdGhpcy5tYXRlcmlhbHMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRcdFx0Zm9yICggbGV0IG1pID0gdGhpcy5tYXRlcmlhbHMubGVuZ3RoIC0gMTsgbWkgPj0gMDsgbWkgLS0gKSB7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0aGlzLm1hdGVyaWFsc1sgbWkgXS5ncm91cENvdW50IDw9IDAgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hdGVyaWFscy5zcGxpY2UoIG1pLCAxICk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBHdWFyYW50ZWUgYXQgbGVhc3Qgb25lIGVtcHR5IG1hdGVyaWFsLCB0aGlzIG1ha2VzIHRoZSBjcmVhdGlvbiBsYXRlciBtb3JlIHN0cmFpZ2h0IGZvcndhcmQuXG5cdFx0XHRcdFx0aWYgKCBlbmQgJiYgdGhpcy5tYXRlcmlhbHMubGVuZ3RoID09PSAwICkge1xuXG5cdFx0XHRcdFx0XHR0aGlzLm1hdGVyaWFscy5wdXNoKCB7XG5cdFx0XHRcdFx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0XHRcdFx0XHRzbW9vdGg6IHRoaXMuc21vb3RoXG5cdFx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gbGFzdE11bHRpTWF0ZXJpYWw7XG5cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gSW5oZXJpdCBwcmV2aW91cyBvYmplY3RzIG1hdGVyaWFsLlxuXHRcdFx0Ly8gU3BlYyB0ZWxscyB1cyB0aGF0IGEgZGVjbGFyZWQgbWF0ZXJpYWwgbXVzdCBiZSBzZXQgdG8gYWxsIG9iamVjdHMgdW50aWwgYSBuZXcgbWF0ZXJpYWwgaXMgZGVjbGFyZWQuXG5cdFx0XHQvLyBJZiBhIHVzZW10bCBkZWNsYXJhdGlvbiBpcyBlbmNvdW50ZXJlZCB3aGlsZSB0aGlzIG5ldyBvYmplY3QgaXMgYmVpbmcgcGFyc2VkLCBpdCB3aWxsXG5cdFx0XHQvLyBvdmVyd3JpdGUgdGhlIGluaGVyaXRlZCBtYXRlcmlhbC4gRXhjZXB0aW9uIGJlaW5nIHRoYXQgdGhlcmUgd2FzIGFscmVhZHkgZmFjZSBkZWNsYXJhdGlvbnNcblx0XHRcdC8vIHRvIHRoZSBpbmhlcml0ZWQgbWF0ZXJpYWwsIHRoZW4gaXQgd2lsbCBiZSBwcmVzZXJ2ZWQgZm9yIHByb3BlciBNdWx0aU1hdGVyaWFsIGNvbnRpbnVhdGlvbi5cblxuXHRcdFx0aWYgKCBwcmV2aW91c01hdGVyaWFsICYmIHByZXZpb3VzTWF0ZXJpYWwubmFtZSAmJiB0eXBlb2YgcHJldmlvdXNNYXRlcmlhbC5jbG9uZSA9PT0gJ2Z1bmN0aW9uJyApIHtcblxuXHRcdFx0XHRjb25zdCBkZWNsYXJlZCA9IHByZXZpb3VzTWF0ZXJpYWwuY2xvbmUoIDAgKTtcblx0XHRcdFx0ZGVjbGFyZWQuaW5oZXJpdGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5vYmplY3QubWF0ZXJpYWxzLnB1c2goIGRlY2xhcmVkICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vYmplY3RzLnB1c2goIHRoaXMub2JqZWN0ICk7XG5cblx0XHR9LFxuXG5cdFx0ZmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0aWYgKCB0aGlzLm9iamVjdCAmJiB0eXBlb2YgdGhpcy5vYmplY3QuX2ZpbmFsaXplID09PSAnZnVuY3Rpb24nICkge1xuXG5cdFx0XHRcdHRoaXMub2JqZWN0Ll9maW5hbGl6ZSggdHJ1ZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0cGFyc2VWZXJ0ZXhJbmRleDogZnVuY3Rpb24gKCB2YWx1ZSwgbGVuICkge1xuXG5cdFx0XHRjb25zdCBpbmRleCA9IHBhcnNlSW50KCB2YWx1ZSwgMTAgKTtcblx0XHRcdHJldHVybiAoIGluZGV4ID49IDAgPyBpbmRleCAtIDEgOiBpbmRleCArIGxlbiAvIDMgKSAqIDM7XG5cblx0XHR9LFxuXG5cdFx0cGFyc2VOb3JtYWxJbmRleDogZnVuY3Rpb24gKCB2YWx1ZSwgbGVuICkge1xuXG5cdFx0XHRjb25zdCBpbmRleCA9IHBhcnNlSW50KCB2YWx1ZSwgMTAgKTtcblx0XHRcdHJldHVybiAoIGluZGV4ID49IDAgPyBpbmRleCAtIDEgOiBpbmRleCArIGxlbiAvIDMgKSAqIDM7XG5cblx0XHR9LFxuXG5cdFx0cGFyc2VVVkluZGV4OiBmdW5jdGlvbiAoIHZhbHVlLCBsZW4gKSB7XG5cblx0XHRcdGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoIHZhbHVlLCAxMCApO1xuXHRcdFx0cmV0dXJuICggaW5kZXggPj0gMCA/IGluZGV4IC0gMSA6IGluZGV4ICsgbGVuIC8gMiApICogMjtcblxuXHRcdH0sXG5cblx0XHRhZGRWZXJ0ZXg6IGZ1bmN0aW9uICggYSwgYiwgYyApIHtcblxuXHRcdFx0Y29uc3Qgc3JjID0gdGhpcy52ZXJ0aWNlcztcblx0XHRcdGNvbnN0IGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnZlcnRpY2VzO1xuXG5cdFx0XHRkc3QucHVzaCggc3JjWyBhICsgMCBdLCBzcmNbIGEgKyAxIF0sIHNyY1sgYSArIDIgXSApO1xuXHRcdFx0ZHN0LnB1c2goIHNyY1sgYiArIDAgXSwgc3JjWyBiICsgMSBdLCBzcmNbIGIgKyAyIF0gKTtcblx0XHRcdGRzdC5wdXNoKCBzcmNbIGMgKyAwIF0sIHNyY1sgYyArIDEgXSwgc3JjWyBjICsgMiBdICk7XG5cblx0XHR9LFxuXG5cdFx0YWRkVmVydGV4UG9pbnQ6IGZ1bmN0aW9uICggYSApIHtcblxuXHRcdFx0Y29uc3Qgc3JjID0gdGhpcy52ZXJ0aWNlcztcblx0XHRcdGNvbnN0IGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnZlcnRpY2VzO1xuXG5cdFx0XHRkc3QucHVzaCggc3JjWyBhICsgMCBdLCBzcmNbIGEgKyAxIF0sIHNyY1sgYSArIDIgXSApO1xuXG5cdFx0fSxcblxuXHRcdGFkZFZlcnRleExpbmU6IGZ1bmN0aW9uICggYSApIHtcblxuXHRcdFx0Y29uc3Qgc3JjID0gdGhpcy52ZXJ0aWNlcztcblx0XHRcdGNvbnN0IGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnZlcnRpY2VzO1xuXG5cdFx0XHRkc3QucHVzaCggc3JjWyBhICsgMCBdLCBzcmNbIGEgKyAxIF0sIHNyY1sgYSArIDIgXSApO1xuXG5cdFx0fSxcblxuXHRcdGFkZE5vcm1hbDogZnVuY3Rpb24gKCBhLCBiLCBjICkge1xuXG5cdFx0XHRjb25zdCBzcmMgPSB0aGlzLm5vcm1hbHM7XG5cdFx0XHRjb25zdCBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS5ub3JtYWxzO1xuXG5cdFx0XHRkc3QucHVzaCggc3JjWyBhICsgMCBdLCBzcmNbIGEgKyAxIF0sIHNyY1sgYSArIDIgXSApO1xuXHRcdFx0ZHN0LnB1c2goIHNyY1sgYiArIDAgXSwgc3JjWyBiICsgMSBdLCBzcmNbIGIgKyAyIF0gKTtcblx0XHRcdGRzdC5wdXNoKCBzcmNbIGMgKyAwIF0sIHNyY1sgYyArIDEgXSwgc3JjWyBjICsgMiBdICk7XG5cblx0XHR9LFxuXG5cdFx0YWRkRmFjZU5vcm1hbDogZnVuY3Rpb24gKCBhLCBiLCBjICkge1xuXG5cdFx0XHRjb25zdCBzcmMgPSB0aGlzLnZlcnRpY2VzO1xuXHRcdFx0Y29uc3QgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkubm9ybWFscztcblxuXHRcdFx0X3ZBLmZyb21BcnJheSggc3JjLCBhICk7XG5cdFx0XHRfdkIuZnJvbUFycmF5KCBzcmMsIGIgKTtcblx0XHRcdF92Qy5mcm9tQXJyYXkoIHNyYywgYyApO1xuXG5cdFx0XHRfY2Iuc3ViVmVjdG9ycyggX3ZDLCBfdkIgKTtcblx0XHRcdF9hYi5zdWJWZWN0b3JzKCBfdkEsIF92QiApO1xuXHRcdFx0X2NiLmNyb3NzKCBfYWIgKTtcblxuXHRcdFx0X2NiLm5vcm1hbGl6ZSgpO1xuXG5cdFx0XHRkc3QucHVzaCggX2NiLngsIF9jYi55LCBfY2IueiApO1xuXHRcdFx0ZHN0LnB1c2goIF9jYi54LCBfY2IueSwgX2NiLnogKTtcblx0XHRcdGRzdC5wdXNoKCBfY2IueCwgX2NiLnksIF9jYi56ICk7XG5cblx0XHR9LFxuXG5cdFx0YWRkQ29sb3I6IGZ1bmN0aW9uICggYSwgYiwgYyApIHtcblxuXHRcdFx0Y29uc3Qgc3JjID0gdGhpcy5jb2xvcnM7XG5cdFx0XHRjb25zdCBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS5jb2xvcnM7XG5cblx0XHRcdGlmICggc3JjWyBhIF0gIT09IHVuZGVmaW5lZCApIGRzdC5wdXNoKCBzcmNbIGEgKyAwIF0sIHNyY1sgYSArIDEgXSwgc3JjWyBhICsgMiBdICk7XG5cdFx0XHRpZiAoIHNyY1sgYiBdICE9PSB1bmRlZmluZWQgKSBkc3QucHVzaCggc3JjWyBiICsgMCBdLCBzcmNbIGIgKyAxIF0sIHNyY1sgYiArIDIgXSApO1xuXHRcdFx0aWYgKCBzcmNbIGMgXSAhPT0gdW5kZWZpbmVkICkgZHN0LnB1c2goIHNyY1sgYyArIDAgXSwgc3JjWyBjICsgMSBdLCBzcmNbIGMgKyAyIF0gKTtcblxuXHRcdH0sXG5cblx0XHRhZGRVVjogZnVuY3Rpb24gKCBhLCBiLCBjICkge1xuXG5cdFx0XHRjb25zdCBzcmMgPSB0aGlzLnV2cztcblx0XHRcdGNvbnN0IGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnV2cztcblxuXHRcdFx0ZHN0LnB1c2goIHNyY1sgYSArIDAgXSwgc3JjWyBhICsgMSBdICk7XG5cdFx0XHRkc3QucHVzaCggc3JjWyBiICsgMCBdLCBzcmNbIGIgKyAxIF0gKTtcblx0XHRcdGRzdC5wdXNoKCBzcmNbIGMgKyAwIF0sIHNyY1sgYyArIDEgXSApO1xuXG5cdFx0fSxcblxuXHRcdGFkZERlZmF1bHRVVjogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS51dnM7XG5cblx0XHRcdGRzdC5wdXNoKCAwLCAwICk7XG5cdFx0XHRkc3QucHVzaCggMCwgMCApO1xuXHRcdFx0ZHN0LnB1c2goIDAsIDAgKTtcblxuXHRcdH0sXG5cblx0XHRhZGRVVkxpbmU6IGZ1bmN0aW9uICggYSApIHtcblxuXHRcdFx0Y29uc3Qgc3JjID0gdGhpcy51dnM7XG5cdFx0XHRjb25zdCBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS51dnM7XG5cblx0XHRcdGRzdC5wdXNoKCBzcmNbIGEgKyAwIF0sIHNyY1sgYSArIDEgXSApO1xuXG5cdFx0fSxcblxuXHRcdGFkZEZhY2U6IGZ1bmN0aW9uICggYSwgYiwgYywgdWEsIHViLCB1YywgbmEsIG5iLCBuYyApIHtcblxuXHRcdFx0Y29uc3QgdkxlbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuXG5cdFx0XHRsZXQgaWEgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoIGEsIHZMZW4gKTtcblx0XHRcdGxldCBpYiA9IHRoaXMucGFyc2VWZXJ0ZXhJbmRleCggYiwgdkxlbiApO1xuXHRcdFx0bGV0IGljID0gdGhpcy5wYXJzZVZlcnRleEluZGV4KCBjLCB2TGVuICk7XG5cblx0XHRcdHRoaXMuYWRkVmVydGV4KCBpYSwgaWIsIGljICk7XG5cdFx0XHR0aGlzLmFkZENvbG9yKCBpYSwgaWIsIGljICk7XG5cblx0XHRcdC8vIG5vcm1hbHNcblxuXHRcdFx0aWYgKCBuYSAhPT0gdW5kZWZpbmVkICYmIG5hICE9PSAnJyApIHtcblxuXHRcdFx0XHRjb25zdCBuTGVuID0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcblxuXHRcdFx0XHRpYSA9IHRoaXMucGFyc2VOb3JtYWxJbmRleCggbmEsIG5MZW4gKTtcblx0XHRcdFx0aWIgPSB0aGlzLnBhcnNlTm9ybWFsSW5kZXgoIG5iLCBuTGVuICk7XG5cdFx0XHRcdGljID0gdGhpcy5wYXJzZU5vcm1hbEluZGV4KCBuYywgbkxlbiApO1xuXG5cdFx0XHRcdHRoaXMuYWRkTm9ybWFsKCBpYSwgaWIsIGljICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0dGhpcy5hZGRGYWNlTm9ybWFsKCBpYSwgaWIsIGljICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gdXZzXG5cblx0XHRcdGlmICggdWEgIT09IHVuZGVmaW5lZCAmJiB1YSAhPT0gJycgKSB7XG5cblx0XHRcdFx0Y29uc3QgdXZMZW4gPSB0aGlzLnV2cy5sZW5ndGg7XG5cblx0XHRcdFx0aWEgPSB0aGlzLnBhcnNlVVZJbmRleCggdWEsIHV2TGVuICk7XG5cdFx0XHRcdGliID0gdGhpcy5wYXJzZVVWSW5kZXgoIHViLCB1dkxlbiApO1xuXHRcdFx0XHRpYyA9IHRoaXMucGFyc2VVVkluZGV4KCB1YywgdXZMZW4gKTtcblxuXHRcdFx0XHR0aGlzLmFkZFVWKCBpYSwgaWIsIGljICk7XG5cblx0XHRcdFx0dGhpcy5vYmplY3QuZ2VvbWV0cnkuaGFzVVZJbmRpY2VzID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBhZGQgcGxhY2Vob2xkZXIgdmFsdWVzIChmb3IgaW5jb25zaXN0ZW50IGZhY2UgZGVmaW5pdGlvbnMpXG5cblx0XHRcdFx0dGhpcy5hZGREZWZhdWx0VVYoKTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdGFkZFBvaW50R2VvbWV0cnk6IGZ1bmN0aW9uICggdmVydGljZXMgKSB7XG5cblx0XHRcdHRoaXMub2JqZWN0Lmdlb21ldHJ5LnR5cGUgPSAnUG9pbnRzJztcblxuXHRcdFx0Y29uc3QgdkxlbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuXG5cdFx0XHRmb3IgKCBsZXQgdmkgPSAwLCBsID0gdmVydGljZXMubGVuZ3RoOyB2aSA8IGw7IHZpICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5wYXJzZVZlcnRleEluZGV4KCB2ZXJ0aWNlc1sgdmkgXSwgdkxlbiApO1xuXG5cdFx0XHRcdHRoaXMuYWRkVmVydGV4UG9pbnQoIGluZGV4ICk7XG5cdFx0XHRcdHRoaXMuYWRkQ29sb3IoIGluZGV4ICk7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRhZGRMaW5lR2VvbWV0cnk6IGZ1bmN0aW9uICggdmVydGljZXMsIHV2cyApIHtcblxuXHRcdFx0dGhpcy5vYmplY3QuZ2VvbWV0cnkudHlwZSA9ICdMaW5lJztcblxuXHRcdFx0Y29uc3QgdkxlbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuXHRcdFx0Y29uc3QgdXZMZW4gPSB0aGlzLnV2cy5sZW5ndGg7XG5cblx0XHRcdGZvciAoIGxldCB2aSA9IDAsIGwgPSB2ZXJ0aWNlcy5sZW5ndGg7IHZpIDwgbDsgdmkgKysgKSB7XG5cblx0XHRcdFx0dGhpcy5hZGRWZXJ0ZXhMaW5lKCB0aGlzLnBhcnNlVmVydGV4SW5kZXgoIHZlcnRpY2VzWyB2aSBdLCB2TGVuICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBsZXQgdXZpID0gMCwgbCA9IHV2cy5sZW5ndGg7IHV2aSA8IGw7IHV2aSArKyApIHtcblxuXHRcdFx0XHR0aGlzLmFkZFVWTGluZSggdGhpcy5wYXJzZVVWSW5kZXgoIHV2c1sgdXZpIF0sIHV2TGVuICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH07XG5cblx0c3RhdGUuc3RhcnRPYmplY3QoICcnLCBmYWxzZSApO1xuXG5cdHJldHVybiBzdGF0ZTtcblxufVxuXG4vL1xuXG5jbGFzcyBPQkpMb2FkZXIgZXh0ZW5kcyBMb2FkZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBtYW5hZ2VyICkge1xuXG5cdFx0c3VwZXIoIG1hbmFnZXIgKTtcblxuXHRcdHRoaXMubWF0ZXJpYWxzID0gbnVsbDtcblxuXHR9XG5cblx0bG9hZCggdXJsLCBvbkxvYWQsIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKSB7XG5cblx0XHRjb25zdCBzY29wZSA9IHRoaXM7XG5cblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgRmlsZUxvYWRlciggdGhpcy5tYW5hZ2VyICk7XG5cdFx0bG9hZGVyLnNldFBhdGgoIHRoaXMucGF0aCApO1xuXHRcdGxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcblx0XHRsb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKCB0aGlzLndpdGhDcmVkZW50aWFscyApO1xuXHRcdGxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggdGV4dCApIHtcblxuXHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRvbkxvYWQoIHNjb3BlLnBhcnNlKCB0ZXh0ICkgKTtcblxuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0aWYgKCBvbkVycm9yICkge1xuXG5cdFx0XHRcdFx0b25FcnJvciggZSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVycm9yKCB1cmwgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSwgb25Qcm9ncmVzcywgb25FcnJvciApO1xuXG5cdH1cblxuXHRzZXRNYXRlcmlhbHMoIG1hdGVyaWFscyApIHtcblxuXHRcdHRoaXMubWF0ZXJpYWxzID0gbWF0ZXJpYWxzO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHBhcnNlKCB0ZXh0ICkge1xuXG5cdFx0Y29uc3Qgc3RhdGUgPSBuZXcgUGFyc2VyU3RhdGUoKTtcblxuXHRcdGlmICggdGV4dC5pbmRleE9mKCAnXFxyXFxuJyApICE9PSAtIDEgKSB7XG5cblx0XHRcdC8vIFRoaXMgaXMgZmFzdGVyIHRoYW4gU3RyaW5nLnNwbGl0IHdpdGggcmVnZXggdGhhdCBzcGxpdHMgb24gYm90aFxuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSggL1xcclxcbi9nLCAnXFxuJyApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0ZXh0LmluZGV4T2YoICdcXFxcXFxuJyApICE9PSAtIDEgKSB7XG5cblx0XHRcdC8vIGpvaW4gbGluZXMgc2VwYXJhdGVkIGJ5IGEgbGluZSBjb250aW51YXRpb24gY2hhcmFjdGVyIChcXClcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoIC9cXFxcXFxuL2csICcnICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoICdcXG4nICk7XG5cdFx0bGV0IGxpbmUgPSAnJywgbGluZUZpcnN0Q2hhciA9ICcnO1xuXHRcdGxldCBsaW5lTGVuZ3RoID0gMDtcblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHQvLyBGYXN0ZXIgdG8ganVzdCB0cmltIGxlZnQgc2lkZSBvZiB0aGUgbGluZS4gVXNlIGlmIGF2YWlsYWJsZS5cblx0XHRjb25zdCB0cmltTGVmdCA9ICggdHlwZW9mICcnLnRyaW1MZWZ0ID09PSAnZnVuY3Rpb24nICk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpICsrICkge1xuXG5cdFx0XHRsaW5lID0gbGluZXNbIGkgXTtcblxuXHRcdFx0bGluZSA9IHRyaW1MZWZ0ID8gbGluZS50cmltTGVmdCgpIDogbGluZS50cmltKCk7XG5cblx0XHRcdGxpbmVMZW5ndGggPSBsaW5lLmxlbmd0aDtcblxuXHRcdFx0aWYgKCBsaW5lTGVuZ3RoID09PSAwICkgY29udGludWU7XG5cblx0XHRcdGxpbmVGaXJzdENoYXIgPSBsaW5lLmNoYXJBdCggMCApO1xuXG5cdFx0XHQvLyBAdG9kbyBpbnZva2UgcGFzc2VkIGluIGhhbmRsZXIgaWYgYW55XG5cdFx0XHRpZiAoIGxpbmVGaXJzdENoYXIgPT09ICcjJyApIGNvbnRpbnVlO1xuXG5cdFx0XHRpZiAoIGxpbmVGaXJzdENoYXIgPT09ICd2JyApIHtcblxuXHRcdFx0XHRjb25zdCBkYXRhID0gbGluZS5zcGxpdCggL1xccysvICk7XG5cblx0XHRcdFx0c3dpdGNoICggZGF0YVsgMCBdICkge1xuXG5cdFx0XHRcdFx0Y2FzZSAndic6XG5cdFx0XHRcdFx0XHRzdGF0ZS52ZXJ0aWNlcy5wdXNoKFxuXHRcdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCBkYXRhWyAxIF0gKSxcblx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggZGF0YVsgMiBdICksXG5cdFx0XHRcdFx0XHRcdHBhcnNlRmxvYXQoIGRhdGFbIDMgXSApXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKCBkYXRhLmxlbmd0aCA+PSA3ICkge1xuXG5cdFx0XHRcdFx0XHRcdF9jb2xvci5zZXRSR0IoXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggZGF0YVsgNCBdICksXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggZGF0YVsgNSBdICksXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggZGF0YVsgNiBdIClcblx0XHRcdFx0XHRcdFx0KS5jb252ZXJ0U1JHQlRvTGluZWFyKCk7XG5cblx0XHRcdFx0XHRcdFx0c3RhdGUuY29sb3JzLnB1c2goIF9jb2xvci5yLCBfY29sb3IuZywgX2NvbG9yLmIgKTtcblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBpZiBubyBjb2xvcnMgYXJlIGRlZmluZWQsIGFkZCBwbGFjZWhvbGRlcnMgc28gY29sb3IgYW5kIHZlcnRleCBpbmRpY2VzIG1hdGNoXG5cblx0XHRcdFx0XHRcdFx0c3RhdGUuY29sb3JzLnB1c2goIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd2bic6XG5cdFx0XHRcdFx0XHRzdGF0ZS5ub3JtYWxzLnB1c2goXG5cdFx0XHRcdFx0XHRcdHBhcnNlRmxvYXQoIGRhdGFbIDEgXSApLFxuXHRcdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCBkYXRhWyAyIF0gKSxcblx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggZGF0YVsgMyBdIClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd2dCc6XG5cdFx0XHRcdFx0XHRzdGF0ZS51dnMucHVzaChcblx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggZGF0YVsgMSBdICksXG5cdFx0XHRcdFx0XHRcdHBhcnNlRmxvYXQoIGRhdGFbIDIgXSApXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKCBsaW5lRmlyc3RDaGFyID09PSAnZicgKSB7XG5cblx0XHRcdFx0Y29uc3QgbGluZURhdGEgPSBsaW5lLnNsaWNlKCAxICkudHJpbSgpO1xuXHRcdFx0XHRjb25zdCB2ZXJ0ZXhEYXRhID0gbGluZURhdGEuc3BsaXQoIC9cXHMrLyApO1xuXHRcdFx0XHRjb25zdCBmYWNlVmVydGljZXMgPSBbXTtcblxuXHRcdFx0XHQvLyBQYXJzZSB0aGUgZmFjZSB2ZXJ0ZXggZGF0YSBpbnRvIGFuIGVhc3kgdG8gd29yayB3aXRoIGZvcm1hdFxuXG5cdFx0XHRcdGZvciAoIGxldCBqID0gMCwgamwgPSB2ZXJ0ZXhEYXRhLmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgdmVydGV4ID0gdmVydGV4RGF0YVsgaiBdO1xuXG5cdFx0XHRcdFx0aWYgKCB2ZXJ0ZXgubGVuZ3RoID4gMCApIHtcblxuXHRcdFx0XHRcdFx0Y29uc3QgdmVydGV4UGFydHMgPSB2ZXJ0ZXguc3BsaXQoICcvJyApO1xuXHRcdFx0XHRcdFx0ZmFjZVZlcnRpY2VzLnB1c2goIHZlcnRleFBhcnRzICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERyYXcgYW4gZWRnZSBiZXR3ZWVuIHRoZSBmaXJzdCB2ZXJ0ZXggYW5kIGFsbCBzdWJzZXF1ZW50IHZlcnRpY2VzIHRvIGZvcm0gYW4gbi1nb25cblxuXHRcdFx0XHRjb25zdCB2MSA9IGZhY2VWZXJ0aWNlc1sgMCBdO1xuXG5cdFx0XHRcdGZvciAoIGxldCBqID0gMSwgamwgPSBmYWNlVmVydGljZXMubGVuZ3RoIC0gMTsgaiA8IGpsOyBqICsrICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgdjIgPSBmYWNlVmVydGljZXNbIGogXTtcblx0XHRcdFx0XHRjb25zdCB2MyA9IGZhY2VWZXJ0aWNlc1sgaiArIDEgXTtcblxuXHRcdFx0XHRcdHN0YXRlLmFkZEZhY2UoXG5cdFx0XHRcdFx0XHR2MVsgMCBdLCB2MlsgMCBdLCB2M1sgMCBdLFxuXHRcdFx0XHRcdFx0djFbIDEgXSwgdjJbIDEgXSwgdjNbIDEgXSxcblx0XHRcdFx0XHRcdHYxWyAyIF0sIHYyWyAyIF0sIHYzWyAyIF1cblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIGlmICggbGluZUZpcnN0Q2hhciA9PT0gJ2wnICkge1xuXG5cdFx0XHRcdGNvbnN0IGxpbmVQYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKCAxICkudHJpbSgpLnNwbGl0KCAnICcgKTtcblx0XHRcdFx0bGV0IGxpbmVWZXJ0aWNlcyA9IFtdO1xuXHRcdFx0XHRjb25zdCBsaW5lVVZzID0gW107XG5cblx0XHRcdFx0aWYgKCBsaW5lLmluZGV4T2YoICcvJyApID09PSAtIDEgKSB7XG5cblx0XHRcdFx0XHRsaW5lVmVydGljZXMgPSBsaW5lUGFydHM7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBsaSA9IDAsIGxsZW4gPSBsaW5lUGFydHMubGVuZ3RoOyBsaSA8IGxsZW47IGxpICsrICkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBwYXJ0cyA9IGxpbmVQYXJ0c1sgbGkgXS5zcGxpdCggJy8nICk7XG5cblx0XHRcdFx0XHRcdGlmICggcGFydHNbIDAgXSAhPT0gJycgKSBsaW5lVmVydGljZXMucHVzaCggcGFydHNbIDAgXSApO1xuXHRcdFx0XHRcdFx0aWYgKCBwYXJ0c1sgMSBdICE9PSAnJyApIGxpbmVVVnMucHVzaCggcGFydHNbIDEgXSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdGF0ZS5hZGRMaW5lR2VvbWV0cnkoIGxpbmVWZXJ0aWNlcywgbGluZVVWcyApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBsaW5lRmlyc3RDaGFyID09PSAncCcgKSB7XG5cblx0XHRcdFx0Y29uc3QgbGluZURhdGEgPSBsaW5lLnNsaWNlKCAxICkudHJpbSgpO1xuXHRcdFx0XHRjb25zdCBwb2ludERhdGEgPSBsaW5lRGF0YS5zcGxpdCggJyAnICk7XG5cblx0XHRcdFx0c3RhdGUuYWRkUG9pbnRHZW9tZXRyeSggcG9pbnREYXRhICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoICggcmVzdWx0ID0gX29iamVjdF9wYXR0ZXJuLmV4ZWMoIGxpbmUgKSApICE9PSBudWxsICkge1xuXG5cdFx0XHRcdC8vIG8gb2JqZWN0X25hbWVcblx0XHRcdFx0Ly8gb3Jcblx0XHRcdFx0Ly8gZyBncm91cF9uYW1lXG5cblx0XHRcdFx0Ly8gV09SS0FST1VORDogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Mjg2OVxuXHRcdFx0XHQvLyBsZXQgbmFtZSA9IHJlc3VsdFsgMCBdLnNsaWNlKCAxICkudHJpbSgpO1xuXHRcdFx0XHRjb25zdCBuYW1lID0gKCAnICcgKyByZXN1bHRbIDAgXS5zbGljZSggMSApLnRyaW0oKSApLnNsaWNlKCAxICk7XG5cblx0XHRcdFx0c3RhdGUuc3RhcnRPYmplY3QoIG5hbWUgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggX21hdGVyaWFsX3VzZV9wYXR0ZXJuLnRlc3QoIGxpbmUgKSApIHtcblxuXHRcdFx0XHQvLyBtYXRlcmlhbFxuXG5cdFx0XHRcdHN0YXRlLm9iamVjdC5zdGFydE1hdGVyaWFsKCBsaW5lLnN1YnN0cmluZyggNyApLnRyaW0oKSwgc3RhdGUubWF0ZXJpYWxMaWJyYXJpZXMgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggX21hdGVyaWFsX2xpYnJhcnlfcGF0dGVybi50ZXN0KCBsaW5lICkgKSB7XG5cblx0XHRcdFx0Ly8gbXRsIGZpbGVcblxuXHRcdFx0XHRzdGF0ZS5tYXRlcmlhbExpYnJhcmllcy5wdXNoKCBsaW5lLnN1YnN0cmluZyggNyApLnRyaW0oKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBfbWFwX3VzZV9wYXR0ZXJuLnRlc3QoIGxpbmUgKSApIHtcblxuXHRcdFx0XHQvLyB0aGUgbGluZSBpcyBwYXJzZWQgYnV0IGlnbm9yZWQgc2luY2UgdGhlIGxvYWRlciBhc3N1bWVzIHRleHR1cmVzIGFyZSBkZWZpbmVkIE1UTCBmaWxlc1xuXHRcdFx0XHQvLyAoYWNjb3JkaW5nIHRvIGh0dHBzOi8vd3d3Lm9raW5vLmNvbS9jb252L2ltcF93YXZlLmh0bSwgJ3VzZW1hcCcgaXMgdGhlIG9sZC1zdHlsZSBXYXZlZnJvbnQgdGV4dHVyZSByZWZlcmVuY2UgbWV0aG9kKVxuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9CSkxvYWRlcjogUmVuZGVyaW5nIGlkZW50aWZpZXIgXCJ1c2VtYXBcIiBub3Qgc3VwcG9ydGVkLiBUZXh0dXJlcyBtdXN0IGJlIGRlZmluZWQgaW4gTVRMIGZpbGVzLicgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggbGluZUZpcnN0Q2hhciA9PT0gJ3MnICkge1xuXG5cdFx0XHRcdHJlc3VsdCA9IGxpbmUuc3BsaXQoICcgJyApO1xuXG5cdFx0XHRcdC8vIHNtb290aCBzaGFkaW5nXG5cblx0XHRcdFx0Ly8gQHRvZG8gSGFuZGxlIGZpbGVzIHRoYXQgaGF2ZSB2YXJ5aW5nIHNtb290aCB2YWx1ZXMgZm9yIGEgc2V0IG9mIGZhY2VzIGluc2lkZSBvbmUgZ2VvbWV0cnksXG5cdFx0XHRcdC8vIGJ1dCBkb2VzIG5vdCBkZWZpbmUgYSB1c2VtdGwgZm9yIGVhY2ggZmFjZSBzZXQuXG5cdFx0XHRcdC8vIFRoaXMgc2hvdWxkIGJlIGRldGVjdGVkIGFuZCBhIGR1bW15IG1hdGVyaWFsIGNyZWF0ZWQgKGxhdGVyIE11bHRpTWF0ZXJpYWwgYW5kIGdlb21ldHJ5IGdyb3VwcykuXG5cdFx0XHRcdC8vIFRoaXMgcmVxdWlyZXMgc29tZSBjYXJlIHRvIG5vdCBjcmVhdGUgZXh0cmEgbWF0ZXJpYWwgb24gZWFjaCBzbW9vdGggdmFsdWUgZm9yIFwibm9ybWFsXCIgb2JqIGZpbGVzLlxuXHRcdFx0XHQvLyB3aGVyZSBleHBsaWNpdCB1c2VtdGwgZGVmaW5lcyBnZW9tZXRyeSBncm91cHMuXG5cdFx0XHRcdC8vIEV4YW1wbGUgYXNzZXQ6IGV4YW1wbGVzL21vZGVscy9vYmovY2VyYmVydXMvQ2VyYmVydXMub2JqXG5cblx0XHRcdFx0Lypcblx0XHRcdFx0XHQgKiBodHRwOi8vcGF1bGJvdXJrZS5uZXQvZGF0YWZvcm1hdHMvb2JqL1xuXHRcdFx0XHRcdCAqXG5cdFx0XHRcdFx0ICogRnJvbSBjaGFwdGVyIFwiR3JvdXBpbmdcIiBTeW50YXggZXhwbGFuYXRpb24gXCJzIGdyb3VwX251bWJlclwiOlxuXHRcdFx0XHRcdCAqIFwiZ3JvdXBfbnVtYmVyIGlzIHRoZSBzbW9vdGhpbmcgZ3JvdXAgbnVtYmVyLiBUbyB0dXJuIG9mZiBzbW9vdGhpbmcgZ3JvdXBzLCB1c2UgYSB2YWx1ZSBvZiAwIG9yIG9mZi5cblx0XHRcdFx0XHQgKiBQb2x5Z29uYWwgZWxlbWVudHMgdXNlIGdyb3VwIG51bWJlcnMgdG8gcHV0IGVsZW1lbnRzIGluIGRpZmZlcmVudCBzbW9vdGhpbmcgZ3JvdXBzLiBGb3IgZnJlZS1mb3JtXG5cdFx0XHRcdFx0ICogc3VyZmFjZXMsIHNtb290aGluZyBncm91cHMgYXJlIGVpdGhlciB0dXJuZWQgb24gb3Igb2ZmOyB0aGVyZSBpcyBubyBkaWZmZXJlbmNlIGJldHdlZW4gdmFsdWVzIGdyZWF0ZXJcblx0XHRcdFx0XHQgKiB0aGFuIDAuXCJcblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0aWYgKCByZXN1bHQubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gcmVzdWx0WyAxIF0udHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0c3RhdGUub2JqZWN0LnNtb290aCA9ICggdmFsdWUgIT09ICcwJyAmJiB2YWx1ZSAhPT0gJ29mZicgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gWkJydXNoIGNhbiBwcm9kdWNlIFwic1wiIGxpbmVzICMxMTcwN1xuXHRcdFx0XHRcdHN0YXRlLm9iamVjdC5zbW9vdGggPSB0cnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBtYXRlcmlhbCA9IHN0YXRlLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwoKTtcblx0XHRcdFx0aWYgKCBtYXRlcmlhbCApIG1hdGVyaWFsLnNtb290aCA9IHN0YXRlLm9iamVjdC5zbW9vdGg7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIG51bGwgdGVybWluYXRlZCBmaWxlcyB3aXRob3V0IGV4Y2VwdGlvblxuXHRcdFx0XHRpZiAoIGxpbmUgPT09ICdcXDAnICkgY29udGludWU7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT0JKTG9hZGVyOiBVbmV4cGVjdGVkIGxpbmU6IFwiJyArIGxpbmUgKyAnXCInICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHN0YXRlLmZpbmFsaXplKCk7XG5cblx0XHRjb25zdCBjb250YWluZXIgPSBuZXcgR3JvdXAoKTtcblx0XHRjb250YWluZXIubWF0ZXJpYWxMaWJyYXJpZXMgPSBbXS5jb25jYXQoIHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzICk7XG5cblx0XHRjb25zdCBoYXNQcmltaXRpdmVzID0gISAoIHN0YXRlLm9iamVjdHMubGVuZ3RoID09PSAxICYmIHN0YXRlLm9iamVjdHNbIDAgXS5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGggPT09IDAgKTtcblxuXHRcdGlmICggaGFzUHJpbWl0aXZlcyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBsID0gc3RhdGUub2JqZWN0cy5sZW5ndGg7IGkgPCBsOyBpICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IG9iamVjdCA9IHN0YXRlLm9iamVjdHNbIGkgXTtcblx0XHRcdFx0Y29uc3QgZ2VvbWV0cnkgPSBvYmplY3QuZ2VvbWV0cnk7XG5cdFx0XHRcdGNvbnN0IG1hdGVyaWFscyA9IG9iamVjdC5tYXRlcmlhbHM7XG5cdFx0XHRcdGNvbnN0IGlzTGluZSA9ICggZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmUnICk7XG5cdFx0XHRcdGNvbnN0IGlzUG9pbnRzID0gKCBnZW9tZXRyeS50eXBlID09PSAnUG9pbnRzJyApO1xuXHRcdFx0XHRsZXQgaGFzVmVydGV4Q29sb3JzID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gU2tpcCBvL2cgbGluZSBkZWNsYXJhdGlvbnMgdGhhdCBkaWQgbm90IGZvbGxvdyB3aXRoIGFueSBmYWNlc1xuXHRcdFx0XHRpZiAoIGdlb21ldHJ5LnZlcnRpY2VzLmxlbmd0aCA9PT0gMCApIGNvbnRpbnVlO1xuXG5cdFx0XHRcdGNvbnN0IGJ1ZmZlcmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XG5cblx0XHRcdFx0YnVmZmVyZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCAncG9zaXRpb24nLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSggZ2VvbWV0cnkudmVydGljZXMsIDMgKSApO1xuXG5cdFx0XHRcdGlmICggZ2VvbWV0cnkubm9ybWFscy5sZW5ndGggPiAwICkge1xuXG5cdFx0XHRcdFx0YnVmZmVyZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCAnbm9ybWFsJywgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoIGdlb21ldHJ5Lm5vcm1hbHMsIDMgKSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIGdlb21ldHJ5LmNvbG9ycy5sZW5ndGggPiAwICkge1xuXG5cdFx0XHRcdFx0aGFzVmVydGV4Q29sb3JzID0gdHJ1ZTtcblx0XHRcdFx0XHRidWZmZXJnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICdjb2xvcicsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKCBnZW9tZXRyeS5jb2xvcnMsIDMgKSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIGdlb21ldHJ5Lmhhc1VWSW5kaWNlcyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdGJ1ZmZlcmdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ3V2JywgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoIGdlb21ldHJ5LnV2cywgMiApICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENyZWF0ZSBtYXRlcmlhbHNcblxuXHRcdFx0XHRjb25zdCBjcmVhdGVkTWF0ZXJpYWxzID0gW107XG5cblx0XHRcdFx0Zm9yICggbGV0IG1pID0gMCwgbWlMZW4gPSBtYXRlcmlhbHMubGVuZ3RoOyBtaSA8IG1pTGVuOyBtaSArKyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IHNvdXJjZU1hdGVyaWFsID0gbWF0ZXJpYWxzWyBtaSBdO1xuXHRcdFx0XHRcdGNvbnN0IG1hdGVyaWFsSGFzaCA9IHNvdXJjZU1hdGVyaWFsLm5hbWUgKyAnXycgKyBzb3VyY2VNYXRlcmlhbC5zbW9vdGggKyAnXycgKyBoYXNWZXJ0ZXhDb2xvcnM7XG5cdFx0XHRcdFx0bGV0IG1hdGVyaWFsID0gc3RhdGUubWF0ZXJpYWxzWyBtYXRlcmlhbEhhc2ggXTtcblxuXHRcdFx0XHRcdGlmICggdGhpcy5tYXRlcmlhbHMgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHRcdG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHMuY3JlYXRlKCBzb3VyY2VNYXRlcmlhbC5uYW1lICk7XG5cblx0XHRcdFx0XHRcdC8vIG10bCBldGMuIGxvYWRlcnMgcHJvYmFibHkgY2FuJ3QgY3JlYXRlIGxpbmUgbWF0ZXJpYWxzIGNvcnJlY3RseSwgY29weSBwcm9wZXJ0aWVzIHRvIGEgbGluZSBtYXRlcmlhbC5cblx0XHRcdFx0XHRcdGlmICggaXNMaW5lICYmIG1hdGVyaWFsICYmICEgKCBtYXRlcmlhbCBpbnN0YW5jZW9mIExpbmVCYXNpY01hdGVyaWFsICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbWF0ZXJpYWxMaW5lID0gbmV3IExpbmVCYXNpY01hdGVyaWFsKCk7XG5cdFx0XHRcdFx0XHRcdE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5LmNhbGwoIG1hdGVyaWFsTGluZSwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0XHRcdFx0bWF0ZXJpYWxMaW5lLmNvbG9yLmNvcHkoIG1hdGVyaWFsLmNvbG9yICk7XG5cdFx0XHRcdFx0XHRcdG1hdGVyaWFsID0gbWF0ZXJpYWxMaW5lO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBpc1BvaW50cyAmJiBtYXRlcmlhbCAmJiAhICggbWF0ZXJpYWwgaW5zdGFuY2VvZiBQb2ludHNNYXRlcmlhbCApICkge1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1hdGVyaWFsUG9pbnRzID0gbmV3IFBvaW50c01hdGVyaWFsKCB7IHNpemU6IDEwLCBzaXplQXR0ZW51YXRpb246IGZhbHNlIH0gKTtcblx0XHRcdFx0XHRcdFx0TWF0ZXJpYWwucHJvdG90eXBlLmNvcHkuY2FsbCggbWF0ZXJpYWxQb2ludHMsIG1hdGVyaWFsICk7XG5cdFx0XHRcdFx0XHRcdG1hdGVyaWFsUG9pbnRzLmNvbG9yLmNvcHkoIG1hdGVyaWFsLmNvbG9yICk7XG5cdFx0XHRcdFx0XHRcdG1hdGVyaWFsUG9pbnRzLm1hcCA9IG1hdGVyaWFsLm1hcDtcblx0XHRcdFx0XHRcdFx0bWF0ZXJpYWwgPSBtYXRlcmlhbFBvaW50cztcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCBtYXRlcmlhbCA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIGlzTGluZSApIHtcblxuXHRcdFx0XHRcdFx0XHRtYXRlcmlhbCA9IG5ldyBMaW5lQmFzaWNNYXRlcmlhbCgpO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBpc1BvaW50cyApIHtcblxuXHRcdFx0XHRcdFx0XHRtYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCggeyBzaXplOiAxLCBzaXplQXR0ZW51YXRpb246IGZhbHNlIH0gKTtcblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRtYXRlcmlhbCA9IG5ldyBNZXNoUGhvbmdNYXRlcmlhbCgpO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdG1hdGVyaWFsLm5hbWUgPSBzb3VyY2VNYXRlcmlhbC5uYW1lO1xuXHRcdFx0XHRcdFx0bWF0ZXJpYWwuZmxhdFNoYWRpbmcgPSBzb3VyY2VNYXRlcmlhbC5zbW9vdGggPyBmYWxzZSA6IHRydWU7XG5cdFx0XHRcdFx0XHRtYXRlcmlhbC52ZXJ0ZXhDb2xvcnMgPSBoYXNWZXJ0ZXhDb2xvcnM7XG5cblx0XHRcdFx0XHRcdHN0YXRlLm1hdGVyaWFsc1sgbWF0ZXJpYWxIYXNoIF0gPSBtYXRlcmlhbDtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNyZWF0ZWRNYXRlcmlhbHMucHVzaCggbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIG1lc2hcblxuXHRcdFx0XHRsZXQgbWVzaDtcblxuXHRcdFx0XHRpZiAoIGNyZWF0ZWRNYXRlcmlhbHMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBtaSA9IDAsIG1pTGVuID0gbWF0ZXJpYWxzLmxlbmd0aDsgbWkgPCBtaUxlbjsgbWkgKysgKSB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHNvdXJjZU1hdGVyaWFsID0gbWF0ZXJpYWxzWyBtaSBdO1xuXHRcdFx0XHRcdFx0YnVmZmVyZ2VvbWV0cnkuYWRkR3JvdXAoIHNvdXJjZU1hdGVyaWFsLmdyb3VwU3RhcnQsIHNvdXJjZU1hdGVyaWFsLmdyb3VwQ291bnQsIG1pICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIGlzTGluZSApIHtcblxuXHRcdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lU2VnbWVudHMoIGJ1ZmZlcmdlb21ldHJ5LCBjcmVhdGVkTWF0ZXJpYWxzICk7XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBpc1BvaW50cyApIHtcblxuXHRcdFx0XHRcdFx0bWVzaCA9IG5ldyBQb2ludHMoIGJ1ZmZlcmdlb21ldHJ5LCBjcmVhdGVkTWF0ZXJpYWxzICk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRtZXNoID0gbmV3IE1lc2goIGJ1ZmZlcmdlb21ldHJ5LCBjcmVhdGVkTWF0ZXJpYWxzICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGlmICggaXNMaW5lICkge1xuXG5cdFx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmVTZWdtZW50cyggYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHNbIDAgXSApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggaXNQb2ludHMgKSB7XG5cblx0XHRcdFx0XHRcdG1lc2ggPSBuZXcgUG9pbnRzKCBidWZmZXJnZW9tZXRyeSwgY3JlYXRlZE1hdGVyaWFsc1sgMCBdICk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRtZXNoID0gbmV3IE1lc2goIGJ1ZmZlcmdlb21ldHJ5LCBjcmVhdGVkTWF0ZXJpYWxzWyAwIF0gKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVzaC5uYW1lID0gb2JqZWN0Lm5hbWU7XG5cblx0XHRcdFx0Y29udGFpbmVyLmFkZCggbWVzaCApO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IHRoZSBkZWZhdWx0IHBhcnNlciBzdGF0ZSBvYmplY3Qgd2l0aCBubyBnZW9tZXRyeSBkYXRhLCBpbnRlcnByZXQgZGF0YSBhcyBwb2ludCBjbG91ZFxuXG5cdFx0XHRpZiAoIHN0YXRlLnZlcnRpY2VzLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRcdFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgUG9pbnRzTWF0ZXJpYWwoIHsgc2l6ZTogMSwgc2l6ZUF0dGVudWF0aW9uOiBmYWxzZSB9ICk7XG5cblx0XHRcdFx0Y29uc3QgYnVmZmVyZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcblxuXHRcdFx0XHRidWZmZXJnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICdwb3NpdGlvbicsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKCBzdGF0ZS52ZXJ0aWNlcywgMyApICk7XG5cblx0XHRcdFx0aWYgKCBzdGF0ZS5jb2xvcnMubGVuZ3RoID4gMCAmJiBzdGF0ZS5jb2xvcnNbIDAgXSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0YnVmZmVyZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCAnY29sb3InLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSggc3RhdGUuY29sb3JzLCAzICkgKTtcblx0XHRcdFx0XHRtYXRlcmlhbC52ZXJ0ZXhDb2xvcnMgPSB0cnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBwb2ludHMgPSBuZXcgUG9pbnRzKCBidWZmZXJnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0Y29udGFpbmVyLmFkZCggcG9pbnRzICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBjb250YWluZXI7XG5cblx0fVxuXG59XG5cbmV4cG9ydCB7IE9CSkxvYWRlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wbGF5LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9