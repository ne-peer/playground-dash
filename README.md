# playground-dash
dash-buttonの遊び場

## セットアップ
※ linux/macOSで動きます

### 1. ソースの用意

```
// source clone
$ git clone https://github.com/ne-peer/playground-dash.git

// module install
$ npm install
```

### 2. Dashボタンの初期設定
Amazon Dash Buttonの初期設定をする。
接続Wifiの設定を行ったステップまで進んだら完了。

すでに注文商品をセットアップ済みの場合は一度初期化する。
(詳細は[ここの手順](https://github.com/ide/dash-button?#user-content-setting-up-your-dash-button)を参照)

### 3. Dashボタンの物理アドレス取得
※ rootで実行

```
npm run scan
```

### 4. SlackAPIキーを取得
割愛。

### 5. サーバ実行

```
node slack-notice.js
```

### 6. ボタンを押す
完了