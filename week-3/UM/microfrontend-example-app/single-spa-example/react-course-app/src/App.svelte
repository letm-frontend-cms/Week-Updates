<script>
  import { navigateToUrl } from "single-spa";

  const chapters = [
    "Introduction to React",
    "Components and Props",
    "State and Lifecycle",
    "Hooks",
    "Context API",
    "React Router",
    "Performance Optimization",
    "Testing React Apps"
  ];
</script>

<style>
  section {
    min-height: 100vh;
    background: #f5f5f5;
    padding: 40px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  .back-btn {
    padding: 8px 16px;
    margin-bottom: 24px;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    color: #666;
  }
  .card {
    background: white;
    padding: 32px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    margin-bottom: 24px;
  }
  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
  }
  .description {
    font-size: 16px;
    color: #666;
    margin-bottom: 24px;
  }
  .buy-btn {
    padding: 12px 32px;
    background: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .buy-btn:hover {
    background: #0052a3;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 16px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
  }
  li:last-child {
    border-bottom: none;
  }
  .chapter-num {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: #f0f0f0;
    border-radius: 50%;
    text-align: center;
    line-height: 32px;
    margin-right: 16px;
    font-size: 14px;
    font-weight: 600;
    color: #666;
  }
  .chapter-title {
    font-size: 16px;
    color: #1a1a1a;
  }
</style>

<section>
  <div class="container">
    <button class="back-btn" on:click={() => navigateToUrl("/")}>
      ← Back to Courses
    </button>
    
    <div class="card">
      <h1>React Course</h1>
      <p class="description">Master frontend development with React framework</p>
      <button class="buy-btn">Buy Now - $49</button>
    </div>

    <div class="card">
      <h2>Course Chapters</h2>
      <ul>
        {#each chapters as chapter, index}
          <li>
            <span class="chapter-num">{index + 1}</span>
            <span class="chapter-title">{chapter}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
