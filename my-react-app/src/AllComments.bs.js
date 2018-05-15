// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Comment$ReactTemplate = require("./Comment.bs.js");
var CommentData$ReactTemplate = require("./CommentData.bs.js");

var component = ReasonReact.reducerComponent("AllComments");

function make(postsUrl, post_id, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              var handleCommentsLoaded = Curry._1(self[/* reduce */1], (function (commentsData) {
                      return /* Loaded */[commentsData];
                    }));
              CommentData$ReactTemplate.fetchComments(postsUrl).then((function (commentsData) {
                      Curry._1(handleCommentsLoaded, commentsData);
                      return Promise.resolve(/* () */0);
                    }));
              return /* NoUpdate */0;
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */2][/* commentsData */0];
              var comments = match ? $$Array.map((function (comment) {
                        return ReasonReact.element(/* None */0, /* None */0, Comment$ReactTemplate.make(comment[/* text */1], comment[/* score */2], post_id, comment[/* comment_id */0], comment[/* children */3], /* array */[]));
                      }), match[0]) : "Loading...";
              return React.createElement("div", {
                          className: "display"
                        }, comments);
            }),
          /* initialState */(function () {
              return /* record */[/* commentsData : None */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _) {
              return /* Update */Block.__(0, [/* record */[/* commentsData : Some */[action[0]]]]);
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
