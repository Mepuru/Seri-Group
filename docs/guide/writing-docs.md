# 如何撰写新的文档

本指南将详细介绍如何为花璃汉化组的文档站点添加新内容。即使你从未接触过 VitePress，也可以按照本文档的步骤完成文档编写。

## 目录结构

首先了解文档站点的基本结构：

```
docs/
├── index.md                  # 首页
├── guide/                    # 指南目录
│   ├── index.md              # 指南首页
│   └── writing-docs.md       # 本文档
├── public/                   # 静态资源（图片、图标等）
└── .vitepress/
    ├── config.ts             # 站点配置
    └── dist/                 # 构建产物（自动生成，不要手动编辑）
```

**规则：**
- 每个 `.md` 文件对应一个网页
- 文件路径决定 URL 路径，例如 `docs/guide/writing-docs.md` 对应 `/guide/writing-docs`
- `public/` 目录下的文件会原样复制到构建产物中，适合放图片和静态资源

## 创建新页面

### 第一步：创建 Markdown 文件

在 `docs/` 目录下创建一个新的 `.md` 文件。例如，要创建一个「汉化规范」页面：

```
docs/guide/translation-standard.md
```

文件名使用英文小写和连字符，例如 `translation-standard.md`。

### 第二步：编写内容

每个文档文件都以一个一级标题（`#`）开头，作为页面的标题：

```markdown
# 汉化规范

本文档描述了花璃汉化组的翻译规范。
```

### 第三步：添加到导航

创建文件后，需要在 `docs/.vitepress/config.ts` 中将其添加到侧边栏，否则用户无法通过导航找到这个页面。

打开 `config.ts`，找到 `sidebar` 配置，添加新条目：

```ts
sidebar: {
  '/guide/': [
    {
      text: '指南',
      items: [
        { text: '简介', link: '/guide/' },
        { text: '如何撰写文档', link: '/guide/writing-docs' },
        { text: '汉化规范', link: '/guide/translation-standard' },  // 新增
      ],
    },
  ],
},
```

注意 `link` 不需要 `.md` 后缀。

## Markdown 基础语法

以下是撰写文档时最常用的 Markdown 语法。

### 标题

使用 `#` 号表示标题，`#` 的数量对应标题级别：

```markdown
# 一级标题（页面标题，每个文件只用一次）
## 二级标题
### 三级标题
#### 四级标题
```

### 文本样式

```markdown
**加粗文本**
*斜体文本*
~~删除线~~
`行内代码`
```

效果：
- **加粗文本**
- *斜体文本*
- ~~删除线~~
- `行内代码`

### 链接

```markdown
[链接文字](https://example.com)
[站内链接](/guide/)
```

### 列表

无序列表：

```markdown
- 第一项
- 第二项
  - 子项
  - 子项
- 第三项
```

有序列表：

```markdown
1. 第一步
2. 第二步
3. 第三步
```

### 引用

```markdown
> 这是一段引用文字。
```

效果：

> 这是一段引用文字。

## 插入图片

图片文件放在 `docs/public/` 目录下。推荐按目录组织：

```
docs/public/
├── images/
│   ├── guide/
│   │   ├── directory-structure.png
│   │   └── new-page.png
│   └── logo.svg
└── favicon.ico
```

### 引用图片

在 Markdown 中使用以下语法：

```markdown
![图片描述](/images/guide/directory-structure.png)
```

路径以 `/` 开头，对应 `public/` 目录。

::: tip
如果需要我帮你在某个位置插入截图，请告诉我具体是哪个步骤需要截图，我会标注插入位置。
:::

## VitePress 扩展语法

VitePress 在标准 Markdown 基础上提供了一些扩展功能。

### 提示容器

用于展示不同类型的信息提示：

**提示（Tip）：**

```markdown
::: tip 提示标题
这是一条提示信息。
:::
```

效果：

::: tip 提示标题
这是一条提示信息。
:::

**警告（Warning）：**

```markdown
::: warning 警告标题
这是一条警告信息。
:::
```

效果：

::: warning 警告标题
这是一条警告信息。
:::

**危险（Danger）：**

```markdown
::: danger 危险标题
这是一条危险警告。
:::
```

效果：

::: danger 危险标题
这是一条危险警告。
:::

**详情折叠（Details）：**

```markdown
::: details 点击展开
这里是折叠的内容。
:::
```

效果：

::: details 点击展开
这里是折叠的内容。
:::

### 代码块

使用三个反引号包裹代码，并指定语言以启用语法高亮：

````markdown
```bash
npm run docs:dev
```

```ts
const name = '花璃汉化组'
console.log(name)
```

```json
{
  "name": "seri-group",
  "version": "1.0.0"
}
```
````

效果：

```bash
npm run docs:dev
```

```ts
const name = '花璃汉化组'
console.log(name)
```

```json
{
  "name": "seri-group",
  "version": "1.0.0"
}
```

**行高亮：** 可以高亮特定行：

````markdown
```ts{2,3}
const config = {
  title: '花璃汉化组',  // 这行会高亮
  description: '文档站点',  // 这行也会高亮
  lang: 'zh-CN',
}
```
````

### 表格

```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |
```

效果：

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |

## 本地预览

编写文档时，可以在本地实时预览效果：

```bash
npm run docs:dev
```

启动后访问终端中显示的地址（通常是 `http://localhost:5173`），修改文件后页面会自动刷新。

预览完成后，按 `Ctrl + C` 停止服务。

## 构建与部署

### 本地构建

```bash
npm run docs:build
```

构建产物会输出到 `docs/.vitepress/dist/` 目录。

### 预览构建产物

```bash
npm run docs:preview
```

### 部署

推送到 GitHub 的 `main` 分支后，EdgeOne Pages 会自动触发构建和部署。

```bash
git add -A
git commit -m "docs: 添加新文档"
git push
```

## 完整示例：创建一个新文档

假设要创建一个「项目列表」页面，完整步骤如下：

### 1. 创建文件

```bash
# 在 docs 目录下创建新文件
touch docs/projects.md
```

### 2. 编写内容

```markdown
# 项目列表

以下是花璃汉化组的汉化项目。

## 进行中

| 项目 | 类型 | 状态 |
|------|------|------|
| 示例项目 | 漫画 | 翻译中 |

## 已完成

暂无。
```

### 3. 更新配置

编辑 `docs/.vitepress/config.ts`，在 `nav` 中添加导航项：

```ts
nav: [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/' },
  { text: '项目', link: '/projects' },  // 新增
],
```

### 4. 本地预览

```bash
npm run docs:dev
```

### 5. 提交推送

```bash
git add -A
git commit -m "docs: 添加项目列表页面"
git push
```

## 常见问题

### 页面显示 404？

检查文件路径和 `config.ts` 中的 `link` 是否一致。注意 `link` 不需要 `.md` 后缀。

### 图片不显示？

确认图片放在 `docs/public/` 目录下，引用路径以 `/` 开头。

### 修改后页面没有变化？

本地预览时 VitePress 会自动热更新。如果仍然没有变化，尝试重启开发服务器：

```bash
# 停止服务后重新启动
npm run docs:dev
```
