<template>
  <div class="header">
    <img alt="Vue logo" src="./assets/logo.png" class="text-logo">
    <div id="nav">
      <router-link to="/" class="link">Home</router-link> | 
      <router-link to="/signin" class="link">Sign in</router-link> |
      <router-link to="/presenter" class="link">presenter</router-link> |
      <router-link to="/participant" class="link">participant</router-link> |
      <router-link to="/customize" class="link">customize</router-link> |
      <router-link to="/mobilephone" class="link">mobilephone</router-link>
    </div>
  </div>

  
  <router-view />

</template>

<style>

.header {
  width: 100%; /* 幅いっぱいを指定 */
  height: 70px; /* 高さを50pxに指定 */
  padding: 16px 32px; /* ヘッダーに上下左右それぞれ余白を指定 */
  box-sizing: border-box; /* padding分を含んで幅を100%にするため */
  position: fixed; /* ウィンドウを基準に画面に固定 */
  top: 0; /* 上下の固定位置を上から0pxにする */
  left: 0; /* 左右の固定位置を左から0pxにする */
  display: flex; /* 中の要素を横並びにする */
  align-items: center; /* 中の要素を上下中央に並べる */
  /* background-color: #321E10; */
  background-color: #111032;
  /* color:white; */
}
.header a.link {
  color: #DDD;
  text-decoration:none; 
  display: inline-block;
  position: relative;
  /* font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; */
  font-family: "Maison Neue Book","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: bold;
  
}
.header a.link::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background: #DDD;
  transform: scale(0,1);
  transform-origin: left top;
  transition: transform .2s;
}
.header a.link:hover::after {
  transform: scale(1,1);
}
.header img {
  height: 50px;
  width: 50px;
  padding-right: 30px;
}

.mainvisual {
    padding-top: 100px;
}

h1 {
    font-size: 100px;
}

.botton {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  /* background: #42b983; */
  background: #57558B;
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.05);
  font-weight: bold;
  height: 40px;
  /* border: solid 0px #d27d00; */
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all  0.3s ease;
}
.botton:hover {
  background-color: #8610A8;
  padding: 20px;
  font-size: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>