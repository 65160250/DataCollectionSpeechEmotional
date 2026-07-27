/* ===== ข้อมูลประโยค ===== */
var EM = ['angry','happy','sad','neutral'];
var ETH = {angry:'โกรธ',happy:'ดีใจ',sad:'เศร้า',neutral:'ปกติ'};
var EHINT = {
  angry:'นึกถึงสถานการณ์ที่โกรธจริง พูดด้วยน้ำเสียงเข้ม รวดเร็ว',
  happy:'นึกถึงข่าวดีที่ดีใจมาก พูดด้วยน้ำเสียงสดใส กระตือรือร้น',
  sad:'นึกถึงช่วงเวลาเศร้า พูดด้วยน้ำเสียงช้า เบา ต่ำ',
  neutral:'พูดตามปกติ เหมือนบอกเล่าข้อมูลธรรมดา'
};
var PA = [
  {id:'A01',en:"I'm going to the market this afternoon.",th:'บ่ายนี้ฉันจะไปตลาด'},
  {id:'A02',en:"The meeting is scheduled for three o'clock.",th:'การประชุมนัดไว้ตอนบ่ายสามโมง'},
  {id:'A03',en:'She just finished reading the report.',th:'เธอเพิ่งอ่านรายงานจบ'},
  {id:'A04',en:'There are twenty people in the room.',th:'มีคนอยู่ในห้องยี่สิบคน'},
  {id:'A05',en:"We're leaving for the airport soon.",th:'เรากำลังจะออกไปสนามบินแล้ว'},
  {id:'A06',en:'He said he would call me back later.',th:'เขาบอกว่าจะโทรกลับมาหาฉันทีหลัง'},
  {id:'A07',en:'The train arrives at half past six.',th:'รถไฟมาถึงตอนหกโมงครึ่ง'},
  {id:'A08',en:"I'll send you the file tomorrow morning.",th:'พรุ่งนี้เช้าฉันจะส่งไฟล์ให้'}
];
var PB = {
  angry:[
    {id:'B01',en:'You broke your promise again!',th:'คุณผิดสัญญาอีกแล้วนะ!'},
    {id:'B02',en:'Stop interrupting me every single time.',th:'เลิกพูดแทรกฉันทุกครั้งได้แล้ว'},
    {id:'B03',en:'This is completely unacceptable.',th:'เรื่องนี้มันรับไม่ได้เลยจริง ๆ'},
    {id:'B04',en:'You never listen to a word I say.',th:'คุณไม่เคยฟังที่ฉันพูดสักคำ'}
  ],
  happy:[
    {id:'B01',en:"I passed the exam! I'm so happy!",th:'ฉันสอบผ่าน! ดีใจมากเลย!'},
    {id:'B02',en:"We're going on a trip next month!",th:'เดือนหน้าเราจะได้ไปเที่ยวกัน!'},
    {id:'B03',en:'Congratulations, you really did a great job.',th:'ยินดีด้วยนะ คุณทำได้ดีมากจริง ๆ'},
    {id:'B04',en:"This is the best news I've heard all week!",th:'นี่เป็นข่าวดีที่สุดในรอบสัปดาห์เลย!'}
  ],
  sad:[
    {id:'B01',en:"I didn't get the job. I feel terrible.",th:'ฉันไม่ได้งาน รู้สึกแย่มากเลย'},
    {id:'B02',en:'I really miss my family.',th:'ฉันคิดถึงครอบครัวมากจริง ๆ'},
    {id:'B03',en:"I don't want to talk about it right now.",th:'ตอนนี้ฉันยังไม่อยากพูดเรื่องนี้'},
    {id:'B04',en:"I tried my best, but it still wasn't enough.",th:'ฉันพยายามเต็มที่แล้ว แต่มันก็ยังไม่พอ'}
  ],
  neutral:[
    {id:'B01',en:'The class starts at nine. Please bring your book.',th:'คาบเรียนเริ่มเก้าโมง อย่าลืมเอาหนังสือมาด้วย'},
    {id:'B02',en:'I usually take the bus to work.',th:'ปกติฉันนั่งรถเมล์ไปทำงาน'},
    {id:'B03',en:"Let's continue from page ten.",th:'เรามาต่อกันที่หน้าสิบนะ'},
    {id:'B04',en:'The report is due on Friday afternoon.',th:'รายงานต้องส่งวันศุกร์ตอนบ่าย'}
  ]
};
var PC = {
  angry:[
    {id:'C01',en:"I waited for the bus for almost an hour in the hot sun, and when it finally came, it just drove past without stopping. Now I'm going to be late for work again, and there's nothing I can do about it.",th:'ฉันยืนรอรถเมล์เกือบชั่วโมงกลางแดดร้อน ๆ พอมันมาถึงจริง ๆ มันดันวิ่งผ่านไปเฉย ๆ ไม่จอด'},
    {id:'C02',en:"I told my roommate so many times not to eat my food, but he did it again today. This is the third time this week. I'm really starting to lose my patience with him.",th:'ฉันบอกรูมเมทตั้งหลายรอบว่าอย่ากินของของฉัน แต่วันนี้เขาก็ทำอีกแล้ว'}
  ],
  happy:[
    {id:'C01',en:"Guess what happened today? I finally got accepted into the program I applied for! I worked so hard for this for months, and I honestly still can't believe it's real.",th:'รู้ไหมวันนี้เกิดอะไรขึ้น? ในที่สุดฉันก็ได้รับตอบรับเข้าโครงการที่สมัครไว้!'},
    {id:'C02',en:"My best friend is finally coming back to Thailand next week. We haven't seen each other in almost two years, and we have so much to catch up on.",th:'เพื่อนสนิทของฉันจะกลับมาเมืองไทยสัปดาห์หน้าแล้ว เราไม่ได้เจอกันเกือบสองปี'}
  ],
  sad:[
    {id:'C01',en:"I came back to grandma's house today. Everything is still exactly where she left it - her chair, her books, even her tea cup. I keep waiting to hear her voice, but the house is just so quiet now.",th:'วันนี้ฉันกลับมาที่บ้านคุณยาย ทุกอย่างยังอยู่ที่เดิมเป๊ะ'},
    {id:'C02',en:"I studied so hard for the final exam, staying up late almost every night, but in the end I still failed. I don't even know what I did wrong anymore.",th:'ฉันตั้งใจอ่านหนังสือสอบไฟนอลมาก อดหลับอดนอนแทบทุกคืน แต่สุดท้ายก็ยังสอบตกอยู่ดี'}
  ],
  neutral:[
    {id:'C01',en:'On weekdays I usually wake up at around seven. I take a shower, have breakfast, and check my email before I leave the house at about eight to catch the bus to work.',th:'วันธรรมดาฉันมักจะตื่นประมาณเจ็ดโมง อาบน้ำ กินข้าวเช้า แล้วเช็กอีเมลก่อนออกจากบ้าน'},
    {id:'C02',en:"The library is on the second floor of the main building. It opens at nine in the morning and closes at eight in the evening on weekdays. You'll need your student card to borrow any books.",th:'ห้องสมุดอยู่ชั้นสองของตึกหลัก เปิดเก้าโมงเช้าและปิดสองทุ่มในวันธรรมดา'}
  ]
};

/* ===== สถานะแอป ===== */
var spId='sp01',queue=[],qi=0,recs=[],rs='idle';
var speakerMeta={alias:'',gender:'',age_range:'',english_level:'',consent:false,participant_id_source:'local_auto'};
var mr=null,as=null,ac=null,an=null,afi=null,rst=0,rti=null;
var cBlob=null,cRet=0,pa=null,isP=false,mt='',isNoi=false;
var mainQRef=[];
var API_BASE_URL=getApiBaseUrl();
var apiSessionId='',apiEnabled=true,apiUploadsOk=0,apiUploadsFail=0,apiFinishDone=false,apiFinishError='';

/* ===== Utilities ===== */
function $(s){return document.querySelector(s)}
function $$(s){return document.querySelectorAll(s)}
function toast(m){var d=document.createElement('div');d.className='tt';d.textContent=m;$('#tc').appendChild(d);setTimeout(function(){d.remove()},2900)}
function ft(s){return Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0')}
function getMT(){var t=['audio/webm;codecs=opus','audio/webm','audio/mp4','audio/ogg;codecs=opus'];for(var i=0;i<t.length;i++)if(MediaRecorder.isTypeSupported(t[i]))return t[i];return''}
function getExt(){if(mt.indexOf('mp4')!==-1)return'mp4';if(mt.indexOf('ogg')!==-1)return'ogg';return'webm'}
function show(id){var ss=$$('.s');for(var i=0;i<ss.length;i++)ss[i].classList.remove('on');var t=document.getElementById(id);if(!t)return;t.classList.add('on');t.style.animation='none';t.offsetHeight;t.style.animation=''}
function csv(v){v=v==null?'':String(v);return /[",\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v}
function getEmotionColor(em){var cs=getComputedStyle(document.documentElement),map={angry:'--an',happy:'--ha',sad:'--sa',neutral:'--nu'};return cs.getPropertyValue(map[em]||'--ac').trim()||'#72c6b2'}
function getApiBaseUrl(){
  var saved=localStorage.getItem('SER_API_BASE_URL');
  var isHosted=location.protocol==='http:'||location.protocol==='https:';
  var isLocalHost=location.hostname==='localhost'||location.hostname==='127.0.0.1';
  if(saved){
    var savedIsLocal=saved.indexOf('localhost')!==-1||saved.indexOf('127.0.0.1')!==-1;
    if(!(isHosted&&!isLocalHost&&savedIsLocal))return saved.replace(/\/$/,'');
  }
  return isHosted?location.origin:'http://localhost:3000';
}

/* ===== คำนวณ Speaker ID ===== */
function calcSpId(){var n=parseInt(localStorage.getItem('ser_sp_count')||'0')+1;localStorage.setItem('ser_sp_count',String(n));return'sp'+String(n).padStart(2,'0')}

/* ===== Backend API ===== */
function apiJson(path,body){
  return fetch(API_BASE_URL+path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(function(res){return res.json().then(function(data){if(!res.ok)throw new Error(data.error||'API error');return data})})
}
function startBackendSession(){
  return apiJson('/api/sessions/start',{
    alias:speakerMeta.alias,
    gender:speakerMeta.gender,
    age_range:speakerMeta.age_range,
    english_level:speakerMeta.english_level,
    consent_research:speakerMeta.consent,
    consent_commercial:speakerMeta.consent,
    dataset_role:'eval_only'
  }).then(function(data){
    spId=data.participant_id;
    apiSessionId=data.session_id;
    speakerMeta.participant_id_source='server_generated';
    return data;
  })
}
function uploadRecording(rec){
  if(!apiEnabled||!apiSessionId)return Promise.resolve(null);
  var fd=new FormData();
  fd.append('audio',rec.blob,rec.filename);
  fd.append('metadata',JSON.stringify({
    session_id:apiSessionId,
    participant_id:spId,
    emotion:rec.emotion,
    part:rec.part,
    sentence_id:rec.sentence_id,
    sentence_text:rec.sentence_text,
    condition:rec.condition,
    take:rec.take,
    duration_sec:rec.duration,
    retakes:rec.retakes,
    recorded_at_utc:rec.timestamp
  }));
  return fetch(API_BASE_URL+'/api/recordings/upload',{method:'POST',body:fd}).then(function(res){return res.json().then(function(data){if(!res.ok)throw new Error(data.error||'Upload failed');rec.uploaded=true;rec.recording_id=data.recording_id;rec.storage_path=data.storage_path;apiUploadsOk++;return data})}).catch(function(err){rec.uploaded=false;rec.upload_error=err.message;apiUploadsFail++;toast('อัปโหลดคลิปนี้ไม่สำเร็จ เก็บไว้ใน ZIP สำรอง');return null})
}
function finishBackendSession(){
  if(!apiEnabled||!apiSessionId||apiFinishDone)return Promise.resolve(null);
  return apiJson('/api/sessions/finish',{session_id:apiSessionId,participant_id:spId,client_recording_count:recs.length}).then(function(data){apiFinishDone=true;apiFinishError='';return data}).catch(function(err){apiFinishError=err.message;toast('ปิด session ไม่สำเร็จ ใช้ ZIP สำรองได้');return null})
}

/* ===== ข้อมูลผู้พูด ===== */
function collectSpeakerMeta(){
  var aliasEl=$('#u-alias'),genderEl=$('#u-gender'),ageEl=$('#u-age'),engEl=$('#u-english'),consentEl=$('#u-consent');
  return {
    alias:aliasEl?aliasEl.value.trim():'',
    gender:genderEl?genderEl.value:'',
    age_range:ageEl?ageEl.value:'',
    english_level:engEl?engEl.value:'',
    consent:consentEl?consentEl.checked:false,
    participant_id_source:'local_auto'
  };
}
function validateSetup(){
  speakerMeta=collectSpeakerMeta();
  if(!speakerMeta.gender){toast('กรุณาเลือกเพศ');return false}
  if(!speakerMeta.age_range){toast('กรุณาเลือกช่วงอายุ');return false}
  if(!speakerMeta.english_level){toast('กรุณาเลือกระดับภาษาอังกฤษ');return false}
  if(!speakerMeta.consent){toast('กรุณาติ๊กยินยอมก่อนเริ่มอัดเสียง');return false}
  return true;
}
function goInfo(){show('s-info')}
function goInst(){if(validateSetup())show('s-inst')}

/* ===== สร้างคิว ===== */
function buildQ(){
  var q=[],i,j;
  for(i=0;i<EM.length;i++)for(j=0;j<PA.length;j++)q.push({part:'A',emotion:EM[i],sentence:PA[j],cond:'quiet'});
  for(i=0;i<EM.length;i++)for(j=0;j<PB[EM[i]].length;j++)q.push({part:'B',emotion:EM[i],sentence:PB[EM[i]][j],cond:'quiet'});
  for(i=0;i<EM.length;i++)for(j=0;j<PC[EM[i]].length;j++)q.push({part:'C',emotion:EM[i],sentence:PC[EM[i]][j],cond:'quiet'});
  return q;
}

/* ===== เริ่มต้น ===== */
function goRec(){
  mt=getMT();
  toast('กำลังเริ่ม session...');
  startBackendSession().then(function(){
  if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
      as=stream;ac=new(window.AudioContext||window.webkitAudioContext)();an=ac.createAnalyser();an.fftSize=2048;ac.createMediaStreamSource(stream).connect(an);startSession();
    }).catch(function(){as=null;startSession()});
  }else{as=null;startSession()}
  }).catch(function(err){toast('เชื่อม backend ไม่สำเร็จ: '+err.message)})
}
function startSession(){queue=buildQ();mainQRef=queue.slice();qi=0;recs=[];isNoi=false;apiUploadsOk=0;apiUploadsFail=0;apiFinishDone=false;apiFinishError='';show('s2');render()}

/* ===== แสดงผล ===== */
function renderProg(){
  if(isNoi){$('#p-seg').innerHTML='';$('#p-lbl').innerHTML='';return}
  var a=0,b=0,c=0,dA=0,dB=0,dC=0,i,q;
  for(i=0;i<queue.length;i++){q=queue[i];if(q.cond==='noisy')continue;if(q.part==='A')a++;else if(q.part==='B')b++;else c++;if(i<qi){if(q.part==='A')dA++;else if(q.part==='B')dB++;else dC++}}
  var segs=[{l:'Part A ('+a+')',c:'pa',d:dA,t:a},{l:'Part B ('+b+')',c:'pb',d:dB,t:b},{l:'Part C ('+c+')',c:'pc',d:dC,t:c}];
  var sh='',lh='',s,p,st;
  for(i=0;i<segs.length;i++){s=segs[i];p=s.t>0?s.d/s.t:0;sh+='<div class="ps '+s.c+'"><div class="pf" style="transform:scaleX('+p+')"></div></div>';st=s.d<s.t?' style="color:var(--f2)"':'';lh+='<div class="plbl"'+st+'>'+s.l+'</div>'}
  $('#p-seg').innerHTML=sh;$('#p-lbl').innerHTML=lh;
}
function render(){
  if(qi>=queue.length){
    if(isNoi){goSum();return}
    show('s3');renderNoi();return
  }
  var it=queue[qi],em=it.emotion,pt=it.part,s=it.sentence;
  renderProg();
  if(isNoi){$('#r-st').textContent='Noisy round '+(qi+1)+' / '+queue.length;$('#r-nt').style.display=''}
  else{$('#r-st').textContent='Part '+pt+' \u00B7 '+ETH[em]+' \u00B7 '+(qi+1)+'/'+queue.length;$('#r-nt').style.display='none'}
  var card=$('#s-card');card.className='sc '+em;
  $('#s-tag').textContent=it.cond==='noisy'?'NOISY':pt+' \u00B7 '+s.id;
  $('#s-eb').innerHTML='<span class="eb '+em+'"><span class="dot '+em+'"></span>'+ETH[em]+'</span>';
  $('#s-en').textContent=s.en;$('#s-th').textContent=s.th;
  $('#w-ph').style='';var cv=$('#w-cv'),cx=cv.getContext('2d');cx.clearRect(0,0,cv.width,cv.height);
  $('#r-tm').style.visibility='hidden';$('#r-tm').className='rtm';setS('idle');cBlob=null;cRet=0;
  var tip='';
  if(pt==='A')tip='\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E04\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E1A\u0E2D\u0E01\u0E2D\u0E32\u0E23\u0E21\u0E13\u0E4C \u2014 \u0E43\u0E0A\u0E49\u0E19\u0E49\u0E33\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2A\u0E37\u0E48\u0E2D "'+ETH[em]+'" \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14';
  else if(pt==='B')tip=EHINT[em];
  else tip='\u0E1E\u0E39\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 \u00B7 '+EHINT[em];
  if(it.cond==='noisy')tip='คลิปเสียงรบกวน '+(qi+1)+' จาก '+queue.length+' — '+tip;
  $('#r-tt').textContent=tip;
  if(qi+1<queue.length){
    $('#n-up').style='';
    var nx=queue[qi+1].sentence.en;
    $('#n-ut').textContent=(isNoi?'Noisy '+(qi+2)+'/'+queue.length+': ':'"')+nx.substring(0,45)+(nx.length>45?'...':'')+(isNoi?'':'"')
  }else{
    $('#n-up').style='';
    $('#n-ut').textContent=isNoi?'คลิปสุดท้ายแล้ว หลังจากนี้จะไปหน้าสรุป':''
    if(!isNoi)$('#n-up').style.display='none'
  }
}
function setS(s){rs=s;$('#c-idle').style.display=s==='idle'?'':'none';$('#c-rec').style.display=s==='recording'?'':'none';$('#c-done').style.display=s==='recorded'?'':'none'}

/* ===== อัดเสียง ===== */
function startR(){
  stopPl();
  if(!as){setS('recording');$('#w-ph').style='display:none';$('#r-tm').style.visibility='visible';rst=Date.now();rti=setInterval(function(){var el=(Date.now()-rst)/1000;$('#r-tm').textContent=el.toFixed(1)+'s'},100);setTimeout(function(){clearInterval(rti);cBlob=new Blob(['dummy'],{type:'audio/webm'});onDone()},800);return}
  if(ac.state==='suspended')ac.resume();cBlob=null;var chunks=[];
  try{mr=new MediaRecorder(as,{mimeType:mt})}catch(e){mr=new MediaRecorder(as)}
  mr.ondataavailable=function(e){if(e.data.size>0)chunks.push(e.data)};mr.onstop=function(){cBlob=new Blob(chunks,{type:mt});onDone()};
  mr.start(100);rst=Date.now();setS('recording');$('#w-ph').style='display:none';$('#r-tm').style.visibility='visible';drawWF();rti=setInterval(updTm,100);
}
function stopR(){if(mr&&mr.state!=='inactive')mr.stop();stopWF();clearInterval(rti)}
function onDone(){var dur=(Date.now()-rst)/1000;setS('recorded');$('#p-tm').textContent=ft(0)+' / '+ft(dur);drawSWF()}
function updTm(){var el=(Date.now()-rst)/1000;$('#r-tm').textContent=el.toFixed(1)+'s';var it=queue[qi];if(!it)return;var w,o;if(it.part==='A'){w=4;o=6}else if(it.part==='B'){w=7;o=10}else{w=15;o=20}$('#r-tm').className='rtm'+(el>o?' over':el>w?' warn':'')}

/* ===== Waveform ===== */
function drawWF(){if(!an)return;var cv=$('#w-cv'),r=cv.parentElement.getBoundingClientRect(),dpr=window.devicePixelRatio||1;cv.width=Math.max(1,r.width*dpr);cv.height=Math.max(1,r.height*dpr);var cx=cv.getContext('2d');cx.setTransform(dpr,0,0,dpr,0,0);var w=r.width,h=r.height,it=queue[qi],ec=getEmotionColor(it.emotion),bl=an.fftSize,da=new Uint8Array(bl);(function draw(){an.getByteTimeDomainData(da);cx.clearRect(0,0,w,h);cx.fillStyle='rgba(255,255,255,.72)';cx.fillRect(0,0,w,h);cx.strokeStyle='rgba(100,116,139,.18)';cx.lineWidth=1;cx.beginPath();cx.moveTo(0,h/2);cx.lineTo(w,h/2);cx.stroke();cx.lineWidth=2.4;cx.strokeStyle=ec;cx.shadowColor=ec;cx.shadowBlur=8;cx.beginPath();var step=Math.max(1,Math.floor(bl/w)),x=0;for(var i=0;i<bl;i+=step){var v=(da[i]-128)/128;var y=h/2+v*h*.42;if(x===0)cx.moveTo(x,y);else cx.lineTo(x,y);x+=1}cx.stroke();cx.shadowBlur=0;afi=requestAnimationFrame(draw)})()}
function stopWF(){if(afi){cancelAnimationFrame(afi);afi=null}}
function drawSWF(){var cv=$('#w-cv'),r=cv.parentElement.getBoundingClientRect(),dpr=window.devicePixelRatio||1;cv.width=Math.max(1,r.width*dpr);cv.height=Math.max(1,r.height*dpr);var cx=cv.getContext('2d');cx.setTransform(dpr,0,0,dpr,0,0);var w=r.width,h=r.height,it=queue[qi],ec=getEmotionColor(it.emotion);cx.clearRect(0,0,w,h);cx.fillStyle='rgba(255,255,255,.72)';cx.fillRect(0,0,w,h);cx.strokeStyle=ec;cx.lineWidth=2;cx.globalAlpha=0.45;cx.beginPath();cx.moveTo(0,h/2);var sd=it.sentence.id.charCodeAt(1)*137;for(var x=0;x<w;x++){cx.lineTo(x,h/2+Math.sin(x/w*20+sd)*9*Math.sin(x/w*Math.PI))}cx.stroke();cx.globalAlpha=1}

/* ===== Playback ===== */
function togPlay(){if(isP)stopPl();else startPl()}
function startPl(){if(!cBlob)return;try{var u=URL.createObjectURL(cBlob);pa=new Audio(u);isP=true;$('#btn-play').innerHTML='<i class="fas fa-pause"></i>';pa.onended=stopPl;pa.ontimeupdate=function(){$('#p-tm').textContent=ft(pa.currentTime)+' / '+ft((Date.now()-rst)/1000)};pa.play().catch(function(){stopPl()})}catch(e){stopPl()}}
function stopPl(){if(pa){pa.pause();pa.currentTime=0;pa=null}isP=false;$('#btn-play').innerHTML='<i class="fas fa-play"></i>'}

/* ===== Re-record & Accept ===== */
function reRec(){stopPl();cRet++;startR()}
function acceptR(){
  if(!cBlob)return;stopPl();var it=queue[qi],ext=getExt(),fn=spId+'_'+it.emotion+'_'+it.sentence.id+'_1'+(it.cond==='noisy'?'_noisy':'')+'.'+ext;
  var rec={filename:fn,blob:cBlob,speaker_id:spId,emotion:it.emotion,part:it.part,sentence_id:it.sentence.id,sentence_text:it.sentence.en,condition:it.cond,take:1,retakes:cRet,duration:(Date.now()-rst)/1000,timestamp:new Date().toISOString(),uploaded:false};
  recs.push(rec);$('#btn-ok').disabled=true;$('#btn-ok').innerHTML='<i class="fas fa-spinner fa-spin"></i> กำลังส่ง';
  uploadRecording(rec).then(function(){
    $('#btn-ok').disabled=false;$('#btn-ok').innerHTML='ถัดไป <i class="fas fa-arrow-right"></i>';
    if(!isNoi&&qi+1<queue.length){var ce=it.emotion,ne=queue[qi+1].emotion,cp=it.part,np=queue[qi+1].part;if((cp===np&&ce!==ne)||cp!==np){showEmo(ne,function(){qi++;render()});return}}
    qi++;render();
  })
}

/* ===== Emotion Transition ===== */
function showEmo(em,cb){var ov=$('#eov'),b=$('#ov-b'),h=$('#ov-h');b.className='eb '+em;b.innerHTML='<span class="dot '+em+'"></span>'+ETH[em];h.textContent=EHINT[em];ov.classList.add('on');setTimeout(function(){ov.classList.remove('on');if(cb)cb()},2000)}

/* ===== Noisy Select ===== */
function renderNoi(){
  var sugs=[],idxs=[],picks=[
    mainQRef.findIndex(function(q){return q.part==='A'&&q.emotion==='angry'}),
    mainQRef.findIndex(function(q){return q.part==='B'&&q.emotion==='happy'}),
    mainQRef.findIndex(function(q){return q.part==='C'&&q.emotion==='sad'}),
    mainQRef.findIndex(function(q){return q.part==='A'&&q.emotion==='neutral'}),
    mainQRef.findIndex(function(q){return q.part==='B'&&q.emotion==='angry'})
  ];
  var i;for(i=0;i<picks.length;i++){if(picks[i]>=0&&idxs.indexOf(picks[i])===-1){idxs.push(picks[i]);sugs.push(mainQRef[picks[i]])}}
  var safe=0;while(sugs.length<5&&safe<50){var ri=Math.floor(Math.random()*mainQRef.length);if(idxs.indexOf(ri)===-1){idxs.push(ri);sugs.push(mainQRef[ri])}safe++}
  var ls=$('#n-ls');ls.innerHTML='';
  for(i=0;i<sugs.length;i++){(function(idx){var s=sugs[idx],d=document.createElement('div');d.className='nci sel';d.dataset.qi=idxs[idx];d.innerHTML='<input type="checkbox" checked><div class="nci-t">"'+s.sentence.en.substring(0,50)+(s.sentence.en.length>50?'...':'')+'"</div><div class="nci-m"><span class="eb '+s.emotion+'" style="font-size:0.64rem;padding:2px 7px">'+s.emotion+'</span></div>';d.addEventListener('click',function(e){if(e.target.tagName==='INPUT')return;var cb=d.querySelector('input');cb.checked=!cb.checked;d.classList.toggle('sel',cb.checked);updNC()});d.querySelector('input').addEventListener('change',function(){d.classList.toggle('sel',d.querySelector('input').checked);updNC()});ls.appendChild(d)})(i)}
  updNC();
}
function updNC(){var c=document.querySelectorAll('.nci input:checked').length;$('#n-ct').textContent='เลือกแล้ว: '+c+' / 5 คลิป';$('#btn-noi').textContent=c>0?'เริ่มอัด '+c+' คลิปเสียงรบกวน':'เริ่มอัดเสียงรบกวน';$('#btn-noi').disabled=c===0}
function startNoi(){
  var si=[],items=document.querySelectorAll('.nci input:checked'),i;
  for(i=0;i<items.length;i++)si.push(parseInt(items[i].closest('.nci').dataset.qi));
  if(!si.length){toast('เลือกอย่างน้อย 1 ประโยค');return}
  queue=[];for(i=0;i<si.length;i++){var orig=mainQRef[si[i]];queue.push({part:orig.part,emotion:orig.emotion,sentence:orig.sentence,cond:'noisy'})}
  qi=0;isNoi=true;show('s2');render();
}

/* ===== Summary ===== */
function goSum(){show('s4');renderSum();finishBackendSession().then(renderSum)}
function renderSum(){
  var tot=recs.length,be={},bp={},nc=0,td=0,i,r,ext=getExt();
  for(i=0;i<EM.length;i++)be[EM[i]]=0;bp['A']=0;bp['B']=0;bp['C']=0;
  for(i=0;i<recs.length;i++){r=recs[i];be[r.emotion]++;bp[r.part]++;if(r.condition==='noisy')nc++;td+=r.duration}
  $('#st-g').innerHTML='<div class="stc"><div class="stn" style="color:var(--ac)">'+tot+'</div><div class="stl">Total</div></div><div class="stc"><div class="stn" style="color:var(--ac)">'+apiUploadsOk+'</div><div class="stl">Uploaded</div></div><div class="stc"><div class="stn" style="color:var(--an)">'+apiUploadsFail+'</div><div class="stl">Failed</div></div><div class="stc"><div class="stn" style="color:var(--f2)">'+(apiFinishDone?'Done':'Open')+'</div><div class="stl">Session</div></div><div class="stc"><div class="stn" style="color:var(--an)">'+be.angry+'</div><div class="stl">Angry</div></div><div class="stc"><div class="stn" style="color:var(--ha)">'+be.happy+'</div><div class="stl">Happy</div></div><div class="stc"><div class="stn" style="color:var(--sa)">'+be.sad+'</div><div class="stl">Sad</div></div><div class="stc"><div class="stn" style="color:var(--nu)">'+be.neutral+'</div><div class="stl">Neutral</div></div><div class="stc"><div class="stn" style="color:var(--f2)">'+nc+'</div><div class="stl">Noisy</div></div><div class="stc"><div class="stn" style="color:var(--f2)">'+ft(td)+'</div><div class="stl">Duration</div></div><div class="stc"><div class="stn" style="color:var(--f2)">'+ext.toUpperCase()+'</div><div class="stl">Format</div></div>';
  var ls=$('#rec-ls');ls.innerHTML='';
  for(i=0;i<recs.length;i++){(function(idx){r=recs[idx];var up=r.uploaded?'uploaded':(r.upload_error?'failed':'pending');var d=document.createElement('div');d.className='rli';d.innerHTML='<div class="dot '+r.emotion+'"></div><div class="rf">'+r.filename+'</div><span class="rd">'+up+' · '+r.duration.toFixed(1)+'s</span><button data-i="'+idx+'"><i class="fas fa-xmark"></i></button>';d.querySelector('button').addEventListener('click',function(e){e.stopPropagation();recs.splice(idx,1);renderSum()});ls.appendChild(d)})(i)}
}

/* ===== Export ZIP ===== */
function doExport(){
  if(!recs.length){toast('ไม่มีไฟล์ที่จะส่งออก');return}
  var btn=$('#btn-exp');btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> กำลังสร้าง ZIP...';
  var zip=new JSZip(),folder=zip.folder(spId),i,r;
  for(i=0;i<recs.length;i++)folder.file(recs[i].filename,recs[i].blob);
  var today=new Date().toISOString().split('T')[0];
  var spCsv='speaker_id,participant_id_source,alias,gender,age_range,english_level,consent_research,consent_commercial,date\n';
  spCsv+=[spId,speakerMeta.participant_id_source,speakerMeta.alias,speakerMeta.gender,speakerMeta.age_range,speakerMeta.english_level,speakerMeta.consent?'yes':'no',speakerMeta.consent?'yes':'no',today].map(csv).join(',')+'\n';
  folder.file('speakers.csv',spCsv);
  var lb='filename,speaker_id,participant_id_source,emotion,part,sentence_id,sentence_text,condition,take,duration_sec,retakes,recorded_at_utc,notes\n';
  for(i=0;i<recs.length;i++){r=recs[i];var notes=r.retakes>0?r.retakes+' retakes':'';lb+=[r.filename,r.speaker_id,speakerMeta.participant_id_source,r.emotion,r.part,r.sentence_id,r.sentence_text,r.condition,r.take,r.duration.toFixed(2),r.retakes,r.timestamp,notes].map(csv).join(',')+'\n'}
  folder.file('labels.csv',lb);
  folder.file('README.txt','SER Data Collection\n\nParticipant ID is generated by the system. Do not rename audio files manually.\nUse speakers.csv and labels.csv as the source of metadata.\n');
  zip.generateAsync({type:'blob'}).then(function(content){var url=URL.createObjectURL(content),a=document.createElement('a');a.href=url;a.download=spId+'_ser_dataset.zip';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);toast('ดาวน์โหลดสำเร็จ');btn.disabled=false;btn.innerHTML='<i class="fas fa-download"></i> ดาวน์โหลดทั้งหมด (ZIP)'}).catch(function(err){console.error(err);toast('เกิดข้อผิดพลาด');btn.disabled=false;btn.innerHTML='<i class="fas fa-download"></i> ดาวน์โหลดทั้งหมด (ZIP)'});
}

/* ===== ผูก Event ทั้งหมด ===== */
document.getElementById('btn-start').addEventListener('click',goInfo);
document.getElementById('btn-info-back').addEventListener('click',function(){show('s1')});
document.getElementById('btn-info-next').addEventListener('click',goInst);
document.getElementById('btn-inst-back').addEventListener('click',function(){show('s-info')});
document.getElementById('btn-record-start').addEventListener('click',goRec);
document.getElementById('btn-rec').addEventListener('click',startR);
document.getElementById('btn-stop').addEventListener('click',stopR);
document.getElementById('btn-play').addEventListener('click',togPlay);
document.getElementById('btn-re').addEventListener('click',reRec);
document.getElementById('btn-ok').addEventListener('click',acceptR);
document.getElementById('btn-skip').addEventListener('click',goSum);
document.getElementById('btn-noi').addEventListener('click',startNoi);
document.getElementById('btn-exp').addEventListener('click',doExport);
