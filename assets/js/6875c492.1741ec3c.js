(self.webpackChunkmy_demo=self.webpackChunkmy_demo||[]).push([[610],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(7294),l=a(4334),n=a(7717),s=a(4973),m=a(6742),i=a(9306),o=a(635),c=a(1217),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,f=(a=(0,i.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=e.children,v=e.frontMatter,_=e.metadata,b=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=_.date,T=_.formattedDate,w=_.permalink,y=_.tags,P=_.readingTime,L=_.title,M=_.editUrl,I=v.author,U=v.image,x=v.keywords,A=v.author_url||v.authorURL,z=v.author_title||v.authorTitle,B=v.author_image_url||v.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(c.Z,{keywords:x,image:U}),r.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(p=Z?"h1":"h2",r.createElement("header",null,r.createElement(p,{className:d},Z?L:r.createElement(m.Z,{to:w},L)),r.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:k},T),P&&r.createElement(r.Fragment,null," \xb7 ",f(P))),r.createElement("div",{className:"avatar margin-vert--md"},B&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:A},r.createElement("img",{src:B,alt:I})),r.createElement("div",{className:"avatar__intro"},I&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(m.Z,{href:A},I)),r.createElement("small",{className:"avatar__subtitle"},z)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:o.Z},E)),(y.length>0||b)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(t={},t[h]=Z,t))},y.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),y.map((function(e){var t=e.label,a=e.permalink;return r.createElement(m.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&M&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:M})),!Z&&b&&r.createElement("div",{className:"col text--right"},r.createElement(m.Z,{to:_.permalink,"aria-label":"Read more about "+L},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),l=a(4334),n=a(6742),s="sidebar_2ahu",m="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",o="sidebarItem_2UVv",c="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",d=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:i},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:u},e.title))}))))}},9404:function(e,t,a){"use strict";a.r(t);var r=a(7294),l=a(341),n=a(3146),s=a(6742),m=a(5601),i=a(4973),o=a(9306);t.default=function(e){var t,a=e.metadata,c=e.items,u=e.sidebar,d=a.allTagsPath,g=a.name,h=a.count,p=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(h),tagName:g});return r.createElement(l.Z,{title:f,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(m.Z,{sidebar:u})),r.createElement("main",{className:"col col--7"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(s.Z,{href:d},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return r.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))}))))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(7294),l=a(4973),n=a(2122),s=a(9756),m=a(4334),i="iconEdit_2_ui",o=["className"],c=function(e){var t=e.className,a=(0,s.Z)(e,o);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(i,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6197:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var r=a(2122),l=a(9756),n=a(7294),s=a(6010),m=a(6742),i=a(9306),o=a(4996),c=a(3919),u="footerLogoLink_qW4Z",d="imgSize_1pPw",g=a(8465),h=a(8617),p=["to","href","label","prependBaseUrlToHref"];function f(e){var t=e.to,a=e.href,s=e.label,i=e.prependBaseUrlToHref,u=(0,l.Z)(e,p),d=(0,o.Z)(t),g=(0,o.Z)(a,{forcePrependBaseUrl:!0});return n.createElement(m.Z,(0,r.Z)({className:"footer__link-item"},a?{href:i?g:a}:{to:d},u),a&&!(0,c.Z)(a)?n.createElement("span",null,s,n.createElement(h.Z,null)):s)}var E=function(e){var t=e.sources,a=e.alt;return n.createElement(g.Z,{className:"footer__logo "+d,alt:a,sources:t})};var v=function(){var e=(0,i.LU)().footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,c=t.logo,d=void 0===c?{}:c,g={light:(0,o.Z)(d.src),dark:(0,o.Z)(d.srcDark||d.src)};return e?n.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},l&&l.length>0&&n.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(f,e))}))):null)}))),(d||a)&&n.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&n.createElement("div",{className:"margin-bottom--sm"},d.href?n.createElement(m.Z,{href:d.href,className:u},n.createElement(E,{alt:d.alt,sources:g})):n.createElement(E,{alt:d.alt,sources:g})),a?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);