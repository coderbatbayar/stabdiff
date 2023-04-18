import axios from 'axios';

const postDream = async (prompt, highQuality, url) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const config = {
    headers: headers,
  };

  return axios
    .post(url + '/api/predict', { prompt, high_quality: highQuality }, config)
    .then(({ data }) => data)
    .catch(e => {
      throw new Error(e && e.message);
    });
};

const SlackForm = {
  _signing_secret: 'SIGNING_SECRET',
  _bot_token: 'BOT_TOKEN',
  _slack_client_id: 'SLACK_CLIENT_ID',
  _client_secret: 'CLIENT_SECRET',
  _slack_token: 'SLACK_TOKEN',
};

const setSlackCredentials = (data, url) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const config = {
    headers: headers,
  };

  return axios
    .post(url + '/add_credentials', data, config)
    .then(({ data }) => data)
    .catch(e => {
      throw new Error(e && e.message);
    });
};

export {
  postDream,
  SlackForm,
  setSlackCredentials,
};
