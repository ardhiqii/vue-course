<template>
   <header>
      <h1>List Active Users</h1>
   </header>
   <div class="">
      <h2>{{ username }}</h2>
      <h3>{{ age }}</h3>
   </div>
</template>

<script>
export default {
   props:{
      username:{
         type:String,
         required: true
      },
      age:{
         type: Number,
         required: true
      }
   }
}
</script>