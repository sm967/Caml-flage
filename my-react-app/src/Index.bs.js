// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Title$ReactTemplate = require("./Title.bs.js");
var AllTags$ReactTemplate = require("./AllTags.bs.js");
var AllPosts$ReactTemplate = require("./AllPosts.bs.js");
var PostInput$ReactTemplate = require("./PostInput.bs.js");
var AllComments$ReactTemplate = require("./AllComments.bs.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, Title$ReactTemplate.make("Welcome to Caml-flage", /* array */[])), "title");

ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, PostInput$ReactTemplate.make("Create a new post here!", /* array */[])), "input");

ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, AllPosts$ReactTemplate.make("/state.json", /* array */[])), "posts");

var url = ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0);

var lst = url[/* path */0];

var post_id = List.nth(lst, List.length(lst) - 1 | 0);

function renderToElement(posttype, myurl, id) {
  if (posttype === "post") {
    ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, AllPosts$ReactTemplate.make(myurl, /* array */[])), "onepost");
    return ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, AllComments$ReactTemplate.make(myurl, Caml_format.caml_int_of_string(post_id), /* array */[])), "comments");
  } else {
    ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, Title$ReactTemplate.make(id, /* array */[])), "tagtitle");
    return ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, AllPosts$ReactTemplate.make(myurl, /* array */[])), "poststag");
  }
}

function geturl(url) {
  if (url) {
    switch (url[0]) {
      case "post" : 
          var match = url[1];
          if (match && !match[1]) {
            var id = match[0];
            return renderToElement("post", "/post/" + (id + "/poststate.json"), id);
          } else {
            return /* () */0;
          }
      case "tag" : 
          var match$1 = url[1];
          if (match$1 && !match$1[1]) {
            var id$1 = match$1[0];
            return renderToElement("tag", "/tag/" + (id$1 + "/tagstate.json"), id$1);
          } else {
            return /* () */0;
          }
      default:
        return /* () */0;
    }
  } else {
    return /* () */0;
  }
}

var myurl = geturl(lst);

ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, AllTags$ReactTemplate.make("/state.json", /* array */[])), "tags");

exports.url = url;
exports.lst = lst;
exports.post_id = post_id;
exports.renderToElement = renderToElement;
exports.geturl = geturl;
exports.myurl = myurl;
/*  Not a pure module */
