if ('serviceWorker' in navigator) {
    // 页面加载完成后注册 Service Worker
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker 注册成功，范围:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker 注册失败:', error);
            });
    });
} else {
    console.log('当前浏览器不支持 Service Worker');
}

// }