<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <iframe :src="src" width="100%" height="100%"></iframe>
</template>

<style scoped></style>
