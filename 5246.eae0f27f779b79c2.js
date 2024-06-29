"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[5246],{5246:(Z,d,r)=>{r.r(d),r.d(d,{TimelineDemoModule:()=>W});var o=r(177),u=r(8729),s=r(5779),e=r(4438);const v=(t,i,n,a,l,m,p)=>({"p-timeline p-component":!0,"p-timeline-left":t,"p-timeline-right":i,"p-timeline-top":n,"p-timeline-bottom":a,"p-timeline-alternate":l,"p-timeline-vertical":m,"p-timeline-horizontal":p}),c=t=>({$implicit:t});function f(t,i){1&t&&e.eu8(0)}function _(t,i){1&t&&e.eu8(0)}function h(t,i){if(1&t&&(e.qex(0),e.DNE(1,_,1,0,"ng-container",5),e.bVm()),2&t){const n=e.XpG().$implicit,a=e.XpG();e.R7$(),e.Y8G("ngTemplateOutlet",a.markerTemplate)("ngTemplateOutletContext",e.eq3(2,c,n))}}function T(t,i){1&t&&e.nrm(0,"div",10),2&t&&e.BMQ("data-pc-section","marker")}function C(t,i){1&t&&e.nrm(0,"div",11)}function E(t,i){1&t&&e.eu8(0)}function y(t,i){if(1&t&&(e.j41(0,"div",3)(1,"div",4),e.DNE(2,f,1,0,"ng-container",5),e.k0s(),e.j41(3,"div",6),e.DNE(4,h,2,4,"ng-container",7)(5,T,1,1,"ng-template",null,0,e.C5r)(7,C,1,0,"div",8),e.k0s(),e.j41(8,"div",9),e.DNE(9,E,1,0,"ng-container",5),e.k0s()()),2&t){const n=i.$implicit,a=i.last,l=e.sdS(6),m=e.XpG();e.BMQ("data-pc-section","event"),e.R7$(),e.BMQ("data-pc-section","opposite"),e.R7$(),e.Y8G("ngTemplateOutlet",m.oppositeTemplate)("ngTemplateOutletContext",e.eq3(11,c,n)),e.R7$(),e.BMQ("data-pc-section","seperator"),e.R7$(),e.Y8G("ngIf",m.markerTemplate)("ngIfElse",l),e.R7$(3),e.Y8G("ngIf",!a),e.R7$(),e.BMQ("data-pc-section","content"),e.R7$(),e.Y8G("ngTemplateOutlet",m.contentTemplate)("ngTemplateOutletContext",e.eq3(13,c,n))}}let F=(()=>{class t{el;value;style;styleClass;align="left";layout="vertical";templates;contentTemplate;oppositeTemplate;markerTemplate;constructor(n){this.el=n}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"content":this.contentTemplate=n.template;break;case"opposite":this.oppositeTemplate=n.template;break;case"marker":this.markerTemplate=n.template}})}static \u0275fac=function(a){return new(a||t)(e.rXU(e.aKT))};static \u0275cmp=e.VBU({type:t,selectors:[["p-timeline"]],contentQueries:function(a,l,m){if(1&a&&e.wni(m,s.Ei,4),2&a){let p;e.mGM(p=e.lsd())&&(l.templates=p)}},hostAttrs:[1,"p-element"],inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},decls:2,vars:15,consts:[["marker",""],[3,"ngStyle","ngClass"],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(a,l){1&a&&(e.j41(0,"div",1),e.DNE(1,y,10,15,"div",2),e.k0s()),2&a&&(e.HbH(l.styleClass),e.Y8G("ngStyle",l.style)("ngClass",e.sGs(7,v,"left"===l.align,"right"===l.align,"top"===l.align,"bottom"===l.align,"alternate"===l.align,"vertical"===l.layout,"horizontal"===l.layout)),e.BMQ("data-pc-name","timeline")("data-pc-section","root"),e.R7$(),e.Y8G("ngForOf",l.value))},dependencies:[o.YU,o.Sq,o.bT,o.T3,o.B3],styles:["@layer primeng{.p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}}\n"],encapsulation:2,changeDetection:0})}return t})(),k=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[o.MD,s.Gg]})}return t})();var g=r(1141);const D=["*",[["p-header"]],[["p-footer"]]],G=["*","p-header","p-footer"];function $(t,i){1&t&&e.eu8(0)}function b(t,i){if(1&t&&(e.j41(0,"div",8),e.SdG(1,1),e.DNE(2,$,1,0,"ng-container",6),e.k0s()),2&t){const n=e.XpG();e.R7$(2),e.Y8G("ngTemplateOutlet",n.headerTemplate)}}function j(t,i){1&t&&e.eu8(0)}function R(t,i){if(1&t&&(e.j41(0,"div",9),e.EFF(1),e.DNE(2,j,1,0,"ng-container",6),e.k0s()),2&t){const n=e.XpG();e.R7$(),e.SpI(" ",n.header," "),e.R7$(),e.Y8G("ngTemplateOutlet",n.titleTemplate)}}function x(t,i){1&t&&e.eu8(0)}function Y(t,i){if(1&t&&(e.j41(0,"div",10),e.EFF(1),e.DNE(2,x,1,0,"ng-container",6),e.k0s()),2&t){const n=e.XpG();e.R7$(),e.SpI(" ",n.subheader," "),e.R7$(),e.Y8G("ngTemplateOutlet",n.subtitleTemplate)}}function I(t,i){1&t&&e.eu8(0)}function w(t,i){1&t&&e.eu8(0)}function M(t,i){if(1&t&&(e.j41(0,"div",11),e.SdG(1,2),e.DNE(2,w,1,0,"ng-container",6),e.k0s()),2&t){const n=e.XpG();e.R7$(2),e.Y8G("ngTemplateOutlet",n.footerTemplate)}}let N=(()=>{class t{el;header;subheader;style;styleClass;headerFacet;footerFacet;templates;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;constructor(n){this.el=n}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this.headerTemplate=n.template;break;case"title":this.titleTemplate=n.template;break;case"subtitle":this.subtitleTemplate=n.template;break;case"content":default:this.contentTemplate=n.template;break;case"footer":this.footerTemplate=n.template}})}getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=function(a){return new(a||t)(e.rXU(e.aKT))};static \u0275cmp=e.VBU({type:t,selectors:[["p-card"]],contentQueries:function(a,l,m){if(1&a&&(e.wni(m,s.Y9,5),e.wni(m,s.wi,5),e.wni(m,s.Ei,4)),2&a){let p;e.mGM(p=e.lsd())&&(l.headerFacet=p.first),e.mGM(p=e.lsd())&&(l.footerFacet=p.first),e.mGM(p=e.lsd())&&(l.templates=p)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:G,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(a,l){1&a&&(e.NAR(D),e.j41(0,"div",0),e.DNE(1,b,3,1,"div",1),e.j41(2,"div",2),e.DNE(3,R,3,2,"div",3)(4,Y,3,2,"div",4),e.j41(5,"div",5),e.SdG(6),e.DNE(7,I,1,0,"ng-container",6),e.k0s(),e.DNE(8,M,3,1,"div",7),e.k0s()()),2&a&&(e.HbH(l.styleClass),e.Y8G("ngClass","p-card p-component")("ngStyle",l.style),e.BMQ("data-pc-name","card"),e.R7$(),e.Y8G("ngIf",l.headerFacet||l.headerTemplate),e.R7$(2),e.Y8G("ngIf",l.header||l.titleTemplate),e.R7$(),e.Y8G("ngIf",l.subheader||l.subtitleTemplate),e.R7$(3),e.Y8G("ngTemplateOutlet",l.contentTemplate),e.R7$(),e.Y8G("ngIf",l.footerFacet||l.footerTemplate))},dependencies:[o.YU,o.bT,o.T3,o.B3],styles:["@layer primeng{.p-card-header img{width:100%}}\n"],encapsulation:2,changeDetection:0})}return t})(),O=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[o.MD,s.Gg]})}return t})();function B(t,i){1&t&&e.EFF(0),2&t&&e.SpI(" ",i.$implicit.status," ")}function S(t,i){1&t&&e.EFF(0),2&t&&e.SpI(" ",i.$implicit.status," ")}function z(t,i){1&t&&e.EFF(0),2&t&&e.SpI(" ",i.$implicit.status," ")}function A(t,i){if(1&t&&(e.j41(0,"small",13),e.EFF(1),e.k0s()),2&t){const n=i.$implicit;e.R7$(),e.JRh(n.date)}}function Q(t,i){1&t&&e.EFF(0),2&t&&e.SpI(" ",i.$implicit.status," ")}function X(t,i){if(1&t&&(e.j41(0,"span",14),e.nrm(1,"i",15),e.k0s()),2&t){const n=i.$implicit;e.xc7("background-color",n.color),e.R7$(),e.Y8G("ngClass",n.icon)}}function U(t,i){if(1&t&&e.nrm(0,"img",20),2&t){const n=e.XpG().$implicit;e.Y8G("src","assets/demo/images/product/"+n.image,e.B4B)("alt",n.name)}}function H(t,i){if(1&t&&(e.j41(0,"p-card",16),e.DNE(1,U,1,2,"img",17),e.j41(2,"p",18),e.EFF(3,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"),e.k0s(),e.nrm(4,"button",19),e.k0s()),2&t){const n=i.$implicit;e.Y8G("header",n.status)("subheader",n.date),e.R7$(),e.Y8G("ngIf",n.image)}}function q(t,i){1&t&&e.EFF(0),2&t&&e.SpI(" ",i.$implicit," ")}function V(t,i){1&t&&e.EFF(0),2&t&&e.SpI(" ",i.$implicit," ")}function P(t,i){1&t&&e.EFF(0),2&t&&e.SpI(" ",i.$implicit," ")}function K(t,i){1&t&&e.EFF(0," \xa0 ")}let L=(()=>{class t{constructor(){this.events1=[],this.events2=[]}ngOnInit(){this.events1=[{status:"Ordered",date:"15/10/2020 10:30",icon:s.EE.SHOPPING_CART,color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:s.EE.COG,color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:s.EE.ENVELOPE,color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:s.EE.CHECK,color:"#607D8B"}],this.events2=["2020","2021","2022","2023"]}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["ng-component"]],decls:48,vars:8,consts:[[1,"grid"],[1,"col-12","md:col-6"],[1,"card"],[3,"value"],["pTemplate","content"],["align","right",3,"value"],["align","alternate",3,"value"],["pTemplate","opposite"],["align","alternate","styleClass","customized-timeline",3,"value"],["pTemplate","marker"],["layout","horizontal","align","top",3,"value"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],[1,"p-text-secondary"],[1,"flex","z-1","w-2rem","h-2rem","align-items-center","justify-content-center","text-white","border-circle","shadow-2"],[3,"ngClass"],[3,"header","subheader"],["width","200","class","shadow-2",3,"src","alt",4,"ngIf"],[1,"line-height-3","my-3"],["pButton","","label","Read more",1,"p-button-outlined","mb-5"],["width","200",1,"shadow-2",3,"src","alt"]],template:function(a,l){1&a&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e.EFF(4,"Left Align"),e.k0s(),e.j41(5,"p-timeline",3),e.DNE(6,B,1,1,"ng-template",4),e.k0s()()(),e.j41(7,"div",1)(8,"div",2)(9,"h5"),e.EFF(10,"Right Align"),e.k0s(),e.j41(11,"p-timeline",5),e.DNE(12,S,1,1,"ng-template",4),e.k0s()()(),e.j41(13,"div",1)(14,"div",2)(15,"h5"),e.EFF(16,"Alternate Align"),e.k0s(),e.j41(17,"p-timeline",6),e.DNE(18,z,1,1,"ng-template",4),e.k0s()()(),e.j41(19,"div",1)(20,"div",2)(21,"h5"),e.EFF(22,"Opposite Content"),e.k0s(),e.j41(23,"p-timeline",3),e.DNE(24,A,2,1,"ng-template",4)(25,Q,1,1,"ng-template",7),e.k0s()()()(),e.j41(26,"div",2)(27,"h5"),e.EFF(28,"Customized"),e.k0s(),e.j41(29,"p-timeline",8),e.DNE(30,X,2,3,"ng-template",9)(31,H,5,3,"ng-template",4),e.k0s()(),e.j41(32,"div",2)(33,"h5"),e.EFF(34,"Horizontal"),e.k0s(),e.j41(35,"h6"),e.EFF(36,"Top Align"),e.k0s(),e.j41(37,"p-timeline",10),e.DNE(38,q,1,1,"ng-template",4),e.k0s(),e.j41(39,"h6"),e.EFF(40,"Bottom Align"),e.k0s(),e.j41(41,"p-timeline",11),e.DNE(42,V,1,1,"ng-template",4),e.k0s(),e.j41(43,"h6"),e.EFF(44,"Alternate Align"),e.k0s(),e.j41(45,"p-timeline",12),e.DNE(46,P,1,1,"ng-template",4)(47,K,1,0,"ng-template",7),e.k0s()()),2&a&&(e.R7$(5),e.Y8G("value",l.events1),e.R7$(6),e.Y8G("value",l.events1),e.R7$(6),e.Y8G("value",l.events1),e.R7$(6),e.Y8G("value",l.events1),e.R7$(6),e.Y8G("value",l.events1),e.R7$(8),e.Y8G("value",l.events2),e.R7$(4),e.Y8G("value",l.events2),e.R7$(4),e.Y8G("value",l.events2))},dependencies:[o.YU,o.bT,F,s.Ei,g._f,N],styles:["@media screen and (max-width: 960px){  .customized-timeline .p-timeline-event:nth-child(2n){flex-direction:row!important}  .customized-timeline .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:left!important}  .customized-timeline .p-timeline-event-opposite{flex:0}  .customized-timeline .p-card{margin-top:1rem}}"]})}return t})(),J=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.$C({type:t});static#n=this.\u0275inj=e.G2t({imports:[u.iI.forChild([{path:"",component:L}]),u.iI]})}return t})(),W=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.$C({type:t});static#n=this.\u0275inj=e.G2t({imports:[o.MD,k,g.tm,O,J]})}return t})()}}]);