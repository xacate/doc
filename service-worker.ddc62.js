self.addEventListener('install', (event) => {
  event.waitUntil(

  );
});

self.addEventListener('activate', (event) => {

});


self.addEventListener('fetch', (event) => {
//   event.respondWith(
    // caches.match(event.request).then((cacheRes) => {
    //   // 返回缓存或请求网络
    //   return cacheRes || fetch(event.request).then((fetchRes) => {
    //     // 动态缓存非 GET 请求和大型文件需谨慎
    //     if (event.request.method === 'GET') {
    //       caches.open(DYNAMIC_CACHE).then((cache) => {
    //         cache.put(event.request.url, fetchRes.clone());
    //       });
    //     }
    //     return fetchRes;
    //   }).catch(() => {
    //     // 网络失败时返回离线页面
    //     return caches.match('/offline.html');
    //   });
    // })
//   );
});