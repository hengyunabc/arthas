import{_ as c,o as r,c as l,a,b as e,w as d,e as s,d as t,r as o}from"./app.1e03d722.js";const p={},u=a("h1",{id:"vmtool",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vmtool","aria-hidden":"true"},"#"),s(" vmtool")],-1),m=a("div",{class:"custom-container tip"},[a("p",{class:"custom-container-title"},"\u63D0\u793A"),a("p",null,"@since 3.5.1")],-1),v={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-vmtool",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"vmtool",-1),b=s("\u5728\u7EBF\u6559\u7A0B"),g=a("p",null,[a("code",null,"vmtool"),s(" \u5229\u7528"),a("code",null,"JVMTI"),s("\u63A5\u53E3\uFF0C\u5B9E\u73B0\u67E5\u8BE2\u5185\u5B58\u5BF9\u8C61\uFF0C\u5F3A\u5236 GC \u7B49\u529F\u80FD\u3002")],-1),k={href:"https://docs.oracle.com/javase/8/docs/platform/jvmti/jvmti.html",target:"_blank",rel:"noopener noreferrer"},_=s("JVM Tool Interface"),x=t(`<h2 id="\u83B7\u53D6\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5BF9\u8C61" aria-hidden="true">#</a> \u83B7\u53D6\u5BF9\u8C61</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ vmtool <span class="token parameter variable">--action</span> getInstances <span class="token parameter variable">--className</span> java.lang.String <span class="token parameter variable">--limit</span> <span class="token number">10</span>
@String<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span>
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com.taobao.arthas.core.shell.session.Session<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session.class<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session.class<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session.class<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>java/util/concurrent/ConcurrentHashMap<span class="token variable">$ValueIterator</span><span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>java/util/concurrent/locks/LockSupport<span class="token punctuation">]</span>,
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u901A\u8FC7 <code>--limit</code>\u53C2\u6570\uFF0C\u53EF\u4EE5\u9650\u5236\u8FD4\u56DE\u503C\u6570\u91CF\uFF0C\u907F\u514D\u83B7\u53D6\u8D85\u5927\u6570\u636E\u65F6\u5BF9 JVM \u9020\u6210\u538B\u529B\u3002\u9ED8\u8BA4\u503C\u662F 10\u3002</p></div><h2 id="\u6307\u5B9A-classloader-name" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A-classloader-name" aria-hidden="true">#</a> \u6307\u5B9A classloader name</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> getInstances <span class="token parameter variable">--classLoaderClass</span> org.springframework.boot.loader.LaunchedURLClassLoader <span class="token parameter variable">--className</span> org.springframework.context.ApplicationContext
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6307\u5B9A-classloader-hash" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A-classloader-hash" aria-hidden="true">#</a> \u6307\u5B9A classloader hash</h2><p>\u53EF\u4EE5\u901A\u8FC7<code>sc</code>\u547D\u4EE4\u67E5\u627E\u5230\u52A0\u8F7D class \u7684 classloader\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ sc <span class="token parameter variable">-d</span> org.springframework.context.ApplicationContext
 class-info        org.springframework.boot.context.embedded.AnnotationConfigEmbeddedWebApplicationContext
 code-source       file:/private/tmp/demo-arthas-spring-boot.jar<span class="token operator">!</span>/BOOT-INF/lib/spring-boot-1.5.13.RELEASE.jar<span class="token operator">!</span>/
 name              org.springframework.boot.context.embedded.AnnotationConfigEmbeddedWebApplicationContext
<span class="token punctuation">..</span>.
 class-loader      +-org.springframework.boot.loader.LaunchedURLClassLoader@19469ea2
                     +-sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@75b84c92
                       +-sun.misc.Launcher<span class="token variable">$ExtClassLoader</span>@4f023edb
 classLoaderHash   19469ea2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u7528<code>-c</code>/<code>--classloader</code> \u53C2\u6570\u6307\u5B9A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> getInstances <span class="token parameter variable">-c</span> 19469ea2 <span class="token parameter variable">--className</span> org.springframework.context.ApplicationContext
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6307\u5B9A\u8FD4\u56DE\u7ED3\u679C\u5C55\u5F00\u5C42\u6570" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u8FD4\u56DE\u7ED3\u679C\u5C55\u5F00\u5C42\u6570" aria-hidden="true">#</a> \u6307\u5B9A\u8FD4\u56DE\u7ED3\u679C\u5C55\u5F00\u5C42\u6570</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>getInstances</code> action \u8FD4\u56DE\u7ED3\u679C\u7ED1\u5B9A\u5230<code>instances</code>\u53D8\u91CF\u4E0A\uFF0C\u5B83\u662F\u6570\u7EC4\u3002</p><p>\u901A\u8FC7 <code>-x</code>/<code>--expand</code> \u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u7ED3\u679C\u7684\u5C55\u5F00\u5C42\u6B21\uFF0C\u9ED8\u8BA4\u503C\u662F 1\u3002</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> getInstances <span class="token parameter variable">-c</span> 19469ea2 <span class="token parameter variable">--className</span> org.springframework.context.ApplicationContext <span class="token parameter variable">-x</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6267\u884C\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u6267\u884C\u8868\u8FBE\u5F0F</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>getInstances</code> action \u8FD4\u56DE\u7ED3\u679C\u7ED1\u5B9A\u5230<code>instances</code>\u53D8\u91CF\u4E0A\uFF0C\u5B83\u662F\u6570\u7EC4\u3002\u53EF\u4EE5\u901A\u8FC7<code>--express</code>\u53C2\u6570\u6267\u884C\u6307\u5B9A\u7684\u8868\u8FBE\u5F0F\u3002</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> getInstances <span class="token parameter variable">--classLoaderClass</span> org.springframework.boot.loader.LaunchedURLClassLoader <span class="token parameter variable">--className</span> org.springframework.context.ApplicationContext <span class="token parameter variable">--express</span> <span class="token string">&#39;instances[0].getBeanDefinitionNames()&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5F3A\u5236-gc" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236-gc" aria-hidden="true">#</a> \u5F3A\u5236 GC</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> forceGc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),f=s("\u53EF\u4EE5\u7ED3\u5408 "),C=a("code",null,"vmoption",-1),L=s(" \u547D\u4EE4\u52A8\u6001\u6253\u5F00"),S=a("code",null,"PrintGC",-1),I=s("\u5F00\u5173\u3002"),w=t(`<h2 id="interrupt-\u6307\u5B9A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#interrupt-\u6307\u5B9A\u7EBF\u7A0B" aria-hidden="true">#</a> interrupt \u6307\u5B9A\u7EBF\u7A0B</h2><p>thread id \u901A\u8FC7<code>-t</code>\u53C2\u6570\u6307\u5B9A\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>thread</code>\u547D\u4EE4\u83B7\u53D6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> interruptThread <span class="token parameter variable">-t</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function A(N,E){const n=o("ExternalLinkIcon"),i=o("RouterLink");return r(),l("div",null,[u,m,a("p",null,[a("a",v,[h,b,e(n)])]),g,a("ul",null,[a("li",null,[a("a",k,[_,e(n)])])]),x,a("ul",null,[a("li",null,[f,e(i,{to:"/doc/vmoption.html"},{default:d(()=>[C]),_:1}),L,S,I])]),w])}const V=c(p,[["render",A],["__file","vmtool.html.vue"]]);export{V as default};
