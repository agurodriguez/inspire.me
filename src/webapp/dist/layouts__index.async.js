(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{YjbW:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return E});var r=n("o0o1"),a=n.n(r),o=n("yXPU"),c=n.n(o),u=n("vDqi"),i=n.n(u),s={INSPIRE_ME:"INSPIRE_ME",INSPIRE_ME_SUCCESS:"INSPIRE_ME_SUCCESS",INSPIRE_ME_FAILURE:"INSPIRE_ME_FAILURE"};function E(e){return function(){var e=c()(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t({type:s.INSPIRE_ME}),e.prev=1,n=["software"],e.next=5,i.a.get(`http://ec2-54-209-252-217.compute-1.amazonaws.com:8091/v1/inspire-me?subjects=${n.join(",")}`);case 5:r=e.sent,t({type:s.INSPIRE_ME_SUCCESS,payload:r.data.result}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t({type:s.INSPIRE_ME_FAILURE,payload:e.t0});case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()}},pPYQ:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return E});var r=n("o0o1"),a=n.n(r),o=n("yXPU"),c=n.n(o),u=n("vDqi"),i=n.n(u),s={TORRE_BIO:"TORRE_BIO",TORRE_BIO_SUCCESS:"TORRE_BIO_SUCCESS",TORRE_BIO_FAILURE:"TORRE_BIO_FAILURE"};function E(e){return function(){var t=c()(a.a.mark(function t(n){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n({type:s.TORRE_BIO}),t.prev=1,t.next=4,i.a.get(`http://ec2-54-209-252-217.compute-1.amazonaws.com:8090/v1/bio?username=${e}`);case 4:r=t.sent,n({type:s.TORRE_BIO_SUCCESS,payload:r.data.result}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),n({type:s.TORRE_BIO_FAILURE,payload:t.t0});case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()}},tCqT:function(e,t,n){"use strict";n.r(t);n("B9cy");var r=n("Ol7k"),a=n("q1tI"),o=n.n(a),c=n("/MKj"),u=n("ANjH"),i=n("sINF"),s=n("9Gtd"),E=n("MVZn"),p=n.n(E),R=n("YjbW"),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R["a"].INSPIRE_ME:return p()({},e,{loading:!0});case R["a"].INSPIRE_ME_SUCCESS:return p()({},e,{loading:!1,error:!1,inspireMeRes:t.payload});case R["a"].INSPIRE_ME_FAILURE:return p()({},e,{loading:!1,error:t.payload,inspireMeRes:[]});default:return e}},d=n("pPYQ"),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d["a"].TORRE_BIO:return p()({},e,{loading:!0});case d["a"].TORRE_BIO_SUCCESS:return p()({},e,{loading:!1,error:!1,torreBio:t.payload});case d["a"].TORRE_BIO_FAILURE:return p()({},e,{loading:!1,error:t.payload,torreBio:void 0});default:return e}},_=Object(u["c"])({form:s["a"],inspirerReducer:I,torreReducer:l}),S=Object(u["d"])(_,Object(u["a"])(i["a"]));t["default"]=class extends o.a.Component{render(){return o.a.createElement(c["a"],{store:S},o.a.createElement(r["a"],null,o.a.createElement(r["a"].Header,null),o.a.createElement(r["a"].Content,null,this.props.children)))}}}}]);