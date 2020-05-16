<template>
  <div class="flex">
    <SidebarWrapper class="sticky top-0 h-full w-side-xl" />
    <div class="w-full">
      <Form class="w-full overflow-y-scroll scrollbar" />
      <NotesInputs/>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";
import NotesInputs from "@/components/Notes/NotesInputs";
import SidebarWrapper from "@/components/SideBar/SidebarWrapper";
export default {
  components: {
    Form,NotesInputs,
    SidebarWrapper
  }
};
</script>

<style></style>
