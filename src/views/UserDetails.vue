<template>
  <div class="center">
    <div v-if="singleuser.length" class="search-wrapper">
      <div v-for="singleuser in singleuser" :key="singleuser.id">
        <h3 class="mb-5"><a href="/">Users</a> > {{ singleuser.name }}</h3>
        <div class="singleuserboxes">
          <div class="singleuserbox">
            <h3 class="mb-5">Contact Info</h3>
            <p>Name:{{ singleuser.name }}</p>
            <p>
              Email:<a :href="singleuser.email" target="_blank">
                {{ singleuser.email }}</a
              >
            </p>
            <p>
              Phone:<a :href="singleuser.email" target="_blank">{{
                singleuser.phone
              }}</a>
            </p>
            <p>
              Website:
              <a :href="singleuser.website" target="_blank">
                {{ singleuser.website }}</a
              >
            </p>
          </div>
          <div class="singleuserbox">
            <h3 class="mb-5">Address</h3>
            <p>
              {{ singleuser.address.suite }} {{ singleuser.address.street }},
              {{ singleuser.address.city }},
              {{ singleuser.address.zipcode }}
            </p>
          </div>
          <div class="singleuserbox">
            <h3 class="mb-5">Company</h3>
            <p>{{ singleuser.company.name }}</p>
            <p>{{ singleuser.company.bs }}</p>
            <p>{{ singleuser.company.catchPhrase }}</p>
          </div>
        </div>
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
    let URL = `http://jsonplaceholder.typicode.com/users/`;
    let POSTS = `http://jsonplaceholder.typicode.com/posts?userId=`;
    fetch(URL + params)
      .then((response) => response.json())
      .then((data) => (this.singleuser = [data]));

    fetch(POSTS + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.postsuser = data));
  },
};
</script>
