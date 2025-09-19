<script>

    	import logo from '$lib/assets/logo.png';

  let email = '';
  let success = false;
  let error = '';
  let emailInputRef;

  async function joinBeta() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      emailInputRef.focus();
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (response.ok) {
        success = true;
        error = '';
        email = ''; // Clear the input on success
      } else {
        error = result.message;
        success = false;
      }
    } catch (err) {
      error = 'Failed to connect to the server. Please try again later.';
      success = false;
    }

    // Hide messages after 5 seconds
    setTimeout(() => {
      success = false;
      error = '';
    }, 5000);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      joinBeta();
    }
  }
</script>

<svelte:head>
  <title>Queglims - Built for Today's Professionals</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="animated-background">
  <div class="gradient-orb orb-1"></div>
  <div class="gradient-orb orb-2"></div>
</div>

<nav class="navbar">
  <div class="nav-content">
    <div class="logo-container">
      <img src={logo} alt="QueGlims Logo" class="logo-image" />
    </div>
  </div>
</nav>

<div class="container">
  <div class="content">
    <h1 class="main-title">Built for Today's Professionals</h1>

    <p class="description">
      We're creating tools that bring clarity, focus, and simplicity to the way
      professionals work. A smarter way to stay in control is on the way.
    </p>

    <div class="highlight">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="
          display: inline-block;
          margin-right: 8px;
          vertical-align: middle;
        "
      >
        <path
          d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
          fill="currentColor"
        />
        <path d="M5 16L6.5 19L8 16L6.5 13L5 16Z" fill="currentColor" />
        <path d="M16 16L17.5 19L19 16L17.5 13L16 16Z" fill="currentColor" />
      </svg>
      Launching Soon
    </div>

   <div class="beta-section">
  <p class="beta-text">Interested in joining the beta?</p>

  <div class="form-container">
    <input
      type="email"
      class="email-input"
      placeholder="Enter your email"
      bind:value={email}
      required
      bind:this={emailInputRef}
      on:keypress={handleKeyPress}
    />
    <button class="join-button" on:click={joinBeta}>Join Now</button>
  </div>

  {#if success}
    <div class="success-message">
      Thanks for your interest! We'll be in touch soon.
    </div>
  {:else if error}
    <div class="error-message">
      {error}
    </div>
  {/if}
</div>
  </div>
</div>

<style>
  /* All existing styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: "Inter", sans-serif;
    background-color: #ffffff;
    color: #151515;
    line-height: 1.6;
    position: relative;
    overflow-x: hidden;
  }

  .animated-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    animation: float 20s ease-in-out infinite;
  }

  .orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(10, 132, 255, 0.15) 0%,
      rgba(10, 132, 255, 0.05) 50%,
      transparent 100%
    );
    bottom: -100px;
    right: -100px;
    animation: float1 18s ease-in-out infinite;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(10, 132, 255, 0.15) 0%,
      rgba(10, 132, 255, 0.05) 50%,
      transparent 100%
    );
    bottom: -100px;
    left: -100px;
    animation: float2 25s ease-in-out infinite;
    animation-delay: -3s;
  }

  @keyframes float1 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    15% {
      transform: translate(-40px, -60px) rotate(45deg);
    }
    35% {
      transform: translate(25px, -20px) rotate(-30deg);
    }
    55% {
      transform: translate(-15px, 40px) rotate(90deg);
    }
    75% {
      transform: translate(50px, -35px) rotate(-60deg);
    }
    90% {
      transform: translate(-30px, 15px) rotate(120deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @keyframes float2 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    20% {
      transform: translate(35px, -45px) rotate(-75deg);
    }
    40% {
      transform: translate(-50px, 30px) rotate(150deg);
    }
    60% {
      transform: translate(20px, -55px) rotate(45deg);
    }
    80% {
      transform: translate(-25px, -10px) rotate(-120deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    padding: 1rem 2rem;
    z-index: 1000;
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .logo-container {
    display: flex;
    align-items: center;
  }
  
  /* Add these new styles for the image */
  .logo-image {
    height: 40px; /* Adjust as needed for your logo's height */
    width: auto;
    max-width: 100%;
  }

  .container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    padding-top: 6rem;
  }

  .content {
    max-width: 600px;
    text-align: center;
  }

  .main-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: #151515;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .description {
    font-size: 1.25rem;
    color: #151515;
    margin-bottom: 2rem;
    font-weight: 400;
    opacity: 0.8;
  }

  .highlight {
    display: inline-block;
    background-color: transparent;
    color: #0a84ff;
    border: 2px solid #0a84ff;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
  }

  .beta-section {
    margin-top: 1.5rem;
  }

  .beta-text {
    font-size: 1.125rem;
    color: #151515;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .form-container {
    display: flex;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
    align-items: center;
  }

  .email-input {
    flex: 1;
    padding: 1rem 1.25rem;
    border: 2px solid #e5e5e5;
    border-radius: 12px;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    background-color: #ffffff;
    color: #151515;
    transition: all 0.3s ease;
  }

  .email-input:focus {
    outline: none;
    border-color: #0a84ff;
    box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
  }

  .email-input::placeholder {
    color: #999;
  }

  .join-button {
    padding: 1rem 2rem;
    background-color: #0a84ff;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .join-button:hover {
    background-color: #0066cc;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3);
  }

  .join-button:active {
    transform: translateY(0);
  }

  .success-message {
    margin-top: 1rem;
    padding: 1rem;
    background-color: rgba(10, 132, 255, 0.1);
    border-radius: 8px;
    color: #0a84ff;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .main-title {
      font-size: 2.5rem;
    }

    .description {
      font-size: 1.125rem;
    }

    .form-container {
      flex-direction: column;
      max-width: 300px;
    }

    .email-input,
    .join-button {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 1rem;
    }

    .main-title {
      font-size: 2rem;
    }

    .description {
      font-size: 1rem;
    }
  }

   .error-message {
    margin-top: 1rem;
    padding: 1rem;
    background-color: rgba(255, 10, 10, 0.1);
    border-radius: 8px;
    color: #ff0a0a;
    font-weight: 500;
  }
</style>