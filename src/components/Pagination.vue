<template>
  <div class="VuePagination" :class="props.theme.wrapper">
    <nav :class="props.theme.nav">
      <ul v-show="props.showPagination" :class="props.theme.list">
        <li
          v-for="page in props.pages"
          :key="page"
          :class="props.pageClasses(page)"
          v-on="props.pageEvents(page)"
        >
          <button
            type="button"
            v-bind="props.aProps"
            :class="props.theme.link"
            @click="this.setActiveClass(page)"
          >
            {{ "0" + page }}
          </button>
        </li>
        <li @click="props.setNextChunk">
          <button type="button" v-bind="props.nextChunkProps">...</button>
        </li>
        <li :class="props.theme.next" @click="props.setNextPage">
          <button type="button" class="next" v-bind="props.nextProps">
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MyPagination",
  props: ["props"],
  methods: {
    setActiveClass() {
      var current = document.getElementsByClassName("active");

      if (current.length > 0 && this.current[0] !== this) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    },
  },
};
</script>

<style scoped>
.VuePagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 7%;
}
ul {
  list-style: none;
  flex-direction: row;
  display: flex;
}
button {
  background: white;
  border: 1px solid #e0e0e0;
  color: #333333;
  width: 50px;
  height: 50px;
  font-weight: 400;
  font-size: 15px;
}
.active button {
  background: var(--gradient-button);
  color: white;
  border: 0px;
}
.next {
  width: 75px;
}
li {
  padding: 3px;
}
</style>
