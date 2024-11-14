import{_ as c,o as i,c as l,a as n,b as a,w as u,e as s,d as p,r as e}from"./app.1e03d722.js";const r={},d=n("h1",{id:"arthas-spring-boot-starter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#arthas-spring-boot-starter","aria-hidden":"true"},"#"),s(" Arthas Spring Boot Starter")],-1),k=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("p",null,"arthas 3.7.2\u53CA\u4EE5\u540E\u7684\u7248\u672C\u540C\u65F6\u652F\u6301 springboot 2/3")],-1),g=s("\u6700\u65B0\u7248\u672C\uFF1A"),v={href:"https://search.maven.org/search?q=arthas-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"},h=s("\u67E5\u770B"),m=p(`<p>\u914D\u7F6E maven \u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.taobao.arthas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>arthas-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${arthas.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528\u542F\u52A8\u540E\uFF0Cspring \u4F1A\u542F\u52A8 arthas\uFF0C\u5E76\u4E14 attach \u81EA\u8EAB\u8FDB\u7A0B\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E00\u952E\u521B\u5EFA\u5305\u542B Arthas Spring Boot Starter \u7684\u5DE5\u7A0B\uFF1A<a href="https://start.aliyun.com/bootstrap.html/#!dependencies=arthas" target="_blank">\u70B9\u51FB</a></p></div><h2 id="\u914D\u7F6E\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5C5E\u6027" aria-hidden="true">#</a> \u914D\u7F6E\u5C5E\u6027</h2><p>\u6BD4\u5982\uFF0C\u901A\u8FC7\u914D\u7F6E tunnel server \u5B9E\u73B0\u8FDC\u7A0B\u7BA1\u7406\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arthas.agent-id=hsehdfsfghhwertyfad
arthas.tunnel-server=ws://47.75.156.201:7777/ws
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),b=s("\u5168\u90E8\u652F\u6301\u7684\u914D\u7F6E\u9879\uFF1A"),_={href:"https://github.com/alibaba/arthas/blob/master/arthas-spring-boot-starter/src/main/java/com/alibaba/arthas/spring/ArthasProperties.java",target:"_blank",rel:"noopener noreferrer"},f=s("\u53C2\u8003"),x=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("p",null,[s("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Carthas-spring-boot-starter \u4F1A\u7981\u6389"),n("code",null,"stop"),s("\u547D\u4EE4\u3002")])],-1),q=s("\u53C2\u8003\uFF1A"),w=s("Arthas Properties"),y=n("h2",{id:"\u67E5\u770B-endpoint-\u4FE1\u606F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u67E5\u770B-endpoint-\u4FE1\u606F","aria-hidden":"true"},"#"),s(" \u67E5\u770B Endpoint \u4FE1\u606F")],-1),I={class:"custom-container tip"},S=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),A=s("\u9700\u8981\u914D\u7F6E spring boot \u66B4\u9732 endpoint\uFF1A"),j={href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-endpoints",target:"_blank",rel:"noopener noreferrer"},B=s("\u53C2\u8003"),M=p(`<p>\u5047\u5B9A endpoint \u7AEF\u53E3\u662F 8080\uFF0C\u5219\u901A\u8FC7\u4E0B\u9762 url \u53EF\u4EE5\u67E5\u770B\uFF1A</p><p>http://localhost:8080/actuator/arthas</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;arthasConfigMap&quot;: {
        &quot;agent-id&quot;: &quot;hsehdfsfghhwertyfad&quot;,
        &quot;tunnel-server&quot;: &quot;ws://47.75.156.201:7777/ws&quot;,
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u975E-spring-boot-\u5E94\u7528\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u975E-spring-boot-\u5E94\u7528\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u975E spring boot \u5E94\u7528\u4F7F\u7528\u65B9\u5F0F</h2><p>\u975E Spring Boot \u5E94\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u6765\u4F7F\u7528\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.taobao.arthas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>arthas-agent-attach<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${arthas.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.taobao.arthas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>arthas-packaging<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${arthas.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>arthas<span class="token punctuation">.</span>agent<span class="token punctuation">.</span>attach<span class="token punctuation">.</span></span><span class="token class-name">ArthasAgent</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArthasAttachExample</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ArthasAgent</span><span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u914D\u7F6E\u5C5E\u6027\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> configMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        configMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;arthas.appName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        configMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;arthas.tunnelServer&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ws://127.0.0.1:7777/ws&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArthasAgent</span><span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>configMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6CE8\u610F\u914D\u7F6E\u5FC5\u987B\u662F<code>\u9A7C\u5CF0</code>\u7684\uFF0C\u548C spring boot \u7684<code>-</code>\u98CE\u683C\u4E0D\u4E00\u6837\u3002spring boot \u5E94\u7528\u624D\u540C\u65F6\u652F\u6301<code>\u9A7C\u5CF0</code> \u548C <code>-</code>\u98CE\u683C\u7684\u914D\u7F6E\u3002</p></div>`,10);function E(N,L){const t=e("ExternalLinkIcon"),o=e("RouterLink");return i(),l("div",null,[d,k,n("p",null,[g,n("a",v,[h,a(t)])]),m,n("p",null,[b,n("a",_,[f,a(t)])]),x,n("p",null,[q,a(o,{to:"/doc/arthas-properties.html"},{default:u(()=>[w]),_:1})]),y,n("div",I,[S,n("p",null,[A,n("a",j,[B,a(t)])])]),M])}const C=c(r,[["render",E],["__file","spring-boot-starter.html.vue"]]);export{C as default};
