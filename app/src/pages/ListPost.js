import React from "react";

import { connect } from "react-redux";
import ViewPost from "./ViewPost";

class ListPost extends React.Component {
  render() {
    return (
      <div className="post">
        {this.props.posts.length !== 0 && (
          <div>
            {this.props.posts.map((singlePost, k) => {
              return <ViewPost key={k} postKey={k} post={singlePost} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(mapStateToProps)(ListPost);
