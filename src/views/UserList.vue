<template>
  <div class="app">
    <div class="searchboxes">
      <div v-if="userlist.length" class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search title.." />
        <label>Search title:</label>
      </div>

      <select v-model="currentOrder">
        <option value="name">Sort by Name</option>
        <option value="email">Sort by email</option>
      </select>
    </div>

    <div v-for="item in filteredList" :key="item.id">
      <router-link :to="{ name: 'user', params: { id: item.id } }">
        <div class="user-box">
          <ul class="users-listitem">
            <div class="user-name">
              <span class="dot"></span>
              <div class="nameusername">
                <li>
                  {{ item.name }}
                </li>
                <li>
                  {{ item.username }}
                </li>
              </div>
            </div>
            <div>
              <li>
                {{ item.email }}
              </li>
            </div>
          </ul>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  props: {
    msg: String,
    // userList: {},
  },

  data() {
    return {
      search: "",
      currentOrder: "name",
      userlist: {},
    };
  },

  created() {
    // Simple GET request using fetch
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => (this.userlist = data));
  },

  computed: {
    filteredList() {
      return this.userlist
        .filter((user) => {
          return user.name.toLowerCase().includes(this.search.toLowerCase());
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.flex {
  display: flex;
  flex-direction: column;
}

.users {
  display: flex;
  flex-direction: column;
}
</style>
