import React from "react";
import { connect } from "react-redux";
import ViewPost from "./ViewPost";

import "../Styles/pages/favor.css";

class Favor extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div className="favor-container">
        {this.props.favoritePosts.length !== 0 ? (
          <div>
            {this.props.favoritePosts.map((singlePost, k) => {
              if (singlePost.favor) {
                return (
                  <ViewPost
                    key={k}
                    postKey={k}
                    post={singlePost}
                    renderFavor={true}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        ) : (
          <div className="not-favor-post-message-div">
            No posts
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    favoritePosts: state.posts.filter(post => {
      return post.favor === true;
    })
  };
};
export default connect(mapStateToProps)(Favor);
