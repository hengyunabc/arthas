import{_ as d,o as h,c as i,a as e,b as t,w as s,d as _,e as o,r as a}from"./app.1e03d722.js";const l={},p=_('<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>\u4F7F\u7528arthas \u8DDF\u8E2A\u8FDB\u7A0B\u670D\u52A1\u540E\uFF0C\u8FDB\u7A0B\u6240\u5360\u7528\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u9661\u589E\uFF0C\u4E14\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E0D\u4E0B\u964D</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>\u5728\u60A8\u4F7F\u7528Arthas\u8DDF\u8E2A\u8FDB\u7A0B\u670D\u52A1\u540E\u9047\u5230\u8FDB\u7A0B\u6240\u5360\u7528\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u9661\u589E\u4E14\u4E0D\u4E0B\u964D\u7684\u95EE\u9898\uFF0C\u6839\u636E\u5DF2\u6709\u77E5\u8BC6\uFF0C\u8FD9\u662F\u7531\u4E8EArthas\u5728\u975E\u6B63\u5E38\u5173\u95ED\u65F6\uFF08\u5982\u4F7F\u7528<code>ctrl + z</code>\u6216<code>exit</code>\u547D\u4EE4\u9000\u51FA\uFF09\u6CA1\u6709\u6B63\u786E\u91CA\u653E\u6587\u4EF6\u63CF\u8FF0\u7B26\u6240\u81F4\u3002\u4E3A\u4E86\u89E3\u51B3\u6B64\u95EE\u9898\u5E76\u907F\u514D\u8D44\u6E90\u6CC4\u9732\uFF0C\u8BF7\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u64CD\u4F5C\uFF1A</p><ol><li><p><strong>\u6B63\u786E\u505C\u6B62Arthas</strong><br> \u5F53\u4F60\u9700\u8981\u7ED3\u675FArthas\u4F1A\u8BDD\u65F6\uFF0C\u4E0D\u5E94\u76F4\u63A5\u4F7F\u7528<code>ctrl + z</code>\u6216\u8005\u8F93\u5165<code>exit</code>\u547D\u4EE4\u9000\u51FA\u3002\u6B63\u786E\u7684\u505A\u6CD5\u662F\uFF0C\u5728Arthas\u547D\u4EE4\u884C\u4E2D\u8F93\u5165<code>stop</code>\u547D\u4EE4\u6765\u786E\u4FDDArthas\u53CA\u5176\u76F8\u5173\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u88AB\u6B63\u786E\u5173\u95ED\u548C\u91CA\u653E\u3002</p></li><li><p><strong>\u9A8C\u8BC1\u6587\u4EF6\u63CF\u8FF0\u7B26\u91CA\u653E\u60C5\u51B5</strong><br> \u5728\u6267\u884C<code>stop</code>\u547D\u4EE4\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76D1\u63A7\u5DE5\u5177\u6216JVM\u53C2\u6570\uFF08\u5982\u68C0\u67E5<code>OPEN-FILE-DESCRIPTOR-COUNT</code>\uFF09\u6765\u9A8C\u8BC1\u8FDB\u7A0B\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u91CF\u662F\u5426\u5DF2\u7ECF\u4E0B\u964D\u5230\u6B63\u5E38\u6C34\u5E73\u3002\u8FD9\u6709\u52A9\u4E8E\u786E\u8BA4\u95EE\u9898\u662F\u5426\u5F97\u5230\u6709\u6548\u89E3\u51B3\u3002</p></li><li><p><strong>\u8C03\u6574MAX-FILE-DESCRIPTOR-COUNT\uFF08\u5982\u6709\u5FC5\u8981\uFF09</strong><br> \u5982\u679C\u5728\u65E5\u5E38\u8FD0\u7EF4\u4E2D\u9891\u7E41\u9047\u5230\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E0D\u8DB3\u7684\u95EE\u9898\uFF0C\u8003\u8651\u8C03\u6574JVM\u542F\u52A8\u53C2\u6570\u4E2D\u7684<code>MAX-FILE-DESCRIPTOR-COUNT</code>\uFF0C\u4EE5\u589E\u52A0\u8FDB\u7A0B\u53EF\u6253\u5F00\u7684\u6700\u5927\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u91CF\uFF0C\u4F46\u9700\u6CE8\u610F\u4E0D\u8981\u8BBE\u7F6E\u5F97\u8FC7\u9AD8\u4EE5\u514D\u5F71\u54CD\u7CFB\u7EDF\u7A33\u5B9A\u6027\u3002</p></li></ol><p><strong>\u89E3\u91CA\u8BF4\u660E\uFF1A</strong></p><ul><li><strong>\u4E3A\u4F55\u8981\u4F7F\u7528<code>stop</code>\u547D\u4EE4</strong>\uFF1A<code>stop</code>\u547D\u4EE4\u662FArthas\u63D0\u4F9B\u7684\u6807\u51C6\u9000\u51FA\u65B9\u5F0F\uFF0C\u5B83\u80FD\u786E\u4FDD\u4E0D\u4EC5Arthas\u81EA\u8EAB\u8FDB\u7A0B\u7ED3\u675F\uFF0C\u8FD8\u4F1A\u59A5\u5584\u6E05\u7406\u7531Arthas\u521B\u5EFA\u7684\u6240\u6709\u8D44\u6E90\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002</li><li><strong>\u76D1\u63A7\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u91CD\u8981\u6027</strong>\uFF1A\u53CA\u65F6\u76D1\u63A7\u548C\u7BA1\u7406\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u4F7F\u7528\u60C5\u51B5\u5BF9\u4E8E\u7EF4\u62A4\u7CFB\u7EDF\u7A33\u5B9A\u6027\u548C\u907F\u514D\u8D44\u6E90\u8017\u5C3D\u81F3\u5173\u91CD\u8981\uFF0C\u5C24\u5176\u662F\u5728\u957F\u65F6\u95F4\u8FD0\u884C\u7684\u670D\u52A1\u548C\u8BCA\u65AD\u5DE5\u5177\u4F7F\u7528\u573A\u666F\u4E0B\u3002</li><li><strong>\u8C03\u6574MAX-FILE-DESCRIPTOR-COUNT\u7684\u8003\u91CF</strong>\uFF1A\u867D\u7136\u8C03\u6574\u6700\u5927\u6587\u4EF6\u63CF\u8FF0\u7B26\u9650\u5236\u53EF\u4EE5\u4E34\u65F6\u7F13\u89E3\u95EE\u9898\uFF0C\u6839\u672C\u4E0A\u8FD8\u662F\u9700\u8981\u786E\u4FDD\u5E94\u7528\u7A0B\u5E8F\u548C\u8F85\u52A9\u5DE5\u5177\u5982Arthas\u80FD\u591F\u6B63\u786E\u7BA1\u7406\u8D44\u6E90\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u8D44\u6E90\u5360\u7528\u3002</li></ul><p>\u5982\u679C\u60A8\u5728\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u8FD8\u6709\u5176\u4ED6\u7591\u95EE\uFF0C\u6216\u8005\u95EE\u9898\u672A\u80FD\u5F97\u5230\u89E3\u51B3\uFF0C\u5EFA\u8BAE\u67E5\u9605Arthas\u7684\u5B98\u65B9\u6559\u7A0B\uFF0C\u5176\u4E2D\u63D0\u4F9B\u4E86\u66F4\u4E3A\u8BE6\u5C3D\u7684\u64CD\u4F5C\u6307\u5357\u548C\u6545\u969C\u6392\u67E5\u65B9\u6CD5\uFF1A</p>',9),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn",target:"_blank",rel:"noopener noreferrer"},f=o("Arthas\u5B98\u65B9\u6559\u7A0B"),g=e("p",null,"\u5E0C\u671B\u4EE5\u4E0A\u6B65\u9AA4\u80FD\u5E2E\u52A9\u60A8\u6709\u6548\u89E3\u51B3\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E0D\u4E0B\u964D\u7684\u95EE\u9898\u3002",-1),m=o("---------------"),A=e("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),o(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),b=e("p",null,"\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u4F7F\u7528arthas \u8DDF\u8E2A\u8FDB\u7A0B\u670D\u52A1\u540E\uFF0C\u8FDB\u7A0B\u6240\u5360\u7528\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u9661\u589E\uFF0C\u4E14\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E0D\u4E0B\u964D",-1),x=o("jvm"),E=e("p",null,"\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u5B98\u65B9\u6559\u7A0B",-1),O=o("---------------"),I={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),C=o(),F=o("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),R=o("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),N=o("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),T=o("\uFF0C\u5728"),L=o("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),P=o("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),V={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},v=o("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),D=o(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),M=e("h3",{id:"\u53CD\u9988",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),o(" \u53CD\u9988")],-1),S=o("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),y={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16082",target:"_blank",rel:"noopener noreferrer"},B=o("\u5DEE\u8BC4"),J=o("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function U(w,X){const n=a("ExternalLinkIcon"),r=a("font"),c=a("RouterLink");return h(),i("div",null,[p,e("ul",null,[e("li",null,[e("a",u,[f,t(n)])])]),g,t(r,{color:"#949494"},{default:s(()=>[m]),_:1}),A,b,e("p",null,[t(c,{to:"/doc/jvm.html"},{default:s(()=>[x]),_:1})]),E,t(r,{color:"#949494"},{default:s(()=>[O]),_:1}),e("h2",I,[k,C,t(r,{color:"#FF0000"},{default:s(()=>[F]),_:1})]),e("p",null,[R,t(r,{color:"#FF0000"},{default:s(()=>[N]),_:1}),T,t(r,{color:"#FF0000"},{default:s(()=>[L]),_:1}),P,e("a",V,[v,t(n)]),D]),M,e("p",null,[S,e("a",y,[B,t(n)]),J])])}const z=d(l,[["render",U],["__file","user-question-history14834.html.vue"]]);export{z as default};
