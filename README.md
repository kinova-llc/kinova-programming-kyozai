# 初心者向け Webアプリ開発講座

このリポジトリは、「初心者向け Webアプリ開発講座」のソースコードを含んでいます。プログラミング初心者の方でも理解しやすいように、Webアプリケーション開発の基礎から実践までを学べる教材です。

## 📚 講座の内容

1. **Webアプリってどんな仕組み？**
   - WebサイトとWebアプリの違い
   - インターネットのしくみ（リクエスト・レスポンス）
   - サーバーって何？どこで動いてるの？
   - ユーザーの操作がどう処理されるのか

2. **開発の準備をしよう！**
   - 開発環境とは？
   - Visual Studio Code（VS Code）をインストールしよう
   - Node.jsをインストールしよう
   - Gitを使ってみよう
   - 最初のプロジェクトを作ってみよう

3. **データを保存するしくみを学ぼう**
   - データはどこに保存されるの？
   - どんなデータが必要か整理しよう
   - データを追加・変更・削除してみよう

4. **サーバーとやりとりしよう**
   - ユーザーがデータを送れるようにする
   - どんなデータをどうやってやりとりする？
   - データを受け取って正しく返すしくみを作る

5. **画面を作ってアプリっぽくしよう**
   - 画面の土台を作ろう
   - 入力したデータを送れるようにする
   - 送ったデータを使って画面に表示する
   - エラーが起きたときの対応を考える

6. **TODOアプリを作ってみよう！**
   - どんなTODOアプリにする？
   - TODOを登録・削除できるようにしよう
   - 画面をもっと使いやすくしよう
   - アプリがちゃんと動くか試してみよう

## 🚀 使用技術

- [Astro](https://astro.build/) - 静的サイトジェネレーター
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストのCSSフレームワーク
- JavaScript - プログラミング言語
- HTML/CSS - マークアップ言語とスタイルシート

## 🔧 開発環境のセットアップ

### 必要なもの

- [Node.js](https://nodejs.org/) (v18以上)
- [Git](https://git-scm.com/)
- コードエディタ（[Visual Studio Code](https://code.visualstudio.com/)推奨）

### インストールと実行

```bash
# リポジトリをクローン
git clone https://github.com/kinova-llc/kinova-programming-blog.git
cd kinova-programming-blog

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーが起動したら、ブラウザで [http://localhost:4321](http://localhost:4321) にアクセスしてください。

## 📝 ビルドと公開

```bash
# 本番用にビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

## 📖 学習リソース

- [MDN Web Docs](https://developer.mozilla.org/ja/) - Web技術のリファレンス
- [W3Schools](https://www.w3schools.com/) - Web開発の学習サイト
- [Astro ドキュメント](https://docs.astro.build/) - Astroの公式ドキュメント
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs) - Tailwind CSSの公式ドキュメント

## 🤝 貢献

このプロジェクトへの貢献は歓迎します！バグの報告や機能の提案は、Issueを作成してください。

## 📄 ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。

## 👥 作者

- Kinova編集部