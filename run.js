var {writeFileSync}=require('fs');
var axios=require('axios').default;
function r(_at) {
var ___o=_at?.optional?.length?_at.optional.map(_pi=>{
var sssssssss=_pi.split(';');return{
name:sssssssss[0],
type:sssssssss[1],
explan:sssssssss[2],
optional:true}}):null;
var req___i=_at?.required?.length?_at.required.map(_pi=>{
var sssssssss=_pi.split(';');
return{
name:sssssssss[0],
type:sssssssss[1],
explan:sssssssss[2],
optional:false
}}):null;
return ___o?.length&&req___i?.length?req___i.concat(___o):req___i||___o};
async function l__(t) {
var re=await axios.get('https://api.miduwu.ga/group?name='+t);
var _es=re.data;var f=[];for(const _ of _es) {
var P={
q:r(_.params.query),
p:r(_.params.path),
h:r(_.params.headers)};
var head="| Name | Type | Description | Optional |\n| ---- | ---- | ---- | ---- |\n" ;
var _pas_=`
${P.h?'#### Header Parameters:\n'+head+P.h.map(str=>'|'+str.name+'|'+str.type.replaceAll('|', '\\|')+'|'+str.explan.replaceAll('|', '\\|')+'|'+(str.optional?'True':'False')+'|\n').join('\n'):''}
${P.p?'#### Path Parameters:\n'+head+P.p.map(str=>'|'+str.name+'|'+str.type.replaceAll('|', '\\|')+'|'+str.explan.replaceAll('|', '\\|')+'|'+(str.optional?'True':'False')+'|\n').join('\n'):''}
${P.q?'#### Query Parameters:\n'+head+P.q.map(str => '|'+str.name+'|'+str.type.replaceAll('|', '\\|')+'|'+str.explan.replaceAll('|', '\\|')+'|'+(str.optional?'True':'False')+'|').join('\n'):''}`; 
var item=`## ![get](_media/get.svg ':size=38')
 ${_.path}\n${_.explan}\n\n- **Path:** \`https://api.miduwu.ga${_.path}\` [(Click)](https://api.miduwu.ga${_.path})\n- **Returns:** \`${_.returns}\`${(_pas_ ? '\n'+_pas_: '') + '\n\n'}`;f.push(item)};
return writeFileSync(`./docs/${t}.md`,
 f.join('\n\n'),
 { encoding: 'utf8' })};
l__('json');
l__('image')
