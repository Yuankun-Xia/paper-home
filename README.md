# paper-home

微信公众号论文导航页。

## 新增一篇文章

1. 复制 `content/paper-template.json` 到 `content/papers/`。
2. 文件名建议使用 `017-527-short-slug.json` 这种格式。
3. 填好文章元数据，常用字段如下：
   - `id`：唯一短 ID，例如 `527-new-paper`
   - `articleNo`：公众号文章编号，例如 `527`
   - `articleDate`：发布日期，格式 `YYYY-MM-DD`
   - `order`：排序号，下一篇递增
   - `title`：公众号文章标题
   - `paperName` / `authors` / `paperYear`：论文信息
   - `cover`：封面路径，例如 `assets/cover-new-paper.png`
   - `topics`：筛选用标签 ID，例如 `["lora", "resource"]`
   - `topicLabels`：卡片上显示的标签，例如 `["LoRA", "资源优化"]`
   - `summary` / `problem` / `method` / `takeaway`：卡片和详情页文字
   - `links`：DOI、arXiv 或论文主页链接

## 本地生成页面数据

```powershell
node scripts\build-data.js
```

这个命令会读取 `content/papers/*.json`，重新生成 `js/data.js`。

## 一键发布到 GitHub

```powershell
node scripts\publish-to-github.js
```

这个命令会：

1. 重新生成 `js/data.js`
2. 检查前端脚本语法
3. 克隆或更新临时仓库 `C:\tmp\paper-home-publish`
4. 自动提交并推送到 `https://github.com/Yuankun-Xia/paper-home.git`

默认提交信息是 `Update paper home YYYY-MM-DD`。如果想自定义：

```powershell
$env:PAPER_HOME_COMMIT_MESSAGE="Add article 527"
node scripts\publish-to-github.js
```

## 可用主题 ID

- `intro`
- `lora`
- `lyapunov`
- `sfl`
- `resource`
- `fine-tuning`
- `generalization`
- `rank`
- `multi-task`
- `reinforcement`
- `quantization`
- `data-heterogeneity`
