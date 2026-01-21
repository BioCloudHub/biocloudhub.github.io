import { cardData, roles } from './data.js';

// 全局筛选状态
let searchTerm = '';
// 角色状态
let selectedRole = 'all';
// 从 localStorage 初始化已选标签
const savedTags = localStorage.getItem('selectedTags');
let selectedTags = new Set(savedTags ? JSON.parse(savedTags) : []);

// 保存标签到 localStorage
function saveTagsToStorage() {
  localStorage.setItem('selectedTags', JSON.stringify(Array.from(selectedTags)));
}

// 懒加载相关
let currentPage = 1;
const cardsPerPage = 16; // 初始和每页加载 16 张卡片
let allFilteredData = []; // 所有筛选后的数据
let isLoading = false;

// 创建单个卡片
function createCard(item) {
  const card = document.createElement('a');
  card.className = 'card';
  card.href = item.url || '#';
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  
  // 直接从数据中获取品牌名称
  const websiteName = item.brand || '未知网站';
  card.dataset.name = websiteName.toLowerCase();
  card.dataset.tags = item.tags.join(',');
  
   card.innerHTML = `
    <div class="card-header">
      <div class="card-logo">
        <img src="${item.logo}" alt="${websiteName}" onerror="this.onerror=null; this.src='../img/logo64.png';" />
      </div>
      <div class="card-title-group">
        <h4 class="website-name">${websiteName}</h4>
        <div class="resource-name">${item.name}</div>
      </div>
    </div>
    <p class="card-description">${item.description}</p>
    <div class="tags">
      ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>
        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>
        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  `;
  
  return card;
}

// 渲染卡片（懒加载）
function renderCards(reset = false) {
  const grid = document.getElementById('cardGrid');
  const loadingIndicator = document.getElementById('loadingIndicator');
  
  if (!grid) {
    console.error('Card grid not found!');
    return;
  }
  
  if (reset) {
    grid.innerHTML = '';
    currentPage = 1;
    allFilteredData = filterCards(cardData);
    console.log(`Filtered data: ${allFilteredData.length} items`);
  }
  
  // 获取当前需要渲染的数据范围
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = currentPage * cardsPerPage;
  
  const cardsToRender = allFilteredData.slice(startIndex, endIndex);
  console.log(`Rendering cards ${startIndex} to ${endIndex}`);
  
  cardsToRender.forEach((item, index) => {
    const card = createCard(item);
    // 添加进入动画类
    card.classList.add('card-animate');
    // 设置交错动画延迟
    card.style.animationDelay = `${index * 0.05}s`;
    grid.appendChild(card);
  });
  
  // 延迟隐藏加载指示器，避免闪烁并确保 DOM 已更新
  setTimeout(() => {
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
    isLoading = false;
    
    // 渲染完成后，检查是否需要继续填充屏幕（如果当前页未填满）
    checkAndFillScreen();
  }, 100);
}

// 自动加载更多卡片
function loadMoreCards() {
  if (isLoading) return;
  
  const totalLoaded = currentPage * cardsPerPage;
  if (totalLoaded >= allFilteredData.length) {
    return;
  }
  
  isLoading = true;
  const loadingIndicator = document.getElementById('loadingIndicator');
  
  if (loadingIndicator) {
    loadingIndicator.style.display = 'flex';
  }
  
  // 使用 requestAnimationFrame 确保流畅加载
  requestAnimationFrame(() => {
    currentPage++;
    renderCards(false);
  });
}

// 筛选卡片
function filterCards(data) {
  return data.filter(item => {
    // 角色筛选
    const matchesRole = selectedRole === 'all' || (item.roles && item.roles.includes(selectedRole));
    if (!matchesRole) return false;

    // 直接从数据中获取品牌名称用于搜索
    const websiteName = item.brand || '未知网站';
    
    // 搜索筛选（按网站名称或描述）
    const matchesSearch = searchTerm === '' || 
      websiteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // 标签筛选
    const matchesTags = selectedTags.size === 0 || 
      item.tags.some(tag => selectedTags.has(tag));
    
    return matchesSearch && matchesTags;
  });
}

// 获取当前环境下所有唯一标签
function getVisibleTags() {
  const tags = new Set();
  // 只根据当前角色过滤可用标签，让搜索结果更精准
  const roleFilteredData = cardData.filter(item => 
    selectedRole === 'all' || (item.roles && item.roles.includes(selectedRole))
  );
  
  roleFilteredData.forEach(item => {
    item.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

// 渲染标签筛选器
function renderTagFilters() {
  const tagFiltersContainer = document.getElementById('tagFilters');
  const visibleTags = getVisibleTags();
  
  tagFiltersContainer.innerHTML = '';
  
  // 如果当前选中的标签在可见标签列表之外（切换角色后可能发生），则清除不在列表中的标签
  const visibleTagsSet = new Set(visibleTags);
  let tagsChanged = false;
  selectedTags.forEach(tag => {
    if (!visibleTagsSet.has(tag)) {
      selectedTags.delete(tag);
      tagsChanged = true;
    }
  });
  if (tagsChanged) saveTagsToStorage();

  visibleTags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.className = 'filter-tag';
    // 如果标签在已选集合中，添加 active 类
    if (selectedTags.has(tag)) {
      tagElement.classList.add('active');
    }
    tagElement.textContent = tag;
    tagElement.addEventListener('click', () => {
      if (selectedTags.has(tag)) {
        selectedTags.delete(tag);
        tagElement.classList.remove('active');
      } else {
        selectedTags.add(tag);
        tagElement.classList.add('active');
      }
      saveTagsToStorage();
      renderCards(true);
    });
    tagFiltersContainer.appendChild(tagElement);
  });
}

// 渲染角色切换器
function renderRoleSwitcher() {
  const roleSwitcherContainer = document.getElementById('roleSwitcher');
  const slider = roleSwitcherContainer.querySelector('.role-slider');
  if (!roleSwitcherContainer) return;

  // 清除旧项（保留 slider）
  const items = roleSwitcherContainer.querySelectorAll('.role-item');
  items.forEach(item => item.remove());
  
  roles.forEach((role, index) => {
    const roleElement = document.createElement('div');
    roleElement.className = `role-item ${selectedRole === role.id ? 'active' : ''}`;
    roleElement.innerHTML = `
      <span class="role-icon">${role.icon}</span>
      <span class="role-name">${role.name}</span>
    `;
    
    roleElement.addEventListener('click', () => {
      if (selectedRole === role.id) return;
      
      selectedRole = role.id;
      updateRoleUI(roleElement);
      
      // 重新渲染标签和卡片
      renderTagFilters();
      renderCards(true);
    });
    
    roleSwitcherContainer.appendChild(roleElement);

    // 初始化时设置滑块位置
    if (selectedRole === role.id) {
      setTimeout(() => updateRoleUI(roleElement, false), 0);
    }
  });
}

// 更新角色切换 UI 和滑块位置
function updateRoleUI(activeElement, animate = true) {
  const roleSwitcherContainer = document.getElementById('roleSwitcher');
  const slider = roleSwitcherContainer.querySelector('.role-slider');
  
  // 更新 active 类
  roleSwitcherContainer.querySelectorAll('.role-item').forEach(el => el.classList.remove('active'));
  activeElement.classList.add('active');
  
  // 计算滑块位置
  const rect = activeElement.getBoundingClientRect();
  const containerRect = roleSwitcherContainer.getBoundingClientRect();
  
  if (!animate) slider.style.transition = 'none';
  slider.style.width = `${rect.width}px`;
  slider.style.left = `${activeElement.offsetLeft}px`;
  if (!animate) {
    // 强制重绘
    slider.offsetHeight; 
    slider.style.transition = '';
  }
}

// 初始化筛选功能
function initFilters() {
  // 渲染角色切换器
  renderRoleSwitcher();

  // 搜索输入框
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderCards(true);
  });
  
  // 清除筛选按钮
  const clearBtn = document.getElementById('clearFilters');
  clearBtn.addEventListener('click', () => {
    searchTerm = '';
    selectedTags.clear();
    saveTagsToStorage();
    searchInput.value = '';
    document.querySelectorAll('.filter-tag').forEach(tag => {
      tag.classList.remove('active');
    });
    renderCards(true);
  });
  
  // 渲染标签筛选器
  renderTagFilters();
}

// 初始化滚动监听和回到顶部按钮
function initScrollFeatures() {
  const scrollContainer = document.getElementById('mainScrollContainer');
  const backToTopBtn = document.getElementById('backToTopBtn');
  
  if (!scrollContainer) {
    console.error('Scroll container not found!');
    return;
  }
  
  // 使用节流优化滚动性能
  let isChecking = false;
  
  // 监听滚动事件
  scrollContainer.addEventListener('scroll', () => {
    // 显示/隐藏回到顶部按钮
    if (scrollContainer.scrollTop > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
    
    if (isChecking) return;
    
    isChecking = true;
    setTimeout(() => {
      // 检查是否滚动到底部，自动加载更多
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      
      // 当距离底部300px时自动加载更多
      if (scrollTop + clientHeight >= scrollHeight - 300) {
        if (!isLoading) {
          loadMoreCards();
        }
      }
      isChecking = false;
    }, 100);
  });
  
  // 回到顶部按钮点击事件
  backToTopBtn.addEventListener('click', () => {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 检查是否需要填充屏幕（如果卡片太少，自动加载更多直到出现滚动条或加载完所有数据）
function checkAndFillScreen() {
  if (isLoading) return;
  
  const scrollContainer = document.getElementById('mainScrollContainer');
  if (!scrollContainer) return;

  // 如果内容高度小于容器高度加上一个阈值，且还有更多数据，则加载更多
  // 使用 offsetHeight 和 scrollHeight 比较
  const hasMoreData = (currentPage * cardsPerPage) < allFilteredData.length;
  const isNearBottom = scrollContainer.scrollHeight <= scrollContainer.clientHeight + 200;

  if (hasMoreData && isNearBottom) {
    loadMoreCards();
  }
}

// 初始化弹性滚动效果 (拉到底部的弹力)
function initElasticScroll() {
  const scrollContainer = document.querySelector('.custom-scrollbar');
  const content = document.querySelector('.elastic-container'); // 将目标从 .content-area 改为 .elastic-container
  const glow = document.getElementById('bottomGlow');
  if (!scrollContainer || !content) return;

  let pullDistance = 0;
  let isMoving = false;

  const updateGlow = (distance) => {
    if (!glow) return;
    const opacity = Math.min(distance / 80, 1);
    const translate = Math.max(0, 100 - (distance / 80) * 100);
    glow.style.opacity = opacity;
    glow.style.transform = `translateY(${translate}%)`;
    glow.style.transition = distance === 0 ? 'opacity 0.6s ease, transform 0.6s ease' : 'none';
  };

  // 鼠标滚轮处理
  scrollContainer.addEventListener('wheel', (e) => {
    // 如果鼠标在标签筛选区域内，且该区域可以滚动，则优先允许标签区域滚动
    const tagFilters = e.target.closest('#tagFilters');
    if (tagFilters) {
      const isScrollable = tagFilters.scrollHeight > tagFilters.clientHeight;
      if (isScrollable) {
        // 检查是否滚动到了标签区域的边界
        const isAtTagTop = tagFilters.scrollTop <= 0;
        const isAtTagBottom = Math.ceil(tagFilters.scrollTop + tagFilters.clientHeight) >= tagFilters.scrollHeight;
        
        // 只有当在标签区域也触及边界且继续向该方向滚动时，才允许冒泡给父容器处理弹性效果
        if ((e.deltaY < 0 && !isAtTagTop) || (e.deltaY > 0 && !isAtTagBottom)) {
          return; // 允许标签区域正常滚动
        }
      }
    }

    const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
    // 检查是否已经滚动到底部
    const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    
    if (isAtBottom && e.deltaY > 0) {
      // 正在向下滚动且已触底
      pullDistance += e.deltaY * 0.15; // 阻尼系数
      if (pullDistance > 80) pullDistance = 80; // 最大拉动距离
      
      content.style.transition = 'none';
      content.style.transform = `translateY(${-pullDistance}px)`;
      
      // 更新发光效果
      updateGlow(pullDistance);
      
      // 清除之前的恢复定时器
      clearTimeout(content.bounceTimer);
      content.bounceTimer = setTimeout(() => {
        content.style.transition = 'transform 0.6s cubic-bezier(0.2, 0, 0.2, 1)';
        content.style.transform = 'translateY(0)';
        pullDistance = 0;
        updateGlow(0);
      }, 100);
      
      // 阻止默认滚动行为，防止页面抖动
      if (e.cancelable) e.preventDefault();
    } else if (pullDistance > 0 && e.deltaY < 0) {
      // 如果处于拉伸状态且向上滚动，快速恢复
      pullDistance = Math.max(0, pullDistance + e.deltaY * 0.5);
      content.style.transform = `translateY(${-pullDistance}px)`;
      updateGlow(pullDistance);
    }
  }, { passive: false });

  // 触摸处理 (针对移动端)
  let startY = 0;
  let isAtBottomTouch = false;

  scrollContainer.addEventListener('touchstart', (e) => {
    const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
    isAtBottomTouch = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    startY = e.touches[0].pageY;
  }, { passive: true });

  scrollContainer.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].pageY;
    const diff = startY - currentY; // 正值表示向上拉
    
    if (isAtBottomTouch && diff > 0) {
      // 触底且向上拉，产生弹性
      pullDistance = Math.pow(diff, 0.65); // 增加拉动阻力
      if (pullDistance > 100) pullDistance = 100;
      
      content.style.transition = 'none';
      content.style.transform = `translateY(${-pullDistance}px)`;
      
      // 更新发光效果
      updateGlow(pullDistance);
      
      if (e.cancelable) e.preventDefault();
    }
  }, { passive: false });

  scrollContainer.addEventListener('touchend', () => {
    if (pullDistance > 0) {
      content.style.transition = 'transform 0.6s cubic-bezier(0.2, 0, 0.2, 1)';
      content.style.transform = 'translateY(0)';
      updateGlow(0);
      pullDistance = 0;
    }
  }, { passive: true });
}

// Dark & Light toggle
const toggleInput = document.getElementById("theme-toggle");

// Initialize theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  document.body.classList.remove("light");
  if (toggleInput) toggleInput.checked = false;
} else {
  document.documentElement.classList.remove("dark");
  document.body.classList.add("light");
  if (toggleInput) toggleInput.checked = true;
}

if (toggleInput) {
  toggleInput.addEventListener("change", () => {
    document.body.classList.add("toggle");
    const isLight = toggleInput.checked;
    
    if (isLight) {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }

    setTimeout(() => {
      setTimeout(
        () => document.body.classList.remove("toggle"),
        10
      );
    }, 5);
  });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  renderCards(true);
  initScrollFeatures();
  checkAndFillScreen();
  initElasticScroll();
});
