const mixin = {
  methods: {
    makePledge(product, pledge, amount) {
      console.log("product :>> ", product);
      console.log("pledge :>> ", pledge);
      console.log("amount :>> ", amount);

      product.goal.backed += parseInt(amount);
      product.goal.backers += 1;

      pledge.left -= 1;
    },
  },
};

export default mixin;
