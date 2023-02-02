<template>
    <header>
        <router-link to="/">
            <h1>Vue<span>Movies</span></h1>
        </router-link>
    </header>
    <main>
       <router-view/>
    </main>
</template>
<script setup>

</script>

<style>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    background: #35495e;
}

a{
    text-decoration: none;
}

header{
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 18px 16px;
    background-color: #2c3d4e;
    box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
}

h1{
    color: #fff;
    font-size:28px;
}

span{
        color:#42B883;
    }
</style>