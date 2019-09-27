"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../components");
const express_1 = require("express");
/**
 * @constant {express.Router}
 */
const router = express_1.Router();
router.get('/getData', components_1.ReptileComponent.getData);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=ReptileRouter.js.map