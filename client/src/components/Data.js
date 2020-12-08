import React from 'react';
import axios from 'axios';


import '../App.css';

class Data extends React.Component {

  state = {
    name: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      body: this.state.body
    };


    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      name: '',
      body: ''
    });
  };

  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.name}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <h2>Welcome Aklen Avenu Team</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="name"
              name="name"
              placeholder="Your Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              placeholder="Your Message"
              name="body"
              cols="5"
              rows="5"
              value={this.state.body}
              onChange={this.handleChange}
            >
              
            </textarea>
          </div>

          <button>Submit</button>
        </form>

        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
}


export default Data;