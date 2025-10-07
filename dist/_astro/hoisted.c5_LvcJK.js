function d(r){const e=document.getElementById(r);e.innerHTML=`
      <div class="loading-spinner">
        <div class="spinner-circle"></div>
        <div class="loading-text">Analyzing with AI<span class="dots"></span></div>
      </div>
    `}function p(r){const e=[/(?:overall\s+)?score[:\s]*(\d{1,3})\s*(?:\/|out of)?\s*100/i,/(\d{1,3})\s*\/\s*100/i,/score[:\s]*(\d{1,3})(?!\d)/i,/rating[:\s]*(\d{1,3})\s*(?:\/|out of)?\s*100/i];for(const s of e){const t=r.match(s);if(t){const n=parseInt(t[1]);return Math.min(Math.max(n,0),100)}}return null}function v(r){const e=/(recommendations?|suggestions?|tips?|improvements?|actionable)[:\s]*([\s\S]*?)(?=\n\n|$)/i,s=r.match(e);return s?s[2].split(/\n/).map(n=>n.replace(/^[\d\.\-\*•]+\s*/,"").trim()).filter(n=>n.length>10&&!n.match(/^(#{1,6}|\*{2})/)).slice(0,8):null}function u(r,e){const s=document.getElementById(r);s.innerHTML="";const t=p(e),n=v(e);if(t!==null){const o=t>=85?"Excellent ✅":t>=70?"Good 👍":t>=50?"Fair 💡":"Needs Improvement ⚠️",i=t>=85?"#00ffc6":t>=70?"#4ade80":t>=50?"#fbbf24":"#f87171";s.innerHTML=`
        <div class="score-section">
          <div class="score-label" style="color: ${i}">${o}</div>
          <div class="progress-container">
            <div class="progress-bar" style="width: ${t}%; background: linear-gradient(90deg, ${i}, #0091ff);"></div>
          </div>
          <div class="score-value">${t}/100</div>
        </div>
      `}if(n&&n.length>0){const o=n.map(i=>`<div class="rec-item">✅ ${i.charAt(0).toUpperCase()+i.slice(1)}</div>`).join("");s.innerHTML+=`
        <div class="recommendations-section">
          <h4 class="rec-title">💡 Key Recommendations</h4>
          <div class="rec-list">${o}</div>
        </div>
      `}s.innerHTML+=`
      <div class="result-text">
        <details>
          <summary>📋 Full AI Analysis</summary>
          <pre>${e}</pre>
        </details>
      </div>
    `}function m(r,e,s){const t=document.getElementById(r);t.innerHTML=`
      <div class="error-box">
        <p>⚠️ ${e}</p>
        ${s?'<button class="retry-btn">🔄 Retry</button>':""}
      </div>
    `,s&&t.querySelector(".retry-btn").addEventListener("click",s)}async function f(r){r.preventDefault();const e=document.getElementById("resume-status");document.getElementById("resume-result");const s=document.getElementById("resume-upload").files[0],t=document.getElementById("job-description").value;try{if(!s)throw new Error("Please upload a resume file.");if(s.size>5e6)throw new Error("File is too large. Please upload a file smaller than 5MB.");e.textContent="⏳ Uploading & analyzing resume...",e.style.color="#00ffc6",d("resume-result");const n=await s.text();if(n.length<50)throw new Error("Resume file seems too short. Please check the file.");const o=15e3;let i=n;n.length>o&&(i=n.slice(0,o),console.warn(`Resume text truncated to ${o} characters.`),e.textContent="⏳ Resume is large, analyzing the first part...");const a=await fetch("/api/analyze-resume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({resumeText:i,jobDescription:t})}),l=await a.json();if(!a.ok)throw new Error(l.error||`Server error: ${a.status}`);if(!l.result)throw new Error("No analysis result received");let c=l.result;n.length>o&&(c=`⚠️ **Note: Your resume was too long for a quick analysis, so only the first part was reviewed.**

`+c),u("resume-result",c),e.textContent="✅ Analysis complete!",e.style.color="#4ade80"}catch(n){console.error("Resume analysis failed:",n),e.textContent="❌ Analysis failed",e.style.color="#f87171",m("resume-result",n.message,()=>f(r))}}async function y(r){r.preventDefault();const e=document.getElementById("linkedin-status");document.getElementById("linkedin-result");const s=document.getElementById("linkedin-text").value;try{if(!s||s.trim().length<50)throw new Error("Please paste your LinkedIn profile text (minimum 50 characters).");e.textContent="⏳ Analyzing LinkedIn profile...",e.style.color="#00ffc6",d("linkedin-result");const t=await fetch("/api/analyze-linkedin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({profileText:s})}),n=await t.json();if(!t.ok)throw new Error(n.error||`Server error: ${t.status}`);if(!n.result)throw new Error("No analysis result received");u("linkedin-result",n.result),e.textContent="✅ Analysis complete!",e.style.color="#4ade80"}catch(t){console.error("LinkedIn analysis failed:",t),e.textContent="❌ Analysis failed",e.style.color="#f87171",m("linkedin-result",t.message,()=>y(r))}}document.addEventListener("astro:page-load",h);document.addEventListener("DOMContentLoaded",h);function h(){const r=document.getElementById("resume-form"),e=document.getElementById("linkedin-form");r&&!r.dataset.bound&&(r.dataset.bound="true",r.addEventListener("submit",f)),e&&!e.dataset.bound&&(e.dataset.bound="true",e.addEventListener("submit",y))}
