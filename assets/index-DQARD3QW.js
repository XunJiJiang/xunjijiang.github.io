import{a as h,r as u,w,J as m,d as s,h as g,o as y,c as e,f as d,v as p,g as C,i as k,e as r,b as c,T as j}from"./index-CaEqWHby.js";import{u as U,b as f}from"./background-BsYeKfqW.js";function B(o={visible:"eye",invisible:"eye_close"}){const a=h(!1),t=u({type:"password",icon:o.invisible,toggle(){a.value=!a.value}});return w(()=>a.value,i=>{i?(t.type="text",t.icon=o.visible):(t.type="password",t.icon=o.invisible)}),t}const L="/assets/verification-code-example-pPrqjaCD.png",T=m("div",{height:"100%","& form":{width:"100%",height:"100%","& ul":{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around","& li":{width:"100%",position:"relative","& input":{width:"90%",height:"40px",margin:"10px 0",padding:"0 10px",border:"1px solid #ccc",backgroundColor:"#ffffff00",'&[name="password"]':{},'&[name="verificationCode"]':{},'&[name="submit"]':{height:"40px",margin:"10px 0",padding:"0 10px",border:"none",borderRadius:"5px",background:"linear-gradient(0deg, #8ca4d4 0%, #baa3ca 60%)",color:"#fff","font-size":"1.4em","letter-spacing":"1em","text-indent":"1em","text-align":"center",cursor:"pointer",transition:"all 0.3s","&:hover":{background:"linear-gradient(0deg, #8ca4d4aa 0%, #baa3caaa 60%)"},"&[disabled]":{background:"#00000033",color:"#ffffff99",cursor:"not-allowed"},'&[value="登录中..."], &[value="注册中..."]':{background:"#00000033",color:"#ffffff99",cursor:"not-allowed","letter-spacing":"0.2em","text-indent":"0,2em"}}},"& button":{'&[name="password"]':{position:"absolute",right:"calc(1% + 14px)",top:"1px",outline:"none",width:"40px",height:"40px",margin:"10px 0",padding:"0 10px",border:"none","border-radius":"0",transition:"all 0.3s",background:"#00000000","&:hover":{"& span":{color:"#3b3b3acc"}}}},"& img":{height:"40px",margin:"10px 0","object-fit":"cover",cursor:"pointer",'&[name="verificationCode"]':{"margin-left":"10px",height:"40px","object-fit":"fill",border:"1px solid #ccc"}},"&:nth-child(3)":{display:"flex"},"& div":{display:"flex",margin:"auto",width:"calc(90% + 22px)","& a":{"&.forget-password":{height:"40px",margin:"10px 0 0 10px",padding:"0 10px",border:"none","line-height":"40px",whiteSpace:"nowrap",transition:"all 0.3s",color:"#aaaaaa","font-size":"1.2em","&:hover":{color:"#33333399"}}}}}}}}),x=s({props:{temporarySubmitText:{type:String,default:"登录"}},setup(o){const a=U();a.removeToken();const t=B(),i=u({phone:"",password:"",verificationCode:""}),l=h(!1),v=g(()=>l.value?"登录中...":o.temporarySubmitText);function b(n){n.preventDefault(),l.value=!0,a.login(i).catch(()=>{alert("登录失败")}).finally(()=>{l.value=!1})}return y(()=>{for(const n in i)i[n]=""}),()=>e(T,null,{default:()=>[e("form",{onSubmit:b},[e("ul",null,[e("li",null,[d(e("input",{type:"text",name:"phone",placeholder:"请输入您的手机号",pattern:"^1[3-9]\\d{9}$","onUpdate:modelValue":n=>i.phone=n},null),[[p,i.phone],[C("auto-focus")]])]),e("li",null,[d(e("input",{type:t.type,name:"password",placeholder:"请输入您的密码",autocomplete:"off","onUpdate:modelValue":n=>i.password=n},null),[[k,i.password]]),e("button",{type:"button",name:"password",onClick:t.toggle},[e(r("xj-icon"),{name:t.icon,size:"1.6em",color:"#aaa"},null)])]),e("li",null,[e("div",null,[d(e("input",{type:"text",name:"verificationCode",placeholder:"请输入验证码",autocomplete:"off","onUpdate:modelValue":n=>i.verificationCode=n},null),[[p,i.verificationCode]]),e("img",{src:L,alt:"验证码图片",name:"verificationCode",onClick:()=>{console.log("刷新验证码")}},null)])]),e("li",null,[e("div",null,[e("input",{type:"submit",value:v.value,name:"submit",disabled:!i.phone||!i.password||!i.verificationCode},null),e("a",{href:"#",class:"forget-password"},[c("忘记密码")])])])])])]})}}),F=s({setup(){return()=>e(x,{temporarySubmitText:"注册"},null)}}),z=m("div",{width:"calc(100vw - 4px)",height:"100vh",overflow:"hidden",background:`url(${f}) no-repeat center center/cover`,position:"relative","text-align":"center","& .mask":{width:"100%",height:"100%",backgroundColor:"#fff77f40",position:"relative","& .main-window-box":{height:"100%",width:"1000px",margin:"0 auto",position:"relative","& .logo":{width:"150px",height:"150px",filter:"drop-shadow(1px 1px 1px #000000aa)","margin-bottom":"-45px"},"& .placeholder-login":{transition:"all 0.3s",height:"0"},"@media screen and (min-height: 800px)":{"& .placeholder-login":{height:"calc(50vh - 400px)"}},"& .main":{width:"calc(100% - 50px)",height:"470px",margin:"0 auto",background:"linear-gradient(0deg, #aec2e1 0%, #ffffffff 60%)",display:"flex",position:"relative","& .form-box":{position:"relative",width:"50%",height:"100%",padding:"0 1% 0 8%",overflow:"hidden","box-sizing":"border-box","& .form":{position:"relative",top:"50%",height:"75%",width:"100%",overflow:"hidden",transform:"translateY(-50%)","& .header-box .header":{display:"flex",position:"relative","justify-content":"space-left","align-items":"center","font-size":"1.6em","border-bottom":"1px solid #00000033",overflow:"hidden","& li":{padding:"10px 20px 5px 20px",width:"50%",color:"#00000077",cursor:"pointer",transition:"all 0.3s","&:hover":{color:"#000000ad",backgroundColor:"#00000011"}},"&::before":{content:'""',position:"absolute",left:"$UnderlineLeftPosition",bottom:"0",width:"$UnderlineWidth",height:"2px",transition:"all 0.3s","z-index":"-1",background:"#8dbfdf"}},"& .main-box":{position:"relative",width:"100%",height:"calc(100% - 100px)"},"& .footer-box":{position:"absolute",bottom:"0",width:"100%","& .third-party":{display:"flex","justify-content":"center","align-items":"center","& li":{margin:"auto"},"@media screen and (max-width: 800px)":{"& li":{margin:"0 calc(20% - 1.2em)"}}}}}},"& .img":{width:"50%",height:"100%",background:`url(${f}) no-repeat center center/cover`},"@media screen and (max-width: 800px)":{"& .form-box":{width:"100%",padding:"0 8%"},"& .img":{width:"0"}}}},"@media screen and (max-width: 800px)":{"& .main-window-box":{width:"500px"}}},".xj-fade-enter-active, .xj-fade-leave-active":{transition:"opacity 0.3s ease, transform 0.3s ease"},".xj-fade-enter-from":{opacity:"0",transform:"scale(0.97)"},".xj-fade-leave-to":{opacity:"0",transform:"scale(0.97)"}}),D=s({setup(){const o=u({UnderlineLeftPosition:"0%",UnderlineWidth:"50%"}),a=g(()=>o.UnderlineLeftPosition==="0%"?e(x,null,null):e(F,null,null));function t(){o.UnderlineLeftPosition="0%",o.UnderlineWidth="100%",setTimeout(()=>{o.UnderlineWidth="50%"},100)}function i(){o.UnderlineWidth="100%",setTimeout(()=>{o.UnderlineLeftPosition="50%",setTimeout(()=>{o.UnderlineWidth="50%"},200)},100)}return()=>e(z,{vars:o},{default:()=>[e("div",{class:"mask"},[e("div",{class:"main-window-box"},[e("div",{class:"placeholder-login"},null),e("div",{class:"logo logo-white"},null),e("div",{class:"main"},[e("div",{class:"form-box"},[e("div",{class:"form"},[e("header",{class:"header-box"},[e("ul",{class:"header"},[e("li",{onClick:t},[c("登录")]),e("li",{onClick:i},[c("注册")])])]),e("main",{class:"main-box"},[e(j,{name:"xj-fade",mode:"out-in"},{default:()=>[a.value]})]),e("footer",{class:"footer-box"},[e("ul",{class:"third-party"},[e("li",null,[e("a",{href:"#"},[e(r("xj-icon"),{name:"qq",size:"2.4em",color:"#24a7dc"},null)])]),e("li",null,[e("a",{href:"#"},[e(r("xj-icon"),{name:"wechat",size:"3em",color:"#1ed76d"},null)])]),e("li",null,[e("a",{href:"#"},[e(r("xj-icon"),{name:"weibo",size:"3em",color:"#de2024"},null)])])])])])]),e("div",{class:"img"},null)])])])]})}}),W=s({name:"login",setup(){return()=>e(D,null,null)}});export{W as default};
