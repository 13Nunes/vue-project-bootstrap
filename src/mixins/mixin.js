const mixin = {
  methods: {
    goToRoute(route) {
      this.$router.push({ path: route });
    },
  },
};

export default mixin;
