"use strict";(self.webpackChunkcgmh_ctc_website=self.webpackChunkcgmh_ctc_website||[]).push([[428],{3428:(kt,I,o)=>{o.r(I),o.d(I,{AdminModule:()=>Qt});var p=o(6895),S=o(2761),P=o(7618),B=o(9041),_=o(9602),f=o(6425),j=o(309),w=o(3086),H=o(8666),C=o(7579),m=o(2722),q=o(3900),v=o(4004),U=o(9841),h=o(8505),K=o(8675),G=o(8372),V=o(1884),D=o(515),T=o(8746),R=o(262),z=o(7482),Z=o(9577),O=o(6415),g=o(5412),W=o(4718),X=o(1135),r=(()=>{return(n=r||(r={}))[n.Finished=0]="Finished",n[n.Cancelled=1]="Cancelled",n[n.Ongoing=2]="Ongoing",n[n.Reviewing=3]="Reviewing",n[n.Applied=4]="Applied",r;var n})();const et=(0,O.J)([{label:"\u5df2\u7d50\u675f",value:r.Finished},{label:"\u5df2\u53d6\u6d88",value:r.Cancelled},{label:"\u9032\u884c\u4e2d",value:r.Ongoing},{label:"\u5be9\u6838\u4e2d",value:r.Reviewing},{label:"\u5831\u540d\u6210\u529f",value:r.Applied}],"value","label"),nt={Finished:r.Finished,Cancelled:r.Cancelled,Ongoing:r.Ongoing,Reviewing:r.Reviewing,Applied:r.Applied};var t=o(4650),it=o(3306),$=o(2225),at=o(629),N=o(315),F=o(4859),E=o(1572),st=o(5940);function ot(n,l){1&n&&(t.ynx(0),t.TgZ(1,"div",5)(2,"div",6)(3,"div",7),t._UZ(4,"mat-spinner"),t.qZA()()(),t.BQk())}function lt(n,l){if(1&n&&(t.TgZ(0,"tr")(1,"td",13),t._uU(2),t.qZA(),t.TgZ(3,"td",14),t._uU(4),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.label," "),t.xp6(2),t.Oqu(e.text)}}function rt(n,l){if(1&n&&(t.ynx(0),t.YNc(1,lt,5,2,"tr",8),t.BQk()),2&n){const e=l.$implicit;t.xp6(1),t.Q6J("ngIf",e.text)}}function ct(n,l){if(1&n&&(t.ynx(0),t.TgZ(1,"h1",9),t._uU(2),t.qZA(),t.TgZ(3,"div",5)(4,"table",10),t.YNc(5,rt,2,1,"ng-container",11),t.qZA(),t._UZ(6,"div",12),t.ALo(7,"safeHTML"),t.qZA(),t.BQk()),2&n){const e=l.ngIf,i=t.oxw(2);t.xp6(2),t.Oqu(e.name),t.xp6(3),t.Q6J("ngForOf",i.infoList),t.xp6(1),t.Q6J("innerHTML",t.lcZ(7,3,e.htmlContent),t.oJD)}}function pt(n,l){if(1&n&&(t.YNc(0,ct,8,5,"ng-container",8),t.ALo(1,"async")),2&n){const e=t.oxw();t.Q6J("ngIf",t.lcZ(1,1,e.course$))}}function ut(n,l){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",15),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onCancelAppl(a.data.event.seq))}),t._uU(2," \u53d6\u6d88\u5831\u540d "),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.data.event.canCancel||e.cancelling||e.cancelled)}}function gt(n,l){if(1&n&&(t.TgZ(0,"button",16),t._uU(1),t.ALo(2,"i18nSelect"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,""+e.data.event.status,e.statusNameMap)," ")}}let mt=(()=>{class n{constructor(e,i,a,s,d,y,x,u){this.data=e,this.dialogRef=i,this.currencyPipe=a,this.decimalPipe=s,this.datePipe=d,this.coursesService=y,this.authService=x,this.snackBarService=u,this.destroy$=new C.x,this.course$=new X.X(void 0),this.infoList=[],this.statusObject=nt,this.statusNameMap=et,this.getting=!1,this.cancelling=!1,this.cancelled=!1,this.dialogRef.updateSize("600px");const{courseGUID:b}=this.data.event;"string"==typeof b&&0!==b.length?this.course$.pipe((0,m.R)(this.destroy$),(0,h.b)(A=>{void 0!==A&&(this.infoList=this.getInfoList(A))})).subscribe():this.dialogRef.close()}ngOnInit(){this.fetchCourse().subscribe()}fetchCourse(e){return void 0===e&&(e=this.data.event.courseGUID),this.getting=!0,this.coursesService.GetCourse({guid:e}).pipe((0,m.R)(this.destroy$),(0,T.x)(()=>this.getting=!1),(0,h.b)(a=>{const s=this.coursesService.extendCourse(a.content,this.authService.appliedCourseGUIDList$.getValue());this.course$.next(s)}),(0,R.K)(a=>(this.dialogRef.close(),this.onError(a))))}getInfoList(e){return[{label:"\u6642\u9593",text:this.getDatetimeSpan(e.startDatetime,e.endDatetime)},{label:"\u5730\u9ede",text:e.location},{label:"\u4e3b\u8fa6\u55ae\u4f4d",text:e.organizer},{label:"\u806f\u7d61\u96fb\u8a71",text:e.organizerTelNo},{label:"\u806f\u7d61\u4fe1\u7bb1",text:e.organizerEmail},{label:"\u5831\u540d\u6642\u9593",text:this.getDatetimeSpan(e.applyStartDatetime,e.applyEndDatetime)},{label:"\u8cbb\u7528",text:e.charge?this.currencyPipe.transform(e.charge,"TWD","symbol","1.0-2"):"\u514d\u8cbb"},{label:"\u540d\u984d\u9650\u5236",text:e.quotaLimit?`${this.decimalPipe.transform(e.quotaLimit,"1.0-0")} \u4eba`:"\u7121\u9650\u5236"},{label:"\u5269\u9918\u540d\u984d",text:e.quotaLimit?`${this.decimalPipe.transform(e.quotaLimit-e.appliedCount,"1.0-0")} \u4eba`:void 0},{label:"\u627f\u8fa6\u4eba",text:e.contractor},{label:"\u627f\u8fa6\u4eba\u96fb\u8a71",text:e.contractorTelNo},{label:"\u627f\u8fa6\u4eba\u4fe1\u7bb1",text:e.contractorEmail}]}getDatetimeSpan(e,i){const a="yyyy-MM-dd (E) HH:mm",d=(0,W.Z)(new Date(e),new Date(i));return`${this.datePipe.transform(e,a)} ~ ${this.datePipe.transform(i,d?a:"HH:mm")}`}onCancelAppl(e){this.getting||this.cancelling||this.cancelled||(this.cancelling=!0,this.coursesService.CancelAppl({seq:e}).pipe((0,m.R)(this.destroy$),(0,T.x)(()=>this.cancelling=!1),(0,h.b)(a=>{this.snackBarService.add({message:a.message,type:Z.K.Success}),this.data.event.status=r.Cancelled,this.cancelled=!0}),(0,R.K)(a=>this.onError(a))).subscribe())}closeDialog(){this.dialogRef.close(this.cancelled)}onError(e){return console.error(e),this.snackBarService.add({message:e.message,type:Z.K.Error}),D.E}ngOnDestroy(){this.destroy$.next(null),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.WI),t.Y36(g.so),t.Y36(p.H9),t.Y36(p.JJ),t.Y36(it.j),t.Y36($.W),t.Y36(at.e),t.Y36(N.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-course-appl-dialog"]],decls:9,vars:4,consts:[[4,"ngIf","ngIfElse"],["fulfilled",""],["mat-dialog-actions","","align","end"],["type","button","mat-button","",3,"click"],["locked",""],["mat-dialog-content",""],[1,"spinner-box"],[1,"spinner"],[4,"ngIf"],["mat-dialog-title",""],[1,"w-full","mb-8"],[4,"ngFor","ngForOf"],[1,"ck","ck-content",3,"innerHTML"],[1,"leading-6","text-sm","font-medium","align-top","whitespace-nowrap"],[1,"text-base","px-4"],["type","button","mat-flat-button","","color","primary",3,"disabled","click"],["type","button","mat-flat-button","","color","primary","disabled",""]],template:function(e,i){if(1&e&&(t.YNc(0,ot,5,0,"ng-container",0),t.YNc(1,pt,2,3,"ng-template",null,1,t.W1O),t.TgZ(3,"div",2)(4,"button",3),t.NdJ("click",function(){return i.closeDialog()}),t._uU(5,"\u95dc\u9589"),t.qZA(),t.YNc(6,ut,3,1,"ng-container",0),t.YNc(7,gt,3,4,"ng-template",null,4,t.W1O),t.qZA()),2&e){const a=t.MAs(2),s=t.MAs(8);t.Q6J("ngIf",i.getting)("ngIfElse",a),t.xp6(6),t.Q6J("ngIf",i.data.event.status===i.statusObject.Applied)("ngIfElse",s)}},dependencies:[p.sg,p.O5,F.lW,g.uh,g.xY,g.H8,E.Ou,p.Ov,p._K,st.u]}),n})();var c=(()=>{return(n=c||(c={}))[n.Finished=0]="Finished",n[n.Cancelled=1]="Cancelled",n[n.Ongoing=2]="Ongoing",n[n.Reviewing=3]="Reviewing",n[n.Approved=4]="Approved",c;var n})();const ht=(0,O.J)([{label:"\u5df2\u7d50\u675f",value:c.Finished},{label:"\u5df2\u53d6\u6d88",value:c.Cancelled},{label:"\u9032\u884c\u4e2d",value:c.Ongoing},{label:"\u5be9\u6838\u4e2d",value:c.Reviewing},{label:"\u9810\u7d04\u6210\u529f",value:c.Approved}],"value","label"),ft={Finished:c.Finished,Cancelled:c.Cancelled,Ongoing:c.Ongoing,Reviewing:c.Reviewing,Approved:c.Approved};var vt=o(9707),J=o(4367),Y=o(682),M=o(5884);function yt(n,l){if(1&n&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",2),t._uU(3),t.qZA(),t.TgZ(4,"td",3),t._uU(5),t.qZA()(),t.BQk()),2&n){const e=l.$implicit;t.xp6(3),t.hij(" ",e.label," "),t.xp6(2),t.Oqu(e.text)}}let xt=(()=>{class n{constructor(){this.infoList=[]}ngOnChanges(e){const i=e.rsvnEvent;i&&i.currentValue&&(this.infoList=this.getInfoList(i.currentValue))}getInfoList(e){const i=[{label:"IRB \u6848\u865f",text:e.irbCaseNo},{label:"\u8a08\u756b\u4e3b\u6301\u4eba",text:e.principalInvestigator},{label:"\u767b\u8a18\u8005\u59d3\u540d",text:e.registrantName},{label:"\u767b\u8a18\u8005\u8058\u4efb\u516c\u53f8",text:e.registrantCompany},{label:"\u767b\u8a18\u8005\u806f\u7d61\u96fb\u8a71",text:e.registrantTelNo},{label:"\u767b\u8a18\u8005 Email",text:e.registrantEmail},{label:"\u5834\u5730\u4f7f\u7528\u8005\u59d3\u540d",text:e.userName},{label:"\u5834\u5730\u4f7f\u7528\u8005\u8058\u4efb\u516c\u53f8",text:e.userCompany},{label:"\u5834\u5730\u4f7f\u7528\u8005\u806f\u7d61\u96fb\u8a71",text:e.userTelNo},{label:"\u5834\u5730\u4f7f\u7528\u8005 Email",text:e.userEmail},{label:"\u4f7f\u7528\u4eba\u6578",text:`${e.userCount} \u4eba`},{label:"\u7533\u8acb\u76ee\u7684",text:e.purpose}];return e.purpose===M.Gj.Other&&i.push({label:"\u5176\u4ed6\u7533\u8acb\u76ee\u7684",text:e.purposeRemarks}),i}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-lnk-digital-library-rsvn"]],inputs:{rsvnEvent:"rsvnEvent"},features:[t.TTD],decls:2,vars:1,consts:[[1,"w-full","mb-8"],[4,"ngFor","ngForOf"],[1,"leading-6","text-sm","font-medium","align-top","whitespace-nowrap"],[1,"text-base","px-4"]],template:function(e,i){1&e&&(t.TgZ(0,"table",0),t.YNc(1,yt,6,2,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.infoList))},dependencies:[p.sg]}),n})();function Ct(n,l){if(1&n&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",2),t._uU(3),t.qZA(),t.TgZ(4,"td",3),t._uU(5),t.qZA()(),t.BQk()),2&n){const e=l.$implicit;t.xp6(3),t.hij(" ",e.label," "),t.xp6(2),t.Oqu(e.text)}}let bt=(()=>{class n{constructor(){this.infoList=[]}ngOnChanges(e){const i=e.rsvnEvent;i&&i.currentValue&&(this.infoList=this.getInfoList(i.currentValue))}getInfoList(e){const i=[{label:"IRB \u6848\u865f",text:e.irbCaseNo},{label:"\u8a08\u756b\u4e3b\u6301\u4eba",text:e.principalInvestigator},{label:"\u767b\u8a18\u8005\u59d3\u540d",text:e.registrantName},{label:"\u767b\u8a18\u8005\u8058\u4efb\u516c\u53f8",text:e.registrantCompany},{label:"\u767b\u8a18\u8005\u806f\u7d61\u96fb\u8a71",text:e.registrantTelNo},{label:"\u767b\u8a18\u8005 Email",text:e.registrantEmail},{label:"\u7533\u8acb\u76ee\u7684",text:e.purpose}];switch(e.purpose){case M.tH.MonitorVisit:i.push({label:"Monitor Visit \u7533\u8acb\u76ee\u7684",text:e.purposeRemarks?.split("|").join("\u3001")});break;case M.tH.Other:i.push({label:"\u5176\u4ed6\u7533\u8acb\u76ee\u7684",text:e.purposeRemarks})}return i}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-lnk-trial-pharmacy-rsvn"]],inputs:{rsvnEvent:"rsvnEvent"},features:[t.TTD],decls:2,vars:1,consts:[[1,"w-full","mb-8"],[4,"ngFor","ngForOf"],[1,"leading-6","text-sm","font-medium","align-top","whitespace-nowrap"],[1,"text-base","px-4"]],template:function(e,i){1&e&&(t.TgZ(0,"table",0),t.YNc(1,Ct,6,2,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.infoList))},dependencies:[p.sg]}),n})();function At(n,l){if(1&n&&t._UZ(0,"app-lnk-digital-library-rsvn",9),2&n){const e=t.oxw();t.Q6J("rsvnEvent",e.data.event)}}function Dt(n,l){if(1&n&&t._UZ(0,"app-lnk-trial-pharmacy-rsvn",9),2&n){const e=t.oxw();t.Q6J("rsvnEvent",e.data.event)}}function Tt(n,l){if(1&n&&t._UZ(0,"app-lnk-digital-library-rsvn",9),2&n){const e=t.oxw();t.Q6J("rsvnEvent",e.data.event)}}function Rt(n,l){if(1&n&&t._UZ(0,"app-lnk-digital-library-rsvn",9),2&n){const e=t.oxw();t.Q6J("rsvnEvent",e.data.event)}}function Zt(n,l){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",10),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onCancelRsvn(a.data.event.seq))}),t._uU(2," \u53d6\u6d88\u9810\u7d04 "),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.data.event.canCancel||e.cancelling||e.cancelled)}}function Lt(n,l){if(1&n&&(t.TgZ(0,"button",11),t._uU(1),t.ALo(2,"i18nSelect"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,""+e.data.event.status,e.statusNameMap)," ")}}let St=(()=>{class n{constructor(e,i,a,s){this.data=e,this.dialogRef=i,this.resourcesService=a,this.snackBarService=s,this.destroy$=new C.x,this.resourceNameMap=this.data.resourceNameMap,this.rsvnFormObject=vt.hL,this.statusObject=ft,this.statusNameMap=ht,this.cancelling=!1,this.cancelled=!1,this.dialogRef.updateSize("600px")}ngOnInit(){}onCancelRsvn(e){this.cancelling||this.cancelled||(this.cancelling=!0,this.resourcesService.CancelRsvn({seq:e}).pipe((0,m.R)(this.destroy$),(0,T.x)(()=>this.cancelling=!1),(0,h.b)(a=>{this.snackBarService.add({message:a.message,type:Z.K.Success}),this.data.event.status=c.Cancelled,this.cancelled=!0}),(0,R.K)(a=>this.onError(a))).subscribe())}closeDialog(){this.dialogRef.close(this.cancelled)}onError(e){return console.error(e),this.snackBarService.add({message:e.message,type:Z.K.Error}),D.E}ngOnDestroy(){this.destroy$.next(null),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.WI),t.Y36(g.so),t.Y36(J.X),t.Y36(N.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-resource-rsvn-dialog"]],decls:18,vars:14,consts:[["mat-dialog-title",""],[1,"font-normal","text-base",3,"start","end"],["mat-dialog-content",""],[3,"ngSwitch"],[3,"rsvnEvent",4,"ngSwitchCase"],["mat-dialog-actions","","align","end"],["type","button","mat-button","",3,"mat-dialog-close"],[4,"ngIf","ngIfElse"],["locked",""],[3,"rsvnEvent"],["type","button","mat-flat-button","","color","primary",3,"disabled","click"],["type","button","mat-flat-button","","color","primary","disabled",""]],template:function(e,i){if(1&e&&(t.TgZ(0,"h1",0)(1,"span"),t._uU(2),t.ALo(3,"i18nSelect"),t.qZA(),t._UZ(4,"br")(5,"app-datetime-span",1),t.qZA(),t.TgZ(6,"div",2),t.ynx(7,3),t.YNc(8,At,1,1,"app-lnk-digital-library-rsvn",4),t.YNc(9,Dt,1,1,"app-lnk-trial-pharmacy-rsvn",4),t.YNc(10,Tt,1,1,"app-lnk-digital-library-rsvn",4),t.YNc(11,Rt,1,1,"app-lnk-digital-library-rsvn",4),t.BQk(),t.qZA(),t.TgZ(12,"div",5)(13,"button",6),t._uU(14,"\u95dc\u9589"),t.qZA(),t.YNc(15,Zt,3,1,"ng-container",7),t.YNc(16,Lt,3,4,"ng-template",null,8,t.W1O),t.qZA()),2&e){const a=t.MAs(17);t.xp6(2),t.Oqu(t.xi3(3,11,""+i.data.event.resourceSeq,i.resourceNameMap)),t.xp6(3),t.Q6J("start",i.data.event.startDatetime)("end",i.data.event.endDatetime),t.xp6(2),t.Q6J("ngSwitch",i.data.event.rsvnFormSeq),t.xp6(1),t.Q6J("ngSwitchCase",i.rsvnFormObject.LnkDigitalLibrary),t.xp6(1),t.Q6J("ngSwitchCase",i.rsvnFormObject.LnkTrialPharmacy),t.xp6(1),t.Q6J("ngSwitchCase",i.rsvnFormObject.KelDigitalLibrary),t.xp6(1),t.Q6J("ngSwitchCase",i.rsvnFormObject.JiaDigitalLibrary),t.xp6(2),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("ngIf",i.data.event.status===i.statusObject.Approved||i.data.event.status===i.statusObject.Reviewing)("ngIfElse",a)}},dependencies:[p.O5,p.RF,p.n9,F.lW,g.ZT,g.uh,g.xY,g.H8,Y.P,xt,bt,p._K]}),n})();var Q=o(4960),L=o(1390);let wt=(()=>{class n{transformApplList(e){const i=new Date;return e.map(a=>({seq:a.seq,startDatetime:a.startDatetime,endDatetime:a.endDatetime,name:a.courseName,cancelled:a.cancelled,canCancel:this.getCourseApplCanCancel(a,i),status:this.getCourseApplStatus(a,i),type:"appl",courseGUID:a.courseGUID}))}transformRsvnList(e,i){const a=new Date;return e.map(s=>({seq:s.seq,startDatetime:s.startDatetime,endDatetime:s.endDatetime,name:i[""+s.resourceSeq],cancelled:s.cancelled,canCancel:this.getResourceRsvnCanCancel(s,a),status:this.getResourceRsvnStatus(s,a),type:"rsvn",resourceSeq:s.resourceSeq,rsvnFormSeq:s.rsvnFormSeq,irbCaseNo:s.irbCaseNo,principalInvestigator:s.principalInvestigator,registrantName:s.registrantName,registrantCompany:s.registrantCompany,registrantTelNo:s.registrantTelNo,registrantEmail:s.registrantEmail,userName:s.userName,userCompany:s.userCompany,userTelNo:s.userTelNo,userEmail:s.userEmail,userCount:s.userCount,purpose:s.purpose,purposeRemarks:s.purposeRemarks}))}getCourseApplCanCancel(e,i){return!e.cancelled&&(0,Q.Z)(i,(0,w.Z)(new Date(e.startDatetime),{hours:e.cancelTimeLimit}))}getCourseApplStatus(e,i){let a=r.Applied;return(0,L.Z)(i,new Date(e.endDatetime))?a=r.Finished:e.cancelled?a=r.Cancelled:e.approved?(0,L.Z)(i,new Date(e.startDatetime))&&(a=r.Ongoing):a=r.Reviewing,a}getResourceRsvnCanCancel(e,i){return!e.cancelled&&(0,Q.Z)(i,(0,w.Z)(new Date(e.startDatetime),{hours:e.cancelTimeLimit}))}getResourceRsvnStatus(e,i){let a=c.Approved;return(0,L.Z)(i,new Date(e.endDatetime))?a=c.Finished:e.cancelled?a=c.Cancelled:e.approved?(0,L.Z)(i,new Date(e.startDatetime))&&(a=c.Ongoing):a=c.Reviewing,a}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var k=o(7331),Ot=o(901),Nt=o(9628);function Mt(n,l){1&n&&(t.TgZ(0,"mat-chip",19),t._uU(1,"\u7a7a\u9593\u9810\u7d04"),t.qZA())}function It(n,l){1&n&&(t.TgZ(0,"mat-chip",20),t._uU(1,"\u8ab2\u7a0b\u5831\u540d"),t.qZA())}function _t(n,l){1&n&&(t.TgZ(0,"mat-chip",21),t._uU(1,"\u5df2\u53d6\u6d88"),t.qZA())}function Ut(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"li",11),t.NdJ("click",function(){const s=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.onViewEvent(s))}),t.TgZ(1,"div",12),t._UZ(2,"app-datetime-span",13),t.qZA(),t.TgZ(3,"div",14),t._uU(4),t.qZA(),t.TgZ(5,"mat-chip-list",15),t.YNc(6,Mt,2,0,"mat-chip",16),t.YNc(7,It,2,0,"mat-chip",17),t.YNc(8,_t,2,0,"mat-chip",18),t.qZA()()}if(2&n){const e=l.$implicit;t.xp6(2),t.Q6J("start",e.startDatetime)("end",e.endDatetime),t.xp6(2),t.hij(" ",e.name," "),t.xp6(1),t.Q6J("selectable",!1),t.xp6(1),t.Q6J("ngIf","rsvn"===e.type),t.xp6(1),t.Q6J("ngIf","appl"===e.type),t.xp6(1),t.Q6J("ngIf",e.cancelled)}}function $t(n,l){1&n&&(t.TgZ(0,"li",22),t._uU(1," \u67e5\u7121\u5831\u540d\u6216\u9810\u7d04 "),t.qZA())}function Ft(n,l){1&n&&(t.TgZ(0,"div",23),t._UZ(1,"mat-spinner"),t.qZA())}const Et=[{path:"",component:(()=>{class n{constructor(e,i,a,s,d,y){this.route=e,this.matDialog=i,this.coursesService=a,this.resourcesService=s,this.accountService=d,this.snackBarService=y,this.destroy$=new C.x,this.viewInit$=new C.x,this.calendarHeader=z.$,this.now=new Date,this.selectedDate=null,this.yearAndMonth$=new C.x,this.dateFilter=u=>!1,this.dateClass=(u,b)=>"month"!==b?"":this.startDateSet.has((0,f.Z)(u,"yyyy/MM/dd"))?"bg-warn font-medium border-2 border-solid border-white rounded-full":"",this.eventList$=new C.x,this.startDateSet=new Set,this.gettingApplList=!1,this.gettingRsvnList=!1;const{resourceList:x}=this.route.snapshot.data;this.resourceNameMap=(0,O.J)(x,"seq","name"),this.yearAndMonth$.pipe((0,m.R)(this.destroy$),(0,q.w)(u=>this.fetchEventList(u)),(0,v.U)(u=>{this.eventList$.next(u)})).subscribe(),(0,U.a)([this.viewInit$,this.eventList$]).pipe((0,m.R)(this.destroy$),(0,v.U)(([u,b])=>new Set(b.filter(A=>!A.cancelled).map(A=>(0,f.Z)(new Date(A.startDatetime),"yyyy/MM/dd")))),(0,h.b)(u=>{this.startDateSet=u,this.calendar.updateTodaysDate()})).subscribe()}ngOnInit(){}ngAfterViewInit(){this.viewInit$.next(null),this.viewInit$.complete(),this.calendar.stateChanges.pipe((0,m.R)(this.destroy$),(0,K.O)(null),(0,G.b)(300),(0,v.U)(()=>(0,f.Z)(this.calendar.activeDate,"yyyy/MM")),(0,V.x)(),(0,h.b)(e=>{this.yearAndMonth$.next(e)})).subscribe()}fetchEventList(e){const i=(0,j.Z)(`${e}/01`,"yyyy/MM/dd",new Date),a=(0,w.Z)((0,H.Z)(i,{months:1}),{days:1}),s=(0,f.Z)(i,"yyyy/MM/dd"),d=(0,f.Z)(a,"yyyy/MM/dd");return(0,U.a)([this.fetchApplList(s,d),this.fetchRsvnList(s,d)]).pipe((0,v.U)(([y,x])=>[...this.accountService.transformApplList(y),...this.accountService.transformRsvnList(x,this.resourceNameMap)]),(0,v.U)(y=>y.sort((x,u)=>new Date(x.startDatetime).valueOf()-new Date(u.startDatetime).valueOf())))}fetchApplList(e,i){return this.gettingApplList?D.E:(this.gettingApplList=!0,this.coursesService.GetAccountApplList({minStartDate:e,maxStartDate:i}).pipe((0,m.R)(this.destroy$),(0,T.x)(()=>this.gettingApplList=!1),(0,v.U)(s=>s.content),(0,R.K)(s=>this.onError(s))))}fetchRsvnList(e,i){return this.gettingRsvnList?D.E:(this.gettingRsvnList=!0,this.resourcesService.GetAccountRsvnList({minStartDate:e,maxStartDate:i}).pipe((0,m.R)(this.destroy$),(0,T.x)(()=>this.gettingRsvnList=!1),(0,v.U)(s=>s.content),(0,R.K)(s=>this.onError(s))))}onViewEvent(e){switch(e.type){case"appl":this.openCourseApplDialog(e);break;case"rsvn":this.openResourceRsvnDialog(e)}}openCourseApplDialog(e){this.matDialog.open(mt,{data:{event:e}}).afterClosed().pipe((0,m.R)(this.destroy$),(0,h.b)(a=>{a&&this.yearAndMonth$.next((0,f.Z)(this.calendar.activeDate,"yyyy/MM"))})).subscribe()}openResourceRsvnDialog(e){this.matDialog.open(St,{data:{event:e,resourceNameMap:this.resourceNameMap}}).afterClosed().pipe((0,m.R)(this.destroy$),(0,h.b)(a=>{a&&this.yearAndMonth$.next((0,f.Z)(this.calendar.activeDate,"yyyy/MM"))})).subscribe()}onError(e){return console.error(e),this.snackBarService.add({message:e.message,type:Z.K.Error}),D.E}ngOnDestroy(){this.destroy$.next(null),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(S.gz),t.Y36(g.uw),t.Y36($.W),t.Y36(J.X),t.Y36(wt),t.Y36(N.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-account"]],viewQuery:function(e,i){if(1&e&&t.Gf(_._H,5),2&e){let a;t.iGM(a=t.CRH())&&(i.calendar=a.first)}},decls:13,vars:11,consts:[["title","\u6703\u54e1\u5c08\u5340","engTitle","Account"],["id","account-section",1,"spinner-box","p-page-padding"],[1,"w-page","flex","flex-wrap","items-start"],[1,"w-full","shrink-0","flex","justify-center","mb-4","md:w-80","md:mr-8","md:mb-0","lg:w-120"],[1,"w-120","max-w-full","m-auto"],[3,"headerComponent","dateFilter","dateClass","selected","selectedChange"],[1,"w-full","grow","md:w-auto"],[1,"grid","grid-cols-1","gap-8","mb-8"],["class","col-span-1 bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:bg-primary-300 hover:bg-opacity-10 hover:-translate-x-[2px] hover:-translate-y-[2px]",3,"click",4,"ngFor","ngForOf"],["class","col-span-1 h-40 flex justify-center items-center",4,"ngIf"],["class","spinner",4,"ngIf"],[1,"col-span-1","bg-white","rounded-lg","shadow-lg","p-4","cursor-pointer","hover:bg-primary-300","hover:bg-opacity-10","hover:-translate-x-[2px]","hover:-translate-y-[2px]",3,"click"],[1,"font-medium","text-sm","mb-2"],[3,"start","end"],[1,"h-12","text-base","line-clamp-2","mb-2"],[3,"selectable"],["class","bg-accent text-white","appStopClickPropagation","",4,"ngIf"],["class","bg-primary text-white","appStopClickPropagation","",4,"ngIf"],["appStopClickPropagation","",4,"ngIf"],["appStopClickPropagation","",1,"bg-accent","text-white"],["appStopClickPropagation","",1,"bg-primary","text-white"],["appStopClickPropagation",""],[1,"col-span-1","h-40","flex","justify-center","items-center"],[1,"spinner"]],template:function(e,i){if(1&e&&(t._UZ(0,"app-page-cover",0),t.TgZ(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"mat-calendar",5),t.NdJ("selectedChange",function(s){return i.selectedDate=s}),t.qZA()()(),t.TgZ(6,"div",6)(7,"ul",7),t.YNc(8,Ut,9,7,"li",8),t.ALo(9,"async"),t.YNc(10,$t,2,0,"li",9),t.ALo(11,"async"),t.qZA()()(),t.YNc(12,Ft,2,0,"div",10),t.qZA()),2&e){let a;t.xp6(5),t.Q6J("headerComponent",i.calendarHeader)("dateFilter",i.dateFilter)("dateClass",i.dateClass)("selected",i.selectedDate),t.xp6(3),t.Q6J("ngForOf",t.lcZ(9,7,i.eventList$)),t.xp6(2),t.Q6J("ngIf",!(i.gettingApplList||i.gettingRsvnList||null!=(a=t.lcZ(11,9,i.eventList$))&&a.length)),t.xp6(2),t.Q6J("ngIf",i.gettingApplList||i.gettingRsvnList)}},dependencies:[p.sg,p.O5,k.qn,k.HS,_._H,E.Ou,Y.P,Ot._,Nt.M,p.Ov]}),n})(),pathMatch:"full",canActivate:[P.a],resolve:{resourceList:B.L}}];let Jt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[S.Bz.forChild(Et),S.Bz]}),n})();var Yt=o(12);let Qt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,Jt,Yt.m]}),n})()}}]);