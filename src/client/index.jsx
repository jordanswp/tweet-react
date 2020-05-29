import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';


class App extends React.Component {
  render() {

    console.log(tweets.tweets);

    let tweet = tweets.tweets;

    let tweetElement = tweet.map((tweet) => {
        return (
            <div>
                <div>{tweet.user.name} @{tweet.user.screen_name}</div>
                <div>{tweet.text} {tweet.user.entities.url.urls[0].display_url}</div>
                <p></p>
            </div>
            )
    })

    console.log(tweet);
    // console.log(tweets.tweets[0]);

    // console.log(tweetStuff[0]);


    return (
      <div>
      {tweetElement}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(
    <App />,
    element
    );//

