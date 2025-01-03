
<template>
  <div class="flex gap-2 justify-left flex-wrap">
    <SocialShare
      v-for="network in ['facebook', 'twitter', 'bluesky']"
      :key="network"
      :network="network"
      :styled="true"
      :label="false"
      class="rounded text-white"
    />
  </div>
</template>
