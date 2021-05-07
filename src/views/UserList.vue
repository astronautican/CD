<template>
  <div class="app">
    <h3>Users</h3>
    <div class="searchboxes">
      <input type="text" v-model="search" placeholder="Search title.." />
      <label>Search title:</label>

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
      // orderedList: [],
      userlist: [],
      filteredlist: [],
    };
  },

  created() {
    // Simple GET request using fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => (this.userlist = data));
  },

  computed: {
    orderedList() {
      let orderedList = [...this.userlist].sort((a, b) => {
        if (this.currentOrder === "name") {
          return a.name > b.name ? 1 : -1;
        }
        if (this.currentOrder === "email") {
          return a.email > b.email ? 1 : -1;
        }
      });
      return orderedList;
    },
    filteredList() {
      let filteredList = this.orderedList.filter((user) => {
        return user.name.toLowerCase().includes(this.search.toLowerCase());
      });
      return filteredList;
    },
  },
};
</script>
