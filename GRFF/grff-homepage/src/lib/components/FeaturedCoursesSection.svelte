<script>
  import { ChevronLeft, ChevronRight, Play } from 'lucide-svelte';

  const courses = [
    {
      title: 'Full-Stack AI with Python',
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
      category: 'AI & Python'
    },
    {
      title: 'Complete React and NextJS',
      image:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80',
      category: 'Frontend'
    },
    {
      title: 'Node.js Beginner to Advance',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
      category: 'Backend'
    },
    {
      title: 'Docker and DevOps Essentials',
      image:
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=80',
      category: 'DevOps'
    }
  ];

  let scrollContainer;

  function scrollLeft() {
    scrollContainer?.scrollBy({ left: -320, behavior: 'smooth' });
  }

  function scrollRight() {
    scrollContainer?.scrollBy({ left: 320, behavior: 'smooth' });
  }
</script>

<section class="relative py-16 sm:py-20 lg:py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="mb-8 flex flex-col gap-6 sm:mb-10 md:flex-row md:items-start md:justify-between">
      <div class="max-w-3xl">
        <p class="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-300 sm:text-sm">
          Featured Courses
        </p>

        <h2 class="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Learn with premium
          <span class="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            course collections
          </span>
        </h2>

        <p class="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          Explore curated learning paths designed to help students and developers build real-world
          skills with modern technologies.
        </p>
      </div>

      <div class="hidden items-center gap-3 md:flex">
        <button
          on:click={scrollLeft}
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-violet-500/40 hover:bg-white/10 lg:h-12 lg:w-12"
          aria-label="Scroll left"
        >
          <ChevronLeft class="h-5 w-5" />
        </button>

        <button
          on:click={scrollRight}
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-violet-500/40 hover:bg-white/10 lg:h-12 lg:w-12"
          aria-label="Scroll right"
        >
          <ChevronRight class="h-5 w-5" />
        </button>
      </div>
    </div>

    <div
      bind:this={scrollContainer}
      class="flex gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
    >
      {#each courses as course}
        <article
          class="group min-w-[260px] max-w-[260px] rounded-3xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.16)] sm:min-w-[290px] sm:max-w-[290px] md:min-w-[320px] md:max-w-[320px] lg:min-w-[340px] lg:max-w-[340px]"
        >
          <div class="relative overflow-hidden rounded-2xl">
            <img
              src={course.image}
              alt={course.title}
              class="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52 lg:h-56"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            <div
              class="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] text-violet-200 backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:text-xs"
            >
              {course.category}
            </div>

            <button
              class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-violet-500 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
              aria-label="Play course"
            >
              <Play class="h-4 w-4 fill-white" />
            </button>
          </div>

          <div class="px-1 pb-1 pt-4 sm:px-2 sm:pb-2">
            <h3 class="text-lg font-semibold text-white sm:text-xl">{course.title}</h3>

            <p class="mt-2 text-sm leading-6 text-gray-400">
              Master practical concepts with structured lessons and project-based learning.
            </p>

            <div class="mt-5 flex items-center justify-between">
              <span class="text-sm text-violet-300">View Course</span>
              <span class="text-sm text-gray-500">4.8 ★</span>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>