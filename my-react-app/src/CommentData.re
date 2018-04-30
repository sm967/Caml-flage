type comments = {
    comment_id: int, 
    text: string, 
    score: int,
  };
   
let parseCommentsJson = (json : Js.Json.t) : comments => 
    Json.Decode.{
      comment_id: field("comment_id", int, json),
      text: field("text", string, json), 
      score: field("score", int, json),
    };

/* comments is name of array */
let parseCommentsResponseJson = json =>
Json.Decode.field("comments", Json.Decode.array(parseCommentsJson), json);

let postsUrl = "/state.json";

let fetchComments = () =>
  Js.Promise.(
    Bs_fetch.fetch(postsUrl)
      |> then_(Bs_fetch.Response.text)
      |> then_(
        jsonText =>
          resolve(parseCommentsResponseJson(Js.Json.parseExn(jsonText)))
      )
  );