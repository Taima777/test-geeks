<template>
  <div class="home">
    <Navbar></Navbar>
      <Hero/>
      <Products/>

      <div class="containers h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/svg/product(2).svg" alt="" width="400">
          </div>
          <div class="col-md-6">
            <h3>Learn More About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum, incidunt tempora eos deserunt nihil! Maxime nam, cumque modi explicabo magni assumenda voluptatum adipisci, debitis, deserunt dolore est! Esse, adipisci.
            </p>
              <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
          </div>

        </div>

      </div>
  </div>
</template>

<script>
//@ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/section/Products.vue";

export default{
  name: "home",
  components: {
        Hero,
        Products

    }
};
</script>

<style>

</style>