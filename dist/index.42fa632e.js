var e,t,r,n,o,i,s=globalThis;function a(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var l=()=>`
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
              >By clicking 'Log In' you agree to our website Kicks<u>Club Terms &
              Conditions, Kicks Privacy Notice</u> and <u>Terms & Conditions.</u></label
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

    `,c=()=>`
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
    `,u=()=>{let e=localStorage.getItem("users"),t=e?JSON.parse(e):null;if(!t)return`
            <header id="header-container" class="header">
                <img src="/search.171c0435.svg" alt="" />
                <img src="/notifications.8b2852f2.svg" alt="" />
                
                <button class="header__button">
                    <a href="/login">Log in </a>
                </button>
            </header>
        `;{let e=`${t.firstName} ${t.lastName}`;return`
            <header id="header-container" class="header">
                <div id="searchBox" class="header__search hidden">
                    <input class="header__search--input" id="searchInput" type="text" placeholder="Search...">
                    <figure>
                        <img id="searchIcon" src="/search.171c0435.svg" alt="" />
                    </figure>
                </div>  
                <figure class="noti-btn">
                    <img src="/notifications.8b2852f2.svg" alt="" />
                    <figcaption class="noti-list">
                    </figcaption>
                </figure>
                <select class="header__select">
                    <option value="">${e}</option>
                    <option value="logout">Log Out</option>
                    <option value="changePassword">Change Password</option>
                </select>
            </header>
        `}},d=()=>`
    <section class="sidebar">
        <figure class="sidebar__logo">
          <img src="/logo.3e864662.svg" alt="" />
        </figure>

        <div class="sidebar__menu">
          <a href="/dashboard" class="sidebar__menu--item">
            <img src="/dashboaard.6c717686.svg" alt="" class="icon" />
            <img class="icon white" src="/dashboard-white.c512d05a.svg" alt="" />
            <p>dashboard</p>
          </a>
          <a href="/product/all" class="sidebar__menu--item">
            <img src="/all-products.897c51a3.svg" alt="" />
            <img class="white" src="/all-products-white.3ef31713.svg" alt="" />
            <p>all products</p>
          </a>
          <a href="/product/table" class="sidebar__menu--item">
            <img src="/product-list.7f703628.svg" alt="" />
            <img class="white" src="/product-list-white.7a51d84c.svg" alt="" />
            <p>product list</p>
          </a>
        </div>

        <div class="sidebar__category">
          <h2>Categories</h2>
          <img src="/chevron_down-big.30530540.svg" alt="" />
        </div>
      </section>
    `,h=()=>`
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
    `,f=()=>{let e='<div class="pagination">';e+='<button id="current" class="pagination-btn">1</button>';for(let t=2;t<=10;t++)e+=`<button class="hide pagination-btn">${t}</button>`;return e+`
    <button id="next" class="pagination-btn">
        <p>NEXT</p>
        <img src="/chevron_forward.c5f0065d.svg" alt="" />
    </button>
  </div>`};const p=e=>`
    <tr class="product-row" id="${e.id}">
      <td>
        <input type="checkbox" id="checkbox" class="product-checkbox"  />
      </td>
      <td>${e.name}</td>
      <td>${e.id}</td>
      <td>${e.amount}</td>
      <td>${e.category}</td>
      
      <td class="row">
        <img src="${e.image}" alt="" />
        <p>${e.brand}</p>
      </td>
      <td>
        <div
          <div class="stock-wrapper">
          <span class="${e.status?"stock":"sold-out"}"></span>
          <p>${e.status?"Stock":"Sold out"}</p>
          </div>
        </div>
      </td>
      <td>${e.price}</td>
    </tr>
  `;var m=(e=[])=>`
    ${e.map(e=>p(e)).join("")}
  `,g=e=>`
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
            ${m(e)}
          </tbody>
      </table>
    </div>
  `,y=()=>`
     <div class="table__header">
        <h2>Product list</h2>
        <p>Home > Product List</p>

        <div class="table__header--btn">
          <select name="" id="">
            <option value="">Change Status</option>
          </select>
        </div>
    </div>
  `,b=()=>`
        <div class="product__form">
            <div class="product__form--item">
                <h3>Product name</h3>
                <input class="restore-value" id="name" type="text" placeholder="Adidas Ultra boost"/>
            </div>

            <div class="product__form--item">
                <h3>Description</h3>
                <input class="restore-value" id="description"  placeholder="Long distance running requires a lot from athletes."></input>
            </div>

            <div class="product__form--item">
                <h3>Category</h3>
                <input class="restore-value" id="category" type="text" placeholder="Sneaker" />
            </div>

            <div class="product__form--item">
                <h3>Brand Name</h3>
                <input class="restore-value" id="brand" type="text" placeholder="Addidas" />
            </div>

            <div class="product__form--row">
                <div class="product__form--item">
                    <h3>SKU</h3>
                    <input class="restore-value" id="sku-id" type="text" />
                </div>
                <div class="product__form--item">
                    <h3>Stock Quantity</h3>
                    <input class="restore-value" id="amount" type="text" placeholder="21" />
                </div>
            </div>
            <div class="product__form--row">
                <div class="product__form--item">
                    <h3>Regular Price</h3>
                    <input class="restore-value" id="price" type="text" placeholder="$110.40" />
                </div>
                <div class="product__form--item">
                    <h3>Sale Price</h3>
                    <input class="restore-value" id="sale-price" type="text" placeholder="$450" />
                </div>
            </div>

            <div class="product__form--item">
                <h3>Tag</h3>
                <div class="product--btn">
                    <button id="name-product-1"><a href="">Adidas</a></button>
                    <button id="name-product-2"><a href="">Shoes</a></button>
                    <button id="name-product-3"><a href="">Sneakers</a></button>
                    <button id="name-product-4"><a href="">Ultraboost</a></button>
                </div>
            </div>
      </div>
    `,v=()=>`
        <div class="product__image">
            <figure>
                <img src="/blue-shoes.e7aa0eb3.png" alt="" />
            </figure>

            <div class="product__gallery">
                <h3>Product Gallery</h3>
                <label for="imageUpload" class="product__gallery--img">
                    <img src="/ph_image-light.d6655624.svg" alt="" />
                    <div id="para">
                        <p>Drop your imager here, or browse</p>
                        <p>Jpeg, png are allowed</p>
                        <input hidden type="file" accept="image/*" id="imageUpload">
                    </div>
                </label>
            </div>

            <div class="product__thumbnail">
                <div class="product__thumbnail--list">
                <figure>  
                <img class="img-preview" src="/orange-shoes.71d5365a.jpg" alt="" />
                    </figure>
                    <div class="product__thumbnail--detail">
                    <p>Product thumbnail.png</p>
                    <span> </span>
                    </div>
                    <img src="/check-success.f06f1f23.svg" alt="" />
                </div>

                <div class="product__thumbnail--list">
                <figure>
                <img class="img-preview" src="/orange-shoes.71d5365a.jpg" alt="" />
                    </figure>
                    <div class="product__thumbnail--detail">
                    <p>Product thumbnail.png</p>
                    <span> </span>
                    </div>
                    <img src="/check-success.f06f1f23.svg" alt="" />
                </div>

                <div class="product__thumbnail--list">
                <figure>
                <img class="img-preview" src="/orange-shoes.71d5365a.jpg" alt="" />
                    </figure>
                    <div class="product__thumbnail--detail">
                    <p>Product thumbnail.png</p>
                    <span> </span>
                    </div>
                    <img src="/check-success.f06f1f23.svg" alt="" />
                </div>

                <div class="product__thumbnail--list">
                <figure>
                <img class="img-preview" src="/orange-shoes.71d5365a.jpg" alt="" />
                    </figure>
                    <div class="product__thumbnail--detail">
                    <p>Product thumbnail.png</p>
                    <span> </span>
                    </div>
                    <img src="/check-success.f06f1f23.svg" alt="" />
                </div>
            </div>
      </div>
    `,w=()=>`
        <div class="product__action">
            <button id="btn-add">add</button>
            <button id="btn-update">update</button>
            <button id="btn-delete">delete</button>
            <button id="btn-cancel">cancel</button>
        </div>
    `,E=()=>`
        <div class="product--all">
            <div class = "product">
                ${b()}
                <div class="product-right">
                    ${v()}
                    ${w()}
                </div>
            </div>
        </div>
    `,S=()=>`
        <div class="table__header">
            <h2>Product details</h2>
            <p>Home > All Products > Product Details</p>
        </div>
    `,_=class{constructor(){this.routes=[],this.currentRoute=null}define(e,t,r,n,o,i=[]){let s=RegExp("^"+e.replace(/:[^\s/]+/g,"([\\w-]+)")+"$");this.routes.push({pattern:s,element:t,params:i,controller:r,view:n,service:o})}listen(){let e=window.location.pathname,t=this.findRoute();if(t){let r=this.extractParams(e,t.pattern,t.params),n="function"==typeof t.element?t.element(r):t.element,o=document.getElementById("root");"string"==typeof n?o.innerHTML=n:o.appendChild(n)}else console.error("No matching route found.")}findRoute(){let e=window.location.pathname;return this.routes.find(t=>t.pattern.test(e))}extractParams(e,t,r){let n=e.match(t),o={};return n&&r.length===n.length-1&&r.forEach((e,t)=>{o[e]=n[t+1]}),o}},A=()=>`
        <div class="box-container">
            <div id="box">
                <h1>Change Password <span>choose a good one!</span></h1>
                <form>
                    <p>
                        <input type="password" value="" placeholder="Enter Password" id="p" class="password">
                    </p>
                    <p>     
                        <input type="password" value="" placeholder="Confirm Password" id="p-c" class="password">
                        <div id="strong"><span></span></div>
                        <div id="valid"></div>
                        <small>Minimum 8 characters with at least one uppercase, one lowercase,one special character and a number</small>
                    </p>
                    <button class="button">Submit</button>
                    <button class="button" type="button">
                        <a href="/product/table">Back</a>
                    </button>
                </form>
            </div>
        </div>
    `,T=class{constructor(e,t){this.view=e,this.service=t,this.login()}login(){this.view.login(this.service.getUser)}};const B=e=>{e.classList.add("hide"),e.timeoutId&&clearTimeout(e.timeoutId),setTimeout(()=>e.remove(),500)},O=(e="error",t="Error: Fail to implement!")=>{let r=document.querySelector(".notifications");if(!r){console.error('Element with class "notifications" not found.');return}let n=document.createElement("li");n.className=`toast ${e}`,n.innerHTML=`
      <div class="column">
        <i class="${({error:"ti-na",info:"ti-info-alt",warning:"ti-alert"})[e]}"></i>
        <span>${t}</span>
      </div>
      <i class="ti-close"></i>
  `,r?(r.appendChild(n),n.timeoutId=setTimeout(()=>B(n),5e3)):console.error('Element with class "notifications" not found.')};var P=class{constructor(){}login(e){this.formLogin=document.querySelector(".form__right"),this.formLogin?.addEventListener("submit",async t=>{t.preventDefault();let r=document.querySelector('.form__right input[type="text"]').value,n=document.querySelector('.form__right input[type="password"]').value,o=document.querySelectorAll("input[type]:checked");if(o?.length<1){O("warning","You need to agree policy");return}try{let t=await e(r,n);if(t){let{password:e,...r}=t;console.log(r),localStorage.setItem("users",JSON.stringify(r)),window.location.href="/product/table"}else O("error","User not found")}catch(e){console.log(e)}})}};function L(e,t){return function(){return e.apply(t,arguments)}}const{toString:R}=Object.prototype,{getPrototypeOf:N}=Object,x=(e=Object.create(null),t=>{let r=R.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}),C=e=>(e=e.toLowerCase(),t=>x(t)===e),U=e=>t=>typeof t===e,{isArray:I}=Array,k=U("undefined"),j=C("ArrayBuffer"),M=U("string"),F=U("function"),D=U("number"),q=e=>null!==e&&"object"==typeof e,$=e=>{if("object"!==x(e))return!1;let t=N(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},H=C("Date"),z=C("File"),J=C("Blob"),V=C("FileList"),K=C("URLSearchParams");function W(e,t,{allOwnKeys:r=!1}={}){let n,o;if(null!=e){if("object"!=typeof e&&(e=[e]),I(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let o;let i=r?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;for(n=0;n<s;n++)o=i[n],t.call(null,e[o],o,e)}}}function G(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),o=n.length;for(;o-- >0;)if(t===(r=n[o]).toLowerCase())return r;return null}const Y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:s,X=e=>!k(e)&&e!==Y,Z=(t="undefined"!=typeof Uint8Array&&N(Uint8Array),e=>t&&e instanceof t),Q=C("HTMLFormElement"),ee=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),et=C("RegExp"),er=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};W(r,(r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)}),Object.defineProperties(e,n)},en="abcdefghijklmnopqrstuvwxyz",eo="0123456789",ei={DIGIT:eo,ALPHA:en,ALPHA_DIGIT:en+en.toUpperCase()+eo},es=C("AsyncFunction");var ea={isArray:I,isArrayBuffer:j,isBuffer:function(e){return null!==e&&!k(e)&&null!==e.constructor&&!k(e.constructor)&&F(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||F(e.append)&&("formdata"===(t=x(e))||"object"===t&&F(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&j(e.buffer)},isString:M,isNumber:D,isBoolean:e=>!0===e||!1===e,isObject:q,isPlainObject:$,isUndefined:k,isDate:H,isFile:z,isBlob:J,isRegExp:et,isFunction:F,isStream:e=>q(e)&&F(e.pipe),isURLSearchParams:K,isTypedArray:Z,isFileList:V,forEach:W,merge:function e(){let{caseless:t}=X(this)&&this||{},r={},n=(n,o)=>{let i=t&&G(r,o)||o;$(r[i])&&$(n)?r[i]=e(r[i],n):$(n)?r[i]=e({},n):I(n)?r[i]=n.slice():r[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&W(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(W(t,(t,n)=>{r&&F(t)?e[n]=L(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,s;let a={};if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)s=o[i],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=!1!==r&&N(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:x,kindOfTest:C,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(I(e))return e;let t=e.length;if(!D(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=(e&&e[Symbol.iterator]).call(e);for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:Q,hasOwnProperty:ee,hasOwnProp:ee,reduceDescriptors:er,freezeMethods:e=>{er(e,(t,r)=>{if(F(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;if(F(e[r])){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(I(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:G,global:Y,isContextDefined:X,ALPHABET:ei,generateString:(e=16,t=ei.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&F(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(q(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let o=I(e)?[]:{};return W(e,(e,t)=>{let i=r(e,n+1);k(i)||(o[t]=i)}),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:es,isThenable:e=>e&&(q(e)||F(e))&&F(e.then)&&F(e.catch)};function el(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}ea.inherits(el,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ea.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ec=el.prototype,eu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{eu[e]={value:e}}),Object.defineProperties(el,eu),Object.defineProperty(ec,"isAxiosError",{value:!0}),el.from=(e,t,r,n,o,i)=>{let s=Object.create(ec);return ea.toFlatObject(e,s,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),el.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s},n=function(e){for(var t,r=e.length,n=r%3,o=[],i=0,s=r-n;i<s;i+=16383)o.push(function(e,t,r){for(var n,o=[],i=t;i<r;i+=3)o.push(ed[(n=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]))>>18&63]+ed[n>>12&63]+ed[n>>6&63]+ed[63&n]);return o.join("")}(e,i,i+16383>s?s:i+16383));return 1===n?o.push(ed[(t=e[r-1])>>2]+ed[t<<4&63]+"=="):2===n&&o.push(ed[(t=(e[r-2]<<8)+e[r-1])>>10]+ed[t>>4&63]+ed[t<<2&63]+"="),o.join("")};for(var ed=[],eh=[],ef="undefined"!=typeof Uint8Array?Uint8Array:Array,ep="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",em=0,eg=ep.length;em<eg;++em)ed[em]=ep[em],eh[ep.charCodeAt(em)]=em;eh["-".charCodeAt(0)]=62,eh["_".charCodeAt(0)]=63,o=function(e,t,r,n,o){var i,s,a=8*o-n-1,l=(1<<a)-1,c=l>>1,u=-7,d=r?o-1:0,h=r?-1:1,f=e[t+d];for(d+=h,i=f&(1<<-u)-1,f>>=-u,u+=a;u>0;i=256*i+e[t+d],d+=h,u-=8);for(s=i&(1<<-u)-1,i>>=-u,u+=n;u>0;s=256*s+e[t+d],d+=h,u-=8);if(0===i)i=1-c;else{if(i===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,n),i-=c}return(f?-1:1)*s*Math.pow(2,i-n)},i=function(e,t,r,n,o,i){var s,a,l,c=8*i-o-1,u=(1<<c)-1,d=u>>1,h=23===o?5960464477539062e-23:0,f=n?0:i-1,p=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?t+=h/l:t+=h*Math.pow(2,1-d),t*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(t*l-1)*Math.pow(2,o),s+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,o),s=0));o>=8;e[r+f]=255&a,f+=p,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;e[r+f]=255&s,f+=p,s/=256,c-=8);e[r+f-p]|=128*m};var ey="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function eb(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,ev.prototype),t}function ev(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return eS(e)}return ew(e,t,r)}function ew(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!ev.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|eB(e,t),n=eb(r),o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(eq(e,Uint8Array)){var t=new Uint8Array(e);return eA(t.buffer,t.byteOffset,t.byteLength)}return e_(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(eq(e,ArrayBuffer)||e&&eq(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(eq(e,SharedArrayBuffer)||e&&eq(e.buffer,SharedArrayBuffer)))return eA(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return ev.from(n,t,r);var o=function(e){if(ev.isBuffer(e)){var t,r=0|eT(e.length),n=eb(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?eb(0):e_(e):"Buffer"===e.type&&Array.isArray(e.data)?e_(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ev.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function eE(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function eS(e){return eE(e),eb(e<0?0:0|eT(e))}function e_(e){for(var t=e.length<0?0:0|eT(e.length),r=eb(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function eA(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),ev.prototype),n}function eT(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function eB(e,t){if(ev.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||eq(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return eM(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return eF(e).length;default:if(o)return n?-1:eM(e).length;t=(""+t).toLowerCase(),o=!0}}function eO(e,t,r){var o,i,s=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=e$[e[i]];return o}(this,t,r);case"utf8":case"utf-8":return eN(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":return o=t,i=r,0===o&&i===this.length?n(this):n(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,t,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function eP(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function eL(e,t,r,n,o){var i;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r)!=i&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1}else if(r<0){if(!o)return -1;r=0}if("string"==typeof t&&(t=ev.from(t,n)),ev.isBuffer(t))return 0===t.length?-1:eR(e,t,r,n,o);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):eR(e,[t],r,n,o);throw TypeError("val must be string, number or Buffer")}function eR(e,t,r,n,o){var i,s=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,a/=2,l/=2,r/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(o){var u=-1;for(i=r;i<a;i++)if(c(e,i)===c(t,-1===u?0:i-u)){if(-1===u&&(u=i),i-u+1===l)return u*s}else -1!==u&&(i-=i-u),u=-1}else for(r+l>a&&(r=a-l),i=r;i>=0;i--){for(var d=!0,h=0;h<l;h++)if(c(e,i+h)!==c(t,h)){d=!1;break}if(d)return i}return -1}function eN(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i,s,a,l,c=e[o],u=null,d=c>239?4:c>223?3:c>191?2:1;if(o+d<=r)switch(d){case 1:c<128&&(u=c);break;case 2:(192&(i=e[o+1]))==128&&(l=(31&c)<<6|63&i)>127&&(u=l);break;case 3:i=e[o+1],s=e[o+2],(192&i)==128&&(192&s)==128&&(l=(15&c)<<12|(63&i)<<6|63&s)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:i=e[o+1],s=e[o+2],a=e[o+3],(192&i)==128&&(192&s)==128&&(192&a)==128&&(l=(15&c)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(u=l)}null===u?(u=65533,d=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),o+=d}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function ex(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function eC(e,t,r,n,o,i){if(!ev.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function eU(e,t,r,n,o,i){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function eI(e,t,r,n,o){return t=+t,r>>>=0,o||eU(e,t,r,4,34028234663852886e22,-34028234663852886e22),i(e,t,r,n,23,4),r+4}function ek(e,t,r,n,o){return t=+t,r>>>=0,o||eU(e,t,r,8,17976931348623157e292,-17976931348623157e292),i(e,t,r,n,52,8),r+8}ev.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ev.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ev.prototype,"parent",{enumerable:!0,get:function(){if(ev.isBuffer(this))return this.buffer}}),Object.defineProperty(ev.prototype,"offset",{enumerable:!0,get:function(){if(ev.isBuffer(this))return this.byteOffset}}),ev.poolSize=8192,ev.from=function(e,t,r){return ew(e,t,r)},Object.setPrototypeOf(ev.prototype,Uint8Array.prototype),Object.setPrototypeOf(ev,Uint8Array),ev.alloc=function(e,t,r){return(eE(e),e<=0)?eb(e):void 0!==t?"string"==typeof r?eb(e).fill(t,r):eb(e).fill(t):eb(e)},ev.allocUnsafe=function(e){return eS(e)},ev.allocUnsafeSlow=function(e){return eS(e)},ev.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ev.prototype},ev.compare=function(e,t){if(eq(e,Uint8Array)&&(e=ev.from(e,e.offset,e.byteLength)),eq(t,Uint8Array)&&(t=ev.from(t,t.offset,t.byteLength)),!ev.isBuffer(e)||!ev.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},ev.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ev.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ev.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=ev.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var i=e[r];if(eq(i,Uint8Array))o+i.length>n.length?ev.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(ev.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},ev.byteLength=eB,ev.prototype._isBuffer=!0,ev.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)eP(this,t,t+1);return this},ev.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)eP(this,t,t+3),eP(this,t+1,t+2);return this},ev.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)eP(this,t,t+7),eP(this,t+1,t+6),eP(this,t+2,t+5),eP(this,t+3,t+4);return this},ev.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?eN(this,0,e):eO.apply(this,arguments)},ev.prototype.toLocaleString=ev.prototype.toString,ev.prototype.equals=function(e){if(!ev.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===ev.compare(this,e)},ev.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ey&&(ev.prototype[ey]=ev.prototype.inspect),ev.prototype.compare=function(e,t,r,n,o){if(eq(e,Uint8Array)&&(e=ev.from(e,e.offset,e.byteLength)),!ev.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;for(var i=o-n,s=r-t,a=Math.min(i,s),l=this.slice(n,o),c=e.slice(t,r),u=0;u<a;++u)if(l[u]!==c[u]){i=l[u],s=c[u];break}return i<s?-1:s<i?1:0},ev.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},ev.prototype.indexOf=function(e,t,r){return eL(this,e,t,r,!0)},ev.prototype.lastIndexOf=function(e,t,r){return eL(this,e,t,r,!1)},ev.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,s,a,l,c,u,d,h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var f=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(t.substr(2*s,2),16);if(a!=a)break;e[r+s]=a}return s}(this,e,t,r);case"utf8":case"utf-8":return o=t,i=r,eD(eM(e,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=t,a=r,eD(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,s,a);case"base64":return l=t,c=r,eD(eF(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,d=r,eD(function(e,t){for(var r,n,o=[],i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(e,this.length-u),this,u,d);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},ev.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},ev.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,ev.prototype),n},ev.prototype.readUintLE=ev.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||ex(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},ev.prototype.readUintBE=ev.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||ex(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},ev.prototype.readUint8=ev.prototype.readUInt8=function(e,t){return e>>>=0,t||ex(e,1,this.length),this[e]},ev.prototype.readUint16LE=ev.prototype.readUInt16LE=function(e,t){return e>>>=0,t||ex(e,2,this.length),this[e]|this[e+1]<<8},ev.prototype.readUint16BE=ev.prototype.readUInt16BE=function(e,t){return e>>>=0,t||ex(e,2,this.length),this[e]<<8|this[e+1]},ev.prototype.readUint32LE=ev.prototype.readUInt32LE=function(e,t){return e>>>=0,t||ex(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ev.prototype.readUint32BE=ev.prototype.readUInt32BE=function(e,t){return e>>>=0,t||ex(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ev.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||ex(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},ev.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||ex(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},ev.prototype.readInt8=function(e,t){return(e>>>=0,t||ex(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},ev.prototype.readInt16LE=function(e,t){e>>>=0,t||ex(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},ev.prototype.readInt16BE=function(e,t){e>>>=0,t||ex(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},ev.prototype.readInt32LE=function(e,t){return e>>>=0,t||ex(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ev.prototype.readInt32BE=function(e,t){return e>>>=0,t||ex(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ev.prototype.readFloatLE=function(e,t){return e>>>=0,t||ex(e,4,this.length),o(this,e,!0,23,4)},ev.prototype.readFloatBE=function(e,t){return e>>>=0,t||ex(e,4,this.length),o(this,e,!1,23,4)},ev.prototype.readDoubleLE=function(e,t){return e>>>=0,t||ex(e,8,this.length),o(this,e,!0,52,8)},ev.prototype.readDoubleBE=function(e,t){return e>>>=0,t||ex(e,8,this.length),o(this,e,!1,52,8)},ev.prototype.writeUintLE=ev.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;eC(this,e,t,r,o,0)}var i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},ev.prototype.writeUintBE=ev.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;eC(this,e,t,r,o,0)}var i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},ev.prototype.writeUint8=ev.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||eC(this,e,t,1,255,0),this[t]=255&e,t+1},ev.prototype.writeUint16LE=ev.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||eC(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ev.prototype.writeUint16BE=ev.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||eC(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ev.prototype.writeUint32LE=ev.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||eC(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ev.prototype.writeUint32BE=ev.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||eC(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ev.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);eC(this,e,t,r,o-1,-o)}var i=0,s=1,a=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},ev.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);eC(this,e,t,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},ev.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||eC(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ev.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||eC(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ev.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||eC(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ev.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||eC(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ev.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||eC(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ev.prototype.writeFloatLE=function(e,t,r){return eI(this,e,t,!0,r)},ev.prototype.writeFloatBE=function(e,t,r){return eI(this,e,t,!1,r)},ev.prototype.writeDoubleLE=function(e,t,r){return ek(this,e,t,!0,r)},ev.prototype.writeDoubleBE=function(e,t,r){return ek(this,e,t,!1,r)},ev.prototype.copy=function(e,t,r,n){if(!ev.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},ev.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!ev.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var o,i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var s=ev.isBuffer(e)?e:ev.from(e,n),a=s.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=s[o%a]}return this};var ej=/[^+/0-9A-Za-z-_]/g;function eM(e,t){t=t||1/0;for(var r,n=e.length,o=null,i=[],s=0;s<n;++s){if((r=e.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319||s+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function eF(e){return function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),o=n[0],i=n[1],s=new ef((o+i)*3/4-i),a=0,l=i>0?o-4:o;for(r=0;r<l;r+=4)t=eh[e.charCodeAt(r)]<<18|eh[e.charCodeAt(r+1)]<<12|eh[e.charCodeAt(r+2)]<<6|eh[e.charCodeAt(r+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;return 2===i&&(t=eh[e.charCodeAt(r)]<<2|eh[e.charCodeAt(r+1)]>>4,s[a++]=255&t),1===i&&(t=eh[e.charCodeAt(r)]<<10|eh[e.charCodeAt(r+1)]<<4|eh[e.charCodeAt(r+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t),s}(function(e){if((e=(e=e.split("=")[0]).trim().replace(ej,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function eD(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}function eq(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var e$=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)t[n+o]=e[r]+e[o];return t}();function eH(e){return ea.isPlainObject(e)||ea.isArray(e)}function ez(e){return ea.endsWith(e,"[]")?e.slice(0,-2):e}function eJ(e,t,r){return e?e.concat(t).map(function(e,t){return e=ez(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const eV=ea.toFlatObject(ea,{},null,function(e){return/^is[A-Z]/.test(e)});var eK=function(e,t,r){if(!ea.isObject(e))throw TypeError("target must be an object");t=t||new FormData;let n=(r=ea.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!ea.isUndefined(t[e])})).metaTokens,o=r.visitor||c,i=r.dots,s=r.indexes,a=(r.Blob||"undefined"!=typeof Blob&&Blob)&&ea.isSpecCompliantForm(t);if(!ea.isFunction(o))throw TypeError("visitor must be a function");function l(e){if(null===e)return"";if(ea.isDate(e))return e.toISOString();if(!a&&ea.isBlob(e))throw new el("Blob is not supported. Use a Buffer instead.");return ea.isArrayBuffer(e)||ea.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):ev.from(e):e}function c(e,r,o){let a=e;if(e&&!o&&"object"==typeof e){if(ea.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else{var c;if(ea.isArray(e)&&(c=e,ea.isArray(c)&&!c.some(eH))||(ea.isFileList(e)||ea.endsWith(r,"[]"))&&(a=ea.toArray(e)))return r=ez(r),a.forEach(function(e,n){ea.isUndefined(e)||null===e||t.append(!0===s?eJ([r],n,i):null===s?r:r+"[]",l(e))}),!1}}return!!eH(e)||(t.append(eJ(o,r,i),l(e)),!1)}let u=[],d=Object.assign(eV,{defaultVisitor:c,convertValue:l,isVisitable:eH});if(!ea.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!ea.isUndefined(r)){if(-1!==u.indexOf(r))throw Error("Circular reference detected in "+n.join("."));u.push(r),ea.forEach(r,function(r,i){!0===(!(ea.isUndefined(r)||null===r)&&o.call(t,r,ea.isString(i)?i.trim():i,n,d))&&e(r,n?n.concat(i):[i])}),u.pop()}}(e),t};function eW(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function eG(e,t){this._pairs=[],e&&eK(e,this,t)}const eY=eG.prototype;function eX(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function eZ(e,t,r){let n;if(!t)return e;let o=r&&r.encode||eX,i=r&&r.serialize;if(n=i?i(t,r):ea.isURLSearchParams(t)?t.toString():new eG(t,r).toString(o)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}eY.append=function(e,t){this._pairs.push([e,t])},eY.toString=function(e){let t=e?function(t){return e.call(this,t,eW)}:eW;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var eQ=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ea.forEach(this.handlers,function(t){null!==t&&e(t)})}},e0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},e1="undefined"!=typeof URLSearchParams?URLSearchParams:eG,e2="undefined"!=typeof FormData?FormData:null,e5="undefined"!=typeof Blob?Blob:null,e3={};a(e3,"hasBrowserEnv",()=>e6),a(e3,"hasStandardBrowserEnv",()=>e8),a(e3,"hasStandardBrowserWebWorkerEnv",()=>e4);const e6="undefined"!=typeof window&&"undefined"!=typeof document,e8=(r="undefined"!=typeof navigator&&navigator.product,e6&&0>["ReactNative","NativeScript","NS"].indexOf(r)),e4="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var e7={...e3,isBrowser:!0,classes:{URLSearchParams:e1,FormData:e2,Blob:e5},protocols:["http","https","file","blob","url","data"]},e9=function(e){if(ea.isFormData(e)&&ea.isFunction(e.entries)){let t={};return ea.forEachEntry(e,(e,r)=>{!function e(t,r,n,o){let i=t[o++];if("__proto__"===i)return!0;let s=Number.isFinite(+i),a=o>=t.length;return(i=!i&&ea.isArray(n)?n.length:i,a)?ea.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r:(n[i]&&ea.isObject(n[i])||(n[i]=[]),e(t,r,n[i],o)&&ea.isArray(n[i])&&(n[i]=function(e){let t,r;let n={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)n[r=o[t]]=e[r];return n}(n[i]))),!s}(ea.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};const te={transitional:e0,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let n=t.getContentType()||"",o=n.indexOf("application/json")>-1,i=ea.isObject(e);if(i&&ea.isHTMLForm(e)&&(e=new FormData(e)),ea.isFormData(e))return o&&o?JSON.stringify(e9(e)):e;if(ea.isArrayBuffer(e)||ea.isBuffer(e)||ea.isStream(e)||ea.isFile(e)||ea.isBlob(e))return e;if(ea.isArrayBufferView(e))return e.buffer;if(ea.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1){var s,a;return(s=e,a=this.formSerializer,eK(s,new e7.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return e7.isNode&&ea.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},a))).toString()}if((r=ea.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return eK(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),function(e,t,r){if(ea.isString(e))try{return(0,JSON.parse)(e),ea.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||te.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&ea.isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw el.from(e,el.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:e7.classes.FormData,Blob:e7.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ea.forEach(["delete","get","head","post","put","patch"],e=>{te.headers[e]={}});const tt=ea.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var tr=e=>{let t,r,n;let o={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||o[t]&&tt[t]||("set-cookie"===t?o[t]?o[t].push(r):o[t]=[r]:o[t]=o[t]?o[t]+", "+r:r)}),o};const tn=Symbol("internals");function to(e){return e&&String(e).trim().toLowerCase()}function ti(e){return!1===e||null==e?e:ea.isArray(e)?e.map(ti):String(e)}const ts=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ta(e,t,r,n,o){if(ea.isFunction(n))return n.call(this,t,r);if(o&&(t=r),ea.isString(t)){if(ea.isString(n))return -1!==t.indexOf(n);if(ea.isRegExp(n))return n.test(t)}}class tl{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function o(e,t,r){let o=to(t);if(!o)throw Error("header name must be a non-empty string");let i=ea.findKey(n,o);i&&void 0!==n[i]&&!0!==r&&(void 0!==r||!1===n[i])||(n[i||t]=ti(e))}let i=(e,t)=>ea.forEach(e,(e,r)=>o(e,r,t));return ea.isPlainObject(e)||e instanceof this.constructor?i(e,t):ea.isString(e)&&(e=e.trim())&&!ts(e)?i(tr(e),t):null!=e&&o(t,e,r),this}get(e,t){if(e=to(e)){let r=ea.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if(ea.isFunction(t))return t.call(this,e,r);if(ea.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=to(e)){let r=ea.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||ta(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function o(e){if(e=to(e)){let o=ea.findKey(r,e);o&&(!t||ta(r,r[o],o,t))&&(delete r[o],n=!0)}}return ea.isArray(e)?e.forEach(o):o(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let o=t[r];(!e||ta(this,this[o],o,e,!0))&&(delete this[o],n=!0)}return n}normalize(e){let t=this,r={};return ea.forEach(this,(n,o)=>{let i=ea.findKey(r,o);if(i){t[i]=ti(n),delete t[o];return}let s=e?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(o).trim();s!==o&&delete t[o],t[s]=ti(n),r[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return ea.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&ea.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=(this[tn]=this[tn]={accessors:{}}).accessors,r=this.prototype;function n(e){let n=to(e);t[n]||(!function(e,t){let r=ea.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})})}(r,e),t[n]=!0)}return ea.isArray(e)?e.forEach(n):n(e),this}}function tc(e,t){let r=this||te,n=t||r,o=tl.from(n.headers),i=n.data;return ea.forEach(e,function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function tu(e){return!!(e&&e.__CANCEL__)}function td(e,t,r){el.call(this,null==e?"canceled":e,el.ERR_CANCELED,t,r),this.name="CanceledError"}tl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ea.reduceDescriptors(tl.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),ea.freezeMethods(tl),ea.inherits(td,el,{__CANCEL__:!0});var th=e7.hasStandardBrowserEnv?{write(e,t,r,n,o,i){let s=[e+"="+encodeURIComponent(t)];ea.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),ea.isString(n)&&s.push("path="+n),ea.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function tf(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e:t}var tp=e7.hasStandardBrowserEnv?function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){let n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){let r=ea.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},tm=function(e,t){let r;let n=Array(e=e||10),o=Array(e),i=0,s=0;return t=void 0!==t?t:1e3,function(a){let l=Date.now(),c=o[s];r||(r=l),n[i]=a,o[i]=l;let u=s,d=0;for(;u!==i;)d+=n[u++],u%=e;if((i=(i+1)%e)===s&&(s=(s+1)%e),l-r<t)return;let h=c&&l-c;return h?Math.round(1e3*d/h):void 0}};function tg(e,t){let r=0,n=tm(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,l=n(a);r=i;let c={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&i<=s?(s-i)/l:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const ty={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){let n,o,i=e.data,s=tl.from(e.headers).normalize(),{responseType:a,withXSRFToken:l}=e;function c(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}if(ea.isFormData(i)){if(e7.hasStandardBrowserEnv||e7.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if(!1!==(o=s.getContentType())){let[e,...t]=o?o.split(";").map(e=>e.trim()).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}}let u=new XMLHttpRequest;if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(t+":"+r))}let d=tf(e.baseURL,e.url);function h(){if(!u)return;let n=tl.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new el("Request failed with status code "+r.status,[el.ERR_BAD_REQUEST,el.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(e){t(e),c()},function(e){r(e),c()},{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:n,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),eZ(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(h)},u.onabort=function(){u&&(r(new el("Request aborted",el.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new el("Network Error",el.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||e0;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new el(t,n.clarifyTimeoutError?el.ETIMEDOUT:el.ECONNABORTED,e,u)),u=null},e7.hasStandardBrowserEnv&&(l&&ea.isFunction(l)&&(l=l(e)),l||!1!==l&&tp(d))){let t=e.xsrfHeaderName&&e.xsrfCookieName&&th.read(e.xsrfCookieName);t&&s.set(e.xsrfHeaderName,t)}void 0===i&&s.setContentType(null),"setRequestHeader"in u&&ea.forEach(s.toJSON(),function(e,t){u.setRequestHeader(t,e)}),ea.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",tg(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",tg(e.onUploadProgress)),(e.cancelToken||e.signal)&&(n=t=>{u&&(r(!t||t.type?new td(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let f=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);if(f&&-1===e7.protocols.indexOf(f)){r(new el("Unsupported protocol "+f+":",el.ERR_BAD_REQUEST,e));return}u.send(i||null)})}};ea.forEach(ty,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}});const tb=e=>`- ${e}`,tv=e=>ea.isFunction(e)||null===e||!1===e;var tw={getAdapter:e=>{let t,r;let{length:n}=e=ea.isArray(e)?e:[e],o={};for(let i=0;i<n;i++){let n;if(r=t=e[i],!tv(t)&&void 0===(r=ty[(n=String(t)).toLowerCase()]))throw new el(`Unknown adapter '${n}'`);if(r)break;o[n||"#"+i]=r}if(!r){let e=Object.entries(o).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new el("There is no suitable adapter to dispatch the request "+(n?e.length>1?"since :\n"+e.map(tb).join("\n"):" "+tb(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:ty};function tE(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new td(null,e)}function tS(e){return tE(e),e.headers=tl.from(e.headers),e.data=tc.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tw.getAdapter(e.adapter||te.adapter)(e).then(function(t){return tE(e),t.data=tc.call(e,e.transformResponse,t),t.headers=tl.from(t.headers),t},function(t){return!tu(t)&&(tE(e),t&&t.response&&(t.response.data=tc.call(e,e.transformResponse,t.response),t.response.headers=tl.from(t.response.headers))),Promise.reject(t)})}const t_=e=>e instanceof tl?e.toJSON():e;function tA(e,t){t=t||{};let r={};function n(e,t,r){return ea.isPlainObject(e)&&ea.isPlainObject(t)?ea.merge.call({caseless:r},e,t):ea.isPlainObject(t)?ea.merge({},t):ea.isArray(t)?t.slice():t}function o(e,t,r){return ea.isUndefined(t)?ea.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function i(e,t){if(!ea.isUndefined(t))return n(void 0,t)}function s(e,t){return ea.isUndefined(t)?ea.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function a(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}let l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(t_(e),t_(t),!0)};return ea.forEach(Object.keys(Object.assign({},e,t)),function(n){let i=l[n]||o,s=i(e[n],t[n],n);ea.isUndefined(s)&&i!==a||(r[n]=s)}),r}const tT="1.6.5",tB={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{tB[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const tO={};tB.transitional=function(e,t,r){function n(e,t){return"[Axios v"+tT+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new el(n(o," has been removed"+(t?" in "+t:"")),el.ERR_DEPRECATED);return t&&!tO[o]&&(tO[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};var tP={assertOptions:function(e,t,r){if("object"!=typeof e)throw new el("options must be an object",el.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let i=n[o],s=t[i];if(s){let t=e[i],r=void 0===t||s(t,i,e);if(!0!==r)throw new el("option "+i+" must be "+r,el.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new el("Unknown option "+i,el.ERR_BAD_OPTION)}},validators:tB};const tL=tP.validators;class tR{constructor(e){this.defaults=e,this.interceptors={request:new eQ,response:new eQ}}request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{};let{transitional:o,paramsSerializer:i,headers:s}=t=tA(this.defaults,t);void 0!==o&&tP.assertOptions(o,{silentJSONParsing:tL.transitional(tL.boolean),forcedJSONParsing:tL.transitional(tL.boolean),clarifyTimeoutError:tL.transitional(tL.boolean)},!1),null!=i&&(ea.isFunction(i)?t.paramsSerializer={serialize:i}:tP.assertOptions(i,{encode:tL.function,serialize:tL.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=s&&ea.merge(s.common,s[t.method]);s&&ea.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=tl.concat(a,s);let l=[],c=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(c=c&&e.synchronous,l.unshift(e.fulfilled,e.rejected))});let u=[];this.interceptors.response.forEach(function(e){u.push(e.fulfilled,e.rejected)});let d=0;if(!c){let e=[tS.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,u),n=e.length,r=Promise.resolve(t);d<n;)r=r.then(e[d++],e[d++]);return r}n=l.length;let h=t;for(d=0;d<n;){let e=l[d++],t=l[d++];try{h=e(h)}catch(e){t.call(this,e);break}}try{r=tS.call(this,h)}catch(e){return Promise.reject(e)}for(d=0,n=u.length;d<n;)r=r.then(u[d++],u[d++]);return r}getUri(e){return eZ(tf((e=tA(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}ea.forEach(["delete","get","head","options"],function(e){tR.prototype[e]=function(t,r){return this.request(tA(r||{},{method:e,url:t,data:(r||{}).data}))}}),ea.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,o){return this.request(tA(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}tR.prototype[e]=t(),tR.prototype[e+"Form"]=t(!0)});class tN{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,o){r.reason||(r.reason=new td(e,n,o),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new tN(function(t){e=t}),cancel:e}}}const tx={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tx).forEach(([e,t])=>{tx[t]=e});const tC=function e(t){let r=new tR(t),n=L(tR.prototype.request,r);return ea.extend(n,tR.prototype,r,{allOwnKeys:!0}),ea.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(tA(t,r))},n}(te);tC.Axios=tR,tC.CanceledError=td,tC.CancelToken=tN,tC.isCancel=tu,tC.VERSION=tT,tC.toFormData=eK,tC.AxiosError=el,tC.Cancel=tC.CanceledError,tC.all=function(e){return Promise.all(e)},tC.spread=function(e){return function(t){return e.apply(null,t)}},tC.isAxiosError=function(e){return ea.isObject(e)&&!0===e.isAxiosError},tC.mergeConfig=tA,tC.AxiosHeaders=tl,tC.formToJSON=e=>e9(ea.isHTMLForm(e)?new FormData(e):e),tC.getAdapter=tw.getAdapter,tC.HttpStatusCode=tx,tC.default=tC;const{Axios:tU,AxiosError:tI,CanceledError:tk,isCancel:tj,CancelToken:tM,VERSION:tF,all:tD,Cancel:tq,isAxiosError:t$,spread:tH,toFormData:tz,AxiosHeaders:tJ,HttpStatusCode:tV,formToJSON:tK,getAdapter:tW,mergeConfig:tG}=tC;var tY=tC.create({baseURL:"https://json-server-0tdv.onrender.com/"}),tX=class{constructor(){}async getUser(e,t){try{let r=(await tY.get("/users",{params:{email:e,password:t}})).data[0];if(r&&r.email===e&&r.password===t)return{firstName:r.firstName,lastName:r.lastName,email:r.email,id:r.id,notifications:r.notifications};return null}catch(e){console.log(e),O("error","Error fetching user")}}},tZ=class{constructor(e,t){this.view=e,this.service=t,this.register()}register(){this.view.register(this.service.addUser)}};const tQ={name:/.+/,description:/.+/,category:/.+/,brand:/.+/,"sku-id":/^\d+$/,amount:/^\d+$/,price:/^\d+(\.\d{1,2})?$/,"sale-price":/^\d+(\.\d{1,2})?$/},t0={name:"Name",description:"Description",category:"Category",brand:"Brand","sku-id":"ID",amount:"Amount",price:"Price","sale-price":"Sale Price"},t1={require:" cannot be empty!",invalid:"please enter valid ",tooShort:" must be longer than 5 characters.",negativeNum:"value must be greater than 0."},t2=(e,t,r)=>{t?e.classList.remove(r):e.classList.add(r)},t5=(e,t)=>{let r=e.target,n=e.target.value,o=e.target.id;switch(t){case"focus":t2(r,!0,"invalid");break;case"blur":{let e=tQ[o].test(n);0===n.trim().length?(O("warning",t0[o]+t1.require),t2(r,!1,"invalid")):"amount"===o||"price"===o||"sale-price"===o||"sku-id"===o?isNaN(parseFloat(n))||0>=parseFloat(n)?(O("warning",t1.negativeNum),t2(r,!1,"invalid")):t2(r,!0,"invalid"):n.length<5?(O("warning",t0[o]+t1.tooShort),t2(r,!1,"invalid")):e?t2(r,!0,"invalid"):(O("warning",t1.invalid+t0[o]),t2(r,e,"invalid"))}}};function t3(e){let t=e.querySelectorAll(".restore-value"),r=!0;return t.forEach(e=>{t5({target:e},"blur"),e.classList.contains("invalid")&&(r=!1)}),t.forEach(e=>e.classList.remove("invalid")),r}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".password").forEach(function(e){e.addEventListener("keyup",function(){document.getElementById("p-c");var e=document.getElementById("p");if(e.value.length>=8){/[A-Z]/.test(e.value)&&/[a-z]/.test(e.value)&&/[!@#$%^&*(),.?":{}|<>]/.test(e.value)&&/\d/.test(e.value)?document.getElementById("valid").innerHTML="":document.getElementById("valid").innerHTML="Password does not meet the requirements";var t="weak";e.value.length>5&&e.value.match(/\d+/g)&&(t="medium"),e.value.length>6&&e.value.match(/[^\w\s]/gi)&&(t="strong"),document.getElementById("strong").getElementsByTagName("span")[0].className=t,document.getElementById("strong").getElementsByTagName("span")[0].innerHTML=t}else document.getElementById("valid").innerHTML="Password must be at least 8 characters long",document.getElementById("strong").getElementsByTagName("span")[0].className="",document.getElementById("strong").getElementsByTagName("span")[0].innerHTML=""})})});var t6=function(){let e=document.getElementById("p").value,t=document.getElementById("p-c").value;return!!(e.trim()&&t.trim())||(O("warning","Please fill in all fields."),!1)},t8=class{constructor(){console.log("view")}register(e){this.form=document.querySelector("form"),this.form?.addEventListener("submit",t=>{t.preventDefault();let r=document.getElementById("firstName").value,n=document.getElementById("lastName").value,o=document.getElementById("password").value,i=document.getElementById("email").value,s=document.querySelectorAll("input[type]:checked");if(s?.length<2){O("warning","You need to agree policy");return}(function(e="",t="",r="",n=""){let o=[{field:e,regex:/^[a-zA-Z]+$/,errorMessage:"First name should contain only characters."},{field:t,regex:/^[a-zA-Z]+$/,errorMessage:"Last name should contain only characters."},{field:e.trim(),errorMessage:"First name cannot be empty."},{field:t.trim(),errorMessage:"Last name cannot be empty."},{field:r,regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,errorMessage:"Password must be at least 8 characters with at least one uppercase, one lowercase, one special character, and a number."},{field:n.trim(),regex:/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,errorMessage:"Please enter a valid email address."}],i=!0;return o.forEach(e=>{switch(!0){case!e.field:case e.regex&&!e.regex.test(e.field):O("warning",e.errorMessage),i=!1}}),i})(r,n,o,i)&&e(r,n,i,o).then(()=>{O("info","Register successfully"),setTimeout(()=>{window.location.href="/login"},5e3)}).catch(e=>{console.error(e),O("error","Error registering user")})})}},t4=function(){let e="";for(let t=0;t<8;t++)e+=Math.floor(10*Math.random());return e},t7=class{constructor({firstName:e,lastName:t,email:r,password:n,notifications:o=[]}){this.id=t4(),this.firstName=e,this.lastName=t,this.email=r,this.password=n,this.notifications=o}},t9=class{constructor(){}async addUser(e,t,r,n){try{let o=new t7({firstName:e,lastName:t,email:r,password:n});console.log(o),tY.post("/users",o)}catch(e){O("error","Error fetching user"),console.log(e)}}},re=class{constructor(e,t){this.view=e,this.service=t,this.showTable(),this.searchShoes(),this.view.logout()}async showTable(){this.view.showTable(await this.service.getAllShoes(),this.service.updateStatus)}searchShoes(){this.view.handleSearch(this.service.searchShoes)}},rt=class{constructor(){this.itemsPerPage=8,this.updateURLParameter(),this.bindNotification(),document.querySelector(".sidebar__menu--item:last-child").classList.add("active")}bindTable(e){let t=document.querySelector(".table-content table");if(!t)return;let r=t.querySelector("tbody");if(e&&e.length)r.innerHTML=m(e);else{r.innerHTML="";let e=document.createElement("tr"),t=document.createElement("td");t.setAttribute("colspan","8"),t.setAttribute("align","center"),t.innerText="No row",e.appendChild(t),r.appendChild(e)}document.querySelectorAll(".product-row").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".product-row").id,{target:r}=e;if(r.closest(".stock-wrapper")){e.stopPropagation(),this.switchStatus(t,r,this.updateStatus);return}r.closest(".product-checkbox")||(window.location.href=`/product/detail?productId=${t}`)})})}async showTable(e,t){this.updateStatus=t,this.allShoes=e,this.updatePage(),this.handlePagination()}getCurrentPageFromURL(){return parseInt(new URLSearchParams(window.location.search).get("currentPage"))||1}updateURLParameter(e=1){let t=new URLSearchParams(window.location.search);t.set("currentPage",e),window.history.replaceState({},"",`${window.location.pathname}?${t}`)}updatePage=e=>{let t=(this.getCurrentPageFromURL()-1)*this.itemsPerPage,r=t+this.itemsPerPage,n=e?e.slice(t,r):this.allShoes.slice(t,r);this.bindTable(n)};bindPaginationButtons=()=>{let e=document.querySelectorAll(".pagination-btn"),t=this.getCurrentPageFromURL(),r=Math.min(10,this.totalPages);this.totalPages<=10&&(r=this.totalPages),e.forEach((n,o)=>{o<r?n.style.display="block":n.style.display="none",n.addEventListener("click",()=>{if("next"===n.innerText.toLowerCase()){let r=[...e].findIndex(e=>"current"===e.id);e[r+1].id="current",e[r].id=null,t<this.totalPages&&t++}else e.forEach(e=>{"current"===e.id&&e.removeAttribute("id")}),n.id="current",t=parseInt(n.innerText);this.updateURLParameter(t),this.updatePage(),this.toggleNextButtonVisibility(t,this.totalPages)})})};toggleNextButtonVisibility=(e,t)=>{let r=document.getElementById("next");e===t?r.style.display="none":r.style.display="flex"};async handlePagination(){let e=this.getCurrentPageFromURL();this.totalPages=Math.ceil(this.allShoes.length/this.itemsPerPage),this.updatePage(),this.bindPaginationButtons(),this.toggleNextButtonVisibility(e,this.totalPages)}switchStatus(e,t,r){let n=t.querySelector("span"),o=t.querySelector("p");"Sold out"===o.innerText?(o.innerText="Stock",n.className="stock",r(e,!0)):(o.innerText="Sold out",n.className="sold-out",r(e,!1))}bindNotification(){let e=document.querySelector(".noti-list"),t=JSON.parse(localStorage.getItem("users")).notifications.map(e=>`<p class="noti-para">${e}</p>`).join("");e.innerHTML=t}handleSearch(e){let t=document.getElementById("searchIcon"),r=document.querySelector(".header__search--input"),n=document.getElementById("searchInput");t.addEventListener("click",()=>{r.classList.toggle("show")});let o=this.debounce(async t=>{let r=t.target.value.trim(),n=await e(r);this.updatePage(n)},500);n.addEventListener("input",o)}debounce(e,t){let r;return function(...n){r&&clearTimeout(r),r=setTimeout(()=>{e.apply(this,n)},t)}}logout(){this.selects=document.querySelector(".header__select"),this.selects?.addEventListener("change",e=>{let{value:t}=e.target;"logout"===t&&(localStorage.removeItem("users"),window.location.pathname="/login"),"changePassword"===t&&(window.location.pathname="/change-password")})}},rr=class{constructor({id:e,brand:t,name:r,category:n,status:o,image:i,amount:s,price:a,salePrice:l,description:c}={}){this.id=e,this.brand=t,this.name=r,this.category=n,this.status=o,this.image=i,this.amount=s,this.price=a,this.salePrice=l,this.description=c}},rn=class{constructor(){}async getAllShoes(){try{let{data:e}=await tY.get("/shoes");if(e)return this.shoes=await e.map(e=>new rr(e)),this.shoes}catch(e){O("error","Error fetching all shoes")}}async searchShoes(e){try{let{data:t}=await tY.get("/shoes",{params:{q:e}});return t}catch(e){O("error","Error searching shoes")}}async updateStatus(e,t){try{await tY.patch(`/shoes/${e}`,{status:t})}catch(e){O("error","Error updating status")}}},ro=class{constructor(e,t){this.view=e,this.service=t,this.loadSelectedProduct(),this.addShoes(),this.deleteShoes(),this.updateShoes(),this.view.cancelShoes(),this.view.uploadImage()}loadSelectedProduct(){this.view.loadShoesSelected(this.service.getShoes)}addShoes(){this.view.bindAddShoes(this.service.addShoes,this.service.addNoti,this.service.getShoes)}deleteShoes(){this.view.bindDeleteShoes(this.service.deleteShoes)}updateShoes(){this.view.updateShoes(this.service.updateShoes)}},ri=class{constructor(){this.bindNotification(JSON.parse(localStorage.getItem("users")).notifications)}async loadShoesSelected(e){try{let t=new URLSearchParams(window.location.search).get("productId");if(!t)return;let r=await e(t);console.log(r),document.getElementById("name").value=r.name,document.getElementById("description").value=r.description,document.getElementById("category").value=r.category,document.getElementById("brand").value=r.brand,document.getElementById("sku-id").value=r.id,document.getElementById("amount").value=r.amount,document.getElementById("price").value=r.price,document.getElementById("sale-price").value=r.salePrice,document.querySelectorAll(".img-preview").forEach(e=>{e.src=r.image})}catch(e){}}async bindAddShoes(e,t,r){let n=document.getElementById("btn-add");n?.addEventListener("click",async()=>{let n=document.getElementById("name").value,o=document.getElementById("description").value,i=document.getElementById("category").value,s=document.getElementById("brand").value,a=+document.getElementById("sku-id").value,l=document.getElementById("amount").value,c=document.getElementById("price").value,u=document.getElementById("sale-price").value,d=document.getElementById("imageUpload");if(t3(document.querySelector(".product__form"))){let f=await r(a);if(console.log(f),f){O("error","ID already existed");return}var h=new FormData;h.append("image",d.files[0]),fetch("https://api.imgbb.com/1/upload?key=12bf5830553fd071836060cc5f97b484",{method:"POST",body:h}).then(e=>e.json()).then(e=>e.data.url).then(r=>{e(new rr({brand:s,name:n,category:i,status:"",id:a,salePrice:u,amount:l,price:c,description:o,image:r})).then(()=>{O("info","Add shoes successfully"),setTimeout(()=>{window.location.href="/product/table"},3e3)}).catch(e=>{console.error(e),O("error","Error adding shoes")});let d=localStorage.getItem("users"),h=d?JSON.parse(d):null,f=new Date().toLocaleString();h.notifications.push(`You added ${n} at ${f}`),console.log(h),t(h.id,h.notifications),localStorage.setItem("users",JSON.stringify(h))})}else O("error","Error adding shoes")})}bindDeleteShoes(e){let t=document.getElementById("btn-delete");t?.addEventListener("click",async()=>{let t=Number(document.getElementById("sku-id").value);t3(document.querySelector(".product__form"))&&(e(t),O("info","Delete shoes succesfully"),setTimeout(()=>{window.location.href="/product/table"},3e3))})}cancelShoes(){let e=document.getElementById("btn-cancel");e&&e.addEventListener("click",()=>{this.resetForm()})}resetForm(){document.querySelectorAll(".restore-value").forEach(e=>{e.dataset.oldValue||(e.dataset.oldValue=e.value),e.placeholder=e.dataset.oldValue||"Fill in here"})}updateShoes(e){let t=document.getElementById("btn-update");t?.addEventListener("click",()=>{let t=document.getElementById("name").value,r=document.getElementById("description").value,n=document.getElementById("category").value,o=document.getElementById("brand").value,i=+document.getElementById("sku-id").value,s=document.getElementById("amount").value,a=document.getElementById("price").value,l=document.getElementById("sale-price").value,c=document.getElementById("imageUpload");if(t3(document.querySelector(".product__form"))){var u=new FormData;u.append("image",c.files[0]),fetch("https://api.imgbb.com/1/upload?key=12bf5830553fd071836060cc5f97b484",{method:"POST",body:u}).then(e=>e.json()).then(e=>e.data.url).then(c=>{e(i,new rr({id:i,brand:o,category:n,description:r,name:t,amount:s,price:a,salePrice:l,image:c})),O("info","Update shoes succesfully"),setTimeout(()=>{window.location.href="/product/table"},2e3)})}else O("error","Error updating table")})}uploadImage(){let e=document.getElementById("imageUpload"),t=document.querySelectorAll(".img-preview");e?.addEventListener("change",e=>{if(e.target.files.length){let r=URL.createObjectURL(e.target.files[0]);t.forEach(e=>{e.src=r})}})}bindNotification(e=[]){let t=document.querySelector(".noti-list"),r=e.map(e=>`<p class="noti-para">${e}</p>`).join("");t.innerHTML=r}},rs=class{constructor(){}async getShoes(e){try{let{data:t}=await tY.get("/shoes",{params:{id:e}});return t[0]}catch(e){O("error","Error fetching shoes by id")}}async addShoes(e){try{await tY.post("/shoes",e)}catch(e){O("error","Error adding shoes"),console.log(e)}}async addNoti(e,t){try{tY.patch(`/users/${e}`,{notifications:t})}catch(e){O("error","Error fetching user to notification")}}async deleteShoes(e){try{await tY.delete(`/shoes/${e}`,{params:{id:e}})}catch(e){O("error","Error deleting shoes")}}async updateShoes(e,t){try{await tY.patch(`/shoes/${e}`,t)}catch(e){O("error","Error updating shoes"),console.log(e)}}},ra=class{constructor(e,t){this.view=e,this.service=t,this.changePassword()}changePassword(){this.view.changePassword(this.service.changePassword)}},rl=class{constructor(){}changePassword(e){this.form=document.querySelector("form"),this.form?.addEventListener("submit",t=>{t.preventDefault();let r=document.getElementById("p").value,n=document.getElementById("p-c").value,o=localStorage.getItem("users"),i=o?JSON.parse(o):null;t6(i.firstName,i.lastName,r,i.email)&&(console.log(r,n),e(i.firstName,i.lastName,n,i.email,i.id).then(()=>{O("info","Change password sucessfully"),setTimeout(()=>{window.location.pathname="/product/table"},2e3)}).catch(e=>{console.error(e),O("warning","Error. Please enter again")}))})}},rc=class{constructor(){}async changePassword(e,t,r,n,o){try{tY.patch(`/users/${o}`,{firstName:e,lastName:t,password:r,email:n})}catch(e){O("error","Error fetching password again")}}},ru=class{constructor(){document.querySelector(".sidebar__menu--item:nth-child(2)").classList.add("active"),this.ProductAll()}ProductAll(){let e=document.querySelector(".btn");e?.addEventListener("click",()=>{window.location.pathname="product/detail"})}},rd=class{constructor(){document.querySelector(".sidebar__menu--item:first-child").classList.add("active")}},rh=class{constructor(){this.app=document.querySelector("#root"),this.router=new _,this.initRoute(),this.toastList=document.createElement("ul"),this.toastList.classList.add("notifications"),this.app.appendChild(this.toastList);let{controller:e,service:t,view:r}=this.router.findRoute();r&&(r=new r),t&&(t=new t),e&&(e=new e(r,t))}initRoute(){this.router.define("/register",l(),tZ,t8,t9),this.router.define("/login",c(),T,P,tX),this.router.define("/product/table",this.ProductTable(),re,rt,rn),this.router.define("/product/detail",this.ProductDetail(),ro,ri,rs,["productId"]),this.router.define("/change-password",A(),ra,rl,rc),this.router.define("/dashboard",this.Dashboard(),rd),this.router.define("/product/all",this.ProductAll(),ru),this.router.listen()}ProductTable(){let e=document.createElement("div");e.className="container";let t=document.createElement("main");t.className="main";let r=document.createElement("div");return r.className="body__footer",e.innerHTML+=d(),e.appendChild(t),t.innerHTML+=u(),t.appendChild(r),r.innerHTML+=y(),r.innerHTML+=g(),r.innerHTML+=f(),r.innerHTML+=h(),e}ProductDetail(){let e=document.createElement("div");e.className="container";let t=document.createElement("main");t.className="main";let r=document.createElement("div");return r.className="body__footer",e.innerHTML+=d(),e.appendChild(t),t.innerHTML+=u(),t.appendChild(r),r.innerHTML+=S(),r.innerHTML+=E(),r.innerHTML+=h(),e}Dashboard(){let e=document.createElement("div");e.className="container";let t=document.createElement("main");t.className="main";let r=document.createElement("div");r.className="body__footer",e.innerHTML+=d(),e.appendChild(t),t.innerHTML+=u(),t.appendChild(r);let n=document.createElement("div");return n.innerText="Coming soon",r.appendChild(n),r.innerHTML+=h(),e}ProductAll(){let e=document.createElement("div");e.className="container";let t=document.createElement("main");t.className="main";let r=document.createElement("div");r.className="body__footer",e.innerHTML+=d(),e.appendChild(t),t.innerHTML+=u(),t.appendChild(r);let n=document.createElement("div"),o=document.createElement("button");return o.className="btn",o.textContent="Add new product",o.style.backgroundColor="#4a69e2",o.style.color="#ffffff",o.style.padding="10px 20px",o.style.border="none",o.style.borderRadius="5px",o.style.fontSize="16px",o.style.fontWeight="600",o.style.fontFamily="Open Sans, sans-serif",n.appendChild(o),r.appendChild(n),r.innerHTML+=h(),e}},rf=class{constructor(){this.user=[],this.shoes=[]}async updateStatus(e,t){try{await tY.patch(`/shoes/${e}`,{status:t})}catch(e){O("error","Error updating status")}}};new class{constructor(e,t){this.userView=e,this.userService=t}}(new rh,new rf);
//# sourceMappingURL=index.42fa632e.js.map
