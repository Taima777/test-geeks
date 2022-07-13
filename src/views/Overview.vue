<template>
  <div class="overview">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Overview</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              consequuntur consectetur vel odio corrupti quod eligendi
              cupiditate iste numquam totam voluptatum quia, nemo nostrum nihil
              tenetur sit. Fugit, facilis possimus.
            </p>
          </div>
          <div class="col-md-6">
            <img src="/img/svg/overview.svg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss"></style>
