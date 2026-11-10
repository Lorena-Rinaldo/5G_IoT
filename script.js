/* ==========================================================================
   5G & IoT DIGITAL POSTER - GSAP INTERACTIVE LOGIC & SIMULATORS
   Pesquisa: Isabelly Ferreira de Lima e Lorena Rinaldo Moreira
   Fontes: IBM, Amazon Web Services
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAudioSynth();
  initBackgroundCanvas();
  initGsapAnimations();
  initPhone3DTilt();
  initSpeedTestSimulator();
  initIndustrialIoTSimulator();
  initRadioWaveScrollbar();
  initSatelliteSimulator();
  initPosterControls();
});

/* --------------------------------------------------------------------------
   1. SOUND SYNTHESIZER (Web Audio API - No external audio files needed)
   -------------------------------------------------------------------------- */
let audioCtx = null;
let soundEnabled = true;

function initAudioSynth() {
  const toggleBtn = document.getElementById('sound-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    toggleBtn.classList.toggle('opacity-50', !soundEnabled);
    const label = toggleBtn.querySelector('.sound-label');
    if (label) label.textContent = soundEnabled ? 'Áudio: ON' : 'Áudio: OFF';
    if (soundEnabled) playTechBeep(880, 0.08);
  });
}

function playTechBeep(freq = 600, duration = 0.05, type = 'sine') {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context may require user interaction first
  }
}

/* --------------------------------------------------------------------------
   2. BACKGROUND CYBER PARTICLES & 5G WAVE NODES CANVAS
   -------------------------------------------------------------------------- */
function initBackgroundCanvas() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 42;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.documentElement.scrollHeight || window.innerHeight * 3;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.4 + 0.2;
      this.color = Math.random() > 0.5 ? '#7AE4E4' : '#59DDDD';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#59DDDD';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Connect nearby nodes with 5G cyan lines
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#59DDDD';
          ctx.globalAlpha = (1 - dist / 130) * 0.18;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* --------------------------------------------------------------------------
   3. GSAP SCROLL & HERO ANIMATIONS
   -------------------------------------------------------------------------- */
function initGsapAnimations() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero title text reveal
  gsap.from('.hero-badge', {
    opacity: 0,
    y: -25,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.hero-title-line', {
    opacity: 0,
    y: 35,
    stagger: 0.18,
    duration: 1.2,
    ease: 'power4.out',
    delay: 0.2
  });

  gsap.from('.hero-author-badge', {
    opacity: 0,
    scale: 0.85,
    duration: 1,
    ease: 'back.out(1.7)',
    delay: 0.6
  });

  // Garantir que todos os itens estejam 100% visíveis imediatamente
  const allFadeItems = document.querySelectorAll('.fade-up-item');
  allFadeItems.forEach(item => {
    item.style.opacity = '1';
    item.style.visibility = 'visible';
  });

  // Pulse animation on 5G wave emitter
  gsap.to('.wave-emitter-core', {
    scale: 1.15,
    boxShadow: '0 0 35px #B2FFFF, 0 0 70px #59DDDD',
    duration: 1.6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
}

/* --------------------------------------------------------------------------
   4. 3D INTERACTIVE SMARTPHONE (100% PLANAR & ACESSÍVEL PARA CLIQUES)
   -------------------------------------------------------------------------- */
function initPhone3DTilt() {
  const container = document.getElementById('phone-container');
  const phone = document.getElementById('phone-mockup');
  if (!container || !phone) return;

  // Garante que o telefone permaneça sempre plano e totalmente clicável (sem distorções que ocultem botões)
  if (typeof gsap !== 'undefined') {
    gsap.set(phone, { rotateX: 0, rotateY: 0, z: 0, transformPerspective: 0 });
  }

  container.addEventListener('mouseenter', () => {
    if (typeof gsap !== 'undefined') {
      gsap.to(phone, { scale: 1.015, duration: 0.3, ease: 'power1.out' });
    }
  });

  container.addEventListener('mouseleave', () => {
    if (typeof gsap !== 'undefined') {
      gsap.to(phone, { scale: 1, duration: 0.3, ease: 'power1.out' });
    }
  });
}

/* --------------------------------------------------------------------------
   5. INTERACTIVE 4G VS 5G SPEED TEST SIMULATOR (DISPARADOR TOTALMENTE FUNCIONAL)
   -------------------------------------------------------------------------- */
let isSpeedTestRunning = false;

window.run5GSpeedTest = function() {
  if (isSpeedTestRunning) return;
  isSpeedTestRunning = true;

  const btnRunTest = document.getElementById('btn-run-speed-test');
  const btnRunTestExt = document.getElementById('btn-run-speed-test-external');
  const needle4G = document.getElementById('needle-4g');
  const needle5G = document.getElementById('needle-5g');
  const speedVal4G = document.getElementById('val-speed-4g');
  const speedVal5G = document.getElementById('val-speed-5g');
  const latencyVal4G = document.getElementById('val-latency-4g');
  const latencyVal5G = document.getElementById('val-latency-5g');
  const statusMsg = document.getElementById('speedtest-status');

  playTechBeep(540, 0.1);

  if (btnRunTest) {
    btnRunTest.disabled = true;
    btnRunTest.classList.add('opacity-75', 'cursor-wait');
    const label = btnRunTest.querySelector('span');
    if (label) label.textContent = 'Medindo Rede...';
  }
  if (btnRunTestExt) {
    btnRunTestExt.disabled = true;
    btnRunTestExt.classList.add('opacity-75', 'cursor-wait');
    const labelExt = btnRunTestExt.querySelector('span');
    if (labelExt) labelExt.textContent = 'Medindo Rede...';
  }

  if (statusMsg) {
    statusMsg.innerHTML = '<span class="text-[#B2FFFF] animate-pulse font-bold">Transmitindo pacotes 4G vs 5G...</span>';
  }

  // Reset needles
  if (needle4G) needle4G.style.transform = 'rotate(-90deg)';
  if (needle5G) needle5G.style.transform = 'rotate(-90deg)';
  if (speedVal4G) speedVal4G.textContent = 'Medindo...';
  if (speedVal5G) speedVal5G.textContent = 'Medindo...';

  // Som contínuo de oscilador de dados
  let count = 0;
  const interval = setInterval(() => {
    count += 50;
    playTechBeep(650 + count * 2, 0.03, 'triangle');
    if (count >= 1000) clearInterval(interval);
  }, 100);

  setTimeout(() => {
    // 4G Result: 450 Mbps, 50ms latency (exato da pesquisa)
    if (needle4G) needle4G.style.transform = 'rotate(-25deg)';
    if (speedVal4G) speedVal4G.textContent = '450 Mbps';
    if (latencyVal4G) latencyVal4G.textContent = '50 ms';
  }, 500);

  setTimeout(() => {
    // 5G Result: 10 Gbps (10.000 Mbps), 1ms latency (exato da pesquisa)
    if (needle5G) needle5G.style.transform = 'rotate(78deg)';
    if (speedVal5G) speedVal5G.textContent = '10 Gbps+';
    if (latencyVal5G) latencyVal5G.textContent = '1 ms';
    playTechBeep(1250, 0.25, 'sine');

    if (statusMsg) {
      statusMsg.innerHTML = '<span class="text-[#B2FFFF] font-bold">5G Concluído:</span> 22x mais veloz e latência 50x menor que o 4G!';
    }

    if (btnRunTest) {
      btnRunTest.disabled = false;
      btnRunTest.classList.remove('opacity-75', 'cursor-wait');
      const label = btnRunTest.querySelector('span');
      if (label) label.textContent = 'Testar 4G vs 5G';
    }
    if (btnRunTestExt) {
      btnRunTestExt.disabled = false;
      btnRunTestExt.classList.remove('opacity-75', 'cursor-wait');
      const labelExt = btnRunTestExt.querySelector('span');
      if (labelExt) labelExt.textContent = 'Executar Teste 4G vs 5G';
    }
    isSpeedTestRunning = false;
  }, 1100);
};

function initSpeedTestSimulator() {
  const btnRunTest = document.getElementById('btn-run-speed-test');
  const btnRunTestExt = document.getElementById('btn-run-speed-test-external');
  const cardSpeed = document.getElementById('speedtest-hud-card');

  if (btnRunTest) {
    btnRunTest.onclick = window.run5GSpeedTest;
    btnRunTest.addEventListener('click', (e) => {
      e.stopPropagation();
      window.run5GSpeedTest();
    });
    btnRunTest.addEventListener('touchend', (e) => {
      e.preventDefault();
      window.run5GSpeedTest();
    });
  }

  if (btnRunTestExt) {
    btnRunTestExt.onclick = window.run5GSpeedTest;
    btnRunTestExt.addEventListener('click', (e) => {
      e.stopPropagation();
      window.run5GSpeedTest();
    });
  }

  if (cardSpeed) {
    cardSpeed.onclick = window.run5GSpeedTest;
    cardSpeed.addEventListener('click', () => {
      window.run5GSpeedTest();
    });
  }
}

/* --------------------------------------------------------------------------
   6. REAL APPLICATION DEMONSTRATION: INDUSTRIAL IoT + 5G + AI PREDICTIVE MAINTENANCE
   (Conforme descrito exatamente na pesquisa: detecção de anomalia, predição por IA e ação antes da falha)
   -------------------------------------------------------------------------- */
function initIndustrialIoTSimulator() {
  const btnTriggerFault = document.getElementById('btn-trigger-fault');
  const btnResetNormal = document.getElementById('btn-reset-normal');
  const machineVisual = document.getElementById('machine-twin-visual');
  const vibGauge = document.getElementById('sim-gauge-vib');
  const tempGauge = document.getElementById('sim-gauge-temp');
  const latencyDisplay = document.getElementById('sim-latency-display');
  const aiStatusCard = document.getElementById('sim-ai-status');
  const phoneAlertBanner = document.getElementById('phone-alert-banner');
  const packetLine = document.getElementById('sensor-packet-stream');

  if (!btnTriggerFault || !btnResetNormal) return;

  btnTriggerFault.addEventListener('click', () => {
    playTechBeep(440, 0.15, 'sawtooth');
    
    // Animate machine with vibration/alarm
    if (machineVisual) {
      machineVisual.classList.add('animate-shake');
      machineVisual.style.borderColor = '#ff6b6b';
      machineVisual.style.boxShadow = '0 0 35px rgba(255, 107, 107, 0.4)';
    }

    // Telemetry Spike
    if (vibGauge) {
      vibGauge.style.width = '88%';
      vibGauge.textContent = '9.4 mm/s (ANÔMALO)';
      vibGauge.className = 'bg-red-500 h-full rounded transition-all duration-500 text-xs text-white font-mono flex items-center px-2';
    }
    if (tempGauge) {
      tempGauge.style.width = '78%';
      tempGauge.textContent = '78°C (AQUECIMENTO)';
      tempGauge.className = 'bg-amber-400 h-full rounded transition-all duration-500 text-xs text-black font-mono flex items-center px-2';
    }

    // 5G Latency instant packet
    if (latencyDisplay) {
      latencyDisplay.innerHTML = '<span class="text-[#B2FFFF] font-bold">0.85 ms</span> (Rede 5G ativa)';
    }

    // Packet streaming animation
    if (packetLine) {
      packetLine.classList.add('active-burst');
    }

    // AI Analysis in real time
    if (aiStatusCard) {
      aiStatusCard.innerHTML = `
        <div class="flex items-center gap-2 text-amber-300 font-bold mb-1">
          <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          IA Analisando Padrões de Vibração...
        </div>
        <p class="text-xs text-gray-200">A Inteligência Artificial identificou assinatura espectral de microrachadura no rolamento primário. Previsão de colapso: em 48h sem intervenção.</p>
      `;
    }

    // Smartphone Alert Notification
    setTimeout(() => {
      playTechBeep(880, 0.2, 'square');
      if (phoneAlertBanner) {
        phoneAlertBanner.classList.remove('hidden');
        gsap.fromTo(phoneAlertBanner, 
          { y: -30, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }
        );
      }

      if (aiStatusCard) {
        aiStatusCard.innerHTML = `
          <div class="flex items-center gap-2 text-[#7AE4E4] font-bold mb-1">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-[#B2FFFF] animate-ping"></span>
            MANUTENÇÃO PREDITIVA AUTOMATIZADA ACIONADA
          </div>
          <p class="text-xs text-cyan-100">Ordem de serviço gerada via 5G para equipe técnica antes da parada da máquina. Evitou prejuízo de 14h de produção parada!</p>
        `;
      }
    }, 700);
  });

  btnResetNormal.addEventListener('click', () => {
    playTechBeep(700, 0.08);

    if (machineVisual) {
      machineVisual.classList.remove('animate-shake');
      machineVisual.style.borderColor = '#36C6C6';
      machineVisual.style.boxShadow = '0 0 20px rgba(54, 198, 198, 0.25)';
    }

    if (vibGauge) {
      vibGauge.style.width = '18%';
      vibGauge.textContent = '1.2 mm/s (Estável)';
      vibGauge.className = 'bg-[#36C6C6] h-full rounded transition-all duration-500 text-xs text-black font-mono flex items-center px-2 font-bold';
    }
    if (tempGauge) {
      tempGauge.style.width = '32%';
      tempGauge.textContent = '38°C (Normal)';
      tempGauge.className = 'bg-[#59DDDD] h-full rounded transition-all duration-500 text-xs text-black font-mono flex items-center px-2 font-bold';
    }

    if (latencyDisplay) {
      latencyDisplay.innerHTML = '<span class="text-[#7AE4E4]">1.0 ms</span> (Standby)';
    }

    if (packetLine) {
      packetLine.classList.remove('active-burst');
    }

    if (phoneAlertBanner) {
      phoneAlertBanner.classList.add('hidden');
    }

    if (aiStatusCard) {
      aiStatusCard.innerHTML = `
        <div class="flex items-center gap-2 text-[#B2FFFF] font-bold mb-1">
          <span class="w-2.5 h-2.5 rounded-full bg-[#7AE4E4]"></span>
          Sistema Operando em Conformidade
        </div>
        <p class="text-xs text-gray-300">Sensores transmitindo telemetria contínua via 5G para modelo preditivo em nuvem.</p>
      `;
    }
  });
}

/* --------------------------------------------------------------------------
   7. 5G RADIO WAVE SCROLLBAR & OSCILLATING SINE WAVE HUD
   (Efeito dinâmico de onda de rádio senoidal e medidor de espectro)
   -------------------------------------------------------------------------- */
function initRadioWaveScrollbar() {
  const track = document.getElementById('radio-track-container');
  const thumb = document.getElementById('radio-scroll-thumb');
  const sinePath = document.getElementById('sine-wave-path');
  const sinePathBg = document.getElementById('sine-wave-path-bg');
  const hudPercent = document.getElementById('scroll-percentage-hud');
  const btnTop = document.getElementById('btn-scroll-top');

  let phase = 0;
  let scrollVelocity = 0;
  let lastScrollY = window.scrollY;

  // Função para desenhar dinamicamente as ondas senoidais de rádio
  function renderSineWaves() {
    if (sinePath) {
      phase += 0.04 + Math.min(scrollVelocity * 0.005, 0.2);
      scrollVelocity *= 0.92; // desaceleração suave

      const height = 300;
      const width = 32;
      const midX = width / 2;
      const amplitude = 9;
      const wavelength = 32;

      // Onda Principal (#B2FFFF)
      const points = [];
      for (let y = 0; y <= height; y += 4) {
        const x = midX + Math.sin((y / wavelength) + phase) * amplitude;
        points.push(`${y === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y}`);
      }
      sinePath.setAttribute('d', points.join(' '));

      // Onda Harmônica Secundária (#36C6C6)
      if (sinePathBg) {
        const pointsBg = [];
        for (let y = 0; y <= height; y += 5) {
          const x = midX + Math.cos((y / (wavelength * 0.75)) - phase * 0.8) * (amplitude * 0.7);
          pointsBg.push(`${y === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y}`);
        }
        sinePathBg.setAttribute('d', pointsBg.join(' '));
      }
    }
    requestAnimationFrame(renderSineWaves);
  }
  renderSineWaves();

  // Atualização da posição do nó de rádio com base no scroll
  function updateScrollProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;

    const currentY = window.scrollY;
    scrollVelocity = Math.abs(currentY - lastScrollY);
    lastScrollY = currentY;

    const progress = Math.min(Math.max(currentY / totalHeight, 0), 1);

    if (track && thumb) {
      const trackH = track.clientHeight;
      const thumbY = progress * (trackH - 32) + 16;
      thumb.style.top = `${thumbY}px`;
    }

    if (hudPercent) {
      hudPercent.textContent = `${Math.round(progress * 100)}%`;
    }
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // Clique no trilho para navegar diretamente
  if (track) {
    track.addEventListener('click', (e) => {
      playTechBeep(750, 0.05);
      const rect = track.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const ratio = Math.min(Math.max(clickY / rect.height, 0), 1);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      window.scrollTo({
        top: ratio * totalHeight,
        behavior: 'smooth'
      });
    });
  }

  // Clique no botão emissor para voltar ao topo
  if (btnTop) {
    btnTop.addEventListener('click', () => {
      playTechBeep(880, 0.08);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* --------------------------------------------------------------------------
   8. SATELLITE TO EARTH & VICE-VERSA 5G SIMULATOR
   (Transmissão bidirecional orbital e enlace espacial com a Terra)
   -------------------------------------------------------------------------- */
function initSatelliteSimulator() {
  const triggerBtn = document.getElementById('btn-trigger-satellite-burst');
  const satUnit = document.getElementById('satellite-interactive-unit');
  const earthUnit = document.getElementById('earth-gateway-unit');
  const logBox = document.getElementById('satellite-burst-log');

  function triggerTransmissionBurst() {
    playTechBeep(980, 0.12, 'sawtooth');
    setTimeout(() => playTechBeep(1320, 0.18, 'sine'), 160);

    // Efeito de pulso e brilho no satélite e na terra
    if (satUnit && typeof gsap !== 'undefined') {
      gsap.fromTo(satUnit, 
        { scale: 1.15, filter: 'drop-shadow(0 0 30px #B2FFFF)' },
        { scale: 1, filter: 'drop-shadow(0 0 10px rgba(54,198,198,0.4))', duration: 0.8, ease: 'power2.out' }
      );
    }

    if (earthUnit && typeof gsap !== 'undefined') {
      gsap.fromTo(earthUnit,
        { scale: 1.18, filter: 'drop-shadow(0 0 25px #59DDDD)' },
        { scale: 1, filter: 'drop-shadow(0 0 0px transparent)', duration: 0.8, ease: 'power2.out' }
      );
    }

    // Exibir notificação de log da transmissão
    if (logBox) {
      logBox.classList.remove('hidden');
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(logBox,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.4)' }
        );
      }
    }
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', triggerTransmissionBurst);
  }
  if (satUnit) {
    satUnit.addEventListener('click', triggerTransmissionBurst);
  }
  if (earthUnit) {
    earthUnit.addEventListener('click', triggerTransmissionBurst);
  }
}

/* --------------------------------------------------------------------------
   9. POSTER CONTROLS (Fullscreen presentation, Print mode)
   -------------------------------------------------------------------------- */
function initPosterControls() {
  const fullscreenBtn = document.getElementById('btn-fullscreen');
  const printBtn = document.getElementById('btn-print');

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      playTechBeep(800, 0.05);
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.warn(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      playTechBeep(650, 0.05);
      window.print();
    });
  }
}
