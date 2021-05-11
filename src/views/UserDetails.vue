<template>
  <div class="center">
    <div v-if="singleuser.length" class="search-wrapper">
      <div v-for="singleuser in singleuser" :key="singleuser.id">
        <h3 class="mb-5"><a href="/">Users</a> > {{ singleuser.name }}</h3>
        <div class="singleuserboxes">
          <div class="singleuserbox">
            <h3 class="mb-5">Contact Info</h3>
            <p>
              <b-icon icon="person" class="icon"></b-icon>{{ singleuser.name }}
            </p>
            <p>
              <b-icon icon="mailbox" class="icon"></b-icon
              ><a :href="singleuser.email" target="_blank">
                {{ singleuser.email }}</a
              >
            </p>
            <p>
              <b-icon icon="phone" class="icon"></b-icon
              ><a :href="'tel:' + singleuser.phone" target="_blank">{{
                singleuser.phone
              }}</a>
            </p>
            <p>
              <b-icon icon="globe" class="icon"></b-icon>
              <a :href="'https://www.' + singleuser.website" target="_blank">
                {{ singleuser.website }}</a
              >
            </p>
          </div>
          <div class="singleuserbox">
            <h3 class="mb-5">Address</h3>
            <p>
              <b-icon icon="map" class="icon"></b-icon
              >{{ singleuser.address.suite }} {{ singleuser.address.street }},
              {{ singleuser.address.city }},
              {{ singleuser.address.zipcode }}
            </p>
          </div>
          <div class="singleuserbox">
            <h3 class="mb-5">Company</h3>
            <p>{{ singleuser.company.name }}</p>
            <p>{{ singleuser.company.bs }}</p>
            <p class="catchphrase">"{{ singleuser.company.catchPhrase }}"</p>
          </div>
        </div>
        <h3 class="mb-5">Posts By > {{ singleuser.name }}</h3>
        <div class="users-posts">
          <div v-for="item in postsuser" :key="item.id">
            <div class="singleuserpostbox mb-2">
              <h4>{{ item.title }}</h4>
              <b-card-text>
                {{ item.body }}
              </b-card-text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {},
  data() {
    return {
      singleuser: [],
      postsuser: [],
    };
  },
  created() {
    let params = this.$route.params.id;
    // GET request using fetch and url params to get user details
    let URL = `https://jsonplaceholder.typicode.com/users/`;
    fetch(URL + params)
      .then((response) => response.json())
      .then((data) => (this.singleuser = [data]));
    // GET request using fetch and url params to get users posts
    let POSTS = `https://jsonplaceholder.typicode.com/posts?userId=`;
    fetch(POSTS + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.postsuser = data));
  },
};
</script>
