"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[701],{6837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var o=t(585),a=t(4848),i=t(8453);const r={slug:"conda-and-poetry-are-all-you-need",title:"Conda + Poetry = All You Need",authors:["anhttra"],tags:["poetry","conda","python"]},s=void 0,c={authorsImageUrls:[void 0]},l=[{value:"Project Initialization Using <code>conda</code> and <code>poetry</code>",id:"project-initialization-using-conda-and-poetry",level:2},{value:"Other Tips with <code>conda</code>",id:"other-tips-with-conda",level:2},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Poetry Typography",src:t(6318).A+"",width:"1962",height:"852"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Poetry"})," is being used more and more in Python project as a very convenient tool for managing dependencies. Since conda is a great tool for handling virtual environment, the combination between ",(0,a.jsx)(n.code,{children:"conda"})," and ",(0,a.jsx)(n.code,{children:"poetry"})," help Python projects well-organized and perfectly isolated."]}),"\n",(0,a.jsxs)(n.h2,{id:"project-initialization-using-conda-and-poetry",children:["Project Initialization Using ",(0,a.jsx)(n.code,{children:"conda"})," and ",(0,a.jsx)(n.code,{children:"poetry"})]}),"\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.code,{children:"conda/miniconda"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://conda.io/projects/conda/en/latest/user-guide/install/macos.html",children:"https://conda.io/projects/conda/en/latest/user-guide/install/macos.html"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Create a new ",(0,a.jsx)(n.code,{children:"conda"})," environment"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"conda create -n <name-of-env>\nconda activate <name-of-env>\n(name-of-env) conda install python=<python-version>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.code,{children:"poetry"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"(name-of-env) pip install poetry\n"})}),"\n",(0,a.jsxs)(n.p,{children:["or using ",(0,a.jsx)(n.code,{children:"conda"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"(name-of-env) conda install poetry\n"})}),"\n",(0,a.jsx)(n.p,{children:"Initialize project"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"(name-of-env) mkdir <project-name>\n(name-of-env) cd <project-name>\n(name-of-env) poetry init\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," If you got this error ",(0,a.jsx)(n.code,{children:"ModuleNotFoundError: No module named 'chardet'"}),", you should install the ",(0,a.jsx)(n.code,{children:"charset"})," library as below before reinitializing your project. This error may happen when installing ",(0,a.jsx)(n.code,{children:"poetry"})," using ",(0,a.jsx)(n.code,{children:"conda"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"conda install -c conda-forge charset-normalizer\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"other-tips-with-conda",children:["Other Tips with ",(0,a.jsx)(n.code,{children:"conda"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Install node in conda:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:" conda install -c conda-forge nodejs\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Autocompletion in zsh: ",(0,a.jsx)(n.a,{href:"https://github.com/conda-incubator/conda-zsh-completion",children:"https://github.com/conda-incubator/conda-zsh-completion"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://medium.com/@silvinohenriqueteixeiramalta/conda-and-poetry-a-harmonious-fusion-8116895b6380",children:"https://medium.com/@silvinohenriqueteixeiramalta/conda-and-poetry-a-harmonious-fusion-8116895b6380"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://michhar.github.io/2023-07-poetry-with-conda/",children:"https://michhar.github.io/2023-07-poetry-with-conda/"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},6318:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/banner-05a561933564b3e23092bc8b8acd9835.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(6540);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}},585:e=>{e.exports=JSON.parse('{"permalink":"/blog/conda-and-poetry-are-all-you-need","source":"@site/blog/2024-05-12-conda-and-poetry-are-all-you-need/index.md","title":"Conda + Poetry = All You Need","description":"Poetry Typography","date":"2024-05-12T00:00:00.000Z","tags":[{"inline":false,"label":"Poetry","permalink":"/blog/tags/poetry","description":"Poetry tag description"},{"inline":false,"label":"Conda","permalink":"/blog/tags/conda","description":"Conda tag description"},{"inline":false,"label":"Python","permalink":"/blog/tags/python","description":"Python tag description"}],"readingTime":0.86,"hasTruncateMarker":true,"authors":[{"name":"Anh T. Tra","title":"Full-stack AI Engineer","url":"https://github.com/anhttra","page":{"permalink":"/blog/authors/anhttra"},"socials":{"linkedin":"https://www.linkedin.com/in/anhttra/","github":"https://github.com/anhttra","newsletter":"https://anhttra.tensormaze.com"},"imageURL":"https://avatars.githubusercontent.com/u/44150844?v=4","key":"anhttra"}],"frontMatter":{"slug":"conda-and-poetry-are-all-you-need","title":"Conda + Poetry = All You Need","authors":["anhttra"],"tags":["poetry","conda","python"]},"unlisted":false,"nextItem":{"title":"Revisiting the easy-lb-proxy","permalink":"/blog/revisiting-the-easy-lb-proxy"}}')}}]);