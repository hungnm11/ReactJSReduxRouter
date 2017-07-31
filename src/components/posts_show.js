import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {

  componentDidMount() {
    console.log('PROPS', this.props);
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    posts[this.props.match.params.id];
    return (
      <div>Posts Show</div>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(null, { fetchPost })(PostsShow);