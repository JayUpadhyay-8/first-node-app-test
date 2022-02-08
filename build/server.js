"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const TuitController_1 = __importDefault(require("./controllers/TuitController"));
const TuitDao_1 = __importDefault(require("./daos/TuitDao"));
const UserDao_1 = __importDefault(require("./daos/UserDao"));
const mongoose_1 = __importDefault(require("mongoose"));
const DB_USERNAME = 'vaishnavi';
const DB_PASSWORD = 'vaishnavi';
//const connectionString = `mongodb://127.0.0.1:27017/tuitdb`;
const connectionString = 'mongodb+srv://vaishnavi:vaishnavi@cluster0.zct7x.mongodb.net/tuiterdb?retryWrites=true&w=majority';
mongoose_1.default.connect(connectionString);
// create RESTful Web service API
const app = (0, express_1.default)();
const userDao = new UserDao_1.default();
const tuitDao = new TuitDao_1.default();
app.use(express_1.default.json());
app.get('/', (req, res) => res.send('Welcome!'));
app.get('/add/:a/:b', (req, res) => res.send(req.params.a + req.params.b));
const userController = new UserController_1.default(app, userDao);
const tuitController = new TuitController_1.default(app, tuitDao);
//const PORT = 4000;
app.listen(process.env.PORT || 4000, () => {
    console.log(`Example app listening on port 4000npx tsc `);
});
