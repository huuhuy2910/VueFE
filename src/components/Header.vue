<template>
    <header class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img src="https://png2.cleanpng.com/dy/45e6cd34d6b60489f2a8f4ed3ac6a02e/L0KzQYm3VsEyN5pth5H0aYP2gLBuTgJwgZJxjOs2ZoLodX7zjBdwNZh3eeJxaXOwdLb6ifdvNWZnSddtMHXkRIHqUfM1NmI9TaoDNUG6QYa5WMc1PmM2UKQBNUOxgLBu/kisspng-royalty-free-logo-graphic-design-5b1ed0ea40c1c4.1858851715287462182653.png" alt="Logo" height="60">
          HBX Ads
        </router-link>
        <div class="navbar-nav ms-auto">
          <router-link to="/login" class="nav-link">
            <i class="bi bi-person-circle"></i> Đăng Nhập
          </router-link>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  
  <style scoped>
  </style>
  