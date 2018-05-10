open Post
open Comment
open User
open Tag

type t

val init_state : t

val state_of_json : string -> t

val json_of_state : t -> Ezjsonm.t

val get_comments : t -> int -> Ezjsonm.t

val new_vote : t -> Ezjsonm.t -> unit

val update_users : t -> User.t -> unit

val update_posts : t -> Post.t -> unit

val update_comments : t -> Comment.t -> unit

val update_tags : t -> Tag.t -> unit

val get_front_posts : t -> Ezjsonm.t

val get_next_post_id : t -> int

val get_tag_posts : t -> string -> Ezjsonm.t

val get_next_comment_id : t -> int