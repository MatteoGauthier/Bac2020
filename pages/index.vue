<template>
  <div class="flex">
    <SidebarWrapper class="h-full w-side-xl" />
    <Form class="w-full overflow-y-scroll scrollbar" />
  </div>
</template>

<script>
import Form from "@/components/Form";
import SidebarWrapper from "@/components/SideBar/SidebarWrapper";
export default {
  components: {
    Form,
    SidebarWrapper
  }
};
</script>

<style></style>
