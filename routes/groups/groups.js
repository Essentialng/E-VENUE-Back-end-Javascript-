"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var addGroup_1 = require("../../controllers/groups/addGroup");
var getAllLInfo_1 = require("../../controllers/groups/getAllLInfo");
var getOneGroup_1 = require("../../controllers/groups/getOneGroup");
var addPost_1 = require("../../controllers/groups/addPost");
var getPosts_1 = require("../../controllers/groups/getPosts");
var addLike_1 = require("../../controllers/groups/addLike");
var unLikePost_1 = require("../../controllers/groups/unLikePost");
var updatePostViews_1 = require("../../controllers/groups/updatePostViews");
var addComment2Post_1 = require("../../controllers/groups/addComment2Post");
var getMembers_1 = require("../../controllers/groups/getMembers");
var search_1 = require("../../controllers/groups/search");
var joinGroup_1 = require("../../controllers/groups/joinGroup");
var leaveGroup_1 = require("../../controllers/groups/leaveGroup");
router.post("/", addGroup_1.addGroup);
router.get("/getLimitedInfo", getAllLInfo_1.getAllLimitedInfo);
router.get("/:group_id", getOneGroup_1.getOneGroup);
router.post("/addPost", addPost_1.addPost);
router.get("/getPosts/:group_id", getPosts_1.getPosts);
router.post("/addLike/:group_post_id", addLike_1.addLike);
router.post("/unLike/:group_post_id", unLikePost_1.unLike);
router.post("/updateViews/:group_post_id", updatePostViews_1.updateViews);
router.post("/addComment2Post/:group_post_id", addComment2Post_1.addComment2Post);
router.get("/getMembers/:group_id", getMembers_1.getMembers);
router.get("/searchGroup/search", search_1.searchGroup);
router.post("/joinGroup/:group_id", joinGroup_1.joinGroup);
router.post("/leaveGroup/:group_id", leaveGroup_1.leaveGroup);
exports.default = router;
//# sourceMappingURL=groups.js.map