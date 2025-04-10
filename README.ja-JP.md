# オープンソース Tap4 AI Web UI

これは [Tap4 AI ツールディレクトリ](https://tap4.ai) からのオープンソース AI ツールディレクトリプロジェクトです。私たちの目標は、誰もが自分のお気に入りの AI ツールを収集するための AI ツールディレクトリを簡単に持てるようにすることです。このプロジェクトは非常に軽量で、メンテナンスが容易であり、AI ナビゲーションサイトに興味のある個人開発者や NextJs に興味のある学習者に適しています。皆さんのフォークとスターを歓迎します。

[簡体字中国語](https://github.com/6677-ai/tap4-ai-webui/blob/main/README.zh-CN.md) | [英語](https://github.com/6677-ai/tap4-ai-webui/blob/main/README.md) | 日本語

## Product Hunt で Tap4 AI をサポート

<a href="https://www.producthunt.com/posts/ai-tools-directory-by-tap4-ai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai&#0045;tools&#0045;directory&#0045;by&#0045;tap4&#0045;ai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=464357&theme=light" alt="AI&#0032;Tools&#0032;Directory&#0032;by&#0032;Tap4&#0032;AI - Open&#0045;source&#0032;AI&#0032;navigation&#0032;&#0038;&#0032;discovery&#0032;with&#0032;multi&#0045;language | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## バージョン 2.0.0 更新ノート

- AI サイトデータは supabase データベースを使用して保存されます。
- Tap4 AI クローラープロジェクトと接続され、完全自動の提出と収集をサポートします。
- 簡単なカテゴリ分けと検索をサポートします。

注: データベースに不慣れな場合や、バージョン 1.0.0 との互換性の問題が心配な場合は、[バージョン 1.0.0 ブランチ](https://github.com/6677-ai/tap4-ai-webui/tree/v1.0.0) に切り替えてください。

## 最新機能の紹介

- AI ツールリストの表示をサポートします。
- AI ツールのカテゴリフィルタリングをサポートします。
- AI ツールの検索をサポートします。
- AI ツールの Markdown 詳細表示をサポートします。
- SEO フレンドリー（i18n をサポート）。

## 技術スタックの説明

- NEXT 14 とアプリルーティング（React サーバーコンポーネント）を使用。
- Supabase サーバーレスデータベース。
- 国際化。
- SEO フレンドリー（i18n をサポート）。
- 動的 sitemap.xml（i18n をサポート）。
- Tailwind CSS。

## フロントエンドページのスクリーンショット

![tap4-ai](./public/images/tap4ai.zh-CN.png)

## フォローとサポートリンク

私たちの Twitter をフォローしてください: https://x.com/tap4ai

プロジェクトが役立つと感じた場合は、コーヒーを買ってください:

<a href="https://www.buymeacoffee.com/tap4ai0o" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

プロジェクトに興味がある場合は、WeChat を追加してください: helloleo2023, メモ: "tap4 ai オープンソース"、または QR コードをスキャンしてください: ![tap4-ai-wx](./public/images/tap4-ai-wechat.jpg)

## デプロイ手順

### Tap4 AI クローラーのデプロイ

詳細は [Tap4 AI クローラー](https://github.com/6677-ai/tap4-ai-crawler) を参照してください。デプロイ後、プラットフォームのドメイン名またはカスタムドメイン名を使用して、AI ツールのウェブページコンテンツを生成する API インターフェースとして使用できます（例: https://{crawler_domain}/site/crawl、{crawler_domain} は特定のドメイン名です）。**CRAWLER_API 環境変数に設定する必要があります。**

### Supabase データベースの作成と SQL スクリプトの実行

- [Supabase](https://supabase.com/) に登録し、データベースを作成し、SUPABASE_URL と SUPABASE_ANON_KEY を記録して、後で Vercel 環境変数デプロイに使用します。
- プロジェクトの db ディレクトリにある SQL ファイルを Supabase バックエンドで実行します: create_table.sql、insert_category_data.sql、insert_data.sql。

**注: データを変更する必要がある場合は、SQL ファイルを参照するか、Supabase バックエンドで直接編集できます。**

### Vercel にデプロイ **（環境変数の設定を忘れないでください）**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F6677-ai%2Ftap4-ai-webui.git&env=NEXT_PUBLIC_SITE_URL,GOOGLE_TRACKING_ID,GOOGLE_ADSENSE_URL,CONTACT_US_EMAIL,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,CRAWLER_API,CRAWLER_API_KEY,CRON_AUTH_KEY,SUBMIT_AUTH_KEY&project-name=tap4-ai)

環境変数は以下の通りです: **注: すべてのキーが必要であり、NEXT_PUBLIC_SITE_URL、NEXT_PUBLIC_SUPABASE_URL、NEXT_PUBLIC_SUPABASE_ANON_KEY の値を正しく記入してください。**

```sh
# あなたのドメイン
NEXT_PUBLIC_SITE_URL="https://tap4.ai"

# Google トラッキング ID と広告 URL
GOOGLE_TRACKING_ID="G-XXXXXXX" GOOGLE_ADSENSE_URL="https://xxxx.googlesyndication.com/xxxxx/xxxxx"

# フッターの連絡先メール
CONTACT_US_EMAIL="contact@tap4.ai"

# Supabase データベースの URL とキー
NEXT_PUBLIC_SUPABASE_URL="https://xxxyyyzzz.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="XXX.YYY.ZZZ"

# ウェブクローラー API インターフェース
CRAWLER_API="https://{crawler_domain}/site/crawl_async"

# クローラーインターフェース検証キー
CRAWLER_API_KEY="xxxx"

# カスタムインターフェース検証キー
CRON_AUTH_KEY="keyxxxx"

# 提出 API 検証キー
SUBMIT_AUTH_KEY="xxxx"
```

**注: このバージョンでは、Vercel のスケジュールタスクを使用して、ウェブサイトを自動的に読み取り、提出し、ウェブサイトの結果を生成します。**

- 無料版 Vercel: 1 日に 1 回の呼び出しのみをサポートしており、手動で {domain}/api/cron を呼び出すことができます。POST を使用し、ヘッダー: {"Authorization":"Bearer auth_key"}、auth_key はカスタム設定された環境変数です。
- Pro 版 Vercel: このドキュメントを参照して [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs#cron-expressions) を設定できます。

## ローカルでの実行

### インストール

- Node
- NVM
- PNPM

### セットアップ

#### このプロジェクトをクローン

```sh
git clone https://github.com/6677-ai/tap4-ai-webui.git
```

#### Supabase データベースの作成と SQL スクリプトの実行

[Supabase](https://supabase.com/) に登録し、データベースを作成し、SUPABASE_URL と SUPABASE_ANON_KEY を記録して、後で Vercel 環境変数デプロイに使用します。プロジェクトの db ディレクトリにある SQL ファイルを Supabase バックエンドで実行します: create_table.sql、insert_category_data.sql、insert_data.sql。

**注: データを変更する必要がある場合は、SQL ファイルを参照するか、Supabase バックエンドで直接編集できます。**

#### 環境変数の設定

ルートディレクトリに .env.local ファイルを作成し、具体的な値を記入します。以下の例を参照してください:

**注: すべてのキーが必要であり、NEXT_PUBLIC_SITE_URL、NEXT_PUBLIC_SUPABASE_URL、NEXT_PUBLIC_SUPABASE_ANON_KEY の値を正しく記入してください。**

```sh
# あなたのドメイン
NEXT_PUBLIC_SITE_URL="https://tap4.ai"

# Google トラッキング ID と広告 URL
GOOGLE_TRACKING_ID="G-XXXXXXX" GOOGLE_ADSENSE_URL="https://xxxx.googlesyndication.com/xxxxx/xxxxx"

# フッターの連絡先メール
CONTACT_US_EMAIL="contact@tap4.ai"

# Supabase データベースの URL とキー
NEXT_PUBLIC_SUPABASE_URL="https://xxxyyyzzz.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="XXX.YYY.ZZZ"

# ウェブクローラー API インターフェース
CRAWLER_API="https://crawler_domain/site/crawl_async"

# クローラーインターフェース検証キー
CRAWLER_API_KEY="xxxx"

# カスタムインターフェース検証キー
CRON_AUTH_KEY="keyxxxx"

# 提出 API 検証キー
SUBMIT_AUTH_KEY="xxxx"
```

#### 開発モードで実行

特定の Node バージョンに切り替え

```sh
nvm use
```

パッケージをインストール

```sh
pnpm i
```

開発モードで実行

```sh
pnpm dev
```

## コンテンツを更新する方法

### データベースを手動で変更

Supabase の web_navigation テーブルのデータを変更します。Markdown の形式に注意してください。

### クローラーが読み込めない場合の対処方法

異なるサイトの反クローリングメカニズムとの互換性の問題により、現在クローラーが読み込めない場合があります。このような問題については、現在、データベースの submit テーブルを手動でクエリし、関連するウェブサイトのコンテンツを手動で作成し、web_navigation テーブルに挿入する必要があります。

## Tap4.ai にウェブサイトを提出したいですか？

### ウェブサイトを `/startup` ページに追加したいですか？

- ここで問題を開く: [TAP4-AI-Directory](https://github.com/6677-ai/TAP4-AI-Directory/issues)
- メールを送る: contact@tap4.ai

## 私たちの製品へのリンク

### TAP4-AI-Directory

世界中の AI ツールのコレクション。| 無料の ChatGPT ミラー、代替品、プロンプト、その他の AI ツールを収集します。詳細については、[Tap4 AI](https://tap4.ai) をご覧ください。

### ウェブサイトリストで最初のユーザーを獲得する方法

製品を提出してユーザーを獲得するためのウェブサイトリストです。詳細については、[StartUp Your Product List](https://github.com/6677-ai/TAP4-AI-Directory/blob/main/Startup-Your-Product-List.md) をご覧ください。

### Free Stable Diffusion 3 Online

Stable Diffusion 3 Medium は現在無料で体験できます。詳細については、[Free Stable Diffusion 3 Online](https://stable-diffusion-3.online/) をご覧ください。

### The Tattoo AI Generator and Design

Tattao AI Design はタトゥーファンのためのタトゥー AI ジェネレーターおよびデザインです。興味がある場合は、[Tattoo AI Design](https://tattooai.design) をご覧ください。

## スポンサーリスト

### Anime Girl Studio -- AI Anime Girl Chat & Generator

Anime Girl Studio は AI アニメガールジェネレーターおよびチャット製品です。好きなキャラクターを生成し、AI アニメガールとチャットできます。詳細については、[Anime Girl Studio](https://animegirl.studio) をご覧ください。

### Best AI Girl Friend -- Best AI Girl Chat & Generator

Best AI Girl Friend は AI ガールジェネレーターおよびチャット製品です。好きなキャラクターを生成し、AI ガールとチャットできます。詳細については、[Best AI Girl Friend](https://aigirl.best) をご覧ください。

## その他のオープンソース

### ウェブサイトコンテンツ AI クローラー

詳細については、[6677-ai/tap4-ai-crawler](https://github.com/6677-ai/tap4-ai-crawler) をご覧ください。
