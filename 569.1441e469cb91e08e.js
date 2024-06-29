"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[569],{569:(v,f,i)=>{i.r(f),i.d(f,{ButtonDemoModule:()=>C});var d=i(177),n=i(8729),t=i(4438),r=i(1141),g=i(563),y=i(8159);let B=(()=>{class u{constructor(){this.items=[],this.loading=[!1,!1,!1,!1]}ngOnInit(){this.items=[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Setup",icon:"pi pi-cog"}]}load(s){this.loading[s]=!0,setTimeout(()=>this.loading[s]=!1,1e3)}static#t=this.\u0275fac=function(a){return new(a||u)};static#n=this.\u0275cmp=t.VBU({type:u,selectors:[["ng-component"]],decls:140,vars:9,consts:[[1,"grid"],[1,"col-12","md:col-6"],[1,"card"],[1,"flex","flex-wrap","gap-2"],["pButton","","pRipple","","label","Submit"],["pButton","","pRipple","","label","Disabled","disabled","true"],["label","Link","styleClass","p-button-link"],["pButton","","pRipple","","type","button","label","Primary"],["pButton","","pRipple","","type","button","label","Secondary",1,"p-button-secondary"],["pButton","","pRipple","","type","button","label","Success",1,"p-button-success"],["pButton","","pRipple","","type","button","label","Info",1,"p-button-info"],["pButton","","pRipple","","type","button","label","Warning",1,"p-button-warning"],["pButton","","pRipple","","type","button","label","Help",1,"p-button-help"],["pButton","","pRipple","","type","button","label","Danger",1,"p-button-danger"],["pButton","","pRipple","","type","button","label","Primary",1,"p-button-text"],["pButton","","pRipple","","type","button","label","Secondary",1,"p-button-secondary","p-button-text"],["pButton","","pRipple","","type","button","label","Success",1,"p-button-success","p-button-text"],["pButton","","pRipple","","type","button","label","Info",1,"p-button-info","p-button-text"],["pButton","","pRipple","","type","button","label","Warning",1,"p-button-warning","p-button-text"],["pButton","","pRipple","","type","button","label","Help",1,"p-button-help","p-button-text"],["pButton","","pRipple","","type","button","label","Danger",1,"p-button-danger","p-button-text"],["pButton","","pRipple","","type","button","label","Plain",1,"p-button-text","p-button-plain"],["pButton","","pRipple","","type","button","label","Primary",1,"p-button-outlined"],["pButton","","pRipple","","type","button","label","Secondary",1,"p-button-outlined","p-button-secondary"],["pButton","","pRipple","","type","button","label","Success",1,"p-button-outlined","p-button-success"],["pButton","","pRipple","","type","button","label","Info",1,"p-button-outlined","p-button-info"],["pButton","","pRipple","","type","button","label","Warning",1,"p-button-outlined","p-button-warning"],["pButton","","pRipple","","type","button","label","Help",1,"p-button-outlined","p-button-help"],["pButton","","pRipple","","type","button","label","Danger",1,"p-button-outlined","p-button-danger"],[1,"p-buttonset"],["pButton","","pRipple","","label","Save","icon","pi pi-check"],["pButton","","pRipple","","label","Delete","icon","pi pi-trash"],["label","Save","icon","pi pi-plus","styleClass","p-button-info",3,"model"],["label","Save","icon","pi pi-plus","styleClass","p-button-success",3,"model"],["label","Save","icon","pi pi-plus","styleClass","p-button-warning",3,"model"],["label","Save","icon","pi pi-plus","styleClass","p-button-help",3,"model"],["label","Save","icon","pi pi-plus","styleClass","p-button-danger",3,"model"],["alt","logo","src","https://primefaces.org/cdn/primeng/images/primeng-icon.svg",2,"width","1.5rem"],["styleClass","p-button-outlined"],[1,"ml-2","font-bold"],["pButton","","pRipple","","icon","pi pi-star-fill"],["pButton","","pRipple","","label","Submit","icon","pi pi-bookmark"],["pButton","","pRipple","","label","Submit","icon","pi pi-bookmark","iconPos","right"],["pButton","","pRipple","","type","button","label","Primary",1,"p-button-raised"],["pButton","","pRipple","","type","button","label","Secondary",1,"p-button-raised","p-button-secondary"],["pButton","","pRipple","","type","button","label","Success",1,"p-button-raised","p-button-success"],["pButton","","pRipple","","type","button","label","Info",1,"p-button-raised","p-button-info"],["pButton","","pRipple","","type","button","label","Warning",1,"p-button-raised","p-button-warning"],["pButton","","pRipple","","type","button","label","Help",1,"p-button-raised","p-button-help"],["pButton","","pRipple","","type","button","label","Danger",1,"p-button-raised","p-button-danger"],["pButton","","pRipple","","type","button","label","Primary",1,"p-button-rounded"],["pButton","","pRipple","","type","button","label","Secondary",1,"p-button-rounded","p-button-secondary"],["pButton","","pRipple","","type","button","label","Success",1,"p-button-rounded","p-button-success"],["pButton","","pRipple","","type","button","label","Info",1,"p-button-rounded","p-button-info"],["pButton","","pRipple","","type","button","label","Warning",1,"p-button-rounded","p-button-warning"],["pButton","","pRipple","","type","button","label","Help",1,"p-button-rounded","p-button-help"],["pButton","","pRipple","","type","button","label","Danger",1,"p-button-rounded","p-button-danger"],["pButton","","pRipple","","type","button","icon","pi pi-check",1,"p-button-rounded"],["pButton","","pRipple","","type","button","icon","pi pi-bookmark",1,"p-button-rounded","p-button-secondary"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button-rounded","p-button-success"],["pButton","","pRipple","","type","button","icon","pi pi-user",1,"p-button-rounded","p-button-info"],["pButton","","pRipple","","type","button","icon","pi pi-bell",1,"p-button-rounded","p-button-warning"],["pButton","","pRipple","","type","button","icon","pi pi-heart",1,"p-button-rounded","p-button-help"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger"],["pButton","","pRipple","","type","button","icon","pi pi-check",1,"p-button-rounded","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-bookmark",1,"p-button-rounded","p-button-secondary","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button-rounded","p-button-success","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-user",1,"p-button-rounded","p-button-info","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-bell",1,"p-button-rounded","p-button-warning","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-heart",1,"p-button-rounded","p-button-help","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-filter",1,"p-button-rounded","p-button-text","p-button-plain"],["pButton","","pRipple","","type","button","icon","pi pi-check",1,"p-button-rounded","p-button-outlined"],["pButton","","pRipple","","type","button","icon","pi pi-bookmark",1,"p-button-rounded","p-button-secondary","p-button-outlined"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button-rounded","p-button-success","p-button-outlined"],["pButton","","pRipple","","type","button","icon","pi pi-user",1,"p-button-rounded","p-button-info","p-button-outlined"],["pButton","","pRipple","","type","button","icon","pi pi-bell",1,"p-button-rounded","p-button-warning","p-button-outlined"],["pButton","","pRipple","","type","button","icon","pi pi-heart",1,"p-button-rounded","p-button-help","p-button-outlined"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger","p-button-outlined"],["label","Search","icon","pi pi-search",3,"onClick","loading"],["label","Search","icon","pi pi-search","iconPos","right",3,"onClick","loading"],["icon","pi pi-search",3,"onClick","loading"],["label","Search",3,"onClick","loading"]],template:function(a,l){1&a&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t.EFF(4,"Default"),t.k0s(),t.j41(5,"div",3),t.nrm(6,"button",4)(7,"button",5)(8,"p-button",6),t.k0s()(),t.j41(9,"div",2)(10,"h5"),t.EFF(11,"Severities"),t.k0s(),t.j41(12,"div",3),t.nrm(13,"button",7)(14,"button",8)(15,"button",9)(16,"button",10)(17,"button",11)(18,"button",12)(19,"button",13),t.k0s()(),t.j41(20,"div",2)(21,"h5"),t.EFF(22,"Text"),t.k0s(),t.j41(23,"div",3),t.nrm(24,"button",14)(25,"button",15)(26,"button",16)(27,"button",17)(28,"button",18)(29,"button",19)(30,"button",20)(31,"button",21),t.k0s()(),t.j41(32,"div",2)(33,"h5"),t.EFF(34,"Outlined"),t.k0s(),t.j41(35,"div",3),t.nrm(36,"button",22)(37,"button",23)(38,"button",24)(39,"button",25)(40,"button",26)(41,"button",27)(42,"button",28),t.k0s()(),t.j41(43,"div",2)(44,"h5"),t.EFF(45,"Button Set"),t.k0s(),t.j41(46,"span",29),t.nrm(47,"button",30)(48,"button",31),t.k0s()(),t.j41(49,"div",2)(50,"h5"),t.EFF(51,"SplitButton"),t.k0s(),t.j41(52,"div",3),t.nrm(53,"p-splitButton",32)(54,"p-splitButton",33)(55,"p-splitButton",34)(56,"p-splitButton",35)(57,"p-splitButton",36),t.k0s()(),t.j41(58,"div",2)(59,"h5"),t.EFF(60,"Templating"),t.k0s(),t.j41(61,"div",3)(62,"p-button"),t.nrm(63,"img",37),t.k0s(),t.j41(64,"p-button",38),t.nrm(65,"img",37),t.j41(66,"span",39),t.EFF(67,"PrimeNG"),t.k0s()()()()(),t.j41(68,"div",1)(69,"div",2)(70,"h5"),t.EFF(71,"Icons"),t.k0s(),t.j41(72,"div",3),t.nrm(73,"button",40)(74,"button",41)(75,"button",42),t.k0s()(),t.j41(76,"div",2)(77,"h5"),t.EFF(78,"Raised"),t.k0s(),t.j41(79,"div",3),t.nrm(80,"button",43)(81,"button",44)(82,"button",45)(83,"button",46)(84,"button",47)(85,"button",48)(86,"button",49),t.k0s()(),t.j41(87,"div",2)(88,"h5"),t.EFF(89,"Rounded"),t.k0s(),t.j41(90,"div",3),t.nrm(91,"button",50)(92,"button",51)(93,"button",52)(94,"button",53)(95,"button",54)(96,"button",55)(97,"button",56),t.k0s()(),t.j41(98,"div",2)(99,"h5"),t.EFF(100,"Rounded Icons"),t.k0s(),t.j41(101,"div",3),t.nrm(102,"button",57)(103,"button",58)(104,"button",59)(105,"button",60)(106,"button",61)(107,"button",62)(108,"button",63),t.k0s()(),t.j41(109,"div",2)(110,"h5"),t.EFF(111,"Rounded Text"),t.k0s(),t.j41(112,"div",3),t.nrm(113,"button",64)(114,"button",65)(115,"button",66)(116,"button",67)(117,"button",68)(118,"button",69)(119,"button",70)(120,"button",71),t.k0s()(),t.j41(121,"div",2)(122,"h5"),t.EFF(123,"Rounded Outlined"),t.k0s(),t.j41(124,"div",3),t.nrm(125,"button",72)(126,"button",73)(127,"button",74)(128,"button",75)(129,"button",76)(130,"button",77)(131,"button",78),t.k0s()(),t.j41(132,"div",2)(133,"h5"),t.EFF(134,"Loading"),t.k0s(),t.j41(135,"div",3)(136,"p-button",79),t.bIt("onClick",function(){return l.load(0)}),t.k0s(),t.j41(137,"p-button",80),t.bIt("onClick",function(){return l.load(1)}),t.k0s(),t.j41(138,"p-button",81),t.bIt("onClick",function(){return l.load(2)}),t.k0s(),t.j41(139,"p-button",82),t.bIt("onClick",function(){return l.load(3)}),t.k0s()()()()()),2&a&&(t.R7$(53),t.Y8G("model",l.items),t.R7$(),t.Y8G("model",l.items),t.R7$(),t.Y8G("model",l.items),t.R7$(),t.Y8G("model",l.items),t.R7$(),t.Y8G("model",l.items),t.R7$(79),t.Y8G("loading",l.loading[0]),t.R7$(),t.Y8G("loading",l.loading[1]),t.R7$(),t.Y8G("loading",l.loading[2]),t.R7$(),t.Y8G("loading",l.loading[3]))},dependencies:[r._f,r.$n,g.n,y.f],encapsulation:2})}return u})(),R=(()=>{class u{static#t=this.\u0275fac=function(a){return new(a||u)};static#n=this.\u0275mod=t.$C({type:u});static#o=this.\u0275inj=t.G2t({imports:[n.iI.forChild([{path:"",component:B}]),n.iI]})}return u})();var k=i(3973);let C=(()=>{class u{static#t=this.\u0275fac=function(a){return new(a||u)};static#n=this.\u0275mod=t.$C({type:u});static#o=this.\u0275inj=t.G2t({imports:[d.MD,R,r.tm,g.Z,y.J,k.d0]})}return u})()},3973:(v,f,i)=>{i.d(f,{d0:()=>m,ff:()=>l});var d=i(177),n=i(4438),t=i(9417),r=i(563),g=i(5779);const y=(e,c,o)=>({"p-button p-togglebutton p-component":!0,"p-button-icon-only":e,"p-highlight":c,"p-disabled":o}),B=(e,c)=>({"p-button-icon":!0,"p-button-icon-left":e,"p-button-icon-right":c}),R=e=>({$implicit:e});function k(e,c){if(1&e&&n.nrm(0,"span",4),2&e){const o=n.XpG(2);n.HbH(o.checked?o.onIcon:o.offIcon),n.Y8G("ngClass",n.l_i(4,B,"left"===o.iconPos,"right"===o.iconPos)),n.BMQ("data-pc-section","icon")}}function C(e,c){if(1&e&&n.DNE(0,k,1,7,"span",3),2&e){const o=n.XpG();n.Y8G("ngIf",o.onIcon||o.offIcon)}}function u(e,c){1&e&&n.eu8(0)}function M(e,c){if(1&e&&n.DNE(0,u,1,0,"ng-container",5),2&e){const o=n.XpG();n.Y8G("ngTemplateOutlet",o.iconTemplate)("ngTemplateOutletContext",n.eq3(2,R,o.checked))}}function s(e,c){if(1&e&&(n.j41(0,"span",6),n.EFF(1),n.k0s()),2&e){const o=n.XpG();n.BMQ("data-pc-section","label"),n.R7$(),n.JRh(o.checked?o.hasOnLabel?o.onLabel:"":o.hasOffLabel?o.offLabel:"")}}const a={provide:t.kq,useExisting:(0,n.Rfq)(()=>l),multi:!0};let l=(()=>{class e{cd;onLabel;offLabel;onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex;iconPos="left";onChange=new n.bkB;templates;iconTemplate;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};constructor(o){this.cd=o}ngAfterContentInit(){this.templates.forEach(o=>{o.getType(),this.iconTemplate=o.template})}toggle(o){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:o,checked:this.checked}),this.cd.markForCheck())}onKeyDown(o){switch(o.code){case"Enter":case"Space":this.toggle(o),o.preventDefault()}}onBlur(){this.onModelTouched()}writeValue(o){this.checked=o,this.cd.markForCheck()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){this.disabled=o,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}static \u0275fac=function(b){return new(b||e)(n.rXU(n.gRc))};static \u0275cmp=n.VBU({type:e,selectors:[["p-toggleButton"]],contentQueries:function(b,p,_){if(1&b&&n.wni(_,g.Ei,4),2&b){let h;n.mGM(h=n.lsd())&&(p.templates=h)}},hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[n.Jv_([a])],decls:4,vars:16,consts:[["role","switch","pRipple","",3,"click","keydown","ngClass","ngStyle"],[3,"class","ngClass"],["class","p-button-label",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-button-label"]],template:function(b,p){1&b&&(n.j41(0,"div",0),n.bIt("click",function(h){return p.toggle(h)})("keydown",function(h){return p.onKeyDown(h)}),n.DNE(1,C,1,1,"span",1)(2,M,1,4)(3,s,2,2,"span",2),n.k0s()),2&b&&(n.HbH(p.styleClass),n.Y8G("ngClass",n.sMw(12,y,p.onIcon&&p.offIcon&&!p.hasOnLabel&&!p.hasOffLabel,p.checked,p.disabled))("ngStyle",p.style),n.BMQ("tabindex",p.disabled?null:"0")("aria-checked",p.checked)("aria-labelledby",p.ariaLabelledBy)("aria-label",p.ariaLabel)("data-pc-name","togglebutton")("data-pc-section","root"),n.R7$(),n.vxM(1,p.iconTemplate?2:1),n.R7$(2),n.Y8G("ngIf",p.onLabel||p.offLabel))},dependencies:[d.YU,d.bT,d.T3,d.B3,r.n],styles:['@layer primeng{.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default;pointer-events:none}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}p-button[iconpos=right][_ngcontent-%COMP%]   spinnericon[_ngcontent-%COMP%]{order:1}}'],changeDetection:0})}return e})(),m=(()=>{class e{static \u0275fac=function(b){return new(b||e)};static \u0275mod=n.$C({type:e});static \u0275inj=n.G2t({imports:[d.MD,r.Z,g.Gg,g.Gg]})}return e})()}}]);