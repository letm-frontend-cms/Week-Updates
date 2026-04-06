<script>
  const stats = [
    { value: '50+', label: 'Courses' },
    { value: '10K+', label: 'Students' },
    { value: '95%', label: 'Satisfaction' },
    { value: '24/7', label: 'Access' }
  ];
</script>

<section class="border-y border-white/5 bg-[#070311] py-12 sm:py-16">
  <div
    class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:px-6 md:grid-cols-4 md:gap-10"
  >
    {#each stats as stat}
      <div>
        <h2 class="text-3xl font-bold text-violet-400 sm:text-4xl md:text-5xl">
          {stat.value}
        </h2>

        <p class="mt-2 text-sm text-gray-400 sm:text-base">
          {stat.label}
        </p>
      </div>
    {/each}
  </div>
</section>