var t,e,r,n,o,i,s=globalThis;function a(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var u=()=>{let t=localStorage.getItem("users"),e=t?JSON.parse(t):null;if(!e)return`
            <header id="header-container" class="header">
                <img src="/search.171c0435.svg" alt="" />
                <img src="/notifications.8b2852f2.svg" alt="" />
                <select class="header__select">
                    <option value="">Log in</option>
                </select>
            </header>
        `;{let t=`${e.firstName} ${e.lastName}`;return`
            <header id="header-container" class="header">
                <img src="/search.171c0435.svg" alt="" />
                <img src="/notifications.8b2852f2.svg" alt="" />
                <select class="header__select">
                    <option value="">${t}</option>
                    <option value="logout" onclick="handleLogout()">Log Out</option>
                    <option value="changePassword">Change Password</option>
                </select>
            </header>
        `}},l=()=>`
    <section class="sidebar">
        <figure class="sidebar__logo">
          <img src="/logo.3e864662.svg" alt="" />
        </figure>

        <div class="sidebar__menu">
          <div class="sidebar__menu--item">
            <img src="/dashboaard.6c717686.svg" alt="" />
            <p>dashboard</p>
          </div>
          <div class="sidebar__menu--item">
            <img src="/all-products.897c51a3.svg" alt="" />
            <p>all products</p>
          </div>
          <div id="item" class="sidebar__menu--item">
            <img src="/product-list.7f703628.svg" alt="" />
            <p id="para">product list</p>
          </div>
        </div>

        <div class="sidebar__category">
          <h2>Categories</h2>
          <img src="/chevron_down-big.30530540.svg" alt="" />
        </div>
      </section>
    `,c=()=>`
        <footer class="footer">
            <p>\xa9 2023 - kicks Dashboard</p>
            <ul class="footer__menu">
                <li class="footer__menu--list">
                    <a href="">about</a>
                </li>
                <li class="footer__menu--list">
                    <a href="">careers</a>
                </li>
                <li class="footer__menu--list">
                    <a href="">policy</a>
                </li>
                <li class="footer__menu--list">
                    <a href="">contact</a>
                </li>
            </ul>
      </footer>
    `,f=()=>`
      <div class="pagination">
        <button id="current">1</button>
        <button  class="hide">2</button>
        <button class="hide">3</button>
        <button class="hide">4</button>
        <button  class="hide">...</button>
        <button  class="hide">10</button>
        <button id= "next">
            <p>NEXT</p>
            <img src = "/chevron_forward.c5f0065d.svg"  alt="" />
        </button>
      </div>
    `;const h=t=>`
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>${t.name}</td>
      <td>${t.sku_id}</td>
      <td>${t.quantity}</td>
      <td>${t.brand}</td>
      <td class="row">
        <img src="${t.image}" alt="" />
        <p>${t.brand}</p>
      </td>
      <td>
        <div
          <div class="stock-wrapper">
          <span class="${t.status?"stock":"sold-out"}"></span>
          <p>${t.status?"Stock":"Sold out"}</p>
          </div>
        </div>
      </td>
      <td>${t.price}</td>
    </tr>
  `;var d=(t=[])=>`
    ${t.map(t=>h(t))}
  `,p=t=>`
    <div class="table-title">
      <p>Recent Purchases </p>
    </div>
    <div class="table-content">
      <table>
          <thead>
            <tr>
              <td><input id="input" type="checkbox" /></td>
              <td>Product</td>
              <td>SKU ID</td>
              <td>Amount</td>
              <td>Category</td>
              <td>Brand</td>  
              <td>Status</td>
              <td>Regular Price</td>
            </tr>
          </thead>
          <tbody>
            ${d(t)}
          </tbody>
      </table>
    </div>
  `,g=()=>`
     <div class="table__header">
        <h2>Product list</h2>
        <p>Home > Product List</p>

        <div class="table__header--btn">
          <select name="" id="">
            <option value="">Change Status</option>
          </select>
        </div>
    </div>
  `,m=()=>`
        <div class="product__form">
            <div class="product__form--item">
                <h3>Product name</h3>
                <input type="text" placeholder="Adidas Ultra boost" />
            </div>

            <div class="product__form--item">
                <h3>Description</h3>
                <textarea name="">Long distance running requires a lot from athletes.</textarea>
            </div>

            <div class="product__form--item">
                <h3>Category</h3>
                <input type="text" placeholder="Sneaker" />
            </div>

            <div class="product__form--item">
                <h3>Brand Name</h3>
                <input type="text" placeholder="Addidas" />
            </div>

            <div class="product__form--row">
                <div class="product__form--item">
                    <h3>SKU</h3>
                    <input type="text" placeholder="#32A53" />
                </div>
                <div class="product__form--item">
                    <h3>Stock Quantity</h3>
                    <input type="text" placeholder="21" />
                </div>
            </div>
            <div class="product__form--row">
                <div class="product__form--item">
                    <h3>Regular Price</h3>
                    <input type="text" placeholder="$110.40" />
                </div>
                <div class="product__form--item">
                    <h3>Sale Price</h3>
                    <input type="text" placeholder="$450" />
                </div>
            </div>

            <div class="product__form--item">
                <h3>Tag</h3>
                <div class="product--btn">
                    <button><a href="">Adidas</a></button>
                    <button><a href="">Shoes</a></button>
                    <button><a href="">Sneakers</a></button>
                    <button><a href="">Ultraboost</a></button>
                </div>
            </div>
      </div>
    `,y=()=>`
        <div class="product__image">
            <figure>
                <img src="/blue-shoes.e7aa0eb3.png" alt="" />
            </figure>

            <div class="product__gallery">
                <h3>Product Gallery</h3>
                <div class="product__gallery--img">
                    <img src="/ph_image-light.d6655624.svg" alt="" />
                    <div id="para">
                        <p>Drop your imager here, or browse</p>
                        <p>Jpeg, png are allowed</p>
                    </div>
                </div>
            </div>

            <div class="product__thumbnail">
                <div class="product__thumbnail--list">
                    <figure>
                    <img src="/orange-shoes.71d5365a.jpg" alt="" />
                    </figure>
                    <div class="product__thumbnail--detail">
                    <p>Product thumbnail.png</p>
                    <span> </span>
                    </div>
                    <img src="/check-success.f06f1f23.svg" alt="" />
                </div>

                <div class="product__thumbnail--list">
                    <figure>
                    <img src="/orange-shoes.71d5365a.jpg" alt="" />
                    </figure>
                    <div class="product__thumbnail--detail">
                    <p>Product thumbnail.png</p>
                    <span> </span>
                    </div>
                    <img src="/check-success.f06f1f23.svg" alt="" />
                </div>

                <div class="product__thumbnail--list">
                    <figure>
                    <img src="/orange-shoes.71d5365a.jpg" alt="" />
                    </figure>
                    <div class="product__thumbnail--detail">
                    <p>Product thumbnail.png</p>
                    <span> </span>
                    </div>
                    <img src="/check-success.f06f1f23.svg" alt="" />
                </div>

                <div class="product__thumbnail--list">
                    <figure>
                    <img src="/orange-shoes.71d5365a.jpg" alt="" />
                    </figure>
                    <div class="product__thumbnail--detail">
                    <p>Product thumbnail.png</p>
                    <span> </span>
                    </div>
                    <img src="/check-success.f06f1f23.svg" alt="" />
                </div>
            </div>
      </div>
    `,b=()=>`
        <div class="product__action">
            <button id="btn-update">update</button>
            <button id="btn-delete">delete</button>
            <button id="btn-cancel">cancel</button>
        </div>
    `,v=()=>`
        <div class="product--all">
            <div class = "product">
                ${m()}
                <div class="product-right">
                    ${y()}
                    ${b()}
                </div>
            </div>
        </div>
    `,w=()=>`
        <div class="table__header">
            <h2>Product details</h2>
            <p>Home > All Products > Product Details</p>
        </div>
    `,E=class{constructor(){this.routes=[],this.currentRoute=null}define(t,e){this.routes.push({path:t,element:e})}listen(){let t=window.location.pathname,e=this.routes.find(e=>e.path===t).element,r=document.getElementById("root");"string"==typeof e?r.innerHTML=e:r.appendChild(e)}},_=class{constructor(){this.app=document.querySelector("#root"),this.router=new E,this.initRoute()}initRoute(){this.router.define("/register",`
    <div class="resform">
        <figure class="resform__left">
          <img
            class="resform__left--logo"
            src="/big-logo.671339c0.svg"
            alt=""
          />
          <img
            class="resform__left--bigshoes"
            src="/big-shoes.de5dfd28.png"
            alt=""
          />
        </figure>
        <form class="resform__right">
          <div>
            <h1>Register</h1>
            <p>Sign up with</p>
          </div>

          <figure class="resform__right--social">
            <img
              class="resform__right--icon"
              src="/logos_google-icon.0fa71755.svg"
              alt=""
            />
            <img
              class="resform__right--icon"
              src="/ic_baseline-apple.389b3e45.svg"
              alt=""
            />
            <img
              class="resform__right--icon"
              src="/logos_facebook.b80ecd78.svg"
              alt=""
            />
          </figure>

          <p>OR</p>

          <div class="resform__right--input">
            <h2>Your name</h2>
            <input id="firstName" type="text" placeholder="First name" />
            <input id="lastName" type="text" placeholder="Last name" />
          </div>

          <div class="resform__right--input">
            <h2>Login details</h2>
            <input type="email" id="email" placeholder="Email" />
            <input id="password" type="password" placeholder="Password" />
            <p id="para">
              Minimum 8 characters with at least one uppercase, one lowercase,
              one special character and a number
            </p>
          </div>

          <div class="resform__right--checkbox">
            <input type="checkbox" />
            <label for=""
              >By clicking 'Log In' you agree to our website KicksClub Terms &
              Conditions, Kicks Privacy Notice and Terms & Conditions.</label
            >
          </div>

          <div class="resform__right--checkbox">
            <input type="checkbox" />
            <label for=""
              >Keep me logged in - applies to all log in options below. More
              info</label
            >
          </div>

          <button>
            <span>REGISTER</span>
            <img src="/arrow_forward.b47cf309.svg" alt="" />
          </button>
        </form>
    </div>

    `),this.router.define("/login",`
       <div class="form">
        <figure class="form__left">
          <img
            class="form__left--logo"
            src="/big-logo.671339c0.svg"
            alt=""
          />
          <img
            class="form__left--bigshoes"
            src="/big-shoes.de5dfd28.png"
            alt=""
          />
        </figure>
        <form class="form__right">
          <div>
            <h1>Login</h1>
            <a href="">Forgot your password?</a>
          </div>

          <input class="form__right--input" type="text" placeholder="Email" />

          <input
            class="form__right--input"
            type="password"
            placeholder="Password"
          />

          <div class="form__right--checkbox">
            <input type="checkbox" />
            <label for=""
              >Keep me logged in - applies to all log in options below.
              <u>More info</u></label
            >
          </div>

          <button>
            <span>EMAIL LOGIN</span>
            <img src="/dist/arrow_forward.b47cf309.svg" alt="" />
          </button>

          <figure class="form__right--social">
            <img
              class="form__right--icon"
              src="/logos_google-icon.0fa71755.svg"
              alt=""
            />
            <img
              class="form__right--icon"
              src="/ic_baseline-apple.389b3e45.svg"
              alt=""
            />
            <img
              class="form__right--icon"
              src="/logos_facebook.b80ecd78.svg"
              alt=""
            />
          </figure>

          <p>
            By clicking 'Log In' you agree to our website Kicks<u
              >Club Terms & Conditions, Kicks Privacy Notice</u
            >
            and <u>Terms & Conditions.</u>
          </p>
        </form>
      </div>
    `),this.router.define("/product/table",this.ProductTable()),this.router.define("/product/detail",this.ProductDetail()),this.router.listen()}ProductTable(){let t=document.createElement("div");t.className="container";let e=document.createElement("main");e.className="main";let r=document.createElement("div");return r.className="body__footer",t.innerHTML+=l(),t.appendChild(e),e.innerHTML+=u(),e.appendChild(r),r.innerHTML+=g(),r.innerHTML+=p(),r.innerHTML+=f(),r.innerHTML+=c(),t}ProductDetail(){let t=document.createElement("div");t.className="container";let e=document.createElement("main");e.className="main";let r=document.createElement("div");return r.className="body__footer",t.innerHTML+=l(),t.appendChild(e),e.innerHTML+=u(),e.appendChild(r),r.innerHTML+=w(),r.innerHTML+=v(),r.innerHTML+=c(),t}},A=class{constructor(t,e){this.userView=t,this.userService=e,this.login=this.login.bind(this),this.register=this.register.bind(this),this.logout=this.logout.bind(this),this.login(),this.register(),this.logout()}login(){this.formLogin=document.querySelector(".form__right"),this.formLogin?.addEventListener("submit",async t=>{t.preventDefault();let e=document.querySelector('.form__right input[type="text"]').value,r=document.querySelector('.form__right input[type="password"]').value,n=document.querySelectorAll("input[type]:checked");if(n?.length<1){alert("You need to agree policy");return}try{let t=await this.userService.getUser(e,r);t?(localStorage.setItem("users",JSON.stringify({firstName:t.firstName,lastName:t.lastName})),alert("Login successfully"),window.location.href="/product/table"):alert("User not found")}catch(t){console.log(t)}})}register(){this.form=document.querySelector("form"),this.form.addEventListener("submit",t=>{t.preventDefault();let e=document.getElementById("firstName").value,r=document.getElementById("lastName").value,n=document.getElementById("password").value,o=document.getElementById("email").value,i=document.querySelectorAll("input[type]:checked");if(i?.length<2){alert("You need to agree policy");return}(function(t="",e="",r="",n=""){let o=/^[a-zA-Z]+$/;return o.test(t)&&o.test(e)?(t.trim()&&e.trim()||alert("Can not leave empty field first name or last name"),/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(r))?!!(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(n)&&n.trim())||(alert("Please enter a valid email address"),!1):(alert("Password must be at least 8 characters with at least one uppercase, one lowercase, one special character, and a number."),!1):(alert("First name and last name should contain only characters."),!1)})(e,r,n,o)&&this.userService.addUser(e,r,o,n).then(()=>{alert("Register successfully"),window.location.href="/login"}).catch(t=>{console.error(t),alert("Error registering user")})})}logout(){this.selects=document.querySelector("header__select"),console.log(this.selects),this.selects.addEventListener("change",t=>{alert(t.target.value)})}};function S(t,e){return function(){return t.apply(e,arguments)}}const{toString:O}=Object.prototype,{getPrototypeOf:R}=Object,T=(t=Object.create(null),e=>{let r=O.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}),B=t=>(t=t.toLowerCase(),e=>T(e)===t),U=t=>e=>typeof e===t,{isArray:C}=Array,L=U("undefined"),x=B("ArrayBuffer"),N=U("string"),P=U("function"),j=U("number"),k=t=>null!==t&&"object"==typeof t,I=t=>{if("object"!==T(t))return!1;let e=R(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},F=B("Date"),D=B("File"),M=B("Blob"),q=B("FileList"),H=B("URLSearchParams");function z(t,e,{allOwnKeys:r=!1}={}){let n,o;if(null!=t){if("object"!=typeof t&&(t=[t]),C(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{let o;let i=r?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;for(n=0;n<s;n++)o=i[n],e.call(null,t[o],o,t)}}}function $(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),o=n.length;for(;o-- >0;)if(e===(r=n[o]).toLowerCase())return r;return null}const J="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:s,K=t=>!L(t)&&t!==J,V=(e="undefined"!=typeof Uint8Array&&R(Uint8Array),t=>e&&t instanceof e),W=B("HTMLFormElement"),G=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),X=B("RegExp"),Y=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};z(r,(r,o)=>{let i;!1!==(i=e(r,o,t))&&(n[o]=i||r)}),Object.defineProperties(t,n)},Z="abcdefghijklmnopqrstuvwxyz",Q="0123456789",tt={DIGIT:Q,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+Q},te=B("AsyncFunction");var tr={isArray:C,isArrayBuffer:x,isBuffer:function(t){return null!==t&&!L(t)&&null!==t.constructor&&!L(t.constructor)&&P(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||P(t.append)&&("formdata"===(e=T(t))||"object"===e&&P(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&x(t.buffer)},isString:N,isNumber:j,isBoolean:t=>!0===t||!1===t,isObject:k,isPlainObject:I,isUndefined:L,isDate:F,isFile:D,isBlob:M,isRegExp:X,isFunction:P,isStream:t=>k(t)&&P(t.pipe),isURLSearchParams:H,isTypedArray:V,isFileList:q,forEach:z,merge:function t(){let{caseless:e}=K(this)&&this||{},r={},n=(n,o)=>{let i=e&&$(r,o)||o;I(r[i])&&I(n)?r[i]=t(r[i],n):I(n)?r[i]=t({},n):C(n)?r[i]=n.slice():r[i]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&z(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(z(e,(e,n)=>{r&&P(e)?t[n]=S(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let o,i,s;let a={};if(e=e||{},null==t)return e;do{for(i=(o=Object.getOwnPropertyNames(t)).length;i-- >0;)s=o[i],(!n||n(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=!1!==r&&R(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:T,kindOfTest:B,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(C(t))return t;let e=t.length;if(!j(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=(t&&t[Symbol.iterator]).call(t);for(;(r=n.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:W,hasOwnProperty:G,hasOwnProp:G,reduceDescriptors:Y,freezeMethods:t=>{Y(t,(e,r)=>{if(P(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;if(P(t[r])){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(C(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:$,global:J,isContextDefined:K,ALPHABET:tt,generateString:(t=16,e=tt.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:function(t){return!!(t&&P(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(k(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let o=C(t)?[]:{};return z(t,(t,e)=>{let i=r(t,n+1);L(i)||(o[e]=i)}),e[n]=void 0,o}}return t};return r(t,0)},isAsyncFn:te,isThenable:t=>t&&(k(t)||P(t))&&P(t.then)&&P(t.catch)};function tn(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}tr.inherits(tn,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:tr.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const to=tn.prototype,ti={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{ti[t]={value:t}}),Object.defineProperties(tn,ti),Object.defineProperty(to,"isAxiosError",{value:!0}),tn.from=(t,e,r,n,o,i)=>{let s=Object.create(to);return tr.toFlatObject(t,s,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),tn.call(s,t.message,e,r,n,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s},n=function(t){for(var e,r=t.length,n=r%3,o=[],i=0,s=r-n;i<s;i+=16383)o.push(function(t,e,r){for(var n,o=[],i=e;i<r;i+=3)o.push(ts[(n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]))>>18&63]+ts[n>>12&63]+ts[n>>6&63]+ts[63&n]);return o.join("")}(t,i,i+16383>s?s:i+16383));return 1===n?o.push(ts[(e=t[r-1])>>2]+ts[e<<4&63]+"=="):2===n&&o.push(ts[(e=(t[r-2]<<8)+t[r-1])>>10]+ts[e>>4&63]+ts[e<<2&63]+"="),o.join("")};for(var ts=[],ta=[],tu="undefined"!=typeof Uint8Array?Uint8Array:Array,tl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",tc=0,tf=tl.length;tc<tf;++tc)ts[tc]=tl[tc],ta[tl.charCodeAt(tc)]=tc;ta["-".charCodeAt(0)]=62,ta["_".charCodeAt(0)]=63,o=function(t,e,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,l=u>>1,c=-7,f=r?o-1:0,h=r?-1:1,d=t[e+f];for(f+=h,i=d&(1<<-c)-1,d>>=-c,c+=a;c>0;i=256*i+t[e+f],f+=h,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+t[e+f],f+=h,c-=8);if(0===i)i=1-l;else{if(i===u)return s?NaN:1/0*(d?-1:1);s+=Math.pow(2,n),i-=l}return(d?-1:1)*s*Math.pow(2,i-n)},i=function(t,e,r,n,o,i){var s,a,u,l=8*i-o-1,c=(1<<l)-1,f=c>>1,h=23===o?5960464477539062e-23:0,d=n?0:i-1,p=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+f>=1?e+=h/u:e+=h*Math.pow(2,1-f),e*u>=2&&(s++,u/=2),s+f>=c?(a=0,s=c):s+f>=1?(a=(e*u-1)*Math.pow(2,o),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;t[r+d]=255&a,d+=p,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;t[r+d]=255&s,d+=p,s/=256,l-=8);t[r+d-p]|=128*g};var th="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function td(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,tp.prototype),e}function tp(t,e,r){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return ty(t)}return tg(t,e,r)}function tg(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!tp.isEncoding(e))throw TypeError("Unknown encoding: "+e);var r=0|tE(t,e),n=td(r),o=n.write(t,e);return o!==r&&(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(tk(t,Uint8Array)){var e=new Uint8Array(t);return tv(e.buffer,e.byteOffset,e.byteLength)}return tb(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(tk(t,ArrayBuffer)||t&&tk(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tk(t,SharedArrayBuffer)||t&&tk(t.buffer,SharedArrayBuffer)))return tv(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return tp.from(n,e,r);var o=function(t){if(tp.isBuffer(t)){var e,r=0|tw(t.length),n=td(r);return 0===n.length||t.copy(n,0,0,r),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e?td(0):tb(t):"Buffer"===t.type&&Array.isArray(t.data)?tb(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return tp.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function tm(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function ty(t){return tm(t),td(t<0?0:0|tw(t))}function tb(t){for(var e=t.length<0?0:0|tw(t.length),r=td(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function tv(t,e,r){var n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),tp.prototype),n}function tw(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function tE(t,e){if(tp.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||tk(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tN(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tP(t).length;default:if(o)return n?-1:tN(t).length;e=(""+e).toLowerCase(),o=!0}}function t_(t,e,r){var o,i,s=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=tI[t[i]];return o}(this,e,r);case"utf8":case"utf-8":return tR(this,e,r);case"ascii":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":return o=e,i=r,0===o&&i===this.length?n(this):n(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,e,r);default:if(s)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),s=!0}}function tA(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function tS(t,e,r,n,o){var i;if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}if("string"==typeof e&&(e=tp.from(e,n)),tp.isBuffer(e))return 0===e.length?-1:tO(t,e,r,n,o);if("number"==typeof e)return(e&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):tO(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function tO(t,e,r,n,o){var i,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var c=-1;for(i=r;i<a;i++)if(l(t,i)===l(e,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===u)return c*s}else -1!==c&&(i-=i-c),c=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){for(var f=!0,h=0;h<u;h++)if(l(t,i+h)!==l(e,h)){f=!1;break}if(f)return i}return -1}function tR(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,s,a,u,l=t[o],c=null,f=l>239?4:l>223?3:l>191?2:1;if(o+f<=r)switch(f){case 1:l<128&&(c=l);break;case 2:(192&(i=t[o+1]))==128&&(u=(31&l)<<6|63&i)>127&&(c=u);break;case 3:i=t[o+1],s=t[o+2],(192&i)==128&&(192&s)==128&&(u=(15&l)<<12|(63&i)<<6|63&s)>2047&&(u<55296||u>57343)&&(c=u);break;case 4:i=t[o+1],s=t[o+2],a=t[o+3],(192&i)==128&&(192&s)==128&&(192&a)==128&&(u=(15&l)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(c=u)}null===c?(c=65533,f=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=f}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}function tT(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function tB(t,e,r,n,o,i){if(!tp.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function tU(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function tC(t,e,r,n,o){return e=+e,r>>>=0,o||tU(t,e,r,4,34028234663852886e22,-34028234663852886e22),i(t,e,r,n,23,4),r+4}function tL(t,e,r,n,o){return e=+e,r>>>=0,o||tU(t,e,r,8,17976931348623157e292,-17976931348623157e292),i(t,e,r,n,52,8),r+8}tp.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),tp.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(tp.prototype,"parent",{enumerable:!0,get:function(){if(tp.isBuffer(this))return this.buffer}}),Object.defineProperty(tp.prototype,"offset",{enumerable:!0,get:function(){if(tp.isBuffer(this))return this.byteOffset}}),tp.poolSize=8192,tp.from=function(t,e,r){return tg(t,e,r)},Object.setPrototypeOf(tp.prototype,Uint8Array.prototype),Object.setPrototypeOf(tp,Uint8Array),tp.alloc=function(t,e,r){return(tm(t),t<=0)?td(t):void 0!==e?"string"==typeof r?td(t).fill(e,r):td(t).fill(e):td(t)},tp.allocUnsafe=function(t){return ty(t)},tp.allocUnsafeSlow=function(t){return ty(t)},tp.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==tp.prototype},tp.compare=function(t,e){if(tk(t,Uint8Array)&&(t=tp.from(t,t.offset,t.byteLength)),tk(e,Uint8Array)&&(e=tp.from(e,e.offset,e.byteLength)),!tp.isBuffer(t)||!tp.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},tp.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},tp.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return tp.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;var r,n=tp.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(tk(i,Uint8Array))o+i.length>n.length?tp.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(tp.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},tp.byteLength=tE,tp.prototype._isBuffer=!0,tp.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)tA(this,e,e+1);return this},tp.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)tA(this,e,e+3),tA(this,e+1,e+2);return this},tp.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)tA(this,e,e+7),tA(this,e+1,e+6),tA(this,e+2,e+5),tA(this,e+3,e+4);return this},tp.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?tR(this,0,t):t_.apply(this,arguments)},tp.prototype.toLocaleString=tp.prototype.toString,tp.prototype.equals=function(t){if(!tp.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===tp.compare(this,t)},tp.prototype.inspect=function(){var t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},th&&(tp.prototype[th]=tp.prototype.inspect),tp.prototype.compare=function(t,e,r,n,o){if(tk(t,Uint8Array)&&(t=tp.from(t,t.offset,t.byteLength)),!tp.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,s=r-e,a=Math.min(i,s),u=this.slice(n,o),l=t.slice(e,r),c=0;c<a;++c)if(u[c]!==l[c]){i=u[c],s=l[c];break}return i<s?-1:s<i?1:0},tp.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},tp.prototype.indexOf=function(t,e,r){return tS(this,t,e,r,!0)},tp.prototype.lastIndexOf=function(t,e,r){return tS(this,t,e,r,!1)},tp.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,s,a,u,l,c,f,h=this.length-e;if((void 0===r||r>h)&&(r=h),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var d=!1;;)switch(n){case"hex":return function(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(a!=a)break;t[r+s]=a}return s}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,tj(tN(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=e,a=r,tj(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,a);case"base64":return u=e,l=r,tj(tP(t),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=e,f=r,tj(function(t,e){for(var r,n,o=[],i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-c),this,c,f);default:if(d)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),d=!0}},tp.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},tp.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return Object.setPrototypeOf(n,tp.prototype),n},tp.prototype.readUintLE=tp.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tT(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},tp.prototype.readUintBE=tp.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tT(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},tp.prototype.readUint8=tp.prototype.readUInt8=function(t,e){return t>>>=0,e||tT(t,1,this.length),this[t]},tp.prototype.readUint16LE=tp.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tT(t,2,this.length),this[t]|this[t+1]<<8},tp.prototype.readUint16BE=tp.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tT(t,2,this.length),this[t]<<8|this[t+1]},tp.prototype.readUint32LE=tp.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tT(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},tp.prototype.readUint32BE=tp.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tT(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},tp.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tT(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},tp.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tT(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},tp.prototype.readInt8=function(t,e){return(t>>>=0,e||tT(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},tp.prototype.readInt16LE=function(t,e){t>>>=0,e||tT(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},tp.prototype.readInt16BE=function(t,e){t>>>=0,e||tT(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},tp.prototype.readInt32LE=function(t,e){return t>>>=0,e||tT(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},tp.prototype.readInt32BE=function(t,e){return t>>>=0,e||tT(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},tp.prototype.readFloatLE=function(t,e){return t>>>=0,e||tT(t,4,this.length),o(this,t,!0,23,4)},tp.prototype.readFloatBE=function(t,e){return t>>>=0,e||tT(t,4,this.length),o(this,t,!1,23,4)},tp.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tT(t,8,this.length),o(this,t,!0,52,8)},tp.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tT(t,8,this.length),o(this,t,!1,52,8)},tp.prototype.writeUintLE=tp.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;tB(this,t,e,r,o,0)}var i=1,s=0;for(this[e]=255&t;++s<r&&(i*=256);)this[e+s]=t/i&255;return e+r},tp.prototype.writeUintBE=tp.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;tB(this,t,e,r,o,0)}var i=r-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+r},tp.prototype.writeUint8=tp.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||tB(this,t,e,1,255,0),this[e]=255&t,e+1},tp.prototype.writeUint16LE=tp.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tB(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},tp.prototype.writeUint16BE=tp.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tB(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},tp.prototype.writeUint32LE=tp.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tB(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},tp.prototype.writeUint32BE=tp.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tB(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tp.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);tB(this,t,e,r,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},tp.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);tB(this,t,e,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},tp.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||tB(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},tp.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tB(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},tp.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tB(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},tp.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tB(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},tp.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tB(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tp.prototype.writeFloatLE=function(t,e,r){return tC(this,t,e,!0,r)},tp.prototype.writeFloatBE=function(t,e,r){return tC(this,t,e,!1,r)},tp.prototype.writeDoubleLE=function(t,e,r){return tL(this,t,e,!0,r)},tp.prototype.writeDoubleBE=function(t,e,r){return tL(this,t,e,!1,r)},tp.prototype.copy=function(t,e,r,n){if(!tp.isBuffer(t))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},tp.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!tp.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){var o,i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=tp.isBuffer(t)?t:tp.from(t,n),a=s.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=s[o%a]}return this};var tx=/[^+/0-9A-Za-z-_]/g;function tN(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319||s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function tP(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),o=n[0],i=n[1],s=new tu((o+i)*3/4-i),a=0,u=i>0?o-4:o;for(r=0;r<u;r+=4)e=ta[t.charCodeAt(r)]<<18|ta[t.charCodeAt(r+1)]<<12|ta[t.charCodeAt(r+2)]<<6|ta[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return 2===i&&(e=ta[t.charCodeAt(r)]<<2|ta[t.charCodeAt(r+1)]>>4,s[a++]=255&e),1===i&&(e=ta[t.charCodeAt(r)]<<10|ta[t.charCodeAt(r+1)]<<4|ta[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s}(function(t){if((t=(t=t.split("=")[0]).trim().replace(tx,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function tj(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}function tk(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}var tI=function(){for(var t="0123456789abcdef",e=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}();function tF(t){return tr.isPlainObject(t)||tr.isArray(t)}function tD(t){return tr.endsWith(t,"[]")?t.slice(0,-2):t}function tM(t,e,r){return t?t.concat(e).map(function(t,e){return t=tD(t),!r&&e?"["+t+"]":t}).join(r?".":""):e}const tq=tr.toFlatObject(tr,{},null,function(t){return/^is[A-Z]/.test(t)});var tH=function(t,e,r){if(!tr.isObject(t))throw TypeError("target must be an object");e=e||new FormData;let n=(r=tr.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){return!tr.isUndefined(e[t])})).metaTokens,o=r.visitor||l,i=r.dots,s=r.indexes,a=(r.Blob||"undefined"!=typeof Blob&&Blob)&&tr.isSpecCompliantForm(e);if(!tr.isFunction(o))throw TypeError("visitor must be a function");function u(t){if(null===t)return"";if(tr.isDate(t))return t.toISOString();if(!a&&tr.isBlob(t))throw new tn("Blob is not supported. Use a Buffer instead.");return tr.isArrayBuffer(t)||tr.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):tp.from(t):t}function l(t,r,o){let a=t;if(t&&!o&&"object"==typeof t){if(tr.endsWith(r,"{}"))r=n?r:r.slice(0,-2),t=JSON.stringify(t);else{var l;if(tr.isArray(t)&&(l=t,tr.isArray(l)&&!l.some(tF))||(tr.isFileList(t)||tr.endsWith(r,"[]"))&&(a=tr.toArray(t)))return r=tD(r),a.forEach(function(t,n){tr.isUndefined(t)||null===t||e.append(!0===s?tM([r],n,i):null===s?r:r+"[]",u(t))}),!1}}return!!tF(t)||(e.append(tM(o,r,i),u(t)),!1)}let c=[],f=Object.assign(tq,{defaultVisitor:l,convertValue:u,isVisitable:tF});if(!tr.isObject(t))throw TypeError("data must be an object");return!function t(r,n){if(!tr.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),tr.forEach(r,function(r,i){!0===(!(tr.isUndefined(r)||null===r)&&o.call(e,r,tr.isString(i)?i.trim():i,n,f))&&t(r,n?n.concat(i):[i])}),c.pop()}}(t),e};function tz(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}function t$(t,e){this._pairs=[],t&&tH(t,this,e)}const tJ=t$.prototype;function tK(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tV(t,e,r){let n;if(!e)return t;let o=r&&r.encode||tK,i=r&&r.serialize;if(n=i?i(e,r):tr.isURLSearchParams(e)?e.toString():new t$(e,r).toString(o)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t}tJ.append=function(t,e){this._pairs.push([t,e])},tJ.toString=function(t){let e=t?function(e){return t.call(this,e,tz)}:tz;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tW=class{constructor(){this.handlers=[]}use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){tr.forEach(this.handlers,function(e){null!==e&&t(e)})}},tG={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tX="undefined"!=typeof URLSearchParams?URLSearchParams:t$,tY="undefined"!=typeof FormData?FormData:null,tZ="undefined"!=typeof Blob?Blob:null,tQ={};a(tQ,"hasBrowserEnv",()=>t0),a(tQ,"hasStandardBrowserEnv",()=>t1),a(tQ,"hasStandardBrowserWebWorkerEnv",()=>t2);const t0="undefined"!=typeof window&&"undefined"!=typeof document,t1=(r="undefined"!=typeof navigator&&navigator.product,t0&&0>["ReactNative","NativeScript","NS"].indexOf(r)),t2="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var t3={...tQ,isBrowser:!0,classes:{URLSearchParams:tX,FormData:tY,Blob:tZ},protocols:["http","https","file","blob","url","data"]},t5=function(t){if(tr.isFormData(t)&&tr.isFunction(t.entries)){let e={};return tr.forEachEntry(t,(t,r)=>{!function t(e,r,n,o){let i=e[o++];if("__proto__"===i)return!0;let s=Number.isFinite(+i),a=o>=e.length;return(i=!i&&tr.isArray(n)?n.length:i,a)?tr.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r:(n[i]&&tr.isObject(n[i])||(n[i]=[]),t(e,r,n[i],o)&&tr.isArray(n[i])&&(n[i]=function(t){let e,r;let n={},o=Object.keys(t),i=o.length;for(e=0;e<i;e++)n[r=o[e]]=t[r];return n}(n[i]))),!s}(tr.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null};const t6={transitional:tG,adapter:["xhr","http"],transformRequest:[function(t,e){let r;let n=e.getContentType()||"",o=n.indexOf("application/json")>-1,i=tr.isObject(t);if(i&&tr.isHTMLForm(t)&&(t=new FormData(t)),tr.isFormData(t))return o&&o?JSON.stringify(t5(t)):t;if(tr.isArrayBuffer(t)||tr.isBuffer(t)||tr.isStream(t)||tr.isFile(t)||tr.isBlob(t))return t;if(tr.isArrayBufferView(t))return t.buffer;if(tr.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1){var s,a;return(s=t,a=this.formSerializer,tH(s,new t3.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return t3.isNode&&tr.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},a))).toString()}if((r=tr.isFileList(t))||n.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tH(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||o?(e.setContentType("application/json",!1),function(t,e,r){if(tr.isString(t))try{return(0,JSON.parse)(t),tr.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||t6.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&tr.isString(t)&&(r&&!this.responseType||n)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&n){if("SyntaxError"===t.name)throw tn.from(t,tn.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t3.classes.FormData,Blob:t3.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};tr.forEach(["delete","get","head","post","put","patch"],t=>{t6.headers[t]={}});const t8=tr.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var t4=t=>{let e,r,n;let o={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||o[e]&&t8[e]||("set-cookie"===e?o[e]?o[e].push(r):o[e]=[r]:o[e]=o[e]?o[e]+", "+r:r)}),o};const t7=Symbol("internals");function t9(t){return t&&String(t).trim().toLowerCase()}function et(t){return!1===t||null==t?t:tr.isArray(t)?t.map(et):String(t)}const ee=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function er(t,e,r,n,o){if(tr.isFunction(n))return n.call(this,e,r);if(o&&(e=r),tr.isString(e)){if(tr.isString(n))return -1!==e.indexOf(n);if(tr.isRegExp(n))return n.test(e)}}class en{constructor(t){t&&this.set(t)}set(t,e,r){let n=this;function o(t,e,r){let o=t9(e);if(!o)throw Error("header name must be a non-empty string");let i=tr.findKey(n,o);i&&void 0!==n[i]&&!0!==r&&(void 0!==r||!1===n[i])||(n[i||e]=et(t))}let i=(t,e)=>tr.forEach(t,(t,r)=>o(t,r,e));return tr.isPlainObject(t)||t instanceof this.constructor?i(t,e):tr.isString(t)&&(t=t.trim())&&!ee(t)?i(t4(t),e):null!=t&&o(e,t,r),this}get(t,e){if(t=t9(t)){let r=tr.findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if(tr.isFunction(e))return e.call(this,t,r);if(tr.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=t9(t)){let r=tr.findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||er(this,this[r],r,e)))}return!1}delete(t,e){let r=this,n=!1;function o(t){if(t=t9(t)){let o=tr.findKey(r,t);o&&(!e||er(r,r[o],o,e))&&(delete r[o],n=!0)}}return tr.isArray(t)?t.forEach(o):o(t),n}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let o=e[r];(!t||er(this,this[o],o,t,!0))&&(delete this[o],n=!0)}return n}normalize(t){let e=this,r={};return tr.forEach(this,(n,o)=>{let i=tr.findKey(r,o);if(i){e[i]=et(n),delete e[o];return}let s=t?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(o).trim();s!==o&&delete e[o],e[s]=et(n),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return tr.forEach(this,(r,n)=>{null!=r&&!1!==r&&(e[n]=t&&tr.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=(this[t7]=this[t7]={accessors:{}}).accessors,r=this.prototype;function n(t){let n=t9(t);e[n]||(!function(t,e){let r=tr.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})})}(r,t),e[n]=!0)}return tr.isArray(t)?t.forEach(n):n(t),this}}function eo(t,e){let r=this||t6,n=e||r,o=en.from(n.headers),i=n.data;return tr.forEach(t,function(t){i=t.call(r,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function ei(t){return!!(t&&t.__CANCEL__)}function es(t,e,r){tn.call(this,null==t?"canceled":t,tn.ERR_CANCELED,e,r),this.name="CanceledError"}en.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),tr.reduceDescriptors(en.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(t){this[r]=t}}}),tr.freezeMethods(en),tr.inherits(es,tn,{__CANCEL__:!0});var ea=t3.hasStandardBrowserEnv?{write(t,e,r,n,o,i){let s=[t+"="+encodeURIComponent(e)];tr.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),tr.isString(n)&&s.push("path="+n),tr.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function eu(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t:e}var el=t3.hasStandardBrowserEnv?function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(t){let n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=n(window.location.href),function(e){let r=tr.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},ec=function(t,e){let r;let n=Array(t=t||10),o=Array(t),i=0,s=0;return e=void 0!==e?e:1e3,function(a){let u=Date.now(),l=o[s];r||(r=u),n[i]=a,o[i]=u;let c=s,f=0;for(;c!==i;)f+=n[c++],c%=t;if((i=(i+1)%t)===s&&(s=(s+1)%t),u-r<e)return;let h=l&&u-l;return h?Math.round(1e3*f/h):void 0}};function ef(t,e){let r=0,n=ec(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,u=n(a);r=i;let l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&i<=s?(s-i)/u:void 0,event:o};l[e?"download":"upload"]=!0,t(l)}}const eh={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise(function(e,r){let n,o,i=t.data,s=en.from(t.headers).normalize(),{responseType:a,withXSRFToken:u}=t;function l(){t.cancelToken&&t.cancelToken.unsubscribe(n),t.signal&&t.signal.removeEventListener("abort",n)}if(tr.isFormData(i)){if(t3.hasStandardBrowserEnv||t3.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if(!1!==(o=s.getContentType())){let[t,...e]=o?o.split(";").map(t=>t.trim()).filter(Boolean):[];s.setContentType([t||"multipart/form-data",...e].join("; "))}}let c=new XMLHttpRequest;if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(e+":"+r))}let f=eu(t.baseURL,t.url);function h(){if(!c)return;let n=en.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(t,e,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new tn("Request failed with status code "+r.status,[tn.ERR_BAD_REQUEST,tn.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(t){e(t),l()},function(t){r(t),l()},{data:a&&"text"!==a&&"json"!==a?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:n,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),tV(f,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(h)},c.onabort=function(){c&&(r(new tn("Request aborted",tn.ECONNABORTED,t,c)),c=null)},c.onerror=function(){r(new tn("Network Error",tn.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||tG;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new tn(e,n.clarifyTimeoutError?tn.ETIMEDOUT:tn.ECONNABORTED,t,c)),c=null},t3.hasStandardBrowserEnv&&(u&&tr.isFunction(u)&&(u=u(t)),u||!1!==u&&el(f))){let e=t.xsrfHeaderName&&t.xsrfCookieName&&ea.read(t.xsrfCookieName);e&&s.set(t.xsrfHeaderName,e)}void 0===i&&s.setContentType(null),"setRequestHeader"in c&&tr.forEach(s.toJSON(),function(t,e){c.setRequestHeader(e,t)}),tr.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),a&&"json"!==a&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",ef(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ef(t.onUploadProgress)),(t.cancelToken||t.signal)&&(n=e=>{c&&(r(!e||e.type?new es(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(n),t.signal&&(t.signal.aborted?n():t.signal.addEventListener("abort",n)));let d=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(f);if(d&&-1===t3.protocols.indexOf(d)){r(new tn("Unsupported protocol "+d+":",tn.ERR_BAD_REQUEST,t));return}c.send(i||null)})}};tr.forEach(eh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}});const ed=t=>`- ${t}`,ep=t=>tr.isFunction(t)||null===t||!1===t;var eg={getAdapter:t=>{let e,r;let{length:n}=t=tr.isArray(t)?t:[t],o={};for(let i=0;i<n;i++){let n;if(r=e=t[i],!ep(e)&&void 0===(r=eh[(n=String(e)).toLowerCase()]))throw new tn(`Unknown adapter '${n}'`);if(r)break;o[n||"#"+i]=r}if(!r){let t=Object.entries(o).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build"));throw new tn("There is no suitable adapter to dispatch the request "+(n?t.length>1?"since :\n"+t.map(ed).join("\n"):" "+ed(t[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:eh};function em(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new es(null,t)}function ey(t){return em(t),t.headers=en.from(t.headers),t.data=eo.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1),eg.getAdapter(t.adapter||t6.adapter)(t).then(function(e){return em(t),e.data=eo.call(t,t.transformResponse,e),e.headers=en.from(e.headers),e},function(e){return!ei(e)&&(em(t),e&&e.response&&(e.response.data=eo.call(t,t.transformResponse,e.response),e.response.headers=en.from(e.response.headers))),Promise.reject(e)})}const eb=t=>t instanceof en?t.toJSON():t;function ev(t,e){e=e||{};let r={};function n(t,e,r){return tr.isPlainObject(t)&&tr.isPlainObject(e)?tr.merge.call({caseless:r},t,e):tr.isPlainObject(e)?tr.merge({},e):tr.isArray(e)?e.slice():e}function o(t,e,r){return tr.isUndefined(e)?tr.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}function i(t,e){if(!tr.isUndefined(e))return n(void 0,e)}function s(t,e){return tr.isUndefined(e)?tr.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}function a(r,o,i){return i in e?n(r,o):i in t?n(void 0,r):void 0}let u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>o(eb(t),eb(e),!0)};return tr.forEach(Object.keys(Object.assign({},t,e)),function(n){let i=u[n]||o,s=i(t[n],e[n],n);tr.isUndefined(s)&&i!==a||(r[n]=s)}),r}const ew="1.6.5",eE={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{eE[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const e_={};eE.transitional=function(t,e,r){function n(t,e){return"[Axios v"+ew+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}return(r,o,i)=>{if(!1===t)throw new tn(n(o," has been removed"+(e?" in "+e:"")),tn.ERR_DEPRECATED);return e&&!e_[o]&&(e_[o]=!0,console.warn(n(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,o,i)}};var eA={assertOptions:function(t,e,r){if("object"!=typeof t)throw new tn("options must be an object",tn.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),o=n.length;for(;o-- >0;){let i=n[o],s=e[i];if(s){let e=t[i],r=void 0===e||s(e,i,t);if(!0!==r)throw new tn("option "+i+" must be "+r,tn.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new tn("Unknown option "+i,tn.ERR_BAD_OPTION)}},validators:eE};const eS=eA.validators;class eO{constructor(t){this.defaults=t,this.interceptors={request:new tW,response:new tW}}request(t,e){let r,n;"string"==typeof t?(e=e||{}).url=t:e=t||{};let{transitional:o,paramsSerializer:i,headers:s}=e=ev(this.defaults,e);void 0!==o&&eA.assertOptions(o,{silentJSONParsing:eS.transitional(eS.boolean),forcedJSONParsing:eS.transitional(eS.boolean),clarifyTimeoutError:eS.transitional(eS.boolean)},!1),null!=i&&(tr.isFunction(i)?e.paramsSerializer={serialize:i}:eA.assertOptions(i,{encode:eS.function,serialize:eS.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase();let a=s&&tr.merge(s.common,s[e.method]);s&&tr.forEach(["delete","get","head","post","put","patch","common"],t=>{delete s[t]}),e.headers=en.concat(a,s);let u=[],l=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(l=l&&t.synchronous,u.unshift(t.fulfilled,t.rejected))});let c=[];this.interceptors.response.forEach(function(t){c.push(t.fulfilled,t.rejected)});let f=0;if(!l){let t=[ey.bind(this),void 0];for(t.unshift.apply(t,u),t.push.apply(t,c),n=t.length,r=Promise.resolve(e);f<n;)r=r.then(t[f++],t[f++]);return r}n=u.length;let h=e;for(f=0;f<n;){let t=u[f++],e=u[f++];try{h=t(h)}catch(t){e.call(this,t);break}}try{r=ey.call(this,h)}catch(t){return Promise.reject(t)}for(f=0,n=c.length;f<n;)r=r.then(c[f++],c[f++]);return r}getUri(t){return tV(eu((t=ev(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}tr.forEach(["delete","get","head","options"],function(t){eO.prototype[t]=function(e,r){return this.request(ev(r||{},{method:t,url:e,data:(r||{}).data}))}}),tr.forEach(["post","put","patch"],function(t){function e(e){return function(r,n,o){return this.request(ev(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}eO.prototype[t]=e(),eO.prototype[t+"Form"]=e(!0)});class eR{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),this.promise.then=t=>{let e;let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,n,o){r.reason||(r.reason=new es(t,n,o),e(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new eR(function(e){t=e}),cancel:t}}}const eT={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eT).forEach(([t,e])=>{eT[e]=t});const eB=function t(e){let r=new eO(e),n=S(eO.prototype.request,r);return tr.extend(n,eO.prototype,r,{allOwnKeys:!0}),tr.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return t(ev(e,r))},n}(t6);eB.Axios=eO,eB.CanceledError=es,eB.CancelToken=eR,eB.isCancel=ei,eB.VERSION=ew,eB.toFormData=tH,eB.AxiosError=tn,eB.Cancel=eB.CanceledError,eB.all=function(t){return Promise.all(t)},eB.spread=function(t){return function(e){return t.apply(null,e)}},eB.isAxiosError=function(t){return tr.isObject(t)&&!0===t.isAxiosError},eB.mergeConfig=ev,eB.AxiosHeaders=en,eB.formToJSON=t=>t5(tr.isHTMLForm(t)?new FormData(t):t),eB.getAdapter=eg.getAdapter,eB.HttpStatusCode=eT,eB.default=eB;const{Axios:eU,AxiosError:eC,CanceledError:eL,isCancel:ex,CancelToken:eN,VERSION:eP,all:ej,Cancel:ek,isAxiosError:eI,spread:eF,toFormData:eD,AxiosHeaders:eM,HttpStatusCode:eq,formToJSON:eH,getAdapter:ez,mergeConfig:e$}=eB;var eJ=eB.create({baseURL:"http://localhost:3021"}),eK=class{constructor(){this.user=[]}async getUser(t,e){try{let r=(await eJ.get("/users",{params:{email:t,password:e}})).data[0];if(r&&r.email===t&&r.password===e)return{firstName:r.firstName,lastName:r.lastName,email:r.email};return null}catch(t){throw console.error("Error fetching user:",t),t}}async addUser(t,e,r,n){try{eJ.post("/users",{firstName:t,lastName:e,email:r,password:n})}catch(t){throw console.error("Error fetching user:",t),t}}};new A(new _,new eK);
//# sourceMappingURL=index.8b87a1c8.js.map
