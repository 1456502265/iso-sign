# 云杉科技网站
中文单页官网，基于现有 Astro + Cloudflare Workers 脚手架。使用提供的 Logo 和蓝青色品牌配色，仅保留 Telegram：[@iospaofu](https://t.me/iospaofu)。

首页主标题为「专业 iOS 应用签名 / 与测试部署服务」，副标题直接介绍企业内部签名、设备测试签名、TestFlight 与 MDM 部署支持。

页面右下角固定显示带 Telegram 图标的「联系咨询」悬浮按钮，点击在新窗口打开 @iospaofu；手机端采用紧凑尺寸，并预留底部安全区。

Logo 按原始宽高比完整显示，页眉高度随内容撑开；桌面端上下内边距各 12px，手机端各 10px。手机导航菜单从页眉底部展开，页脚 Logo 同样不裁切。
页眉 Logo 宽度分别为桌面端 82px、平板端 74px、手机端 64px。

## 本地开发
要求 Node.js 22 或以上。
```bash
npm ci
npm run dev
```
浏览器打开终端显示的本地地址（默认 http://localhost:4321）。

## 检查与构建
```bash
npm run check
npm run build
npm run deploy:check
```
分别执行 Astro 类型检查、生产构建及 Cloudflare 部署预检。需要发布时执行 `npm run deploy`，并在 Cloudflare 控制台绑定新域名。

## 上线前配置
复制 `.env.example` 为 `.env`，填写新的正式域名，例如 `PUBLIC_SITE_URL=https://你的正式域名`，再构建。CI 部署需在构建环境设置相同变量。

未配置域名时不输出 canonical、站点绝对分享地址及 sitemap，避免将旧域名或虚构域名写入页面。配置后自动生成 sitemap-index.xml、sitemap-0.xml，并在 robots.txt 中声明；404 不纳入站点地图。部署后在搜索引擎提交新域名 sitemap。

## 维护位置
| 文件 | 用途 |
| --- | --- |
| src/config/site.ts | 品牌名称、SEO 标题、描述、正式域名 |
| src/config/contact.ts | Telegram 用户名与链接，修改时两个值保持一致 |
| src/content/home.ts | 服务项目、流程、常见问题 |
| src/pages/index.astro | 单页布局和轻量交互 |
| src/styles/site.css | 品牌颜色、桌面与移动端样式 |
| src/assets/brand/yunshan-logo.webp | 网页 Logo，astro:assets 输出 |
| public/yunshan-logo-original.png | 改为英文名的原始 Logo，保留备份 |
| public/favicon.webp、public/social.webp | 浏览器图标与分享图 |
| 开发规划.md | 按需求模板整理的范围与验收规划 |

页面包含服务方案、方案选择、服务流程、关于云杉、FAQ、Telegram 联系入口。手机导航支持展开与收起，FAQ 可折叠，隐私和服务说明在原生 dialog 中显示，支持 Esc 关闭。Telegram 账号可复制；浏览器不允许剪贴板写入时显示手动复制提示。

## 素材说明
原图已改名为 yunshan-logo-original.png；网页使用裁去外围空白并压缩的 WebP。更换 Logo 时同步更新网页 Logo、favicon、分享图；Brand.astro 使用 Astro Image，可自动输出尺寸。
首屏为 HTML/CSS 构建的流程示意，不是实际后台、交付状态或客户案例。

## 本次没有启用的模板功能
按“中文单语言、单页面、仅 Telegram”的要求，不启用英文、博客、SMTP 表单、微信、二维码或 Turnstile；不需要 SMTP 或验证密钥。不要把无关密钥写进前端。原始需求模板未修改。

## 内容与广告审核
页面按真实使用场景说明签名、测试与内部部署服务和限制，不保证证书永久有效或平台审核结果。正式上线前应确认展示内容与实际业务、运营主体及服务约定一致。
Google 广告处置需按其政策整改或申诉；更换域名和网页文案不能保证恢复投放。参考官方规避系统政策：https://support.google.com/adspolicy/answer/15938075?hl=zh-Hans 。

## 部署
保留原有 Cloudflare 适配器与 wrangler.json。页面预渲染，直接由 Worker 静态资源提供。首次部署先按 Cloudflare 要求登录，再执行：
```bash
npm run check
npm run build
npm run deploy:check
npm run deploy
```
本次交付为当前仓库代码；尚未绑定新域名或执行正式部署。

## 模板清理
已移除脚手架博客文章、博客布局、旧页头页脚组件、旧全局样式、占位图片、Atkinson 字体及默认图标，并卸载未使用的 MDX/RSS 依赖。当前页面只使用云杉科技的组件、样式与品牌资源。需求模板和开发规划保留，供后续维护参考。

## Git 提交范围
根目录采用白名单，只纳入 src、public、scripts、README、包清单及锁文件、Astro/TypeScript/Cloudflare 配置、Worker 类型文件和无密钥的环境变量示例。需求模板、开发规划及其他根目录文件默认仅保留本地；依赖、构建产物、缓存、编辑器文件、真实环境变量及证书密钥均排除。
新增根目录项目文件时，需在 .gitignore 中明确放行。已被 Git 跟踪的文件不受新增忽略规则影响；当前检查未发现已跟踪文件落入忽略范围。本次只调整提交范围，未执行提交或推送。
