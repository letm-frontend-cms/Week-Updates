<script>
  import { BookOpen, Brain, BarChart3, Newspaper } from 'lucide-svelte';

  const features = [
    {
      title: 'Curated Courses',
      description: 'Industry-relevant courses designed for the next generation of developers.',
      icon: BookOpen
    },
    {
      title: 'Smart Assessments',
      description: 'Test your knowledge with adaptive quizzes and track your progress.',
      icon: Brain
    },
    {
      title: 'Growth Tracking',
      description: 'Visualize your learning journey with detailed analytics and insights.',
      icon: BarChart3
    },
    {
      title: 'Tech Updates',
      description: 'Stay ahead with curated blogs and the latest industry news.',
      icon: Newspaper
    }
  ];
</script>

<section class="py-16 sm:py-20 lg:py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="mb-10 text-center sm:mb-14">
      <h2 class="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
        Everything you need to
        <span class="text-violet-400"> level up</span>
      </h2>

      <p class="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
        A complete ecosystem for students who want to stay ahead of the curve.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
      {#each features as feature}
        <div
          class="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.18)] sm:p-7"
        >
          <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 sm:mb-6 sm:h-14 sm:w-14">
            <svelte:component this={feature.icon} class="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </div>

          <h3 class="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">{feature.title}</h3>

          <p class="text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>