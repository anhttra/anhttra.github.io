import{_ as p,u,h,g as m,i as b,b as f,o as a,j as v,c,a as e,t as l,F as k,e as y,p as B,k as I}from"./index-cbc3f535.js";import{d as w,S as M}from"./dayjs.min-b7997598.js";const P=s=>(B("data-v-efbd6035"),s=s(),I(),s),S={key:1,class:"blog-page-container"},x={class:"blog-page"},L={class:"blog-page-header"},A={class:"blog-page-meta"},D=["datetime"],V=P(()=>e("span",{class:"date-divider"},"/",-1)),Y=["href"],j={class:"blog-page-title"},C={class:"blog-page-image"},F=["src","alt"],H={class:"blog-page-content"},T=["innerHTML"],E={__name:"BlogPageView",setup(s){const r=u(),t=h({}),n=m(!0),_=b().appContext.config.globalProperties.ghostAPI,d=r.params.slug;_.posts.read({slug:d,include:"tags"}).then(o=>{Object.assign(t,o),console.log(o),n.value=!1});const g=f(()=>w(t.published_at).format("MMMM DD, YYYY"));return(o,O)=>n.value?(a(),v(M,{key:0})):(a(),c("div",S,[e("article",x,[e("header",L,[e("section",A,[e("time",{class:"blog-page-meta-date",datetime:t.published_at},l(g.value),9,D),V,e("span",null,[(a(!0),c(k,null,y(t.tags,i=>(a(),c("a",{dir:"ltr",class:"blog-tag",href:`/blogs/tag/${i.name}`},"#"+l(i.name),9,Y))),256))])]),e("h1",j,l(t.title),1)]),e("div",C,[e("img",{src:t.feature_image,alt:t.feature_image_alt,width:"2000",height:"1000"},null,8,F)]),e("section",H,[e("div",{innerHTML:t.html,class:"markdown-body"},null,8,T)])])]))}},q=p(E,[["__scopeId","data-v-efbd6035"]]);export{q as default};
