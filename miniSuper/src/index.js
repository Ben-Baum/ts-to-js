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
var $ = document.querySelector;
var ApiBaseUrl = "http://localhost:3200";
function init() {
    $("#searchButton").addEventListener("click", function () {
        addFruit();
    });
    Promise.race([getAllFish(), getAllFruits()]).then(function (results) {
        console.log(results);
        // drawMiniSuper("fishData", results[0])
        // drawMiniSuper("fruitsData", results[1])
    })["catch"](function (ex) {
        alert("Failed!!!!");
    });
}
function addFruit() {
    var fruitsUrl = "fruit";
    var currentFruit = $("#searchInput").value;
    var payload = { fruit: currentFruit };
    if (!currentFruit)
        return;
    fetch("".concat(ApiBaseUrl, "/").concat(fruitsUrl), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(_setJson).then(_addFruitSuccess)["catch"](_setError);
    function _setJson(response) {
        return response.json();
    }
    function _addFruitSuccess(message) {
        popUpSuccessModal();
        getAllFruits();
    }
    function _setError(ex) {
        console.log(ex);
    }
}
function getAllFruits() {
    return __awaiter(this, void 0, void 0, function () {
        function _loadFruits(fruitsData, ArrayOfFruits) {
            if (fruitsData === void 0) { fruitsData = "fruitsData"; }
            drawMiniSuper(fruitsData, ArrayOfFruits);
        }
        function _setError(error) {
            console.log(error);
        }
        var fruitsUrl, result, resultJson, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fruitsUrl = "fruits";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(ApiBaseUrl, "/").concat(fruitsUrl))];
                case 2:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 3:
                    resultJson = _a.sent();
                    return [2 /*return*/, resultJson
                        // _loadFruits(resultJson)
                    ];
                case 4:
                    error_1 = _a.sent();
                    throw new Error();
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getAllFish() {
    return __awaiter(this, void 0, void 0, function () {
        function _loadFish(fishData, arrayOfFish) {
            if (fishData === void 0) { fishData = "fishData"; }
            drawMiniSuper(fishData, arrayOfFish);
        }
        function _setError(error) {
            console.log(error);
        }
        var fishUrl, result, resultJson, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fishUrl = "fish";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(ApiBaseUrl, "/").concat(fishUrl))];
                case 2:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 3:
                    resultJson = _a.sent();
                    return [2 /*return*/, resultJson
                        // _loadFish(resultJson)
                    ];
                case 4:
                    error_2 = _a.sent();
                    throw new Error();
                case 5: return [2 /*return*/];
            }
        });
    });
}
init();
function drawMiniSuper(category, data) {
    if (!Array.isArray(data))
        return;
    var content = document.querySelector("#".concat(category));
    var h1List = data.map(function (msItem) {
        console.log(msItem);
        var h1 = document.createElement("h1");
        h1.innerText = msItem;
        return h1;
    });
    content.append.apply(content, h1List);
}
function popUpSuccessModal() {
    var alert = document.getElementById("alertModalSuccess");
    alert.style.display = "visible";
    setTimeout(function () {
        alert.style.display = "hidden";
    }, 5000);
}
function printMe(str, options) {
    if (options === void 0) { options = {}; }
    var isUpper = options;
    var whatToPrint = isUpper ? str.toUpperCase() : str;
    console.log(whatToPrint);
}
