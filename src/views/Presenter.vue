<template>
    <div class="mainvisual">
        <h1>参加人数：{{number}}人</h1>

        <div class="logo">
            <img src="../assets/volume.svg" alt="音量のロゴ" class="vol-logo">
        </div>
        
        <div class="volume">
            <h2>音量：{{vol}}</h2>
            <input type="range" name="speed" min="0" max="1000" class="slider">
        </div>
        
    </div>
</template>

<style>


/* .volume {
    position: absolute;
    margin-left: 200px;
    margin-top: 300px;
    /* background-color: turquoise; */
    /* width: 300px;
    display: inline;
}

.slider {
    width: 300px;
    height: 50px;
    /* background-color: tomato; */
    /* display: inline;
}

.logo {
    bottom: 100px;
    height: 100px;
    width: 100px;
    background-color: teal;
    /* display: inline; */
/* }

.vol-logo {
    left: 0;
    /* position: absolute; */
    /* width: 100%;
    height: 100%;
    display: inline;
/* } */ 

</style>
