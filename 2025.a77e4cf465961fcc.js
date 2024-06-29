"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[2025],{2025:(u,a,o)=>{o.r(a),o.d(a,{DocumentationModule:()=>p});var r=o(177),s=o(8729),e=o(4438);let l=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["ng-component"]],decls:94,vars:0,consts:[[1,"card","mb-3"],[1,"app-code"],[1,"font-semibold"],[1,"text-primary","font-medium"],[1,"video-container"],["width","560","height","315","src",e.wXG`https://www.youtube.com/embed/yl2f8KKY204`,"frameborder","0","allowfullscreen",""],["href","https://www.youtube.com/watch?v=5VOuUdDXRsE",1,"font-medium","text-primary","hover:underline"]],template:function(n,m){1&n&&(e.j41(0,"div",0)(1,"div")(2,"h2"),e.EFF(3,"Documentation"),e.k0s(),e.j41(4,"h4"),e.EFF(5,"Getting Started"),e.k0s(),e.j41(6,"p"),e.EFF(7,"Sakai is an application template for Angular and is distributed as a CLI project. Current versions is Angular v17 with PrimeNG v17. In case CLI is not installed already, use the command below to set it up."),e.k0s(),e.j41(8,"pre",1)(9,"code"),e.EFF(10,"npm install -g @angular/cli"),e.k0s()(),e.j41(11,"p"),e.EFF(12,'Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute "ng serve" to run the application in your local environment.'),e.k0s(),e.j41(13,"pre",1)(14,"code"),e.EFF(15,"cd sakai\nnpm install\nng serve"),e.k0s()(),e.j41(16,"p"),e.EFF(17,"The application should run at "),e.j41(18,"span",2),e.EFF(19,"http://localhost:4200/"),e.k0s(),e.EFF(20,", you may now start with the development of your application."),e.k0s(),e.j41(21,"h5"),e.EFF(22,"Important CLI Commands"),e.k0s(),e.j41(23,"p"),e.EFF(24,"Following commands are derived from CLI."),e.k0s(),e.j41(25,"pre",1)(26,"code"),e.EFF(27,"Run 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\n\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\n\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\nRun 'ng help' for more options."),e.k0s()(),e.j41(28,"h4"),e.EFF(29,"Structure"),e.k0s(),e.j41(30,"p"),e.EFF(31,"Sakai consists of 3 main parts; the application layout, layout assets and PrimeNG component theme assets. Layout is placed inside the "),e.j41(32,"span",3),e.EFF(33,"src/app/layout"),e.k0s(),e.EFF(34," folder, and the assets are in the "),e.j41(35,"span",3),e.EFF(36,"src/assets/layout"),e.k0s(),e.EFF(37," folder. "),e.k0s(),e.j41(38,"h5"),e.EFF(39,"Default Configuration"),e.k0s(),e.j41(40,"p"),e.EFF(41,"Initial layout configuration can be defined at the main app component by injecting the "),e.j41(42,"span",3),e.EFF(43,"LayoutService"),e.k0s(),e.EFF(44,", this step is optional and only necessary when customizing the defaults. Note that "),e.j41(45,"span",3),e.EFF(46,"theme"),e.k0s(),e.EFF(47," and "),e.j41(48,"span",3),e.EFF(49,"scale"),e.k0s(),e.EFF(50," are not reactive since theme is configured outside of Angular at "),e.j41(51,"strong",2),e.EFF(52,"index.html"),e.k0s(),e.EFF(53," by default and initial scale is defined with the "),e.j41(54,"span",3),e.EFF(55,"$scale"),e.k0s(),e.EFF(56," at "),e.j41(57,"strong",2),e.EFF(58,"layout.scss"),e.k0s(),e.EFF(59,". When default theme or scale is changed at their files initially, it is required to configure the layout service with the matching values to avoid sync issues. "),e.k0s(),e.j41(60,"pre",1)(61,"code"),e.EFF(62,"import { Component, OnInit } from '@angular/core';\nimport { PrimeNGConfig } from 'primeng/api';\nimport { LayoutService, AppConfig } from './layout/service/app.layout.service';\n\n@Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent implements OnInit {\n\n    constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) { }\n\n    ngOnInit(): void {\n        this.primengConfig.ripple = true;       //enables core ripple functionality\n\n        //optional configuration with the default configuration\n        const config: AppConfig = {\n            ripple: false,                      //toggles ripple on and off\n            inputStyle: 'outlined',             //default style for input elements\n            menuMode: 'static',                 //layout mode of the menu, valid values are \"static\" and \"overlay\"\n            colorScheme: 'light',               //color scheme of the template, valid values are \"light\" and \"dark\"\n            theme: 'lara-light-indigo',         //default component theme for PrimeNG\n            scale: 14                           //size of the body font size to scale the whole application\n        };\n        this.layoutService.config.set(config);\n    }\n\n}"),e.k0s()(),e.j41(63,"h5"),e.EFF(64,"Menu"),e.k0s(),e.j41(65,"p"),e.EFF(66,"Menu is a separate component defined in "),e.j41(67,"span",3),e.EFF(68,"src/app/layout/app.menu.component.ts"),e.k0s(),e.EFF(69," file and based on PrimeNG MenuModel API. In order to define the menuitems, navigate to this file and define your own model as a nested structure."),e.k0s(),e.j41(70,"pre",1)(71,"code"),e.EFF(72,"import { OnInit } from '@angular/core';\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'app-menu',\n    templateUrl: './app.menu.component.html'\n})\nexport class AppMenuComponent implements OnInit {\n\n    model: any[] = [];\n\n    ngOnInit() {\n        this.model = [\n            {\n                label: 'Home',\n                items: [\n                    {\n                        label: 'Dashboard',\n                        icon: 'pi pi-fw pi-home',\n                        routerLink: ['/']\n                    }\n                ]\n            },\n            //...\n        ];\n    }\n}"),e.k0s()(),e.j41(73,"h4"),e.EFF(74,"Integration with Existing Angular CLI Projects"),e.k0s(),e.j41(75,"p"),e.EFF(76,"Sakai structure is designed in a modular way so that it can easily be integrated with your existing application. We've created a short tutorial with details."),e.k0s(),e.j41(77,"div",4),e.nrm(78,"iframe",5),e.k0s(),e.j41(79,"h4"),e.EFF(80,"Theme"),e.k0s(),e.j41(81,"p"),e.EFF(82,"Sakai provides 34 PrimeNG themes out of the box. Setup of a theme is simple by including the css of theme to your bundle that are located inside "),e.j41(83,"span",3),e.EFF(84,"assets/layout/styles/theme/"),e.k0s(),e.EFF(85," folder such as "),e.j41(86,"span",3),e.EFF(87,"assets/layout/styles/theme/lara-light-indigo/theme.css"),e.k0s(),e.EFF(88,"."),e.k0s(),e.j41(89,"p"),e.EFF(90,"Another alternative would be creating dynamic bundles, please see the "),e.j41(91,"a",6),e.EFF(92,"video tutorial"),e.k0s(),e.EFF(93," for an example."),e.k0s()()())},styles:["@media screen and (max-width: 991px){.video-container[_ngcontent-%COMP%]{position:relative;width:100%;height:0;padding-bottom:56.25%}.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}}"]})}return t})(),c=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.$C({type:t});static#n=this.\u0275inj=e.G2t({imports:[s.iI.forChild([{path:"",component:l}]),s.iI]})}return t})(),p=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.$C({type:t});static#n=this.\u0275inj=e.G2t({imports:[r.MD,c]})}return t})()}}]);