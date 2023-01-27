<script setup>
const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  userInfos: {
    posts: {
      type: Number,
      required: true,
    },
    followers: {
      type: Number,
      required: true,
    },
    following: {
      type: Number,
      required: true,
    },
  },
});
</script>

<template>
  <div class="userbar_container">
    <div class="userbar_container_top">
      <a-typography-title :level="2">{{ props.username }}</a-typography-title>
    </div>

    <div class="userbar_container_bottom">
      <a-typography-title :level="5"
        >{{ props.userInfos.posts }} posts</a-typography-title
      >
      <a-typography-title :level="5"
        >{{ props.userInfos.followers }} followers</a-typography-title
      >
      <a-typography-title :level="5"
        >{{ props.userInfos.following }} following</a-typography-title
      >
    </div>
  </div>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
p {
  color: whitesmoke;
}

.userbar_container {
  display: flex;
  flex-direction: column;
}

.userbar_container_bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}

.userbar_container_bottom h5 {
  margin-right: 1rem;
  margin-top: 1rem;
}
</style>
