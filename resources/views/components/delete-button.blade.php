<button {{ $attributes->merge(['type' => 'button', 'class' => 'delete-button inline-flex items-center px-4 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-400 active:bg-red-400-light focus:outline-none focus:border-red-400 focus:ring ring-red-400 disabled:opacity-25 transition ease-in-out duration-150']) }}>
    {{ $slot }}
</button>
