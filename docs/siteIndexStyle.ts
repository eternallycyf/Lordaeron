const style = `
  .snow-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.02);
    pointer-events: none;
    z-index: 100;
  }
  html[data-prefers-color="dark"] .__dumi-default-layout-hero, html[data-prefers-color="light"] .__dumi-default-layout-hero {
  padding: 140px 0;
  background-image: linear-gradient(          
    140deg,          
    #322c7a,          
    #37327a,          
    #ba7db5,          
    #bf83b6,          
    #472e6c,          
    #4038a8        
  )
}
#root p{
  font-family: "dm", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
html[data-prefers-color="dark"] .__dumi-default-layout-hero h1, html[data-prefers-color="light"] .__dumi-default-layout-hero h1 {
  color: #f3f3f3;
  text-shadow: 0 4px 15px rgb(0 0 0 / 30%);
  font-size: 150px;
  margin-bottom: 50px;
}
@media screen and (max-width:767px) {
  html[data-prefers-color="dark"] .__dumi-default-layout-hero h1, html[data-prefers-color="light"] .__dumi-default-layout-hero h1 {
    font-size: 100px;
  }
}
html[data-prefers-color="dark"] .__dumi-default-layout-hero .markdown, html[data-prefers-color="light"] .__dumi-default-layout-hero .markdown {
  margin-top: 40px;
  color: #eee;
  text-shadow: 0 2px 5px rgba(0,0,0,.3);
}
html[data-prefers-color="dark"] .__dumi-default-layout-hero {
  background-color: hsla(0,0%,100%,.08);
}
.__dumi-default-layout-content {
  max-width: 100% !important;
}
html[data-perfers-color="dark"] .__dumi-default-previewer{
  border-color: #504f4f !important;
  background-color: #2b2b2b !important;
}
html[data-perfers-color="dark"] .__dumi-default-previewer .__dumi-default-previewer-actions {
  border-top: none !important;
}
.dumi-default-sidebar::-webkit-scrollbar {
  width: 4px;    
  /*height: 4px;*/
}
.dumi-default-sidebar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.dumi-default-sidebar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}
.__dumi-default-menu-list li {
  font-size: 14px;
}
.__dumi-default-navbar-logo {
  height: 60px !important;
  line-height: 60px !important;
}
.__dumi-default-navbar-logo:not([data-plaintext]) {
  padding-left: 66px !important;
}
.dumi-default-hero {
  user-select: none;
  margin: -96px auto -300px auto !important;
}
.dumi-default-hero >.dumi-default-hero-title {
  animation: shake 1s infinite cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
.dumi-default-hero >.dumi-default-hero-title > span{
  background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
}
@keyframes shake {
0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.dumi-default-sidebar > dl > dd {
  padding: 20px 0 !important;
}
.dumi-default-sidebar > dl > dd a {
  font-size: 14px !important;
}
.dumi-default-sidebar {
  width: 280px !important;
}
.dumi-default-header-left {
  width: 304px !important;
}
.dumi-default-navbar > li > a {
  font-size: 14px !important;
}
.dumi-default-logo img {
  height: 60px !important;
}
`;

export default style;
