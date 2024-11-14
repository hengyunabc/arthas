import{_ as i,o as h,c as d,b as o,w as r,a as e,d as c,e as t,r as n}from"./app.1e03d722.js";const _={},u=c('<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>Connect to telnet server error: 127.0.0.1 3658</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>\u9047\u5230\u9519\u8BEF &quot;arthas Connect to telnet server error: 127.0.0.1 3658&quot; \u53EF\u80FD\u7684\u539F\u56E0\u53CA\u89E3\u51B3\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><h3 id="\u539F\u56E0\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0\u5206\u6790" aria-hidden="true">#</a> \u539F\u56E0\u5206\u6790\uFF1A</h3><ol><li><strong>\u7AEF\u53E3\u672A\u5F00\u542F</strong>\uFF1AArthas \u9ED8\u8BA4\u7684 telnet \u7AEF\u53E3\u662F 3658\uFF0C\u8BE5\u9519\u8BEF\u63D0\u793A\u8868\u793A\u65E0\u6CD5\u8FDE\u63A5\u5230\u8FD9\u4E2A\u7AEF\u53E3\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A Arthas \u670D\u52A1\u5E76\u672A\u6210\u529F\u542F\u52A8\u6216\u8005\u6CA1\u6709\u76D1\u542C\u5728\u8BE5\u7AEF\u53E3\u4E0A\u3002</li><li><strong>\u914D\u7F6E\u95EE\u9898</strong>\uFF1A\u6839\u636E Arthas \u7684\u914D\u7F6E\u89C4\u5219\uFF0C\u5982\u679C <code>arthas.telnetPort</code> \u88AB\u8BBE\u7F6E\u4E3A -1\uFF0C\u5219\u4F1A\u7981\u6B62\u76D1\u542C telnet \u7AEF\u53E3\uFF1B\u8BBE\u7F6E\u4E3A 0 \u5219\u4F1A\u968F\u673A\u5206\u914D\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u800C\u8FD9\u4E2A\u968F\u673A\u7AEF\u53E3\u53EF\u80FD\u4E0D\u662F\u9884\u671F\u7684 3658\u3002</li><li><strong>\u6743\u9650\u95EE\u9898</strong>\uFF1A\u5C1D\u8BD5\u8FDE\u63A5\u7684\u7528\u6237\u53EF\u80FD\u6CA1\u6709\u8DB3\u591F\u7684\u6743\u9650\u8BBF\u95EE\u6B63\u5728\u8FD0\u884C Arthas \u7684 Java \u8FDB\u7A0B\u3002</li><li><strong>\u7F51\u7EDC\u95EE\u9898</strong>\uFF1A\u5982\u679C\u662F\u5728\u5C1D\u8BD5\u8FDC\u7A0B\u8FDE\u63A5\uFF0C\u786E\u4FDD\u7F51\u7EDC\u7545\u901A\uFF0C\u4E14\u6CA1\u6709\u9632\u706B\u5899\u6216\u5B89\u5168\u7EC4\u89C4\u5219\u963B\u6B62\u8BBF\u95EE 3658 \u7AEF\u53E3\u3002</li></ol><h3 id="\u89E3\u51B3\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u6B65\u9AA4" aria-hidden="true">#</a> \u89E3\u51B3\u6B65\u9AA4\uFF1A</h3><ol><li><strong>\u68C0\u67E5 Arthas \u662F\u5426\u6B63\u786E\u542F\u52A8</strong>\uFF1A <ul><li>\u901A\u8FC7\u67E5\u770B Arthas \u7684\u542F\u52A8\u65E5\u5FD7\uFF08\u901A\u5E38\u4F4D\u4E8E <code>~/logs/arthas/arthas.log</code>\uFF09\uFF0C\u786E\u8BA4 Arthas \u662F\u5426\u6210\u529F\u542F\u52A8\u5E76\u4E14\u76D1\u542C\u4E86 telnet \u7AEF\u53E3\u3002\u5982\u679C\u53D1\u73B0\u7AEF\u53E3\u88AB\u8BBE\u7F6E\u4E3A\u975E\u9ED8\u8BA4\u503C\uFF0C\u9700\u4F7F\u7528\u6B63\u786E\u7684\u7AEF\u53E3\u53F7\u5C1D\u8BD5\u8FDE\u63A5\u3002</li></ul></li><li><strong>\u68C0\u67E5\u914D\u7F6E</strong>\uFF1A <ul><li>\u67E5\u770B <code>arthas.properties</code> \u6587\u4EF6\uFF08\u4F4D\u4E8E <code>~/.arthas/lib/3.x.x/arthas/</code> \u6216\u89E3\u538B\u76EE\u5F55\u4E0B\uFF09\uFF0C\u786E\u8BA4 <code>arthas.telnetPort</code> \u7684\u8BBE\u7F6E\u662F\u5426\u7B26\u5408\u9884\u671F\u3002\u5982\u6709\u9700\u8981\uFF0C\u4FEE\u6539\u6B64\u914D\u7F6E\u5E76\u91CD\u542F Arthas\u3002</li></ul></li><li><strong>\u6743\u9650\u9A8C\u8BC1</strong>\uFF1A <ul><li>\u786E\u8BA4\u6267\u884C\u8FDE\u63A5\u547D\u4EE4\u7684\u7528\u6237\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u76EE\u6807 Java \u8FDB\u7A0B\u3002\u5FC5\u8981\u65F6\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4F7F\u7528\u5177\u6709\u8DB3\u591F\u6743\u9650\u7684\u7528\u6237\u6267\u884C\u8FDE\u63A5\u547D\u4EE4\uFF0C\u6216\u8C03\u6574\u8FDB\u7A0B\u6743\u9650\u3002</li></ul></li><li><strong>\u7F51\u7EDC\u4E0E\u9632\u706B\u5899\u68C0\u67E5</strong>\uFF1A <ul><li>\u5982\u679C\u662F\u8FDC\u7A0B\u8FDE\u63A5\uFF0C\u786E\u4FDD\u7F51\u7EDC\u8DEF\u5F84\u901A\u7545\uFF0C\u4E14\u4E24\u7AEF\u7684\u9632\u706B\u5899\u6216\u5B89\u5168\u7EC4\u7B56\u7565\u5141\u8BB8 3658 \u7AEF\u53E3\u7684\u901A\u4FE1\u3002</li></ul></li><li><strong>\u4F7F\u7528\u968F\u673A\u7AEF\u53E3</strong>\uFF08\u53EF\u9009\uFF09\uFF1A <ul><li>\u5982\u679C\u5B58\u5728\u7AEF\u53E3\u51B2\u7A81\u95EE\u9898\uFF0C\u53EF\u4EE5\u8003\u8651\u8BBE\u7F6E <code>arthas.telnetPort=0</code> \u8BA9 Arthas \u81EA\u52A8\u5206\u914D\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3\uFF0C\u5E76\u901A\u8FC7\u65E5\u5FD7\u67E5\u627E\u5B9E\u9645\u4F7F\u7528\u7684\u7AEF\u53E3\u53F7\u3002</li></ul></li><li><strong>\u5C1D\u8BD5\u5176\u4ED6\u8FDE\u63A5\u65B9\u5F0F</strong>\uFF1A <ul><li>\u5982\u679C telnet \u65B9\u5F0F\u6301\u7EED\u5B58\u5728\u95EE\u9898\uFF0C\u8003\u8651\u4F7F\u7528 HTTP \u63A5\u53E3\u8FDB\u884C\u8FDE\u63A5\uFF08\u5982\u679C\u5DF2\u542F\u7528 <code>arthas.httpPort</code>\uFF09\u3002</li></ul></li></ol><h3 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA\uFF1A</h3><p>\u4EE5\u4E0A\u6B65\u9AA4\u65E8\u5728\u9010\u4E00\u6392\u67E5\u5E76\u89E3\u51B3\u65E0\u6CD5\u8FDE\u63A5\u5230 Arthas telnet \u670D\u52A1\u7684\u95EE\u9898\uFF0C\u4ECE\u6700\u57FA\u672C\u7684\u542F\u52A8\u72B6\u6001\u68C0\u67E5\u5230\u6DF1\u5165\u7684\u914D\u7F6E\u4E0E\u6743\u9650\u6821\u9A8C\uFF0C\u6BCF\u4E00\u6B65\u90FD\u662F\u4E3A\u4E86\u786E\u4FDD Arthas \u6B63\u786E\u914D\u7F6E\u5E76\u80FD\u591F\u88AB\u5916\u90E8\u8BBF\u95EE\u3002\u901A\u8FC7\u8FD9\u4E9B\u6B65\u9AA4\uFF0C\u5E94\u80FD\u5B9A\u4F4D\u5E76\u89E3\u51B3\u8FDE\u63A5\u5931\u8D25\u7684\u95EE\u9898\u3002</p>',11),f=t("---------------"),p=e("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),t(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),g=t("Arthas Properties"),x=t("Arthas Install"),b=t("\u542F\u52A8 Arthas"),m=t("---------------"),A={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),P=t(),v=t("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),F=t("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),I=t("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),B=t("\uFF0C\u5728"),C=t("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),E=t("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),J={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},L=t("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),N=t(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),O=e("h3",{id:"\u53CD\u9988",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),t(" \u53CD\u9988")],-1),V=t("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),q={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16077",target:"_blank",rel:"noopener noreferrer"},w=t("\u5DEE\u8BC4"),y=t("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function T(G,H){const a=n("font"),s=n("RouterLink"),l=n("ExternalLinkIcon");return h(),d("div",null,[u,o(a,{color:"#949494"},{default:r(()=>[f]),_:1}),p,e("p",null,[o(s,{to:"/doc/arthas-properties.html"},{default:r(()=>[g]),_:1})]),e("p",null,[o(s,{to:"/doc/install-detail.html"},{default:r(()=>[x]),_:1})]),e("p",null,[o(s,{to:"/doc/start-arthas.html"},{default:r(()=>[b]),_:1})]),o(a,{color:"#949494"},{default:r(()=>[m]),_:1}),e("h2",A,[k,P,o(a,{color:"#FF0000"},{default:r(()=>[v]),_:1})]),e("p",null,[F,o(a,{color:"#FF0000"},{default:r(()=>[I]),_:1}),B,o(a,{color:"#FF0000"},{default:r(()=>[C]),_:1}),E,e("a",J,[L,o(l)]),N]),O,e("p",null,[V,e("a",q,[w,o(l)]),y])])}const D=i(_,[["render",T],["__file","user-question-history13522.html.vue"]]);export{D as default};
