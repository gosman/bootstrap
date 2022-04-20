<button {{ $attributes->merge(['type' => 'submit', 'class' => 'inline-flex items-center px-4 py-2 bg-espresso border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-espresso-light active:bg-espresso-light focus:outline-none focus:border-espresso-light focus:ring ring-espresso-light disabled:opacity-25 transition ease-in-out duration-150']) }}>
    {{ $slot }}
</button>
