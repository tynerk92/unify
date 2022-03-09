/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/db.ts":
/*!*******************!*\
  !*** ./src/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
const uri = 'mongodb+srv://dev:ItSj1oLX9DECWtai@development.fjuz6.mongodb.net/Development?retryWrites=true&w=majority';
const client = new mongodb_1.MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: mongodb_1.ServerApiVersion.v1,
});
client.connect((err) => {
    if (err)
        console.error('Failed to connect to DB:', err);
});
exports["default"] = client.db();


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const user_routes_1 = __importDefault(__webpack_require__(/*! ./user.routes */ "./src/user.routes.ts"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/user', user_routes_1.default);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
process.on('exit', () => { });


/***/ }),

/***/ "./src/user.routes.ts":
/*!****************************!*\
  !*** ./src/user.routes.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ "bcrypt"));
const db_1 = __importDefault(__webpack_require__(/*! ./db */ "./src/db.ts"));
const router = express_1.default.Router();
router.post('/login', (req, res) => {
    const username = String(req.query.username);
    const password = String(req.query.password);
    db_1.default.collection('users')
        .findOne({
        username,
    })
        .then((potentialUser) => {
        if (potentialUser) {
            const hash = bcrypt_1.default.hashSync(password, potentialUser.salt);
            const passwordHash = potentialUser.password;
            if (hash === passwordHash) {
                res.send({
                    _id: potentialUser._id,
                    username: potentialUser.username,
                });
            }
            else {
                res.sendStatus(401);
            }
        }
        else {
            res.sendStatus(401);
        }
    })
        .catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });
});
router.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const salt = bcrypt_1.default.genSaltSync(10);
    const hash = bcrypt_1.default.hashSync(password, salt);
    db_1.default.collection('users')
        .insertOne({
        username,
        salt,
        password: hash,
    })
        .then((data) => {
        res.send(data);
    });
});
exports["default"] = router;


/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtJQUNsQyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7SUFFbEMsTUFBTSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO0lBQ25DLE1BQU0sSUFBSSxHQUFHLGdCQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFFNUMsWUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7U0FDbkIsU0FBUyxDQUFDO1FBQ1QsUUFBUTtRQUNSLElBQUk7UUFDSixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLHFCQUFlLE1BQU07Ozs7Ozs7Ozs7O0FDOURyQjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGkvLi9zcmMvZGIudHMiLCJ3ZWJwYWNrOi8vYXBpLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FwaS8uL3NyYy91c2VyLnJvdXRlcy50cyIsIndlYnBhY2s6Ly9hcGkvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9hcGkvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwibW9uZ29kYlwiIiwid2VicGFjazovL2FwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcGkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hcGkvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FwaS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIE1vbmdvQ2xpZW50T3B0aW9ucywgU2VydmVyQXBpVmVyc2lvbiB9IGZyb20gJ21vbmdvZGInXG5cbmNvbnN0IHVyaSA9XG4gICdtb25nb2RiK3NydjovL2RldjpJdFNqMW9MWDlERUNXdGFpQGRldmVsb3BtZW50LmZqdXo2Lm1vbmdvZGIubmV0L0RldmVsb3BtZW50P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIHtcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIHNlcnZlckFwaTogU2VydmVyQXBpVmVyc2lvbi52MSxcbn0gYXMgTW9uZ29DbGllbnRPcHRpb25zKVxuXG5jbGllbnQuY29ubmVjdCgoZXJyKSA9PiB7XG4gIGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb25uZWN0IHRvIERCOicsIGVycilcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudC5kYigpXG4iLCJpbXBvcnQgRXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFVzZXJSb3V0ZXMgZnJvbSAnLi91c2VyLnJvdXRlcydcblxuY29uc3QgYXBwID0gRXhwcmVzcygpXG5jb25zdCBwb3J0ID0gMzAwMFxuXG5hcHAudXNlKEV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShFeHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcblxuYXBwLnVzZSgnL3VzZXInLCBVc2VyUm91dGVzKVxuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgY29uc29sZS5sb2coYHNlcnZlciBzdGFydGVkIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApXG59KVxuXG5wcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge30pXG4iLCJpbXBvcnQgRXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgZGIgZnJvbSAnLi9kYidcbmltcG9ydCB7IERvY3VtZW50LCBXaXRoSWQgfSBmcm9tICdtb25nb2RiJ1xuXG5pbnRlcmZhY2UgVXNlciBleHRlbmRzIFdpdGhJZDxEb2N1bWVudD4ge1xuICB1c2VybmFtZTogc3RyaW5nXG4gIHBhc3N3b3JkOiBzdHJpbmdcbiAgc2FsdDogc3RyaW5nXG59XG5cbmNvbnN0IHJvdXRlciA9IEV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLnBvc3QoJy9sb2dpbicsIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHVzZXJuYW1lID0gU3RyaW5nKHJlcS5xdWVyeS51c2VybmFtZSlcbiAgY29uc3QgcGFzc3dvcmQgPSBTdHJpbmcocmVxLnF1ZXJ5LnBhc3N3b3JkKVxuXG4gIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJylcbiAgICAuZmluZE9uZSh7XG4gICAgICB1c2VybmFtZSxcbiAgICB9KVxuICAgIC50aGVuKChwb3RlbnRpYWxVc2VyOiBVc2VyKSA9PiB7XG4gICAgICBpZiAocG90ZW50aWFsVXNlcikge1xuICAgICAgICBjb25zdCBoYXNoID0gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCBwb3RlbnRpYWxVc2VyLnNhbHQpXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkSGFzaCA9IHBvdGVudGlhbFVzZXIucGFzc3dvcmRcblxuICAgICAgICBpZiAoaGFzaCA9PT0gcGFzc3dvcmRIYXNoKSB7XG4gICAgICAgICAgcmVzLnNlbmQoe1xuICAgICAgICAgICAgX2lkOiBwb3RlbnRpYWxVc2VyLl9pZCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwb3RlbnRpYWxVc2VyLnVzZXJuYW1lLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnNlbmRTdGF0dXMoNDAxKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2VuZFN0YXR1cyg0MDEpXG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICByZXMuc2VuZFN0YXR1cyg1MDApXG4gICAgfSlcbn0pXG5cbnJvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCAocmVxOiBFeHByZXNzLlJlcXVlc3QsIHJlczogRXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICBjb25zdCB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lXG4gIGNvbnN0IHBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmRcblxuICBjb25zdCBzYWx0ID0gYmNyeXB0LmdlblNhbHRTeW5jKDEwKVxuICBjb25zdCBoYXNoID0gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCBzYWx0KVxuXG4gIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJylcbiAgICAuaW5zZXJ0T25lKHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgc2FsdCxcbiAgICAgIHBhc3N3b3JkOiBoYXNoLFxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJlcy5zZW5kKGRhdGEpXG4gICAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=