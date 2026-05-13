# 如何撰写新的文档

本指南面向没有任何技术背景的成员，从零开始教你如何为花璃汉化组的文档站点添加内容。

## 第一部分：准备工作

### 1.1 安装 Git

Git 是一个版本管理工具，我们用它来记录文档的修改历史并协作。

**Windows 用户：**

1. 打开 https://git-scm.com/downloads
2. 下载 Windows 版本的安装包
3. 安装时所有选项保持默认即可

安装完成后，打开「命令提示符」或「PowerShell」，输入以下命令验证：

```bash
git --version
```

如果显示类似 `git version 2.x.x` 的版本号，说明安装成功。

### 1.2 安装 Node.js

Node.js 是运行文档构建工具的环境。

1. 打开 https://nodejs.org/
2. 下载 LTS（长期支持）版本
3. 安装时所有选项保持默认

安装完成后，打开新的终端窗口，验证安装：

```bash
node --version
npm --version
```

两个命令都应该显示版本号。

### 1.3 注册 GitHub 账号

我们的文档托管在 GitHub 上。

1. 打开 https://github.com/
2. 点击 Sign up 注册账号
3. 完成邮箱验证

注册完成后，告诉组长你的 GitHub 用户名，他会把你添加为仓库协作者。

### 1.4 克隆仓库

「克隆」就是把远程仓库的文件下载到本地电脑上。

1. 打开终端（Windows 用户打开 PowerShell）
2. 进入你想存放项目的目录，例如：

```bash
cd D:\Github
```

3. 克隆仓库：

```bash
git clone https://github.com/Mepuru/Seri-Group.git
```

4. 进入项目目录：

```bash
cd Seri-Group
```

5. 安装依赖：

```bash
npm install
```

这一步会下载文档构建工具，可能需要等待一两分钟。

::: tip
如果 `git clone` 速度很慢，可以尝试使用代理或者镜像源。
:::

---

## 第二部分：理解项目结构

克隆完成后，你会看到如下目录结构：

```
Seri-Group/
├── .gitignore
├── README.md
├── package.json
├── edgeone.json
└── docs/
    ├── index.md              ← 首页
    ├── public/               ← 放图片的地方
    └── guide/
        └── index.md          ← 你现在正在看的文档
```

**你需要关心的只有 `docs/` 目录：**

- `docs/index.md` — 网站首页
- `docs/guide/` — 指南文档
- `docs/public/` — 图片等静态资源

其他文件（`.gitignore`、`package.json`、`edgeone.json`）是配置文件，一般不需要修改。

### URL 和文件路径的对应关系

| 文件路径 | 网页 URL |
|---------|---------|
| `docs/index.md` | `网站地址/` |
| `docs/guide/index.md` | `网站地址/guide/` |
| `docs/guide/writing-docs.md` | `网站地址/guide/writing-docs` |
| `docs/projects.md` | `网站地址/projects` |

规律：去掉 `docs/` 前缀和 `.md` 后缀，就是网页的 URL 路径。

---

## 第三部分：创建新文档

### 3.1 创建文件

在 `docs/` 目录下创建一个新的 `.md` 文件（Markdown 文件）。

文件命名规则：
- 使用英文小写字母
- 多个单词之间用连字符 `-` 连接
- 例如：`translation-standard.md`、`project-list.md`

你可以在文件管理器中右键新建文本文件，然后把扩展名从 `.txt` 改为 `.md`。

### 3.2 编写内容

每个文档文件都以一个一级标题（`#`）开头。下面是一个最简单的文档模板：

```markdown
# 页面标题

这里是页面的正文内容。

## 二级标题

更多内容。
```

### 3.3 添加到导航栏

创建文件后，需要修改配置文件让用户能找到这个页面。

打开 `docs/.vitepress/config.ts`，找到 `sidebar` 部分，添加你的页面：

```ts
sidebar: {
  '/guide/': [
    {
      text: '指南',
      items: [
        { text: '简介', link: '/guide/' },
        { text: '如何撰写文档', link: '/guide/writing-docs' },
        { text: '你的页面名称', link: '/guide/你的文件名' },  // 新增这一行
      ],
    },
  ],
},
```

如果要添加顶级导航（顶部菜单栏），修改 `nav` 部分：

```ts
nav: [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/' },
  { text: '你的页面', link: '/your-page' },  // 新增
],
```

::: warning 注意
`link` 的值不需要写 `.md` 后缀。例如文件是 `projects.md`，link 写 `/projects` 就行。
:::

---

## 第四部分：Markdown 语法详解

Markdown 是一种简单的标记语言，用简单的符号就能写出格式丰富的文档。

### 4.1 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
```

::: tip
一级标题（`#`）每个页面只用一次，作为页面标题。内容中的章节使用二级（`##`）和三级标题（`###`）。
:::

### 4.2 文本样式

```markdown
**这是加粗文本**
*这是斜体文本*
***这是加粗斜体***
~~这是删除线~~
`这是行内代码`
```

效果：

- **这是加粗文本**
- *这是斜体文本*
- ***这是加粗斜体***
- ~~这是删除线~~
- `这是行内代码`

### 4.3 链接

```markdown
[链接文字](https://example.com)
[站内链接](/guide/)
```

### 4.4 列表

无序列表（用 `-` 或 `*` 开头）：

```markdown
- 第一项
- 第二项
  - 子项 A
  - 子项 B
- 第三项
```

效果：

- 第一项
- 第二项
  - 子项 A
  - 子项 B
- 第三项

有序列表（用数字开头）：

```markdown
1. 第一步
2. 第二步
3. 第三步
```

效果：

1. 第一步
2. 第二步
3. 第三步

### 4.5 引用

```markdown
> 这是一段引用文字。
> 可以写多行。
```

效果：

> 这是一段引用文字。
> 可以写多行。

### 4.6 分割线

用三个 `-` 创建一条横线：

```markdown
---
```

### 4.7 表格

```markdown
| 列标题1 | 列标题2 | 列标题3 |
|---------|---------|---------|
| 内容1   | 内容2   | 内容3   |
| 内容4   | 内容5   | 内容6   |
```

效果：

| 列标题1 | 列标题2 | 列标题3 |
|---------|---------|---------|
| 内容1   | 内容2   | 内容3   |
| 内容4   | 内容5   | 内容6   |

对齐方式：

```markdown
| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:-------:|-------:|
| 内容   |  内容   |   内容 |
```

| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:-------:|-------:|
| 内容   |  内容   |   内容 |

---

## 第五部分：插入图片

### 5.1 放置图片

把图片文件放到 `docs/public/` 目录下。建议按目录组织：

```
docs/public/
└── images/
    ├── guide/
    │   └── example.png
    └── projects/
        └── screenshot.png
```

### 5.2 引用图片

在 Markdown 中这样写：

```markdown
![图片描述](/images/guide/example.png)
```

路径以 `/` 开头，对应 `public/` 目录。

::: tip 图片建议
- 格式推荐使用 PNG（截图）或 JPG（照片）
- 文件名使用英文，避免中文和空格
- 图片宽度建议不超过 1200px，避免过大影响加载速度
:::

::: warning 常见错误
- ❌ `![图片](docs/public/images/example.png)` — 不要写 `docs/public` 前缀
- ❌ `![图片](images/example.png)` — 必须以 `/` 开头
- ✅ `![图片](/images/example.png)` — 正确写法
:::

如果需要我在文档中某个位置插入截图，请告诉我具体是哪个步骤，我会标注出来。

---

## 第六部分：VitePress 扩展语法

除了标准 Markdown，VitePress 还提供了一些额外功能。

### 6.1 提示容器

**提示（蓝色）：**

```markdown
::: tip 标题
这是一条提示。
:::
```

::: tip 标题
这是一条提示。
:::

**警告（黄色）：**

```markdown
::: warning 标题
这是一条警告。
:::
```

::: warning 标题
这是一条警告。
:::

**危险（红色）：**

```markdown
::: danger 标题
这是一条危险警告。
:::
```

::: danger 标题
这是一条危险警告。
:::

**可折叠详情：**

```markdown
::: details 点击查看更多
这里是折叠的内容，点击标题展开。
:::
```

::: details 点击查看更多
这里是折叠的内容，点击标题展开。
:::

### 6.2 代码块

使用三个反引号包裹代码，第一行指定语言：

````markdown
```bash
npm run docs:dev
```
````

常用的语言标记：`bash`、`json`、`ts`、`js`、`html`、`css`、`markdown`

**高亮特定行：**

````markdown
```ts{2}
const config = {
  title: '花璃汉化组',  // 这行会被高亮
  lang: 'zh-CN',
}
```
````

### 6.3 Emoji

直接输入 Emoji 短代码即可：

```markdown
:smile: → :smile:
:heart: → :heart:
:+1: → :+1:
```

---

## 第七部分：本地预览

在提交之前，可以在本地预览文档效果。

### 7.1 启动开发服务器

在项目根目录打开终端，运行：

```bash
npm run docs:dev
```

终端会显示类似这样的信息：

```
  vitepress v1.x.x

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

在浏览器中打开 `http://localhost:5173/` 就能看到文档站点。

### 7.2 热更新

启动开发服务器后，修改 `.md` 文件并保存，浏览器中的页面会自动刷新，不需要手动重启。

### 7.3 停止服务

在终端中按 `Ctrl + C` 停止开发服务器。

---

## 第八部分：提交与推送

文档写好后，需要通过 Git 提交并推送到 GitHub，EdgeOne Pages 才会自动部署。

### 8.1 查看修改了哪些文件

```bash
git status
```

会显示类似这样的信息：

```
Changes not staged for commit:
  modified:   docs/guide/writing-docs.md
  new file:   docs/guide/new-page.md
```

### 8.2 暂存文件

把要提交的文件添加到暂存区：

```bash
# 暂存单个文件
git add docs/guide/new-page.md

# 或者暂存所有修改
git add -A
```

### 8.3 提交

```bash
git commit -m "docs: 添加新文档标题"
```

提交信息的格式建议：
- `docs: xxx` — 文档相关
- `feat: xxx` — 新功能
- `fix: xxx` — 修复问题

### 8.4 推送到 GitHub

```bash
git push
```

推送成功后，EdgeOne Pages 会自动检测到变更并重新部署，通常 1-2 分钟后就能在线上看到更新。

### 完整流程示例

```bash
# 1. 确认修改
git status

# 2. 暂存所有文件
git add -A

# 3. 提交
git commit -m "docs: 添加项目列表页面"

# 4. 推送
git push
```

::: danger 注意
- 每次修改前建议先 `git pull` 拉取最新代码，避免和别人的修改冲突
- 如果遇到冲突，不要慌张，找组长帮忙解决
:::

---

## 第九部分：完整示例

下面演示从创建文件到推送的完整流程。

**目标：创建一个「项目列表」页面**

### 步骤 1：创建文件

在 `docs/` 目录下创建 `projects.md`：

```markdown
# 项目列表

花璃汉化组的汉化项目汇总。

## 进行中

| 项目名称 | 类型 | 翻译 | 校对 | 状态 |
|---------|------|------|------|------|
| 示例项目 | 漫画 | 小明 | 小红 | 翻译中 |

## 已完成

暂无。
```

### 步骤 2：更新配置

编辑 `docs/.vitepress/config.ts`，在 `nav` 中添加：

```ts
nav: [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/' },
  { text: '项目', link: '/projects' },
],
```

### 步骤 3：本地预览

```bash
npm run docs:dev
```

打开浏览器确认页面显示正确。

### 步骤 4：提交推送

```bash
git add -A
git commit -m "docs: 添加项目列表页面"
git push
```

### 步骤 5：确认部署

等待 1-2 分钟，访问线上地址确认页面生效。

---

## 常见问题

### Q: 页面显示 404？

检查 `config.ts` 中的 `link` 是否和文件路径一致，注意不需要 `.md` 后缀。

### Q: 图片不显示？

- 确认图片在 `docs/public/` 目录下
- 引用路径以 `/` 开头
- 文件名不要有中文或空格

### Q: `git push` 失败？

可能是没有权限。确认你的 GitHub 账号已被添加为仓库协作者。

### Q: 本地预览时页面没有更新？

尝试停止开发服务器（`Ctrl + C`）后重新运行 `npm run docs:dev`。

### Q: 提交信息写错了怎么办？

如果还没有 push，可以修改最后一次提交：

```bash
git commit --amend -m "docs: 正确的提交信息"
```

如果已经 push 了，就不用管了，下次注意就行。
