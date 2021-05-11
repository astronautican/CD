<template>
  <div class="app">
    <div class="header">
      <h3 class="title">Users</h3>
      <div class="searchboxes">
        <div class="search-box">
          <label for="name">Search</label>
          <input type="text" v-model="search" placeholder="Search list" />
        </div>
        <div class="select-box">
          <label for="name">Sort by</label>
          <select v-model="currentOrder">
            <option value="name">Sort by Name</option>
            <option value="username">Sort by Username</option>
            <option value="email">Sort by email</option>
          </select>
        </div>
      </div>
    </div>
    <div v-for="item in filteredList" :key="item.id">
      <router-link
        class="userboxlink"
        :to="{ name: 'user', params: { id: item.id } }"
      >
        <div class="user-box">
          <ul class="users-listitem">
            <div class="user-name">
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
                <b-icon icon="mailbox" class="icon"></b-icon>{{ item.email }}
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
  },

  data() {
    return {
      search: "",
      currentOrder: "name",
      userlist: [],
      filteredlist: [],
    };
  },

  created() {
    // GET request using fetch to get users list
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => (this.userlist = data));
  },

  computed: {
    // Create ordered list from dropdown selection
    orderedList() {
      let orderedList = [...this.userlist].sort((a, b) => {
        if (this.currentOrder === "name") {
          return a.name > b.name ? 1 : -1;
        }
        if (this.currentOrder === "username") {
          return a.username > b.username ? 1 : -1;
        }
        if (this.currentOrder === "email") {
          return a.email > b.email ? 1 : -1;
        }
      });
      return orderedList;
    },
    // Create filtered list from text input searching name, username, email
    filteredList() {
      let filteredList = this.orderedList.filter((user) => {
        return (
          user.name.toLowerCase().includes(this.search.toLowerCase()) ||
          user.username.toLowerCase().includes(this.search.toLowerCase()) ||
          user.email.toLowerCase().includes(this.search.toLowerCase())
        );
      });
      return filteredList;
    },
  },
};
</script>
