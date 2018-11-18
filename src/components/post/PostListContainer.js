import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as postAction from '../../store/actions/PostAction';
import PostList from './PostList';
import ComplexTable from './ComplexTable';

export class PostListContainer extends React.Component {
  constructor() {
    super();

    this.state = { selectedPostId: undefined };

    this.handleAddPost = this.handleAddPost.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRowSelect = this.handleRowSelect.bind(this);
  }

  componentDidMount() {
    this.props.action.getPostsAction().catch(error => {
      toastr.error(error);
    });
  }

componentWillReceiveProps(props){
  console.log('PosTListContainer props: ', props);
}
  handleAddPost() {
    this.props.history.push('/post');
  }

  handleEditPost() {
    const selectedPostId = this.state.selectedPostId;

    if (selectedPostId) {
      this.setState({ selectedPostId: undefined });
      this.props.history.push(`/post/${selectedPostId}`);
    }
  }

  handleDelete() {
    const selectedPostId = this.state.selectedPostId;

    if (selectedPostId) {
      this.setState({ selectedPostId: undefined });
      this.props.action.deletePostAction(selectedPostId).catch(error => {
        toastr.error(error);
      });
    }
  }

  handleRowSelect(row, isSelected) {
    if (isSelected) {
      this.setState({ selectedPostId: row.id });
    }
  }

  render() {
    const { posts } = this.props;

    if (!posts) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col">
            <h1>Posts</h1>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary" onClick={this.handleAddPost}>
                <i className="fa fa-plus" aria-hidden="true" /> New
              </button>

              <button type="button" className="btn btn-warning ml-2" onClick={this.handleEditPost}>
                <i className="fa fa-pencil" aria-hidden="true" /> Edit
              </button>

              <button type="button" className="btn btn-danger ml-2" onClick={this.handleDelete}>
                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleDelete} /> Delete
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {posts && posts.length > 0 && <PostList posts={posts} handleRowSelect={this.handleRowSelect} />}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <ComplexTable/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(postAction, dispatch),
});

PostListContainer.propTypes = {
  posts: PropTypes.any,
  action: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
