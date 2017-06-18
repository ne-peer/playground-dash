const DashButton = require('dash-button');
const request = require('request');

const DASH_BUTTON_MAC_ADDRESS = '40:b4:cd:f6:e2:8b';

const token = '';
const channel = '%23' + 'develop';
const message = 'ボタンが押されたからピザを頼みます！';
const name = 'DashButton';

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);
let subscription = button.addListener(() => {
  const options = {
    url: 'https://slack.com/api/chat.postMessage?token=' + token + '&channel=' + channel + '&text=' + encodeURI(message) + '&username=' + name,
    method: 'GET'
  };

  request(options, function (err, res, body) {
    if (err) {
      console.log('ERR!! :' + err);
    } else {
      console.log('request success');
    }
  });

});