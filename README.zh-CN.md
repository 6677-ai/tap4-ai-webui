# Tap4 AI Web UI

这是一个由[Tap4 AI工具导航站](https://tap4.ai)开源的AI导航站项目。我们的目标是让大家很容易就拥有一个属于自己的AI导航站，
收录自己喜欢的AI工具产品。这个项目非常轻量级，维护简单，适合对AI导航站感兴趣的个人开发者，也适合对NextJs有兴趣的学习者，
欢迎大家fork和star。

[English](https://github.com/6677-ai/tap4-ai-webui/blob/main/README.md) | 简体中文

## 功能

- 国际化
- SEO友好（支持i18n）
- 动态 sitemap.xml（支持i18n）
- 快速发布
- 使用 NEXT 14 和 app 路由（react服务器组件）
- Supabase serverless 数据库

![tai4-ai](./public/images/tap4ai.zh-CN.png)

## 感谢关注链接

欢迎关注我们的Twitter: https://x.com/tap4ai

如果觉得项目对你有帮助，欢迎请我喝杯咖啡：

<a href="https://www.buymeacoffee.com/tap4ai0o" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

如果你对项目有兴趣，欢迎扫描二维码加微信群沟通： ![tap4-ai-wx-group](./public/images/640.png)

## 快速开始

### 在Vercel上部署 **（别忘了设置环境变量）**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F6677-ai%2Ftap4-ai-webui.git&env=NEXT_PUBLIC_SITE_URL,GOOGLE_TRACKING_ID,GOOGLE_ADSENSE_URL,CONTACT_US_EMAIL,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&project-name=tap4-ai)

## 本地运行

### 安装

- node
- nvm
- pnpm

### 设置

#### （1）克隆此项目

```sh
git clone https://github.com/6677-ai/tap4-ai-webui.git
```

#### （2）在supabase上注册一个账户，然后创建一个项目

[https://supabase.com](https://supabase.com)

#### （3）设置环境变量
- 在根目录下，创建 `.env.local` 文件，填入具体数值，例子如下：
```sh
# 你的域名
NEXT_PUBLIC_SITE_URL="https://www.tap4.ai"

# 谷歌索引 id 和 广告 URL
GOOGLE_TRACKING_ID="G-XXXXXXX"
GOOGLE_ADSENSE_URL="https://xxxx.googlesyndication.com/xxxxx/xxxxx"

# 底部的联系邮箱
CONTACT_US_EMAIL="contact@tap4.ai"

# supabase 数据库的 url 和 key
NEXT_PUBLIC_SUPABASE_URL="https://xxxyyyzzz.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="XXX.YYY.ZZZ"
```

#### （4）在开发模式下运行

切换到特定的node版本

```sh
nvm use
```

安装依赖包

```sh
pnpm i
```

在开发模式下运行

```sh
pnpm dev
```

## 如何更新您的内容？

### 更新“主页”或“探索”页面（`/` 或 `/explore`）

```sh
lib/data.ts -> dataList
```

### 更新详情页面（`/ai/website-name`）

- PS: `detail` 支持 Markdown

```sh
lib/data.ts -> detailList
```

### 提交网站并从数据库中读取

1. 运行网站后，打开 `/submit` 页面
2. 输入数值并提交表单
3. 打开并检查您的 Supabase 项目

## 打算在 Tap4.ai 上提交您的网站？

### 打算将您的网站添加到我们的 `/startup` 页面？

- 在这里打开一个问题：[TAP4-AI-Directory](https://github.com/6677-ai/TAP4-AI-Directory/issues)
- 给我们发邮件：[contact@tap4.ai](mailto:contact@tap4.ai)

## 我们产品的链接

### TAP4-AI-Directory

全球AI工具的集合。| 收集免费的ChatGPT镜像、替代品、prompt、其他AI工具等。欲了解更多信息，请访
问：[Tap4 AI](https://tap4.ai)

### 如何在网站列表中获得您的首批用户

这是提交您的产品以获取用户的网站列表。请访问
[StartUp Your Product List](https://github.com/6677-ai/TAP4-AI-Directory/blob/main/Startup-Your-Product-List.md)

### GPT-4o in OpenAI

2024.05.14发布的惊人新功能。GPT-4o来了，让我们与她聊天。请访问 [GPT-4o](https://openai.com/index/hello-gpt-4o/)

### The Tattoo AI Generator and Design

Tattao AI Design是为纹身爱好者设计的纹身ai生成器。如果您对此感兴趣，请访问 [Tattoo AI Design](https://tattooai.design)

### Anime Girl Studio -- AI Anime Girl Generator and Chat

Anime Girl Studio是AI anime girl生成器和聊天产品。您可以生成您喜欢的角色并与AI anime girl聊天，请访问
[Anime Girl Studio](https://animegirl.studio)

## 其他开源项目

### 网站内容爬虫代码

访问：[6677-ai/tap4-ai-scraper](https://github.com/6677-ai/tap4-ai-scraper)

## 许可证

MIT
