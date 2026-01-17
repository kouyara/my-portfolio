# My Portfolio

個人ポートフォリオサイトのリポジトリ

## 開発環境でのサーバー起動

```bash
npm install
```

開発サーバーの起動

```bash
npm run dev
```

ビルド

```bash
npm run build
```

## 本番環境でのサーバー起動・運用コマンド

```bash
npm start
```

稼働しているNode.jsプロセスを確認：

```bash
pm2 ls
```

VMでNode.jsアプリケーションを起動：

```bash
pm2 start node --name my-portfolio -- .next/standalone/server.js
```

アプリケーションの再起動

```bash
pm2 restart my-portfolio
```

ログの確認

```bash
pm2 logs my-portfolio
```

## デプロイ手順

ローカルでビルド

```bash
npm run build
```

本番環境へのデプロイ

```bash
rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude '.git' \
  /Users/kouya/coding/my-portfolio/ \
  kouyara:/opt/my-portfolio/
```

本番環境で再起動

```bash
ssh kouyara "cd /opt/my-portfolio && npm install && npm run build && pm2 restart my-portfolio"
```

本番環境初期の起動

```bash
ssh kouyara "cd /opt/my-portfolio && npm install && npm run build && pm2 start ecosystem.config.js"
```

## リンターフォーマッターの実行

Lintの実行

```bash
npm run lint
```

Lintの自動修正

```bash
npm run lint:fix
```

コードフォーマット

```bash
npm run format
```

フォーマットチェック

```bash
npm run format:check
```
