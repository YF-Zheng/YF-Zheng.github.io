'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('yanfengzheng25@stu.pku.edu.cn');
    status.textContent = '已复制邮箱';
  } catch {
    status.textContent = '请点击邮箱地址，或手动复制。';
  }
});
