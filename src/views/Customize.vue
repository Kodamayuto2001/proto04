<template>
    <div class="container">
        <div class="card">
            <div class="circle">
                <h2>01</h2>
            </div>
            <div class="content">
                <p>「パチパチパチパチ」と拍手音がプレゼンターに流れます。</p>
                <a href="#">押す</a>
            </div>
        </div>

        <div class="card">
            <div class="circle">
                <h2>02</h2>
            </div>
            <div class="content">
                <p>「パチパチパチパチ」と拍手音がプレゼンターに流れます。</p>
                <a href="#">押す</a>
            </div>
        </div>

        <div class="card">
            <div class="circle">
                <h2>03</h2>
            </div>
            <div class="content">
                <p>「パチパチパチパチ」と拍手音がプレゼンターに流れます。</p>
                <a href="#">押す</a>
            </div>
        </div>

        <div class="card">
            <div class="circle">
                <h2>04</h2>
            </div>
            <div class="content">
                <p>いろいろな音をカスタマイズすることができます。</p>
                <a href="#">押す</a>
            </div>
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
* 
{
    margin: 0%;
    padding: 0;
    /* box-sizing: border-box; */
    font-family: "Poppins", sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(45deg,#7ec2b8,#243734);
    background-attachment: fixed;
}

.container
{
    position: relative;
    width: 1150px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.container .card{
    position: relative;
    width: 300px;
    height: 420px;
    background: #fff;
    margin: 20px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
}

.container .card .circle {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
    clip-path: circle(180px at center 0);
    text-align: center;
}

.container .card .circle h2 {
    color: #fff;
    font-size: 4.5em;
    padding: 30px 0;
}
.container .card .content {
    position: absolute;
    bottom: 10px;
    padding-bottom: 20px;
    text-align: center;
}
.container .card .content p {
    color: #666;
}
.container .card .content a {
    position: relative;
    display: inline-block;
    padding: 10px,20px;
    background: #000;
    color: #fff;
    border-radius: 40px;
    text-decoration: none;
    margin-top: 50px;
    font-size: 2.0em;
    height: 50px;
    width: 200px;

}

.container .card:nth-child(1) .circle,
.container .card:nth-child(1) .content a {
    background: #ffaf00;
}
.container .card:nth-child(2) .circle,
.container .card:nth-child(2) .content a {
    background: #da2268;
}

</style>