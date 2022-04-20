@props(['disabled' => false])

<input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => 'rounded-md shadow-sm border-gray-300 focus:border-espresso focus:transparent focus:ring-transparent focus:ring-opacity-50']) !!}>
