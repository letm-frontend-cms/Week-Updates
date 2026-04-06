<script>
  import { House, BookOpen, FileText, User, Menu, X } from 'lucide-svelte';

  let isOpen = false;

  const navItems = [
    { label: 'Home', icon: House, active: true },
    { label: 'Courses', icon: BookOpen, active: false },
    { label: 'Blogs', icon: FileText, active: false },
    { label: 'Profile', icon: User, active: false }
  ];
</script>

<nav class="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0614]/90 backdrop-blur-md">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
    
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <div class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 font-bold text-white sm:h-10 sm:w-10">
        G
      </div>
      <span class="text-lg font-bold text-violet-300 sm:text-xl">GRFF</span>
    </div>

    <!-- Desktop Nav -->
    <div class="hidden items-center gap-4 md:flex">
      {#each navItems as item}
        <a
          href="/"
          class={`flex items-center gap-2 rounded-xl px-4 py-2 transition ${
            item.active
              ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
              : 'text-gray-300 hover:bg-white/5 hover:text-white'
          }`}
        >
          <svelte:component this={item.icon} class="h-4 w-4" />
          <span>{item.label}</span>
        </a>
      {/each}
    </div>

    <!-- Desktop Button -->
    <div class="hidden md:block">
      <button class="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg sm:px-6 sm:text-base">
        Login
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <button
      class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle menu"
    >
      {#if isOpen}
        <X class="h-5 w-5" />
      {:else}
        <Menu class="h-5 w-5" />
      {/if}
    </button>
  </div>

  <!-- Mobile Dropdown -->
  {#if isOpen}
    <div class="border-t border-white/10 px-4 py-4 md:hidden">
      <div class="flex flex-col gap-3">
        {#each navItems as item}
          <a
            href="/"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
          >
            <svelte:component this={item.icon} class="h-4 w-4" />
            <span>{item.label}</span>
          </a>
        {/each}

        <button class="mt-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-3 font-medium text-white shadow-lg">
          Login
        </button>
      </div>
    </div>
  {/if}
</nav>