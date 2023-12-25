<template>
  <footer v-if="$page.path" class="footer" :class="checkSidebarAuto">
    <div class="icons">
      <div class="no-wrap-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <!-- Github -->
          <svg t="1625711611350" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2770"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" class="vp-icon">
            <defs>
              <style type="text/css"></style>
            </defs>
            <path
              d="M64.6 512c0 195.6 125.4 361.9 300.1 422.9 23.5 5.9 19.9-10.8 19.9-22.2v-77.6c-135.8 15.9-141.3-74-150.5-89-18.5-31.5-61.9-39.5-49-54.5 31-15.9 62.5 4 98.9 58 26.4 39.1 77.9 32.5 104.1 26 5.7-23.5 17.9-44.5 34.7-60.9-140.7-25.2-199.4-111.1-199.4-213.3 0-49.5 16.4-95.1 48.4-131.8-20.4-60.6 1.9-112.4 4.9-120.1 58.2-5.2 118.5 41.6 123.3 45.3 33.1-8.9 70.8-13.7 112.9-13.7 42.4 0 80.3 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.4-43.9 2.9 7.7 24.7 58.3 5.5 118.1 32.5 36.8 49 82.8 49 132.4 0 102.3-59 188.3-200.2 213.2 23.5 23.3 38.1 55.5 38.1 91.1v112.7c0.8 9 0 17.9 15.1 17.9C832.7 877 960.4 709.4 960.4 512.1c0-247.5-200.6-447.9-447.9-447.9C265 64.1 64.6 264.5 64.6 512z"
              p-id="2771"></path>
          </svg>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <!-- X -->
          <svg xmlns="http://www.w3.org/2000/svg" class="vp-icon" viewBox="0 0 24 24">
            <g fill="none" stroke="#e6e6e6" stroke-width="1.5">
              <path
                d="M16.82 20.768L3.753 3.968A.6.6 0 0 1 4.227 3h2.48a.6.6 0 0 1 .473.232l13.067 16.8a.6.6 0 0 1-.474.968h-2.48a.6.6 0 0 1-.473-.232Z" />
              <path stroke-linecap="round" d="M20 3L4 21" />
            </g>
          </svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <!-- Discord -->
          <svg xmlns="http://www.w3.org/2000/svg" class="vp-icon" viewBox="0 0 24 24">
            <g fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path d="M5.5 16c5 2.5 8 2.5 13 0"></path>
              <path d="m15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5c-1.5-1-4-1.5-4-1.5l-1 2h-2"></path>
              <path d="m8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5c1.5-1 4-1.5 4-1.5l1 2h2"></path>
              <path
                d="M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2s1.5.895 1.5 2s-.672 2-1.5 2m7 0c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2s1.5.895 1.5 2s-.672 2-1.5 2">
              </path>
            </g>
          </svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <!-- Odysee -->
          <svg xmlns="http://www.w3.org/2000/svg" class="vp-icon" viewBox="0 0 512 512">
            <path
              d="M406.7 463c-42.3 30.8-94.4 49-150.7 49c-111.1 0-205.7-70.8-241.1-169.8c2.4 1.7 5.9 3.6 7.9 4.4c16.3 7.4 40.1-5.4 62.9-28.7c6.9-6.9 14.4-12.4 22.8-17.3c18.3-11.9 37.6-20.8 58.4-27.2c0 0 22.3 34.2 43.1 74.8s-22.3 54-27.2 54c-.3 0-.8 0-1.5-.1c-11-.5-70-3-56 51.1c14.9 57.4 97.5 36.6 139.6 8.9s31.7-118.3 31.7-118.3c41.1-6.4 54 37.1 57.9 59.4c.8 4.6 1.1 9.9 1.4 15.5c1.1 21.2 2.3 45.6 35.3 46.4c5.3 0 10.6-.8 15.5-2zm-95.3-23.7c-2-.5-3.5-2.5-3-5c1-2.5 3-3.5 5-3s3.5 3 3 5s-2.5 3.5-5 3m-207-95.6c1.5-.5 3.5 1 4 3c0 2-1 4-3 4c-1.5.5-3.5-1-4-3c-.5-1.5 1-3.5 3-4M451.8 421c37.5-44.6 60.2-102.2 60.2-165c0-67.5-26.1-128.9-68.8-174.7c-.1 23.5-6.1 48.2-16.8 69.2c-11.9 20.3-49 58.9-69.8 78.7c-.7.3-1.1.9-1.5 1.4c-.2.2-.3.4-.5.6c-5 6.9-4 16.8 3 21.8c21.3 15.8 56.4 45.6 59.4 72.8c3.5 34.9 27.9 75.6 34.2 86.2c.8 1.3 1.3 2.1 1.4 2.4c0 2.2-.4 4.3-.8 6.5zm-61.1-170c-.5 3 1 5.9 4 6.4s5.9-1 6.4-4s-1-5.9-4-6.4c-3-1-5.9 1-6.4 4m61.4-60.9l-11.4 5.4l-3 12.9l-5.4-11.4l-12.9-3l11.4-5.4l3-12.9l5.4 11.4zM395.5 41.3c-16.2 8.2-22.1 32.8-29 61.4c-.3 1.4-.7 2.8-1 4.2c-9.5 38.5-30.6 37.6-41.7 37.2c-1.1 0-2-.1-2.9-.1c-5.1 0-6-4-8.9-17.1c-2.6-12.1-6.9-32-17.9-63.6c-22.7-65.8-82.7-49.4-128.2-22.2c-55.3 33.1-34.4 101.9-19.8 149.4c.7 2.2 1.4 4.4 2 6.6c-4 4-13.8 7.5-26 11.9c-12.1 4.3-26.6 9.5-40.3 16.9c-33.9 18-70.3 49-79.8 62.6C.7 277.8 0 267 0 256C0 114.6 114.6 0 256 0c51.4 0 99.4 15.2 139.5 41.3M58.9 189.6c-1.5-2-4.5-3-6.4-1.5s-3 4.5-1.5 6.4s4.5 3 6.4 1.5c2.5-1.5 3-4.5 1.5-6.4M327.3 64.9c2-1.5 5-.5 6.4 1.5c1.5 2.5 1 5.4-1.5 6.4c-2 1.5-5 .5-6.4-1.5s-.5-5 1.5-6.4M95.1 105c-.5 1.5.5 3 2 3c1.5.5 3-.5 3-2c.5-1.5-.5-3-2-3s-3 .5-3 2m84.7-.5c-3.5-43.1 37.1-54 37.1-54c44.1-15.4 56 5.9 66.4 37.6s3 42.6-38.6 58.9s-61.9-4.5-64.9-42.6zm89.6 14.9h1c2.5 0 5-2 5-5c2-6.9 1-14.4-2-20.8c-1.5-2-4-3.5-6.4-2.5c-3 1-4.5 4-3.5 6.9c2 4.5 3 9.9 1.5 14.9c-.5 3 1.5 5.9 4.5 6.4zm-9.9-41.6c-2 0-4-1-5-3s-2-3.5-3-5c-2-2-2-5.4 0-7.4s5.4-2 7.4 0c2 2.5 3.5 5 5 7.4s.5 5.9-2.5 7.4c-.6 0-1 .2-1.3.3c-.2.1-.4.2-.6.2z" />
          </svg>
        </a>
      </div>
      <div class="wrap-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <!-- LinkedIn -->
          <svg xmlns="http://www.w3.org/2000/svg" class="vp-icon" viewBox="0 0 24 24">
            <g fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5M7 17v-7" />
              <path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" />
            </g>
          </svg>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <!-- YouTube -->
          <svg xmlns="http://www.w3.org/2000/svg" class="vp-icon" viewBox="0 0 32 32">
            <path
              d="M16 6c-3.766 0-7.094.39-9.125.688c-1.68.246-3.035 1.511-3.344 3.187C3.27 11.301 3 13.387 3 16s.27 4.7.531 6.125c.309 1.676 1.664 2.945 3.344 3.188c2.04.296 5.379.687 9.125.687c3.746 0 7.086-.39 9.125-.688c1.68-.242 3.035-1.511 3.344-3.187c.261-1.43.531-3.52.531-6.125s-.266-4.695-.531-6.125c-.309-1.676-1.664-2.941-3.344-3.188C23.094 6.391 19.765 6 16 6m0 2c3.633 0 6.879.371 8.844.656A1.966 1.966 0 0 1 26.5 10.25c.242 1.32.5 3.277.5 5.75c0 2.469-.258 4.43-.5 5.75a1.957 1.957 0 0 1-1.656 1.594C22.87 23.629 19.609 24 16 24c-3.61 0-6.875-.371-8.844-.656A1.962 1.962 0 0 1 5.5 21.75C5.258 20.43 5 18.477 5 16c0-2.48.258-4.43.5-5.75a1.962 1.962 0 0 1 1.656-1.594C9.117 8.371 12.367 8 16 8m-3 2.281V21.72l1.5-.844l7-4L23 16l-1.5-.875l-7-4zm2 3.438L18.969 16L15 18.281z" />
          </svg>
        </a>
      </div>
    </div>
    <p class="made-by">Made with passion by <a href="https://github.com/Bijit-Mondal">Bijit Mondal</a>. Theme by <a href="#">codemonkeysio</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  computed: {
    checkSidebarAuto: function () {
      return {
        'is-sidebar-active':
          this.$route.path.includes('/notes/') ||
          this.$route.path.includes('/contact/') ||
          this.$route.path.includes('/resources/') ||
          this.$page.regularPath.includes('_posts')
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.footer
  display: flex
  flex-direction: column
  align-items: center
  padding: 2.5rem 2.5rem 2rem
  .icons > a:not(:last-child)
    margin-right: 4.6875rem
  .icons
    display: flex
    margin-bottom: 1.75rem
    min-width: 12.5rem
    font-size: 2rem
    svg:hover
      fill: $accentColor
    .no-wrap-icons
      display: inline-flex
    .wrap-icons
      display: inline-flex
    svg
      fill: $textColor
    svg:hover
      fill: $accentColor
  .made-by
    text-align: center
    margin: 0
.is-sidebar-active
  padding-left: 22.5rem

@media (max-width: $MQNarrow)
  .is-sidebar-active
    padding-left: 18.9rem

@media (max-width: 61.25rem)
  .is-sidebar-active
    padding-left: 2.5rem

@media (min-width: 61.3125rem) and (max-width: 72.9375rem)
  .is-sidebar-active
    .icons
      flex-wrap: wrap
      .no-wrap-icons
        width: 100%
        justify-content: space-between
      .wrap-icons
        padding-top: 1.75rem
        width: 100%
        justify-content: space-evenly
        a:nth-child(1)
          margin-left: 0
          rfs-margin-right(4.6875rem)
        a:nth-child(2)
          margin-left: 0

@media (max-width: 39.0625rem)
  .icons
    flex-wrap: wrap
    .no-wrap-icons
      width: 100%
      justify-content: space-between
    .wrap-icons
      padding-top: 1.75rem
      width: 100%
      justify-content: space-evenly
      a:nth-child(1)
        margin-left: 0
        rfs-margin-right(4.6875rem)
      a:nth-child(2)
        margin-left: 0
</style>