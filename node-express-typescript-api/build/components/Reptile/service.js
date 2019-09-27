"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
/**
 * @export
 * @implements {IAuthService}
 */
const ReptileService = {
    insert(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const validate: Joi.ValidationResult < MovieModel > = UserValidation.createUser(body);
                // if (validate.error) {
                //     throw new Error(validate.error.message);
                // }
                let hsmovie = yield this.findOne(body.name);
                if (hsmovie && hsmovie.name) {
                    console.log("该电影已存在");
                }
                else {
                    const Movie = yield model_1.default.create(body);
                    return Movie;
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    findOne(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.findOne({
                name: name
            });
        });
    },
};
exports.default = ReptileService;
//# sourceMappingURL=service.js.map