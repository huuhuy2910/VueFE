<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Đăng Nhập</div>
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="username" class="form-label">Tên đăng nhập:</label>
                  <input type="text" v-model="username" class="form-control" id="username" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Mật khẩu:</label>
                  <input type="password" v-model="password" class="form-control" id="password" required>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary">Đăng nhập</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Thêm logic đăng nhập của bạn ở đây
        console.log('Đã đăng nhập');
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  