<template>
  <el-form :inline="true" :model="formInline" size="small">
    <el-form-item label="用户信息">
      <el-input
        class="input"
        v-model="formInline.username"
        placeholder="用户名"
      ></el-input>
      <el-input
        class="input"
        v-model="formInline.email"
        placeholder="email"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmitGet">get 查询所有</el-button>
      <el-button type="primary" @click="onSubmitPost">post 提交</el-button>
    </el-form-item>
    <el-input
      type="textarea"
      :rows="6"
      placeholder="此处返回结果"
      v-model="results"
      class="textarea"
    >
    </el-input>
  </el-form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formInline: {
        username: "",
        email: "",
      },
      results: "",
    };
  },
  methods: {
    onSubmitGet() {
      console.log(import.meta.env.VITE_SOME_KEY); // 123
      console.log(import.meta.env.DB_PASSWORD); // undefined
      console.log(import.meta.env.BASE_URL); // 查看BASE_URL 默认是/
      console.log(import.meta.env); 
      console.log("submit! get");
      axios.get("users.json")
      .then((res) => {
          this.results = JSON.stringify(res.data);
          console.log(res.data); //在console中看到数据
        })
        .catch((res) => {
          alert("wrong");
        });
    },
    onSubmitPost() {
      console.log("submit! post");
      axios.post("users.json", this.formInline)
      .then((res) => {
         console.log(res.data); //在console中看到数据
        })
        .catch((res) => {
          alert("wrong");
        });
    },
  },
};
</script>

<style scoped>
.input {
  width: 200px;
}
button {
  width: 100px;
}
.textarea {
  width: 900px;
}
</style>