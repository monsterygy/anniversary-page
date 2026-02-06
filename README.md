# 恋爱两周年纪念页面

一个精美、交互式的全屏滑动静态网页，庆祝从2024年2月8日开始的两周年恋爱纪念。

## 主要特性

- **全屏滑动体验**：通过滚轮（桌面端）或滑动（移动端）切换页面，每个页面占满全屏
- **实时计时器**：显示从2024年2月8日至今的天数、小时、分钟、秒数
- **照片墙**：预留4个照片位置，可替换为你们的合影
- **互动爱心效果**：点击页面任意位置或按钮会释放漂浮的爱心
- **爱的留言**：可自定义的浪漫留言和签名
- **社交分享**：微博、朋友圈、抖音分享按钮
- **响应式设计**：完美适配手机、平板和电脑
- **现代UI设计**：鲜艳色彩、平滑动画、心跳效果

## 页面结构

1. **封面页** - 主标题和引导提示
2. **计时器页** - 实时显示相爱时间
3. **照片墙页** - 展示美好瞬间
4. **留言页** - 浪漫留言和爱心互动
5. **分享页** - 分享按钮和结束语

## 如何使用

### 1. 替换照片
将你的照片放入 `assets/images/` 文件夹，然后修改 `index.html` 中的照片占位符：

```html
<!-- 将类似下面的占位符 -->
<div class="photo-placeholder">
    <i class="fas fa-heart"></i>
    <p>照片 1</p>
</div>

<!-- 替换为实际图片 -->
<img src="assets/images/photo1.jpg" alt="我们的照片1">
```

### 2. 自定义文本
编辑 `index.html` 中的以下部分：
- 主标题和副标题
- 爱的留言内容
- 签名部分

### 3. 修改样式
在 `style.css` 中调整：
- 渐变背景颜色
- 字体大小和颜色
- 动画速度

### 4. 修改纪念日期
在 `script.js` 中修改开始日期：
```javascript
const startDate = new Date('2024-02-08T00:00:00');
```

## 部署到 GitHub Pages

### 前提条件
- GitHub 账号
- 本地已安装 Git

### 部署步骤

1. **创建新的 GitHub 仓库**
   - 登录 [GitHub](https://github.com)
   - 点击右上角 "+" 图标，选择 "New repository"
   - 命名为 `anniversary-page` 或你喜欢的名称
   - 选择 "Public"（GitHub Pages 免费版仅支持公开仓库）
   - **不要** 勾选 "Initialize with README"（我们已有文件）

2. **本地初始化 Git**
   ```bash
   cd /path/to/your/project
   git init
   git add .
   git commit -m "初始提交：两周年纪念页面"
   ```

3. **连接到 GitHub 仓库**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

4. **启用 GitHub Pages**
   - 进入你的 GitHub 仓库
   - 点击 "Settings" 选项卡
   - 左侧边栏点击 "Pages"
   - 在 "Source" 下选择 "Deploy from a branch"
   - 选择 "main" 分支和 `/ (root)` 文件夹
   - 点击 "Save"
   - 等待几分钟部署完成
   - 你的网站将可通过 `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/` 访问

## 文件结构

```
.
├── index.html          # 主HTML文件
├── style.css           # 样式文件
├── script.js           # JavaScript交互脚本
├── README.md           # 说明文件
└── assets/
    └── images/         # 图片文件夹（存放你们的照片）
```

## 交互操作说明

- **桌面端**：使用鼠标滚轮上下滚动切换页面，点击左右箭头导航
- **移动端**：上下滑动切换页面，点击导航点快速跳转
- **点击页面**：在任意位置点击会创建漂浮爱心
- **爱心按钮**：点击按钮会释放大量爱心
- **照片点击**：点击照片框会提示如何替换照片
- **键盘支持**：方向键、空格键、数字键1-5可导航

## 浏览器支持

支持所有现代浏览器（Chrome、Firefox、Safari、Edge）。

## 自定义提示

- **添加更多页面**：复制现有的 `.slide` 部分并更新内容
- **调整动画速度**：修改CSS中 `transition` 和 `animation` 的时间值
- **更改颜色主题**：编辑 `style.css` 中的渐变颜色值
- **添加背景音乐**：可在HTML中添加 `<audio>` 标签并设置自动播放

## 许可证

可自由使用和修改用于个人庆祝活动。

## 致谢

- 字体来自 Google Fonts
- 图标来自 Font Awesome
- 背景渐变灵感来自美丽的色彩搭配
- 用 ❤️ 为你的特别纪念日创建