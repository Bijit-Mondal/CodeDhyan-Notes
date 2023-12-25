<template>
    <Layout>
        <template #page-top>
            <div class="theme-default-content">
                
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
    data() {
        return {
            sidebar: true
        }
    }
};
</script>

<style></style>