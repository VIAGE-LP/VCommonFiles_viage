(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dayjs-locale-cs-js"],{2573:function(e,n,t){!function(n,s){e.exports=s(t("5a0c"))}(0,(function(e){"use strict";function n(e){return e>1&&e<5&&1!=~~(e/10)}function t(e,t,s,r){var _=e+" ";switch(s){case"s":return t||r?"pár sekund":"pár sekundami";case"m":return t?"minuta":r?"minutu":"minutou";case"mm":return t||r?_+(n(e)?"minuty":"minut"):_+"minutami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?_+(n(e)?"hodiny":"hodin"):_+"hodinami";case"d":return t||r?"den":"dnem";case"dd":return t||r?_+(n(e)?"dny":"dní"):_+"dny";case"M":return t||r?"měsíc":"měsícem";case"MM":return t||r?_+(n(e)?"měsíce":"měsíců"):_+"měsíci";case"y":return t||r?"rok":"rokem";case"yy":return t||r?_+(n(e)?"roky":"let"):_+"lety"}}e=e&&e.hasOwnProperty("default")?e.default:e;var s={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t}};return e.locale(s,null,!0),s}))}}]);