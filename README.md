# Fly Coding format

このファイルはSASS（SCSS）とJadeでコーディングしながらライブ、ライブリロードが可能なタスクを「Fly」で組んだ物です。

## Fly Document

* [Fly GitHub Repository](https://github.com/bucaran/fly)
* [Fly Document](https://github.com/bucaran/fly/blob/master/docs/README.md)
* [Fly Document（日本語）](https://github.com/bucaran/fly/blob/master/docs/README.ja.md)

## 準備

下記はMac基準で表記しています。windows機をお使いの場合にはコマンドラインを管理者権限から起動して、sudoを抜かして実行してください。


## 1. Flyをグローバルインストール

flyコマンドを使用できるように、「Fly」をグローバルインストールします。

```js

$ sudo npm i fly -g

```

## 2. カレントディレクトリに移動

このファイルをDLしたら、ダウンロードしたディレクトリに移動。

```js

$ cd fly-coding_format

```

## 3. 必要なパッケージをDL

package.jsonに追加されているファイルが一括でDLされます。

```js

$ sudo npm i

```

パッケージをDLしたら準備は終了です。

## 起動

カレントディレクトリでflyコマンドを叩くことで、下記のタスクが実行されます。

* ローカルサーバー立ち上げ
* SASS（SCSS）をCSSへコンパイル
* JadeをHTMLへコンパイル
* .scssファイルと.jadeファイルが更新されたら自動コンパイル&リロード

### 起動コマンド

```js

$ fly

```



