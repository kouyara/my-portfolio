# wasm-rust-suika-game

Rust + WebAssembly で動作するスイカゲームの土台プロジェクトです。

## ビルド方法

```
cargo install wasm-pack # 初回のみ
wasm-pack build --target web
```

生成される `pkg/` ディレクトリを Next.js とは別プロセスで配信するか、`public/` 配下に配置して読み込みます。
