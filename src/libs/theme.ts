export function listenSystemThemes() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  prefersDarkScheme.addEventListener('change', () => {
    const isDark = prefersDarkScheme.matches;
    toggleTheme(isDark);
  });
}

export function toggleTheme(isDark: boolean) {
  const theme = isDark ? 'dark' : 'light';

  // 更新本地存储
  window && window.localStorage.setItem('theme', theme);

  // 切换页面类
  document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark');
  document.documentElement.classList.add(theme === 'dark' ? 'dark' : 'light');

  // 更新按钮文本
  const themeButton = document.getElementById('theme-btn');
  themeButton && (themeButton.textContent = theme === 'dark' ? '切换到白色主题' : '切换到黑色主题');
}

export function getCurrentTheme() {
  return window && window.localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}