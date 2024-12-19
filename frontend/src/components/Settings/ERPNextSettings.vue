<template>
  <SettingsPage
    doctype="AiBizzApp ERP CRM Settings"
    :title="__('AiBizzApp ERP Settings')"
    :successMessage="__('AiBizzApp ERP Settings updated')"
    class="p-8"
  />
</template>
<script setup>
import SettingsPage from '@/components/Settings/SettingsPage.vue'
</script>