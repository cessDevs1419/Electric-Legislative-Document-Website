<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <iframe
    :src="src"
    type="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    width="100%"
    height="100%"
  ></iframe>
</template>

<style scoped></style>
