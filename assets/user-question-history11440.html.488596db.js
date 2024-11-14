import{_ as n,o as h,c as i,b as a,w as t,a as o,d as l,e,r as d}from"./app.1e03d722.js";const _={},u=l('<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>arthas \u600E\u4E48\u4F7F\u7528\uFF1F</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>Arthas \u662F\u4E00\u4E2AJava\u8BCA\u65AD\u5DE5\u5177\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u547D\u4EE4\u6765\u5E2E\u52A9\u5F00\u53D1\u8005\u8BCA\u65AD\u5E94\u7528\u7A0B\u5E8F\u7684\u8FD0\u884C\u65F6\u95EE\u9898\u3002\u4EE5\u4E0B\u662F\u5982\u4F55\u4F7F\u7528 Arthas \u7684\u7B80\u8981\u6307\u5357\uFF0C\u57FA\u4E8E\u4F60\u63D0\u4F9B\u7684\u4FE1\u606F\uFF1A</p><h3 id="\u542F\u52A8-arthas" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-arthas" aria-hidden="true">#</a> \u542F\u52A8 Arthas</h3><ol><li><p><strong>\u5B89\u88C5 Arthas</strong>\uFF1A\u9996\u5148\uFF0C\u786E\u4FDD\u4F60\u5DF2\u7ECF\u5B89\u88C5\u4E86 Arthas\u3002\u5982\u679C\u5C1A\u672A\u5B89\u88C5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u8F7D\u5176\u53D1\u5E03\u5305\u6216\u4F7F\u7528 Homebrew\uFF08\u9488\u5BF9 macOS \u7528\u6237\uFF09\u7B49\u65B9\u5F0F\u5B89\u88C5\u3002\u5177\u4F53\u5B89\u88C5\u6B65\u9AA4\u53EF\u53C2\u8003 Arthas \u7684\u5B98\u65B9\u6587\u6863\u3002</p></li><li><p><strong>\u8FDE\u63A5\u5230\u76EE\u6807 Java \u5E94\u7528</strong>\uFF1A\u542F\u52A8 Arthas \u540E\uFF0C\u4F60\u9700\u8981\u8FDE\u63A5\u5230\u4F60\u60F3\u8BCA\u65AD\u7684 Java \u8FDB\u7A0B\u3002\u901A\u8FC7\u547D\u4EE4\u884C\u8F93\u5165 <code>java -jar arthas-boot.jar</code>\uFF0C\u5B83\u4F1A\u5217\u51FA\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684 Java \u8FDB\u7A0B\u3002\u9009\u62E9\u4F60\u60F3\u8FDE\u63A5\u7684\u8FDB\u7A0B\u7F16\u53F7\u5E76\u8F93\u5165\uFF0C\u5373\u53EF\u8FDB\u5165 Arthas \u7684\u4EA4\u4E92\u754C\u9762\u3002</p></li></ol><h3 id="\u4F7F\u7528-trace-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-trace-\u547D\u4EE4" aria-hidden="true">#</a> \u4F7F\u7528 <code>trace</code> \u547D\u4EE4</h3><p>\u4E00\u65E6\u8FDB\u5165 Arthas \u7684\u4EA4\u4E92\u754C\u9762\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>trace</code> \u547D\u4EE4\u6765\u8DDF\u8E2A\u65B9\u6CD5\u7684\u8C03\u7528\u94FE\u8DEF\u53CA\u8017\u65F6\uFF0C\u8FD9\u5BF9\u4E8E\u5B9A\u4F4D\u6027\u80FD\u74F6\u9888\u6216\u7406\u89E3\u4EE3\u7801\u6267\u884C\u6D41\u7A0B\u975E\u5E38\u6709\u5E2E\u52A9\u3002</p><h4 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h4><ul><li><p><strong>\u8DDF\u8E2A\u5355\u4E2A\u65B9\u6CD5</strong>\uFF1A\u5047\u8BBE\u4F60\u8981\u8DDF\u8E2A <code>demo.MathGame</code> \u7C7B\u4E2D\u7684 <code>run</code> \u65B9\u6CD5\uFF0C\u8F93\u5165\u547D\u4EE4 <code>trace demo.MathGame run</code>\u3002\u8FD9\u4F1A\u663E\u793A\u6BCF\u6B21 <code>run</code> \u65B9\u6CD5\u88AB\u8C03\u7528\u65F6\u7684\u8BE6\u7EC6\u5806\u6808\u4FE1\u606F\uFF0C\u5305\u62EC\u8C03\u7528\u65F6\u95F4\u3001\u7EBF\u7A0B\u4FE1\u606F\u4EE5\u53CA\u5185\u90E8\u8C03\u7528\u7684\u65B9\u6CD5\u7B49\u3002</p></li><li><p><strong>\u9650\u5236\u8F93\u51FA</strong>\uFF1A\u5982\u679C\u65B9\u6CD5\u8C03\u7528\u9891\u7E41\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>-n</code> \u53C2\u6570\u9650\u5236\u8F93\u51FA\u6B21\u6570\uFF0C\u5982 <code>trace demo.MathGame run -n 1</code> \u4EC5\u8FFD\u8E2A\u4E00\u6B21\u8C03\u7528\u540E\u5373\u505C\u6B62\u3002</p></li><li><p><strong>\u67E5\u770B\u8C03\u7528\u8017\u65F6</strong>\uFF1A\u901A\u8FC7\u6DFB\u52A0\u6761\u4EF6\u8FC7\u6EE4\uFF0C\u5982 <code>trace demo.MathGame run &#39;#cost &gt; 10&#39;</code>\uFF0C\u4EC5\u5C55\u793A\u8017\u65F6\u8D85\u8FC710\u6BEB\u79D2\u7684\u8C03\u7528\u8DEF\u5F84\u3002</p></li><li><p><strong>\u5305\u542B/\u6392\u9664\u7279\u5B9A\u7C7B\u6216\u65B9\u6CD5</strong>\uFF1A\u4F7F\u7528 <code>-E</code> \u53C2\u6570\u5339\u914D\u591A\u4E2A\u7C7B\u6216\u65B9\u6CD5\uFF0C\u4F8B\u5982 <code>trace -E com.test.ClassA|org.test.ClassB method1|method2|method3</code>\u3002\u4F7F\u7528 <code>--exclude-class-pattern</code> \u6765\u6392\u9664\u7279\u5B9A\u7C7B\uFF0C\u5982 <code>trace javax.servlet.Filter * --exclude-class-pattern com.demo.TestFilter</code>\u3002</p></li></ul><h4 id="\u9AD8\u7EA7\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u9009\u9879" aria-hidden="true">#</a> \u9AD8\u7EA7\u9009\u9879</h4><ul><li><p><strong>\u6307\u5B9A\u6700\u5927\u7C7B/\u65B9\u6CD5\u5339\u914D\u6570\u91CF</strong>\uFF1A\u4F7F\u7528 <code>-m</code> \u53C2\u6570\u9650\u5236\u8FFD\u8E2A\u7684\u7C7B\u6216\u65B9\u6CD5\u6570\u91CF\uFF0C\u4F8B\u5982 <code>trace demo.MathGame run -m 1</code>\u3002</p></li><li><p><strong>\u5305\u542B JDK \u65B9\u6CD5</strong>\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>trace</code> \u4E0D\u4F1A\u8FFD\u8E2A JDK \u5185\u90E8\u7684\u65B9\u6CD5\u3002\u82E5\u9700\u5305\u542B\uFF0C\u4F7F\u7528 <code>--skipJDKMethod false</code>\uFF0C\u5982 <code>trace --skipJDKMethod false demo.MathGame run</code>\u3002</p></li></ul><h3 id="\u7ED3\u679C\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C\u89E3\u91CA" aria-hidden="true">#</a> \u7ED3\u679C\u89E3\u91CA</h3><ul><li>\u62A5\u544A\u4E2D\u7684\u65F6\u95F4\u6233\uFF08\u5982 <code>[12.033735ms]</code>\uFF09\u8868\u793A\u8BE5\u65B9\u6CD5\u8C03\u7528\u7684\u8017\u65F6\u3002</li><li>\u8C03\u7528\u6B21\u6570\u7EDF\u8BA1\uFF08\u5982 <code>0,0,0ms,11</code>\uFF09\u5C55\u793A\u4E86\u65B9\u6CD5\u8C03\u7528\u7684\u8017\u65F6\u5206\u5E03\uFF0C\u5305\u62EC\u6700\u5C0F\u3001\u6700\u5927\u8017\u65F6\u3001\u603B\u8017\u65F6\u548C\u8C03\u7528\u6B21\u6570\uFF0C\u4EE5\u53CA\u662F\u5426\u5B58\u5728\u5F02\u5E38\u4FE1\u606F\u3002</li></ul><p>\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u5229\u7528 Arthas \u7684 <code>trace</code> \u547D\u4EE4\uFF0C\u4F60\u53EF\u4EE5\u6709\u6548\u5730\u76D1\u63A7\u548C\u8BCA\u65AD Java \u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u65B9\u6CD5\u8C03\u7528\u884C\u4E3A\uFF0C\u8FDB\u800C\u5B9A\u4F4D\u6027\u80FD\u95EE\u9898\u6216\u7406\u89E3\u7A0B\u5E8F\u7684\u6267\u884C\u6D41\u7A0B\u3002\u8BF7\u6839\u636E\u5B9E\u9645\u9700\u8981\u7075\u6D3B\u8FD0\u7528\u4E0A\u8FF0\u547D\u4EE4\u548C\u9009\u9879\u3002</p>',16),p=e("---------------"),m=o("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),e(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),f=e("trace"),g=e("---------------"),x={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},b=o("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),k=e(),v=e("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),A=e("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),J=e("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),F=e("\uFF0C\u5728"),G=e("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),M=e("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),E={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},B=e("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),D=e(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),O=o("h3",{id:"\u53CD\u9988",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),e(" \u53CD\u9988")],-1),j=e("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),w={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16040",target:"_blank",rel:"noopener noreferrer"},C=e("\u5DEE\u8BC4"),I=e("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function K(L,N){const r=d("font"),s=d("RouterLink"),c=d("ExternalLinkIcon");return h(),i("div",null,[u,a(r,{color:"#949494"},{default:t(()=>[p]),_:1}),m,o("p",null,[a(s,{to:"/doc/trace.html"},{default:t(()=>[f]),_:1})]),a(r,{color:"#949494"},{default:t(()=>[g]),_:1}),o("h2",x,[b,k,a(r,{color:"#FF0000"},{default:t(()=>[v]),_:1})]),o("p",null,[A,a(r,{color:"#FF0000"},{default:t(()=>[J]),_:1}),F,a(r,{color:"#FF0000"},{default:t(()=>[G]),_:1}),M,o("a",E,[B,a(c)]),D]),O,o("p",null,[j,o("a",w,[C,a(c)]),I])])}const y=n(_,[["render",K],["__file","user-question-history11440.html.vue"]]);export{y as default};
