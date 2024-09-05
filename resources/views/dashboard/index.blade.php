@section('title', __('Dashboard'))
@extends('dashboard.layout')
@section('content')
  <section class="flex flex-col gap-5">
    <h3 class="text-3xl font-bold tracking-tight">{{ __('Dashboard') }}</h3>
    <a href="https://discord.gg/uPhACfp4PE" target="_blank">
      <div class="flex items-start gap-3 rounded-md bg-gray-600 p-3 text-white transition hover:bg-gray-700">
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <path
            d="M18.654 6.368a15.87 15.87 0 0 0-3.908-1.213.06.06 0 0 0-.062.03c-.17.3-.357.693-.487 1a14.628 14.628 0 0 0-4.39 0 9.911 9.911 0 0 0-.494-1 .061.061 0 0 0-.063-.03c-1.35.233-2.664.64-3.908 1.213a.05.05 0 0 0-.025.022c-2.49 3.719-3.172 7.346-2.837 10.928a.068.068 0 0 0 .025.045 15.936 15.936 0 0 0 4.794 2.424.06.06 0 0 0 .067-.023c.37-.504.699-1.036.982-1.595a.06.06 0 0 0-.034-.084 10.65 10.65 0 0 1-1.497-.714.06.06 0 0 1-.024-.08.06.06 0 0 1 .018-.022c.1-.075.201-.155.297-.234a.06.06 0 0 1 .061-.008c3.143 1.435 6.545 1.435 9.65 0a.062.062 0 0 1 .033-.005.061.061 0 0 1 .03.013c.096.08.197.159.298.234a.06.06 0 0 1 .016.081.062.062 0 0 1-.021.021c-.479.28-.98.518-1.499.713a.06.06 0 0 0-.032.085c.288.558.618 1.09.98 1.595a.06.06 0 0 0 .067.023 15.885 15.885 0 0 0 4.802-2.424.06.06 0 0 0 .025-.045c.4-4.14-.671-7.738-2.84-10.927a.04.04 0 0 0-.024-.023Zm-9.837 8.769c-.947 0-1.726-.87-1.726-1.935 0-1.066.765-1.935 1.726-1.935.968 0 1.74.876 1.726 1.935 0 1.066-.765 1.935-1.726 1.935Zm6.38 0c-.946 0-1.726-.87-1.726-1.935 0-1.066.764-1.935 1.725-1.935.969 0 1.741.876 1.726 1.935 0 1.066-.757 1.935-1.726 1.935Z">
          </path>
        </svg>
        <div class="flex flex-col">
          <h3 class="text-lg font-semibold">{{ __('Join our community!') }}</h3>
          <p class="text-white text-opacity-90">
            {{ __('Stay Connected with Us on Discord - Get the Latest Updates, Discuss Bugs, and Engage in the Project Discussions!') }}</p>
        </div>
      </div>
    </a>
    @can('see_stats')
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <x-dashboard-card heading="{{ __('Total Mangas') }}" value="{{ $mangas }}" percentage="{{ $mangasPercentage }}">
          <x-icons.list class="h-5 w-5 text-gray-500" />
        </x-dashboard-card>

        <x-dashboard-card heading="{{ __('Manga Chapters') }}" value="{{ $chapters }}" percentage="{{ $chaptersPercentage }}">
          <x-icons.piechart class="h-5 w-5 text-gray-500" />
        </x-dashboard-card>

        <x-dashboard-card heading="{{ __('Total Views') }}" value="{{ $mangasViews + $chaptersViews }}" percentage="{{ $viewsPercentage }}">
          <x-icons.increase class="h-5 w-5 text-gray-500" />
        </x-dashboard-card>

        <x-dashboard-card heading="{{ __('Total Members') }}" value="{{ $users }}" percentage="{{ $membersPercentage }}">
          <x-icons.members class="h-5 w-5 text-gray-500" />
        </x-dashboard-card>
      </div>
    @endcan
  </section>
@endsection
