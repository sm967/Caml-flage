/* CommentLevel1.re displays nested comments on level 1 */ 
type state = {
    count: int,
    show: bool, 
  };

type action =
  | Upvote
  | Downvote
  | Comment;
  
let component = ReasonReact.reducerComponent("CommentLevel1");


let make = (~text, ~score, ~post_id, ~comment_id, ~nestedcomments, _children) => {

  ...component,

  initialState: () => {count: score, show: false},

/* State transitions 
* Upvote adds 1 to state.score
* Downvote subtracts 1 from state.score 
* Comment shows the CommentInput */
  reducer: (action, state) =>
    switch (action) {
    | Upvote => 
      Js.Promise.(
      Axios.postData("/vote", {
        {"direction": "up",
        "user_id": 0, 
        "post_id": post_id,
        "comment_id": comment_id, 
        "entry_type": "comment"}})
      |> then_((response) => resolve(Js.log(response##data)))
      |> catch((error) => resolve(Js.log(error)))
      |> ignore
    );
    ReasonReact.Update({...state, count: state.count + 1});

    | Downvote => 
    Js.Promise.(
      Axios.postData("/vote", {
        {"direction": "down", 
        "user_id": 0, 
        "post_id": post_id,
        "comment_id": comment_id,
        "entry_type": "comment"}})
      |> then_((response) => resolve(Js.log(response##data)))
      |> catch((error) => resolve(Js.log(error)))
      |> ignore
    );
    ReasonReact.Update({...state, count: state.count - 1});

    | Comment => ReasonReact.Update({...state, show: ! state.show});
    },

  render: self => {
    let up ="UpCaml";
    let down = "DownCaml";
    let count = string_of_int(self.state.count);
    <div>
       /* nested comment */ 
      <div className="nested1">
      
        <div className = "gr">
          <p>(ReasonReact.stringToElement(text))</p>
        </div>

        /* buttons that are included on the component */
        <div className="comment-buttons">
            <button className = "up" onClick=(_event => self.send(Upvote))>
            (ReasonReact.stringToElement(up))
            </button>

            <button className = "comment" onClick=(_event => self.send(Comment))> 
            (ReasonReact.stringToElement("Comment"))
            </button>

            <button className = "down" onClick=(_event => self.send(Downvote))>
            (ReasonReact.stringToElement(down))
            </button>

            <div>
            (ReasonReact.stringToElement("number of camels: " ++ count))
            </div>
        </div> 

        <div> 
          (
          self.state.show ?
            <CommentInput
            parent_is_post=false 
            post_id=string_of_int(post_id)
            parent_id=string_of_int(comment_id)
            initialText="Write a comment"/> 
            : ReasonReact.stringToElement("")
          )
        </div> 

      </div>

      /* nested comments */
      <div>
      (ReasonReact.arrayToElement(
      Array.map(
              (comment: CommentData.comment) => 
              <CommentLevel2 
                post_id=post_id  
                text=comment.text
                score=comment.score 
                comment_id=comment.comment_id 
                nestedcomments=comment.children/>,
              nestedcomments
            )
      ))
      </div>

    </div>;
  },
}; 