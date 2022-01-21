"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6145],{46145:function(e,t,n){n.r(t);var o=n(23430),a=n(18489),r=n(50390),i=n(76352),s=n(25594),l=n(66946),c=n(86509),d=n(4285),u=n(72462),p=n(34424),m=n(30324),f=n(44149),g=n(67754),h=n(63548),Z=n(62559),x=(0,p.$j)((function(e){return{session:e.console.session}}),{setErrorSnackMessage:f.Ih});t.default=(0,d.Z)((function(e){return(0,c.Z)((0,a.Z)((0,a.Z)({buttonContainer:{textAlign:"right"}},u.ID),u.bK))}))(x((function(e){var t=e.modalOpen,n=e.onClose,a=e.classes,c=e.bucket,d=e.toEdit,u=e.initial,p=(0,r.useState)(u),x=(0,o.Z)(p,2),v=x[0],b=x[1];return(0,Z.jsx)(r.Fragment,{children:(0,Z.jsx)(i.Z,{modalOpen:t,title:"Edit Access Rule for ".concat("".concat(c,"/").concat(d||"")),onClose:n,titleIcon:(0,Z.jsx)(h.sR,{}),children:(0,Z.jsxs)(s.ZP,{container:!0,children:[(0,Z.jsx)(s.ZP,{item:!0,xs:12,className:a.spacerTop,children:(0,Z.jsx)(g.Z,{id:"access",name:"Access",onChange:function(e){b(e.target.value)},label:"Access",value:v,options:[{label:"readonly",value:"readonly"},{label:"writeonly",value:"writeonly"},{label:"readwrite",value:"readwrite"}],disabled:!1})}),(0,Z.jsxs)(s.ZP,{item:!0,xs:12,className:a.modalButtonBar,children:[(0,Z.jsx)(l.Z,{type:"button",color:"primary",variant:"outlined",onClick:function(){b(u)},children:"Clear"}),(0,Z.jsx)(l.Z,{type:"submit",variant:"contained",color:"primary",onClick:function(){m.Z.invoke("PUT","/api/v1/bucket/".concat(c,"/access-rules"),{prefix:d,access:v}).then((function(e){n()})).catch((function(e){(0,f.Ih)(e),n()}))},children:"Save"})]})]})})})})))},67754:function(e,t,n){var o=n(18489),a=n(50390),r=n(25594),i=n(46413),s=n(14602),l=n(94187),c=n(47554),d=n(43965),u=n(31680),p=n(86509),m=n(4285),f=n(72462),g=n(97538),h=n(62559),Z=(0,m.Z)((function(e){return(0,p.Z)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(i.ZP);t.Z=(0,m.Z)((function(e){return(0,p.Z)((0,o.Z)((0,o.Z)({},f.YI),f.Hr))}))((function(e){var t=e.classes,n=e.id,o=e.name,i=e.onChange,p=e.options,m=e.label,f=e.tooltip,x=void 0===f?"":f,v=e.value,b=e.disabled,C=void 0!==b&&b;return(0,h.jsx)(a.Fragment,{children:(0,h.jsxs)(r.ZP,{item:!0,xs:12,className:t.fieldContainer,children:[""!==m&&(0,h.jsxs)(s.Z,{htmlFor:n,className:t.inputLabel,children:[(0,h.jsx)("span",{children:m}),""!==x&&(0,h.jsx)("div",{className:t.tooltipContainer,children:(0,h.jsx)(l.Z,{title:x,placement:"top-start",children:(0,h.jsx)("div",{className:t.tooltip,children:(0,h.jsx)(g.Z,{})})})})]}),(0,h.jsx)(c.Z,{fullWidth:!0,children:(0,h.jsx)(d.Z,{id:n,name:o,value:v,onChange:i,input:(0,h.jsx)(Z,{}),disabled:C,children:p.map((function(e){return(0,h.jsx)(u.Z,{value:e.value,children:e.label},"select-".concat(o,"-").concat(e.label))}))})})]})})}))},76352:function(e,t,n){n.d(t,{Z:function(){return w}});var o,a=n(23430),r=n(18489),i=n(50390),s=n(34424),l=n(95467),c=n(97771),d=n(84402),u=n(78426),p=n(93085),m=n(86509),f=n(4285),g=n(72462),h=n(44149),Z=n(38342),x=n.n(Z),v=n(92125),b=n(19538),C=n(21278),j=n(62559),y=function(){clearInterval(o)},k={displayErrorMessage:h.zb},M=(0,s.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),k)((0,f.Z)((function(e){return(0,m.Z)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,n=e.modalSnackMessage,r=e.displayErrorMessage,s=e.customStyle,l=(0,i.useState)(!1),c=(0,a.Z)(l,2),d=c[0],u=c[1],p=(0,i.useState)(!1),m=(0,a.Z)(p,2),f=m[0],g=m[1],h=(0,i.useCallback)((function(){g(!1)}),[]);(0,i.useEffect)((function(){f||(r({detailedError:"",errorMessage:""}),u(!1))}),[r,f]),(0,i.useEffect)((function(){""!==n.message&&"error"===n.type&&g(!0)}),[h,n.message,n.type]);var Z=x()(n,"message",""),k=x()(n,"detailedErrorMsg","");return"error"!==n.type||""===Z?null:(0,j.jsx)(i.Fragment,{children:(0,j.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(f?t.modalErrorShow:""),style:s,onMouseOver:y,onMouseLeave:function(){o=setInterval(h,1e4)},children:[(0,j.jsx)("button",{className:t.closeButton,onClick:h,children:(0,j.jsx)(C.Z,{})}),(0,j.jsxs)("div",{className:t.errorTitle,children:[(0,j.jsx)("span",{className:t.messageIcon,children:(0,j.jsx)(b.Z,{})}),(0,j.jsx)("span",{className:t.errorLabel,children:Z})]}),""!==k&&(0,j.jsxs)(i.Fragment,{children:[(0,j.jsx)("div",{className:t.detailsContainerLink,children:(0,j.jsxs)("button",{className:t.detailsButton,onClick:function(){u(!d)},children:["Details",(0,j.jsx)(v.Z,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),(0,j.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:k})]})]})})}))),S=(0,s.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:h.MK}),w=(0,f.Z)((function(e){return(0,m.Z)((0,r.Z)((0,r.Z)({},g.Qw),{},{root:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},g.sN))}))(S((function(e){var t=e.onClose,n=e.modalOpen,o=e.title,s=e.children,m=e.classes,f=e.wideLimit,g=void 0===f||f,h=e.modalSnackMessage,Z=e.noContentPadding,x=e.setModalSnackMessage,v=e.titleIcon,b=void 0===v?null:v,y=(0,i.useState)(!1),k=(0,a.Z)(y,2),S=k[0],w=k[1];(0,i.useEffect)((function(){x("")}),[x]),(0,i.useEffect)((function(){if(h){if(""===h.message)return void w(!1);"error"!==h.type&&w(!0)}}),[h]);var N=g?{classes:{paper:m.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},I="";return h&&(I=h.detailedErrorMsg,(""===h.detailedErrorMsg||h.detailedErrorMsg.length<5)&&(I=h.message)),(0,j.jsxs)(d.Z,(0,r.Z)((0,r.Z)({open:n,classes:m},N),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:m.root,children:[(0,j.jsxs)(u.Z,{className:m.title,children:[(0,j.jsxs)("div",{className:m.titleText,children:[b," ",o]}),(0,j.jsx)("div",{className:m.closeContainer,children:(0,j.jsx)(l.Z,{"aria-label":"close",className:m.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,j.jsx)(C.Z,{})})})]}),(0,j.jsx)(M,{}),(0,j.jsx)(c.Z,{open:S,className:m.snackBarModal,onClose:function(){w(!1),x("")},message:I,ContentProps:{className:"".concat(m.snackBar," ").concat(h&&"error"===h.type?m.errorSnackBar:"")},autoHideDuration:h&&"error"===h.type?1e4:5e3}),(0,j.jsx)(p.Z,{className:Z?"":m.content,children:s})]}))})))},4247:function(e,t,n){n.d(t,{V:function(){return a}});var o=n(10594);function a(e){return(0,o.Z)("MuiDivider",e)}var r=(0,n(43349).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=r},31680:function(e,t,n){n.d(t,{Z:function(){return M}});var o=n(36222),a=n(1048),r=n(32793),i=n(50390),s=n(44977),l=n(50076),c=n(36128),d=n(8208),u=n(15573),p=n(57308),m=n(86875),f=n(40839),g=n(3299),h=n(4247),Z=n(2198),x=n(23586),v=n(10594);function b(e){return(0,v.Z)("MuiMenuItem",e)}var C=(0,n(43349).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),j=n(62559),y=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],k=(0,d.ZP)(m.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,r.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,o.Z)(t,"&.".concat(C.selected),(0,o.Z)({backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(C.focusVisible),{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,o.Z)(t,"&.".concat(C.selected,":hover"),{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,o.Z)(t,"&.".concat(C.focusVisible),{backgroundColor:n.palette.action.focus}),(0,o.Z)(t,"&.".concat(C.disabled),{opacity:n.palette.action.disabledOpacity}),(0,o.Z)(t,"& + .".concat(h.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,o.Z)(t,"& + .".concat(h.Z.inset),{marginLeft:52}),(0,o.Z)(t,"& .".concat(x.Z.root),{marginTop:0,marginBottom:0}),(0,o.Z)(t,"& .".concat(x.Z.inset),{paddingLeft:36}),(0,o.Z)(t,"& .".concat(Z.Z.root),{minWidth:36}),t),!a.dense&&(0,o.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),a.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,o.Z)({},"& .".concat(Z.Z.root," svg"),{fontSize:"1.25rem"})))})),M=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),o=n.autoFocus,c=void 0!==o&&o,d=n.component,m=void 0===d?"li":d,h=n.dense,Z=void 0!==h&&h,x=n.divider,v=void 0!==x&&x,C=n.disableGutters,M=void 0!==C&&C,S=n.focusVisibleClassName,w=n.role,N=void 0===w?"menuitem":w,I=n.tabIndex,E=(0,a.Z)(n,y),B=i.useContext(p.Z),D={dense:Z||B.dense||!1,disableGutters:M},O=i.useRef(null);(0,f.Z)((function(){c&&O.current&&O.current.focus()}),[c]);var L,F=(0,r.Z)({},n,{dense:D.dense,divider:v,disableGutters:M}),P=function(e){var t=e.disabled,n=e.dense,o=e.divider,a=e.disableGutters,i=e.selected,s=e.classes,c={root:["root",n&&"dense",t&&"disabled",!a&&"gutters",o&&"divider",i&&"selected"]},d=(0,l.Z)(c,b,s);return(0,r.Z)({},s,d)}(n),R=(0,g.Z)(O,t);return n.disabled||(L=void 0!==I?I:-1),(0,j.jsx)(p.Z.Provider,{value:D,children:(0,j.jsx)(k,(0,r.Z)({ref:R,role:N,tabIndex:L,component:m,focusVisibleClassName:(0,s.Z)(P.focusVisible,S)},E,{ownerState:F,classes:P}))})}))}}]);
//# sourceMappingURL=6145.1b8916cd.chunk.js.map