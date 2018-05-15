// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Axios = require("axios");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var CommentInput$ReactTemplate = require("./CommentInput.bs.js");
var CommentLevel1$ReactTemplate = require("./CommentLevel1.bs.js");

var component = ReasonReact.reducerComponent("Comment");

function make(text, score, post_id, comment_id, nestedcomments, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var count = String(self[/* state */2][/* count */0]);
              var match = self[/* state */2][/* show */1];
              return React.createElement("div", undefined, React.createElement("div", {
                              className: "one"
                            }, React.createElement("div", {
                                  className: "gr"
                                }, React.createElement("p", undefined, text)), React.createElement("div", {
                                  className: "comment-buttons"
                                }, React.createElement("button", {
                                      className: "up",
                                      onClick: (function () {
                                          return Curry._1(self[/* send */4], /* Upvote */0);
                                        })
                                    }, "UpCaml"), React.createElement("button", {
                                      className: "comment",
                                      onClick: (function () {
                                          return Curry._1(self[/* send */4], /* Comment */2);
                                        })
                                    }, "Comment"), React.createElement("button", {
                                      className: "down",
                                      onClick: (function () {
                                          return Curry._1(self[/* send */4], /* Downvote */1);
                                        })
                                    }, "DownCaml"), React.createElement("div", undefined, "number of camels: " + count)), React.createElement("div", undefined, match ? ReasonReact.element(/* None */0, /* None */0, CommentInput$ReactTemplate.make(false, String(comment_id), String(post_id), "Write a comment", /* array */[])) : "")), React.createElement("div", undefined, $$Array.map((function (comment) {
                                    return ReasonReact.element(/* None */0, /* None */0, CommentLevel1$ReactTemplate.make(comment[/* text */1], comment[/* score */2], post_id, comment[/* comment_id */0], comment[/* children */3], /* array */[]));
                                  }), nestedcomments)));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* count */score,
                      /* show */false
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              switch (action) {
                case 0 : 
                    Axios.post("/vote", {
                              direction: "up",
                              user_id: 0,
                              comment_id: comment_id,
                              entry_type: "comment"
                            }).then((function (response) {
                              return Promise.resolve((console.log(response.data), /* () */0));
                            })).catch((function (error) {
                            return Promise.resolve((console.log(error), /* () */0));
                          }));
                    return /* Update */Block.__(0, [/* record */[
                                /* count */state[/* count */0] + 1 | 0,
                                /* show */state[/* show */1]
                              ]]);
                case 1 : 
                    Axios.post("/vote", {
                              direction: "down",
                              user_id: 0,
                              comment_id: comment_id,
                              entry_type: "comment"
                            }).then((function (response) {
                              return Promise.resolve((console.log(response.data), /* () */0));
                            })).catch((function (error) {
                            return Promise.resolve((console.log(error), /* () */0));
                          }));
                    return /* Update */Block.__(0, [/* record */[
                                /* count */state[/* count */0] - 1 | 0,
                                /* show */state[/* show */1]
                              ]]);
                case 2 : 
                    return /* Update */Block.__(0, [/* record */[
                                /* count */state[/* count */0],
                                /* show */!state[/* show */1]
                              ]]);
                
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
