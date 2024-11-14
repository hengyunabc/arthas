import{_ as i,o as c,c as p,a as s,b as n,w as r,e as a,d as o,r as t}from"./app.1e03d722.js";const d={},u=s("h1",{id:"getstatic",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#getstatic","aria-hidden":"true"},"#"),a(" getstatic")],-1),m={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-getstatic",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"getstatic",-1),b=a("\u5728\u7EBF\u6559\u7A0B"),k=s("h3",{id:"\u4F7F\u7528\u53C2\u8003",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4F7F\u7528\u53C2\u8003","aria-hidden":"true"},"#"),a(" \u4F7F\u7528\u53C2\u8003")],-1),h=a("\u63A8\u8350\u76F4\u63A5\u4F7F\u7528"),g=a("ognl"),_=a("\u547D\u4EE4\uFF0C\u66F4\u52A0\u7075\u6D3B\u3002"),f=o(`<p>\u901A\u8FC7 getstatic \u547D\u4EE4\u53EF\u4EE5\u65B9\u4FBF\u7684\u67E5\u770B\u7C7B\u7684\u9759\u6001\u5C5E\u6027\u3002\u4F7F\u7528\u65B9\u6CD5\u4E3A<code>getstatic class_name field_name</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ getstatic demo.MathGame random
field: random
@Random<span class="token punctuation">[</span>
    <span class="token assign-left variable">serialVersionUID</span><span class="token operator">=</span>@Long<span class="token punctuation">[</span><span class="token number">3905348978240129619</span><span class="token punctuation">]</span>,
    <span class="token assign-left variable">seed</span><span class="token operator">=</span>@AtomicLong<span class="token punctuation">[</span><span class="token number">120955813885284</span><span class="token punctuation">]</span>,
    <span class="token assign-left variable">multiplier</span><span class="token operator">=</span>@Long<span class="token punctuation">[</span><span class="token number">25214903917</span><span class="token punctuation">]</span>,
    <span class="token assign-left variable">addend</span><span class="token operator">=</span>@Long<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span>,
    <span class="token assign-left variable">mask</span><span class="token operator">=</span>@Long<span class="token punctuation">[</span><span class="token number">281474976710655</span><span class="token punctuation">]</span>,
    <span class="token assign-left variable">DOUBLE_UNIT</span><span class="token operator">=</span>@Double<span class="token punctuation">[</span><span class="token number">1</span>.1102230246251565E-16<span class="token punctuation">]</span>,
    <span class="token assign-left variable">BadBound</span><span class="token operator">=</span>@String<span class="token punctuation">[</span>bound must be positive<span class="token punctuation">]</span>,
    <span class="token assign-left variable">BadRange</span><span class="token operator">=</span>@String<span class="token punctuation">[</span>bound must be greater than origin<span class="token punctuation">]</span>,
    <span class="token assign-left variable">BadSize</span><span class="token operator">=</span>@String<span class="token punctuation">[</span>size must be non-negative<span class="token punctuation">]</span>,
    <span class="token assign-left variable">seedUniquifier</span><span class="token operator">=</span>@AtomicLong<span class="token punctuation">[</span>-3282039941672302964<span class="token punctuation">]</span>,
    <span class="token assign-left variable">nextNextGaussian</span><span class="token operator">=</span>@Double<span class="token punctuation">[</span><span class="token number">0.0</span><span class="token punctuation">]</span>,
    <span class="token assign-left variable">haveNextNextGaussian</span><span class="token operator">=</span>@Boolean<span class="token punctuation">[</span>false<span class="token punctuation">]</span>,
    <span class="token assign-left variable">serialPersistentFields</span><span class="token operator">=</span>@ObjectStreamField<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span>isEmpty<span class="token operator">=</span>false<span class="token punctuation">;</span><span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">]</span>,
    <span class="token assign-left variable">unsafe</span><span class="token operator">=</span>@Unsafe<span class="token punctuation">[</span>sun.misc.Unsafe@2eaa1027<span class="token punctuation">]</span>,
    <span class="token assign-left variable">seedOffset</span><span class="token operator">=</span>@Long<span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">]</span>,
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6307\u5B9A classLoader</li></ul><p>\u6CE8\u610F hashcode \u662F\u53D8\u5316\u7684\uFF0C\u9700\u8981\u5148\u67E5\u770B\u5F53\u524D\u7684 ClassLoader \u4FE1\u606F\uFF0C\u4F7F\u7528<code>sc -d &lt;ClassName&gt;</code>\u63D0\u53D6\u5BF9\u5E94 ClassLoader \u7684 hashcode\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528<code>-c</code>\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u8F93\u5165 hashcode\uFF1A<code>-c &lt;hashcode&gt;</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ getstatic <span class="token parameter variable">-c</span> 3d4eac69 demo.MathGame random
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u53EA\u6709\u552F\u4E00\u5B9E\u4F8B\u7684 ClassLoader \u53EF\u4EE5\u901A\u8FC7<code>--classLoaderClass</code>\u6307\u5B9A class name\uFF0C\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u65B9\u4FBF\uFF1A</p><p><code>getstatic --classLoaderClass sun.misc.Launcher$AppClassLoader demo.MathGame random</code></p><ul><li>\u6CE8: \u8FD9\u91CC classLoaderClass \u5728 java 8 \u662F sun.misc.Launcher$AppClassLoader\uFF0C\u800Cjava 11\u7684classloader\u662Fjdk.internal.loader.ClassLoaders$AppClassLoader\uFF0Ckillercoda \u76EE\u524D\u73AF\u5883\u662F java11\u3002</li></ul><p><code>--classLoaderClass</code> \u7684\u503C\u662F ClassLoader \u7684\u7C7B\u540D\uFF0C\u53EA\u6709\u5339\u914D\u5230\u552F\u4E00\u7684 ClassLoader \u5B9E\u4F8B\u65F6\u624D\u80FD\u5DE5\u4F5C\uFF0C\u76EE\u7684\u662F\u65B9\u4FBF\u8F93\u5165\u901A\u7528\u547D\u4EE4\uFF0C\u800C<code>-c &lt;hashcode&gt;</code>\u662F\u52A8\u6001\u53D8\u5316\u7684\u3002</p><p>\u5982\u679C\u8BE5\u9759\u6001\u5C5E\u6027\u662F\u4E00\u4E2A\u590D\u6742\u5BF9\u8C61\uFF0C\u8FD8\u53EF\u4EE5\u652F\u6301\u5728\u8BE5\u5C5E\u6027\u4E0A\u901A\u8FC7 ognl \u8868\u793A\u8FDB\u884C\u904D\u5386\uFF0C\u8FC7\u6EE4\uFF0C\u8BBF\u95EE\u5BF9\u8C61\u7684\u5185\u90E8\u5C5E\u6027\u7B49\u64CD\u4F5C\u3002</p>`,11),L=a("OGNL \u7279\u6B8A\u7528\u6CD5\u8BF7\u53C2\u8003\uFF1A"),x={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},C=a("https://github.com/alibaba/arthas/issues/71"),N=a("OGNL \u8868\u8FBE\u5F0F\u5B98\u65B9\u6307\u5357\uFF1A"),y={href:"https://commons.apache.org/dormant/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},S=a("https://commons.apache.org/dormant/commons-ognl/language-guide.html"),B=o(`<p>\u4F8B\u5982\uFF0C\u5047\u8BBE n \u662F\u4E00\u4E2A Map\uFF0CMap \u7684 Key \u662F\u4E00\u4E2A Enum\uFF0C\u6211\u4EEC\u60F3\u8FC7\u6EE4\u51FA Map \u4E2D Key \u4E3A\u67D0\u4E2A Enum \u7684\u503C\uFF0C\u53EF\u4EE5\u5199\u5982\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ getstatic com.alibaba.arthas.Test n &#39;entrySet().iterator.{? #this.key.name()==&quot;STOP&quot;}&#39;
field: n
@ArrayList[
    @Node[STOP=bbb],
]
Affect(row-cnt:1) cost in 68 ms.


$ getstatic com.alibaba.arthas.Test m &#39;entrySet().iterator.{? #this.key==&quot;a&quot;}&#39;
field: m
@ArrayList[
    @Node[a=aaa],
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function A(E,G){const e=t("ExternalLinkIcon"),l=t("RouterLink");return c(),p("div",null,[u,s("p",null,[s("a",m,[v,b,n(e)])]),k,s("ul",null,[s("li",null,[h,n(l,{to:"/doc/ognl.html"},{default:r(()=>[g]),_:1}),_])]),f,s("ul",null,[s("li",null,[L,s("a",x,[C,n(e)])]),s("li",null,[N,s("a",y,[S,n(e)])])]),B])}const $=i(d,[["render",A],["__file","getstatic.html.vue"]]);export{$ as default};
