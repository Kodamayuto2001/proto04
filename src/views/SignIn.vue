<template>
    <div class="mainvisual">
        <h1>Sign in Page</h1>
        
        <div id="formWrapper">
            <div class="form-item">
            <!-- <p class="formLabel">Email</p> -->
            <input type="email" name="email" id="email" class="form-style" autocomplete="off" placeholder="Email"/>
            </div>
            <div class="form-item">
            <!-- <p class="formLabel">Password</p> -->
            <input type="password" name="password" id="password" class="form-style" placeholder="Password"/>
            <!-- <div class="pw-view"><i class="fa fa-eye"></i></div> -->
            <p><a href="#" ><small>Forgot Password ?</small></a></p>  
            </div>
            <a href="http://localhost:8080/index.html" class="botton">ログイン</a>
        </div>
    </div>
</template>

<style>
div.form-item{
    position: relative;
    display: block; 
    margin-bottom: 20px;
}
input{transition: all .2s ease;}
input.form-style{
    color:#8a8a8a;
    display: block;
    width: 90%;
    height: 44px;
    padding: 5px 5%;
    border:1px solid #ccc;
    -moz-border-radius: 27px;
    -webkit-border-radius: 27px;
    border-radius: 27px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background-color: #fff;
    font-family:'HelveticaNeue','Arial', sans-serif;
    font-size: 105%;
    letter-spacing: .8px;
}
div.form-item .form-style:focus{
    outline: none;
    border:1px solid #58bff6;
    color:#58bff6; 
}
div.form-item p.formLabel {
    position: absolute;
    left:26px;
    top:2px;
    transition:all .4s ease;
    color:#bbb;
}
 #formWrapper{
   /* background: rgba(0,0,0,.2);  */
   width:30%; 
   height:50%; 
   position: absolute; 
   top:400px; 
   /* left:400px; */
   /* right: 400px; */
   margin-left: 650px;
   /* margin-right: 100px; */
   transition:all .3s ease;
}

</style>