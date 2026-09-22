 "use client";

import { useEffect, useRef, useState } from "react";

const mediumUrl = "https://medium.com/@sonipriyasoni.92";
const linkedinUrl = "https://www.linkedin.com/in/priyanka-soni-857a92292";
const email = "sonipriyasoni.92@gmail.com";

function NetworkCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf, points = [];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      points = Array.from({length: Math.min(70, Math.floor(innerWidth / 18))}, () => ({
        x: Math.random()*innerWidth, y: Math.random()*innerHeight,
        vx: (Math.random()-.5)*.28, vy: (Math.random()-.5)*.28
      }));
    };
    const draw = () => {
      ctx.clearRect(0,0,innerWidth,innerHeight);
      for (const p of points) {
        p.x += p.vx; p.y += p.vy;
        if(p.x<0||p.x>innerWidth)p.vx*=-1;
        if(p.y<0||p.y>innerHeight)p.vy*=-1;
      }
      for(let i=0;i<points.length;i++){
        for(let j=i+1;j<points.length;j++){
          const a=points[i],b=points[j],d=Math.hypot(a.x-b.x,a.y-b.y);
          if(d<155){
            ctx.globalAlpha=(1-d/155)*.16;
            ctx.strokeStyle="#8b6cff";
            ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
          }
        }
      }
      for(const p of points){
        ctx.globalAlpha=.55;ctx.fillStyle="#43dcff";
        ctx.beginPath();ctx.arc(p.x,p.y,1.3,0,Math.PI*2);ctx.fill();
      }
      ctx.globalAlpha=1; raf=requestAnimationFrame(draw);
    };
    addEventListener("resize",resize); resize(); draw();
    return()=>{cancelAnimationFrame(raf);removeEventListener("resize",resize)};
  },[]);
  return <canvas ref={ref} className="network" />;
}

const roles = [
  {
    title:"Software Engineer", company:"Accenture · Best Buy, US", date:"Oct 2025 — Present",
    tags:["IBM Sterling OMS","Kafka","IBM MQ","AWS","Aurora"],
    bullets:[
      "Contributing to modernization of Best Buy’s e-commerce Order Management platform across OMS, scheduling, reservation and RMS workflows.",
      "Working on Release and Transfer/Purchase Order modernization toward Kafka-based event-driven architecture.",
      "Integrating IBM OMS, IBM MQ, OMS Processor, Kafka and AWS Release Manager for asynchronous downstream processing.",
      "Supporting real-time cross-system audits across 4+ platforms to identify order-processing inconsistencies."
    ]
  },
  {
    title:"Software Developer — Backend & Cloud Platforms", company:"BlueTeak Labs Pvt Ltd · Bengaluru", date:"Jul 2022 — Jun 2025",
    tags:["Spring Boot","Neo4j","Redis","Elasticsearch","Lambda","Drools"],
    bullets:[
      "Built and contributed to 10+ Spring Boot microservices and 400+ REST APIs across multiple business domains.",
      "Engineered workflows across SQL Server, Neo4j, Elasticsearch, Redis and Drools.",
      "Integrated Stripe payments and secured services with Spring Security, JWT and RBAC.",
      "Built serverless authentication and advertising automation using Python, Lambda, Cognito, Elasticsearch and Drools."
    ]
  },
  {
    title:"Software Engineer", company:"Procyon Technostructure · Abbott Lingo", date:"Jul 2025 — Sep 2025",
    tags:["Spring Boot","Kafka","Apache Pinot","ZooKeeper","Vertex APIs"],
    bullets:["Built a Spring Boot microservices POC for a wearable health-monitoring platform and worked with streaming-data workflows."]
  }
];

const stack = [
  ["☕","Backend","Java · Spring Boot · REST · Feign · Eureka · Kafka · IBM MQ"],
  ["☁","Cloud","AWS Lambda · SQS · S3 · Cognito · EventBridge · Step Functions · IAM"],
  ["◈","Data","Aurora · SQL Server · Neo4j · Redis · Elasticsearch · Apache Pinot"],
  ["⌘","Security","Spring Security · JWT · OAuth 2.0 · RBAC · scoped IAM"],
  ["⚡","Architecture","Microservices · Event-driven · CQRS · SAGA · Circuit Breaker"],
  ["◉","Engineering","Docker · Jenkins · distributed workflows · business-rule orchestration"]
];

export default function Home(){
  const [menu,setMenu]=useState(false);
  const [active,setActive]=useState(0);

  return (
    <>
      <header className="nav">
        <div className="wrap navin">
          <a className="logo" href="#top">PRIYANKA<span>.</span></a>
          <button className="hamb" onClick={()=>setMenu(!menu)} aria-label="Open navigation">☰</button>
          <nav className={menu?"open":""}>
            <a href="#work" onClick={()=>setMenu(false)}>Work</a>
            <a href="#systems" onClick={()=>setMenu(false)}>Systems</a>
            <a href="#stack" onClick={()=>setMenu(false)}>Stack</a>
            <a href="#writing" onClick={()=>setMenu(false)}>Writing</a>
            <a href="#contact" onClick={()=>setMenu(false)}>Contact</a>
          </nav>
          <a className="navResume" href="/Priyanka_Soni_Final_Resume.pdf" download>Resume ↗</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <NetworkCanvas/>
          <div className="glow g1"/><div className="glow g2"/>
          <div className="wrap heroInner">
            <div className="status"><i/> Software Engineer · Backend & Distributed Systems</div>
            <h1>I build systems<br/>that <em>keep moving.</em></h1>
            <p className="heroText">Java · Spring Boot · Kafka · AWS — engineering microservices, event-driven workflows and distributed order-processing systems across e-commerce, healthcare and advertising.</p>
            <div className="buttons">
              <a className="primary" href="#work">Explore my work ↓</a>
              <a className="secondary" href={`mailto:${email}?subject=Hello%20Priyanka`}>Let's connect ↗</a>
              <a className="secondary" href={linkedinUrl} target="_blank">LinkedIn ↗</a>
            </div>
            <div className="stats">
              {[["4+","years backend experience"],["10+","microservices"],["400+","REST APIs"],["5+","data technologies"]].map(([n,l])=><div className="stat" key={n}><b>{n}</b><span>{l}</span></div>)}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="wrap">
            <div className="eyebrow">01 / Selected work</div>
            <h2>Business complexity,<br/><span>engineered into systems.</span></h2>
            <p className="lead">A backend-focused journey across e-commerce order processing, healthcare advertising platforms and cloud-native applications.</p>

            <div className="timeline">
              {roles.map((r,i)=>
                <article className={`role ${active===i?"active":""}`} key={r.company} onClick={()=>setActive(i)}>
                  <div className="roleDot">{String(i+1).padStart(2,"0")}</div>
                  <div className="roleBody">
                    <div className="roleHead"><div><h3>{r.title}</h3><strong>{r.company}</strong></div><span>{r.date}</span></div>
                    <ul>{r.bullets.map(b=><li key={b}>{b}</li>)}</ul>
                    <div className="tags">{r.tags.map(t=><span key={t}>{t}</span>)}</div>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>

        <section id="systems" className="section darkSection">
          <div className="wrap">
            <div className="eyebrow">02 / Systems thinking</div>
            <h2>See the architecture,<br/><span>not just the job title.</span></h2>
            <div className="systemGrid">
              <div className="architecture card">
                <div className="cardTitle">EVENT-DRIVEN ORDER FLOW <span>LIVE CONCEPT</span></div>
                <div className="flow">
                  {["OMS","MQ / Kafka","Processor","Release","Aurora"].map((x,i)=><div className="flowItem" key={x}><div className="node">{x}</div>{i<4&&<b>→</b>}</div>)}
                </div>
                <p>Independent services communicate through events and asynchronous processing, keeping workflows scalable and easier to evolve.</p>
              </div>
              <div className="card principles">
                <div className="cardTitle">ENGINEERING TOOLBOX</div>
                <div className="pillGrid">{["Microservices","Event-driven","CQRS","SAGA","Circuit Breaker","Chain of Responsibility","RBAC","Caching"].map(x=><span key={x}>{x}</span>)}</div>
                <p>Clear boundaries, reliable communication, observable workflows and business logic that can evolve.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="wrap">
            <div className="eyebrow">03 / Technology radar</div>
            <h2>The tools behind<br/><span>the systems.</span></h2>
            <div className="stackGrid">{stack.map(([icon,title,desc])=><div className="stackCard" key={title}><div className="stackIcon">{icon}</div><h3>{title}</h3><p>{desc}</p></div>)}</div>
          </div>
        </section>

        <section id="writing" className="section writing">
          <div className="wrap">
            <div className="eyebrow">04 / Writing & learning</div>
            <div className="writingHead">
              <div><h2>I don't just build.<br/><span>I explain.</span></h2><p className="lead">Technical stories on distributed systems, backend engineering and concepts worth making simpler.</p></div>
              <a className="primary" href={mediumUrl} target="_blank">Explore all my stories ↗</a>
            </div>
            <a className="mediumCard" href={mediumUrl} target="_blank">
              <div className="mediumMark">M</div>
              <div><div className="mini">MEDIUM · 10+ STORIES</div><h3>Read my complete Medium profile</h3><p>Explore my collection of technical stories, explainers and engineering learnings.</p></div>
              <div className="bigArrow">↗</div>
            </a>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="wrap">
            <div className="contact">
              <div className="eyebrow">05 / Let's build</div>
              <h2>Have a system<br/><span>worth solving?</span></h2>
              <p>Hiring for backend engineering, discussing distributed systems, or simply want to connect?</p>
              <div className="buttons center">
                <a className="primary" href={`mailto:${email}?subject=Hello%20Priyanka`}>Email me ↗</a>
                <a className="secondary" href={linkedinUrl} target="_blank">LinkedIn ↗</a>
                <a className="secondary" href="/Priyanka_Soni_Final_Resume.pdf" download>Download resume ↓</a>
              </div>
              <small>{email}</small>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="wrap foot"><span>© 2026 Priyanka Soni</span><span>Java · Spring Boot · Kafka · AWS</span></div></footer>
    </>
  )
}
