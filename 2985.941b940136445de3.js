"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[2985],{2985:(g,r,o)=>{o.r(r),o.d(r,{UtilitiesModule:()=>d});var p=o(177),l=o(8729),i=o(4438),m=o(2398),a=o(2242);function F(e,f){if(1&e&&(i.j41(0,"div",11),i.nrm(1,"i"),i.j41(2,"div"),i.EFF(3),i.k0s()()),2&e){const s=f.$implicit;i.R7$(),i.ZvI("text-2xl pi pi-",s.properties.name,""),i.R7$(2),i.SpI("pi-",s.properties.name,"")}}let u=(()=>{class e{constructor(s){this.iconService=s,this.icons=[],this.filteredIcons=[]}ngOnInit(){this.iconService.getIcons().subscribe(s=>{let t=s=s.filter(n=>-1===n.icon.tags.indexOf("deprecate"));t.sort((n,c)=>n.properties.name<c.properties.name?-1:n.properties.name<c.properties.name?1:0),this.icons=t,this.filteredIcons=s})}onFilter(s){const t=s.target.value;this.filteredIcons=t?this.icons.filter(n=>n.icon.tags[0].includes(t)):this.icons}static#i=this.\u0275fac=function(t){return new(t||e)(i.rXU(m.f))};static#e=this.\u0275cmp=i.VBU({type:e,selectors:[["ng-component"]],decls:59,vars:1,consts:[[1,"card"],[1,"app-code"],[1,"pi","pi-check",2,"margin-right",".5rem"],[1,"pi","pi-times"],[1,"pi","pi-check"],[1,"pi","pi-check",2,"font-size","2rem"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"],["href","https://github.com/primefaces/primeicons/issues",1,"text-primary","hover:underline"],["pInputText","","placeholder","Search an icon",1,"w-full","p-3","mt-3","mb-5","w-full","p-3","mt-3","mb-5",3,"input"],[1,"grid","text-center"],["class","col-6 sm:col-4 lg:col-3 xl:col-2 pb-5",4,"ngFor","ngForOf"],[1,"col-6","sm:col-4","lg:col-3","xl:col-2","pb-5"]],template:function(t,n){1&t&&(i.j41(0,"div",0)(1,"h2"),i.EFF(2,"Icons"),i.k0s(),i.j41(3,"h4"),i.EFF(4,"Download"),i.k0s(),i.j41(5,"pre",1)(6,"code"),i.EFF(7,"npm install primeicons --save"),i.k0s()(),i.j41(8,"h4"),i.EFF(9,"Getting Started"),i.k0s(),i.j41(10,"p"),i.EFF(11,"PrimeIcons use the "),i.j41(12,"strong"),i.EFF(13,"pi pi-{icon}"),i.k0s(),i.EFF(14," syntax such as "),i.j41(15,"strong"),i.EFF(16,"pi pi-check"),i.k0s(),i.EFF(17,". A standalone icon can be displayed using an element such as "),i.j41(18,"i"),i.EFF(19,"i"),i.k0s(),i.EFF(20," or "),i.j41(21,"i"),i.EFF(22,"span"),i.k0s()(),i.j41(23,"pre",1)(24,"code"),i.EFF(25,'<i class="pi pi-check"></i>\n<i class="pi pi-times"></i>'),i.k0s()(),i.nrm(26,"i",2)(27,"i",3),i.j41(28,"h4"),i.EFF(29,"Size"),i.k0s(),i.j41(30,"p"),i.EFF(31,"Size of the icons can easily be changed using font-size property."),i.k0s(),i.j41(32,"pre",1)(33,"code"),i.EFF(34,'<i class="pi pi-check"></i>'),i.k0s()(),i.nrm(35,"i",4),i.j41(36,"pre",1)(37,"code"),i.EFF(38,'<i class="pi pi-check" style="font-size: 2rem"></i>'),i.k0s()(),i.nrm(39,"i",5),i.j41(40,"h4"),i.EFF(41,"Spinning Animation"),i.k0s(),i.j41(42,"p"),i.EFF(43,"Special pi-spin class applies infinite rotate to an icon."),i.k0s(),i.j41(44,"pre",1)(45,"code"),i.EFF(46,'<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>'),i.k0s()(),i.nrm(47,"i",6),i.j41(48,"h4"),i.EFF(49,"List of Icons"),i.k0s(),i.j41(50,"p"),i.EFF(51,"Here is the current list of PrimeIcons, more icons will be added periodically. You may also "),i.j41(52,"a",7),i.EFF(53,"request new icons"),i.k0s(),i.EFF(54," at the issue tracker."),i.k0s(),i.j41(55,"div")(56,"input",8),i.bIt("input",function(k){return n.onFilter(k)}),i.k0s()(),i.j41(57,"div",9),i.DNE(58,F,4,4,"div",10),i.k0s()()),2&t&&(i.R7$(58),i.Y8G("ngForOf",n.filteredIcons))},dependencies:[p.Sq,a.S],encapsulation:2})}return e})(),h=(()=>{class e{static#i=this.\u0275fac=function(t){return new(t||e)};static#e=this.\u0275mod=i.$C({type:e});static#s=this.\u0275inj=i.G2t({imports:[l.iI.forChild([{path:"icons",data:{breadcrumb:"Prime Icons"},component:u},{path:"**",redirectTo:"/notfound"}]),l.iI]})}return e})(),d=(()=>{class e{static#i=this.\u0275fac=function(t){return new(t||e)};static#e=this.\u0275mod=i.$C({type:e});static#s=this.\u0275inj=i.G2t({imports:[p.MD,h,a.u]})}return e})()}}]);