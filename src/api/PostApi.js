import axios from 'axios';
import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const posts = [
  {
    id: 'react-flux-building-applications',
    title: 'Building Applications in React and Flux',
    watchHref: 'http://www.pluralsight.com/posts/react-flux-building-applications',
    authorId: 'cory-house',
    length: '5:08',
    category: 'JavaScript',
  },
  {
    id: 'clean-code',
    title: 'Clean Code: Writing Code for Humans',
    watchHref: 'http://www.pluralsight.com/posts/writing-clean-code-humans',
    authorId: 'cory-house',
    length: '3:10',
    category: 'Software Practices',
  },
  {
    id: 'architecture',
    title: 'Architecting Applications for the Real World',
    watchHref: 'http://www.pluralsight.com/posts/architecting-applications-dotnet',
    authorId: 'cory-house',
    length: '2:52',
    category: 'Software Architecture',
  },
  {
    id: 'career-reboot-for-developer-mind',
    title: 'Becoming an Outlier: Reprogramming the Developer Mind',
    watchHref: 'http://www.pluralsight.com/posts/career-reboot-for-developer-mind',
    authorId: 'cory-house',
    length: '2:30',
    category: 'Career',
  },
  {
    id: 'web-components-shadow-dom',
    title: 'Web Component Fundamentals',
    watchHref: 'http://www.pluralsight.com/posts/web-components-shadow-dom',
    authorId: 'cory-house',
    length: '5:10',
    category: 'HTML5',
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = post => {
  return replaceAll(post.title, ' ', '-');
};

const apiUrl = '/api/posts';

class PostApi {
  static getAllPosts = () => {
    return new Promise((resolve, reject) => {
      return axios
        .get(apiUrl)
        .then(response => {
          console.log('response: ', response);
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* static getAllPosts() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], posts));
      }, delay);
    });
  }*/

  static savePost(post) {
    post = Object.assign({}, post); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPostTitleLength = 1;
        if (post.title.length < minPostTitleLength) {
          reject(`Title must be at least ${minPostTitleLength} characters.`);
        }

        if (post.id) {
          const existingPostIndex = posts.findIndex(a => a.id === post.id);
          posts.splice(existingPostIndex, 1, post);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new posts in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          post.id = generateId(post);
          post.watchHref = `http://www.pluralsight.com/posts/${post.id}`;
          posts.push(post);
        }

        resolve(post);
      }, delay);
    });
  }

  static deletePost(postId) {
    return new Promise(resolve => {
      setTimeout(() => {
        const indexOfPostToDelete = posts.findIndex(post => post.id === postId);
        posts.splice(indexOfPostToDelete, 1);
        resolve();
      }, delay);
    });
  }

  static getPost(postId) {
    return new Promise((resolve, reject) => {
      return axios
        .get('/api/posts/' + postId)
        .then(response => {
          console.log('response: ', response);
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
    
  }
}

export default PostApi;
