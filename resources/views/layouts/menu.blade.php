@foreach(config('menu') as $menuItem)

    @if(in_array(auth()->user()->role_id, $menuItem['allowed_roles']))
        <a href="{{route($menuItem['route_name'])}}" class="{{ (request()->route()->getName() === $menuItem['route_name']) ? 'bg-gray-200 text-gray-900' : 'text-gray-600' }}  group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md" aria-current="page">
            <svg class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {!! $menuItem['icon_path']!!}
            </svg>
            {{$menuItem['title']}}
        </a>
    @endif

@endforeach
