<template>
    <Layout>
      <template #page-top>
        <div class="theme-default-content content__default">
          <h1>Dhyan Together, Code Better</h1>
          <div
            class="topic-card"
            :key="topic.name"
            v-for="(topic, index) in $topics.list"
          >
            <div class="title-and-summary">
              <h2>
                <router-link :to="topic.path">
                  {{ topic.name }}
                </router-link>
              </h2>
              <p>
                {{ topicDetails[index].summary }}
              </p>
            </div>
            <div class="logo">
              <img
                :src="require(`../../public/images/${topicDetails[index].logo}`)"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </template>
    </Layout>
  </template>
  
  <script>
  import Layout from '@parent-theme/layouts/Layout.vue';
  
  export default {
    components: {
      Layout
    },
  
    computed: {
      topicDetails() {
        const topicsPage = this.$site.pages.filter(
          (page) => page.path === '/topics/'
        );
        return topicsPage[0].frontmatter.topicDetails;
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    margin: 1.875rem 0;
  }
  
  .topic-card {
    display: flex;
    align-items: center;
    border: 0.125rem solid #1B151C;
    box-shadow: 0 0.5rem 1rem 0 #1B151C;
    transition: 0.2s;
    border-radius: 1.875rem;
    margin-top: 3.5rem;
    padding: 0 2rem;
    background-image: radial-gradient(circle at center center, #342134, #161425)
  }
  
  .topic-card:hover {
    box-shadow: 0.125rem 0.5rem 1rem 0.125rem #0b0c0f;
  }
  
  .title-and-summary {
    flex: 8.5;
  }
  
  .logo {
    flex: 1.5;
    padding-top: 1.125rem;
    padding-left: 1.125rem;
    padding-bottom: 1.125rem;
  }
  </style>
  