<template></template>

<script>

import {fb} from "../firebase";

export default {
  name: "Login",
  props: {
    msg: String,//show login as message not form 
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },

  methods: {
    register() {
      fb
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) =>{
            this.$router.replace('admin');

        } )
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
