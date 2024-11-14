import{_ as d,o as l,c as o,a,b as s,w as c,d as r,e,r as t}from"./app.1e03d722.js";const h={},p=r(`<h1 id="arthas-install" tabindex="-1"><a class="header-anchor" href="#arthas-install" aria-hidden="true">#</a> Arthas Install</h1><h2 id="\u5FEB\u901F\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5B89\u88C5" aria-hidden="true">#</a> \u5FEB\u901F\u5B89\u88C5</h2><h3 id="\u4F7F\u7528arthas-boot-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528arthas-boot-\u63A8\u8350" aria-hidden="true">#</a> \u4F7F\u7528<code>arthas-boot</code>\uFF08\u63A8\u8350\uFF09</h3><p>\u4E0B\u8F7D<code>arthas-boot.jar</code>\uFF0C\u7136\u540E\u7528<code>java -jar</code>\u7684\u65B9\u5F0F\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-O</span> https://arthas.aliyun.com/arthas-boot.jar
<span class="token function">java</span> <span class="token parameter variable">-jar</span> arthas-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5370\u5E2E\u52A9\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> arthas-boot.jar <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>\u5982\u679C\u4E0B\u8F7D\u901F\u5EA6\u6BD4\u8F83\u6162\uFF0C\u53EF\u4EE5\u4F7F\u7528 aliyun \u7684\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> arthas-boot.jar --repo-mirror aliyun --use-http
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="\u4F7F\u7528as-sh" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528as-sh" aria-hidden="true">#</a> \u4F7F\u7528<code>as.sh</code></h3><p>Arthas \u652F\u6301\u5728 Linux/Unix/Mac \u7B49\u5E73\u53F0\u4E0A\u4E00\u952E\u5B89\u88C5\uFF0C\u8BF7\u590D\u5236\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u5E76\u7C98\u8D34\u5230\u547D\u4EE4\u884C\u4E2D\uFF0C\u6572 <code>\u56DE\u8F66</code> \u6267\u884C\u5373\u53EF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://arthas.aliyun.com/install.sh <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u547D\u4EE4\u4F1A\u4E0B\u8F7D\u542F\u52A8\u811A\u672C\u6587\u4EF6 <code>as.sh</code> \u5230\u5F53\u524D\u76EE\u5F55\uFF0C\u4F60\u53EF\u4EE5\u653E\u5728\u4EFB\u4F55\u5730\u65B9\u6216\u5C06\u5176\u52A0\u5165\u5230 <code>$PATH</code> \u4E2D\u3002</p><p>\u76F4\u63A5\u5728 shell \u4E0B\u9762\u6267\u884C<code>./as.sh</code>\uFF0C\u5C31\u4F1A\u8FDB\u5165\u4EA4\u4E92\u754C\u9762\u3002</p><p>\u4E5F\u53EF\u4EE5\u6267\u884C<code>./as.sh -h</code>\u6765\u83B7\u53D6\u66F4\u591A\u53C2\u6570\u4FE1\u606F\u3002</p><h2 id="\u5168\u91CF\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5168\u91CF\u5B89\u88C5" aria-hidden="true">#</a> \u5168\u91CF\u5B89\u88C5</h2>`,15),u=e("\u6700\u65B0\u7248\u672C\uFF0C\u70B9\u51FB\u4E0B\u8F7D\uFF1A"),b={href:"https://arthas.aliyun.com/download/latest_version?mirror=aliyun",target:"_blank",rel:"noopener noreferrer"},m=a("img",{src:"https://img.shields.io/maven-central/v/com.taobao.arthas/arthas-packaging.svg?style=flat-square",alt:"",title:"Arthas"},null,-1),v=r(`<p>\u89E3\u538B\u540E\uFF0C\u5728\u6587\u4EF6\u5939\u91CC\u6709<code>arthas-boot.jar</code>\uFF0C\u76F4\u63A5\u7528<code>java -jar</code>\u7684\u65B9\u5F0F\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> arthas-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6253\u5370\u5E2E\u52A9\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> arthas-boot.jar <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u624B\u52A8\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u5B89\u88C5" aria-hidden="true">#</a> \u624B\u52A8\u5B89\u88C5</h2>`,5),_=e("\u624B\u52A8\u5B89\u88C5"),g=r(`<h2 id="\u901A\u8FC7-rpm-deb-\u6765\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-rpm-deb-\u6765\u5B89\u88C5" aria-hidden="true">#</a> \u901A\u8FC7 rpm/deb \u6765\u5B89\u88C5</h2><p>\u5728 releases \u9875\u9762\u4E0B\u8F7D rpm/deb \u5305\uFF1A https://github.com/alibaba/arthas/releases</p><h3 id="\u5B89\u88C5-deb" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-deb" aria-hidden="true">#</a> \u5B89\u88C5 deb</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> arthas*.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5-rpm" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-rpm" aria-hidden="true">#</a> \u5B89\u88C5 rpm</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-i</span> arthas*.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="deb-rpm-\u5B89\u88C5\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#deb-rpm-\u5B89\u88C5\u7684\u7528\u6CD5" aria-hidden="true">#</a> deb/rpm \u5B89\u88C5\u7684\u7528\u6CD5</h3><p>\u5728\u5B89\u88C5\u540E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>as.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u901A\u8FC7-cloud-toolkit-\u63D2\u4EF6\u4F7F\u7528-arthas" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-cloud-toolkit-\u63D2\u4EF6\u4F7F\u7528-arthas" aria-hidden="true">#</a> \u901A\u8FC7 Cloud Toolkit \u63D2\u4EF6\u4F7F\u7528 Arthas</h2>`,10),f={href:"https://github.com/alibaba/arthas/issues/570",target:"_blank",rel:"noopener noreferrer"},k=e("\u901A\u8FC7 Cloud Toolkit \u63D2\u4EF6\u4F7F\u7528 Arthas \u4E00\u952E\u8BCA\u65AD\u8FDC\u7A0B\u670D\u52A1\u5668"),x=a("h2",{id:"\u79BB\u7EBF\u5E2E\u52A9\u6587\u6863",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u79BB\u7EBF\u5E2E\u52A9\u6587\u6863","aria-hidden":"true"},"#"),e(" \u79BB\u7EBF\u5E2E\u52A9\u6587\u6863")],-1),j=e("\u6700\u65B0\u7248\u672C\u79BB\u7EBF\u6587\u6863\u4E0B\u8F7D\uFF1A"),y={href:"https://arthas.aliyun.com/download/doc/latest_version?mirror=aliyun",target:"_blank",rel:"noopener noreferrer"},A=a("img",{src:"https://img.shields.io/maven-central/v/com.taobao.arthas/arthas-packaging.svg?style=flat-square",alt:"",title:"Arthas"},null,-1),L=r(`<h2 id="\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a> \u5378\u8F7D</h2><ul><li><p>\u5728 Linux/Unix/Mac \u5E73\u53F0</p><p>\u5220\u9664\u4E0B\u9762\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.arthas/
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/logs/arthas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Windows \u5E73\u53F0\u76F4\u63A5\u5220\u9664 user home \u4E0B\u9762\u7684<code>.arthas</code>\u548C<code>logs/arthas</code>\u76EE\u5F55</p></li></ul><hr>`,3),w={class:"custom-container warning"},C=a("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),N=e("\u5982\u9700\u8BCA\u65AD jdk 6/7 \u5E94\u7528\uFF0C\u8BF7\u70B9\u51FB"),T={href:"https://arthas.aliyun.com/3.x/doc/install-detail.html",target:"_blank",rel:"noopener noreferrer"},V=e("\u6B64\u5904\u4E0B\u8F7D arthas 3"),B=e("\u3002");function E(I,q){const n=t("ExternalLinkIcon"),i=t("RouterLink");return l(),o("div",null,[p,a("p",null,[u,a("a",b,[m,s(n)])]),v,a("p",null,[s(i,{to:"/doc/manual-install.html"},{default:c(()=>[_]),_:1})]),g,a("ul",null,[a("li",null,[a("a",f,[k,s(n)])])]),x,a("p",null,[j,a("a",y,[A,s(n)])]),L,a("div",w,[C,a("p",null,[N,a("a",T,[V,s(n)]),B])])])}const R=d(h,[["render",E],["__file","install-detail.html.vue"]]);export{R as default};
