// 两周年纪念页面 - 滚动动画交互
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initScrollAnimations();
    initTimer();
    initParticles();
    initHeartEffects();
    initPhotoClick();
    initShareButtons();

    // 自动创建一些爱心
    setTimeout(() => {
        createHearts(8, '#slide1');
    }, 1000);
});

// 初始化滚动动画
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');

    // 设置 Intersection Observer 来检测章节进入视口
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // 触发内容动画
                setTimeout(() => {
                    animateSlideContent(entry.target);
                }, 300);

                // 根据当前章节创建爱心效果
                const sectionId = entry.target.id;
                createPageSpecificEffects(sectionId);
            }
        });
    }, {
        threshold: 0.2, // 当20%的章节可见时触发
        rootMargin: '-50px 0px -50px 0px' // 调整触发边界
    });

    // 开始观察所有章节
    sections.forEach(section => {
        observer.observe(section);
    });
}

// 为页面内容添加动画
function animateSlideContent(slide) {
    const content = slide.querySelector('.content');
    if (!content) return;

    // 重置动画状态
    content.style.animation = 'none';
    content.offsetHeight; // 触发重排
    content.style.animation = 'slideContentIn 0.8s ease-out forwards';

    // 为内部元素添加延迟动画
    const children = content.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.style.animation = 'none';
        child.offsetHeight;
        child.style.animation = `fadeInUp 0.6s ease-out ${i * 0.1 + 0.3}s forwards`;
        child.style.opacity = '0';
        child.style.transform = 'translateY(20px)';
    }
}

// 创建页面特定效果
function createPageSpecificEffects(sectionId) {
    switch(sectionId) {
        case 'slide2': // 计时器页面
            createHearts(5, '#slide2');
            break;
        case 'slide4': // 留言页面
            createHearts(3, '#slide4');
            break;
        case 'slide5': // 分享页面
            createHearts(10, '#slide5');
            break;
    }
}

// 初始化计时器
function initTimer() {
    // 开始日期：2024年2月8日
    const startDate = new Date('2024-02-08T00:00:00');

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate; // 毫秒差

        // 计算天、小时、分钟、秒
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // 更新DOM
        document.getElementById('days').textContent = days.toString().padStart(3, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // 立即更新并每秒更新
    updateTimer();
    setInterval(updateTimer, 1000);
}

// 初始化背景粒子
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 40;
    const colors = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#ff4081', '#ff6b9d'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // 随机属性
        const size = Math.random() * 12 + 6;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 10;
        const animationDelay = Math.random() * 5;

        // 应用样式
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.animationDelay = `${animationDelay}s`;

        particlesContainer.appendChild(particle);
    }
}

// 初始化爱心效果
function initHeartEffects() {
    // 确保浮动爱心容器存在
    let container = document.getElementById('floatingHearts');
    if (!container) {
        container = document.createElement('div');
        container.id = 'floatingHearts';
        container.className = 'floating-hearts';
        document.body.appendChild(container);
    }

    // 添加页面点击事件（创建爱心）
    document.addEventListener('click', function(e) {
        // 排除按钮和链接
        if (e.target.tagName === 'BUTTON' ||
            e.target.tagName === 'A' ||
            e.target.closest('button') ||
            e.target.closest('a') ||
            e.target.closest('.share-btn')) {
            return;
        }

        // 在点击位置创建爱心
        const x = e.clientX;
        const y = e.clientY;
        createHeartsAtPosition(3, x, y);
    });

    // 爱心按钮事件
    const heartButton = document.getElementById('heartButton');
    if (heartButton) {
        heartButton.addEventListener('click', function(e) {
            e.stopPropagation();
            createHearts(15, 'body');
        });
    }
}

// 创建爱心
function createHearts(count, containerSelector = 'body') {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const colors = ['#ff4081', '#ff6b9d', '#ff9a9e', '#a1c4fd', '#fad0c4'];

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '<i class="fas fa-heart"></i>';

        // 随机属性
        const size = Math.random() * 35 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 3 + 3;
        const animationDelay = Math.random() * 0.5;

        // 应用样式
        heart.style.left = `${left}%`;
        heart.style.fontSize = `${size}px`;
        heart.style.color = color;
        heart.style.animationDuration = `${animationDuration}s`;
        heart.style.animationDelay = `${animationDelay}s`;

        // 添加到容器
        if (containerSelector === 'body') {
            document.getElementById('floatingHearts').appendChild(heart);
        } else {
            // 对于特定slide，创建mini容器
            let miniContainer = container.querySelector('.floating-hearts-mini');
            if (!miniContainer) {
                miniContainer = document.createElement('div');
                miniContainer.className = 'floating-hearts-mini';
                container.appendChild(miniContainer);
            }
            miniContainer.appendChild(heart);
        }

        // 动画完成后移除
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, animationDuration * 1000);
    }
}

// 在特定位置创建爱心
function createHeartsAtPosition(count, x, y) {
    const container = document.getElementById('floatingHearts');
    if (!container) return;

    const colors = ['#ff4081', '#ff6b9d', '#ff9a9e', '#a1c4fd', '#fad0c4'];

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '<i class="fas fa-heart"></i>';

        // 随机属性
        const size = Math.random() * 30 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animationDuration = Math.random() * 3 + 3;
        const animationDelay = Math.random() * 0.3;

        // 从点击位置开始
        const offsetX = (Math.random() - 0.5) * 100;
        const startX = x + offsetX;

        heart.style.left = `${startX}px`;
        heart.style.top = `${y}px`;
        heart.style.position = 'fixed';
        heart.style.fontSize = `${size}px`;
        heart.style.color = color;
        heart.style.animationDuration = `${animationDuration}s`;
        heart.style.animationDelay = `${animationDelay}s`;

        container.appendChild(heart);

        // 动画完成后移除
        setTimeout(() => {
            if (heart.parentNode === container) {
                container.removeChild(heart);
            }
        }, animationDuration * 1000);
    }
}

// 初始化照片点击事件
function initPhotoClick() {
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            alert(`点击了照片 ${index}！\n\n请将你的照片命名为 photo${index}.jpg 并放入 assets/images/ 文件夹中，然后替换HTML中的图片路径。`);

            // 添加点击效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
}

// 初始化分享按钮
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            const platform = this.classList.contains('weibo') ? '微博' :
                           this.classList.contains('wechat') ? '朋友圈' : '抖音';

            alert(`分享到${platform}功能需要在实际部署时配置。\n\n你可以修改分享链接指向你的页面URL。`);

            // 创建分享效果爱心
            createHearts(5, 'body');
        });
    });
}

// 窗口大小变化时重新计算
window.addEventListener('resize', function() {
    // 可以添加响应式调整逻辑
});